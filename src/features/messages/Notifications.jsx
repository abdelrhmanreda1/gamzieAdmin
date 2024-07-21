import React, { useState } from "react";
import styled from "styled-components";
import { BsCheck2Circle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const MessageContainer = styled.div`
  width: 340px;
  height: 595px;
  background-color: #fff;
  box-shadow: 0px -1px 5.2px 5px #00000040;
  border-radius: 0px 0px 32px 32px;
  position: absolute;
  top: -19px;
  left: -35px;
  z-index: 3;
  &::-webkit-scrollbar {
    width: 0px;
  }
`;

const MessageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
  margin-top: 20px;
`;

const Name = styled.h5`
  font-size: 20px;
`;

const FilterMessage = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 25px 0px 50px 0px;
`;

const StyledFilter = `
 display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const StyledRead = styled.div`
  ${StyledFilter}
`;

const StyledUnRead = styled.div`
  ${StyledFilter}
`;

const IconSMs = styled.img`
  cursor: pointer;
`;

const CheckIcon = styled(BsCheck2Circle)`
  color: #5c2d91;
  width: 18px;
  height: 18px;
`;

const CheckUnRead = styled.img`
  width: 18px;
  height: 18px;
`;

const TitleRead = styled.p`
  color: ${(props) => (props.active ? "#5c2d91" : "#949599")};
  font-size: 12px;
  font-weight: ${(props) => (props.active ? "600" : "normal")};
`;

const TitleUnRead = styled.p`
  color: ${(props) => (props.active ? "#5c2d91" : "#949599")};
  font-size: 12px;
  font-weight: ${(props) => (props.active ? "600" : "normal")};
`;

const StyledAllUser = styled.div`
  height: 380px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 3px;
  }
`;

const StyleuserMessage = `
 padding: 7px;
  position: relative;
  cursor: pointer;
   margin: 7px auto;
  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    border-bottom: 2px solid #7365b2;
  }
`;

const ImageContainer = styled.div``;

const StyledReadUserMs = styled.div`
  ${StyleuserMessage}

  &:hover {
    background-color: #7365b240;
  }
`;

const StyledUnReadUserMs = styled.div`
  ${StyleuserMessage}

  &:hover {
    background-color: #7365b240;
  }
`;

const AboutUser = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 24px;
  gap: 7px;
`;

const StyleInfo = styled.div`
  display: flex;
  width: 80%;
  gap: 20px;
`;

const ImgUser = styled.img`
  width: 45px;
  height: 45px;
  object-fit: contain;
`;

const UserName = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

const StyledUnReadMs = styled.div`
  width: 42px;
  height: 26px;
  border-radius: 50%;
  object-fit: contain;
  background-color: #5b2c90;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 13px;
`;
const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: -25px;
`;
const BtnSendMessage = styled.button`
  width: 193px;
  height: 34px;
  border-radius: 8px;
  background-color: #5c2d91;
  color: #fff;
  border: none;
  outline: none;
  &:focus {
    outline: none;
  }
`;

function Notifications({ onClose }) {
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();
  const messages = [
    {
      id: 1,
      info: "حصل محمد احمد علي 200 نقطه في لعبه لودو",
      img: "/1.svg",
      unreadCount: 2,
      isRead: false,
    },
    {
      id: 2,
      info: "حصل احمد علي علي 200 نقطه في لعبه لودو",
      img: "/1.svg",
      unreadCount: 0,
      isRead: true,
    },
    {
      id: 3,
      info: "حصل سعيد محمد علي 200 نقطه في لعبه لودو",
      img: "/1.svg",
      unreadCount: 4,
      isRead: false,
    },
    {
      id: 4,
      info: "حصل علي يوسف علي 200 نقطه في لعبه لودو",
      img: "/1.svg",
      unreadCount: 0,
      isRead: true,
    },
    {
      id: 5,
      info: "حصل محمود حسن علي 200 نقطه في لعبه لودو",
      img: "/1.svg",
      unreadCount: 6,
      isRead: false,
    },
  ];

  const filteredMessages = filter === "all" ? messages : messages.filter((msg) => !msg.isRead);

  function handleNavigateToChat(navigate, userId) {
    return () => {
      navigate("/notifications", { state: { userId } });
      onClose();
    };
  }

  return (
    <MessageContainer>
      <MessageHeader>
        <Name>الاشعارات</Name>
        <IconSMs src="/notification.svg" />
      </MessageHeader>
      <FilterMessage>
        <StyledRead onClick={() => setFilter("all")}>
          {filter === "all" ? <CheckIcon /> : <CheckUnRead src="/accept 4.svg" />}
          <TitleRead active={filter === "all"}>الكل</TitleRead>
        </StyledRead>
        <StyledUnRead onClick={() => setFilter("unread")}>
          {filter === "unread" ? <CheckIcon /> : <CheckUnRead src="/accept 4.svg" />}
          <TitleUnRead active={filter === "unread"}>الغير مقروء</TitleUnRead>
        </StyledUnRead>
      </FilterMessage>
      <StyledAllUser>
        {filteredMessages.map((msg) =>
          msg.isRead ? (
            <StyledReadUserMs key={msg.id} onClick={handleNavigateToChat(navigate, msg.id)}>
              <AboutUser>
                <ImgUser src={msg.img} />
                <StyleInfo>
                  <UserName>{msg.info}</UserName>
                </StyleInfo>
              </AboutUser>
            </StyledReadUserMs>
          ) : (
            <StyledUnReadUserMs key={msg.id} onClick={handleNavigateToChat(navigate, msg.id)}>
              <AboutUser>
                <ImageContainer>
                  <ImgUser src={msg.img} />
                </ImageContainer>
                <StyleInfo>
                  <UserName>{msg.info}</UserName>
                  {msg.unreadCount > 0 && <StyledUnReadMs>{msg.unreadCount}</StyledUnReadMs>}
                </StyleInfo>
              </AboutUser>
            </StyledUnReadUserMs>
          )
        )}
      </StyledAllUser>
      <StyledButton onClick={handleNavigateToChat(navigate)}>
        <BtnSendMessage>ارسال اشعار</BtnSendMessage>
      </StyledButton>
    </MessageContainer>
  );
}

export default Notifications;
