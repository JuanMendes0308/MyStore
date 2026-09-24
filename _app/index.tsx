import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import {router} from "expo-router";

export default function Index() {
    function handleEntrar() {
        router.replace("/tela2");
        // não mantem histórico de navegação
        router.push("/tela2");
        // mantem histórico de navegação
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={require('../assets/logo.png' )}
                style={styles.logo}
                resizeMode='cover'
            />
        <View>
            <View style={styles.tituloContainer}>
                <Text style={[styles.titulo, styles.destaque]}>Jukas</Text>
            <Text style={styles.titulo}>Store</Text>
            </View>
        <Text style={styles.texto}>Aqui seu dinheiro rende mais !</Text>
        </View>
        <Button title="Entrar" onPress={handleEntrar} />

</SafeAreaView>
    )
};

const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
gap: 16
},
logo: {
height: 200,
width: 200,
marginBottom: 20
},
tituloContainer: {
flexDirection: 'row',
justifyContent: 'center'
},
titulo: {
fontSize: 32,
fontWeight: '900'
},
texto: {
fontSize: 16
},
destaque: {
color: "#E67A31"
}

});