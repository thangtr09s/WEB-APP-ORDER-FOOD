import { useCallback } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { BellIcon, MenuIcon } from "assets/icons";
import LogOutIcon from "assets/icons/LogOutIcon";
import { Button, Image } from "components";
import { routes, auth } from "configs";

interface HeaderProps {
  handleToggleSidebar: () => void;
}

const Header = ({ handleToggleSidebar }: HeaderProps) => {
  const navigate = useNavigate();

  const handleLogoutAccount = useCallback(() => {
    signOut(auth);
    navigate(routes.login);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-40 w-full h-20 px-4 shadow flex-between bg-accent">
      <MenuIcon className="w-8 h-8" onClick={handleToggleSidebar} />

      <div className="flex items-center gap-6">
        <BellIcon className="w-6 h-6 hover:opacity-60" />

        <div className="dropdown dropdown-end">
          <label tabIndex={0}>
            <Image
              src="https://templates.iqonic.design/streamit/dashboard/html/assets/images/user/1.jpg"
              className="object-cover w-12 h-12 rounded-full cursor-pointer hover:opacity-60"
            />
          </label>

          <ul
            tabIndex={0}
            className="dropdown-content z-[1] p-4 shadow bg-white rounded-md w-52 mt-4"
          >
            <li className="text-black hover:opacity-60 transition-base">
              <Button
                StartIcon={LogOutIcon}
                startIconClassName="mr-2"
                onClick={handleLogoutAccount}
              >
                Đăng xuất
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
