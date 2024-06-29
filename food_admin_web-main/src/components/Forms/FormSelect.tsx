import Select, { CSSObjectWithLabel, StylesConfig, PropsValue } from "react-select";
import { twMerge } from "tailwind-merge";

interface FormSelectProps {
  defaultValue: any;
  onChange: any;
  options: any;
  label?: string;
  placeholder?: string;
  styles?: StylesConfig;
  containerClassName?: string;
  labelClassName?: string;
  defaultInputValue?: string;
}

const FormSelect = ({
  defaultValue,
  onChange,
  options,
  label,
  placeholder,
  styles,
  containerClassName,
  labelClassName,
  defaultInputValue,
}: FormSelectProps) => {
  return (
    <div className={containerClassName}>
      <label className={twMerge("block mb-2 font-medium w-fit", labelClassName)}>
        {label}
      </label>

      <Select
        defaultValue={defaultValue}
        onChange={onChange}
        options={options}
        placeholder={placeholder}
        defaultInputValue={defaultInputValue}
        styles={{
          control: (baseStyle) => ({
            ...baseStyle,
            padding: "0 8px",
            border: "1px solid #3abff8",
            borderRadius: "8px",
            boxShadow: "none",
          }),
          input: (baseStyle: CSSObjectWithLabel) => ({
            ...baseStyle,
            padding: "7px 0",
          }),
          ...styles,
        }}
      />
    </div>
  );
};

export default FormSelect;
