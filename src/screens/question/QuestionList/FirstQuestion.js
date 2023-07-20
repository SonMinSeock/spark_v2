import { useRef } from "react";
import { useState } from "react";
import styled from "styled-components";

function FirstQuestion({ inputQuestionHandler, mbti: enteredMbti }) {
  const Section = styled.section`
    &:nth-child(2) {
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
    }
  `;
  const MbtiContainer = styled.div`
    padding: 0rem 1.2rem;
    display: flex;
    justify-content: space-between;
    margin: 0.48rem 0;
    &:last-child {
      justify-content: space-between;
      width: 68%;
    }
    button {
      border-radius: 1rem;
      border: 1px solid gray;
      background-color: #ffffff;
      padding: 0.4rem 1rem;
      font-size: 1.1rem;
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
                  className={enteredMbti === mbti ? `selected` : null}
                  onClick={() => {
                    inputQuestionHandler(1, mbti);
                  }}
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
