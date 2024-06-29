import SVGIconBase, { SVGIconBaseprops } from "./SVGIconBase";

const BanIcon = (props: SVGIconBaseprops) => {
  return (
    <SVGIconBase {...props}>
      <circle
        cx="256"
        cy="256"
        r="208"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="32"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M108.92 108.92l294.16 294.16"
      />
    </SVGIconBase>
  );
};

export default BanIcon;
