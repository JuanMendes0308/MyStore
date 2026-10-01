import {data} from '../data/dados';

export function getAllProducts() {
    return data.products;
}

export function getProductsById(pId: number) {
    return data.products.find(item=>item.id === pId);
}

export function getProductsByCategory(pIdCategory: number) {
    return data.products.filter(item=>item.idCategory === pIdCategory);
}

