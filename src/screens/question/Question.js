import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Stepper from "react-stepper-enhanced";
import Button from "../UI/Button/Button";
import { useState } from "react";
import FirstQuestion from "./QuestionList/FirstQuestion";
import SecondQuestion from "./QuestionList/SecondQuestion";
import ThirdQuestion from "./QuestionList/ThirdQuestion";
import FourQuestion from "./QuestionList/FourQuestion";
import FiveQuestion from "./QuestionList/FiveQuestion";

function Question() {
  const Header = styled.header`
    height: 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.2rem;
    .back__icon {
      cursor: pointer;
    }
    span {
      cursor: pointer;
    }
    @media (min-width: 40rem) {
      margin: 0 auto;
      max-width: 25rem;
    }
  `;
  const Main = styled.main`
    height: calc(100vh - 6rem - 9.4rem);
    section h2 {
      line-height: 2.1rem;
      font-size: 1.6rem;
      padding: 0 1.2rem;
      margin-top: 2rem;
      .hilight {
        color: #8cd7c7;
      }
    }

    @media (min-width: 40rem) {
      margin: 0 auto;
      max-width: 25rem;
      height: calc(100vh - 6rem - 11.3rem);
    }
  `;

  const StepbarContainer = styled.div`
    @media (min-width: 40rem) {
      margin: 0 auto;
      max-width: 25rem;
    }
  `;

  const Footer = styled.footer`
    @media (min-width: 40rem) {
      margin: 0 auto;
      max-width: 25rem;
    }
  `;

  const [activeStep, setActiveStep] = useState(0);

  const navigate = useNavigate();

  const backHandler = () => {
    if (activeStep === 0) {
      navigate("/login/new");
    } else {
      setActiveStep((prev) => prev - 1);
    }
  };

  const nextBtnClick = () => {
    if (activeStep === 4) {
      navigate("/info");
    } else {
      setActiveStep((prev) => prev + 1);
    }
  };

  const showQuestion = () => {
    if (activeStep === 0) return <FirstQuestion />;
    else if (activeStep === 1) return <SecondQuestion />;
    else if (activeStep === 2) return <ThirdQuestion />;
    else if (activeStep === 3) return <FourQuestion />;
    else if (activeStep === 4) return <FiveQuestion />;
  };

  return (
    <>
      <Header>
        <IoIosArrowBack
          size={25}
          className="back__icon"
          onClick={backHandler}
        />
        <span>대답하기 싫어요</span>
      </Header>
      <StepbarContainer>
        <Stepper
          steps={[
            { title: "" },
            { title: "" },
            { title: "" },
            { title: "" },
            { title: "" },
          ]}
          activeStep={activeStep}
          activeColor="#58c5b0"
          completeColor="#58c5b0"
          completeBarColor="#58c5b0"
          defaultBarColor="#58c5b0"
        />
      </StepbarContainer>
      <Main>{showQuestion()}</Main>
      <Footer>
        <Button onClick={nextBtnClick}>다음</Button>
      </Footer>
    </>
  );
}

export default Question;
