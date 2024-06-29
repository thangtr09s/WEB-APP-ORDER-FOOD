import { useForm } from "react-hook-form";
import { Fragment } from "react";
import { Link, Navigate } from "react-router-dom";
import { useCallback } from "react";

import FormInput from "../../../components/FormInput";
import routes from "../../../configs/routes";
import { auth } from "../../../yups/defaultValueFormState";
import { Auth } from "../../../yups/auth";
import { toast } from "react-toastify";
import axios from "axios";
import { useAuth } from "../../../contexts/AuthProvider";

const Register = () => {
  const { control, handleSubmit } = useForm();
  const { user } = useAuth();

  const onSubmit = useCallback(async (value) => {
    try {
      const data = new FormData();

      data.append("name", value.name);
      data.append("phone", value.phone);
      data.append("password", value.password);

      await axios.post(
        `https://music-demo123123.000webhostapp.com/api/register`,
        data
      );

      toast.success("Đăng kí thành công");

      // setTimeout(() => {
      //   navigate(routes.home);
      // }, []);
    } catch (error) {
      toast.error("Tài khoản hoặc số điện thoại Đã tồn tại");
    }
  }, []);

  if (user) return <Navigate to={routes.home} replace />;
  return (
    <Fragment>
      <p className="mx-auto text-4xl font-bold text-center">Đăng kí</p>

      <FormInput
        inputType="name"
        control={control}
        name={"name"}
        label={"Nhập họ và tên"}
        placeholder={"Nhập họ và tên"}
        containerClassName={"max-w-[800px] mx-auto mb-5"}
        errorClassName={"text-left"}
      />
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
        inputType={"password"}
        control={control}
        name={"password"}
        label={"Nhập password"}
        placeholder={"Nhập password"}
        containerClassName={"max-w-[800px] mx-auto my-8"}
        errorClassName={"text-left"}
      />

      <Link
        to={`${routes.auth}${routes.login}`}
        className="block mx-auto bg-[#f92424] py-3 px-6 hover:opacity-80 transition-base w-full max-w-[800px] rounded-md mb-5"
      >
        Đăng nhập
      </Link>

      <button
        className="bg-info py-3 px-6 hover:opacity-80 transition-base w-full max-w-[800px] rounded-md"
        onClick={handleSubmit(onSubmit, () => {
          toast.error("Các trường không được để trống");
        })}
      >
        Đăng kí
      </button>
    </Fragment>
  );
};

export default Register;
