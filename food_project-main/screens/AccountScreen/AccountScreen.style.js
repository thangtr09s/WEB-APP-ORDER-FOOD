import { StyleSheet } from "react-native";
import { FONTSIZE } from "../../theme/theme";

export const styles = StyleSheet.create({
  login_btn_wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingStart: 20,
    paddingEnd: 20,
  },

  login_btn: {
    backgroundColor: "#53B175",
    width: "100%",
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 8,
  },

  login_btn_text: {
    fontSize: FONTSIZE.size_18,
    fontWeight: "bold",
    color: "white",
  },
});
