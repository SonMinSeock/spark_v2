import styled from "styled-components";
import LogoTitle from "../../components/logo/LogoTitle";
import kakaoBubbleSVG from "../../kakao_svgrepo_com.svg";
import MockupSVG from "../../assets/mockup__image.png";
import { analyticsButtonLogEvent } from "../../libs/analytics";
import { useEffect } from "react";

function Login() {
  const LoginBackgroundColor = styled.div`
    height: 100vh;
    background-color: #d7dbda;
  `;

  const Header = styled.header`
    /* height: 14rem; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 12rem;
    & h2 {
      font-size: 1.1rem;
      /* font-weight: bold; */
      font-weight: 800;
      margin-top: 0.8rem;
      text-align: center;
      & .highlight {
        color: #278eff;
      }
    }

    @media (max-width: 17.5rem) {
      & h2 {
        font-size: 1rem;
      }
    }
    @media (min-width: 24rem) {
      & h2 {
        font-size: 1.7rem;
      }
    }

    @media (min-width: 390px) {
      & h1 {
        font-size: 3.2rem;
      }
      & h2 {
        font-size: 1.4rem;
      }
    }

    @media (min-width: 40rem) {
      margin: 0 auto;
      max-width: 25rem;
      & h1 {
        font-size: 2.8rem;
      }
    }
  `;
  const Main = styled.main`
    /* height: calc(100vh - 14rem - 5rem); */
    /* padding: 0 1.2rem; */
    height: calc(100% - 18rem);
    & section {
      display: flex;
      height: 100%;

      flex-direction: column;
      justify-content: center;
      align-items: center;
      & p {
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 0.8rem;
      }
      @media (min-width: 24rem) {
        & p {
          font-size: 1rem;
        }
      }
    }
    & .login__img {
      width: 100%;
      height: auto;
      @media (min-width: 31.25rem) {
        & {
          width: 70%;
        }
      }
      @media (min-width: 40rem) {
        & {
          width: 60%;
        }
      }
    }

    @media (min-width: 40rem) {
      margin: 0 auto;
      max-width: 25rem;
    }
  `;
  const Footer = styled.footer`
    /* height: 5rem; */
    height: 6rem;
    padding: 0 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .login__btn {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #f8e116;
      padding: 0.8rem;
      border-radius: 1.2rem;
      width: 100%;
      span {
        font-size: 0.9rem;
        font-weight: bold;
      }
      cursor: pointer;
    }

    .kakaoBubble {
      width: 1.4rem;
      margin-right: 0.5rem;
    }

    @media (min-width: 40rem) {
      margin: 0 auto;
      max-width: 25rem;
      .login__btn {
        span {
          font-size: 1rem;
        }
      }
      .kakaoBubble {
        width: 1.8rem;
        margin-right: 0.5rem;
      }
    }
  `;

  const CLIENT_ID = `${process.env.REACT_APP_REST_API_KEY}`;
  const REDIRECT_URI = `${process.env.REACT_APP_REDIRECT_URL}`;
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}
  `;

  const createUserHandler = () => {
    analyticsButtonLogEvent(`카카오 회원가입 버튼 클릭한 사용자 수`);
    window.location.href = kakaoURL;
  };

  useEffect(() => {
    analyticsButtonLogEvent(`엔트리 화면에 들어온 사용자 수`);
  }, []);

  return (
    <div>
      <LoginBackgroundColor>
        <Header>
          <h2>강남대 X 단국대</h2>
          <LogoTitle>spark</LogoTitle>
          {/* <h2>대학교 친구 찾기 서비스</h2> */}
          {/* <h2>강남대 X 단국대</h2> */}
          <h2>
            1분만에
            <span className="highlight"> 관심사가 같은 친구</span>를 만나봐요!
          </h2>
        </Header>
        <Main>
          <section>
            <img className="login__img" alt="spark_image" src={MockupSVG} />
            <p>내 주변 대학 친구를 간편하게 사귀고 싶다면?</p>
          </section>
        </Main>
        <Footer>
          <div className="login__btn" onClick={createUserHandler}>
            <img className="kakaoBubble" src={kakaoBubbleSVG} />
            <span>카카오 계정으로 회원가입</span>
          </div>
        </Footer>
      </LoginBackgroundColor>
    </div>
  );
}

export default Login;
