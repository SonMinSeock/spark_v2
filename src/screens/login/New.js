import styled from "styled-components";
import { IoIosArrowBack, IoMdArrowDropdown } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../UI/Button/Button";
import FemaleProfile from "../../assets/female_profile_image.png";
import MaleProfile from "../../assets/male_profile_image.png";
import useInput from "../../hooks/use-input";
import { useState } from "react";
const Header = styled.header`
  height: 6rem;
  display: flex;
  align-items: center;
  padding: 0 1.2rem;
  .back__icon {
    cursor: pointer;
  }
  @media (min-width: 40rem) {
    margin: 0 auto;
    max-width: 25rem;
  }
`;
const Main = styled.main`
  height: 5rem;
  section h2 {
    line-height: 2.1rem;
    font-size: 1.6rem;
    padding: 0 1.2rem;
    .hilight {
      color: #8cd7c7;
    }
  }
  margin-bottom: 2rem;
  @media (min-width: 40rem) {
    margin: 0 auto;
    max-width: 25rem;
  }
`;
const Form = styled.form`
  height: calc(100vh - 8rem - 5rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > div {
    padding: 0 1.2rem;
  }
  div label {
    display: block;
    margin-bottom: 1rem;
  }
  div:nth-child(2) div {
    position: relative;
    & .IoMdArrowDropdown {
      position: absolute;
      top: 0;
      right: 0.5rem;
    }
  }
  & .invalid input {
    box-shadow: red 0px 1px 4px;
  }
  @media (min-width: 40rem) {
    margin: 0 auto;
    max-width: 25rem;
  }
`;
const Input = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  /* margin-bottom: 0.5rem; */
  border: none;
  outline: none;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
  & + .info__text {
    display: block;
    color: gray;
    font-size: 0.6rem;
    font-weight: bold;
    margin-top: 0.5rem;
  }
  &:focus {
    box-shadow: #58c5b0 0px 1px 4px;
  }
`;

const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  &:focus {
    box-shadow: #58c5b0 0px 1px 4px;
  }
  &.invalid {
    box-shadow: red 0px 1px 4px;
  }
`;

const GenderContainer = styled.div`
  .gender__container {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }
`;

const Box = styled.img`
  width: 9rem;
  height: 9rem;
  border-radius: 1.5rem;
  border: 3px solid gray;
  cursor: pointer;
  &.selected {
    border-color: #a7dfd4;
  }
`;
const Femail = styled(Box)``;
const Mail = styled(Box)``;

const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
  font-size: 0.8rem;
  margin: 0.5rem;
`;
function New() {
  const [isGnder, setIsGender] = useState("");
  const navigate = useNavigate();
  const {
    state: { kakao_data },
  } = useLocation();

  const {
    value: enteredName,
    hasError: nameInputHasError,
    isValid: enteredNameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredSchoolName,
    hasError: schoolSelectHasError,
    isValid: enteredSchoolNameIsValid,
    valueChangeHandler: schoolNameChangeHandler,
    inputBlurHandler: schoolNameBlurHandler,
    reset: resetSchoolNameSelect,
  } = useInput((value) =>
    ["강남대학교", "단국대학교", "금오공과대학교", "경운대학교"].includes(
      value.trim()
    )
  );

  console.log(kakao_data);

  let formIsValid = false;

  if (enteredNameIsValid && enteredSchoolNameIsValid && isGnder !== "") {
    formIsValid = true;
  }

  const backHandler = () => {
    navigate("/login");
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid && !enteredSchoolNameIsValid && isGnder === "") {
      return;
    }

    resetNameInput();

    const userObj = {
      id: kakao_data.id,
      name: enteredName,
      school: enteredSchoolName,
      gender: isGnder,
    };

    navigate("/login/new/question", { state: { userObj } });
  };

  const toggleGenderHandler = (event) => {
    setIsGender(event.target.name);
  };

  console.log(schoolSelectHasError);
  const nameInputClasses = nameInputHasError ? "invalid" : "";
  const schoolSelectClasses = schoolSelectHasError ? "invalid" : "";

  return (
    <>
      <Header>
        <IoIosArrowBack
          size={25}
          className="back__icon"
          onClick={backHandler}
        />
      </Header>
      <Main>
        <section>
          <h2>
            <span className="hilight">필수 정보를</span>
            <br />
            입력해주세요!
          </h2>
        </section>
      </Main>
      <Form onSubmit={formSubmitHandler}>
        <div className={nameInputClasses}>
          <label htmlFor="username">닉네임</label>
          <Input
            id="username"
            type="text"
            name="username"
            placeholder="사용하실 닉네임을 입력해주세요, 최대 길이 5자이내"
            required
            maxLength={5}
            minLength={1}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {nameInputHasError ? (
            <ErrorMessage>
              *닉네임 입력창 다시 확인 해보시길 바랍니다.
            </ErrorMessage>
          ) : null}
          <span className="info__text">
            <span className="star__char">*</span>
            닉네임은 변경 불가능합니다
          </span>
        </div>
        <div>
          <label htmlFor="university">학교</label>
          <div>
            <Select
              id="university"
              name="university"
              onChange={schoolNameChangeHandler}
              onBlur={schoolNameBlurHandler}
              className={schoolSelectClasses}
            >
              <option value="" className="placeholder__text">
                본인의 학교를 입력해주세요
              </option>
              <option value="강남대학교">강남대학교</option>
              <option value="경운대학교">경운대학교</option>
              <option value="금오공과대학교">금오공과대학교</option>
              <option value="단국대학교">단국대학교</option>
            </Select>
            <div className="IoMdArrowDropdown">
              <IoMdArrowDropdown size={30} color="gray" />
            </div>
            {schoolSelectHasError ? (
              <ErrorMessage>*학교 선택 안했습니다.</ErrorMessage>
            ) : null}
          </div>
        </div>
        <GenderContainer>
          <span>성별</span>
          <div className="gender__container">
            <Femail
              className={`femal ${isGnder === "female" ? "selected" : null}`}
              name="female"
              src={FemaleProfile}
              onClick={toggleGenderHandler}
            />
            <Mail
              className={`male ${isGnder === "male" ? "selected" : null}`}
              name="male"
              src={MaleProfile}
              onClick={toggleGenderHandler}
            />
          </div>
          {isGnder === "" ? (
            <ErrorMessage>*성별 선택 안했습니다.</ErrorMessage>
          ) : null}
        </GenderContainer>
        <Button
          type="submit"
          className={!formIsValid ? "disabled__btn" : ""}
          disabled={!formIsValid}
        >
          다음
        </Button>
      </Form>
    </>
  );
}

export default New;
