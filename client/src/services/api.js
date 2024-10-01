import axios from 'axios';

const API_URL = 'https://your-database-url.com'; // Replace with your API endpoint

export const fetchBooks = async () => {
  const response = await axios.get(`${API_URL}/books`);
  return response.data;
};

export const addBook = async (book) => {
  const response = await axios.post(`${API_URL}/books`, book);
  return response.data;
};