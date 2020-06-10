import React, { Fragment } from 'react';
import { Row, Col, Button, Input, Switch, InputNumber, Modal, Select, Checkbox, notification } from 'antd';
import { StarOutlined, BorderOutlined, CaretDownOutlined } from '@ant-design/icons';
import {
  isEmpty,
  map,
  get,
  indexOf,
  last,
  keys,
  toArray,
  concat,
  keyBy,
  isUndefined,
  filter,
  set,
  cloneDeep,
} from 'lodash';
import QuestionItem from './question-item';
import './step2.less';

const mockQuestions = [
  {
    type: 'radio',
    title: '你喜欢水果还是蔬菜',
    options: [
      {
        label: '水果',
      },
      {
        label: '蔬菜',
      },
    ],
  },
  {
    type: 'multiple',
    title: '你喜欢什么水果',
    logic: {
      bind: 0,
      selectOption: [0],
    },
    options: [
      {
        label: '苹果',
      },
      {
        label: '菠萝',
      },
      {
        label: '葡萄',
      },
    ],
  },
  {
    type: 'radio',
    title: '你会吃水果皮吗',
    logic: {
      bind: 1,
      selectOption: [0, 1, 2],
    },
    options: [
      {
        label: '会',
      },
      {
        label: '不会',
      },
    ],
  },
];

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
  state = {
    questions: mockQuestions, // 问题集合
    dragItemType: undefined, // 当前拖动的问题类型
    newQuestionIndex: undefined,
    activeQuestion: undefined,
    relationVisible: false,
    relationSelect: 0,
    relationBindOption: [],
  };

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

  /**
   * 点击按钮添加题目
   */
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
    const newQuestions = toArray(questions);
    newQuestions.splice(this.index, 0, get(toArray(this.generateQuestionByType(dragItemType)), '0'));
    this.setState({
      questions: keyBy(newQuestions, 'id'),
    });
  };

  handlePreview = () => {
    const { onChangeStep, onPreview } = this.props;
    const { questions } = this.state;
    onPreview && onPreview(questions);
    onChangeStep && onChangeStep(2);
  };

  handleQuestionClick = (activeQuestion: any) => {
    const { logic } = activeQuestion;

    this.setState({
      activeQuestion,
      relationSelect: Number(get(logic, 'bind')) + 1 || [],
      relationBindOption: get(logic, 'selectOption') || [],
    });
  };

  renderQuestionInput = question => {
    if (indexOf(['radio'], get(question, 'type')) > -1) {
      return map(get(question, 'options'), (option, index) => {
        return (
          <Input
            key={index}
            addonBefore={<CaretDownOutlined />}
            className=""
            value={get(option, 'label')}
            size="small"
          />
        );
      });
    }
    if (indexOf(['multiple'], get(question, 'type')) > -1) {
      return map(get(question, 'options'), (option, index) => {
        return <Input key={index} addonBefore={<BorderOutlined />} value={get(option, 'label')} size="small" />;
      });
    }
    if (indexOf(['dropdown'], get(question, 'type')) > -1) {
      return map(get(question, 'options'), (option, index) => {
        return <Input key={index} addonBefore={<CaretDownOutlined />} value={get(option, 'label')} size="small" />;
      });
    }
    if (indexOf(['completion'], get(question, 'type')) > -1) {
      return <Input className="question-step-two__panel-preview-middle__question-input" size="small" />;
    }
    if (indexOf(['descption'], get(question, 'type')) > -1) {
      return <Input className="question-step-two__panel-preview-middle__question-input" size="small" />;
    }
    if (indexOf(['star'], get(question, 'type')) > -1) {
      return (
        <div className="question-step-two__panel-preview-middle__question-input">
          <StarOutlined />
          <StarOutlined />
          <StarOutlined />
          <StarOutlined />
          <StarOutlined />
        </div>
      );
    }
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
          onQuestionItemDelete={index => {
            const newQuestions = cloneDeep(questions);
            const logicBindIds: any = [];
            map(questions, question => {
              get(question, 'logic.bind') && logicBindIds.push(get(question, 'logic.bind'));
            });
            if (indexOf(logicBindIds, index - 1) > -1) {
              notification.error({
                message: '删除错误',
                description: '该题有逻辑关联，无法删除',
              });
              return;
            }
            newQuestions.splice(index - 1, 1);
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
          {/* <div className="question-step-two__panel-func__item">
            <span>此题必答</span>
            <Switch></Switch>
          </div> */}
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
          {/* <div className="question-step-two__panel-func__item">
            <span>选项一</span>
            <InputNumber size="small" min={0} className="question-step-two__panel-func__item-btn" />
          </div>
          <div className="question-step-two__panel-func__item">
            <span>选项二</span>
            <InputNumber size="small" min={0} className="question-step-two__panel-func__item-btn" />
          </div> */}
        </div>
      )
    );
  };

  handleSaveRelation = () => {
    const { relationBindOption, relationSelect, questions, activeQuestion } = this.state;
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
      question => indexOf(['radio', 'dropdown', 'multiple'], get(activeQuestion, 'type')) > -1,
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
    const { questions } = this.state;

    return (
      <>
        <Row className="question-step-two__panel">
          <Col span={4}>{this.renderBtns()}</Col>
          <Col span={12} offset={1} className="question-step-two__panel-preview">
            <div className="question-step-two__panel-preview-top">
              <Input className="question-step-two__panel-preview-top__title" value="请填写问卷标题" />
              <Input
                className="question-step-two__panel-preview-top__desc"
                value="感谢您能抽出几分钟参加本问卷，现在让我们开始吧"
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
                <Button size="small" type="primary" className="question-step-two__panel-preview-bottom__btns-btn">
                  发布
                </Button>
                <Button
                  size="small"
                  className="question-step-two__panel-preview-bottom__btns-btn"
                  onClick={this.handlePreview}
                >
                  预览
                </Button>
              </div>
            </div>
          </Col>
          <Col span={6} offset={1}>
            {this.renderLogicEdit()}
          </Col>
        </Row>
        {this.renderModal()}
      </>
    );
  }
}
