import React, { useState } from "react";
import styled from "styled-components";
import "react-calendar/dist/Calendar.css";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import DataCalendar from "./DataCalender";

const StyledCalender = styled.div`
  border-radius: var(--border-radius-md);
  display: flex;
  flex-direction: column;
  height: calc(100vh - 309px);
  gap: 2.4rem;
  grid-column: 1 / span 2;
  padding: 1.2rem 0.3rem 3.2rem 0.3rem;
  width: 47.5%;
`;

const ButtonsCategory = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 20px;
  margin-top: -0.2rem;
`;

const FilterCategory = styled.div`
  display: flex;
  gap: 15px;
  margin-right: 10px;
`;

const ModalContent = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 140px;
  font-size: 20px;
  text-align: center;
`;

function Calenders({ selectedGame, setSelectedGame, setSelectedGameBorder, activeButton, setActiveButton }) {
  const initialDate = new Date();
  const [selectedDate, setSelectedDate] = useState(initialDate);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [calendarKey, setCalendarKey] = useState(0);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = () => {
    if (!activeButton || !selectedDate || !selectedGame) {
      setModalMessage("يرجى اختيار فلتر، تاريخ، ولعبة لإتمام العملية.");
    } else {
      setModalMessage("تم الاختيار بنجاح! شكرًا لاختيارك.");
    }
    setIsModalVisible(true);
    setSelectedDate(initialDate);
    setCalendarKey((prevKey) => prevKey + 1); // Reset the calendar
  };

  const handleModalClose = () => {
    setActiveButton("اليوم");
    setSelectedDate(initialDate);
    setSelectedGame(null);
    setIsModalVisible(false);
    setSelectedGameBorder(null);
    setCalendarKey((prevKey) => prevKey + 1); // Reset the calendar
  };

  return (
    <StyledCalender>
      <FilterCategory>
        {["اليوم", "الاسبوع", "الشهر"].map((buttonName) => (
          <Button key={buttonName} isActive={activeButton === buttonName} onClick={() => handleButtonClick(buttonName)}>
            {buttonName}
          </Button>
        ))}
      </FilterCategory>
      <DataCalendar key={calendarKey} view={activeButton} date={selectedDate} setDate={handleDateChange} activeButton={activeButton} />
      <ButtonsCategory>
        <Button style={{ width: "30%" }} size="large" variation="puple" onClick={handleSubmit}>
          ادخال
        </Button>
        <Button style={{ width: "30%" }} size="large" variation="cancelCalender" onClick={handleModalClose}>
          الغاء
        </Button>
      </ButtonsCategory>
      {isModalVisible && (
        <Modal onClose={handleModalClose}>
          <ModalContent>{modalMessage}</ModalContent>
        </Modal>
      )}
    </StyledCalender>
  );
}

export default Calenders;
