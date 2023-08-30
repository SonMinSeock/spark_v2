import { useState } from "react";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import WhiteQuestionImage from "../../assets/twemoji_white-question-mark.png";
import RedQuestionImage from "../../assets/red-question-mark.png";
import LinkBold from "../../assets/ph_link-bold.png";
import MessageImage from "../../assets/ooui_message.png";
import PointImage from "../../assets/point_image.png";
import ReportIcon from "../../assets/mingcute_report-fill.png";
import FemaleImage from "../../assets/female_basic.png";
import MaleImage from "../../assets/male_basic.png";
import RobotImage from "../../assets/robot_sad_image.png";
import RobotSmileImage from "../../assets/robot_smile.png";
import NoLinkFemaleImage from "../../assets/modal_nolink.png";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import Backdrop from "../UI/Modal/Backdrop";
import Modal from "../UI/Modal/Modal";
import { dbService } from "../../db/firebase";
import { calcDate } from "../../controllers";

function Profile() {
  const HomeBackgroundBox = styled.div`
    height: 100vh;
    @media (min-width: 40rem) {
      margin: 0 auto;
      max-width: 25rem;
    }
  `;
  const Header = styled.header`
    background-color: #18af71;
    color: #ffffff;
    border-bottom-left-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
  `;
  const Top = styled.div`
    padding: 1rem 1.2rem;
    padding-bottom: 0.3rem;
    display: flex;
    justify-content: space-between;
    & div {
      display: flex;
      align-items: center;
      & span {
        font-size: 1.3rem;
        margin-left: 0.1rem;
      }
    }
    & svg {
      cursor: pointer;
    }
    & .remport--img {
      cursor: pointer;
      width: 1.4rem;
      height: 1.4rem;
    }
  `;

  const ProfileBox = styled.div`
    color: white;
    margin-bottom: 1rem;
  `;

  const ProfileContainer = styled.div`
    display: flex;
    padding: 0 1.2rem;
    height: 190px;
    padding-top: 1rem;
    padding-bottom: 1rem;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
  `;
  const Profile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    height: 100%;
    width: 100%;
    border-radius: 0.4rem;
    margin: 0rem 0.5rem;
    &:first-child {
      margin-left: 0rem;
    }
    &:last-child {
      margin-right: 0rem;
    }
    color: #000;
    &:last-child {
      margin-right: 0px;
    }
    & span {
      margin-top: 0.4rem;
      font-weight: bold;
    }
    & div {
      display: flex;
      justify-content: center;
      & div .friend__info {
        display: flex;
        flex-direction: column;
        & span {
          text-align: end;
          &:first-child {
            font-size: 0.8rem;
            font-weight: 400;
          }
          &:last-child {
            font-size: 1.5rem;
            font-weight: bold;
          }
        }
      }

      & div .friend__gender {
        & img {
          width: 45px;
          height: 45px;
        }
      }
    }
    & .wrapper {
    }
    & div .recomendProfileImgContainer {
      position: relative;
      width: 135px;
      height: 125px;
      background-color: #24cd8829;
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 2rem;
      & .mbti__container {
        font-size: 0.6rem;
        position: absolute;
        bottom: -7px;
        color: #ffffff;
        background-color: #000;
        border-radius: 2rem;
        padding: 0.3rem 0.6rem;
        left: 35px;
      }
    }
    & div .friend__info__container {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0rem 2rem;
      & div:first-child {
        margin-bottom: 1rem;
      }
    }
  `;

  const CoinLogo = styled.img`
    width: 1.3rem;
    height: 1.3rem;
    margin-left: 0.6rem;
  `;

  const ProfileImg = styled.img`
    width: 85px;
    height: auto;
  `;
  const Main = styled.main`
    padding: 0 1.2rem;
    padding-top: 1.2rem;
    margin-bottom: 0.4rem;
    overflow-x: hidden;
    overflow-y: auto;
    height: 50%;
    & > span {
      display: block;
      color: #000;
      font-weight: bold;
      margin-bottom: 1rem;
    }
  `;
  const UserInfoContainer = styled.section`
    height: 23.5rem;
  `;
  const UserInfo = styled.div`
    margin-bottom: 1.4rem;
    padding-bottom: 0.4rem;
    & span:first-child {
      & img {
        margin-right: 0.2rem;
      }
      display: flex;
      align-items: center;
      font-weight: bold;
      margin-bottom: 0.5rem;
      &.text_color_green {
        color: #18af71;
        font-weight: bold;
      }
    }
    & span:nth-child(2) {
      font-size: 0.8rem;
      margin-left: 1.4rem;
      border-radius: 0.8rem;
      padding: 0.3rem 0.5rem;
      &.bg_black {
        background-color: #111111;
        color: white;
        font-weight: bold;
      }

      &.bg_blue {
        background-color: #248fcd;
        color: white;
        font-weight: bold;
      }

      &.bg_grape {
        background-color: #8c61b2;
        color: white;
        font-weight: bold;
      }

      &.bg_orange {
        background-color: #f4a734;
        color: white;
        font-weight: bold;
      }

      &.bg_gray {
        display: block;
        background-color: #f3f3f4;
        color: black;
        border: 0.5px solid black;
        padding-top: 0.7rem;
        padding-bottom: 0.7rem;
        width: fit-content;
        max-width: 80%;
        line-height: 15px;
      }
    }
  `;
  const Footer = styled.footer`
    position: absolute;
    width: 100%;
    bottom: 30px;
    display: flex;
    align-items: center;
    padding: 0 1.2rem;
    @media (min-width: 40rem) {
      margin: 0 auto;
      max-width: 420px;
    }
  `;
  const Button = styled.button`
    width: 100%;
    border: none;
    padding: 0.8rem;
    background-color: #18af71;
    font-size: 1.1rem;
    font-weight: bold;
    color: #ffffff;
    cursor: pointer;
    border-radius: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    & .badge {
      font-size: 0.5rem;
      border-radius: 50%;
    }
    & img {
      width: 18px;
      height: 18px;
      margin-right: 0.5rem;
    }
  `;

  const [modal, setModal] = useState(false);
  const [linkModal, setLinkModal] = useState(false);
  const [update, setUpdate] = useState(false);
  const {
    state: { userInfo, friend, users },
  } = useLocation();

  const navigate = useNavigate();
  const { id } = useParams();

  const isMe = +id === userInfo.id;

  // 소비 컬렉션 만들기
  const createdConsumption = async () => {
    await addDoc(collection(dbService, "consumption"), {
      sendDate: calcDate(),
      fromSendUser: {
        name: userInfo.name,
        mbti: userInfo.mbti,
        email: userInfo.email,
        gender: userInfo.gender,
        id: userInfo.id,
        document_id: userInfo.document_id,
      },
      toUser: {
        name: friend.name,
        mbti: friend.mbti,
        email: friend.email,
        gender: friend.gender,
        id: friend.id,
        document_id: friend.document_id,
      },
    });
  };

  const backHandler = () => {
    navigate(-1);
  };
  const onModal = () => {
    setModal((prev) => !prev);
  };
  const isMeInfoSetDocumentId = () => {
    for (let user of users) {
      if (user.id === userInfo.id) {
        userInfo.document_id = user.document_id;
      }
    }
  };
  const onNavigateReport = () => {
    isMeInfoSetDocumentId();
    navigate("/profile/2000/report", { state: { userInfo, friend } });
  };
  const onClickAddLinkBtn = () => {
    setModal(false);
    isMeInfoSetDocumentId();

    navigate("/info", { state: { userId: userInfo.id, user: userInfo } });
  };
  const conditionalShowModal = () => {
    if (isMe && userInfo.openChatLink.url === "") {
      return (
        <Modal>
          <span>혹시 오픈채팅 링크 등록했나요?</span>
          <img src={NoLinkFemaleImage} />
          <span>
            내 오픈채팅 링크 등록하면 코인 2개를
            <br /> 추가 지급해 드려요!
          </span>
          <button onClick={onClickAddLinkBtn}>내 링크 등록하고 메세지 하기</button>
        </Modal>
      );
    }
    if (userInfo.coin === 0) {
      return (
        <Modal>
          <span>
            오늘의 포인트를 다 소모했어요
            <br />
            <span className="highlight">매일 3 포인트가</span> 지급돼요!
          </span>
          <img src={RobotImage} />
          <span className="noCoinLastText">내일 다시 접속해주실거죠?</span>
        </Modal>
      );
    } else {
      return (
        <Modal>
          <span>
            채팅방 링크를 등록하지 않은 <br />
            사용자입니다
          </span>
          <span>포인트가 차감되지 않아요!</span>
          <img src={RobotSmileImage} />
          <span className="last__text">상대방에게 링크 등록 알림을 발송했어요!</span>
        </Modal>
      );
    }
  };

  const updateUser = async (openChatLink) => {
    isMeInfoSetDocumentId();
    const userRef = doc(dbService, "users", `${userInfo.document_id}`);
    await updateDoc(userRef, {
      coin: userInfo.coin - 1,
    });

    await setUpdate(true);
    window.location.href = openChatLink;
  };

  const onClipboard = async (openChatLink) => {
    try {
      await navigator.clipboard.writeText(openChatLink);
      if (isMe) {
        alert("링크 복사했습니다.");
      } else {
        await updateUser();
        // 소비 컬렉션 만들기
        setLinkModal(false);
        alert("링크 복사했습니다.");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onConfirm = (openChatLink) => {
    //onClipboard(openChatLink);
    redirectOpenChat(openChatLink);
    setLinkModal((prev) => !prev);
  };

  const onCancle = () => setLinkModal((prev) => !prev);

  const showLinkModal = () => setLinkModal((prev) => !prev);

  const redirectOpenChat = async (openChatLink) => {
    await updateUser(openChatLink);
    await createdConsumption();
  };
  const onMessageBtnClickHandler = () => {
    if (isMe) {
      userInfo.coin !== 0 && userInfo.openChatLink.url !== "" ? onClipboard(userInfo.openChatLink.url) : onModal();
    } else {
      userInfo.coin !== 0 && friend.openChatLink.url !== ""
        ? showLinkModal()
        : //? redirectOpenChat(friend.openChatLink)
          // ? showLinkModal()
          onModal();
    }
  };

  const showProfile = () => {
    return (
      <Profile>
        <div>
          <div className="wrapper">
            <div className="recomendProfileImgContainer">
              {!isMe ? (
                <ProfileImg src={friend.gender === "female" ? FemaleImage : MaleImage} />
              ) : (
                <ProfileImg src={userInfo.gender === "female" ? FemaleImage : MaleImage} />
              )}
            </div>
          </div>
          <div className="friend__info__container">
            <div className="friend__info">
              {!isMe ? <span>{friend.school}</span> : <span>{userInfo.school}</span>}
              {!isMe ? <span>{friend.name}</span> : <span>{userInfo.name}</span>}
            </div>
          </div>
        </div>
      </Profile>
    );
  };

  return (
    <HomeBackgroundBox>
      {modal ? <Backdrop onClick={onModal} /> : null}
      {modal ? conditionalShowModal() : null}
      {linkModal ? <Backdrop onClick={showLinkModal} /> : null}
      {linkModal ? (
        <Modal>
          <span>메세지 보내실건가요? 코인 1감소 됩니다.</span>
          <img src={NoLinkFemaleImage} />
          <div className="btn__container">
            <button className="confirm" onClick={() => onConfirm(friend.openChatLink.url)}>
              확인
            </button>
            <button className="cancle" onClick={onCancle}>
              취소
            </button>
          </div>
        </Modal>
      ) : null}
      <Header>
        <Top>
          <div>
            <IoIosArrowBack size={25} onClick={backHandler} />
            <CoinLogo src={PointImage} />
            <span>남은 횟수 {userInfo.coin}</span>
          </div>
          {!isMe ? <img className="remport--img" src={ReportIcon} onClick={onNavigateReport} /> : null}
        </Top>
        <ProfileBox>
          <ProfileContainer>{showProfile()}</ProfileContainer>
        </ProfileBox>
      </Header>
      <Main>
        <UserInfoContainer>
          <UserInfo>
            <span>
              <img src={WhiteQuestionImage} /> 내 MBTI는
            </span>
            <span className="bg_black">{isMe ? userInfo.mbti : friend.mbti}</span>
          </UserInfo>
          <UserInfo>
            <span>
              <img src={WhiteQuestionImage} /> 내 주량은
            </span>
            <span className="bg_blue">{isMe ? userInfo.secondQuestion : friend.secondQuestion}</span>
          </UserInfo>
          <UserInfo>
            <span>
              <img src={WhiteQuestionImage} /> 애인이 있다면 더 싫은 상황은
            </span>
            <span className="bg_grape">{isMe ? userInfo.thirdQuestion : friend.thirdQuestion}</span>
          </UserInfo>
          <UserInfo>
            <span>
              <img src={WhiteQuestionImage} /> 친구/애인과 가고싶은 운동경기는
            </span>
            <span className="bg_orange">{isMe ? userInfo.fourQuestion : friend.fourQuestion}</span>
          </UserInfo>
          <UserInfo>
            <span className="text_color_green">
              <img src={RedQuestionImage} /> SPARK에서 만나고 싶은 사람은
            </span>
            {isMe ? (
              userInfo.fiveQuestion !== "" ? (
                <span className="bg_gray">{userInfo.fiveQuestion}</span>
              ) : null
            ) : friend.fiveQuestion !== "" ? (
              <span className="bg_gray">{friend.fiveQuestion}</span>
            ) : null}
          </UserInfo>
        </UserInfoContainer>
      </Main>
      <Footer>
        <Button onClick={onMessageBtnClickHandler}>
          <img src={!isMe ? MessageImage : LinkBold} />
          {!isMe ? ` 메시지 보내기 ` : ` 내 오픈채팅방 링크`}
        </Button>
      </Footer>
    </HomeBackgroundBox>
  );
}

export default Profile;
