import React from "react";
import Button from "../../components/UI/Button";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  margin-top: 42px;
  margin-right: 13px;
  color: #65656D;
  font-weight: bold;
  @media (min-width: 669px) {
    font-size: 1.5rem;
  }
  a {
    cursor: pointer;
    text-decoration: none;
    color: #65656D;
  }
`;

const Section = styled.section`
  &:nth-of-type(1) {
    margin-top: 90px;
  }
  &:nth-of-type(2) {
    display: flex;
    justify-content: space-evenly;
    margin-top: 100px; 
  }
  img {
    width: 20%;
  }
  @media (min-width: 669px) {
    &:nth-of-type(1) {
      margin-top: 180px;
    }
    &:nth-of-type(2) {
      display: flex;
      justify-content: space-evenly;
      margin-top: 200px;
    }
    img {
      width: 15%;
    }    
  }
  @media (min-width: 2000px) {
    &:nth-of-type(1) {
      margin-top: 180px;
    }
    &:nth-of-type(2) {
      display: flex;
      justify-content: space-evenly;
      margin-top: 120px;
    }
    img {
      width: 13%;      
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
    color: #76757B;
    line-height: 1.4rem;
    margin-top: 10px;
    @media (min-width: 669px) {
      font-size: 1.5rem;
      line-height: 2rem;
    }
    @media (min-width: 2000px) {
      font-size: 2.2rem;
      line-height: 3rem; 
    }
  }

`
const Footer = styled.footer`
  display: flex;
  justify-content: center;
  margin-top: 92px;
  @media (min-width: 669px) {
    margin-top: 180px;
  }
  @media (min-width: 2000px) {
    margin-top: 120px;
  }
`

const SplashScreen = () => {
  const navigate = useNavigate();
  
  const onClickRediect = () => {
    navigate("/login");
  }

  return (
    <div>
      <Header>
        <Link to="/share">공유하기</Link>
      </Header>
      <Section>
        <Paragraph>
          나와 관심사가 비슷한
          <br />
          경운대학교 친구를 찾아보세요
        </Paragraph>
        <Paragraph>
          매일 새로운 질문에 관심사를 등록하면
          <br />
          새로운 친구 최대 5명을 추천해 드려요.
        </Paragraph>
      </Section>
      <Section>
        <img src={require("../../images/hoby/hoby_image_01.png")} />        
        <img src={require("../../images/hoby/hoby_image_02.png")} />
        <img src={require("../../images/hoby/hoby_image_03.png")} />
        <img src={require("../../images/hoby/hoby_image_04.png")} />
      </Section>
      <Footer>
        <Button onClick={onClickRediect}>시작하기</Button>
      </Footer>
    </div>
  );
};

export default SplashScreen;
