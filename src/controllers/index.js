export const calcDate = () => {
  const date = new Date();

  const dateFormat =
    date.getFullYear() +
    "-" +
    (date.getMonth() + 1) +
    "-" +
    date.getDate() +
    "  " +
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds();

  return dateFormat;
};

export const webPushMessage = async (fromUser, toUser) => {
  const date = new Date().toLocaleString();
  const notificationPermission = Notification.permission;
  let notification;

  console.log(notificationPermission);
  if (notificationPermission === "granted") {
    notification = new Notification(`Spark 메시지`, {
      body: `${fromUser}님께서 ${toUser}님으로 메시지 보냈습니다. 카카오 오픈채팅 방 확인 해주세요~`,
    });
  } else if (notificationPermission !== "denied") {
    // 푸시 알람 허락 팝업창 띄우기
    Notification.requestPermission((permission) => {
      if (permission === "granted") {
        notification = new Notification(
          `Spark, ${fromUser}님께서 ${toUser}님으로 메시지 보냈습니다. 카카오 오픈채팅 방 확인 해주세요~`,
          {
            body: `메시지 보낸일시 : ${date}`,
          }
        );
      } else {
        alert("알람 허용이 거부 되었습니다.");
      }
    });
  }
};
