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
    height: 35%;
  }
`;

const Form = styled.form`
  padding: 0 25px;
  height: 55%;
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
`;
const LabelInputWrapper = styled.div`
  @media (min-width: 669px) {
    display: flex;
    flex-direction: column;
    min-width: 620px;
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
    img {
      height: 50px;
    }
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
  margin-bottom: 25px;
  &:last-child {
    margin-bottom: 0px;
  }
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
  justify-content: center;
  align-items: flex-end;
  button {
    width: 100%;
    min-width: 300px;
  }
  @media (min-width: 669px) {
    button {
      min-width: 620px;
    }
    font-size: 28px;
  }
`;

const LoginScreen = () => {
  const navigate = useNavigate();
  const onSubmit = () => {
    navigate("/share");
  };
  return (
    <React.Fragment>
      <Section></Section>
      <Form onSubmit={onSubmit}>
        <LabelInputWrapper>
          <LabelWrapper>
            <label htmlFor="department">학과</label>
          </LabelWrapper>
          <Input type="text" placeholder="학과" id="department" />
          <LabelWrapper>
            <label htmlFor="student_id">학번</label>
          </LabelWrapper>
          <Input type="text" placeholder="학번" id="student_id" />
          <LabelWrapper>
            <label htmlFor="instargram">
              <img src={require("../../images/instagram.png")} />
            </label>
            <FaInfoCircle />
          </LabelWrapper>
          <Input type="text" placeholder="instargram link" id="instargram" />
        </LabelInputWrapper>
        <Footer>
          <Button type="submit" style="fluid">
            시작하기
          </Button>
        </Footer>
      </Form>
    </React.Fragment>
  );
};

export default LoginScreen;
