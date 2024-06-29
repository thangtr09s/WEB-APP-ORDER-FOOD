import { useForm } from "react-hook-form";
import FormInput from "../../../components/FormInput";
import { Fragment, useCallback } from "react";
import { Link, Navigate } from "react-router-dom";
import routes from "../../../configs/routes";
import { toast } from "react-toastify";
import axios from "axios";
import { useAuth } from "../../../contexts/AuthProvider";

const Login = () => {
  const { control, handleSubmit } = useForm();
  const { user, setUser } = useAuth();

  const onSubmit = useCallback(async (value) => {
    try {
      const data = new FormData();

      data.append("phone", value.phone);
      data.append("password", value.password);
      const user = await axios.post(
        `https://music-demo123123.000webhostapp.com/api/login`,
        data
      );
      toast.success("Đăng nhập thành công");

      setUser(user.data.user);

      // setTimeout(() => {
      //   Navigate(routes.home);
      // }, [3000]);
    } catch (error) {
      toast.error("Tài khoản hoặc số điện thoại không chính xác");
    }
  }, []);

  if (user) return <Navigate to={routes.home} replace />;
  return (
    <Fragment>
      <p className="mx-auto text-4xl font-bold text-center">Đăng nhập</p>

      <FormInput
        inputType="number"
        control={control}
        name={"phone"}
        label={"Nhập số điện thoại"}
        placeholder={"Nhập số điện thoại"}
        containerClassName={"max-w-[800px] mx-auto"}
        errorClassName={"text-left"}
      />

      <FormInput
        control={control}
        name={"password"}
        label={"Nhập password"}
        placeholder={"Nhập password"}
        containerClassName={"max-w-[800px] mx-auto my-8"}
        errorClassName={"text-left"}
      />

      <Link
        to={`${routes.auth}${routes.register}`}
        className="block mx-auto bg-info py-3 px-6 hover:opacity-80 transition-base w-full max-w-[800px] rounded-md mb-5"
      >
        Đăng kí
      </Link>
      <button
        className="bg-[#f92424] py-3 px-6 hover:opacity-80 transition-base w-full max-w-[800px] rounded-md"
        onClick={handleSubmit(onSubmit, () => {
          toast.error("Các trường không được để trống");
        })}
      >
        Đăng nhập
      </button>
    </Fragment>
  );
};

export default Login;
