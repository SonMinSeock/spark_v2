import styled from "styled-components";
import { IoIosArrowBack, IoMdArrowDropdown } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../UI/Button/Button";
import FemaleProfile from "../../assets/female_profile_image.png";
import MaleProfile from "../../assets/male_profile_image.png";
import useInput from "../../hooks/use-input";
import { useState, useEffect } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { dbService } from "../../db/firebase";
import { analyticsButtonLogEvent } from "../../libs/analytics";

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
      color: #248fcd;
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
  padding: 0 1.2rem;
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
  & div .info__text {
    display: block;
    color: gray;
    font-size: 0.8rem;
    font-weight: bold;
    margin: 0 0.5rem;
    margin-top: 0.5rem;
  }
  & .invalid input {
    border-color: red;
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
  outline: none;
  border-radius: 0.5rem;
  border: 2px solid gray;
  &:focus {
    border-color: #248fcd;
  }
`;

const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 2px solid gray;
  outline: none;
  color: black;
  &:focus {
    border: 2px solid #248fcd;
  }
  &.invalid {
    border: 2px solid red;
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
    border-color: #248fcd;
  }
  @media (max-width: 17.5rem) {
    & {
      width: 7rem;
      height: auto;
    }
  }
`;
const Femail = styled(Box)``;
const Mail = styled(Box)``;

const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
  font-size: 0.8rem;
  margin: 0.5rem 0.5rem;
`;
function New() {
  const [isGnder, setIsGender] = useState("");
  const [users, setUsers] = useState([]);

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
  } = useInput((value) => {
    const inputName = value.trim();
    if (users.length !== 0) {
      for (let user of users) {
        if (inputName !== "" && inputName !== user.name) {
          return true;
        } else {
          return false;
        }
      }
    } else {
      return true;
    }
  });

  const {
    value: enteredSchoolName,
    hasError: schoolSelectHasError,
    isValid: enteredSchoolNameIsValid,
    valueChangeHandler: schoolNameChangeHandler,
    inputBlurHandler: schoolNameBlurHandler,
    reset: resetSchoolNameSelect,
  } = useInput((value) => ["강남대학교", "단국대학교"].includes(value.trim()));

  let formIsValid = false;

  if (enteredNameIsValid && enteredSchoolNameIsValid && isGnder !== "") {
    formIsValid = true;
  }

  const backHandler = () => {
    navigate("/login");
  };

  // db read users
  const readUsers = () => {
    const q = query(collection(dbService, "users"), orderBy("createdAt", "desc"));

    onSnapshot(q, (snapshot) => {
      const docUsers = snapshot.docs.map((doc) => ({
        ...doc.data(),
        document_id: doc.id,
      }));

      setUsers(docUsers);
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid && !enteredSchoolNameIsValid && isGnder === "") {
      return;
    }

    resetNameInput();

    const userObj = {
      id: kakao_data.id,
      email: kakao_data.kakao_account.email || "",
      name: enteredName,
      school: enteredSchoolName,
      gender: isGnder,
      reportList: [],
      currentDate: "",
      coinReceivedRecord: [],
    };

    analyticsButtonLogEvent(`Spark 회원정보 입력 완료한 사용자 수`);
    navigate("/login/new/question", { state: { userObj } });
  };

  const toggleGenderHandler = (event) => {
    setIsGender(event.target.name);
  };

  useEffect(() => {
    analyticsButtonLogEvent(`카카오 회원가입을 완료한 사용자 수`);
    readUsers();
  }, []);

  const nameInputClasses = nameInputHasError ? "invalid" : "";
  const schoolSelectClasses = schoolSelectHasError ? "invalid" : "";

  return (
    <>
      <Header>
        <IoIosArrowBack size={25} className="back__icon" onClick={backHandler} />
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
          {nameInputHasError ? <ErrorMessage>*닉네임 공백 혹은 이미 사용중인 닉네임 입니다.</ErrorMessage> : null}
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
              <option value="단국대학교">단국대학교</option>
            </Select>
            <div className="IoMdArrowDropdown">
              <IoMdArrowDropdown size={30} color="gray" />
            </div>
            {schoolSelectHasError ? <ErrorMessage>*학교 선택 안했습니다.</ErrorMessage> : null}
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
          {isGnder === "" ? <ErrorMessage>*성별 선택 안했습니다.</ErrorMessage> : null}
        </GenderContainer>
        <Button type="submit" className={!formIsValid ? "disabled__btn" : ""} disabled={!formIsValid}>
          다음
        </Button>
      </Form>
    </>
  );
}

export default New;
