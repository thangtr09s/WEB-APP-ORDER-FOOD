import { SidebarProps } from "types/Sidebar";
import { SidebarItem, SIDEBAR_ITEMS } from "components/Layout";
import HeadingSidebar from "./components/HeadingSidebar";
import FooterSidebar from "./components/FooterSidebar";

const Sidebar = ({ handleToggleSidebar, isActiveSidebar }: SidebarProps) => {
  return (
    <div
      className={`sidebar group ${
        !isActiveSidebar && "lg:w-80 max-lg:-translate-x-[100%]"
      }`}
    >
      <HeadingSidebar isActiveSidebar={isActiveSidebar} />

      {SIDEBAR_ITEMS.map((el, idx: number) => {
        return (
          <SidebarItem
            key={idx}
            title={el.title}
            start_icon={el.start_icon}
            end_icon={el.end_icon}
            href={el.href}
            isActiveSidebar={isActiveSidebar}
            heading={el.heading}
            children={el.children}
          />
        );
      })}

      <FooterSidebar
        handleToggleSidebar={handleToggleSidebar}
        isActiveSidebar={isActiveSidebar}
      />
    </div>
  );
};

export default Sidebar;
