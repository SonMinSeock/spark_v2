import { useState } from "react";
import styled from "styled-components";
import { IoMdContact, IoIosArrowBack } from "react-icons/io";
import CoinIcon from "../../assets/akar-icons_coin.png";
import ReportIcon from "../../assets/Vector.png";
import FemaleImage from "../../assets/female_profile_image.png";
import MaleImage from "../../assets/male_profile_image.png";
import RobotImage from "../../assets/robot_sad_image.png";
import NoLinkFemaleImage from "../../assets/modal_nolink.png";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Backdrop from "../UI/Modal/Backdrop";
import Modal from "../UI/Modal/Modal";

function Profile() {
  const HomeBackgroundBox = styled.div`
    height: 100vh;
    @media (min-width: 40rem) {
      margin: 0 auto;
      max-width: 25rem;
    }
  `;
  const Header = styled.header`
    background-color: #58c5b0;
    color: #ffffff;
    border-bottom-left-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    padding-bottom: 1rem;
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
        margin-left: 0.6rem;
      }
    }
    & svg {
      cursor: pointer;
    }
    & .remport--img {
      cursor: pointer;
      width: 1.2rem;
      height: 1.2rem;
    }
  `;
  const CoinLogo = styled.img`
    width: 1.3rem;
    height: 1.3rem;
    margin-left: 0.6rem;
  `;
  const UserProfile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & span {
      font-weight: bold;
    }
  `;
  const ProfileImg = styled.img`
    display: block;
    width: 5.5rem;
    height: 5.5rem;
    margin-bottom: 0.6rem;
  `;
  const Main = styled.main`
    padding: 0 1.2rem;
    padding-top: 1.2rem;
    margin-bottom: 0.4rem;
    & > span {
      display: block;
      color: #000;
      font-weight: bold;
      margin-bottom: 1rem;
    }
  `;
  const UserInfoContainer = styled.section`
    height: 23.5rem;
    overflow: auto;
  `;
  const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.4rem;
    padding-bottom: 0.4rem;
    border-bottom: 2px solid #e5e5ec;
    & span:first-child {
      font-weight: bold;

      margin-bottom: 0.3rem;
    }
    & span:last-child {
      font-size: 0.8rem;
      color: #808080;
    }
  `;
  const Footer = styled.footer`
    display: flex;
    align-items: center;
    height: calc(100vh - 12.8rem - 23.5rem);
    padding: 0 1.2rem;
  `;
  const Button = styled.button`
    width: 100%;
    border: none;
    padding: 0.8rem;
    background-color: #59c6b0;
    font-size: 1.1rem;
    font-weight: bold;
    color: #ffffff;
    cursor: pointer;
    border-radius: 1.2rem;
  `;

  const [modal, setModal] = useState(false);

  const {
    state: { userInfo, friend },
  } = useLocation();

  const navigate = useNavigate();
  const { id } = useParams();

  console.log(id, userInfo.id);

  const isMe = +id === userInfo.id;

  const onNavigateReport = () => navigate("/profile/2000/report");
  const backHandler = () => {
    navigate(-1);
  };
  const onModal = () => {
    console.log("on modal...");
    setModal((prev) => !prev);
  };
  const onClickAddLinkBtn = () => {
    setModal(false);
  };
  const conditionalShowModal = () => {
    if (userInfo.coin === 0) {
      return (
        <Modal>
          <span>소지하신 코인을 다 소모했어요</span>
          <span>코인은 매일 3개씩 지급돼요!</span>
          <img src={RobotImage} />
          <span className="noCoinLastText">내일 다시 접속해주실거죠?</span>
        </Modal>
      );
    }
    if (!userInfo.openChatLink) {
      return (
        <Modal>
          <span>혹시 오픈채팅 링크 등록했나요?</span>
          <img src={NoLinkFemaleImage} />
          <span>
            내 오픈채팅 링크 등록하면 코인 2개를
            <br /> 추가 지급해 드려요!
          </span>
          <button onClick={onClickAddLinkBtn}>
            내 링크 등록하고 코인 받기
          </button>
        </Modal>
      );
    }
  };

  return (
    <HomeBackgroundBox>
      {modal ? <Backdrop onClick={onModal} /> : null}
      {modal ? conditionalShowModal() : null}
      <Header>
        <Top>
          <div>
            <IoIosArrowBack size={25} onClick={backHandler} />
            <CoinLogo src={CoinIcon} />
            <span>남은 횟수 {isMe ? userInfo.coin : friend.coin}</span>
          </div>
          {!isMe ? (
            <img
              className="remport--img"
              src={ReportIcon}
              onClick={onNavigateReport}
            />
          ) : null}
        </Top>
        <UserProfile>
          <ProfileImg
            src={
              isMe
                ? userInfo.gender !== "female"
                  ? MaleImage
                  : FemaleImage
                : friend.gender !== "female"
                ? MaleImage
                : FemaleImage
            }
          />
          <span>{isMe ? userInfo.name : friend.name}</span>
        </UserProfile>
      </Header>
      <Main>
        <UserInfoContainer>
          <UserInfo>
            <span>나의 학교는</span>
            <span>{isMe ? userInfo.school : friend.school}</span>
          </UserInfo>
          <UserInfo>
            <span>나의 MBTI는</span>
            <span>{isMe ? userInfo.mbti : friend.mbti}</span>
          </UserInfo>
          <UserInfo>
            <span>나의 주량은</span>
            <span>
              {isMe ? userInfo.secondQuestion : friend.secondQuestion}
            </span>
          </UserInfo>
          <UserInfo>
            <span>애인이 있다면 더 싫은 상황은</span>
            <span>{isMe ? userInfo.thirdQuestion : friend.thirdQuestion}</span>
          </UserInfo>
          <UserInfo>
            <span>친구/애인과 가고싶은 운동경기는</span>
            <span>{isMe ? userInfo.fourQuestion : friend.fourQuestion}</span>
          </UserInfo>
          <UserInfo>
            <span>내가 만나고 싶은 사람은</span>
            <span>{isMe ? userInfo.fiveQuestion : friend.fiveQuestion}</span>
          </UserInfo>
        </UserInfoContainer>
      </Main>
      <Footer>
        <Button onClick={onModal}>
          {!isMe ? "메시지 보내기" : "내 오픈채팅방 링크"}
        </Button>
      </Footer>
    </HomeBackgroundBox>
  );
}

export default Profile;
