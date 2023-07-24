import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { dbService } from "../../db/firebase";
import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useState } from "react";

function KakaoCallback({ loginHandler }) {
  const { search } = useLocation();
  const navigate = useNavigate();
  const code = search.slice(6);
  const CLIENT_ID = `${process.env.REACT_APP_REST_API_KEY}`;
  const REDIRECT_URI = `${process.env.REACT_APP_REDIRECT_URL}`;
  const grantType = "authorization_code";
  const kakaoURL = `https://kauth.kakao.com/oauth/token?grant_type=${grantType}&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&code=${code}`;

  const [isSign, setIsSign] = useState(false);

  function readUser(kakaoData) {
    // 카카오 id와 유저의 id 같은지 확인.
    const q = query(
      collection(dbService, "users"),
      orderBy("createdAt", "desc")
    );
    onSnapshot(q, (snapshot) => {
      const users = snapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      // if (
      //   users.find((user) => user.email === kakaoData.kakao_account.email) !==
      //   undefined
      // ) {
      //   if (
      //     users.find((user) => user.email === kakaoData.kakao_account.email)
      //       .length !== 0
      //   ) {
      //     let user = users.find(
      //       (user) => user.email === kakaoData.kakao_account.email
      //     );
      //     loginHandler();
      //     navigate("/", { state: { user } });
      //   }
      // } else {
      //   navigate("/login/new", {
      //     state: { kakao_data: kakaoData },
      //   });
      // }
      if (
        users.find(
          (user) =>
            user.email === kakaoData.kakao_account.email ||
            user.id === kakaoData.id
        ) !== undefined
      ) {
        if (
          users.find(
            (user) =>
              user.email === kakaoData.kakao_account.email ||
              user.id === kakaoData.id
          ).length !== 0
        ) {
          let user = users.find(
            (user) =>
              user.email === kakaoData.kakao_account.email ||
              user.id === kakaoData.id
          );
          loginHandler();
          console.log("user : ", user);
          navigate("/", { state: { user } });
        }
      } else {
        navigate("/login/new", {
          state: { kakao_data: kakaoData },
        });
      }
    });
  }
  useEffect(() => {
    axios
      .post(
        kakaoURL,
        {},
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      )
      .then((res) => {
        const { access_token } = res.data;
        axios
          .post(
            `https://kapi.kakao.com/v2/user/me`,
            {},
            {
              headers: {
                Authorization: `Bearer ${access_token}`,
                "Content-Type":
                  "application/x-www-form-urlencoded;charset=utf-8",
              },
            }
          )
          .then((res) => {
            readUser(res.data);
          });
      });
  }, []);

  return <></>;
}

export default KakaoCallback;
