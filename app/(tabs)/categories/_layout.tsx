import { Stack } from "expo-router";
 
export default function CategoriesLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Categorias",
        }}
      />
 
      <Stack.Screen
        name="[id]"
        options={{
          title: "Categoria",
        }}
      />
    </Stack>
  );
}
 