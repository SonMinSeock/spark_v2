import styled from "styled-components";
import { IoIosArrowBack, IoMdArrowDropdown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button/Button";
function New() {
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
    @media (min-width: 40rem) {
      margin: 0 auto;
      max-width: 25rem;
    }
  `;
  const Input = styled.input`
    width: 100%;
    padding: 0.5rem 1rem;
    margin-bottom: 0.5rem;
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
  `;

  const GenderContainer = styled.div`
    .gender__container {
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
    }
  `;

  const Box = styled.div`
    width: 9rem;
    height: 9rem;
    border-radius: 1.5rem;
    border: 3px solid gray;
    cursor: pointer;
    &.selected {
      border-color: #a7dfd4;
    }
  `;
  const Femail = styled(Box)`
    background-color: yellow;
  `;
  const Mail = styled(Box)`
    background-color: blue;
  `;

  const navigate = useNavigate();
  const backHandler = () => {
    navigate("/login");
  };

  const onSubmitHandler = () => {
    navigate("/login/new/question");
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
      <Main>
        <section>
          <h2>
            <span className="hilight">필수 정보를</span>
            <br />
            입력해주세요!
          </h2>
        </section>
      </Main>
      <Form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="username">닉네임</label>
          <Input
            id="username"
            type="text"
            name="username"
            placeholder="사용하실 닉네임을 입력해주세요"
          />
          <span className="info__text">
            <span className="star__char">*</span>
            닉네임은 변경 불가능합니다
          </span>
        </div>
        <div>
          <label htmlFor="university">학교</label>
          <div>
            <Select id="university" name="university">
              <option value="" className="placeholder__text">
                본인의 학교를 입력해주세요
              </option>
              <option value="금오공과대학교">금오공과대학교</option>
              <option value="경운대학교">경운대학교</option>
            </Select>
            <div className="IoMdArrowDropdown">
              <IoMdArrowDropdown size={30} color="gray" />
            </div>
          </div>
        </div>
        <GenderContainer>
          <span>성별</span>
          <div className="gender__container">
            <Femail className="femal selected" name="gender" value="female" />
            <Mail className="male" name="gender" value="male" />
          </div>
        </GenderContainer>
        <Button type="submit">다음</Button>
      </Form>
    </>
  );
}

export default New;