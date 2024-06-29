import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { toast } from "react-toastify";
import { useLocalStorage } from "react-use";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartLocalStorage, setCartLocalStorage] = useLocalStorage("cart", []);

  const [referralCode, setReferralCode] = useState(null);

  const carts = cartLocalStorage;

  const total = useMemo(() => {
    return cartLocalStorage.reduce((accumulator, currentValue) => {
      return accumulator + currentValue?.new_price;
    }, 0);
  }, [cartLocalStorage]);

  const incrementCartItemQuantity = useCallback(
    (idx, id) => {
      const result = cartLocalStorage[idx];

      const resultClone = { ...result };

      resultClone.quantity = resultClone.quantity + 1;

      const results = cartLocalStorage.filter((item) => item.id !== id);

      setCartLocalStorage([resultClone, ...results]);
    },
    [cartLocalStorage]
  );

  const decrementCartItemQuantity = useCallback(
    (idx, id) => {
      const result = cartLocalStorage[idx];

      const resultClone = { ...result };

      resultClone.quantity = resultClone.quantity - 1;

      const results = cartLocalStorage.filter((item) => item.id !== id);

      setCartLocalStorage([resultClone, ...results]);
    },
    [cartLocalStorage]
  );

  const totalPriceAfterReferralCode = useMemo(() => {
    if (referralCode == undefined) return null;
    return cartLocalStorage.reduce((accumulator, currentValue) => {
      return (
        accumulator +
        Math.floor(
          currentValue.new_price * currentValue.quantity -
            (currentValue.new_price * currentValue.quantity) / 10
        )
      );
    }, 0);
  }, [referralCode, setReferralCode]);

  const handleAddToCart = useCallback(
    (detail_product, quantity) => {
      const result = cartLocalStorage.some((item) => {
        return item.id === detail_product.data.id;
      });

      if (result) {
        toast.error("Sản phẩm đẫ tồn tại trong giỏ hàng của bạn!!");
      } else {
        carts.push({
          ...detail_product.data,
          quantity,
        });

        setCartLocalStorage(carts);
        toast.success("Thếm thành công sản phẩm vào giỏ hàng!");
      }
    },
    [cartLocalStorage]
  );

  const handleRemoveToCart = (id) => {
    const result = cartLocalStorage.filter((item) => item.id !== id);
    setCartLocalStorage(result);
  };

  const cartValue = {
    cartLocalStorage,
    setCartLocalStorage,
    handleAddToCart,
    handleRemoveToCart,
    total,
    setReferralCode,
    referralCode,
    totalPriceAfterReferralCode,
    incrementCartItemQuantity,
    decrementCartItemQuantity,
  };

  return (
    <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);

  return context;
};

export default CartProvider;
