import UserTable from "../features/userprofile/UserTable";
import Heading from "../ui/Heading";

function NewUsers() {
  return (
    <Heading as="h1">
      <UserTable />
    </Heading>
  );
}

export default NewUsers;
