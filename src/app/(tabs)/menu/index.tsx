import {
  FlatList,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";

import products from "@/assets/data/products";
import { ProductListItems } from "@/components/ProductListItems";

const product = products[1];

export default function MenuScreen() {
  return (
    <View
      style={{
        margin: 10,
        marginTop: 20,
        height: "auto",
      }}
    >
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductListItems product={item} />}
        numColumns={2}
        contentContainerStyle={{
          gap: 10,
          padding: 10,
        }}
        columnWrapperStyle={{
          gap: 10,
        }}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
  },
  price: {
    color: "#088cf1",
    fontWeight: "bold",
  },
  image: { width: "100%", aspectRatio: 1, resizeMode: "contain" },
});
