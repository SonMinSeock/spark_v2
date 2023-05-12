import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../../components/UI/Button";
import { FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { dbService } from "../../db/firebase";
import { useForm } from "react-hook-form";
import Select from "react-select";

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
  .invalid {
    border: 1px solid #007aff;
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
  const [selectDepartment, setSelectDepartment] = useState();
  const [selectGender, setSelectGender] = useState("");
  const [user, setUser] = useState();
  const [userInputValid, setUserInputValid] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const navigate = useNavigate();

  const Section = styled.section`
    &:nth-of-type(1) {
      height: 35%;
      display: flex;
      justify-content: center;
      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        span {
          font-size: 1em;
          font-weight: bold;
          color: #000;
          margin-top: 15px;
        }
        @media (min-width: 669px) {
          span {
            font-size: 1.4em;
          }
        }
      }
      .select {
        /* img {
          //border: 2px solid rgb(0, 122, 255);
        } */
        span {
          color: rgb(0, 122, 255);
        }
      }
    }

    img {
      height: 120px;
      border-radius: 20%;
      border: 2px solid #ececec;
      cursor: pointer;
      &:first-child {
        margin-right: 10px;
      }
    }
    &:nth-child(2) {
      margin-right: 10px;
    }
    .select {
      border-color: #007aff;
    }

    @media (min-width: 669px) {
      img {
        width: 350px;
        height: 300px;
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
    border: none;
    /* &:nth-of-type(1) {
      border: ${errors.studentId ? "1px solid blue" : ""};
    }
    &:nth-of-type(2) {
      border: ${errors.instargramUrl ? "1px solid blue" : ""};
    } */

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

  const onSelectGender = (gender) => {
    setSelectGender(gender);
  };

  useEffect(() => {
    getDepartmentList();
  }, []);

  const onSelect = (event) => {
    setSelectDepartment(event.value);
  };

  const onValid = async (value) => {
    if (selectGender !== "") {
      const addUser = {
        ...value,
        department: selectDepartment,
        gender: selectGender,
      };

      setUser(addUser);
      await addDoc(collection(dbService, "users"), addUser);
      navigate("/notification", { state: addUser });
    } else {
      alert("입력 안한 항목이 있습니다.");
    }
  };

  return (
    <React.Fragment>
      <Section>
        <div className={selectGender === "female" ? "select" : ""}>
          <img
            src={require("../../images/gender/female.png")}
            className={selectGender === "female" ? "select" : ""}
            onClick={() => onSelectGender("female")}
          />
          <span>여성</span>
        </div>
        <div className={selectGender === "male" ? "select" : ""}>
          <img
            src={require("../../images/gender/male.png")}
            className={selectGender === "male" ? "select" : ""}
            onClick={() => onSelectGender("male")}
          />
          <span>남성</span>
        </div>
      </Section>
      <Form onSubmit={handleSubmit(onValid)}>
        <LabelInputWrapper>
          <LabelWrapper>
            <label htmlFor="department">학과</label>
          </LabelWrapper>
          {/* <Input
            type="text"
            placeholder="학과"
            id="department"
            {...register("department", {
              required: "학과를 입력해주세요",
            })}
          /> */}
          <div style={{ marginBottom: 20 }}>
            <Select
              placeholder="학과를 선택하세요"
              options={departmentList}
              onChange={onSelect}
            />
          </div>
          <LabelWrapper>
            <label htmlFor="student_id">학번</label>
          </LabelWrapper>
          <Input
            type="text"
            placeholder="ex) 20학번"
            id="student_id"
            {...register("studentId", {
              required: "학번 입력해주세요",
              maxLength: 4,
            })}
            className={errors.studentId ? "invalid" : ""}
            required
            maxLength={4}
          />
          <LabelWrapper>
            <label htmlFor="instargram">
              <img src={require("../../images/instagram.png")} />
            </label>
          </LabelWrapper>
          <Input
            type="text"
            placeholder="인스타 아이디:Sparkapp_campus"
            id="instargram"
            {...register("instagramId", {
              required: "인스타 아이디 입력 해주세요",
            })}
            className={errors.instagramId ? "invalid" : ""}
            required
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
