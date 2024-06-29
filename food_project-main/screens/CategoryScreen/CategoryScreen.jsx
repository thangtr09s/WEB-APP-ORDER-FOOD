import { ScrollView, View, Text, TextInput } from "react-native";
import CategoryItem from "./components/CategoryItem";
import { FONTSIZE } from "../../theme/theme";
import { useState } from "react";
import { styles } from "./CategoryScreen.style";
import { CATEGORY_ITEMS } from "./constants";

const CategoryScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");

  return (
    <ScrollView
      style={{
        paddingHorizontal: 8,
      }}
    >
      <Text style={styles.heading}>DANH MỤC SẢN PHẨM</Text>

      <TextInput
        style={styles.input}
        onChangeText={setSearch}
        value={search}
        placeholder="Tìm kiếm ở đây"
      />

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 20,
          paddingBottom: 20,
        }}
      >
        {CATEGORY_ITEMS.map((el, idx) => {
          return (
            <CategoryItem
              key={idx}
              idx={idx}
              id={el.slug}
              navigation={navigation}
              title={el.title}
              image={el.image}
              description={el?.description}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default CategoryScreen;
