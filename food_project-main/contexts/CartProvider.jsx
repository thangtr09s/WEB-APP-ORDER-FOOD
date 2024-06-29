import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const totalPrice = useMemo(() => {
    console.log("lọt vào đây");
    return products.reduce((accumulator, currentValue) => {
      const totalPrice = accumulator + currentValue.new_price;

      return totalPrice;
    }, 0);
  }, [products]);

  const addToCart = (
    id,
    name,
    new_price,
    old_price,
    description,
    image,
    quantity
  ) => {
    const result = products.some((product) => product.id === id);

    if (result) {
      alert("Sản phẩm đã tồn tại trong giỏ hàng của bạn");
    } else {
      const formatTotalPrice = new_price?.replace(" đ", "")?.replace(".", "");

      setProducts((prev) => [
        ...prev,
        {
          id,
          name,
          new_price: parseFloat(formatTotalPrice),
          image,
          old_price,
          description,
          quantity: 1,
        },
      ]);
      alert("Thêm sản phẩm vào giỏ hàng thành công");
    }
  };

  const incrementCartItemQuantity = useCallback(
    (quantity, idx, id) => {
      let clone = [...products];

      clone[idx]["quantity"] = quantity;
    },
    [products]
  );

  const decrementCartItemQuantity = useCallback(
    (quantity, idx, id) => {
      if (quantity < 1) {
        quantity = 1;
      }

      let clone = [...products];

      clone[idx]["quantity"] = quantity;
    },
    [products]
  );

  const removeToCart = (id) => {
    const result = products.filter((product) => product.id !== id);

    setProducts(result);
  };

  const cartData = {
    addToCart,
    removeToCart,
    products,
    incrementCartItemQuantity,
    decrementCartItemQuantity,
    totalPrice,
  };

  return (
    <CartContext.Provider value={cartData}>{children}</CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);

  return context;
};

export default CartProvider;
