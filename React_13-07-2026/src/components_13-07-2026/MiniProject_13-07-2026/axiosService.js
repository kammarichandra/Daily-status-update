import axios from "axios";

const API = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
});

// GET
export const axiosGet = async () => {
  const response = await API.get("/");
  return response.data;
};

// POST
export const axiosPost = async (data) => {
  const response = await API.post("/", data);
  return response.data;
};

// PUT
export const axiosPut = async (id, data) => {
  const response = await API.put(`/${id}`, data);
  return response.data;
};

// PATCH
export const axiosPatch = async (id, data) => {
  const response = await API.patch(`/${id}`, data);
  return response.data;
};

// DELETE
export const axiosDelete = async (id) => {
  const response = await API.delete(`/${id}`);
  return response.data;
};