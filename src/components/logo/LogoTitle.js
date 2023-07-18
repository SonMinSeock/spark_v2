import styled from "styled-components";

function LogoTitle({ children }) {
  const Title = styled.h1`
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.6rem;
    font-family: "Notable", sans-serif;
  `;
  return <Title>{children}</Title>;
}

export default LogoTitle;
