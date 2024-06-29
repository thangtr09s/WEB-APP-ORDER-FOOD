import DatePicker, { ReactDatePickerProps } from "react-datepicker";
import { twMerge } from "tailwind-merge";
import "react-datepicker/dist/react-datepicker.css";
import { useController } from "react-hook-form";

interface FormDatePickerProps extends ReactDatePickerProps {
  selected: Date | null | undefined;
  onChange: any;
  label?: string;
  containerClassName?: string;
  labelClassName?: string;
  datePickerClassName?: string;
}

const FormDatePicker = ({
  selected,
  onChange,
  label,
  containerClassName,
  labelClassName,
  datePickerClassName,
  ...restProps
}: FormDatePickerProps) => {
  return (
    <div className={containerClassName}>
      <label
        className={twMerge(
          `hidden font-medium w-fit mb-2 ${!!label && "block"}`,
          labelClassName
        )}
      >
        {label}
      </label>
      <DatePicker
        selected={selected}
        onChange={(date) => onChange(date)}
        wrapperClassName="w-full"
        className={twMerge(
          "w-full px-4 py-2.5 border-[1px] rounded-md border-info focus:outline-none mb-5",
          datePickerClassName
        )}
        {...restProps}
      />
    </div>
  );
};

export default FormDatePicker;
