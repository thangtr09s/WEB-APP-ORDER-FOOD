import { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";

import { styles } from "./AccountScreen.style";
import { FONTSIZE } from "../../theme/theme";

const AccountScree = ({ navigation }) => {
  const [user, setUser] = useState(true);

  if (!user) {
    return (
      <View style={styles.login_btn_wrapper}>
        <TouchableOpacity
          style={styles.login_btn}
          onPress={() => navigation.push("Login")}
        >
          <Text style={styles.login_btn_text}>ĐĂNG NHẬP</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{ paddingHorizontal: 24 }}>
        <View
          style={{
            marginTop: 32,
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Image
            source={require("../../assets/logo.png")}
            style={{
              objectFit: "cover",
              resizeMode: "cover",
            }}
          />

          <View>
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>
              Afsar Hossen
            </Text>
            <Text>Imshuvo97@gmail.com</Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            marginTop: 32,
            backgroundColor: "#53B175",
            justifyContent: "center",
            alignItems: "center",
            paddingStart: 20,
            paddingEnd: 20,
          }}
        >
          <Text
            style={{
              fontSize: FONTSIZE.size_18,
              fontWeight: "bold",
              color: "white",
              paddingVertical: 12,
            }}
          >
            Đăng xuất
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AccountScree;
