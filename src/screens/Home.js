import { useState } from "react";
import styled from "styled-components";
import { IoMdContact } from "react-icons/io";
import CoinImage from "../assets/coin_image.png";
import FemaleImage from "../assets/female_basic.png";
import MaleImage from "../assets/male_basic.png";
import RobotSmileImage from "../assets/robot_smile.png";
import FmaleHartImage from "../assets/female_hart.png";
import MaleHartImage from "../assets/male_hart.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { dbService } from "../db/firebase";
import { collection, onSnapshot, orderBy, query, doc, updateDoc } from "firebase/firestore";
import Backdrop from "./UI/Modal/Backdrop";
import Modal from "./UI/Modal/Modal";
import { analyticsButtonLogEvent } from "../libs/analytics";

const HomeBackgroundBox = styled.div`
  height: 100vh;
  background-color: #ffffff;
  @media (min-width: 40rem) {
    margin: 0 auto;
    max-width: 25rem;
  }
`;
const Header = styled.header`
  background-color: #18af71;
  color: #ffffff;
  padding-top: 2rem;
`;
const Top = styled.div`
  padding: 1rem 1.2rem;
  display: flex;
  justify-content: space-between;
  /* margin-bottom: 1.5rem; */
  & div {
    display: flex;
    flex-direction: column;
    & span {
      font-weight: bold;
      font-size: 0.9rem;
    }
    & span:first-child {
      font-size: 1.3rem;
      margin-bottom: 0.5rem;
    }
  }
  & svg {
    cursor: pointer;
  }
`;

const CoinLogo = styled.img`
  width: 1.3rem;
  height: 1.3rem;
`;

const RecomendBox = styled.div`
  color: white;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
`;

const Text = styled.div`
  padding: 0 1.2rem;
  margin-bottom: 1rem;
  & span {
    display: block;
  }
  & span:first-child {
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
`;
const RecomendFriends = styled.div`
  display: flex;
  padding: 0 1.2rem;
  height: 190px;
  padding-top: 1rem;
  padding-bottom: 1rem;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
`;
const RecomendFriend = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  height: 100%;
  border-radius: 0.4rem;
  margin: 0rem 0.5rem;
  padding-left: 2rem;
  &:first-child {
    margin-left: 0rem;
  }
  &:last-child {
    margin-right: 0rem;
  }
  color: #000;
  cursor: pointer;
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
  & div .recomendProfileImgContainer {
    position: relative;
    width: 120px;
    height: 115px;
    background-color: #24cd8829;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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

const RecomendProfileImg = styled.img`
  width: 75px;
  height: auto;
`;

const ProfileImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const Main = styled.main`
  padding: 0 1.2rem;
  padding-top: 0.6rem;
  margin-bottom: 0.4rem;
  & > span {
    display: block;
    color: #000;
    font-weight: bold;
    margin-bottom: 1rem;
  }
`;

const CoinDisplay = styled.div`
  display: flex;
  padding: 0.8rem 0;
  padding-left: 1rem;
  background-color: #ffefc6;
  border-radius: 1.5rem;
  margin-bottom: 1.5rem;
`;

const CoinContainer = styled.div`
  display: flex;
`;

const CoinContext = styled.div`
  & img {
    width: 60px;
    height: 60px;
    margin-right: 0.5rem;
  }
  &:last-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    & span:first-child {
      font-size: 0.8rem;
      margin-bottom: 0.5rem;
      & .highligt {
        font-size: 0.8rem;
        font-weight: bold;
      }
    }
    & span:last-child {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
`;
const TextBox = styled.div`
  padding: 0 1.2rem;
  margin-bottom: 2rem;
`;
const ChatFriends = styled.div`
  height: calc(100vh - 22rem);
  padding: 0.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 170px;
  gap: 0.8rem;
  overflow: scroll;
  @media (max-width: 300px) {
    grid-template-columns: 1fr;
  }
`;

const ChatFriend = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
  background-color: #ffffff;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0.4rem 0.8rem;
  box-shadow: 0 0 10px gray;
  cursor: pointer;
`;

const ProfileNickname = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  top: 5px;
  right: 10px;
  & span:first-child {
    font-size: 0.5rem;
    margin-bottom: 0.2rem;
  }
  & span:last-child {
    font-weight: bold;
  }
`;

const ProfileMbti = styled.div`
  position: absolute;
  bottom: 2px;
  right: 0px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & span:first-child {
    margin-left: 5px;
    font-size: 0.5rem;
    color: #ffffff;
    background-color: #000;
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
  }

  & span:last-child {
    & img {
      width: 25px;
      height: 25px;
      margin-right: 5px;
    }
  }
`;

const FriendInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 0.6rem;
  & span:first-child {
    font-weight: bold;
    margin-bottom: 0.3rem;
  }
  & span:last-child {
    color: gray;
  }
  font-size: 0.8rem;
`;

function Home() {
  const [users, setUsers] = useState([]);
  const [rewordModal, setRewordModal] = useState(false);

  const navigate = useNavigate();
  const {
    state: { user: userInfo },
  } = useLocation();

  const isMeInfoSetDocId = (docUsers) => {
    for (let docUser of docUsers) {
      if (docUser.id === userInfo.id) {
        userInfo.document_id = docUser.document_id;
      }
    }
  };

  // DB 유저 업데이트 함수
  const updateUser = async (date, reword = false) => {
    const userRef = doc(dbService, "users", `${userInfo.document_id}`);
    if (reword) {
      await updateDoc(userRef, {
        coin: userInfo.coin + 3,
        currentDate: date,
        dateViewList: [...userInfo.dateViewList, date],
      });
      setRewordModal(true);
    } else {
      await updateDoc(userRef, {
        currentDate: date,
        dateViewList: [...userInfo.dateViewList, date],
      });
    }
  };

  // 출석 보상.
  const rewordCoin = () => {
    const date = new Date();
    const currentDate = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;

    // 첫 출석인지 아닌지, 첫 출석이면 보상X, 출석하면 보상.
    if (userInfo.dateViewList.length === 0) {
      updateUser(currentDate, false);
    } else {
      if (userInfo.currentDate !== currentDate) {
        updateUser(currentDate, true);
        // toggleModal();
      }
    }
  };

  const readUsers = () => {
    const q = query(collection(dbService, "users"), orderBy("createdAt", "desc"));

    onSnapshot(q, (snapshot) => {
      let docUsers = snapshot.docs.map((doc) => ({
        ...doc.data(),
        document_id: doc.id,
      }));

      setUsers(docUsers);
      isMeInfoSetDocId(docUsers);
      rewordCoin();
    });
  };

  useEffect(() => {
    readUsers();
  }, []);

  const onNavigate = () => {
    navigate(`/profile/${userInfo.id}`, { state: { userInfo, users } });
  };

  const showRecomend = () => {
    const recomendUsers = users.map((user) => {
      if (user.coin >= 1) {
        return user;
      } else if (
        user.openChatLink !== "" ||
        user.firstQuestion !== "" ||
        user.secondQuestion !== "" ||
        user.thirdQuestion !== "" ||
        user.fourQuestion !== "" ||
        user.fiveQuestion !== ""
      ) {
        return user;
      } else {
        return user;
      }
    });
    return recomendUsers.slice(0, 3).map((friend, idx) => (
      <RecomendFriend
        key={idx}
        onClick={() =>
          navigate(`/profile/${friend.id}`, {
            state: { userInfo, friend, users },
          })
        }
      >
        <div>
          <div className="recomendProfileImgContainer">
            <RecomendProfileImg src={friend.gender === "female" ? FemaleImage : MaleImage} />
            <span className="mbti__container">{friend.mbti}</span>
          </div>
          <div className="friend__info__container">
            <div className="friend__info">
              <span>{friend.school}</span>
              <span>{friend.name}</span>
            </div>
            <div className="friend__gender">
              <img src={friend.gender === "female" ? FmaleHartImage : MaleHartImage} />
            </div>
          </div>
        </div>
      </RecomendFriend>
    ));
  };
  return (
    <>
      {rewordModal ? <Backdrop onClick={() => setRewordModal(false)} /> : null}
      {rewordModal ? (
        <Modal>
          <span>출석 보상 코인 3개 지급 되었습니다!</span>
          <img src={RobotSmileImage} />
        </Modal>
      ) : null}
      <HomeBackgroundBox>
        <Header>
          <Top>
            <div>
              <span>스파크가 추천하는 오늘의 친구</span>
              <span>{userInfo.name}님과 맞는 친구 3명을 소개합니다.</span>
            </div>
            <IoMdContact size={28} color="white" onClick={onNavigate} />
          </Top>
          <RecomendBox>
            <RecomendFriends>{showRecomend()}</RecomendFriends>
          </RecomendBox>
        </Header>
        <Main>
          <CoinDisplay>
            <CoinContainer>
              <CoinContext>
                <img src={CoinImage} />
              </CoinContext>
              <CoinContext>
                <span>
                  접속하기만 하면 <span className="highligt">매일 3포인트</span>가 지급돼요!
                </span>
                <span>남은 포인트 {userInfo.coin}P</span>
              </CoinContext>
            </CoinContainer>
          </CoinDisplay>
          <span>더 다양한 친구들을 만나볼까요?</span>
          <ChatFriends>
            {users.map((friend) => (
              <ChatFriend
                key={friend.id}
                onClick={() => {
                  analyticsButtonLogEvent(`Chat Friend ${friend.name}`);
                  navigate(`/profile/${friend.id}`, {
                    state: { userInfo, friend, users },
                  });
                }}
              >
                <ProfileImg src={friend.gender === "female" ? FemaleImage : MaleImage} />
                <ProfileNickname>
                  <span>{friend.school}</span>
                  <span>{friend.name}</span>
                </ProfileNickname>
                {/* <FriendInfo>
                  <span>{friend.name}</span>
                  <span>{friend.school}</span>
                </FriendInfo> */}
                <ProfileMbti>
                  <span>{friend.mbti}</span>
                  <span>
                    <img src={friend.gender === "female" ? FmaleHartImage : MaleHartImage} />
                  </span>
                </ProfileMbti>
              </ChatFriend>
            ))}
          </ChatFriends>
        </Main>
      </HomeBackgroundBox>
    </>
  );
}

export default Home;
