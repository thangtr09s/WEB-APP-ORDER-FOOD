import { Text, TouchableOpacity, View, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { styles } from "./FoodCardItem.style";
import { COLORS, FONTSIZE } from "../../../theme/theme";
import { useCartContext } from "../../../contexts/CartProvider";

const FoodCardItem = ({
  id,
  imagelink_square,
  name,
  new_price,
  customStylesWrapper,
  old_price,
  description,
  quantity,
}) => {
  const { addToCart } = useCartContext();

  return (
    <View style={[styles.wrapper, customStylesWrapper]}>
      <Image source={{ uri: imagelink_square }} style={styles.CardImageBG} />
      <Text style={styles.CardTitle}>{name}</Text>

      <View style={styles.CardFooterRow}>
        <Text style={styles.CardPriceCurrency}>
          <Text style={styles.CardPrice}>{new_price}</Text>
        </Text>
        <TouchableOpacity
          onPress={() =>
            addToCart(
              id,
              name,
              new_price,
              old_price,
              description,
              imagelink_square,
              quantity
            )
          }
        >
          <Icon
            name={"add-outline"}
            color={COLORS.white}
            BGColor={COLORS.primaryOrangeHex}
            size={FONTSIZE.size_24}
            style={styles.add_icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FoodCardItem;
