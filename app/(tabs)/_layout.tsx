import { Tabs } from "expo-router";
 
export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="home" options={{ title: "Início" }} />
      <Tabs.Screen name="login" options={{ title: "Entrar" }} />
      <Tabs.Screen name="config" options={{ title: "Configurações" }} />
    </Tabs>
  );
}