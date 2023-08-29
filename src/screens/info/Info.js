import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../UI/Button/Button";
import { useState } from "react";
import InfoImage from "../../assets/info_image.png";
import NoLinkFemaleImage from "../../assets/modal_nolink.png";
import { dbService } from "../../db/firebase";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import Modal from "../UI/Modal/Modal";
import Backdrop from "../UI/Modal/Backdrop";
import { calcDate } from "../../controllers";

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
  height: 5rem;
  section h2 {
    line-height: 2.1rem;
    font-size: 1.6rem;
    padding: 0 1.2rem;
    .hilight {
      color: #248fcd;
    }
  }

  @media (min-width: 40rem) {
    margin: 0 auto;
    max-width: 25rem;
  }
`;

const Section = styled.section``;

const Form = styled.form`
  height: calc(100vh - 6rem - 5rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 1.2rem;
  & label {
    font-weight: bold;
  }
  & > div {
    display: flex;
    flex-direction: column;
  }
  & .InfoImageContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    & img {
      width: 60%;
      margin: 1.2rem 0;
    }
  }
  @media (min-width: 40rem) {
    & .InfoImageContainer {
      & img {
        width: 50%;
        margin: 1.2rem 0;
      }
    }

    margin: 0 auto;
    max-width: 25rem;
  }

  @media (max-height: 715px) {
    & .InfoImageContainer {
      & img {
        width: 40%;
        margin: 1.2rem 0;
      }
    }
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
    border-color: #248fcd;
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
  const [modal, setModal] = useState(false);
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

  // 현재 날짜, 시간 계산
  // const calcDate = () => {
  //   const date = new Date();

  //   const dateFormat =
  //     date.getFullYear() +
  //     "-" +
  //     (date.getMonth() + 1) +
  //     "-" +
  //     date.getDay() +
  //     "  " +
  //     date.getHours() +
  //     ":" +
  //     date.getMinutes() +
  //     ":" +
  //     date.getSeconds();

  //   return dateFormat;
  // };
  const createUser = async () => {
    userInfo.coin += 3;

    if (openChatUrl !== "") {
      userInfo.coin += 2;
    }

    await addDoc(collection(dbService, "users"), {
      ...userInfo,
      openChatLink: { url: openChatUrl, from: openChatUrl !== "" ? "회원가입 페이지" : "프로필에서 링크 추가할 예정" },
      coin: userInfo.coin,
      createdAt: calcDate(),
    });
  };

  const updateUser = async () => {
    if (openChatUrl !== "") {
      const userRef = doc(dbService, "users", `${user.document_id}`);
      await updateDoc(userRef, {
        coin: user.coin + 2,
        openChatLink: { url: openChatUrl, from: openChatUrl !== "" ? "프로필 페이지" : "프로필에서 링크 추가할 예정" },
      });
    }
  };

  const condtitonal = () => {
    if (!userId) {
      createUser();
      navigate("/", { state: { userInfo } });
    } else {
      createUser();
      navigate("/", { state: { user } });
    }
  };
  const toggleModal = () => setModal((prev) => !prev);
  const onConfirm = () => {
    toggleModal();
    condtitonal();
  };
  const onCancle = () => {
    toggleModal();
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!userId) {
      if (openChatUrl === "") {
        toggleModal();
      } else {
        if (openChatUrl !== "") {
          createUser();
          navigate("/", { state: { userInfo } });
        }
      }
    } else {
      if (openChatUrl === "") {
        toggleModal();
      } else {
        if (openChatUrl !== "") {
          updateUser();
          navigate("/", { state: { user } });
        }
      }
    }
  };

  const urlInputChangeHandler = (event) => {
    setOpenChatUrl(event.target.value);
  };

  return (
    <>
      {modal ? <Backdrop onClick={toggleModal} /> : null}
      {modal ? (
        <Modal>
          <span>메세지를 이용할 수 없어요</span>
          <img src={NoLinkFemaleImage} />
          <span>
            내 오픈채팅 링크를 등록하지 않으면
            <br />
            새로운 친구들과 이야기 할 수 없어요
          </span>
          <div className="btn__container">
            <button className="cancle" onClick={onCancle}>
              취소
            </button>
            <button className="confirm" onClick={onConfirm}>
              건너뛰기
            </button>
          </div>
        </Modal>
      ) : null}
      <Header></Header>
      <Main>
        <Section>
          <h2>
            <span className="hilight">오픈채팅방</span> 등록하고 더 많은
            <br />
            메시지 기회를 얻어가세요!
          </h2>
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
            오픈채팅방은 반드시 <span className="hilight">1:1 채팅방</span>으로 생성해야합니다(그룹채팅방 X)
          </span>
        </div>
        <div className="InfoImageContainer">
          <img src={InfoImage} />
        </div>
        <Button type="submit">시작하기</Button>
      </Form>
    </>
  );
}

export default Info;
