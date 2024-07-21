import React, { useState } from "react";
import styled from "styled-components";
import { GiTwoCoins } from "react-icons/gi";
import Modal from "../ui/Modal";
import AddOrDedectionPoint from "../features/userprofile/AddOrDedectionPoint";
import BinOrDeleteUser from "../features/userprofile/BinOrDeleteUser";
import Record from "../features/userprofile/Record";

const ProfileContainer = styled.div`
  width: 90%;
  margin: auto;
`;
const HeaderSuggesions = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Suggestion = styled.button`
  background-color: #7959a1;
  color: rgb(232 225 225);
  width: 140px;
  padding: 4px 7px;
  border-radius: 4px;
  border: 2px solid #7959a1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  outline: none;
  &:focus {
    outline: none;
  }
  ${({ isActive }) =>
    isActive &&
    `
    background-color: rgb(179 179 179);
    color :#f6f2f3;
    border:2px solid rgb(179 179 179);
  
  `}
`;
const DetailsUser = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  width: 100%;
`;
const AboutUser = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;
const ImgUser = styled.img`
  width: 50px;
  height: 50px;
  margin-top: 10px;
`;
const TotalAboutUser = styled.div`
  background-color: #92278f;
  width: 170px;
  border-radius: 25px;
  color: #fff;
  padding: 5px 8px;
  text-align: center;
  font-size: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;
const EditData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;
const EditName = styled.p`
  color: #7959a1;
  font-size: 13px;
  font-weight: 600;
`;
const EditIcon = styled.img``;
const TotalDes = styled.span`
  font-size: 12px;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const UserName = styled.h1`
  font-size: 29px;
  font-weight: 600;
`;
const StyledCoins = styled(GiTwoCoins)`
  color: gold;
  font-size: 20px;
  padding-top: 5px;
`;
const UserPoint = styled.h4`
  margin-right: 7px;
  font-size: 16px;
  margin-top: -9px;
`;
const ContactMe = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-right: 10px;
`;
const Phone = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin: 8px 0px;
`;
const IconPhone = styled.img`
  width: 18px;
  height: 18px;
`;
const Location = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin: 8px 0px;
`;
const IconLocation = styled.img`
  width: 18px;
  height: 18px;
`;
const Email = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin: 8px 0px;
`;
const IconEmail = styled.img`
  width: 18px;
  height: 18px;
`;
const Date = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin: 8px 0px;
`;
const IconDate = styled.img`
  width: 18px;
  height: 18px;
`;
const AddIcon = styled.img`
  width: 12px;
  height: 12px;
`;
const MinusIcon = styled.img`
  width: 12px;
  height: 12px;
`;
const RecordIcon = styled.img`
  width: 12px;
  height: 12px;
`;
const BanIcon = styled.img`
  width: 12px;
  height: 12px;
`;
const DeleteIcon = styled.img`
  width: 12px;
  height: 12px;
`;

const ButtonEnter = styled.button`
  width: 18%;
  border: none;
  outline: none;
  background-color: #5c2d91;
  border-radius: 4px;
  color: #fff;
  padding: 5px 0px;
  &:focus {
    outline: none;
  }
`;
const ButtonCancel = styled.button`
  width: 18%;
  background-color: #fdf7ff;
  border: 1px solid #e1e3e6;
  padding: 5px 0px;
  border-radius: 4px;
  &:focus {
    outline: none;
  }
`;
const ButtonsCategory = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  margin-top: 100px;
  justify-content: center;
  gap: 20px;
`;
const InputEdit = styled.input`
  box-shadow: inset 0px 1px 4.8px rgba(0, 0, 0, 0.25);
  padding: 0px 13px;
  border-radius: 4px;
  background-color: #fff;
  border: none;
  outline: none;
  &:focus {
    outline: none;
  }
`;
const StyleUserName = styled.div`
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;
const ProfileUser = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isRecordVisible, setIsRecordVisible] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const [userInfo, setUserInfo] = useState({
    name: "محمد احمد",
    points: "20000",
    phone: "+26 14 123456",
    location: "6 اكتوبر - دريم الاند",
    email: "mohamed@gmail.com",
    date: "1/7/2024",
  });

  const handleSuggestionClick = (modalType) => {
    if (modalType === "السجل") {
      setIsRecordVisible(!isRecordVisible);
    } else {
      setIsRecordVisible(false);
      setActiveModal(modalType);
    }
    setActiveButton(modalType);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
    setActiveButton(null);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const renderModalContent = () => {
    switch (activeModal) {
      case "اضافه نقاط":
        return (
          <>
            <AddOrDedectionPoint title="اضافه نقاط" onClose={handleCloseModal} initialPoints={2000} isAdding={true} />
          </>
        );
      case "خصم نقاط":
        return (
          <>
            <AddOrDedectionPoint title="خصم نقاط" onClose={handleCloseModal} initialPoints={2000} isAdding={false} />
          </>
        );
      case "حظر":
        return (
          <>
            <BinOrDeleteUser title="حظر" name="محمد احمد" onClose={handleCloseModal} />
          </>
        );
      case "حذف":
        return (
          <>
            <BinOrDeleteUser title="حذف" name="محمد احمد" onClose={handleCloseModal} />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <ProfileContainer>
      <HeaderSuggesions>
        <Suggestion isActive={activeButton === "اضافه نقاط"} onClick={() => handleSuggestionClick("اضافه نقاط")}>
          <AddIcon src="/add.svg" /> اضافه نقاط
        </Suggestion>
        <Suggestion isActive={activeButton === "خصم نقاط"} onClick={() => handleSuggestionClick("خصم نقاط")}>
          <MinusIcon src="/deduction.svg" /> خصم نقاط
        </Suggestion>
        <Suggestion isActive={activeButton === "السجل"} onClick={() => handleSuggestionClick("السجل")}>
          <RecordIcon src="/record.svg" /> السجل
        </Suggestion>
        <Suggestion isActive={activeButton === "حظر"} onClick={() => handleSuggestionClick("حظر")}>
          <BanIcon src="/ban.svg" /> حظر
        </Suggestion>
        <Suggestion isActive={activeButton === "حذف"} onClick={() => handleSuggestionClick("حذف")}>
          <DeleteIcon src="/delete.svg" /> حذف
        </Suggestion>
      </HeaderSuggesions>
      <DetailsUser>
        <AboutUser>
          <ImgUser src="/user1.svg" />
          <Details>
            {isEditing ? (
              <>
                <StyleUserName>
                  <UserPoint style={{ marginBottom: "-16px" }}>
                    النقاط: {userInfo.points} <StyledCoins />
                  </UserPoint>
                  <InputEdit style={{ margin: "25px 2px 14px -100px" }} type="text" name="name" value={userInfo.name} onChange={handleChange} />
                </StyleUserName>
              </>
            ) : (
              <>
                <UserName>{userInfo.name}</UserName>
                <UserPoint>
                  النقاط: {userInfo.points} <StyledCoins />
                </UserPoint>
              </>
            )}
          </Details>
        </AboutUser>
        {isEditing ? (
          ""
        ) : (
          <TotalAboutUser>
            <p>1200</p> <TotalDes>الجولات الاجماليه</TotalDes>
          </TotalAboutUser>
        )}

        {isEditing ? (
          ""
        ) : (
          <TotalAboutUser>
            {" "}
            <p> 5000 </p>
            <TotalDes>الوقت الكلي للجولات</TotalDes>
          </TotalAboutUser>
        )}

        {isEditing ? (
          " "
        ) : (
          <EditData onClick={handleEditClick}>
            <EditName>تعديل البيانات</EditName>
            <EditIcon src="/Edit.svg" />
          </EditData>
        )}
      </DetailsUser>
      <ContactMe>
        <Phone>
          <IconPhone src="/phone.svg" />
          {isEditing ? <InputEdit type="text" name="phone" value={userInfo.phone} onChange={handleChange} /> : <h4>{userInfo.phone}</h4>}
        </Phone>
        <Location>
          <IconLocation src="/location.svg" />
          {isEditing ? <InputEdit type="text" name="location" value={userInfo.location} onChange={handleChange} style={{ fontSize: "16px" }} /> : <h4>{userInfo.location}</h4>}
        </Location>
        <Email>
          <IconEmail src="/email.svg" />
          {isEditing ? <InputEdit type="email" name="email" value={userInfo.email} onChange={handleChange} style={{ fontSize: "16px" }} /> : <h4>{userInfo.email}</h4>}
        </Email>
        <Date>
          <IconDate src="/date.svg" />
          {isEditing ? <InputEdit type="text" name="date" value={userInfo.date} onChange={handleChange} style={{ fontSize: "16px" }} /> : <h4>{userInfo.date}</h4>}
        </Date>
      </ContactMe>
      {isEditing && (
        <ButtonsCategory>
          <ButtonEnter onClick={handleSaveClick}>تعديل</ButtonEnter>
          <ButtonCancel onClick={handleCancelClick}>إلغاء</ButtonCancel>
        </ButtonsCategory>
      )}
      {isRecordVisible && (
        <>
          <Record />
        </>
      )}
      {activeModal && <Modal onClose={handleCloseModal}>{renderModalContent()}</Modal>}
    </ProfileContainer>
  );
};

export default ProfileUser;
