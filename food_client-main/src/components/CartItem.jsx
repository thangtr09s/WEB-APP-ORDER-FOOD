import { useCallback, useEffect, useState } from "react";
import TrashIcon from "../assets/Icons/TrashIcon";
import Button from "./Button";
import { useCartContext } from "../contexts/CartProvider";

const CartItem = ({
  name,
  newPrice,
  oldPrice,
  id,
  onDelete,
  image,
  idx,
  quantity,
}) => {
  const { incrementCartItemQuantity, decrementCartItemQuantity } =
    useCartContext();

  const handleDecrease = () => {
    if (quantity > 1) {
      decrementCartItemQuantity(idx, id);
    }
  };

  const handleIncrease = () => {
    incrementCartItemQuantity(idx, id);
  };

  return (
    <div className="flex gap-3">
      <div className="flex-shrink-0 p-2 rounded-md">
        <div className="border-[1px] border-[#6d6e72] p-2">
          <img
            src={image}
            alt=""
            className="object-cover w-20 h-20 rounded-md"
          />
        </div>
        <Button
          StartIcon={TrashIcon}
          containerClassName={"mt-2 justify-center"}
          startIconClassName={"w-4 h-4"}
          contentClassName={"text-sm"}
          onClick={() => onDelete(id)}
        >
          Xóa
        </Button>
      </div>

      <div className="flex flex-col w-full gap-2 sm:gap-3 sm:flex-row">
        <h1 className="font-medium line-clamp-2">{name}</h1>
        <div className="flex-1 text-right">
          <span className="text-[#f92424] text-lg font-bold block">
            {newPrice} đồng
          </span>
          <span className="text-sm line-through text-[#6d6e72]">
            {oldPrice} đồng
          </span>

          <div className={"flex gap-3 justify-end mt-2"}>
            <button
              className="px-2.5 rounded-md bg-[#f92424]"
              onClick={handleDecrease}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              className="px-2.5 rounded-md bg-[#f92424]"
              onClick={handleIncrease}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
