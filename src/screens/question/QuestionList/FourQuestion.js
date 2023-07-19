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
  font-size: 0.9rem;
  &:focus {
    border-color: #58c5b0;
  }
`;
function FourQuestion({ inputQuestionHandler, question, anotherQuestion }) {
  const [enteredQuestion, setEnteredQuestion] = useState("");
  return (
    <>
      <Section>
        <h2>
          Spark에서 생긴 친구/애인과
          <br />
          <span className="hilight">가고싶은 운동경기는?</span>
        </h2>
      </Section>
      <Section>
        <div>
          <button
            className={question === "축구 경기" ? "selected" : null}
            onClick={(event) => {
              setEnteredQuestion("");
              inputQuestionHandler(4, event.target.value, "");
            }}
            value="축구 경기"
          >
            축구 경기
          </button>
          <button
            className={question === "야구 경기" ? "selected" : null}
            onClick={(event) => {
              setEnteredQuestion("");
              inputQuestionHandler(4, event.target.value, "");
            }}
            value="야구 경기"
          >
            야구 경기
          </button>
        </div>
      </Section>
      <Form>
        <label>원하는 선택지가 없다면?</label>
        <Input
          type="text"
          placeholder="자유롭게 대답해주세요~!"
          onChange={(event) => {
            inputQuestionHandler(4, "", event.target.value);
            setEnteredQuestion(event.target.value);
          }}
          value={enteredQuestion}
        />
      </Form>
    </>
  );
}

export default FourQuestion;
