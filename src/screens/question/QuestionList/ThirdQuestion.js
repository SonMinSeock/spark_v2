import styled from "styled-components";

const Section = styled.section`
  &:nth-child(2) {
    margin-top: 2rem;
    padding: 1.2rem;
    div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
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
      span {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2rem;
        font-weight: bold;
        padding: 0.4rem 0rem;
        margin: 1rem 0;
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
  border: none;
  outline: none;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  &:focus {
    box-shadow: #58c5b0 0px 1px 4px;
  }
`;
function ThirdQuestion({ inputQuestionHandler, question }) {
  return (
    <>
      <Section>
        <h2>
          다음 중<span className="hilight"> 더 싫은</span>
          <br />
          상황은
        </h2>
      </Section>
      <Section>
        <div>
          <button
            className={
              question === "이성친구와 여행가는 애인" ? "selected" : null
            }
            onClick={(event) => inputQuestionHandler(3, event.target.value)}
            value="이성친구와 여행가는 애인"
          >
            이성친구와 여행가는 애인
          </button>
          <span>VS</span>
          <button
            className={
              question === "전남친/전여친과 술마시는 애인" ? "selected" : null
            }
            onClick={(event) => inputQuestionHandler(3, event.target.value)}
            value="전남친/전여친과 술마시는 애인"
          >
            전남친/전여친과 술마시는 애인
          </button>
        </div>
      </Section>
    </>
  );
}

export default ThirdQuestion;
