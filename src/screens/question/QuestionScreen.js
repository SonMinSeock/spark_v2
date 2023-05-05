import React, { useState } from "react";
import StepBar from "../../components/UI/StepBar";
import Button from "../../components/UI/Button";
import styled from "styled-components";
import FirstQuestion from "../../components/Questions/FirstQuestion";
import SecondQuestion from "../../components/Questions/SecondQuestion";
import ThirdQuestion from "../../components/Questions/ThirdQuestion";
import FourQuestion from "../../components/Questions/FourQuestion";
import FiveQuestion from "../../components/Questions/FiveQuestion";
import { useNavigate } from "react-router-dom";

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
`;

const QuestionScreen = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const navigator = useNavigate();

  let question;
  const maxStep = 5;

  const onNextStep = (maxStep) => {
    if (maxStep > currentStep) {
      setCurrentStep((prev) => prev + 1);
    } else if (maxStep === currentStep) {
      navigator("/share");
    }
  };

  const onBackStep = (point) => {
    if (currentStep > point) {
      const back = currentStep - point;
      setCurrentStep((prev) => prev - back);
    }
  };

  if (currentStep === 1) {
    question = <FirstQuestion />;
  } else if (currentStep === 2) {
    question = <SecondQuestion />;
  } else if (currentStep === 3) {
    question = <ThirdQuestion />;
  } else if (currentStep === 4) {
    question = <FourQuestion />;
  } else if (currentStep === maxStep) {
    question = <FiveQuestion />;
  }

  return (
    <React.Fragment>
      <StepBar
        currentStep={currentStep}
        maxStep={maxStep}
        onBackStep={onBackStep}
      />
      {question}
      <Footer>
        <Button style="fluid" onClick={() => onNextStep(maxStep)}>
          다음
        </Button>
      </Footer>
    </React.Fragment>
  );
};

export default QuestionScreen;
