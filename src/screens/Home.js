import { useState } from "react";
import styled from "styled-components";
import { IoMdContact } from "react-icons/io";
import CoinIcon from "../assets/akar-icons_coin.png";
import FemaleImage from "../assets/female_image.png";
import MaleImage from "../assets/male_image.png";
import RobotSmileImage from "../assets/robot_smile.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { dbService } from "../db/firebase";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  doc,
  updateDoc,
} from "firebase/firestore";
import Backdrop from "./UI/Modal/Backdrop";
import Modal from "./UI/Modal/Modal";

const HomeBackgroundBox = styled.div`
  height: 100vh;
  background-color: #e2ebf0;
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
`;
const Top = styled.div`
  padding: 1rem 1.2rem;
  display: flex;
  justify-content: space-between;
  /* margin-bottom: 1.5rem; */
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
`;
const RecomendFriend = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  width: 6.5rem;
  height: 7.6rem;
  border-radius: 0.4rem;
  margin: 0rem 0.5rem;
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
`;
const ProfileImg = styled.img`
  display: block;
  width: 3rem;
  height: 3rem;
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
const TextBox = styled.div`
  padding: 0 1.2rem;
  margin-bottom: 2rem;
`;
const ChatFriends = styled.div`
  height: calc(100vh - 22rem);
  overflow: scroll;
`;

const ChatFriend = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0.4rem 0.8rem;
  cursor: pointer;
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
    const currentDate = `${date.getFullYear()}.${
      date.getMonth() + 1
    }.${date.getDate()}`;

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
    const q = query(
      collection(dbService, "users"),
      orderBy("createdAt", "desc")
    );

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
        <ProfileImg
          src={friend.gender === "female" ? FemaleImage : MaleImage}
        />
        <span>{friend.name}</span>
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
              <CoinLogo src={CoinIcon} />
              <span>남은 횟수 {userInfo.coin}</span>
            </div>
            <IoMdContact size={28} color="white" onClick={onNavigate} />
          </Top>
          <TextBox>
            <span>코인은 매일 3개씩 지급돼요!</span>
          </TextBox>
          <RecomendBox>
            <Text>
              <span>새로운 친구들을 만나보세요!</span>
            </Text>
            <RecomendFriends>{showRecomend()}</RecomendFriends>
          </RecomendBox>
        </Header>
        <Main>
          <span>모든 대화방</span>
          <ChatFriends>
            {users.map((friend) => (
              <ChatFriend
                key={friend.id}
                onClick={() =>
                  navigate(`/profile/${friend.id}`, {
                    state: { userInfo, friend, users },
                  })
                }
              >
                <ProfileImg
                  src={friend.gender === "female" ? FemaleImage : MaleImage}
                />
                <FriendInfo>
                  <span>{friend.name}</span>
                  <span>{friend.school}</span>
                </FriendInfo>
              </ChatFriend>
            ))}
          </ChatFriends>
        </Main>
      </HomeBackgroundBox>
    </>
  );
}

export default Home;
