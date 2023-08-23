import { useRef } from "react";
import { useState } from "react";
import styled from "styled-components";

function FirstQuestion({ inputQuestionHandler, mbti: enteredMbti }) {
  const Section = styled.section`
    &:nth-child(1) {
      @media (min-width: 33rem) {
        & h2 {
          font-size: 2rem;
        }
      }
    }
    &:nth-child(2) {
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      @media (min-width: 33rem) {
        margin: 0 auto;
      }
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
      & button:last-child {
        @media (min-width: 33rem) {
          width: 140px;
        }
        @media (min-width: 40rem) {
          width: 126px;
        }
        @media (max-width: 290px) {
          width: 120px;
        }
      }
    }
    button {
      color: black;
      border-radius: 1rem;
      border: 1px solid gray;
      background-color: #ffffff;
      padding: 0.4rem 1rem;
      font-size: 1.1rem;
      cursor: pointer;
      &.selected {
        background-color: #248fcd;
        color: white;
        border-color: #a7dfd4;
      }
      @media (max-width: 290px) {
        & {
          padding: 0.3rem 0.5rem;
          font-size: 1rem;
          width: 60px;
        }
      }

      @media (min-width: 33rem) {
        & {
          padding: 0.6rem 1.3rem;
          font-size: 1.3rem;
          width: 120px;
        }
      }

      @media (min-width: 40rem) {
        & {
          padding: 0.4rem 1rem;
          font-size: 1.1rem;
          width: 100px;
        }
      }

      @media (min-width: 388px) {
        & {
          padding: 0.6rem 1rem;
          font-size: 1.3rem;
        }
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
          <span className="hilight">MBTI</span>를
          <br />
          알려주세요!
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
