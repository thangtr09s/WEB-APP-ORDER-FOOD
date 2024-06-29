import { StyleSheet } from "react-native";
import { FONTSIZE, SPACING } from "../../theme/theme";

export const styles = StyleSheet.create({
  cart_price_wrapper: {
    marginTop: SPACING.space_24,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  payment_btn: {
    marginVertical: SPACING.space_24,
    paddingVertical: SPACING.space_12,
    borderRadius: 4,
    backgroundColor: "#53B175",
  },

  payment_text: {
    textAlign: "center",
    fontSize: FONTSIZE.size_18,
    fontWeight: "bold",
    color: "#fff",
  },
});
