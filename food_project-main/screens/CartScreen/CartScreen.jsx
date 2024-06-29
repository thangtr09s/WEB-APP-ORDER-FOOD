import { useMemo, useRef, useState } from "react";
import { Text, ScrollView, TouchableOpacity, View } from "react-native";

import CartItem from "./components/CartItem";
import { styles } from "./CartScreen.style";
import { FONTSIZE } from "../../theme/theme";
import { useCartContext } from "../../contexts/CartProvider";

const CartScreen = ({ navigation }) => {
  const { products, totalPrice } = useCartContext();
  console.log(
    "🚀 ~ file: CartScreen.jsx:11 ~ CartScreen ~ products:",
    products
  );
  const [text, settext] = useState(1);

  const total_price = useMemo(() => {
    const result = products.reduce((accumulator, currentValue) => {
      const totalPrice =
        accumulator +
        currentValue.new_price *
          (currentValue.quantity ? currentValue.quantity : 1);

      return totalPrice;
    }, 0);

    return result;
  }, [products, totalPrice, text]);

  return (
    <ScrollView>
      <Text style={styles.heading}>Giỏ hàng của tôi</Text>
      {products.map((el, idx) => (
        <CartItem
          key={idx}
          name={el.name}
          title={el.title}
          price={el.new_price}
          image={el.image}
          id={el.id}
          idx={idx}
          setText={settext}
          text={text}
          onPress={() =>
            navigation.push("Detail", {
              id: el.id,
              old_price: el.old_price,
              new_price: el.new_price,
              description: el.description,
              name: el.name,
              image: el.image,
            })
          }
        />
      ))}

      <View style={styles.cart_bottom_wrapper}>
        <View style={styles.cart_price_wrapper}>
          <Text style={{ fontSize: FONTSIZE.size_18, fontWeight: "bold" }}>
            Tổng tiền:
          </Text>
          <Text style={{ fontSize: FONTSIZE.size_16 }}>
            {total_price.toLocaleString()} đồng
          </Text>
        </View>

        <TouchableOpacity
          onPress={() =>
            navigation.push("thanh-toan", {
              total_price,
            })
          }
          style={styles.payment_btn}
        >
          <Text style={styles.payment_text}>Thanh toán</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CartScreen;
