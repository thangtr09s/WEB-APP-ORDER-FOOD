import { ReactNode } from "react";

export interface ModalProps {
  children?: ReactNode;
  button_action?: () => ReactNode;
  heading?: string;
  headingClassName?: string;
  modalBoxClassName?: string;
  btnCancelClassName?: string;
  type: "modal_view" | "modal_create" | "modal_update" | "modal_delete";
  onClick?: () => void;
}
