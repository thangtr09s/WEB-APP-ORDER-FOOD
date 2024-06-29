import { Fragment, memo } from "react";
import { useLocalStorage } from "react-use";
import { twMerge } from "tailwind-merge";
import { ModalProps } from "types/Modal";

const ModalBase = ({
  children,
  heading,
  headingClassName,
  modalBoxClassName,
  btnCancelClassName,
  type,
  button_action,
  onClick,
}: ModalProps) => {
  const [_id, setId] = useLocalStorage("id");

  return (
    <Fragment>
      <input type="checkbox" id={type} className="modal-toggle" />
      <div className="modal" onClick={onClick}>
        <div
          className={twMerge(
            "max-w-screen-lg text-black bg-white modal-box",
            modalBoxClassName
          )}
        >
          <h3
            className={twMerge("mb-5 text-2xl font-bold text-center", headingClassName)}
          >
            {heading}
          </h3>

          {children}

          <div className="modal-action">
            <label
              htmlFor={type}
              onClick={() => setId("")}
              className={twMerge(
                "bg-[#545e75] border-none btn rounded-md text-white hover:bg-[#545e75] hover:opacity-80 transition-base",
                btnCancelClassName
              )}
            >
              Đóng
            </label>

            {button_action && button_action()}
          </div>
        </div>

        <label className="modal-backdrop" htmlFor={type} onClick={() => setId("")} />
      </div>
    </Fragment>
  );
};

export default memo(ModalBase);
