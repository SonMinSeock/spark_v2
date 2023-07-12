import { useState } from "react";
import styled from "styled-components";
import { IoMdContact } from "react-icons/io";

function Home() {
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
    margin-bottom: 1.5rem;
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

  const HomeLogo = styled.div`
    width: 1.3rem;
    height: 1.3rem;
    background-color: pink;
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
    justify-content: space-between;
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
  const ProfileImg = styled.div`
    width: 2.2rem;
    height: 3rem;
    background-color: aqua;
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
      margin-bottom: 0.3rem;
    }
    font-size: 0.8rem;
  `;
  const [coin, setCoin] = useState(0);

  const recomendFriends = [
    {
      id: 1000,
      username: "지오니",
      university: "경운대학교",
      gender: "female",
    },
    {
      id: 1001,
      username: "스폰지밥",
      university: "금오공과대학교",
      gender: "female",
    },
    ,
    { id: 1002, username: "라이언", university: "경운대학교", gender: "male" },
  ];

  const chatRooms = [
    {
      id: 2000,
      username: "어피치",
      university: "경운대학교",
      gender: "female",
    },
    {
      id: 2001,
      username: "치킨먹고싶다",
      university: "단국대학교",
      gender: "male",
    },
    { id: 2002, username: "춘식이", university: "경희대학교", gender: "male" },
    {
      id: 2003,
      username: "고양이집사",
      university: "부산대학교",
      gender: "female",
    },
    {
      id: 2004,
      username: "비빔냉면",
      university: "한양대학교",
      gender: "male",
    },
  ];

  return (
    <HomeBackgroundBox>
      <Header>
        <Top>
          <div>
            <HomeLogo />
            <span>남은 횟수 {coin}</span>
          </div>
          <IoMdContact size={28} color="white" />
        </Top>
        <RecomendBox>
          <Text>
            <span>새로운 친구들을 만나보세요!</span>
            <span>나와 잘 통할 것 같은 친구를 매일 3명 추천해요!</span>
          </Text>
          <RecomendFriends>
            {recomendFriends.map((friend) => (
              <RecomendFriend>
                <ProfileImg />
                <span>{friend.username}</span>
              </RecomendFriend>
            ))}
          </RecomendFriends>
        </RecomendBox>
      </Header>
      <Main>
        <span>모든 대화방</span>
        <ChatFriends>
          {chatRooms.map((friend) => (
            <ChatFriend>
              <ProfileImg />
              <FriendInfo>
                <span>{friend.username}</span>
                <span>{friend.university}</span>
              </FriendInfo>
            </ChatFriend>
          ))}
        </ChatFriends>
      </Main>
    </HomeBackgroundBox>
  );
}

export default Home;
