import { Fragment, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import ReactQuill, { Quill, UnprivilegedEditor, ReactQuillProps } from "react-quill";
import screenfull from "screenfull";
import "react-quill/dist/quill.snow.css";

const fontFamilyArr = ["roboto", "Sans-Serif"];
let fonts = Quill.import("attributors/style/font");
fonts.whitelist = fontFamilyArr;
Quill.register(fonts, true);

const fontSizeArr = ["10px", "12px", "14px", "16px", "18px", "20px", "24px"];
var Size = Quill.import("attributors/style/size");
Size.whitelist = fontSizeArr;
Quill.register(Size, true);

interface QuillEditorProps extends ReactQuillProps {
  value: string;
  setValue: (value: string, delta: any, source: any, editor: UnprivilegedEditor) => void;
  label?: string;
  labelClassName?: string;
}

const QuillEditor = ({
  value,
  setValue,
  label,
  labelClassName,
  ...restProps
}: QuillEditorProps) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, false] }, { font: fontFamilyArr }],
      [{ size: fontSizeArr }],
      [{ color: [] }, { background: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
      ["link", "image", "video"],
      ["omega"],
    ],

    clipboard: {
      matchVisual: false,
    },
  };

  return (
    <Fragment>
      <span className={twMerge("font-medium w-fit mb-2 block", labelClassName)}>
        {label}
      </span>

      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        placeholder="Mô tả nội dung"
        className="mb-5"
        modules={modules}
        {...restProps}
      />
    </Fragment>
  );
};

export default QuillEditor;
