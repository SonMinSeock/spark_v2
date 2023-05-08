import React, { useState } from "react";
import styled from "styled-components";
const Section = styled.section`
  &:nth-of-type(1) {
    height: 20%;
    margin-top: 90px;
    @media (min-width: 669px) {
      margin-top: 180px;
    }
    @media (min-width: 1500px) {
      margin-top: 100px;
    }
  }
  &:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 15px;
    @media (min-width: 669px) {
      margin-top: 150px;
    }
    @media (min-width: 1500px) {
      margin-top: 50px;
    }
    div {
      display: flex;
      justify-content: space-evenly;
      margin-bottom: 15px;
      &:last-child {
        margin-bottom: 0px;
      }
    }
    button {
      background-color: #ffffff;
      width: 90%;
      padding: 10px 0px;
      font-size: 1em;
      font-weight: bold;
      color: #007aff;
      outline: none;
      border-width: 2px;
      border-color: #007aff;
      border-radius: 1em;
      cursor: pointer;
      &:first-child {
        margin-bottom: 15px;
      }
      @media (min-width: 669px) {
        padding: 20px 0px;
        font-size: 1.5em;
      }
    }
    .select {
      background-color: #007aff;
      color: #ffffff;
      border: none;
    }
  }
`;

const Paragraph = styled.p`
  text-align: center;
  &:first-child {
    font-weight: bold;
    color: #363944;
    font-size: 1.4rem;
    line-height: 2rem;
    @media (min-width: 669px) {
      font-size: 2.4rem;
      line-height: 3rem;
    }
    @media (min-width: 2000px) {
      font-size: 3.4rem;
      line-height: 4.5rem;
    }
  }
  &:nth-child(2) {
    color: #76757b;
    line-height: 1.4rem;
    margin-top: 10px;
    font-weight: bold;
    @media (min-width: 669px) {
      font-size: 1.5rem;
      line-height: 2rem;
    }
    @media (min-width: 2000px) {
      font-size: 2.2rem;
      line-height: 3rem;
    }
  }
`;

const FourQuestion = ({ onAddHoby }) => {
  const [selectHoby, setSelectHoby] = useState();

  const onClick = (hoby) => {
    setSelectHoby(hoby);
    onAddHoby(4, hoby);
  };
  return (
    <React.Fragment>
      <Section>
        <Paragraph>
          만약 연락을 한다면
          <br />
          어떤게 더 편하세요?
        </Paragraph>
      </Section>
      <Section>
        <button
          className={selectHoby === "전화" ? "select" : ""}
          onClick={() => onClick("전화")}
        >
          전화
        </button>
        <button
          className={selectHoby === "메시지" ? "select" : ""}
          onClick={() => onClick("메시지")}
        >
          메시지
        </button>
      </Section>
    </React.Fragment>
  );
};

export default FourQuestion;
