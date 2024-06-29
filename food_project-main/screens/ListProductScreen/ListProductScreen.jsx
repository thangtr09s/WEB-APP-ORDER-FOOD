import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { FONTSIZE } from "../../theme/theme";
import FoodCardItem from "../../components/CardItem/FoodCardItem/FoodCardItem";
import { foodData } from "../../mock_api/foodData";
import { useEffect, useState } from "react";
import { getListProduct } from "../../services/ListProduct";

const ListProductScreen = ({ navigation, route }) => {
  const handleClickFoodItem = (
    index,
    id,
    image,
    description,
    name,
    old_price,
    new_price
  ) => {
    navigation.push("Detail", {
      index,
      id,
      image,
      description,
      name,
      old_price,
      new_price,
    });
  };
  const [data, setData] = useState([]);
  console.log(
    "🚀 ~ file: ListProductScreen.jsx:20 ~ ListProductScreen ~ data:",
    data
  );
  const { params } = route;

  useEffect(() => {
    const fetchingData = async () => {
      const res = await getListProduct(params.id);

      setData(res.data);
    };
    fetchingData();
  }, []);

  return (
    <ScrollView
      style={{
        marginTop: 30,
        paddingHorizontal: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.pop(1)}>
          <Icon
            name="chevron-back-outline"
            style={{
              fontSize: FONTSIZE.size_24,
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: FONTSIZE.size_20,
            fontWeight: "bold",
          }}
        >
          {route.params.title}
        </Text>
        <Text></Text>
      </View>

      <View
        style={{
          marginTop: 30,
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 12,
          justifyContent: "center",
        }}
      >
        {data.map((item, idx) => (
          <TouchableOpacity
            key={idx}
            onPress={() =>
              handleClickFoodItem(
                item.index,
                item.id,
                item.image,
                item.description,
                item.name,
                item.old_price,
                item.new_price
              )
            }
            style={{
              width: "48%",
            }}
          >
            <FoodCardItem
              id={item.id}
              index={item.index}
              imagelink_square={item.image}
              name={item.name}
              new_price={item.new_price}
              description={item?.description}
              buttonPressHandler={() => {}}
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default ListProductScreen;
