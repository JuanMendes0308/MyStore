import { useState } from "react";

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
} from "react-native";


export default function TelaLampada() {

  const [acesa, setAcesa] = useState<boolean>(false);


  function handleLampada(): void {

    setAcesa(!acesa);

  }


  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.content}>

        <Text style={styles.titulo}>
          Controle da Lâmpada
        </Text>


        <Image
          source={
            acesa  //OPERADOR TERNÁRIO: SE A LÂMPADA ESTIVER ACESA, MOSTRA A IMAGEM DA LÂMPADA ACESA, CASO CONTRÁRIO MOSTRA A IMAGEM DA LÂMPADA APAGADA
              ? require("../assets/lampada-iluminada-realista-isolada_1284-41774.avif")
              : require("../assets/lampada-realista-isolada_1284-41741.avif")
          }
          style={styles.lampada}
          resizeMode="contain"
        />

        <Text style={styles.status}>
          {acesa ? "LÂMPADA ACESA" : "LÂMPADA APAGADA"}
        </Text>

        <Button
          title={
            acesa
              ? "Apagar lâmpada"
              : "Acender lâmpada"
          }
          onPress={handleLampada}
        />

      </View>

    </SafeAreaView>

  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#eeeded",
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },

  titulo: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#222",
  },

  lampada: {
    width: 250,
    height: 300,
  },

  status: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },

});