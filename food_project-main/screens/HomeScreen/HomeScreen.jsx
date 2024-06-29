import { useEffect, useRef, useState } from "react";
import {
  FlatList,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";

import FoodCardItem from "../../components/CardItem/FoodCardItem/FoodCardItem";
import { foodData } from "../../mock_api/foodData";
import HeadLine from "../../components/HeadLine";
import { styles } from "./HomeScreen.style";
import { useStore } from "../../store/store";
import {
  getNewProducts,
  getSellingProducts,
  getSuperDiscountProducts,
} from "../../services/homeServices";

const HomeScreen = ({ navigation }) => {
  const ListRef = useRef();
  const CoffeeList = useStore((state) => state.CoffeeList);

  const [newProducts, setNewProducts] = useState([]);
  const [sellingProducts, setSellingProducts] = useState([]);
  const [superDiscountProducts, setSuperDiscountProducts] = useState([]);

  const handleClickFoodItem = (
    old_price,
    new_price,
    id,
    description,
    name,
    image,
    quantity
  ) => {
    navigation.push("Detail", {
      id: id,
      old_price: old_price,
      new_price: new_price,
      description: description,
      name: name,
      image: image,
      quantity,
    });
  };

  useEffect(() => {
    const fetchingData = async () => {
      const resNewProduct = await getNewProducts();
      const resSellingProducts = await getSellingProducts();
      const resSuperDiscountProducts = await getSuperDiscountProducts();

      setNewProducts(resNewProduct);
      setSellingProducts(resSellingProducts);
      setSuperDiscountProducts(resSuperDiscountProducts);
    };

    fetchingData();
  }, []);

  return (
    <ScrollView>
      <SwiperFlatList
        autoplay
        autoplayDelay={2}
        autoplayLoop
        index={2}
        data={foodData}
        renderItem={({ item }) => (
          <Image
            source={item.imagelink_square}
            style={styles.image}
            resizeMode="cover"
          />
        )}
      />

      {/* sản phẩm Mới nhất */}
      <View style={styles.card_wrapper}>
        <HeadLine title={"SẢN PHẨM MỚI RA MẮT"} />

        <FlatList
          ref={ListRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={newProducts}
          contentContainerStyle={styles.FlatListContainer}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                handleClickFoodItem(
                  item.old_price,
                  item.new_price,
                  item.id,
                  item.description,
                  item.name,
                  item.image,
                  1
                )
              }
            >
              <FoodCardItem
                id={item.id}
                imagelink_square={item.image}
                name={item.name}
                new_price={item.new_price}
                old_price={item.old_price}
                description={item.description}
                quantity={1}
              />
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Sản phẩm bán chạy */}
      <View style={styles.card_wrapper}>
        <HeadLine title={"SẢN PHẨM BÁN CHẠY"} />

        <FlatList
          ref={ListRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={sellingProducts}
          contentContainerStyle={styles.FlatListContainer}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                handleClickFoodItem(
                  item.old_price,
                  item.new_price,
                  item.id,
                  item.description,
                  item.name,
                  item.image,
                  1
                )
              }
            >
              <FoodCardItem
                id={item.id}
                imagelink_square={item.image}
                name={item.name}
                new_price={item.new_price}
                old_price={item.old_price}
                description={item.description}
                quantity={1}
              />
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Sản phẩm siêu giảm giá */}
      <View style={styles.card_wrapper}>
        <HeadLine title={"SẢN PHẨM SIÊU GIẢM GIÁ"} />

        <FlatList
          ref={ListRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={superDiscountProducts}
          contentContainerStyle={styles.FlatListContainer}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                handleClickFoodItem(
                  item.old_price,
                  item.new_price,
                  item.id,
                  item.description,
                  item.name,
                  item.image,
                  1
                )
              }
            >
              <FoodCardItem
                id={item.id}
                imagelink_square={item.image}
                name={item.name}
                new_price={item.new_price}
                old_price={item.old_price}
                description={item.description}
                quantity={1}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
