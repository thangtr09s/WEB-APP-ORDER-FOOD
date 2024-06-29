import { memo } from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const Button = ({
  StartIcon,
  EndIcon,
  children,
  href,
  onClick,
  containerClassName,
  startIconClassName,
  contentClassName,
  endIconClassName,
  component: Component = "div",
  htmlFor,
  ...restProps
}) => {
  let props = {
    className: twMerge(
      "transition-base w-full relative flex items-center cursor-pointer",
      containerClassName
    ),
    onClick,
    ...restProps,
  };

  if (Component === "label") {
    Component = "label";
    props["htmlFor"] = htmlFor;
  } else if (Component === "a") {
    Component = Link;
    props["to"] = href;
  }

  return (
    <Component {...props}>
      {StartIcon && (
        <StartIcon
          className={twMerge(
            "transition-base flex-shrink-0 mr-2",
            startIconClassName
          )}
        />
      )}

      <div
        className={twMerge("transition-base flex-shrink-0", contentClassName)}
      >
        {children}
      </div>

      {EndIcon && (
        <EndIcon
          className={twMerge(
            "transition-base absolute right-0",
            endIconClassName
          )}
        />
      )}
    </Component>
  );
};

export default memo(Button);
