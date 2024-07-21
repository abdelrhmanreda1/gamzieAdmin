import React from "react";
import styled from "styled-components";
// import DataCalender from "../dashboard/DataCalender";
import AboutPoints from "./AboutPoints";
import GamesRrecords from "./GamesRrecords";
import DataCalendar from "../dashboard/DataCalender";

const Container = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
`;
const StyledCalender = styled.div`
  width: 45%;
  .react-calendar__month-view__weekdays {
    margin-top: 20px !important;
  }

  .react-calendar__month-view__days__day {
    flex: 0 0 calc(100% / 7) !important;
    max-width: calc(100% / 7);
    margin-inline-start: 0px !important;
    box-sizing: border-box;
  }
  .react-calendar__tile--active {
    background: #e9b3d2 !important;
    color: #fff !important;
    font-weight: 500;
    border-radius: 50%;
    flex: 0 0 8.2% !important;
    overflow: hidden;
    margin-inline-end: 2px !important;
    margin-inline-start: 17px !important;
    &:focus {
      border: none !important;
      outline: none !important;
    }
  }

  .react-calendar__tile--now {
    background: none !important;
    color: #e9b3d2 !important;
    flex: 0 0 8.2% !important;
    overflow: hidden;
    margin-inline-end: 10px !important;
    margin-inline-start: 17px !important;

    &:focus {
      border: none !important;
      outline: none !important;
    }
  }

  .react-calendar__tile--selected {
    background: #e9b3d2 !important;
    color: #fff !important;
    border-radius: 50%;
    flex: 0 0 8.2% !important;
    overflow: hidden;
    margin-inline-end: 10px !important;
    margin-inline-start: 17px !important;
    &:focus {
      border: none !important;
      outline: none !important;
    }
  }

  .react-calendar__tile:hover {
    padding: 0px !important;
    color: #fff !important;
    border-radius: 50%;
    background: #e9b3d2 !important;
    flex: 0 0 8.2% !important;
    overflow: hidden;
    margin-inline-end: 10px !important;
    margin-inline-start: 17px !important;
    &:focus {
      border: none !important;
      outline: none !important;
    }
  }
  .react-calendar button {
    color: #000;
    height: 30px !important;
    border-radius: 50%;
    width: 100%;
  }
  .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0;
    flex: 0 0 6.8% !important;
    overflow: hidden;
    margin-inline-end: 12px !important;
    margin-inline-start: 21px !important;
    @media (min-width: 1600px) {
      margin-inline-end: 15px !important;
      margin-inline-start: 23px !important;
    }
    @media (min-width: 1800px) {
      margin-inline-end: 17px !important;
      margin-inline-start: 26px !important;
    }
    @media (min-width: 2200px) {
      margin-inline-end: 23px !important;
      margin-inline-start: 31px !important;
    }
    @media (min-width: 2400px) {
      background-color: yellow;
      margin-inline-end: 41px !important;
      margin-inline-start: 34px !important;
    }
  }
`;
const StyledPoints = styled.div`
  width: 45%;
`;
const StyledGames = styled.div`
  margin-top: 20px;
  height: 550px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0px;
  }
`;
function Record() {
  return (
    <Container>
      <StyledCalender>
        <DataCalendar />
        {/* <DataCalender /> */}
      </StyledCalender>
      <StyledPoints>
        <AboutPoints title="نقاط شحن" points="1000" />
        <AboutPoints title="نقاط مكافأه" points="1000" />
        <AboutPoints title="اجمالي عدد النقط " points="1000" />
        <AboutPoints title="تاريخ شحن" date=" 2024/12/12" />

        <StyledGames>
          <GamesRrecords titleGame="لعبه جنون السكينه" date="2024/7/3" image="/image 3.webp" statusGame="المكسب" StatusIcon="+" points="40" />
          <GamesRrecords titleGame="لعبه جنون السكينه" date="2024/7/3" image="/image 3.webp" statusGame="المكسب" StatusIcon="+" points="40" />
          <GamesRrecords titleGame="لعبه  لودو" date="2024/7/3" image="/unnamed .webp" statusGame="الخساره" StatusIcon="-" points="30" />
          <GamesRrecords titleGame="لعبه  لودو" date="2024/7/3" image="/unnamed .webp" statusGame="المكسب" StatusIcon="+" points="200" />
          <GamesRrecords titleGame="لعبه جنون السكينه" date="2024/7/3" image="/image 3.webp" statusGame="المكسب" StatusIcon="+" points="40" />
        </StyledGames>
      </StyledPoints>
    </Container>
  );
}

export default Record;
