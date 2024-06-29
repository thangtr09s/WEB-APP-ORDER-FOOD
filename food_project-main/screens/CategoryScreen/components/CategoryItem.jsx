import { Image, Text, StyleSheet, TouchableOpacity } from "react-native";

import { FONTSIZE } from "../../../theme/theme";

let randomBorderColor = [
  "#82c79b",
  "#fbbd7d",
  "#f7a593",
  "#d3b0e0",
  "#fde598",
  "#b7dff5",
];

let randomBackgroundColor = [
  "#eef8f2",
  "#fff6ee",
  "#fde8e4",
  "#f4ebf7",
  "#fef8e5",
  "#edf7fc",
];

let count = -1;

const CategoryItem = ({ idx, navigation, id, title, image }) => {
  if (!randomBorderColor[idx] || !randomBackgroundColor[idx]) {
    if (!randomBorderColor[count + 1] || !randomBackgroundColor[count + 1]) {
      count = 0;
    } else {
      count++;
    }
  }

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.push("san-pham", {
          id,
          title,
        })
      }
      style={[
        styles.container,
        {
          borderColor: `${randomBorderColor[idx] || randomBorderColor[count]}`,
          backgroundColor: `${
            randomBackgroundColor[idx] || randomBackgroundColor[count]
          }`,
        },
      ]}
    >
      <Image source={{ uri: image }} style={styles.image} />

      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "46%",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 24,
    padding: 30,
    gap: 20,
    alignItems: "center",
  },

  image: {
    resizeMode: "cover",
    width: 100,
    height: 100,
  },

  text: {
    fontSize: FONTSIZE.size_20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default CategoryItem;
