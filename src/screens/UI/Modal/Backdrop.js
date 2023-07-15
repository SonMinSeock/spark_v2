import ReactDOM from "react-dom";
import styled from "styled-components";

function Backdrop({ onClick: onModal }) {
  const BackdopWrap = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 20;
    background-color: rgba(0, 0, 0, 0.75);
  `;

  return (
    <>
      {ReactDOM.createPortal(
        <BackdopWrap onClick={onModal} />,
        document.getElementById("backgrop-root")
      )}
    </>
  );
}

export default Backdrop;
