import SVGIconBase from "./SVGIconBase";

const ChevronBackIcon = (props) => {
  return (
    <SVGIconBase {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="48"
        d="M328 112L184 256l144 144"
      />
    </SVGIconBase>
  );
};

export default ChevronBackIcon;
