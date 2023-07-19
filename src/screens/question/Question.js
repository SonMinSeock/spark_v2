import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import Stepper from "react-stepper-enhanced";
import Button from "../UI/Button/Button";
import { useState } from "react";
import FirstQuestion from "./QuestionList/FirstQuestion";
import SecondQuestion from "./QuestionList/SecondQuestion";
import ThirdQuestion from "./QuestionList/ThirdQuestion";
import FourQuestion from "./QuestionList/FourQuestion";
import FiveQuestion from "./QuestionList/FiveQuestion";

// styled code
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
function Question() {
  // declare code
  const {
    state: { userObj },
  } = useLocation();

  const navigate = useNavigate();

  const initUserInfo = {
    ...userObj,
    mbti: "",
    secondQuestion: "",
    thirdQuestion: "",
    fourQuestion: "",
    fiveQuestion: "",
    openChatLink: "",
    coin: 0,
  };
  const [activeStep, setActiveStep] = useState(0);
  const [enteredUserInfo, setEnteredUserInfo] = useState(initUserInfo);

  console.log(enteredUserInfo);

  const backHandler = () => {
    if (activeStep === 0) {
      // navigate("/login/new", { state: userObj });
      navigate("/login");
    } else {
      setActiveStep((prev) => prev - 1);
    }
  };

  const nextBtnClick = () => {
    if (activeStep === 4) {
      navigate("/info", { state: { enteredUserInfo } });
    } else {
      setActiveStep((prev) => prev + 1);
    }
  };

  const inputQuestionHandler = (questionNum, value, anotherValue) => {
    if (questionNum === 1) {
      setEnteredUserInfo((prev) => ({
        ...prev,
        mbti: value,
      }));
    } else if (questionNum === 2) {
      setEnteredUserInfo((prev) => ({
        ...prev,
        secondQuestion:
          value === "" ? (anotherValue !== "" ? anotherValue : "") : value,
      }));
    } else if (questionNum === 3) {
      setEnteredUserInfo((prev) => ({
        ...prev,
        thirdQuestion: value,
      }));
    } else if (questionNum === 4) {
      setEnteredUserInfo((prev) => ({
        ...prev,
        fourQuestion:
          value === "" ? (anotherValue !== "" ? anotherValue : "") : value,
      }));
    } else if (questionNum === 5) {
      setEnteredUserInfo((prev) => ({
        ...prev,
        fiveQuestion: value,
      }));
    }
  };

  const showQuestion = () => {
    if (activeStep === 0)
      return (
        <FirstQuestion
          inputQuestionHandler={inputQuestionHandler}
          mbti={enteredUserInfo.mbti}
        />
      );
    else if (activeStep === 1)
      return (
        <SecondQuestion
          inputQuestionHandler={inputQuestionHandler}
          question={enteredUserInfo.secondQuestion}
        />
      );
    else if (activeStep === 2)
      return (
        <ThirdQuestion
          inputQuestionHandler={inputQuestionHandler}
          question={enteredUserInfo.thirdQuestion}
        />
      );
    else if (activeStep === 3)
      return (
        <FourQuestion
          inputQuestionHandler={inputQuestionHandler}
          question={enteredUserInfo.fourQuestion}
        />
      );
    else if (activeStep === 4)
      return (
        <FiveQuestion
          inputQuestionHandler={inputQuestionHandler}
          question={enteredUserInfo.fiveQuestion}
        />
      );
  };

  return (
    <>
      <Header>
        <IoIosArrowBack
          size={25}
          className="back__icon"
          onClick={backHandler}
        />
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
