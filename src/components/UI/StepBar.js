import React from "react";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: center;
  margin-top: 42px;
`;

const StepBar = ({ currentStep, maxStep, onBackStep }) => {
  const Bar = styled.div`
    width: 28%;
    height: 5px;
    background-color: ${(props) =>
      props.point <= currentStep ? "#007AFF" : "#DADDE1"};
    border-radius: 5px;
    margin-right: 10px;
    &:last-child {
      margin-right: 0;
    }
    cursor: pointer;
    @media (min-width: 669px) {
      height: 10px;
    }
  `;

  const bars = [];

  for (let i = 1; i <= maxStep; i++) {
    bars.push(<Bar key={i} point={i} onClick={() => onBackStep(i)} />);
  }

  return <Header>{bars.map((bar) => bar)}</Header>;
};

export default StepBar;
