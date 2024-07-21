import React from "react";
import Stat from "./Stat";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledStats = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: fit-content;
    gap: 0.7rem;
  }
  & > * {
    flex: 1;
  }
`;

function Stats() {
  const navigate = useNavigate();
  function handelClickNavigate() {
    navigate("/users");
  }
  return (
    <React.Fragment styled={StyledStats}>
      <Stat title="المستخدمين" image="/usersIcon.svg" value={4421} handelClickNavigate={handelClickNavigate} />
      <Stat title="المستخدمين الناشطين" image="/usersActive-icon.svg" value={1300} />
      <Stat title="الايرادات" image="/Revenues-icon.svg" value={3212} />
    </React.Fragment>
  );
}

export default Stats;
