import React, { useEffect, useRef, useState } from "react";

import { CiLogout } from "react-icons/ci";
import { MdOutlineEdit } from "react-icons/md";
import { TbExchange } from "react-icons/tb";
import { useLocation } from "react-router-dom";
import { logout } from "../services/apiAuth";
import styled from "styled-components";
import Modal from "./Modal";
import Message from "../features/messages/Message";
import Notifications from "../features/messages/Notifications";

const StyledHeader = styled.header`
  padding: 1.2rem 4.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const NavTitle = styled.h2`
  font-size: 30px;
  font-weight: 500;
  color: var(--color-grey-800);
  background: linear-gradient(to bottom, #ffbf00, #ffa015);
  font-family: "Cairo";
  -webkit-background-clip: text;
  background-clip: text;
  margin-right: -1.8rem;
  color: transparent;
`;

const MiddleNavbar = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-300);
  padding: 5px 15px;
  border-radius: var(--border-radius-md);
`;

const Input = styled.input`
  border: none;
  width: 100%;
  display: flex;
  padding-right: 7px;
  background-color: var(--color-grey-300);
  &::placeholder {
    color: var(--color-grey-400);
    font-size: 12px;
    font-weight: 400;
  }
  &:focus {
    outline: none;
  }
`;
const StyleSearchOutline = styled.img`
  margin-top: 2px;
`;
const RightNavbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SharedIconStyle = `
  color: var(--color-grey-400);
  font-size: 28px;
  font-weight: 700;
  margin: 0px 20px;
`;
const StyleNotificationDiv = styled.div`
  position: relative;
`;

const StyledMdOutlineMail = styled.img`
  cursor: pointer;
`;

const StyleMessageDiv = styled.div`
  position: relative;
`;
const StyledNotifications = styled.img`
  ${SharedIconStyle}

  cursor: pointer;
`;

const StylesUsers = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
`;
const StyleImageContainer = styled.div`
  width: 25px;
  height: 25px;
`;
const StyleImgUser = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  z-index: 3;
`;

const DropdownButton = styled.button`
  color: var(--color-grey-800);
  padding: 0px 13px 0px 10px;
  font-size: 16px;
  background-color: red;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: transparent;
  &:focus {
    outline: none;
  }
`;
const TextAdmin = styled.p`
  margin-left: 30px;
  font-size: 14px;
`;
const DropdownIcon = styled.img`
  margin: 0px 12px;
`;

const DropdownContent = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-md);
  min-width: 219px;
  box-shadow: var(--shadow-md);
  z-index: 1;
  right: -35px;
`;

const DropdownItem = styled.button`
  background-color: transparent;
  width: 98%;
  margin: auto;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  gap: 13px;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;
  margin: 2px;
  &:hover {
    background-color: #5c2d91;
    color: var(--color-grey-0);
    border-radius: var(--border-radius-md);
  }
`;

const StyleIconAdmin = `
  font-size: 20px;
`;

const StyledMdOutlineEdit = styled(MdOutlineEdit)`
  ${StyleIconAdmin}
`;

const StyledCiLogout = styled(CiLogout)`
  ${StyleIconAdmin}
`;

const StyledTbExchange = styled(TbExchange)`
  ${StyleIconAdmin}
`;

const Content = styled.div`
  margin: 40px 0px;
  width: 350px !important;
`;

const Title = styled.h2`
  margin-bottom: 25px;
`;

const ButtonEnter = styled.button`
  width: 45%;
  border: none;
  outline: none;
  background-color: #5c2d91;
  border-radius: 4px;
  color: #fff;
  padding: 4px 0px;
  &:focus {
    outline: none;
  }
`;

const ButtonCancel = styled.button`
  width: 45%;
  background-color: #fdf7ff;
  border: 1px solid #e1e3e6;
  padding: 4px 0px;
  border-radius: 4px;
  &:focus {
    outline: none;
  }
`;

const ButtonsCategory = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  justify-content: center;
  gap: 20px;
`;

const pageTitles = {
  "/dashboard": "لوحة التحكم",
  "/users": "المستخدمين",
  "/settings": "الإعدادات",
  "/games": "الألعاب",
  "/chat": "الرسائل",
  "/notifications": "الاشعارات",
};

function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [notification, setNotification] = useState(false);
  const [pageTitle, setPageTitle] = useState("");
  const dropdownRef = useRef(null);
  const notificationsRef = useRef(null);
  const messagesRef = useRef(null);

  useEffect(() => {
    const path = location.pathname;
    const title = pageTitles[path];
    setPageTitle(title || " المستخدم");
  }, [location.pathname]);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const ToggleshowMessage = () => {
    setShowMessages((prev) => !prev);
  };

  const ToggleshowNotification = () => {
    setNotification((prev) => !prev);
  };

  const handleItemClick = (action) => {
    if (action === "Logout") {
      handleLogoutClick();
    } else {
      console.log(`Clicked: ${action}`);
    }
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
    if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
      setNotification(false);
    }
    if (messagesRef.current && !messagesRef.current.contains(event.target)) {
      setShowMessages(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [showModal, setShowModal] = useState(false);

  const handleLogoutClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirmLogout = () => {
    logout();
    setShowModal(false);
  };

  return (
    <StyledHeader>
      <NavTitle>{pageTitle}</NavTitle>
      <MiddleNavbar>
        <StyleSearchOutline src="/search-normal.svg" />
        <Input placeholder="بحث..." />
      </MiddleNavbar>
      <RightNavbar>
        <StylesUsers>
          <StyleImageContainer>
            <StyleImgUser src="/Gamzie.svg" />
          </StyleImageContainer>
          <DropdownContainer ref={dropdownRef}>
            <DropdownButton onClick={toggleDropdown}>
              <TextAdmin> المسؤول </TextAdmin>
              <DropdownIcon src="/arrow-down.svg" />
            </DropdownButton>
            <DropdownContent isOpen={isOpen}>
              <DropdownItem onClick={() => handleItemClick("Edit admin")}>
                <StyledMdOutlineEdit /> تعديل الادمن
              </DropdownItem>
              <DropdownItem onClick={() => handleItemClick("Change password")}>
                <StyledTbExchange /> تغيير كلمه السر
              </DropdownItem>
              <DropdownItem onClick={() => handleItemClick("Logout")}>
                <StyledCiLogout /> تسجيل خروج
              </DropdownItem>
            </DropdownContent>
          </DropdownContainer>
        </StylesUsers>
        <StyleNotificationDiv ref={notificationsRef}>
          <StyledNotifications src="/notification.svg" onClick={ToggleshowNotification} />
          {notification && <Notifications onClose={ToggleshowNotification} />}
        </StyleNotificationDiv>
        <StyleMessageDiv>
          <StyledMdOutlineMail src="/messageicon.svg" onClick={ToggleshowMessage} />
          {showMessages && <Message onClose={ToggleshowMessage} />}
        </StyleMessageDiv>
      </RightNavbar>
      {showModal && (
        <Modal onClose={handleCloseModal}>
          <Content>
            <Title>هل انت متاكد من تسجيل الخروج؟</Title>
            <ButtonsCategory>
              <ButtonCancel onClick={handleConfirmLogout}>نعم ارغب</ButtonCancel>
              <ButtonEnter onClick={handleCloseModal}>لا ارغب</ButtonEnter>
            </ButtonsCategory>
          </Content>
        </Modal>
      )}
    </StyledHeader>
  );
}

export default Header;
