import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { COLORS, SPACING } from "../theme/theme";

const NumericInput = ({
  customStyles,
  handleIncrease,
  handleDecrease,
  count,
}) => {
  const combinedStyles = [styles.container, customStyles];

  return (
    <View style={combinedStyles}>
      <TouchableOpacity onPress={handleDecrease} style={styles.decrement_btn}>
        <Text style={{ color: COLORS.black, textAlign: "center" }}>-</Text>
      </TouchableOpacity>
      <TextInput value={`${count}`} onChangeText={() => {}} />
      <TouchableOpacity onPress={handleIncrease} style={styles.increment_btn}>
        <Text style={{ color: COLORS.white, textAlign: "center" }}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.space_4,
  },

  decrement_btn: {
    backgroundColor: "#ccc",
    opacity: 0.5,
    paddingEnd: 10,
    paddingStart: 10,
    paddingTop: 6,
    paddingBottom: 6,
    borderRadius: 4,
    marginEnd: 10,
  },

  increment_btn: {
    backgroundColor: "#53b175",
    paddingEnd: 10,
    paddingStart: 10,
    paddingTop: 6,
    paddingBottom: 6,
    borderRadius: 4,
  },
});

export default NumericInput;
