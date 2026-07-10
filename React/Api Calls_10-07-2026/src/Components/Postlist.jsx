import api from "../api/axios";


// GET API
export const getUsers = () => {

    return api.get("/users");

};


// POST API
export const createUser = (userData) => {

    return api.post("/users", userData);

};


// PUT API
export const updateUser = (id, userData) => {

    return api.put(`/users/${id}`, userData);

};


// DELETE API
export const deleteUser = (id) => {

    return api.delete(`/users/${id}`);

};