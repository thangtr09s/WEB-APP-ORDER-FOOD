import { twMerge } from "tailwind-merge";
import Modal from "./ModalBase";
import { ModalProps } from "types/Modal";

interface DeleteModalProps extends Omit<ModalProps, "type" | "children"> {
  title?: string;
}

const DeleteModal = ({
  title,
  headingClassName,
  modalBoxClassName,
  heading,
  ...restProps
}: DeleteModalProps) => {
  return (
    <Modal
      type="modal_delete"
      modalBoxClassName={twMerge("max-w-[700px]", modalBoxClassName)}
      heading={heading ?? "Thông báo"}
      headingClassName={twMerge("text-left mb-6", headingClassName)}
      {...restProps}
    >
      <span className="text-lg">{title ?? "Bạn có chắc chắn muốn xóa?"}</span>
    </Modal>
  );
};

export default DeleteModal;
