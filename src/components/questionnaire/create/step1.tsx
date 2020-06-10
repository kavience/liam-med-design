import React, { Component } from 'react';
import { List, Card, Avatar, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './step1.less';
// import styles from './Step1.less';

const templateList = [
  {
    id: '11211132221',
    title: '妊娠高血压产后复诊提醒',
    hospital: '华侨医院',
    description: '自动发送复诊提醒 · 管理复诊结果',
  },
  {
    id: '11211142221',
    title: '高危复诊提醒',
    hospital: '华侨医院',
    description: '自动发送复诊提醒 · 管理复诊结果',
  },
  {
    id: '11211142244',
    title: '高危复诊提醒',
    hospital: '华侨医院',
    description: '自动发送复诊提醒 · 管理复诊结果',
  },
  {
    id: '11216112221',
    title: '产后42天复诊复诊提醒',
    hospital: '华侨医院',
    description: '自动发送复诊提醒 · 管理复诊结果',
  },
  {
    id: '1121611222331',
    title: '产后42天复诊复诊提醒',
    hospital: '华侨医院',
    description: '自动发送复诊提醒 · 管理复诊结果',
  },
  {
    id: '11211712221',
    title: '妊娠糖尿病产后复诊提醒',
    hospital: '华侨医院',
    description: '自动发送复诊提醒 · 管理复诊结果',
  },
];

export class Step1 extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  handleSelect = item => () => {
    console.log(item);
    // router.push('/followup-configuration/questionnaire/create/step2');
  };

  handleNewTemplate = () => {
    const { onChangeStep } = this.props;
    onChangeStep && onChangeStep(1);
  };

  render() {
    return (
      <div className="follow-up-step1">
        <h3 style={{ marginTop: 16, marginBottom: 16 }}>推荐模板</h3>
        <List
          rowKey="id"
          grid={{ gutter: 24, xl: 4, lg: 4, md: 3, sm: 2, xs: 1 }}
          dataSource={['', ...templateList]}
          renderItem={item =>
            item ? (
              <List.Item key={item.id}>
                <Card hoverable bodyStyle={{ paddingBottom: 20 }} onClick={this.handleSelect(item)}>
                  <Card.Meta
                    style={{ cursor: 'pointer' }}
                    title={item.title}
                    description={item.hospital}
                  />
                </Card>
              </List.Item>
            ) : (
              <List.Item>
                <Button
                  type="dashed"
                  className="follow-up-new-button"
                  onClick={this.handleNewTemplate}
                >
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
