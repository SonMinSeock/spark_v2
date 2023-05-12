import React from "react";
import Button from "../../components/UI/Button";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 40%;
  h3 {
    font-weight: bold;
    font-size: 1.5em;
    margin-left: 20px;
    margin-bottom: 20px;
    @media (min-width: 669px) {
      font-size: 3em;
      text-align: center;
      margin-bottom: 50px;
    }
  }
  p {
    font-size: 0.9em;
    color: #65656d;
    font-weight: bold;
    margin-left: 20px;
    @media (min-width: 669px) {
      margin-left: 200px;
      font-size: 1.5em;
    }
  }
  p:nth-of-type(1) {
    margin-bottom: 10px;
  }
`;

const Footer = styled.div`
  display: flex;
  height: 60%;

  justify-content: center;
  align-items: flex-end;
  padding: 0 20px;
  button {
    width: 100%;
    min-width: 300px;
    margin-bottom: 30px;
  }
  @media (min-width: 669px) {
    button {
      min-width: 620px;
    }
    font-size: 28px;
  }
`;

const Notification = () => {
  const user = useLocation();

  const navigate = useNavigate();

  const onClick = () => {
    navigate("/question", { state: user.state });
  };
  return (
    <React.Fragment>
      <Section>
        <h3>안내사항</h3>
        <p>
          1. 관심사 기반 질문에 대한 답이 없다면
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;그 중 가장 마음에 드는 답 하나를 선택해
          주세요.
        </p>
        <p>2. 답은 중복 체크가 불가합니다.</p>
      </Section>
      <Footer>
        <Button style="fluid" onClick={onClick}>
          다음
        </Button>
      </Footer>
    </React.Fragment>
  );
};

export default Notification;
