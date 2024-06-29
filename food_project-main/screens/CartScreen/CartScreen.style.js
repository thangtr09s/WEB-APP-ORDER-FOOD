import { StyleSheet } from "react-native";
import { FONTSIZE, SPACING } from "../../theme/theme";

export const styles = StyleSheet.create({
  heading: {
    fontWeight: "bold",
    fontSize: FONTSIZE.size_24,
    textAlign: "center",
    marginTop: SPACING.space_12,
    paddingBottom: SPACING.space_16,
    borderBottomWidth: 0.25,
    borderStyle: "solid",
    borderColor: "#e9e9e9",
  },

  cart_bottom_wrapper: {
    marginHorizontal: SPACING.space_24,
  },

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
