import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

import { Modal } from "components";
import { ModalProps } from "types/Modal";

interface ViewModalProps extends Omit<ModalProps, "type"> {
  children?: ReactNode;
}

const ViewModal = ({
  heading,
  modalBoxClassName,
  children,
  ...restProps
}: ViewModalProps) => {
  return (
    <Modal
      type="modal_view"
      modalBoxClassName={twMerge("max-w-[700px]", modalBoxClassName)}
      heading={heading ?? "Thông tin chi tiết"}
      {...restProps}
    >
      {children}
    </Modal>
  );
};

export default ViewModal;
