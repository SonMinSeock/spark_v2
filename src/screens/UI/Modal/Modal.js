import ReactDOM from "react-dom";
import styled from "styled-components";

function Modal({ children, type = "default" }) {
  const ModalWrap = styled.div`
    position: fixed;
    top: 20vh;
    left: 13%;
    width: 75%;
    background-color: #ffffff;
    z-index: 30;
    /*padding-top: 1rem;*/
    @media (min-width: 40rem) {
      width: 26%;
      max-width: 700px;
      min-width: 26%;
      left: 37%;
    }
  `;
  const ModalContext = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    & span {
      margin-bottom: 1rem;
      color: #737373;
      font-size: 0.8rem;
      text-align: center;
      line-height: 1.1rem;
    }
    & .highlight {
      font-size: 1rem;
      color: #248fcd;
    }
    & span:first-child {
      margin-top: 1rem;
      font-size: 1rem;
      font-weight: bold;
      color: black;
      line-height: 23px;
    }
    & span:last-child {
      margin-bottom: 0;
    }
    & .last__text {
      padding-bottom: 1rem;
    }
    .noCoinLastText {
      padding-bottom: 1rem;
    }
    & img {
      margin-bottom: 1rem;
    }
    & button {
      width: 100%;
      background-color: #248fcd;
      color: #ffffff;
      font-size: 1.2rem;
      font-weight: bold;
      border: none;
      padding: 0.5rem 0;
    }
    & .btn__container {
      width: 100%;
      display: flex;
    }

    & .cancle {
      background-color: red;
    }
  `;

  return (
    <>
      {ReactDOM.createPortal(
        <ModalWrap>
          <ModalContext>{children}</ModalContext>
        </ModalWrap>,
        document.getElementById("overlay-root")
      )}
    </>
  );
}

export default Modal;
