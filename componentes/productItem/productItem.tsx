import { View, Text, Image, Pressable } from "react-native";
import { styles } from "./productItemStyle";
import { Product } from "../../types/product";
import { Link } from "expo-router";

type Props = {
    product:Product
}
    
export function ProductItem({ product }: Props) {
    return(
        <Link href={`/product/${product.id}`} asChild>
    <Pressable style={styles.card}>
                        <View>
                 
                  <Image
                    source={{ uri: product.image }}
                    style={styles.imagemProduto}
                    resizeMode="cover"
                  />
                  <Text style={styles.itemTitulo}>{product.title}</Text>
                  <Text style={styles.itemPreco}>R$ {product.price}</Text>
                  <Text style={styles.itemDescricao}>{product.description}</Text>
                </View>
    
                </Pressable>
        </Link>
    );
}