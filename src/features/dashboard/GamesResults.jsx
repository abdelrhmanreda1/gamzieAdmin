import React from "react";
import styled from "styled-components";
import DurationLineChart from "./DurationLineChart";
import { BsCheck2Circle } from "react-icons/bs";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";

const StyledGamesContainer = styled.div`
  margin-top: 10px;
  height: calc(100vh - 330px);
  font-family: "Cairo";
  margin-right: 37px;
  width: calc(100vw - 950px);
  display: flex;
  flex-direction: column;
`;

const STyleShowData = styled.div`
  background-color: #c6bbdb;
  margin-bottom: 20px;
  border-radius: var(--border-radius-md);
  padding: 10px 10px;
  cursor: pointer;
  border: ${(props) => (props.isSelected ? "2px solid #5c2d91" : "none")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 110px;
  flex-shrink: 0;
`;

const ChartContainerWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const StyledGameabout = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px;
  justify-content: space-between;
`;

const StyledGame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
`;

const StyledGameImage = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: var(--border-radius-md);
`;

const GameTitle = styled.h2`
  margin-bottom: -5px;
  font-weight: bolder;
  color: #623d99;
  font-size: 1.4rem;
`;

const StyledNumPlayers = styled.div`
  display: flex;
  align-items: center;
  background-color: #8e70b4;
  gap: 5px;
  width: 140px;
  border-radius: 24px;
  color: #fff;
`;

const NumPlayers = styled.h3`
  font-weight: 400;
  font-size: 14px;
`;

const Players = styled.p`
  font-size: 10px;
`;

const ChartTitle = styled.h3`
  color: #000;
  font-weight: 600;
`;

const ChartContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
`;

const CheckIcon = styled(BsCheck2Circle)`
  color: #5c2d91;
`;

const CheckMonthly = styled(RiCheckboxBlankCircleLine)`
  color: #5c2d91;
`;

const ChartDays = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ImagePlayer = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 5px;
`;

const MonName = styled.h5``;

function GamesResults({ onSelectGame, selectedGame, setSelectedGameBorder, activeButton }) {
  const games = [
    {
      id: 1,
      imageSrc: "/knife-game.svg",
      title: "لعبه جنون السكينه",
      numPlayers: 4400,
      imageUser: "/user.png",
    },
    {
      id: 2,
      imageSrc: "/ludo-game.svg",
      title: "لعبه لودو",
      numPlayers: 3125,
      imageUser: "/user.png",
    },
  ];

  const handleGameClick = (game) => {
    setSelectedGameBorder(game);
    onSelectGame(game);
  };

  return (
    <StyledGamesContainer>
      {games.map((game) => (
        <STyleShowData key={game.id} onClick={() => handleGameClick(game)} isSelected={selectedGame && selectedGame.id === game.id}>
          <StyledGameabout>
            <StyledGame>
              <StyledGameImage src={game.imageSrc} alt={game.title} />
              <GameTitle>{game.title}</GameTitle>
            </StyledGame>
            <StyledNumPlayers>
              <ImagePlayer src={game.imageUser} alt="user-image" />
              <NumPlayers>{game.numPlayers}</NumPlayers>
              <Players>عدد الاعبين</Players>
            </StyledNumPlayers>
          </StyledGameabout>
        </STyleShowData>
      ))}

      <ChartContainerWrapper>
        <STyleShowData style={{ flex: 1 }}>
          <ChartContainer>
            <ChartTitle>الالعاب</ChartTitle>
            <ChartDays>
              {activeButton === "اليوم" ? <CheckIcon /> : <CheckMonthly />}
              <MonName>اليوم</MonName>
            </ChartDays>
            <ChartDays>
              {activeButton === "الاسبوع" ? <CheckIcon /> : <CheckMonthly />}
              <MonName>الاسبوع</MonName>
            </ChartDays>
            <ChartDays>
              {activeButton === "الشهر" ? <CheckIcon /> : <CheckMonthly />}
              <MonName>الشهر</MonName>
            </ChartDays>
          </ChartContainer>
          <DurationLineChart />
        </STyleShowData>
      </ChartContainerWrapper>
    </StyledGamesContainer>
  );
}

export default GamesResults;
