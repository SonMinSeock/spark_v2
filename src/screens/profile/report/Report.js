import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Button from "../../UI/Button/Button";

function Report() {
  const Header = styled.header`
    height: 6rem;
    display: flex;
    align-items: center;
    padding: 0 1.2rem;
    .back__icon {
      cursor: pointer;
    }
    & div {
      display: flex;
      justify-content: center;
      width: 100%;
      font-size: 1.2rem;
    }
    @media (min-width: 40rem) {
      margin: 0 auto;
      max-width: 25rem;
    }
  `;
  const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100vh - 6rem);
    & div:first-child {
      display: flex;
      flex-direction: column;
      padding: 0 1.2rem;
    }
    @media (min-width: 40rem) {
      margin: 0 auto;
      max-width: 25rem;
      height: calc(100vh - 6rem - 11.3rem);
    }
  `;

  const Textarea = styled.textarea`
    background-color: #fafafa;
    margin-top: 1rem;
    border: none;
    outline: none;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    font-size: 0.8rem;
    &:focus {
      box-shadow: #58c5b0 0px 1px 4px;
    }
  `;
  const ButtonContainer = styled.div`
    width: 100%;
    @media (min-width: 40rem) {
      margin: 0 auto;
      max-width: 25rem;
    }
  `;

  const navigate = useNavigate();

  const backHandler = () => {
    navigate(-1);
  };

  return (
    <>
      <Header>
        <IoIosArrowBack
          size={25}
          className="back__icon"
          onClick={backHandler}
        />
        <div>
          <span>신고하기</span>
        </div>
      </Header>
      <Form>
        <div>
          <label htmlFor="report">신고 사유</label>
          <Textarea
            id="report"
            rows={11}
            cols={20}
            placeholder="신고할 내용을 작성해주세요."
          />
        </div>
        <ButtonContainer>
          <Button>신고하기</Button>
        </ButtonContainer>
      </Form>
    </>
  );
}

export default Report;
