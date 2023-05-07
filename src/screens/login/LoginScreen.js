import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../../components/UI/Button";
import { FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { dbService } from "../../db/firebase";
import { useForm } from "react-hook-form";

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
  const [departmentList, setDepartmentList] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const Input = styled.input`
    width: 100%;
    height: 35px;
    border-radius: 1.2em;
    background-color: #eaeef1;
    color: #878d98;
    font-weight: 600;
    border: ${(props) => (props.inValid ? "1px solid blue" : 0)};
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

  const getDepartmentList = async () => {
    const readData = await getDocs(collection(dbService, "departments"));
    readData.forEach((document) => {
      setDepartmentList(() => [...document.data().departmentList]);
    });
  };

  useEffect(() => {
    getDepartmentList();
  }, []);

  const onValid = async (value) => {
    console.log(value);
    await addDoc(collection(dbService, "users"), value);
    navigate("/question");
  };

  return (
    <React.Fragment>
      <Section></Section>
      <Form onSubmit={handleSubmit(onValid)}>
        <LabelInputWrapper>
          <LabelWrapper>
            <label htmlFor="department">학과</label>
          </LabelWrapper>
          <Input
            type="text"
            placeholder="학과"
            id="department"
            {...register("department", {
              required: "학과를 입력해주세요",
            })}
          />
          <LabelWrapper>
            <label htmlFor="student_id">학번</label>
          </LabelWrapper>
          <Input
            type="text"
            placeholder="학번"
            id="student_id"
            {...register("studentId", { required: "학번 입력해주세요" })}
          />
          <LabelWrapper>
            <label htmlFor="instargram">
              <img src={require("../../images/instagram.png")} />
            </label>
            <FaInfoCircle />
          </LabelWrapper>
          <Input
            type="text"
            placeholder="instargram link"
            id="instargram"
            {...register("instargramUrl")}
          />
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
