import axios from 'axios';

export const getCategroy = async () => {
  try {
    const response = await axios.get('http://localhost:3004/api/category');
    console.log(response.data);

    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};
