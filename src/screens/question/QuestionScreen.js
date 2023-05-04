import React, { useState } from "react";
import StepBar from "../../components/UI/StepBar";
import Button from "../../components/UI/Button";
import styled from "styled-components";

const Section = styled.section`
  &:nth-of-type(1) {
    margin-top: 90px;
    @media (min-width: 669px) {
      margin-top: 180px;
    }
    @media (min-width: 1500px) {
      margin-top: 100px;
    }
  }
  &:nth-of-type(2) {
    margin-top: 75px;
    @media (min-width: 669px) {
      margin-top: 150px;
    }
    @media (min-width: 1500px) {
      margin-top: 50px;
    }
    div {
      display: flex;
      justify-content: space-evenly;
      margin-bottom: 35px;
      &:last-child {
        margin-bottom: 0px;
      }
      img {
        width: 20%;
        cursor: pointer;
      }
      @media (min-width: 669px) {
        img {
          width: 15%;
        }
      }
      @media (min-width: 1500px) {
        img {
          width: 12%;
        }
      }
    }
  }
`;

const Paragraph = styled.p`
  text-align: center;
  &:first-child {
    font-weight: bold;
    color: #363944;
    font-size: 1.4rem;
    line-height: 2rem;
    @media (min-width: 669px) {
      font-size: 2.4rem;
      line-height: 3rem;
    }
    @media (min-width: 2000px) {
      font-size: 3.4rem;
      line-height: 4.5rem;
    }
  }
  &:nth-child(2) {
    color: #76757b;
    line-height: 1.4rem;
    margin-top: 10px;
    @media (min-width: 669px) {
      font-size: 1.5rem;
      line-height: 2rem;
    }
    @media (min-width: 2000px) {
      font-size: 2.2rem;
      line-height: 3rem;
    }
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  margin-top: 55px;
  @media (min-width: 669px) {
    margin-top: 135px;
  }
  @media (min-width: 1500px) {
    margin-top: 100px;
  }
`;

const QuestionScreen = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const onNextStep = (maxStep) => {
    if (maxStep > currentStep) {
      setCurrentStep((prev) => prev + 1);
    } else if (maxStep === currentStep) {
      alert("결과 화면으로 보여주기");
    }
  };

  const onBackStep = (point) => {
    if (currentStep > point) {
      const back = currentStep - point;
      setCurrentStep((prev) => prev - back);
    }
  };
  return (
    <React.Fragment>
      <StepBar currentStep={currentStep} maxStep={3} onBackStep={onBackStep} />
      <Section>
        <Paragraph>
          가고 싶은 도시를
          <br />
          골라보세요
        </Paragraph>
        <Paragraph>
          누군가와 함께 가보고
          <br />
          싶은 도시를 알려주세요.
        </Paragraph>
      </Section>
      <Section>
        <div>
          <img src={require("../../images/city/city_image_01.png")} />
          <img src={require("../../images/city/city_image_02.png")} />
          <img src={require("../../images/city/city_image_03.png")} />
        </div>
        <div>
          <img src={require("../../images/city/city_image_04.png")} />
          <img src={require("../../images/city/city_image_05.png")} />
          <img src={require("../../images/city/city_image_06.png")} />
        </div>
      </Section>
      <Footer>
        <Button style="fluid" onClick={() => onNextStep(3)}>
          다음
        </Button>
      </Footer>
    </React.Fragment>
  );
};

export default QuestionScreen;
