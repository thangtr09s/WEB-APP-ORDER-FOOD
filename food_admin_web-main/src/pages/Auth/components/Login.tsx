import { Fragment, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";

import { FormInput } from "components";
import { routes, auth } from "configs";
import { LoginResolver } from "yups/login";
import { defaultLoginFormState } from "yups/defaultValueFormState";
import { loginProps } from "types/Auth";
import { addDoc, serverTimestamp } from "firebase/firestore";

const Login = () => {
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm({
    resolver: LoginResolver,
    defaultValues: defaultLoginFormState,
  });

  const onSubmit = useCallback(async (data: loginProps) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      // await addDoc(auth as any, {
      //   createAt: serverTimestamp(),
      //   role: 1,
      //   email: data.email,
      //   password: data.password,
      //   uid: auth?.currentUser?.uid,
      // });
      navigate(routes.dashBoard);
    } catch (error) {
      console.log("đăng nhập thất bại");
    }
  }, []);

  return (
    <Fragment>
      <h3 className="mb-8 text-3xl font-bold text-center">ĐĂNG NHẬP</h3>

      <FormInput
        control={control}
        name="email"
        placeholder="Nhập email"
        containerClassName="mb-5"
        inputClassName="border-none bg-[#141414]"
      />

      <FormInput
        inputType="password"
        control={control}
        name="password"
        placeholder="Nhập password"
        inputClassName="border-none bg-[#141414]"
      />

      <div className="my-5 flex-between">
        <button
          onClick={handleSubmit(onSubmit)}
          className="py-2 px-5 rounded-md bg-[#e20e02] w-fit text-sm hover:opacity-80 transition-base"
        >
          Đăng nhập
        </button>

        <Link to={routes.login} className="w-fit text-[#b3b3b3] text-sm hover:underline">
          Bạn cần trợ giúp?
        </Link>
      </div>

      <p className="text-sm text-center">
        Quên mật khẩu?
        <Link to={routes.resetPassword} className="ml-1 text-blue-600 hover:underline">
          Nhấn vào đây
        </Link>
      </p>
    </Fragment>
  );
};

export default Login;
