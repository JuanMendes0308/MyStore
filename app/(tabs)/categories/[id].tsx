import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
} from "react-native";
 
import { router, useLocalSearchParams } from "expo-router";
 
import { getCategoriesById } from "../../../services/category";
 
import { SafeAreaView } from "react-native-safe-area-context";
 
 
export default function CategoryScreen() {
 
  const { id } = useLocalSearchParams();
 
  const idCategory = parseInt(id as string, 10);
 
  const category = getCategoriesById(idCategory);
 
 
  if (!category) {
    router.back();
    return null;
  }
 
 
  return (
    <SafeAreaView style={styles.container}>
 
      <ScrollView
        style={styles.categoryArea}
        contentContainerStyle={styles.content}
      >
 
        <Image
          source={{ uri: category.cover }}
          style={styles.categoryImage}
        />
 
        <Text style={styles.categoryTitle}>
          {category.title}
        </Text>
 
      </ScrollView>
 
    </SafeAreaView>
  );
}
 
 
const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
 
  categoryArea: {
    flex: 1,
    width: "100%",
  },
 
  content: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    gap: 16,
  },
 
  categoryImage: {
    width: "100%",
    height: 280,
    borderRadius: 16,
    backgroundColor: "#FFF",
 
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
 
  categoryTitle: {
    fontSize: 26,
    fontWeight: "700",
    color: "#1A1A1A",
    textAlign: "center",
  },
 
});
 