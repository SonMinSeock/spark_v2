import styled from "styled-components";
import LogoTitle from "../../components/logo/LogoTitle";
import kakaoBubbleSVG from "../../kakao_svgrepo_com.svg";
import MockupSVG from "../../assets/login_image.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const LoginBackgroundColor = styled.div`
    height: 100vh;
    background-color: #d7dbda;
  `;

  const Header = styled.header`
    height: 14rem;
    display: flex;
    justify-content: center;
    align-items: center;
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

    .login__img {
      width: 100%;
    }
    @media (min-width: 40rem) {
      margin: 0 auto;
      max-width: 25rem;
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

  const navigate = useNavigate();

  const createUserHandler = () => {
    navigate("/login/new");
  };

  return (
    <div>
      <LoginBackgroundColor>
        <Header>
          <LogoTitle>spark</LogoTitle>
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
