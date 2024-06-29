import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { FONTSIZE } from "../../theme/theme";
import { styles as stylesGlobal } from "../../styles";
import { useCallback, useState } from "react";
import { styles } from "./PaymentScreen.style";
import { useCartContext } from "../../contexts/CartProvider";
import axios from "axios";

const PaymentScreen = ({ navigation, route }) => {
  const [shipping_name, setShipping_name] = useState("");
  const [shipping_address, setShipping_address] = useState("");
  const [shipping_phone, setShipping_phone] = useState("");
  const [shipping_note, setShipping_note] = useState("");
  const { products } = useCartContext();
  const { params } = route;

  const onSubmit = useCallback(async () => {
    try {
      await axios(`https://music-demo123123.000webhostapp.com/api/order`, {
        method: "post",
        data: {
          shipping_name,
          shipping_address,
          shipping_phone,
          shipping_note,
          payment_method_id: 1,
          order_status: 0,
          order_total: params.total_price,
          carts: JSON.stringify(products),
        },
      });

      // await fetch({
      //   method: "post",
      //   url: "https://music-demo123123.000webhostapp.com/api/order",
      //   body: data
      // });
      alert("Đặt hàng thành công");
    } catch (error) {
      alert("Đặt hàng thất bại, vui lòng kiểm tra lại thông tin");
      console.log(error);
    }
  }, [shipping_name, shipping_address, shipping_phone, shipping_note]);

  return (
    <ScrollView
      style={{
        marginTop: 30,
        paddingHorizontal: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <TouchableOpacity onPress={() => navigation.pop(1)}>
          <Icon
            name="chevron-back-outline"
            style={{
              fontSize: FONTSIZE.size_24,
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: FONTSIZE.size_20,
            fontWeight: "bold",
          }}
        >
          Thanh toán
        </Text>
        <Text></Text>
      </View>

      <View style={stylesGlobal.form_control}>
        <Text>Họ và tên</Text>
        <TextInput
          style={stylesGlobal.form_input}
          onChangeText={setShipping_name}
          value={shipping_name}
          placeholder="Nhập họ và tên"
          keyboardType="visible-password"
        />
      </View>
      <View style={stylesGlobal.form_control}>
        <Text>Địa chỉ</Text>
        <TextInput
          style={stylesGlobal.form_input}
          onChangeText={setShipping_address}
          value={shipping_address}
          placeholder="Nhập địa chỉ"
          keyboardType="visible-password"
        />
      </View>
      <View style={stylesGlobal.form_control}>
        <Text>Số điện thoại</Text>
        <TextInput
          style={stylesGlobal.form_input}
          onChangeText={setShipping_phone}
          value={shipping_phone}
          placeholder="Nhạp số điện thoại"
          keyboardType="numeric"
        />
      </View>
      <View style={stylesGlobal.form_control}>
        <Text>Thông tin bổ sung</Text>
        <TextInput
          style={stylesGlobal.form_input}
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          onChangeText={setShipping_note}
          value={shipping_note}
          placeholder="Nhập thông tin bổ sung"
          keyboardType="visible-password"
        />
      </View>

      <View style={styles.cart_bottom_wrapper}>
        <View
          style={{
            borderBottomWidth: 1,
            borderStyle: "solid",
            borderBottomColor: "#ccc",
            paddingBottom: 12,
            gap: 8,
          }}
        >
          {products.map((el, idx) => (
            <View
              key={idx}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text>{el.name}</Text>
              <Text>
                {el.new_price}/1 * {el.quantity}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.cart_price_wrapper}>
          <Text style={{ fontSize: FONTSIZE.size_18, fontWeight: "bold" }}>
            Tổng tiền:
          </Text>
          <Text style={{ fontSize: FONTSIZE.size_16 }}>
            {params.total_price.toLocaleString()} đồng
          </Text>
        </View>

        <TouchableOpacity onPress={onSubmit} style={styles.payment_btn}>
          <Text style={styles.payment_text}>Thanh toán</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default PaymentScreen;
