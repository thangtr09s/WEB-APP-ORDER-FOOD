import { StyleSheet } from "react-native";
import { COLORS, FONTSIZE, SPACING } from "../../theme/theme";

export const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  image_wrapper: {
    width: "100%",
    aspectRatio: 1 / 1,
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
    overflow: "hidden",
  },

  heading_btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingEnd: 12,
    paddingStart: 6,
    paddingTop: 8,
  },

  forward_btn: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingEnd: 8,
    paddingStart: 8,
    borderRadius: 24,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },

  info_wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: SPACING.space_30,
    paddingStart: SPACING.space_20,
    paddingEnd: SPACING.space_20,
  },

  info_name: {
    fontSize: FONTSIZE.size_20,
    fontWeight: "800",
  },

  info_title: {
    fontSize: FONTSIZE.size_14,
    marginTop: SPACING.space_2,
  },

  price_wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingStart: SPACING.space_20,
    paddingEnd: SPACING.space_20,
    marginTop: SPACING.space_12,
  },

  price: {
    fontSize: FONTSIZE.size_24,
    fontWeight: "bold",
  },

  add_cart_btn: {
    paddingTop: SPACING.space_12,
    paddingBottom: SPACING.space_12,
    backgroundColor: "#53b175",
    borderRadius: 6,
    marginTop: SPACING.space_20,
    marginStart: SPACING.space_20,
    marginEnd: SPACING.space_20,
  },

  add_cart_text_btn: {
    textAlign: "center",
    fontSize: FONTSIZE.size_16,
    color: COLORS.white,
  },

  description_wrapper: {
    paddingTop: SPACING.space_30,
    paddingStart: SPACING.space_20,
    paddingEnd: SPACING.space_20,
  },

  description_heading: {
    fontWeight: "bold",
    fontSize: FONTSIZE.size_18,
    marginBottom: SPACING.space_4,
  },
});
