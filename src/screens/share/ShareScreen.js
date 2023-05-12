import React from "react";
import styled from "styled-components";
import Button from "../../components/UI/Button";
import { FaInfoCircle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const Section = styled.section`
  &:nth-of-type(1) {
    /*margin-top: 137px; */
    height: 90%;
    padding-top: 50px;
    padding-left: 50px;
    padding-right: 50px;
    background-color: #e1efff;
    @media (min-width: 669px) {
      padding-left: 150px;
      padding-right: 150px;
    }
    @media (min-width: 2000px) {
      padding-left: 250px;
      padding-right: 250px;
    }
  }
  .info {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    p {
      font-size: 0.9rem;
      @media (min-width: 669px) {
        font-size: 1.5rem;
      }
    }
  }
`;

const Paragraph = styled.p`
  text-align: center;

  &:first-child {
    font-weight: bold;
    color: #65656d;
    font-size: 2.1rem;
    line-height: 2.6rem;
    @media (min-width: 669px) {
      font-size: 2.4rem;
      line-height: 3rem;
    }
    @media (min-width: 2000px) {
      font-size: 3.4rem;
      line-height: 4.5rem;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  height: 400px;
  @media (min-width: 669px) {
    height: 500px;
  }
`;

const Card = styled.div`
  min-width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 1.2em;
  & > div:first-child {
    display: flex;
  }

  @media (min-width: 669px) {
    min-width: 420px;
  }
  @media (min-width: 2000px) {
  }
`;

const GenderWrapper = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;

    @media (min-width: 400px) {
      width: 150px;
      height: 150px;
    }
    @media (min-width: 669px) {
      width: 150px;
      height: 150px;
    }
  }
  margin-bottom: 15px;
`;

const HobyWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const HobyRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 20px 0;
  img {
    width: 60px;
    height: 60px;
    @media (min-width: 400px) {
      width: 70px;
      height: 70px;
    }
    @media (min-width: 669px) {
      width: 80px;
      height: 80px;
    }
  }
  &:nth-of-type(2) {
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60px;
      height: 40px;
      border-radius: 0.7em;
      background-color: #007aff;
      color: #ffffff;
      font-weight: bold;
      @media (min-width: 669px) {
        width: 100px;
        height: 60px;
        font-size: 1.3em;
      }
    }
  }
`;

const Hoby = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    margin-top: 20px;
    color: #94949e;
    font-weight: bold;
  }
  @media (min-width: 669px) {
    font-size: 1.1em;
  }
`;
const Footer = styled.div`
  display: flex;
  height: 10%;
  align-items: center;
  justify-content: center;
  padding: 0px 7px;
  @media (min-width: 669px) {
    button {
      width: 620px;
    }
    font-size: 28px;
  }
`;

const ShareScreen = () => {
  const navigate = useNavigate();
  const taste = useLocation();

  const handleCopyClipBoard = async (link) => {
    try {
      await navigator.clipboard.writeText(link);
      alert("웹사이트 링크 복사되었습니다.");
    } catch (error) {
      console.error(error);
    }
  };

  const shareHoby = (hobyId) => {
    if (hobyId === 1) {
      if (taste.state.movieGenre === "액션") {
        return <img src={require("../../images/hoby/hoby_image_02.png")} />;
      } else if (taste.state.movieGenre === "호러") {
        return <img src={require("../../images/movie/movie_image_01.png")} />;
      } else if (taste.state.movieGenre === "SF") {
        return <img src={require("../../images/movie/movie_image_02.png")} />;
      } else if (taste.state.movieGenre === "코미디") {
        return <img src={require("../../images/movie/movie_image_03.png")} />;
      } else if (taste.state.movieGenre === "로맨스") {
        return <img src={require("../../images/movie/movie_image_04.png")} />;
      } else if (taste.state.movieGenre === "애니메이션") {
        return <img src={require("../../images/hoby/hoby_image_01.png")} />;
      }
    } else if (hobyId === 2) {
      if (taste.state.travelCity === "뉴욕") {
        return <img src={require("../../images/city/city_image_01.png")} />;
      } else if (taste.state.travelCity === "파리") {
        return <img src={require("../../images/city/city_image_02.png")} />;
      } else if (taste.state.travelCity === "하와이") {
        return <img src={require("../../images/city/city_image_03.png")} />;
      } else if (taste.state.travelCity === "도쿄") {
        return <img src={require("../../images/city/city_image_04.png")} />;
      } else if (taste.state.travelCity === "제주도") {
        return <img src={require("../../images/city/city_image_05.png")} />;
      } else if (taste.state.travelCity === "홍콩") {
        return <img src={require("../../images/city/city_image_06.png")} />;
      }
    } else if (hobyId === 3) {
      if (taste.state.sports === "축구") {
        return <img src={require("../../images/sports/sports_image_01.png")} />;
      } else if (taste.state.sports === "농구") {
        return <img src={require("../../images/sports/sports_image_02.png")} />;
      } else if (taste.state.sports === "야구") {
        return <img src={require("../../images/sports/sports_image_03.png")} />;
      } else if (taste.state.sports === "배구") {
        return <img src={require("../../images/sports/sports_image_04.png")} />;
      } else if (taste.state.sports === "헬스") {
        return <img src={require("../../images/sports/sports_image_05.png")} />;
      } else if (taste.state.sports === "배드민턴") {
        return <img src={require("../../images/sports/sports_image_06.png")} />;
      }
    }
  };

  return (
    <React.Fragment>
      <Section>
        <Paragraph>
          관심사가 비슷한
          <br />
          친구를 찾고 있어요.
        </Paragraph>
        <Wrapper>
          <Card>
            <GenderWrapper>
              {taste.state.gender === "female" ? (
                <img src={require("../../images/gender/female.png")} />
              ) : (
                <img src={require("../../images/gender/male.png")} />
              )}
            </GenderWrapper>
            <HobyWrapper>
              <HobyRow>
                <Hoby>
                  {shareHoby(1)}
                  <span>{taste.state.movieGenre}</span>
                </Hoby>
                <Hoby>
                  {shareHoby(2)}
                  <span>{taste.state.travelCity}</span>
                </Hoby>
                <Hoby>
                  {shareHoby(3)}
                  <span>{taste.state.sports}</span>
                </Hoby>
              </HobyRow>
              <HobyRow>
                <div>
                  <span>{taste.state.communication}</span>
                </div>
                <div>
                  <span>{taste.state.meeting}</span>
                </div>
              </HobyRow>
            </HobyWrapper>
          </Card>
        </Wrapper>
        <div className="info">
          <Paragraph>곧 안내 문자가 인스타그램 DM으로 갈꺼에요</Paragraph>
        </div>
      </Section>
      <Footer>
        <Button
          type="submit"
          style="fluid"
          onClick={() =>
            handleCopyClipBoard(
              "https://web-spark-app-4c7jj2blhejxep3.sel4.cloudtype.app"
            )
          }
        >
          나도 친구에게 공유하기
        </Button>
      </Footer>
    </React.Fragment>
  );
};

export default ShareScreen;
