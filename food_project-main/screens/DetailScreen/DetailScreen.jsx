import {
  ImageBackground,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import RenderHtml from "react-native-render-html";

import { COLORS, FONTSIZE } from "../../theme/theme";
import { styles } from "./DetailScreen.style";
import { useCartContext } from "../../contexts/CartProvider";

const DetailsScreen = ({ navigation, route }) => {
  const { addToCart } = useCartContext();
  const { width } = useWindowDimensions();

  const { params } = route;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.ScrollViewFlex}
    >
      <ImageBackground
        source={{ uri: params.image }}
        resizeMode="cover"
        style={styles.image_wrapper}
      >
        <TouchableOpacity onPress={() => navigation.pop()}>
          <View style={styles.heading_btn}>
            <View style={styles.forward_btn}>
              <Icon
                name="chevron-back-outline"
                color={COLORS.white}
                size={FONTSIZE.size_28}
              />
            </View>
          </View>
        </TouchableOpacity>
      </ImageBackground>

      <View style={styles.info_wrapper}>
        <Text style={styles.info_name}>{params.name}</Text>

        <Icon
          name="heart-outline"
          color={COLORS.primaryOrangeHex}
          size={FONTSIZE.size_28}
        />
      </View>

      <View style={styles.price_wrapper}>
        <Text
          style={[
            styles.price,
            {
              textDecorationColor: "#000",
              textDecorationStyle: "solid",
              textDecorationLine: "line-through",
            },
          ]}
        >
          {params.old_price}
        </Text>

        <Text style={styles.price}>{params.new_price}</Text>
      </View>

      <View style={styles.description_wrapper}>
        <Text style={styles.description_heading}>Mô tả</Text>
        {params.description && (
          <RenderHtml
            source={{
              html: `${params.description}`,
            }}
            contentWidth={width}
          />
        )}
        {!params.description && <Text>Không có mô tả cho sản phẩm này...</Text>}
      </View>

      <TouchableOpacity
        style={styles.add_cart_btn}
        onPress={() =>
          addToCart(
            params.id,
            params.name,
            params.new_price,
            params.old_price,
            params.description,
            params.image,
            1
          )
        }
      >
        <Text style={styles.add_cart_text_btn}>Thêm vào giỏ hàng</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DetailsScreen;
