import React, { useState } from "react";
import styled from "styled-components";
import { BsCheck2Circle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Modal from "../../ui/Modal";
import Select from "react-select";
const MessageContainer = styled.div`
  width: 340px;
  height: 595px;
  background-color: #fff;
  box-shadow: 0px -1px 5.2px 5px #00000040;
  border-radius: 0px 0px 32px 32px;
  position: absolute;
  top: -19px;
  left: -12px;
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
  padding: 0px 33px;
  gap: 7px;
`;

const StyleInfo = styled.div``;

const ImgUser = styled.img`
  width: 45px;
  height: 45px;
`;

const UserName = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

const UserDesc = styled.p`
  font-size: 14px;
  font-weight: 400;
`;

const StyledUnReadMs = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
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
const Container = styled.div`
  width: 90%;
  margin: 80px auto;
`;

const StyledContent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  align-items: flex-start;
  gap: 50px;
`;

const ContactSetting = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 20px;
  margin-right: 10px;
  width: 100%;
  flex: 2;
`;

const FormField = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 80%;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 16px;
  color: #5c2d91;
  min-width: 105px;
  font-weight: 400;
  text-align: left;
`;

const customSelectStyles = {
  control: (base) => ({
    ...base,
    width: "340px",
    boxShadow: "0px 1px 4.8px 0px #00000040",
    padding: "6px 13px",
    borderRadius: "4px",
    backgroundColor: "#fff",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
  }),
  option: (base, state) => ({
    ...base,
    padding: "10px",

    margin: "8px 0px",
    cursor: "pointer",
    backgroundColor: state.isSelected ? "#68289229" : "#fff",
    color: "#000",
    "&:hover": {
      backgroundColor: "#68289229",
      color: "#000",
    },
  }),
  menu: (base) => ({
    ...base,
    boxShadow: "0px 3px 12px rgba(0, 0, 0, 0.25)",
    borderBottomRightRadius: "20px !important",
    borderBottomLeftRadius: "20px",
  }),
};

const Input = styled.input`
  flex-grow: 1;
  box-shadow: inset 0px 1px 4.8px rgba(0, 0, 0, 0.25);
  padding: 10px 13px;
  border-radius: 4px;
  background-color: #fff;
  border: none;
  outline: none;
  resize: none;
  overflow: hidden;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;

const TextArea = styled.textarea`
  flex-grow: 1;
  box-shadow: inset 0px 1px 4.8px rgba(0, 0, 0, 0.25);
  padding: 9px 13px;
  border-radius: 4px;
  background-color: #fff;
  border: none;
  outline: none;
  resize: none;
  overflow: hidden;
  font-size: 16px;
  &:focus {
    outline: none;
  }
  width: 100%;
`;

const ButtonEnter = styled.button`
  width: 45%;
  border: none;
  outline: none;
  background-color: #5c2d91;
  border-radius: 4px;
  color: #fff;
  padding: 8px 0px;
  font-size: 16px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const ButtonCancel = styled.button`
  width: 45%;
  background-color: #fdf7ff;
  border: 1px solid #e1e3e6;
  padding: 8px 0px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const ButtonsCategory = styled.div`
  display: flex;
  width: 36%;
  margin: 90px auto auto auto;
  justify-content: space-between;
  gap: 20px;
`;
const StyleContentPlayer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: "Cairo";
`;
const ImageUser = styled.img`
  width: 28px;
  height: 28px;
`;
const NameUser = styled.p`
  font-size: 13px;
  font-weight: 600;
`;
const UserEmail = styled.p`
  font-size: 13px;
  font-weight: 500;
`;
function Message({ onClose }) {
  const [filter, setFilter] = useState("all");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();
  const messages = [
    {
      id: 1,
      name: "محمد احمد",
      desc: "السلام عليكم لقد حدث معي...",
      img: "/1.svg",
      unreadCount: 2,
      isRead: false,
    },
    {
      id: 2,
      name: "أحمد علي",
      desc: "السلام عليكم لقد حدث معي...",
      img: "/1.svg",
      unreadCount: 0,
      isRead: true,
    },
    {
      id: 3,
      name: "سعيد محمد",
      desc: "السلام عليكم لقد حدث معي...",
      img: "/1.svg",
      unreadCount: 3,
      isRead: false,
    },
    {
      id: 4,
      name: "علي يوسف",
      desc: "السلام عليكم لقد حدث معي...",
      img: "/1.svg",
      unreadCount: 0,
      isRead: true,
    },
    {
      id: 5,
      name: "محمود حسن",
      desc: "السلام عليكم لقد حدث معي...",
      img: "/1.svg",
      unreadCount: 5,
      isRead: false,
    },
  ];

  const filteredMessages = filter === "all" ? messages : messages.filter((msg) => !msg.isRead);

  function handleNavigateToChat(navigate, userId) {
    return () => {
      navigate("/chat", { state: { userId } });
      onClose();
    };
  }

  const handleSendMessageClick = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };
  const options = [
    {
      value: "type1",
      label: (
        <StyleContentPlayer>
          <UserEmail>Ali5690@gmail.com</UserEmail>
          <NameUser>محمد احمد </NameUser>
          <ImageUser src="/usersIcon.svg" alt="user" />
        </StyleContentPlayer>
      ),
    },
    {
      value: "type2",
      label: (
        <StyleContentPlayer>
          <UserEmail>Ali5690@gmail.com</UserEmail>
          <NameUser>محمد احمد </NameUser>
          <ImageUser src="/usersIcon.svg" alt="user" />
        </StyleContentPlayer>
      ),
    },
    {
      value: "type3",
      label: (
        <StyleContentPlayer>
          <UserEmail>Ali5690@gmail.com</UserEmail>
          <NameUser>محمد احمد </NameUser>
          <ImageUser src="/usersIcon.svg" alt="user" />
        </StyleContentPlayer>
      ),
    },
    {
      value: "type4",
      label: (
        <StyleContentPlayer>
          <UserEmail>Ali5690@gmail.com</UserEmail>
          <NameUser>محمد احمد </NameUser>
          <ImageUser src="/usersIcon.svg" alt="user" />
        </StyleContentPlayer>
      ),
    },
  ];
  const initialState = {
    image: "/Group 364.svg",
    type: { value: "type1", label: "ارسال للاعب معين" },
    title: "",
    content: "",
  };

  const [state, setState] = useState(initialState);
  return (
    <MessageContainer>
      <MessageHeader>
        <Name>الرسايل</Name>
        <IconSMs src="/sms.svg" onClick={onClose} />
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
                  <UserName>{msg.name}</UserName>
                  <UserDesc>{msg.desc}</UserDesc>
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
                  <UserName>{msg.name}</UserName>
                  <UserDesc>{msg.desc}</UserDesc>
                </StyleInfo>
                {msg.unreadCount > 0 && <StyledUnReadMs>{msg.unreadCount}</StyledUnReadMs>}
              </AboutUser>
            </StyledUnReadUserMs>
          )
        )}
      </StyledAllUser>
      <StyledButton>
        <BtnSendMessage onClick={handleSendMessageClick}>ارسال رساله</BtnSendMessage>
      </StyledButton>
      {isModalVisible && (
        <Modal title="ارسال رساله">
          <Container>
            <StyledContent>
              <ContactSetting>
                <FormField>
                  <Select value={state.type} onChange={(selectedOption) => setState((prevState) => ({ ...prevState, type: selectedOption }))} options={options} styles={customSelectStyles} placeholder="اختر نوع الإرسال" isSearchable={false} />
                  <Label>اختيار لاعب</Label>
                </FormField>

                <FormField>
                  <TextArea rows="4" value={state.content} onChange={(e) => setState((prevState) => ({ ...prevState, content: e.target.value }))}></TextArea>
                  <Label>محتوى الرساله</Label>
                </FormField>
              </ContactSetting>
            </StyledContent>

            <ButtonsCategory>
              <ButtonCancel>الغاء</ButtonCancel>
              <ButtonEnter>ارسال</ButtonEnter>
            </ButtonsCategory>
          </Container>
        </Modal>
      )}
    </MessageContainer>
  );
}

export default Message;
