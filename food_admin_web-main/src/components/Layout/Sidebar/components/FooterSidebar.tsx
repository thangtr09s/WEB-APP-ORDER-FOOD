import { ArrowRightIcon } from "assets/icons";
import Button from "components/Button";

interface FooterSidebarProps {
  isActiveSidebar: boolean;
  handleToggleSidebar: () => void;
}

const FooterSidebar = ({ isActiveSidebar, handleToggleSidebar }: FooterSidebarProps) => {
  return (
    <div
      className={`fixed bottom-0 left-0 z-10 w-260 px-5 pt-4 pb-1 transition-base overflow-hidden bg-primary ${
        !isActiveSidebar && "lg:w-80"
      }`}
    >
      <Button
        StartIcon={ArrowRightIcon}
        containerClassName={"mb-4 text-text_color hover:text-neutral"}
        startIconClassName={`rotate-180 ${!isActiveSidebar && "rotate-0"}`}
        contentClassName={`${!isActiveSidebar && "opacity-0"}`}
        onClick={handleToggleSidebar}
      >
        Thu gọn
      </Button>
    </div>
  );
};

export default FooterSidebar;
