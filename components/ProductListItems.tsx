import { Product } from "@/src/types";
import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, Text } from "react-native";

export const ProductListItems = ({ product }: { product: Product }) => {
  return (
    <Link href={`/f${product.id}`} asChild>
      <Pressable style={styles.container}>
        <Image
          source={{
            uri:
              product.image ||
              "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png",
          }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    flex: 1,
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
