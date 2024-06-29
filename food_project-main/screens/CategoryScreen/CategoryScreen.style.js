import { StyleSheet } from "react-native";
import { FONTSIZE } from "../../theme/theme";

export const styles = StyleSheet.create({
  heading: {
    textAlign: "center",
    fontSize: FONTSIZE.size_28,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 20,
  },
  input: {
    marginBottom: 30,
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
  },
});
