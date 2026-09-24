import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { useState } from "react";
import {router} from "expo-router";

export default function Tela2() {

    function handleTela3() {
        router.push("/tela_lampada");
        
    }

    const [contador, setContador] = useState(1000);
    function handleAdicionar() {
       setContador(contador + 1);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Olá Expo Router - Tela Tela2</Text>
                <Text style={styles.texto}>{contador}</Text>
                <Button title="Adicionar" onPress={handleAdicionar} />
                <Button title="Entrar Tela3" onPress={handleTela3} />
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 20
    },
    texto: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10
    },

});