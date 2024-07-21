import React, { useState } from "react";
import styled from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Modal from "../../ui/Modal";

const Container = styled.div`
  width: 90%;
  margin: 30px auto;
`;

const ContentQuill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

const QuillContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  height: 30vh;
  .ql-editor {
    height: 64%;
  }
  .ql-toolbar.ql-snow {
    width: 50vw;
  }
  .ql-container.ql-snow {
    border: none;
  }
`;

const QuillEditor = styled(ReactQuill)`
  width: 70%;
`;

const StyledContent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  align-items: center;
  gap: 50px;
`;

const StyledRowSetting = `
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-right: 10px;
`;

const ContactSetting = styled.div`
  ${StyledRowSetting}
`;

const StyledTitle = `
  display: flex;
  gap: 10px;
  align-items: center;
  margin: 18px 0px;
`;

const TitleGame = styled.div`
  ${StyledTitle}
`;

const PrizeValue = styled.div`
  ${StyledTitle}
`;

const Chargingpoints = styled.div`
  ${StyledTitle}
`;

const GiftPoints = styled.div`
  ${StyledTitle}
`;

const Description = styled.div`
  ${StyledTitle}
`;

const ImageContainer = styled.div`
  width: 297px;
  height: 213px;
  border-radius: 23px;
  margin-top: -30px;
  position: relative;
  cursor: ${({ isEditing }) => (isEditing ? "pointer" : "default")};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const EditImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`;

const EditData = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
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

const ButtonEnter = styled.button`
  width: 18%;
  border: none;
  outline: none;
  background-color: #5c2d91;
  border-radius: 4px;
  color: #fff;
  padding: 5px 0px;
  z-index: 100;
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
  z-index: 100;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const ButtonsCategory = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  margin-top: 30px;
  justify-content: center;
  gap: 20px;
`;

const InputEdit = styled.input`
  box-shadow: inset 0px 1px 4.8px rgba(0, 0, 0, 0.25);
  padding: 0px 13px;
  border-radius: 4px;
  background-color: #fff;
  white-space: normal;
  word-wrap: break-word;
  width: 440px;
  height: 30px;
  border: none;
  outline: none;
  &:focus {
    outline: none;
  }
`;

const StyledTextarea = styled.textarea`
  box-shadow: inset 0px 1px 4.8px rgba(0, 0, 0, 0.25);
  padding: 0px 13px;
  border-radius: 4px;
  background-color: #fff;
  white-space: pre-wrap;
  word-wrap: break-word;
  width: 440px;
  border: none;
  outline: none;
  resize: none;
  overflow: hidden;
  &:focus {
    outline: none;
  }
`;

const Title = styled.h4`
  font-size: 17px;
  font-weight: 600;
  color: #5b2c90;
  margin-left: 30px;
`;

const StyleResult = styled.h4`
  text-align: center;
  font-weight: 600;
  font-size: 17px;
`;

const EditTitle = styled.h3`
  text-align: center;
  font-size: 24px;
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const TermsButton = styled.button`
  background-color: #5c2d91;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  width: 35%;
  margin-top: 20px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const ModalButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 38px;
  gap: 9px;
`;

const modules = {
  toolbar: [[{ header: "1" }, { header: "2" }, { font: [] }], [{ size: [] }], ["bold", "italic", "underline", "strike", "blockquote"], [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }], ["link", "image"], ["clean"], [{ color: [] }, { background: [] }]],
};

const formats = ["header", "font", "size", "bold", "italic", "underline", "strike", "blockquote", "list", "bullet", "indent", "link", "image", "color", "background"];

function Setting() {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "Gamzie",
    prize_value: "50.000",
    charging_points: "500",
    gift_Points: "500",
    description: "يلا العب دلوقتي وزود نقطك وفرص الفوز بالجايزه الكبري معانا",
  });
  const [image, setImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [termsAndConditions, setTermsAndConditions] = useState("");

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setImage(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleTextareaInput = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  const handleImageClick = () => {
    if (isEditing) {
      document.getElementById("file-input").click();
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTermsAndConditions("");
  };

  const handleModalSave = () => {
    console.log("Terms and conditions saved:", termsAndConditions);
    closeModal();
  };

  return (
    <Container>
      {isEditing && <EditTitle>تعديل البيانات</EditTitle>}
      {!isEditing && (
        <EditData onClick={handleEditClick}>
          <EditName>تعديل البيانات</EditName>
          <EditIcon src="/Edit.svg" />
        </EditData>
      )}
      <StyledContent>
        <ImageContainer onClick={handleImageClick} isEditing={isEditing}>
          <Image src={image ? image : "/Gamzie.svg"} />
          {isEditing && <EditImage src={image || "/editGamzies.svg"} />}
          <HiddenFileInput id="file-input" type="file" accept="image/*" onChange={handleImageChange} />
        </ImageContainer>
        <ContactSetting>
          <TitleGame>
            <Title>اسم اللعبه</Title>
            {isEditing ? <InputEdit type="text" name="name" value={userInfo.name} onChange={handleChange} /> : <StyleResult>{userInfo.name}</StyleResult>}
          </TitleGame>
          <PrizeValue>
            <Title>قيمه الجايزه</Title>
            {isEditing ? <InputEdit type="text" name="prize_value" value={userInfo.prize_value} onChange={handleChange} style={{ fontSize: "16px", marginRight: "-10px" }} /> : <StyleResult style={{ marginRight: "-10px" }}>{userInfo.prize_value}</StyleResult>}
          </PrizeValue>
          <Chargingpoints>
            <Title>نقاط الشحن</Title>
            {isEditing ? <InputEdit type="text" name="charging_points" value={userInfo.charging_points} onChange={handleChange} style={{ fontSize: "16px" }} /> : <StyleResult>{userInfo.charging_points}</StyleResult>}
          </Chargingpoints>
          <GiftPoints>
            <Title>نقاط الهدايا</Title>
            {isEditing ? <InputEdit type="text" name="gift_Points" value={userInfo.gift_Points} onChange={handleChange} style={{ fontSize: "16px" }} /> : <StyleResult>{userInfo.gift_Points}</StyleResult>}
          </GiftPoints>
          <Description>
            <Title>وصف اللعبه</Title>
            {isEditing ? <StyledTextarea name="description" value={userInfo.description} onChange={handleChange} onInput={handleTextareaInput} /> : <StyleResult>{userInfo.description}</StyleResult>}
          </Description>
          {isEditing ? "" : <TermsButton onClick={openModal}>اضافه الشروط والأحكام</TermsButton>}
        </ContactSetting>
      </StyledContent>
      {isEditing && (
        <ButtonsCategory>
          <ButtonEnter onClick={handleSaveClick}>تعديل</ButtonEnter>
          <ButtonCancel onClick={handleCancelClick}>إلغاء</ButtonCancel>
        </ButtonsCategory>
      )}
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <ContentQuill>
            <QuillContainer>
              <QuillEditor value={termsAndConditions} onChange={setTermsAndConditions} modules={modules} formats={formats} />
            </QuillContainer>
            <ModalButtons>
              <ButtonCancel onClick={closeModal}>إلغاء</ButtonCancel>
              <ButtonEnter onClick={handleModalSave}>حفظ</ButtonEnter>
            </ModalButtons>
          </ContentQuill>
        </Modal>
      )}
    </Container>
  );
}

export default Setting;
