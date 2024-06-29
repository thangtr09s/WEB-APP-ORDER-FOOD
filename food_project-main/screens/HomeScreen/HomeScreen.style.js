import { StyleSheet, Dimensions } from "react-native";

import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from "../../theme/theme";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  card_wrapper: {
    marginTop: SPACING.space_18,
    marginHorizontal: SPACING.space_10,
  },

  FlatListContainer: {
    gap: SPACING.space_20,
    paddingVertical: SPACING.space_20,
  },

  image: {
    width: width,
    height: height * 0.3,
    borderRadius: BORDERRADIUS.radius_20,
    marginBottom: SPACING.space_15,
    overflow: "hidden",
    borderRadius: 0,
  },
});
