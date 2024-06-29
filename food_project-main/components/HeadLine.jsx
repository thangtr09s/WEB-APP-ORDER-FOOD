import { Text, StyleSheet } from "react-native";
import { FONTSIZE, SPACING } from "../theme/theme";

const HeadLine = ({ title, customStyles, ...restProps }) => {
  const combinedStyles = [styles.container, customStyles];

  return (
    <Text style={combinedStyles} {...restProps}>
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    fontSize: FONTSIZE.size_20,
    fontWeight: "bold",
    
  },
});

export default HeadLine;
