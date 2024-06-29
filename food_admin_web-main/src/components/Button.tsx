import { ReactNode, memo, JSX, ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

import { SVGIconBaseprops } from "assets/icons/SVGIconBase";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  StartIcon?: (props: SVGIconBaseprops) => JSX.Element;
  EndIcon?: (props: SVGIconBaseprops) => JSX.Element;
  children: ReactNode;
  component?: "div" | "label" | "a" | "button";
  href?: string;
  onClick?: () => void;
  containerClassName?: string;
  startIconClassName?: string;
  contentClassName?: string;
  endIconClassName?: string;
  htmlFor?: string;
}

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
}: ButtonProps) => {
  let props: any = {
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
    Component = Link as any;
    props["to"] = href;
  }

  return (
    <Component {...props}>
      {StartIcon && (
        <StartIcon
          className={twMerge("transition-base flex-shrink-0 mr-3", startIconClassName)}
        />
      )}

      <div className={twMerge("transition-base flex-shrink-0", contentClassName)}>
        {children}
      </div>

      {EndIcon && (
        <EndIcon
          className={twMerge("transition-base absolute right-0", endIconClassName)}
        />
      )}
    </Component>
  );
};

export default memo(Button);
