import styled from "styled-components";
import LogoTitle from "../../components/logo/LogoTitle";
import kakaoBubbleSVG from "../../kakao_svgrepo_com.svg";
import MockupSVG from "../../assets/login_image.png";
import { useNavigate } from "react-router-dom";
import { analyticsButtonLogEvent } from "../../libs/analytics";

function Login() {
  const LoginBackgroundColor = styled.div`
    height: 100vh;
    background-color: #d7dbda;
  `;

  const Header = styled.header`
    height: 14rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & h2 {
      font-size: 2rem;
      font-weight: bold;
      margin-top: 0.3rem;
    }
    @media (min-width: 40rem) {
      margin: 0 auto;
      max-width: 25rem;
      h1 {
        font-size: 4rem;
      }
    }
  `;
  const Main = styled.main`
    height: calc(100vh - 14rem - 5rem);
    padding: 0 1.2rem;

    & section {
      display: flex;
      height: 100%;

      flex-direction: column;
      justify-content: center;
      align-items: center;
      & p {
        margin: 1.2rem 0rem;
        font-weight: bold;
      }
    }
    @media (min-width: 40rem) {
      margin: 0 auto;
      max-width: 25rem;
    }
    @media (max-height: 715px) {
      .login__img {
        width: 320px;
      }
    }
  `;
  const Footer = styled.footer`
    height: 5rem;
    padding: 0 1.2rem;
    .login__btn {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #f8e116;
      padding: 0.8rem;
      border-radius: 1.2rem;
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
          font-size: 1.3rem;
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

  const navigate = useNavigate();

  const createUserHandler = () => {
    analyticsButtonLogEvent(`KaKao Login Button`);
    window.location.href = kakaoURL;
  };

  return (
    <div>
      <LoginBackgroundColor>
        <Header>
          <LogoTitle>spark</LogoTitle>
          <h2>대학교 친구 찾기 서비스</h2>
        </Header>
        <Main>
          <section>
            <img className="login__img" src={MockupSVG} />
          </section>
        </Main>
        <Footer>
          <div className="login__btn" onClick={createUserHandler}>
            <img className="kakaoBubble" src={kakaoBubbleSVG} />
            <span>카카오계정으로 로그인</span>
          </div>
        </Footer>
      </LoginBackgroundColor>
    </div>
  );
}

export default Login;
