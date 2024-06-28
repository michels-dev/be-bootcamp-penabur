import axios from "axios";

const UNSPLASH_API_URL = 'https://api.unsplash.com/search/photos';
const CLIENT_ID = '-4AAuvliWmJMVJwFbC_HhCq_tY_7Tr04jUu7RuHtIF0';


export const apiClientImages = (query) => {
  return axios.get(`${UNSPLASH_API_URL}?query=${query}&client_id=${CLIENT_ID}`)
  .then(response => response.data.results)
  .catch(error => {
    console.error('Error fetching data', error);
    throw error;
  });
};