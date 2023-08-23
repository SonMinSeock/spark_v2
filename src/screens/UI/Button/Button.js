import styled from "styled-components";

function Button({ type = "button", children, onClick, className = "", disabled = false }) {
  const Button = styled.button`
    width: 100%;
    background-color: #18af71;
    margin-bottom: 1rem;
    border-radius: 1.5rem;
    border: none;
    padding: 1rem;
    color: #ffffff;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    &.disabled__btn {
      background-color: #cfd9df;
      cursor: not-allowed;
    }
  `;

  return (
    <Button type={type} onClick={onClick} className={className} disabled={disabled}>
      {children}
    </Button>
  );
}

export default Button;
