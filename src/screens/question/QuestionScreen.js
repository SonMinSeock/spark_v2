import React, { useState } from "react";
import StepBar from "../../components/UI/StepBar";
import Button from "../../components/UI/Button";
import styled from "styled-components";
import FirstQuestion from "../../components/Questions/FirstQuestion";
import SecondQuestion from "../../components/Questions/SecondQuestion";
import ThirdQuestion from "../../components/Questions/ThirdQuestion";
import FourQuestion from "../../components/Questions/FourQuestion";
import FiveQuestion from "../../components/Questions/FiveQuestion";
import { useLocation, useNavigate } from "react-router-dom";
import { dbService } from "../../db/firebase";
import { addDoc, collection } from "firebase/firestore";
import Privacy from "../../components/Questions/Privacy";

const QuestionScreen = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [hobys, setHobys] = useState();
  const [validate, setValidate] = useState(false);

  const navigator = useNavigate();
  const user = useLocation();

  let question;
  const maxStep = 6;

  const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 20%;
    margin-top: ${maxStep === currentStep ? "15px" : ""};
    button:nth-of-type(2) {
      margin-top: 10px;
      background-color: white;
      color: #65656d;
      border: 2px solid #007aff;
    }
  `;

  const onNextStep = async (maxStep, isPrivacy) => {
    if (maxStep > currentStep && validate === true) {
      setCurrentStep((prev) => prev + 1);
      console.log(validate);
      setValidate(false);
    } else if (maxStep === currentStep) {
      const taste = {
        ...hobys,
        createdAt: Date.now(),
        id: user.state.studentId,
        department: user.state.department,
        gender: user.state.gender,
        instagramId: user.state.instagramId,
        isPrivacy: isPrivacy,
      };
      await addDoc(collection(dbService, "taste"), taste);
      navigator("/share", { state: taste });
    }
  };

  const onValidate = (select) => {
    if (select === "") {
      setValidate(false);
    } else {
      setValidate(true);
    }
  };

  const onBackStep = (point) => {
    if (currentStep > point) {
      const back = currentStep - point;
      setCurrentStep((prev) => prev - back);
    }
  };

  const addHoby = (questionNumber, hoby) => {
    if (questionNumber === 1) {
      setHobys((prev) => ({ ...prev, travelCity: hoby }));
    } else if (questionNumber === 2) {
      setHobys((prev) => ({ ...prev, sports: hoby }));
    } else if (questionNumber === 3) {
      setHobys((prev) => ({ ...prev, movieGenre: hoby }));
    } else if (questionNumber === 4) {
      setHobys((prev) => ({ ...prev, communication: hoby }));
    } else if (questionNumber === 5) {
      setHobys((prev) => ({ ...prev, meeting: hoby }));
    }
  };

  if (currentStep === 1) {
    question = <FirstQuestion onAddHoby={addHoby} onValidate={onValidate} />;
  } else if (currentStep === 2) {
    question = <SecondQuestion onAddHoby={addHoby} onValidate={onValidate} />;
  } else if (currentStep === 3) {
    question = <ThirdQuestion onAddHoby={addHoby} onValidate={onValidate} />;
  } else if (currentStep === 4) {
    question = <FourQuestion onAddHoby={addHoby} onValidate={onValidate} />;
  } else if (currentStep === 5) {
    question = <FiveQuestion onAddHoby={addHoby} onValidate={onValidate} />;
  } else if (currentStep === 6) {
    question = <Privacy />;
  }

  return (
    <React.Fragment>
      {maxStep !== currentStep ? (
        <StepBar
          currentStep={currentStep}
          maxStep={5}
          onBackStep={onBackStep}
        />
      ) : null}
      {question}
      <Footer>
        {currentStep !== 6 ? (
          <Button style="fluid" onClick={() => onNextStep(maxStep)}>
            다음
          </Button>
        ) : null}
        {currentStep === 6 ? (
          <Button
            style="fluid"
            onClick={() => {
              onNextStep(maxStep, true);
            }}
          >
            동의하고 진행하기
          </Button>
        ) : null}
        {currentStep === 6 ? (
          <Button
            style="fluid"
            onClick={() => {
              onNextStep(maxStep, false);
            }}
          >
            동의하지 않음
          </Button>
        ) : null}
      </Footer>
    </React.Fragment>
  );
};

export default QuestionScreen;
