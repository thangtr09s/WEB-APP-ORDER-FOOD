import { useController, FieldValues, Control, Path } from "react-hook-form";
import { twMerge } from "tailwind-merge";

import { AlertIcon } from "assets/icons";

interface FormInputProps<T extends FieldValues> {
  name: Path<T>;
  label?: string;
  control: Control<T, string>;
  inputClassName?: string;
  inputType?: string;
  placeholder?: string;
  labelClassName?: string;
  containerClassName?: string;
  defaultValue?: string;
}

const FormInput = <T extends FieldValues>(props: FormInputProps<T>) => {
  const {
    name,
    label,
    control,
    inputClassName,
    inputType,
    placeholder,
    labelClassName,
    containerClassName,
  } = props;

  const {
    field: { value, onChange, ...restProps },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { required: true },
  });

  return (
    <div className={twMerge("w-full", containerClassName)}>
      <label
        htmlFor={name}
        className={twMerge("font-medium w-fit mb-2 block", labelClassName)}
      >
        {label}
      </label>

      <div className="relative">
        <input
          id={name}
          value={value}
          autoComplete="off"
          type={inputType ?? "text"}
          placeholder={placeholder}
          onChange={onChange}
          className={twMerge(
            `bg-transparent rounded-lg input focus:outline-none w-full ${
              error?.message ? "border-red-900" : "border-info"
            }`,
            inputClassName
          )}
          {...restProps}
        />

        <AlertIcon
          className={`absolute -translate-y-1/2 right-4 top-1/2 text-error ${
            error?.message ? "block" : "hidden"
          }`}
        />
      </div>

      <span
        className={`text-xs font-light text-error mt-2 ${
          error?.message ? "block" : "hidden"
        }`}
      >
        {error?.message}
      </span>
    </div>
  );
};

export default FormInput;
