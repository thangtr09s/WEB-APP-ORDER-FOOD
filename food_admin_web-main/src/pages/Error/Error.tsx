import { HomeIcon } from "assets/icons";
import { Button, Image } from "components";
import {routes} from "configs";

const Error = () => {
  return (
    <div className="min-h-screen bg-[#141414] px-4 pt-12">
      <Image
        src={require("assets/images/error.png")}
        className="w-[460px] h-[390px] 2xl:w-1/2 object-contain mx-auto"
      />

      <div className="text-center text-white">
        <h2 className="mt-6 text-3xl font-bold 2xl:mt-4 md:text-4xl">
          Oops! Trang này không tìm thấy
        </h2>

        <p className="text-sm lg:text-base font-light text-[#d1d0cf] mt-2 mb-8">
          Trang yêu cầu không tồn tại.
        </p>

        <Button
          href={routes.dashBoard}
          component="a"
          StartIcon={HomeIcon}
          containerClassName="py-2 px-3 rounded-md mx-auto bg-[#e20e02] w-fit hover:opacity-80"
          startIconClassName="mr-1 w-4 h-4"
          contentClassName="text-sm"
        >
          Truy cập trang chủ
        </Button>
      </div>
    </div>
  );
};

export default Error;
