import React from "react";
import styled from "styled-components";
import Button from "../../components/UI/Button";
import { FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Section = styled.section`
  &:nth-of-type(1) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 60%;
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

const Form = styled.form`
  padding: 0 25px;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 669px) {
    align-items: center;
    font-size: 28px;
  }
  @media (min-width: 2000px) {
    font-size: 28px;
  }

  div {
    @media (min-width: 669px) {
      min-width: 620px;
    }
  }
`;

const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  margin-bottom: 10px;
  label {
    font-size: 1.2em;
    font-weight: 600;
  }
  @media (min-width: 669px) {
    max-width: 620px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 35px;
  border-radius: 1.2em;
  background-color: #eaeef1;
  color: #878d98;
  font-weight: 600;
  border: 0;
  padding: 0px 10px;
  transition: box-shadow 0.2s ease-in-out;
  &:focus {
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  @media (min-width: 669px) {
    font-size: 0.6em;
    padding: 24px 10px;
  }
`;

const Footer = styled.div`
  display: flex;
  align-items: flex-end;
  button {
    width: 100%;
  }
  @media (min-width: 669px) {
    max-width: 620px;
  }
`;

const InitScreen = () => {
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate("/login");
  };
  return (
    <React.Fragment>
      <Section>
        <Paragraph>추천한 친구가 있나요?</Paragraph>
        <Paragraph>
          친구를 추천하면 추가로 3명의 친구를
          <br />
          소개받을 수 있어요!
        </Paragraph>
      </Section>
      <Form onSubmit={onSubmit}>
        <div>
          <LabelWrapper>
            <label htmlFor="recommender">추천인</label>
            <FaInfoCircle />
          </LabelWrapper>
          <Input
            type="text"
            placeholder="추천한 친구의 인스타 아이디"
            id="recommender"
          />
        </div>
        <Footer>
          <Button type="submit" style="fluid">
            시작하기
          </Button>
        </Footer>
      </Form>
    </React.Fragment>
  );
};

export default InitScreen;
