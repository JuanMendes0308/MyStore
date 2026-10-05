import {
  StyleSheet,
  Text,
  FlatList,
} from "react-native";
 
import { useLocalSearchParams } from "expo-router";
import { getProductsByCategory } from "../../../services/products";
import { ProductItem } from "../../../componentes/productItem/productItem";
import { SafeAreaView } from "react-native-safe-area-context";
 
export default function CategoryScreen() {
  const { id } = useLocalSearchParams();
 
  const idCategory = parseInt(id as string, 10);
 
  const products = getProductsByCategory(idCategory);
 
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Produtos da categoria
      </Text>
 
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductItem product={item} />
        )}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
    padding: 16,
  },
 
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1A1A1A",
    marginBottom: 16,
  },
 
  list: {
    paddingBottom: 20,
    gap: 12,
  },
});
 