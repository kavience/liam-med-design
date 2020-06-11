import React, { Fragment } from 'react';
import { Row, Col, Button, Input, Switch, Modal, Select, Checkbox, notification } from 'antd';
import { isEmpty, map, get, indexOf, last, keys, concat, keyBy, isUndefined, filter, set, cloneDeep } from 'lodash';
import QuestionItem from './question-item';
import './step2.less';

export const chooseArray = [
  {
    title: '单选题',
    value: 'radio',
  },
  {
    title: '多选题',
    value: 'multiple',
  },
  {
    title: '下拉题',
    value: 'dropdown',
  },
  {
    title: '填空题',
    value: 'completion',
  },
];

export const starArray = [
  {
    title: '打分题',
    value: 'star',
  },
];

export const descArray = [
  {
    title: '段落说明',
    value: 'descption',
  },
];

export const labelsArray = concat(chooseArray, starArray, descArray);
export const labelsArrayMapping = keyBy(labelsArray, 'value');

const btns = [
  {
    id: 1,
    title: '选择填空',
    value: chooseArray,
  },
  {
    id: 2,
    title: '评分题',
    value: starArray,
  },
  {
    id: 3,
    title: '文字说明',
    value: descArray,
  },
];

export default class Step2 extends React.Component {
  constructor(props: any) {
    super(props);
    const { data } = props;
    this.state = {
      questionsTitle: get(data, 'questionsTitle') || '',
      questionsDescription: get(data, 'questionsDescription') || '',
      questions: get(data, 'questions') || [],
      dragItemType: undefined,
      newQuestionIndex: undefined,
      activeQuestion: undefined,
      relationVisible: false,
      relationSelect: 0,
      relationBindOption: [],
    };
  }

  questionItemRefs = {};

  lastClientY = 0;

  index = 0;

  generateQuestionByType = type => {
    let question = undefined;
    switch (type) {
      case 'radio':
        question = {
          type,
          value: type,
          label: '单选题',
          title: '请输入题目标题',
          options: [
            {
              label: '选项一',
              value: 0,
            },
            {
              label: '选项二',
              value: 1,
            },
          ],
        };
        break;
      case 'multiple':
        question = {
          type,
          value: type,
          label: '多选题',
          title: '请输入题目标题',
          options: [
            {
              label: '选项一',
              value: 0,
            },
            {
              label: '选项二',
              value: 1,
            },
          ],
        };
        break;
      case 'dropdown':
        question = {
          type,
          label: '下拉题',
          value: type,
          title: '请输入题目标题',
          options: [
            {
              label: '选项一',
              value: 0,
            },
            {
              label: '选项二',
              value: 1,
            },
          ],
        };
        break;
      case 'completion':
        question = {
          value: type,
          type,
          label: '填空题',
          title: '请输入题目标题',
        };
        break;
      case 'star':
        question = {
          value: type,
          type,
          label: '打分题',
          title: '请输入题目标题',
        };
        break;
      case 'descption':
        question = {
          value: type,
          type,
          label: '段落说明',
          title: '请输入题目标题',
        };
        break;
    }
    return question;
  };

  handleBtnClick = type => () => {
    const { questions } = this.state;
    const lastItemRef = get(this.questionItemRefs, last(keys(this.questionItemRefs)));
    lastItemRef && lastItemRef.scrollIntoView({ behavior: 'smooth', block: 'center' });
    const question = this.generateQuestionByType(type);

    this.setState({
      questions: [...questions, question],
    });
  };

  handleChangeIndex = index => {
    this.index = index;
  };

  handleDragEnd = () => {
    const { questions, dragItemType } = this.state;
    const newQuestions = cloneDeep(questions);
    newQuestions.splice(this.index, 0, this.generateQuestionByType(dragItemType));
    map(newQuestions, (question, questionIndex: number) => {
      if (!isUndefined(get(question, 'logic.bind')) && questionIndex > this.index) {
        if (get(question, 'logic.bind') > this.index - 1) {
          set(question, 'logic.bind', get(question, 'logic.bind') + 1);
        }
      }
    });
    this.setState({
      questions: newQuestions,
    });
  };

  handleQuestionClick = (activeQuestion: any) => {
    const { logic } = activeQuestion;

    this.setState({
      activeQuestion,
      relationSelect: Number(get(logic, 'bind')) + 1 || [],
      relationBindOption: get(logic, 'selectOption') || [],
    });
  };

  renderQuestions = () => {
    const { questions } = this.state;
    return map(questions, (question, index) => {
      const lastQuestion = last(questions);
      return (
        <QuestionItem
          key={index + 1}
          index={index + 1}
          question={question}
          lastQuestion={lastQuestion}
          onChangeIndex={this.handleChangeIndex}
          onQuestionClick={this.handleQuestionClick}
          onQuestionItemEdit={(index, text) => {
            const newQuestions = cloneDeep(questions);
            set(newQuestions, `${index - 1}.title`, text);
            this.setState({
              questions: newQuestions,
            });
          }}
          onQuestionItemOptionEdit={(index, optionIndex, text) => {
            const newQuestions = cloneDeep(questions);
            set(newQuestions, `${index - 1}.options.${optionIndex}.label`, text);
            this.setState({
              questions: newQuestions,
            });
          }}
          onQuestionItemDelete={index => {
            const newQuestions = cloneDeep(questions);
            const logicBindIds: any = [];
            map(questions, question => {
              !isUndefined(get(question, 'logic.bind')) && logicBindIds.push(get(question, 'logic.bind'));
            });
            if (indexOf(logicBindIds, index - 1) > -1) {
              notification.error({
                message: '删除错误',
                description: '该题有逻辑关联，无法删除',
              });
              return;
            }
            newQuestions.splice(index - 1, 1);
            map(newQuestions, (question, questionIndex: number) => {
              if (!isUndefined(get(question, 'logic.bind')) && questionIndex > index - 1) {
                set(question, 'logic.bind', get(question, 'logic.bind') - 1);
              }
            });
            this.setState({
              questions: newQuestions,
            });
          }}
          onQuestionItemOptionsAdd={index => {
            const newQuestions = cloneDeep(questions);
            const options = get(newQuestions, `${index - 1}.options`) || [];
            set(newQuestions, 'options', options.push({ label: '新增选项' }));
            this.setState({
              questions: newQuestions,
            });
          }}
          onQuestionItemOptionsDelete={(index, optionIndex) => {
            const newQuestions = cloneDeep(questions);
            const options = get(newQuestions, `${index - 1}.options`);
            set(newQuestions, 'options', options.splice(optionIndex, 1));
            this.setState({
              questions: newQuestions,
            });
          }}
        />
      );
    });
  };

  renderBtns = () => {
    return (
      <div className="question-step-two__panel-question">
        <div className="question-step-two__panel-question-card">
          {map(btns, (btn, index) => {
            return (
              <div key={index}>
                <span className="question-step-two__panel-question-card__title">{get(btn, 'title')}</span>
                <div className="question-step-two__panel-question-card__btns">
                  {map(get(btn, 'value'), item => {
                    return (
                      <Button
                        key={get(item, 'value')}
                        size="small"
                        type="ghost"
                        className="question-step-two__panel-question-card__btns-btn"
                        draggable
                        onDragStart={() => {
                          this.setState({ dragItemType: get(item, 'value') });
                        }}
                        onDragEnd={this.handleDragEnd}
                        onClick={this.handleBtnClick(get(item, 'value'))}
                      >
                        {get(item, 'title')}
                      </Button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  renderLogicEdit = () => {
    const { activeQuestion } = this.state;
    return (
      !isUndefined(activeQuestion) && (
        <div className="question-step-two__panel-func">
          <div className="question-step-two__panel-func__title">题目{get(activeQuestion, 'index')}设置</div>
          <div className="question-step-two__panel-func__item">
            <span>此题必答</span>
            <Switch></Switch>
          </div>
          <div className="question-step-two__panel-func__item">
            <span>题目关联</span>
            <Button
              size="small"
              onClick={() => {
                this.setState({
                  relationVisible: true,
                });
              }}
            >
              设置
            </Button>
          </div>
        </div>
      )
    );
  };

  handleSaveRelation = () => {
    const { relationBindOption, relationSelect, questions, activeQuestion } = this.state;
    if (relationSelect < 1) {
      this.setState({
        relationVisible: false,
      });
      return;
    }
    const logic = {
      bind: relationSelect - 1,
      selectOption: relationBindOption,
    };
    const newQuestions = cloneDeep(questions);
    set(newQuestions, `${Number(get(activeQuestion, 'index')) - 1}.logic`, logic);
    this.setState({
      questions: newQuestions,
      relationVisible: false,
    });
  };

  renderModal = () => {
    const { relationVisible, relationSelect, activeQuestion, questions, relationBindOption } = this.state;
    const questionBefore = questions.slice(0, Number(get(activeQuestion, 'index')) - 1);
    const selectOptions = filter(
      questionBefore,
      question => indexOf(['radio', 'dropdown', 'multiple'], get(question, 'type')) > -1,
    );
    selectOptions.unshift({ title: '请选择关联的题目' } as any);
    const boxOptions = get(selectOptions, `${relationSelect}.options`);
    return (
      <Modal
        title="题目关联设置"
        visible={relationVisible}
        onOk={this.handleSaveRelation}
        onCancel={() => {
          this.setState({
            relationVisible: false,
          });
        }}
        okText="确认"
        cancelText="取消"
      >
        <div>
          <span>当前题目：</span>
          <span>{get(activeQuestion, 'title')}</span>
        </div>
        <div>
          <span>关联题目：</span>
          <Select
            style={{ width: 300 }}
            dropdownMatchSelectWidth={300}
            value={relationSelect}
            onChange={value => {
              this.setState({
                relationSelect: value,
                relationBindOption: [],
              });
            }}
          >
            {map(selectOptions, (option, index) => {
              return (
                <Select.Option key={index} value={index}>
                  {index === 0 ? get(option, 'title') : `${index}.${get(option, 'title')}`}
                </Select.Option>
              );
            })}
          </Select>
        </div>
        {relationSelect > 0 && (
          <>
            <div>当“关联题目”选择下面的选项：</div>
            <Checkbox.Group
              value={relationBindOption}
              onChange={data => {
                this.setState({
                  relationBindOption: data,
                });
              }}
            >
              {map(boxOptions, (option, index) => {
                return (
                  <Fragment key={index}>
                    <Checkbox key={index} value={index}>
                      {get(option, 'label')}
                    </Checkbox>
                    <br />
                  </Fragment>
                );
              })}
            </Checkbox.Group>
            <div>中的任意一个时，“当前题目”才出现</div>
          </>
        )}
      </Modal>
    );
  };

  render() {
    const { relationVisible, questions, questionsTitle, questionsDescription } = this.state;

    return (
      <>
        <Row className="question-step-two__panel">
          <Col span={4}>{this.renderBtns()}</Col>
          <Col span={12} offset={1} className="question-step-two__panel-preview">
            <div className="question-step-two__panel-preview-top">
              <Input
                className="question-step-two__panel-preview-top__title"
                value={questionsTitle}
                placeholder="请输入标题"
                onChange={e => {
                  this.setState({
                    questionsTitle: get(e, 'target.value'),
                  });
                }}
              />
              <Input.TextArea
                className="question-step-two__panel-preview-top__desc"
                value={questionsDescription}
                rows={3}
                placeholder="请输入描述"
                onChange={e => {
                  this.setState({
                    questionsDescription: get(e, 'target.value'),
                  });
                }}
              />
            </div>
            <div className="question-step-two__panel-preview-middle">
              {isEmpty(questions) ? (
                <div className="question-step-two__panel-preview-middle__start">点击题型 或者 将题型拖入此区域</div>
              ) : (
                this.renderQuestions()
              )}
            </div>
            <div className="question-step-two__panel-preview-bottom">
              <div className="question-step-two__panel-preview-bottom__title">
                <span>完成时显示</span>
              </div>
              <div>
                <Input.TextArea rows={5} defaultValue="感谢您的配合!" />
              </div>
              <div className="question-step-two__panel-preview-bottom__btns">
                <Button
                  className="question-step-two__panel-preview-bottom__btns-btn"
                  onClick={() => {
                    const { onChangeStep } = this.props;
                    onChangeStep && onChangeStep(0);
                  }}
                >
                  上一步
                </Button>
                <Button
                  className="question-step-two__panel-preview-bottom__btns-btn"
                  onClick={() => {
                    const { onSaveTemplate } = this.props;
                    onSaveTemplate &&
                      onSaveTemplate({
                        questions,
                        questionsTitle,
                        questionsDescription,
                      });
                  }}
                >
                  保存为模板
                </Button>
                <Button
                  className="question-step-two__panel-preview-bottom__btns-btn"
                  onClick={() => {
                    const { onPreview } = this.props;
                    const { questions, questionsTitle, questionsDescription } = this.state;
                    onPreview &&
                      onPreview({
                        questions,
                        questionsTitle,
                        questionsDescription,
                      });
                  }}
                >
                  预览
                </Button>
                <Button
                  onClick={() => {
                    const { onDeploy } = this.props;
                    onDeploy &&
                      onDeploy({
                        questions,
                        questionsTitle,
                        questionsDescription,
                      });
                  }}
                  type="primary"
                  className="question-step-two__panel-preview-bottom__btns-btn"
                >
                  发布
                </Button>
              </div>
            </div>
          </Col>
          <Col span={6} offset={1}>
            {!isEmpty(questions) && this.renderLogicEdit()}
          </Col>
        </Row>
        {relationVisible && this.renderModal()}
      </>
    );
  }
}
