import { View, Text, FlatList, SafeAreaView, Image, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { getAllProducts } from "../../services/products";
import { ProductItem } from "../../componentes/productItem/productItem";
 
export default function Home() {
 
  const products = getAllProducts();
 
  return (
    <SafeAreaView>
        <Text>Sou a Home</Text>
       
        <FlatList
          data={products}
          renderItem={({ item }) => <ProductItem product={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
    </SafeAreaView>
  );
}
 
