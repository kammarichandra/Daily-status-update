import api from "../api/axios";

export const getPosts = () => api.get("/posts");
export const getPost = (id) => api.get(`/posts/${id}`);
export const createPost = (post) => api.post("/posts", post);
export const updatePost = (id, post) => api.put(`/posts/${id}`, post);
export const patchPost = (id, post) => api.patch(`/posts/${id}`, post);
export const deletePost = (id) => api.delete(`/posts/${id}`);