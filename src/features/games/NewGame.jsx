import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../../ui/Modal";
import AddFormGame from "./AddFormGame";

const StyledContainer = styled.div`
  height: auto;
  background-color: #c6bbdb;
  border-radius: 21px;
  padding: 20px 10px;
  width: 336px;
  height: 424px;
`;

const StyleEditDiv = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-left: 16px;
  gap: 6px;
  cursor: pointer;
`;

const EditIcon = styled.img`
  width: 22px;
  height: 22px;
`;

const EditTitle = styled.p`
  font-size: 11px;
  color: #5c2d91;
  font-weight: 400;
`;

const StyleMainContent = styled.div`
  width: 100%;
  margin: auto;
  margin-top: 15px;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 12px;
  height: 100%;
  margin: auto;
`;

const ImageContainer = styled.div`
  width: 178px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 178px;
  object-fit: contain;
`;

const TitleImage = styled.h3`
  font-size: 23px;
  font-weight: 500;
  width: 100%;
  margin-top: 20px;
  color: #000000;
`;

const StyledActiveUsersContainer = styled.div`
  width: 94%;
  margin: 35px auto 14px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const Users = styled.div`
  width: 48%;
  background-color: #5c2d91;
  border-radius: 14.5px;
  padding: 5px 2px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Imageuser = styled.img`
  width: 20px;
  height: 20px;
`;

const NumUser = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: #fff;
  letter-spacing: 1px;
`;

const UserTitle = styled.p`
  font-size: 7px;
  font-weight: 400;
  color: #fff;
`;

const ActiveUsers = styled.div`
  width: 48%;
  background-color: #5c2d91;
  border-radius: 14.5px;
  padding: 5px 2px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledTotalContainer = styled.div`
  width: 88%;
  margin: 7px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const TotalTour = styled.div`
  width: 44%;
  border-radius: 14.5px;
  padding: 6px 2px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #9d86be;
  color: #fff;
`;

const TourNum = styled.p`
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 1px;
`;

const TourName = styled.p`
  font-size: 7px;
  font-weight: 400;
`;

const TotalTime = styled.div`
  width: 44%;
  border-radius: 14.5px;
  padding: 6px 2px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #9d86be;
  color: #fff;
`;

const TimeNum = styled.p`
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 1px;
`;

const TimeName = styled.p`
  font-size: 7px;
  font-weight: 400;
`;

function NewGame({ game = {} }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentGame, setCurrentGame] = useState(game);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveGame = (updatedGame) => {
    setCurrentGame(updatedGame); // Update the current game state
    // You can optionally send the updatedGame to an API or perform further actions here
  };

  return (
    <StyledContainer>
      <StyleEditDiv onClick={handleOpenModal}>
        <EditTitle>تعديل البيانات</EditTitle>
        <EditIcon src="/Edit.svg" />
      </StyleEditDiv>
      <StyleMainContent>
        <ImageContainer>
          <Image src={currentGame.image || "/knife.svg"} />
        </ImageContainer>
        <TitleImage>{currentGame.name}</TitleImage>
      </StyleMainContent>
      <StyledActiveUsersContainer>
        <Users>
          <Imageuser src="/user.png" alt="user" />
          <NumUser>{currentGame.users || 0}</NumUser>
          <UserTitle>المستخدمين</UserTitle>
        </Users>
        <ActiveUsers>
          <Imageuser src="/activeuser.svg" alt="user" />
          <NumUser>{currentGame.activeUsers || 0}</NumUser>
          <UserTitle>المستخدمين الناشطين</UserTitle>
        </ActiveUsers>
      </StyledActiveUsersContainer>
      <StyledTotalContainer>
        <TotalTour>
          <TourNum>{currentGame.totalTours || 0}</TourNum>
          <TourName>الجولات الاجماليه</TourName>
        </TotalTour>
        <TotalTime>
          <TimeNum>{currentGame.totalTime || 0}</TimeNum>
          <TimeName>الوقت الكلي</TimeName>
        </TotalTime>
      </StyledTotalContainer>
      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <AddFormGame title="تعديل اللعبه" game={currentGame} onClose={handleCloseModal} onSave={handleSaveGame} EditNameButton="تعديل" />
        </Modal>
      )}
    </StyledContainer>
  );
}

export default NewGame;
