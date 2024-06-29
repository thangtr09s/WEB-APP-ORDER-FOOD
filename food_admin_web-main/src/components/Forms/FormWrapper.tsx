import { useNavigate } from "react-router-dom";

import { Button } from "components";
import { BanIcon } from "assets/icons";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface FormWrapperProps {
  children: ReactNode;
  heading?: string;
  title_btn?: string;
  containerClassName?: string;
  headingClassName?: string;
  isBtncancel?: boolean;
}

const FormWrapper = ({
  children,
  heading,
  title_btn,
  containerClassName,
  headingClassName,
  isBtncancel = false,
}: FormWrapperProps) => {
  const navigate = useNavigate();

  return (
    <form className={twMerge("px-5 py-10 rounded-md bg-secondary", containerClassName)}>
      <p className={twMerge("headline", headingClassName)}>{heading ?? "Tạo mới"}</p>

      {children}

      {!isBtncancel && (
        <Button
          StartIcon={BanIcon}
          containerClassName="w-full sm:w-fit p-3 justify-center sm:justify-end sm:py-[6px] rounded-md hover:opacity-70 text-white bg-[#545e75]"
          contentClassName="text-sm"
          startIconClassName="w-4 h-4 mr-2"
          onClick={() => navigate(-1)}
        >
          {title_btn ?? "Quay lại"}
        </Button>
      )}
    </form>
  );
};

export default FormWrapper;
