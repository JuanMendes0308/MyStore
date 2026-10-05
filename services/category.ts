import {data} from "../data/dados";

export function getCategoriesById(id: number) {
    return data.categories.find((cat) => cat.id === id);
}