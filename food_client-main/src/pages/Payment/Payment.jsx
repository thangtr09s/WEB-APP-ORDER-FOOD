import { useCallback } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import FormInput from "../../components/FormInput";
import ChevronBackIcon from "../../assets/Icons/ChevronBackIcon";
import { useCartContext } from "../../contexts/CartProvider";
import Referral_code from "./components/ReferralCode";
import { routes } from "../../configs";
import { useAuth } from "../../contexts/AuthProvider";

const Payment = () => {
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();
  const {
    cartLocalStorage,
    total: totalPrice,
    totalPriceAfterReferralCode,
    setReferralCode,
  } = useCartContext();

  const { user } = useAuth();

  const sumPrice = cartLocalStorage.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.quantity * currentValue.new_price,
    0
  );

  const onSubmit = useCallback(
    async (value) => {
      try {
        const data = new FormData();

        data.append("shipping_name", value.shipping_name);
        data.append("shipping_address", value.shipping_address);
        data.append("shipping_phone", user ? user.phone : value.shipping_phone);
        data.append("shipping_note", value.shipping_note);
        data.append("payment_method_id", 1);
        data.append("order_status", 0);
        if (totalPriceAfterReferralCode) {
          data.append("order_total", totalPriceAfterReferralCode);
        } else {
          data.append("order_total", totalPrice);
        }

        data.append("carts", JSON.stringify(cartLocalStorage));

        await axios.post(
          `https://music-demo123123.000webhostapp.com/api/order`,
          data
        );

        toast.success("Bạn đã đặt hàng thành công");
        setReferralCode(null);
      } catch (error) {
        toast.error(error.response.data.error.shipping_phone[0]);
      }
    },
    [totalPriceAfterReferralCode]
  );

  return (
    <div className="min-h-screen mx-auto max-w-7xl bg-[#2d2d2d] text-white py-9">
      <div className="max-w-[1080px] mx-auto px-4">
        <button
          className="flex items-center gap-2 mb-5"
          onClick={() => navigate(-1)}
        >
          <ChevronBackIcon />
          <span>Quay lại</span>
        </button>

        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <span className="block mb-5">
              Bạn đã có tài khoản?{" "}
              <Link
                to={"/auth" + routes.login}
                className="text-blue-500 underline"
              >
                Ấn vào đây để đăng nhập
              </Link>
            </span>

            {/* form payment */}
            <Referral_code />

            <form action="">
              <span className="block mt-5 text-lg font-bold">
                THÔNG TIN THANH TOÁN
              </span>

              <FormInput
                control={control}
                placeholder={"nhập Họ và tên"}
                name="shipping_name"
                label={"Họ Và Tên"}
                containerClassName={"mt-3"}
                inputClassName={"rounded-sm placeholder:text-sm"}
                labelClassName={"text-sm text-[#ccc]"}
              />

              <FormInput
                control={control}
                placeholder={"Xã/Phường - Thị trấn/Tp - Tỉnh"}
                name="shipping_address"
                label={"Địa chỉ"}
                containerClassName={"mt-6"}
                inputClassName={"rounded-sm placeholder:text-sm"}
                labelClassName={"text-sm text-[#ccc]"}
              />

              {!user && (
                <FormInput
                  control={control}
                  inputType={"number"}
                  placeholder={"Nhập số điện thoại"}
                  name="shipping_phone"
                  label={"Số Điện Thoại"}
                  containerClassName={"mt-6"}
                  inputClassName={"rounded-sm placeholder:text-sm"}
                  labelClassName={"text-sm text-[#ccc]"}
                />
              )}

              <FormInput
                control={control}
                placeholder={
                  "Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn."
                }
                name="shipping_note"
                label={"Ghi Chú Đơn Hàng"}
                containerClassName={"mt-6"}
                inputClassName={"rounded-sm placeholder:text-sm"}
                labelClassName={"text-sm text-[#ccc]"}
              />
            </form>
          </div>

          <div className="shadow-2xl p-7">
            <span className="text-[18px] font-bold">ĐƠN HÀNG CỦA BẠN</span>
            <table>
              <thead>
                <tr>
                  <td>SẢN PHẨM</td>
                  <td>TẠM TÍNH</td>
                </tr>
              </thead>

              <tbody>
                {cartLocalStorage?.map((el, idx) => (
                  <tr key={idx}>
                    <td>{el.name}</td>
                    <td>
                      {el.new_price.toLocaleString()} đồng * {el.quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td>Tổng cộng</td>
                  <td>{sumPrice.toLocaleString()} đồng</td>
                </tr>
                {totalPriceAfterReferralCode && (
                  <>
                    <tr>
                      <td>Số phần trăm được giảm</td>
                      <td>10%</td>
                    </tr>
                    <tr>
                      <td>Tổng số tiền sau khi giảm</td>
                      <td>
                        {totalPriceAfterReferralCode.toLocaleString()} đồng
                      </td>
                    </tr>
                  </>
                )}
              </tfoot>
            </table>

            <span className="block mt-5 text-sm font-bold">
              Thanh Toán khi nhận hàng
            </span>
            <span className="block mt-1 text-xs text-[#ccc]">
              Thanh Toán khi nhận hàng
            </span>

            <button
              className="py-3 w-full bg-[#fa2323] mt-5"
              onClick={handleSubmit(onSubmit, () => {
                toast.error("Đặt hàng thất bại. Hãy kiểm tra lại thông tin");
              })}
            >
              Đặt hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
