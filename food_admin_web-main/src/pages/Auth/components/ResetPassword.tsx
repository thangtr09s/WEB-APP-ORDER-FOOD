import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Button, FormInput } from "components";
import { ArrowRightIcon } from "assets/icons";

const ResetPassword = () => {
  const { control } = useForm();
  const navigate = useNavigate();

  return (
    <div>
      <h3 className="mb-3 text-3xl font-bold ">Quên mật khẩu</h3>
      <p className="mb-5 text-gray-300">
        Nhập địa chỉ email của bạn và chúng tôi sẽ gửi cho bạn một email kèm theo hướng
        dẫn để đặt lại mật khẩu của bạn.
      </p>

      <FormInput
        control={control}
        name="email"
        placeholder="Nhập email"
        containerClassName="bg-[#141414] rounded-md"
        inputClassName="border-none"
      />
      <div className="flex items-end justify-between">
        <Button
          StartIcon={ArrowRightIcon}
          containerClassName="hover:opacity-80 w-fit py-2"
          startIconClassName="rotate-180 mr-1"
          contentClassName="text-sm"
          onClick={() => navigate(-1)}
        >
          Quay lại
        </Button>

        <button className="px-4 text-sm py-2 flex-shrink-0 rounded-md bg-[#e20e02] mt-5 hover:opacity-80 transition-base">
          Đặt lại mật khẩu
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
