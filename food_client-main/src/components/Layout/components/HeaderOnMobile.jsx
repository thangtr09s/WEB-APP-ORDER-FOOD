import React from "react";
import { Link } from "react-router-dom";

import MenuIcon from "../../../assets/Icons/MenuIcon";
import SearchIcon from "../../../assets/Icons/SearchIcon";
import { NAV_ITEM } from "../constants";

const HeaderOnMobile = () => {
  return (
    <div className="drawer w-fit">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer">
          <MenuIcon className="flex-shrink-0 w-6 h-6 cursor-pointer lg:hidden" />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="min-h-full menu w-80 bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li className="px-4">
            <div className="relative flex !bg-[rgba(0,0,0,0.06)] hover:bg-transparent my-5">
              <input
                type="text"
                name=""
                id=""
                placeholder="Tìm kiếm"
                className="w-full bg-transparent focus:outline-none"
              />
              <SearchIcon
                className={"absolute right-4 top-1/2 -translate-y-1/2"}
              />
            </div>
          </li>

          {NAV_ITEM.map((el, idx) => (
            <li key={idx}>
              <Link to={el.href} className="py-4 text-base">
                {el.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HeaderOnMobile;
