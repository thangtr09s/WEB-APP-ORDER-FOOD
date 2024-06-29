import { useQuery } from "@tanstack/react-query";

import { HeadingTable } from "components";
import Table from "./components/Table";
import { getUsers } from "services/auth";
import { useLocalStorage } from "react-use";
import UserDelete from "./components/UserDelete";

const UserManagment = () => {
  const [id, setId, clearId] = useLocalStorage("id");
  const { data: users } = useQuery({
    queryKey: ["auth"],
    queryFn: getUsers,
  });

  return (
    <div>
      <p className="headline">Quản lý phim </p>

      <HeadingTable isButtonCreate={false}>
        <Table data={users} setId={setId} clearId={clearId} />
      </HeadingTable>

      <UserDelete id={id} />
    </div>
  );
};

export default UserManagment;
