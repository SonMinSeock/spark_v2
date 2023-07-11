import styled from "styled-components";

function FiveQuestion() {
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
    border: none;
    outline: none;
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    &:focus {
      box-shadow: #58c5b0 0px 1px 4px;
    }
  `;
  return (
    <>
      <Section>
        <h2>
          당신은
          <span className="hilight">어떤 사람</span>과<br />
          만나고 싶나요?
        </h2>
      </Section>
      <Form>
        <Textarea rows={11} cols={30} placeholder="자유롭게 대답해주세요~!" />
      </Form>
    </>
  );
}

export default FiveQuestion;
