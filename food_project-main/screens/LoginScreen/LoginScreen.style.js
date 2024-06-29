import { StyleSheet } from "react-native";

import { FONTSIZE, SPACING } from "../../theme/theme";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 36,
  },

  heading: {
    fontSize: FONTSIZE.size_30,
    fontWeight: "bold",
    marginBottom: SPACING.space_20,
  },

  form_control: {
    width: "100%",
    paddingVertical: 8,
  },

  form_input: {
    marginVertical: 12,
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
  },

  login_btn: {
    backgroundColor: "#53B175",
    width: "100%",
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 12,
  },

  login_btn_text: {
    fontSize: FONTSIZE.size_18,
    fontWeight: "bold",
    color: "white",
  },

  register_wrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginBottom: 12,
  },

  register_link_text: {
    fontSize: FONTSIZE.size_16,
    color: "blue",
    textDecorationColor: "blue",
    textDecorationStyle: "solid",
    textDecorationLine: "underline",
  },
});
