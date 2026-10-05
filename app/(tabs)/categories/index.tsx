import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";
 
import { data } from "../../../data/dados";

import { CategoryItem } from "../../../componentes/categoryItem/categoryItem";
 
 
export default function Categories() {
  return (
    <View style={styles.container}>
 
      <Text style={styles.titulo}>
        Categorias
      </Text>
 
      <Text style={styles.subtitulo}>
        Lista de Categorias
      </Text>
 
      <FlatList
        data={data.categories}
        keyExtractor={(item) => item.id.toString()}
 
        renderItem={({ item }) => (
          <CategoryItem category={item} />
        )}
 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.lista}
      />
 
    </View>
  );
}
 
 
const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 15,
  },
 
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 15,
  },
 
  subtitulo: {
    fontSize: 16,
    color: "#333",
    marginBottom: 15,
  },
 
  lista: {
    paddingBottom: 20,
  },
 
});
 