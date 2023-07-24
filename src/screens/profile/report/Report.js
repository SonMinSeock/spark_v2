import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../UI/Button/Button";
import { useState } from "react";
import Backdrop from "../../UI/Modal/Backdrop";
import Modal from "../../UI/Modal/Modal";
import NoLinkFemaleImage from "../../../assets/modal_nolink.png";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { dbService } from "../../../db/firebase";

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
  /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */
  border: 2px solid gray;
  font-size: 0.9rem;
  &:focus {
    border-color: #58c5b0;
  }
`;
const ButtonContainer = styled.div`
  width: 100%;
  @media (min-width: 40rem) {
    margin: 0 auto;
    max-width: 25rem;
  }
`;
function Report() {
  const [report, setReport] = useState("");
  const [modal, setModal] = useState(false);

  const navigate = useNavigate();
  const {
    state: { userInfo, friend },
  } = useLocation();

  const backHandler = () => {
    navigate(-1);
  };

  const onReportInputChange = (event) => {
    setReport(event.target.value);
  };
  const onModal = () => {
    setModal((prev) => !prev);
  };
  const confirmReport = () => {
    if (report !== "") {
      sendReport(report);
      updateUser();
      alert("신고 접수 완료 했습니다.");
    }
    onModal();
    setReport("");
  };
  const cancleReport = () => {
    onModal();
  };
  const sendReport = async (report) => {
    await addDoc(collection(dbService, "reports"), {
      reporterId: userInfo.id,
      reporterName: userInfo.name,
      report,
      id: friend.id,
      name: friend.name,
    });
  };
  const updateUser = async () => {
    const userRef = doc(dbService, "users", `${friend.document_id}`);
    await updateDoc(userRef, {
      reportList: [
        ...friend.reportList,
        {
          id: userInfo.id,
          name: userInfo.name,
          email: userInfo.email,
        },
      ],
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onModal();
  };

  return (
    <>
      {modal ? <Backdrop onClick={onModal} /> : null}
      {modal ? (
        <Modal>
          <span>신고 하실건가요?</span>
          <img src={NoLinkFemaleImage} />
          <div className="btn__container">
            <button className="confirm" onClick={confirmReport}>
              확인
            </button>
            <button className="cancle" onClick={cancleReport}>
              취소
            </button>
          </div>
        </Modal>
      ) : null}
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
      <Form onSubmit={onSubmit}>
        <div>
          <label htmlFor="report">신고 사유</label>
          <Textarea
            id="report"
            rows={11}
            cols={20}
            placeholder="신고할 내용을 작성해주세요."
            onChange={onReportInputChange}
            value={report}
          />
        </div>
        <ButtonContainer>
          <Button type="submit">신고하기</Button>
        </ButtonContainer>
      </Form>
    </>
  );
}

export default Report;
