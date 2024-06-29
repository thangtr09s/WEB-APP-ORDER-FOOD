import { SVGIconBaseprops } from "assets/icons/SVGIconBase";

interface CardItemProps {
  icon: (props: SVGIconBaseprops) => JSX.Element;
  view: number;
  title: string;
  bg_color: string;
}

const CardItem = ({ icon: Icon, view, title, bg_color }: CardItemProps) => {
  return (
    <div
      className="py-4 pl-4 rounded-md pr-7 flex-between"
      style={{ backgroundColor: bg_color }}
    >
      <Icon className="flex-shrink-0 w-16 h-16 mr-2 opacity-30 text-accent" />

      <div className="text-right text-white">
        <p className="mb-2 text-xl font-bold">{view}</p>
        <i className="font-light opacity-80">{title}</i>
      </div>
    </div>
  );
};

export default CardItem;
