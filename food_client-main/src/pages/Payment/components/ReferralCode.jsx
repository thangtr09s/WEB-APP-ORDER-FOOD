import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import FormInput from "../../../components/FormInput";
import axios from "axios";
import { useCartContext } from "../../../contexts/CartProvider";

const ReferralCode = () => {
  const { control, handleSubmit } = useForm();

  const { setReferralCode } = useCartContext();

  const onsubmit = useCallback(async (value) => {
    try {
      const data = new FormData();
      data.append("referral_code", value.referral_code);

      await axios.post(
        "https://music-demo123123.000webhostapp.com/api/submit-referral-code",
        data
      );
      setReferralCode(value.referral_code);
      toast.success("Nhập mã thành công");
    } catch (error) {
      console.log("🚀 ~ file: ReferralCode.jsx:26 ~ onsubmit ~ error:", error);
      toast.error(error.response.data);
    }
  }, []);

  return (
    <div className="mt-2 border-2 border-red-700 border-dashed rounded-md p-7">
      <span className="block mb-2 text-[#f1f1f1] text-sm">
        Nếu bạn có mã giảm giá, vui lòng điền vào phía bên dưới.
      </span>

      <div className="relative">
        <FormInput
          control={control}
          placeholder={"Nhập mã ưu đãi"}
          name="referral_code"
          inputClassName={"placeholder:text-sm px-3 rounded-none"}
        />
        <button
          className="bg-[#fa2323] py-3 px-3 absolute top-1/2 -translate-y-1/2 right-0 hover:opacity-80 transition-base"
          onClick={handleSubmit(onsubmit, () => {
            toast.error("Bạn chưa nhập mã giảm giá");
          })}
        >
          ÁP DỤNG
        </button>
      </div>
    </div>
  );
};

export default ReferralCode;
