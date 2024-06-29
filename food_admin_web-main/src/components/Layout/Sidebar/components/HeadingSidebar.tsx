import Image from "components/Image";

const HeadingSidebar = ({ isActiveSidebar }: { isActiveSidebar: boolean }) => {
  return (
    <div className="flex items-center gap-2 px-4 mb-4 overflow-hidden">
      <div className="flex-shrink-0 overflow-hidden rounded-lg">
        <Image
          src={require("assets/images/logo.png")}
          className="object-cover w-[38px] h-[38px] "
        />
      </div>

      <span
        className={`text-xl text-text_color font-bold tracking-wider transition-base ${
          !isActiveSidebar && "opacity-0"
        }`}
      >
        FLASHMOV
      </span>
    </div>
  );
};

export default HeadingSidebar;
