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
  onCreateTemplate?: any;
  // onDeploy?: any;
}

export default (props: IQuestionnaire) => {
  const { templateList, onDeploy, onSaveTemplate, onCreateTemplate, onDeleteTemplate } = props;
  const [current, setCurrent] = useState(0);
  const [data, setData] = useState({});
  const [type, setType] = useState('create');

  const handleChangeStep = (target: number) => {
    setCurrent(target);
  };

  const handlePreview = (data: any) => {
    setData(data);
    handleChangeStep(2);
  };

  const handleInitQuestions = (type: 'create' | 'update', questionnaire: any) => {
    setData(questionnaire);
    setType(type);
    handleChangeStep(1);
  };

  return (
    <div className="questionnaire">
      <Steps current={current} className="questionnaire-steps">
        <Steps.Step title="选择问卷" />
        <Steps.Step title="编辑问卷" />
        <Steps.Step title="预览问卷" />
      </Steps>
      <div className="questionnaire-steps-content">
        {current === 0 && (
          <Step1
            initQuestions={handleInitQuestions}
            templateList={templateList}
            onDeleteTemplate={onDeleteTemplate}
            onCreate={onDeleteTemplate}
            onUpdate={onDeleteTemplate}
          />
        )}
        {current === 1 && (
          <Step2
            onChangeStep={handleChangeStep}
            onPreview={handlePreview}
            onSaveTemplate={onSaveTemplate}
            onCreateTemplate={onCreateTemplate}
            // onDeploy={onDeploy}
            type={type}
            data={data}
          />
        )}
        {current === 2 && <Step3 onChangeStep={handleChangeStep} onDeploy={onDeploy} data={data} />}
      </div>
    </div>
  );
};
