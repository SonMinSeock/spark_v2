import styled from "styled-components";

const Section = styled.section`
  &:nth-child(2) {
    margin-top: 2rem;
    padding: 1.2rem;
    div {
      display: flex;
      flex-direction: column;
      button {
        color: black;
        font-size: 1.2rem;
        padding: 0.4rem 0rem;
        border: 2px solid gray;
        font-weight: bold;
        background-color: #ffffff;
        &:last-child {
          margin-top: 1rem;
          border-color: #58c5b0;
          background-color: #58c5b0;
          color: #ffffff;
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
const Textarea = styled.textarea`
  background-color: #fafafa;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  border: 2px solid gray;
  outline: none;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  &:focus {
    border-color: #58c5b0;
  }
`;
function FiveQuestion({ inputQuestionHandler, question }) {
  return (
    <>
      <Section>
        <h2>
          만약 새로운 친구를 사귄다면
          <br />
          <span className="hilight">어떤 친구</span>와 사귀고 싶나요?
        </h2>
      </Section>
      <Form>
        <Textarea
          rows={11}
          cols={30}
          placeholder="예시) 새로운 동성 친구라면 함께 게임을,
          이성 친구라면 함께 카페를 갈 수 있는 친구를 만들고 싶어요!"
          onChange={(event) => inputQuestionHandler(5, event.target.value)}
        />
      </Form>
    </>
  );
}

export default FiveQuestion;
