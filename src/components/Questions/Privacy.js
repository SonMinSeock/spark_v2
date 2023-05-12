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
    span {
      display: block;
      padding: 0 25px;
      color: #9999a4;
      font-size: 15px;
      margin-top: 10px;
    }
    @media (min-width: 669px) {
      span {
        font-size: 18px;
      }
    }
  }
  &:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    @media (min-width: 669px) {
      margin-top: 20px;
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
    }
    span {
      color: #65656d;
      font-size: 15px;
      padding: 0 25px;
    }
    span:last-child {
      margin-top: 10px;
    }
    @media (min-width: 669px) {
      span {
        font-size: 18px;
      }
    }
  }
`;

const Paragraph = styled.p`
  &:first-child {
    padding: 0 25px;
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

const Privacy = () => {
  return (
    <React.Fragment>
      <Section>
        <Paragraph>
          Spark를 이용하려면
          <br />
          개인정보 동의가 필요해요
        </Paragraph>
        <span>
          새로운 친구를 인스타 아이디 기반을 통해 소개해 드리기 위해서는 동의가
          필요해요
        </span>
      </Section>
      <Section>
        <span>[필수] 인스타 아이디를 통해 DM을 수신 동의</span>
        <span>
          [필수] 인스타 아이디를 친구 추천을 위해 제 3자에게 공유 동의
        </span>
      </Section>
    </React.Fragment>
  );
};

export default Privacy;
