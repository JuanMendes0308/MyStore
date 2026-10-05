import { data } from "../data/dados";
 
export function getProductsById(id: number) {
  return data.products.find(
    (product) => product.id === id
  );
}
export function getAllProducts() {
  return data.products;
}
export function getProductsByCategory(idCategory: number) {
  return data.products.filter(
    (product) => product.idCategory === idCategory
  );
}