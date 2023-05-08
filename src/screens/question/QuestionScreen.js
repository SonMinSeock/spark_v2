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

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
`;

const QuestionScreen = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [hobys, setHobys] = useState();
  const navigator = useNavigate();
  const user = useLocation();

  let question;
  const maxStep = 5;

  const onNextStep = async (maxStep) => {
    if (maxStep > currentStep) {
      setCurrentStep((prev) => prev + 1);
    } else if (maxStep === currentStep) {
      const taste = {
        ...hobys,
        createdAt: Date.now(),
        id: user.state.studentId,
        department: user.state.department,
        gender: user.state.gender,
      };
      await addDoc(collection(dbService, "taste"), taste);
      navigator("/share", { state: taste });
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
    } else if (questionNumber === maxStep) {
      setHobys((prev) => ({ ...prev, meeting: hoby }));
    }
  };

  if (currentStep === 1) {
    question = <FirstQuestion onAddHoby={addHoby} />;
  } else if (currentStep === 2) {
    question = <SecondQuestion onAddHoby={addHoby} />;
  } else if (currentStep === 3) {
    question = <ThirdQuestion onAddHoby={addHoby} />;
  } else if (currentStep === 4) {
    question = <FourQuestion onAddHoby={addHoby} />;
  } else if (currentStep === maxStep) {
    question = <FiveQuestion onAddHoby={addHoby} />;
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
