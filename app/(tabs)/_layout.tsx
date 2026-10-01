import { Tabs } from "expo-router";
import {FontAwesome, MaterialIcons} from "@expo/vector-icons";
 
export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="home" options={{ title: "Início", tabBarIcon: ({color, size}) => <FontAwesome name="rocket" color ="#0084ff" size={20} /> }} />
      <Tabs.Screen name="login" options={{ title: "Entrar", tabBarIcon: ({color, size}) => <FontAwesome name="sign-in" color ="#0084ff" size={20} /> }} />
      <Tabs.Screen name="Categorias" options={{ title: "Categorias", tabBarIcon: ({color, size}) => <MaterialIcons name="category" size={24} color="black" /> }} />
    </Tabs>
  );
}