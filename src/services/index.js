import axios from "axios"
export const apiBase = "https://fakestoreapi.com";

const $api = axios.create({
    baseURL: apiBase,
})

export const getCategories = async () => {
    return $api.get('/products/categories');
}

export const getProducts = async () => {
    return $api.get('/products');
}

export const getProductsByCategory = async (category) => {
    return $api.get('/products/category/'+category)
}
