import styled from "styled-components";

function FourQuestion() {
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
          Spark에서 생긴 친구/애인과
          <br />
          <span className="hilight">가고싶은 운동경기는?</span>
        </h2>
      </Section>
      <Section>
        <div>
          <button>축구 경기</button>
          <button>야구 경기</button>
        </div>
      </Section>
      <Form>
        <label>원하는 선택지가 없다면?</label>
        <Input type="text" placeholder="자유롭게 대답해주세요~!" />
      </Form>
    </>
  );
}

export default FourQuestion;
