import axios from "axios";

const Api = "https://dummyjson.com";

export let getProducts = async () => {

  let response = await axios.get(`${Api}/products`);

  return response.data;
};

export let searchproducts = async (query) => {
  let response = await axios.get(`${Api}/products/search`, {
    params: {
      q: query
    }
  });
  return response.data;
};