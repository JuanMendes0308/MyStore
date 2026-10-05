import { View, Text, Image, Pressable } from "react-native";
import { router } from "expo-router";

import { styles } from "./categoryItemStyle";
import { Category } from "../../types/category";
 
type CategoryProps = {
  category: Category;
};
 
export function CategoryItem({ category }: CategoryProps) {
 
  function abrirCategoria() {
    router.push({
      pathname: "/categories/[id]",
      params: {
        id: category.id.toString(),
      },
    });
  }
 
  return (
    <Pressable
      style={styles.card}
      onPress={abrirCategoria}
    >
      <Image
        source={{ uri: category.cover }}
        style={styles.imagemCategoria}
        resizeMode="cover"
      />
 
      <View style={styles.overlay}>
        <Text style={styles.tituloCategoria}>
          {category.title}
        </Text>
      </View>
    </Pressable>
  );
}