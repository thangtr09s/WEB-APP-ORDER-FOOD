import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { styles } from "./LoginScreen.style";

const LoginScreen = ({ navigation }) => {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading}>ĐĂNG NHẬP</Text>
      <View style={styles.form_control}>
        <Text>Số điện thoại</Text>
        <TextInput
          style={styles.form_input}
          onChangeText={setNumber}
          value={number}
          placeholder="Nhập số điện thoại"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.form_control}>
        <Text>Mật khẩu</Text>
        <TextInput
          style={styles.form_input}
          onChangeText={setPassword}
          value={password}
          placeholder="Nhập mật khẩu"
          keyboardType="visible-password"
        />
      </View>

      <TouchableOpacity style={styles.login_btn}>
        <Text style={styles.login_btn_text}>ĐĂNG NHẬP</Text>
      </TouchableOpacity>

      <View style={styles.register_wrapper}>
        <Text>Bạn chưa có tài khoản?</Text>

        <TouchableOpacity onPress={() => navigation.push("Register")}>
          <Text style={styles.register_link_text}>Đăng kí</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.popToTop()}>
        <Text style={styles.register_link_text}>Quay lại Trang cá nhân</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
