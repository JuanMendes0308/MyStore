import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Tela2() {
    return (
        <SafeAreaView style={styles.container}>
            <Image
            source={require('../assets/logo.png')}
            style={styles.logo} resizeMode='cover' />
            <View>
                <Text>Olá Expo Router - Tela Tela2</Text>
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
    }
});