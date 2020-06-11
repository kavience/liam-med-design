import React, { useState, useEffect } from 'react';
import Step1 from './create/step1';
import Step2 from './create/step2';
import Step3 from './create/step3';
import Steps from '../steps';
import './index.less';

interface IQuestionnaire {
  templateList?: any[];
  onDeleteTemplate?: any;
  onSaveTemplate?: any;
  onDeploy?: any;
}

export default (props: IQuestionnaire) => {
  const { templateList, onDeploy, onSaveTemplate, onDeleteTemplate } = props;
  const [current, setCurrent] = useState(0);
  const [data, setData] = useState({});

  const handleChangeStep = (target: number) => {
    setCurrent(target);
  };

  const handlePreview = (data: any) => {
    setData(data);
    handleChangeStep(2);
  };

  const handleInitQuestions = (questionnaire: any) => {
    setData(questionnaire);
    handleChangeStep(1);
  };

  return (
    <div className="questionnaire">
      <Steps current={current} className="questionnaire-steps">
        <Steps.Step title="推荐问卷类型" />
        <Steps.Step title="编辑问卷" />
        <Steps.Step title="发布问卷" />
      </Steps>
      {current === 0 && (
        <Step1
          onChangeStep={handleChangeStep}
          initQuestions={handleInitQuestions}
          templateList={templateList}
          onDeleteTemplate={() => {
            onDeleteTemplate && onDeleteTemplate();
          }}
        />
      )}
      {current === 1 && (
        <Step2
          onChangeStep={handleChangeStep}
          onPreview={handlePreview}
          onSaveTemplate={() => {
            onSaveTemplate && onSaveTemplate();
          }}
          onDeploy={() => {
            onDeploy && onDeploy();
          }}
          data={data}
        />
      )}
      {current === 2 && <Step3 onChangeStep={handleChangeStep} onDeploy={handleDeploy} data={data} />}
    </div>
  );
};
