import axios from "axios";

const API_URL = 'https://www.googleapis.com/youtube/v3/search';
const apiKey = 'AIzaSyC5xNYHHHWP4PMzyzYiyo_VzkKTulE95jc';

export const apiClientVideos = async (query) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        part: 'snippet',
        q: query,
        key: apiKey,
        type: 'video',
        maxResults: 5
      }
    });
    console.log('API Response:', response.data); // Debug log
    return response.data.items;
  } catch (error) {
    console.error('Error fetching data from API', error); // Debug log
    throw error;
  }
};
