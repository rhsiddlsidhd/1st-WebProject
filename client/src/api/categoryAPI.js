import axios from 'axios';

/**
 * 
 * async function getCategroy() {
  try {
    const response = await axios.get('http://localhost:3001/api/category');
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = { getCategroy };
 */
export const getCategroy = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/category');
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};

export const createCategroy = async ({ name, brand, gender, type }) => {
  try {
    const newItem = { name, brand, gender, type };
    const response = await axios.post(
      'http://localhost:3001/api/category',
      newItem
    );

    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};
