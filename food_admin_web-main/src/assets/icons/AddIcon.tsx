import SVGIconBase, { SVGIconBaseprops } from "./SVGIconBase";

const AddIcon = (props: SVGIconBaseprops) => {
  return (
    <SVGIconBase {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M256 112v288M400 256H112"
      />
    </SVGIconBase>
  );
};

export default AddIcon;
