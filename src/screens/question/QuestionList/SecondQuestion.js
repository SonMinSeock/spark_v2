import { useState } from "react";
import styled from "styled-components";

const Section = styled.section`
  &:nth-child(2) {
    margin-top: 2rem;
    padding: 1.2rem;
    div {
      display: flex;
      flex-direction: column;
      button {
        font-size: 1.2rem;
        padding: 0.4rem 0rem;
        border: 2px solid gray;
        font-weight: bold;
        background-color: #ffffff;
        &:last-child {
          margin-top: 1rem;
        }
        &.selected {
          background-color: #58c5b0;
          border-color: #58c5b0;
          color: white;
        }
        border-radius: 1rem;
        cursor: pointer;
      }
    }
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 1.2rem;
  margin-top: 2rem;
`;
const Input = styled.input`
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  outline: none;
  border-radius: 0.5rem;
  border: 2px solid gray;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  font-size: 0.9rem;
  &:focus {
    border-color: #58c5b0;
  }
`;
function SecondQuestion({ inputQuestionHandler, question, anotherQuestion }) {
  const [enteredQuestion, setEnteredQuestion] = useState("");
  const onChangeHandler = (event) => {
    inputQuestionHandler(2, "", event.target.value);
    setEnteredQuestion(event.target.value);
  };
  return (
    <>
      <Section>
        <h2>
          당신의
          <span className="hilight">주량</span>은
          <br />
          얼마나 되나요?
        </h2>
      </Section>
      <Section>
        <div>
          <button
            className={question === "맥주 한 캔 정도?" ? "selected" : null}
            onClick={(evnet) => {
              inputQuestionHandler(2, evnet.target.value, "");
              setEnteredQuestion("");
            }}
            value="맥주 한 캔 정도?"
          >
            맥주 한 캔 정도?
          </button>
          <button
            className={question === "소주 한병은 거뜬하지~" ? "selected" : null}
            onClick={(evnet) => {
              inputQuestionHandler(2, evnet.target.value, "");
              setEnteredQuestion("");
            }}
            value="소주 한병은 거뜬하지~"
          >
            소주 한병은 거뜬하지~
          </button>
        </div>
      </Section>
      <Form>
        <label>원하는 선택지가 없다면?</label>
        <Input
          type="text"
          placeholder="자유롭게 대답해주세요~!"
          onChange={onChangeHandler}
          value={enteredQuestion}
        />
      </Form>
    </>
  );
}

export default SecondQuestion;
