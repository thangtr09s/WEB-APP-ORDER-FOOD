import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { CartIcon } from "../../assets/Icons";
import HeaderOnMobile from "./components/HeaderOnMobile";
import { NAV_ITEM } from "./constants";
import routes from "../../configs/routes";
import { useCartContext } from "../../contexts/CartProvider";
import { useAuth } from "../../contexts/AuthProvider";

const Header = () => {
  const { cartLocalStorage } = useCartContext();

  const { user } = useAuth();

  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleKeydown = (e) => {
    if (e.code !== "Enter") return;

    navigate(`/tim-kiem?keyword=${searchValue}`);
  };

  return (
    <div className="flex flex-col py-5 px-7">
      <div className="flex items-center justify-between">
        <div className="lg:hidden">
          <HeaderOnMobile />
        </div>

        <div className="flex items-center justify-center w-full gap-12 px-4 lg:justify-start lg:px-0">
          <Link to={routes.home}>
            <img
              src={require("../../assets/images/logo.png")}
              alt=""
              className="w-[230px]  sm:h-[49px] object-cover cursor-pointer"
            />
          </Link>

          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="w-[40%] px-4 py-1.5 border-[1px] border-[#ccc] rounded-md bg-transparent focus:outline-none hidden lg:block"
            value={searchValue}
            onChange={handleSearch}
            onKeyDown={handleKeydown}
          />
        </div>

        <div className="gap-4 flex-center">
          <Link to={routes.cart} className="indicator">
            <span className="indicator-item badge badge-primary">
              {cartLocalStorage.length}
            </span>
            <CartIcon className={"w-6 h-6 place-items-center"} />
          </Link>

          <Link
            to={`${user ? `${routes.account}/orders` : `/auth${routes.login}`}`}
            className="flex-shrink-0 hidden text-sm cursor-pointer lg:block"
          >
            <img
              src="https://movie-blush-beta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.8f16f734.png&w=1920&q=75"
              alt=""
              className="object-cover w-10 h-10 rounded-full"
            />
          </Link>
        </div>
      </div>

      <ul className="hidden mt-4 lg:flex lg:items-center lg:justify-center">
        {NAV_ITEM.map((el, idx) => (
          <li
            key={idx}
            className="relative group px-4 py-2 hover:bg-[#0a0a0a] rounded-md text-[#f92424] hover:text-white cursor-pointer"
          >
            <Link
              to={el.href}
              className="flex items-center gap-2 text-base font-extrabold"
            >
              <span>{el.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
