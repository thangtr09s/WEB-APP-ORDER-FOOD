import SVGIconBase, { SVGIconBaseprops } from "./SVGIconBase";


const LogOutIcon = (props:SVGIconBaseprops) => {
  return (
    <SVGIconBase {...props}>
      <path
        d="M304 336v40a40 40 0 01-40 40H104a40 40 0 01-40-40V136a40 40 0 0140-40h152c22.09 0 48 17.91 48 40v40M368 336l80-80-80-80M176 256h256"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
    </SVGIconBase>
  );
};

export default LogOutIcon;
