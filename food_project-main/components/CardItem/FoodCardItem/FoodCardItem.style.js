import { StyleSheet, Dimensions } from "react-native";
import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from "../../../theme/theme";

const CARD_WIDTH = Dimensions.get("window").width * 0.32;

export const styles = StyleSheet.create({
  wrapper: {
    padding: SPACING.space_15,
    borderRadius: BORDERRADIUS.radius_20,
    borderWidth: 1,
    borderColor: "#e2e2e2",
  },

  CardImageBG: {
    width: "100%",
    height: CARD_WIDTH,
    borderRadius: BORDERRADIUS.radius_20,
    marginBottom: SPACING.space_15,
    overflow: "hidden",
  },

  CardRatingContainer: {
    flexDirection: "row",
    backgroundColor: COLORS.primaryBlackRGBA,
    alignItems: "center",
    justifyContent: "center",
    gap: SPACING.space_10,
    paddingHorizontal: SPACING.space_15,
    position: "absolute",
    borderBottomLeftRadius: BORDERRADIUS.radius_20,
    borderTopRightRadius: BORDERRADIUS.radius_20,
    top: 0,
    right: 0,
  },

  CardRatingText: {
    color: COLORS.primaryWhiteHex,
    lineHeight: 22,
    fontSize: FONTSIZE.size_14,
  },

  CardTitle: {
    color: COLORS.black,
    fontSize: FONTSIZE.size_18,
    fontWeight: "700",
  },

  CardSubtitle: {
    color: COLORS.black,
    fontSize: FONTSIZE.size_12,
  },

  CardFooterRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: SPACING.space_15,
  },

  CardPriceCurrency: {
    color: COLORS.black,
    fontSize: FONTSIZE.size_18,
  },

  CardPrice: {
    color: COLORS.black,
  },

  add_icon: {
    backgroundColor: "#53b175",
    padding: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_15,
    fontWeight: "700",
  },
});
