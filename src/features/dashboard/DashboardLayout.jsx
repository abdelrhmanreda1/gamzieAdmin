import styled from "styled-components";
import Stats from "./Stats";
import Calender from "./Calender";
import GamesResults from "./GamesResults";
import { useState } from "react";

const StyledDashboardLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: calc(100vw - 400px);
  height: 100%;
  box-sizing: border-box;
  padding: 1rem;
`;

const StyledStats = styled.div`
  display: flex;
  flex: 0 0 auto;
`;

const BottomSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.2rem;
  height: calc(100vh - 340px);
  width: 100%;
  margin: 0 auto;
`;

const StyledCalender = styled(Calender)`
  flex: 1;
  height: 100%;
`;

const StyledGamesResults = styled(GamesResults)`
  flex: 2;
  height: 100%;
`;

function DashboardLayout() {
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedGameBorder, setSelectedGameBorder] = useState(null);
  const [activeButton, setActiveButton] = useState("اليوم");
  const handleGameSelect = (game) => {
    setSelectedGame(game);
  };
  return (
    <StyledDashboardLayout>
      <StyledStats>
        <Stats />
      </StyledStats>
      <BottomSection>
        <StyledCalender selectedGame={selectedGame} setSelectedGame={setSelectedGame} setSelectedGameBorder={setSelectedGameBorder} activeButton={activeButton} setActiveButton={setActiveButton} />
        <StyledGamesResults onSelectGame={handleGameSelect} selectedGame={selectedGameBorder} setSelectedGameBorder={setSelectedGameBorder} activeButton={activeButton} />
      </BottomSection>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
