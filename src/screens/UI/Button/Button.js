import styled from "styled-components";

function Button({ type = "button", children, onClick }) {
  const Button = styled.button`
    width: 100%;
    background-color: #58c5b0;
    border: none;
    padding: 1rem;
    color: #ffffff;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
  `;

  return (
    <Button type={type} onClick={onClick}>
      {children}
    </Button>
  );
}

export default Button;
