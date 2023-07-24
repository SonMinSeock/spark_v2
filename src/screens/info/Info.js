import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../UI/Button/Button";
import { useState } from "react";
import InfoImage from "../../assets/info_image.png";
import { dbService } from "../../db/firebase";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";

const Header = styled.header`
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.2rem;
  .back__icon {
    cursor: pointer;
  }
  @media (min-width: 40rem) {
    margin: 0 auto;
    max-width: 25rem;
  }
`;
const Main = styled.main`
  section h2 {
    line-height: 2.1rem;
    font-size: 1.6rem;
    padding: 0 1.2rem;
    margin-top: 2rem;
    .hilight {
      color: #8cd7c7;
    }
  }

  @media (min-width: 40rem) {
    margin: 0 auto;
    max-width: 25rem;
  }
`;

const Section = styled.section`
  /* &:nth-child(2) {
      margin-top: 2rem;
      padding: 1.2rem;
      div {
        display: flex;
        flex-direction: column;
        button {
          font-size: 1.2rem;
          padding: 0.4rem 0rem;
          border: 2px solid gray;
          font-weight: bold;
          background-color: #ffffff;
          &:last-child {
            margin-top: 1rem;
            border-color: #58c5b0;
            background-color: #58c5b0;
            color: #ffffff;
          }
          border-radius: 1rem;
          cursor: pointer;
        }
      }
    } */
  h2 {
    margin-bottom: 1rem;
  }
  p {
    padding: 0 1.2rem;
    color: gray;
    font-weight: bold;
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }
  &:nth-child(2) {
    display: flex;
    justify-content: center;
    img {
      width: 150px;
      height: 230px;
    }
  }
  @media (min-width: 40rem) {
    &:nth-child(2) {
      div {
        width: 220px;
        height: 350px;
        background-color: yellow;
      }
      img {
        width: 200px;
        height: 330px;
      }
    }
  }
`;

const Form = styled.form`
  height: calc(100vh - 30rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  label {
    margin-top: 2rem;
  }
  & > div {
    display: flex;
    flex-direction: column;
    padding: 0 1.2rem;
  }

  @media (min-width: 40rem) {
    margin: 0 auto;
    max-width: 25rem;
    height: calc(100vh - 38.4rem);
  }
`;
const Input = styled.input`
  padding: 0.5rem 1rem;
  margin: 1rem 0;
  border: 2px solid gray;
  outline: none;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  &:focus {
    border-color: #58c5b0;
  }
  & + .info__text {
    color: gray;
    font-weight: bold;
    font-size: 0.7rem;
    & .hilight {
      color: red;
    }
  }
`;
function Info() {
  const navigate = useNavigate();
  const {
    state: { userId, user },
  } = useLocation();

  const [openChatUrl, setOpenChatUrl] = useState("");

  const {
    state: { enteredUserInfo: userInfo },
  } = useLocation();

  const backHandler = () => {
    navigate(-1);
  };

  const createUser = async () => {
    if (openChatUrl !== "") {
      userInfo.coin += 3;
    }

    await addDoc(collection(dbService, "users"), {
      ...userInfo,
      openChatLink: openChatUrl,
      createdAt: Date.now(),
    });
  };

  const updateUser = async () => {
    if (openChatUrl !== "") {
      const userRef = doc(dbService, "users", `${user.document_id}`);
      await updateDoc(userRef, {
        coin: user.coin + 3,
        openChatLink: openChatUrl,
      });
    }
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!userId) {
      createUser();
      navigate("/", { state: { userInfo } });
    } else {
      updateUser();
      navigate("/", { state: { user } });
    }
  };

  const urlInputChangeHandler = (event) => {
    setOpenChatUrl(event.target.value);
  };

  return (
    <>
      <Header>
        <IoIosArrowBack
          size={25}
          className="back__icon"
          onClick={backHandler}
        />
      </Header>
      <Main>
        <Section>
          <h2>
            <span className="hilight">오픈채팅방</span> 등록하고 더 많은
            <br />
            메시지 기회를 얻어가세요!
          </h2>
          <p>
            친구들이 먼저 나에게 메시지를 보낼 수 있어요.
            <br />
            다른 친구에게 메시지 보낼 수 있는 코인 추가지급 까지!
          </p>
        </Section>
        <Section>
          <img src={InfoImage} />
        </Section>
      </Main>
      <Form onSubmit={formSubmitHandler}>
        <div>
          <label htmlFor="onpen__chatlink">내 오픈채팅방 링크</label>
          <Input
            type="url"
            placeholder="링크를 입력해주세요"
            id="onpen__chatlink"
            onChange={urlInputChangeHandler}
            value={openChatUrl}
          />
          <span className="info__text">
            <span className="star__char">*</span>
            오픈채팅방은 반드시 <span className="hilight">1:1 채팅방</span>으로
            생성해야합니다(그룹채팅방 X)
          </span>
        </div>
        <Button type="submit">시작하기</Button>
      </Form>
    </>
  );
}

export default Info;
