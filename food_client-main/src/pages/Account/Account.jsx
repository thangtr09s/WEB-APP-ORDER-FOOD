import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider";

const Account = () => {
  const { user } = useAuth();

  const handleLogOut = () => {
    console.log("đăng xuất");
  };

  return (
    <div className="px-4">
      <div className="grid grid-cols-[150px,1fr] gap-2">
        <ul className="border-r-2 border-r-white">
          <li className="mb-5">
            <Link
              to={`/account/${user.id}/orders`}
              className="text-base font-bold cursor-pointer hover:opacity-80 transition-base"
            >
              Đơn hàng
            </Link>
          </li>
          <li>
            <button
              onClick={handleLogOut}
              className="text-base font-bold hover:opacity-80 transition-base"
            >
              Đăng xuất
            </button>
          </li>
        </ul>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Account;
