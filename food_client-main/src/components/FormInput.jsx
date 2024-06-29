import { useController } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import AlertIcon from "../assets/Icons/AlertIcon";

const FormInput = (props) => {
  const {
    name,
    label,
    control,
    inputClassName,
    inputType,
    placeholder,
    labelClassName,
    containerClassName,
    errorClassName,
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
            ` rounded-lg input outline-none border-none text-black focus:outline-none w-full ${
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
        className={twMerge(
          `text-xs font-light text-error mt-2 ${
            error?.message ? "block" : "hidden"
          }`,
          errorClassName
        )}
      >
        {error?.message}
      </span>
    </div>
  );
};

export default FormInput;
