import { Link } from "react-router-dom";
import { routes } from "../configs";

const CardItem = ({
  name,
  old_price,
  new_price,
  id,
  image,
  percent_discount,
  to,
}) => {
  return (
    <Link
      to={to ? to : routes.detail_product.replace(":id", id)}
      className="cursor-pointer hover:scale-105 transition-base"
    >
      <div className="relative">
        <img
          src={image}
          alt=""
          className="object-cover w-full h-full sm:aspect-square"
        />
        <span
          className={`absolute py-0.5 px-2 -left-1 top-5 border-2 border-solid border-[#fa2323] text-sm text-[#fa2323] font-bold ${
            !percent_discount && "hidden"
          }`}
        >
          {percent_discount}
        </span>
      </div>

      <div className="text-center">
        <p className="text-sm pt-[10px] px-[10px] pb-5 text-[#f1f1f1] font-normal">
          {name}
        </p>
        <span
          className={`text-sm font-normal line-through text-[#ccc] ${
            !old_price && "hidden"
          }`}
        >
          {old_price} đồng
        </span>
        <span className={`font-bold text-sm ml-1.5 ${!new_price && "hidden"}`}>
          {new_price} đồng
        </span>
      </div>
    </Link>
  );
};

export default CardItem;
