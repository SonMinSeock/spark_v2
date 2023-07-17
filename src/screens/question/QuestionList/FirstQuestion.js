import { useState } from "react";
import styled from "styled-components";

function FirstQuestion() {
  const Section = styled.section`
    &:nth-child(2) {
      margin-top: 2rem;
    }
  `;
  const MbtiContainer = styled.div`
    padding: 0rem 1.2rem;
    button {
      border-radius: 1rem;
      border: 1px solid gray;
      background-color: #ffffff;
      padding: 0.3rem 0.8rem;
      font-size: 1.1rem;
      margin-top: 0.8rem;
      margin-right: 0.8rem;
      cursor: pointer;
      &.selected {
        background-color: #a7dfd4;
        color: white;
        border-color: #a7dfd4;
      }
    }
  `;
  const mbtiList = [
    ["INFP", "INFJ", "INTP"],
    ["INTJ", "ISFP", "ISFJ"],
    ["ISTP", "ISTJ", "ENFP"],
    ["ENFJ", "ENTP", "ENTJ"],
    ["ESFP", "ESFJ", "ESTP"],
    ["ESTJ", "관심없어요"],
  ];

  const [isMbti, setIsMbti] = useState("");

  return (
    <>
      <Section>
        <h2>
          당신의
          <span className="hilight">MBTI</span>는
          <br />
          무엇인가요?
        </h2>
      </Section>
      <Section>
        {mbtiList.map((mbtis, index) => {
          return (
            <MbtiContainer key={index}>
              {mbtis.map((mbti, index) => (
                <button
                  key={index}
                  value={mbti}
                  className={isMbti === mbti ? `selected` : null}
                  onClick={(event) => setIsMbti(event.target.value)}
                >
                  {mbti}
                </button>
              ))}
            </MbtiContainer>
          );
        })}
      </Section>
    </>
  );
}

export default FirstQuestion;
