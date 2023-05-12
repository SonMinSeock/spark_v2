import React from "react";
import Button from "../../components/UI/Button";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  margin-top: 42px;
  margin-right: 13px;
  color: #65656d;
  font-weight: bold;
  @media (min-width: 669px) {
    font-size: 1.5rem;
  }
  a {
    cursor: pointer;
    text-decoration: none;
    color: #65656d;
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
    color: #76757b;
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
`;
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
`;

const ServiceIntroduceSection = styled.section`
  max-width: 290px;
  margin: 0px 30px;
  padding: 30px 0px;
  @media (min-width: 669px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.2em;
    max-width: none;
    margin-top: 25px;
    div {
      max-width: 650px;
    }
  }

  span {
    display: block;
    color: #313447;
    font-weight: bold;
    margin-bottom: 10px;
  }
  p {
    color: #76757b;
    margin-bottom: 10px;
    font-size: 13px;
    @media (min-width: 669px) {
      font-size: 1em;
    }
  }
`;

const SplashScreen = () => {
  const navigate = useNavigate();

  const onClickRediect = () => {
    navigate("/login");
  };

  const handleCopyClipBoard = async (link) => {
    try {
      await navigator.clipboard.writeText(link);
      alert("웹사이트 링크 복사되었습니다.");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Header>
        <span
          onClick={() =>
            handleCopyClipBoard(
              "https://web-spark-app-4c7jj2blhejxep3.sel4.cloudtype.app"
            )
          }
        >
          공유하기
        </span>
      </Header>
      <Section>
        <Paragraph>
          나와 관심사가 비슷한
          <br />
          경운대학교 친구를 찾아보세요
        </Paragraph>
        <Paragraph>
          5개의 관심사 질문에 대해
          <br />
          알려주시면 친구를 소개해 드려요.
        </Paragraph>
      </Section>
      <Section>
        <img src={require("../../images/nobackground/sports/Football.png")} />
        <img src={require("../../images/nobackground/sports/Basketball.png")} />
        <img src={require("../../images/nobackground/sports/Baseball.png")} />
        <img src={require("../../images/nobackground/sports/Football.png")} />
      </Section>
      <Footer>
        <Button onClick={onClickRediect}>시작하기</Button>
      </Footer>
      <ServiceIntroduceSection>
        <div>
          <span>서비스 이용 방법</span>
          <p>
            1. 현재는 완성 서비스가 아닙니다. 만약 문제가 발생했다면 인스타그램
            공식 계정(sparkapp_campus)로 DM 부탁드리겠습니다.
          </p>
          <p>
            2. 서비스를 악용하는 유저를 발견했다면 위와 동일하게 신고해 주시면
            감사하겠습니다.
          </p>
          <p>3. 1인 1회가 최대 이용 횟수입니다.</p>
          <p>
            4. 서비스 이용 후 친구 소개는 입력하신 인스타 계정 DM으로
            보내드립니다. (시간이 걸릴 수 있습니다.)
          </p>
          <p>
            5. 서비스 이용시 기본 1명의 친구를 소개해 드립니다. 만약 친구를
            초대하면 추가 3명의 친구를 소개해 드려요.
          </p>
        </div>
      </ServiceIntroduceSection>
    </div>
  );
};

export default SplashScreen;
