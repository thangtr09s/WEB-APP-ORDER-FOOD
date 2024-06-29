import { twMerge } from "tailwind-merge";

const HeadLine = ({ children, className, ...restprops }) => {
  return (
    <h5
      className={twMerge(
        "relative inline-block mx-auto text-3xl font-extrabold w-full text-center mb-6",
        className
      )}
      {...restprops}
    >
      {children}
    </h5>
  );
};

export default HeadLine;
