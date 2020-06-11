import React, { Component } from 'react';
import { List, Card, Button, Popconfirm } from 'antd';
import { PlusOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { get } from 'lodash';
import './step1.less';

export class Step1 extends Component {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {}

  handleSelect = (item: any) => () => {
    const { initQuestions } = this.props;
    initQuestions && initQuestions(get(item, 'questionnaire'));
  };

  handleNewTemplate = () => {
    const { initQuestions } = this.props;
    initQuestions && initQuestions({});
  };

  render() {
    const { templateList, onDeleteTemplate } = this.props;
    return (
      <div className="follow-up-step1">
        <h3 style={{ marginTop: 16, marginBottom: 16 }}>推荐模板</h3>
        <List
          rowKey="id"
          grid={{ gutter: 24, column: 5 }}
          dataSource={['', ...templateList]}
          renderItem={item =>
            item ? (
              <List.Item key={item.id}>
                <Card
                  hoverable
                  bodyStyle={{ paddingBottom: 20 }}
                  onClick={this.handleSelect(item)}
                  actions={[
                    <EditOutlined key="edit" />,
                    <DeleteOutlined
                      key="delete"
                      onClick={e => {
                        e.stopPropagation();
                        onDeleteTemplate && onDeleteTemplate(item);
                      }}
                    />,
                  ]}
                >
                  <Card.Meta style={{ cursor: 'pointer' }} title={item.title} description={item.hospital} />
                </Card>
              </List.Item>
            ) : (
              <List.Item>
                <Button type="dashed" className="follow-up-new-button" onClick={this.handleNewTemplate}>
                  <PlusOutlined />
                  新建模板
                </Button>
              </List.Item>
            )
          }
        />
      </div>
    );
  }
}

export default Step1;
