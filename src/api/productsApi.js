import axios from "axios";

const productsApi = axios.create({
  baseURL: "https://639bced664fcf9c11ca38644.mockapi.io/products",
});

export const getProducts = async () => {
  const res = await productsApi.get("/");
  return res.data;
};

export const getProductById = (id) => productsApi.get(`/${id}`);

export const createProduct = (product) => productsApi.post("/", product);

export const updateProduct = (product) =>
  productsApi.put(`/${product.id}`, product);

export const deleteProduct = (id) => productsApi.delete(`/${id}`);

export default productsApi;
