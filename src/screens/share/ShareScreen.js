import React from "react";
import styled from "styled-components";
import Button from "../../components/UI/Button";
import { FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Section = styled.section`
  &:nth-of-type(1) {
    /*margin-top: 137px; */

    padding-top: 50px;
    padding-left: 50px;
    padding-right: 50px;
    background-color: #e1efff;
    @media (min-width: 669px) {
      padding-left: 150px;
      padding-right: 150px;
    }
    @media (min-width: 2000px) {
      padding-left: 250px;
      padding-right: 250px;
    }
  }
`;

const Paragraph = styled.p`
  text-align: center;
  &:first-child {
    font-weight: bold;
    color: #65656d;
    font-size: 2.1rem;
    line-height: 2.6rem;
    @media (min-width: 669px) {
      font-size: 2.4rem;
      line-height: 3rem;
    }
    @media (min-width: 2000px) {
      font-size: 3.4rem;
      line-height: 4.5rem;
    }
  }
  &:nth-of-type(2) {
    color: #76757b;
    font-size: 0.9rem;
    line-height: 1.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0px;
    @media (min-width: 669px) {
      height: 18%;
      font-size: 1.5rem;
      line-height: 2rem;
    }
    @media (min-width: 2000px) {
      height: 10%;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  @media (min-width: 669px) {
    height: 70%;
  }
  @media (min-width: 2000px) {
  }
`;

const Card = styled.div`
  min-width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 1.2em;
  & > div:first-child {
    display: flex;
  }

  @media (min-width: 669px) {
    min-width: 520px;
    min-height: 700px;
  }
  @media (min-width: 2000px) {
  }
`;

const GenderWrapper = styled.div`
  display: flex;
  justify-content: center;
  div {
    background-color: yellow;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    @media (min-width: 669px) {
      width: 180px;
      height: 180px;
    }
    @media (min-width: 2000px) {
    }
  }
  margin-bottom: 15px;
`;

const HobyWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const HobyRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 20px 0;
  img {
    width: 60px;
    height: 60px;
    @media (min-width: 669px) {
      width: 100px;
      height: 100px;
    }
    @media (min-width: 2000px) {
    }
  }
`;
const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 7px;
  margin-top: 30px;
  @media (min-width: 669px) {
    button {
      width: 620px;
    }
    font-size: 28px;
  }
`;

const ShareScreen = () => {
  const navigate = useNavigate();
  const onSubmit = () => {
    navigate("/share");
  };
  return (
    <React.Fragment>
      <Section>
        <Paragraph>
          관심사가 비슷한
          <br />
          친구를 찾고 있어요.
        </Paragraph>
        <Wrapper>
          <Card>
            <GenderWrapper>
              <div></div>
            </GenderWrapper>
            <HobyWrapper>
              <HobyRow>
                <img src={require("../../images/hoby/hoby_image_01.png")} />
                <img src={require("../../images/hoby/hoby_image_02.png")} />
                <img src={require("../../images/movie/movie_image_03.png")} />
              </HobyRow>
              <HobyRow>
                <img src={require("../../images/city/city_image_01.png")} />
                <img src={require("../../images/sports/sports_image_02.png")} />
              </HobyRow>
            </HobyWrapper>
          </Card>
        </Wrapper>
        <Paragraph>곧 안내 문자가 인스타그램 DM으로 갈꺼에요</Paragraph>
      </Section>
      <Footer>
        <Button type="submit" style="fluid">
          시작하기
        </Button>
      </Footer>
    </React.Fragment>
  );
};

export default ShareScreen;
