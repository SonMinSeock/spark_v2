import React from "react";
import styled from "styled-components";

const Button = ({ type = "button", children, onClick, style = "nomal" }) => {
  const Btn = styled.button`
    width: ${style === "nomal" ? "40%" : "90%"};
    padding: 10px 0;
    border: none;
    border-radius: ${style === "nomal" ? "0.5em" : "1.2em"};
    background-color: #007aff;
    color: #ffffff;
    font-weight: 600;
    font-size: 1.2rem;
    cursor: pointer;

    @media (min-width: 669px) {
      font-size: 1.8rem;
      padding: 15px 0;
    }
    @media (min-width: 1500px) {
      padding: 20px 0;
    }
    @media (min-width: 2000px) {
      font-size: 2rem;
      padding: 24px 0;
    }
  `;
  return (
    <Btn type={type} onClick={onClick}>
      {children}
    </Btn>
  );
};

export default Button;
