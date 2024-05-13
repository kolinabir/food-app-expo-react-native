import { Product } from "@/src/types";
import { Image, StyleSheet, Text, View } from "react-native";

export const ProductListItems = ({ product }: { product: Product }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
};

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
