import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import NumericInput from "../../../components/NumericInput";
import { FONTSIZE, SPACING } from "../../../theme/theme";
import { useCartContext } from "../../../contexts/CartProvider";
import { forwardRef, useState } from "react";

const CartItem = forwardRef((props, ref) => {
  const { name, title, price, image, id, onPress, idx, text, setText} =
    props;

  const [count, setCount] = useState(1);

  const { removeToCart, decrementCartItemQuantity, incrementCartItemQuantity } =
    useCartContext();

  const handleIncrease = () => {
    setText((prev) => prev + 1)
    setCount((prev) => prev + 1);
    incrementCartItemQuantity(count + 1, idx, id);
  };

  handleDecrease = () => {
    setText((prev) => {
      if (prev < 2) return 1;
      return prev - 1;
    });
    setCount((prev) => {
      if (prev < 2) return 1;
      return prev - 1;
    });
    decrementCartItemQuantity(count - 1, idx, id);
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container} ref={ref}>
      <Image source={{ uri: image }} style={styles.card_image} />

      <View style={styles.card_content}>
        <View style={styles.card_content_top}>
          <View>
            <Text style={styles.card_name}>{name}</Text>
            <Text style={styles.card_title}>{title}</Text>
          </View>

          {/* icon */}
          <TouchableOpacity onPress={() => removeToCart(id)}>
            <Icon name={"close-outline"} style={styles.close_icon} />
          </TouchableOpacity>
        </View>

        <View style={styles.card_content_bottom}>
          <NumericInput
            count={count}
            handleDecrease={handleDecrease}
            handleIncrease={handleIncrease}
          />
          <Text style={styles.card_price}>{price.toLocaleString()} đồng</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    marginHorizontal: SPACING.space_24,
    paddingVertical: SPACING.space_24,
    flexDirection: "row",
    gap: 24,
    borderBottomWidth: 0.25,
    borderStyle: "solid",
    borderColor: "transparent transparent #e9e9e9 transparent",
  },

  card_image: {
    resizeMode: "cover",
    width: 90,
    height: 90,
    borderRadius: 4,
  },

  card_content: {
    flex: 1,
    justifyContent: "space-between",
  },

  card_content_top: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },

  card_name: {
    fontSize: FONTSIZE.size_18,
    fontWeight: "bold",
  },

  card_title: {
    fontSize: FONTSIZE.size_16,
  },

  card_content_bottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  card_price: {
    fontSize: FONTSIZE.size_18,
    fontWeight: "bold",
  },

  close_icon: {
    fontSize: FONTSIZE.size_24,
  },
});

export default CartItem;
