import styled from "styled-components";
import { IoIosArrowBack, IoMdArrowDropdown } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../UI/Button/Button";
import IntroImage from "../../assets/IntroImage.png";
import useInput from "../../hooks/use-input";
import { useState } from "react";

const Main = styled.main`
  height: 37rem;
  & section:first-child h2 {
    line-height: 2.5rem;
    font-size: 1.8rem;
    font-weight: bold;
    padding: 2rem 1.2rem;
    .hilight {
      color: #248fcd;
    }
    @media (max-width: 17.5rem) {
      & {
        font-size: 1.4rem;
      }
    }
    @media (min-width: 800px) {
      & {
        font-size: 2.2rem;
      }
    }
  }
  & section:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    & img {
      height: 568px;
    }

    @media (min-width: 765px) {
      & img {
        height: 750px;
      }
    }

    @media (min-width: 900px) {
      & img {
        height: 500px;
      }
    }
  }
  & section:nth-child(3) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & section:nth-child(3) p {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5rem 0rem;
    text-align: center;
    font-size: 0.9rem;
    line-height: 1.2rem;
    font-weight: bold;
  }
  @media (min-width: 40rem) {
    margin: 0 auto;
    max-width: 25rem;
  }

  @media (max-height: 46.5rem) {
    & section:nth-child(2) {
      & img {
        height: 400px;
      }
    }
  }
`;

const IntroImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.footer`
  display: flex;
  align-items: flex-end;
  height: calc(100vh - 37rem);
  padding: 0 1.2rem;
  @media (min-width: 40rem) {
    margin: 0 auto;
    max-width: 25rem;
    height: calc(100vh - 40rem);
  }
`;

function Intro() {
  const navigate = useNavigate();

  const {
    state: { userObj },
  } = useLocation();

  const onNavigate = () => {
    navigate("/login/new/question", { state: { userObj } });
  };

  return (
    <>
      <Main>
        <section>
          <h2>
            <span className="hilight">1분만</span>에 나와 맞는
            <br />
            대학교 <span className="hilight">친구</span>를 찾아보세요
          </h2>
        </section>
        <section>
          <IntroImgContainer>
            <img src={IntroImage} />
          </IntroImgContainer>
        </section>
      </Main>
      <Footer>
        <Button onClick={onNavigate}>다음</Button>
      </Footer>
    </>
  );
}

export default Intro;
