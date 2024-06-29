import { ChangeEventHandler, ReactNode, memo } from "react";

import { Button } from "components";
import { AddIcon } from "assets/icons";

interface HeadingTableProps {
  title_btn?: string;
  children: ReactNode;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  isButtonCreate?: boolean;
}

const HeadingTable = ({
  title_btn,
  children,
  onChange,
  isButtonCreate = true,
}: HeadingTableProps) => {
  return (
    <div className="p-6 bg-white shadow">
      <div className="flex-wrap items-center gap-3 mb-6 flex-between">
        <input
          name="search"
          placeholder="Tìm kiếm..."
          className="px-4 py-2 w-full sm:w-fit rounded-md border-2 border-[#f0f0f2] focus:outline-neutral"
          autoComplete="off"
          onChange={onChange}
        />

        {isButtonCreate && (
          <Button
            component="label"
            htmlFor="modal_create"
            StartIcon={AddIcon}
            containerClassName="w-full sm:w-fit py-2 px-3 rounded-md items-start justify-center sm:justify-start hover:opacity-70 transition-base bg-info text-white"
            startIconClassName="mr-0"
          >
            {title_btn ?? "TẠO MỚI"}
          </Button>
        )}
      </div>

      {children}
    </div>
  );
};

export default memo(HeadingTable);
