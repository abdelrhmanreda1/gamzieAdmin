import styled from "styled-components";
import AddGames from "../features/games/AddGames";

const Container = styled.div``;
const StyledContent = styled.div`
  text-align: center;
`;
function Bookings() {
  return (
    <Container>
      <StyledContent>
        <AddGames />
      </StyledContent>
    </Container>
  );
}

export default Bookings;
