import React from "react";
import styled from "styled-components";

const Btn = styled.button`
    width: 40%;
    padding: 10px 0;
    border: none;
    border-radius: 0.5em;
    background-color: #007AFF;
    color: #FFFFFF;
    font-weight: 600;
    font-size: 1.2rem;
    cursor: pointer;

    @media (min-width: 669px) {
        font-size: 1.8rem;
        padding: 15px 0;
    }
    @media (min-width: 2000px) {
        font-size: 2rem;
        padding: 24px 0;
    }
`

const Button = ({type="button", children, onClick}) => {
  return (
    <Btn type={type} onClick={onClick}>{children}</Btn>
  );
};

export default Button;
