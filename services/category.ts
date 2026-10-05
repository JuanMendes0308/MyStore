import {data} from "../data/dados";

export function getAllCategories() {
    return data.categories;
}

export function getCategoriesById(id: number) {
    return data.categories.find((cat) => cat.id === id);
}