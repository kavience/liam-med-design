import React, { useState } from 'react';
import Step1 from './create/step1';
import Step2 from './create/step2';
import Step3 from './create/step3';
import Steps from '../steps';
import './index.less';

export default () => {
  const [current, setCurrent] = useState(1);
  const [questions, setQuestions] = useState({});

  const handleChangeStep = (target: number) => {
    setCurrent(target);
  };

  const handlePreview = (questions: any) => {
    setQuestions(questions);
  };

  return (
    <div className="questionnaire">
      <Steps current={current} className="questionnaire-steps">
        <Steps.Step title="推荐问卷类型" />
        <Steps.Step title="编辑问卷" />
        <Steps.Step title="发布问卷" />
      </Steps>
      {current === 0 && <Step1 onChangeStep={handleChangeStep} />}
      {current === 1 && <Step2 onChangeStep={handleChangeStep} onPreview={handlePreview} />}
      {current === 2 && <Step3 onChangeStep={handleChangeStep} questions={questions} />}
    </div>
  );
};
