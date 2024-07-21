import React, { useState } from "react";
import styled from "styled-components";
import ChatSidebar from "../features/messages/ChatSidebar";
import ChatContent from "../features/messages/ChatContent";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  height: 100%;
`;

const users = [
  { id: 1, name: "محمد احمد", desc: "السلام عليكم لقد حدث معي...", img: "/1.svg", status: "offline" },
  { id: 2, name: "أحمد علي", desc: "مرحباً، لدي استفسار...", img: "/1.svg", status: "active" },
  { id: 3, name: "سعيد محمد", desc: "أحتاج إلى مساعدة...", img: "/1.svg", status: "offline" },
  { id: 4, name: "علي يوسف", desc: "شكراً لكم...", img: "/1.svg", status: "active" },
  { id: 5, name: "محمود حسن", desc: "هل يمكنني الاستفسار عن...", img: "/1.svg", status: "offline" },
];

const initialMessages = {
  1: [
    { sender: "user", text: "السلام عليكم لقد حدث معي..." },
    { sender: "admin", text: "اهلا بك!" },
  ],
  2: [
    { sender: "user", text: "مرحباً، لدي استفسار..." },
    { sender: "admin", text: "اهلا بك!" },
  ],
  3: [
    { sender: "user", text: "أحتاج إلى مساعدة..." },
    { sender: "admin", text: "اهلا بك!" },
  ],
  4: [
    { sender: "user", text: "شكراً لكم..." },
    { sender: "admin", text: "اهلا بك!" },
  ],
  5: [
    { sender: "user", text: "هل يمكنني الاستفسار عن..." },
    { sender: "admin", text: "اهلا بك!" },
  ],
};

function Chat() {
  const [activeUser, setActiveUser] = useState(users[0]);
  const [messages, setMessages] = useState(initialMessages);

  const handleSelectUser = (user) => {
    setActiveUser(user);
  };

  const handleSendMessage = (userId, text) => {
    setMessages((prevMessages) => ({
      ...prevMessages,
      [userId]: [...prevMessages[userId], { sender: "admin", text }],
    }));
  };

  return (
    <Container>
      <ChatSidebar users={users} onSelectUser={handleSelectUser} activeUserId={activeUser.id} />
      <ChatContent activeUser={activeUser} messages={messages[activeUser.id]} onSendMessage={handleSendMessage} />
    </Container>
  );
}

export default Chat;
