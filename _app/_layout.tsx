import { Stack} from "expo-router";


export default function RootLayout(){
    return(
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="index"/>
            <Stack.Screen name="tela_lampada" />
            <Stack.Screen name="tela2" />
        </Stack>
    )
}