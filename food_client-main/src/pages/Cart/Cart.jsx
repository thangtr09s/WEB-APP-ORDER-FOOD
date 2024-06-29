import { Link } from "react-router-dom";
import { routes } from "../../configs";
import CartItem from "../../components/CartItem";
import { useCartContext } from "../../contexts/CartProvider";
import { Fragment, useState } from "react";

const Cart = () => {
  const { cartLocalStorage, handleRemoveToCart, total } = useCartContext();

  const sumPrice = cartLocalStorage.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.quantity * currentValue.new_price,
    0
  );

  return (
    <div className="max-w-[800px] min-w-[800px] px-4 mx-auto">
      {cartLocalStorage.map((el, idx) => (
        <div className="mb-5" key={idx}>
          <CartItem
            idx={idx}
            id={el.id}
            name={el?.name}
            newPrice={el?.new_price.toLocaleString()}
            oldPrice={el?.old_price.toLocaleString()}
            image={el?.image}
            onDelete={() => handleRemoveToCart(el?.id)}
            quantity={el.quantity}
          />
        </div>
      ))}

      {cartLocalStorage.length > 0 ? (
        <Fragment>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">Tổng tiền:</span>
            <span className="text-[#f92424] text-lg font-bold">
              {sumPrice.toLocaleString()} đồng
            </span>
          </div>
          <Link
            to={routes.payment}
            className="block w-full px-4 py-2 bg-[#F92424] text-center mt-10"
          >
            <span>Thanh toán</span>
          </Link>
        </Fragment>
      ) : (
        <p className="text-lg font-bold">Bạn chưa có đơn hàng nào</p>
      )}
    </div>
  );
};

export default Cart;
