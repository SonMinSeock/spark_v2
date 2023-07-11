import styled from "styled-components";

function ThirdQuestion() {
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
            border-color: #58c5b0;
            background-color: #58c5b0;
            color: #ffffff;
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
  return (
    <>
      <Section>
        <h2>
          다음 중<span className="hilight"> 더 싫은</span>
          <br />
          상황은?
        </h2>
      </Section>
      <Section>
        <div>
          <button>이성친구와 여행가는 애인</button>
          <span>VS</span>
          <button>전남친/전여친과 술마시는 애인</button>
        </div>
      </Section>
    </>
  );
}

export default ThirdQuestion;
