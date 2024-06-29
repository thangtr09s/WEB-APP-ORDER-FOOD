import { twMerge } from "tailwind-merge";
import parse from "html-react-parser";
import ViewModal from "./ViewModal";

interface ViewContentModalProps {
  description: string;

  containerClassName?: string;
  titleClassName?: string;
  nameClassName?: string;
}

const ViewContentModal = ({
  containerClassName,
  description,
  titleClassName,
  nameClassName,
}: ViewContentModalProps) => {
  return (
    <ViewModal>
      <div
        className={twMerge("flex items-start flex-col gap-3 mb-4", containerClassName)}
      >
        <span className={twMerge("min-w-[50px] text-lg font-bold", nameClassName)}>
          Mô tả
        </span>
        <span className={titleClassName}>{parse(description)}</span>
      </div>
    </ViewModal>
  );
};

export default ViewContentModal;
