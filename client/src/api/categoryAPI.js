import axios from 'axios';

// 카테고리 목록 불러오기
export const getCategory = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/category');
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};

// 카테고리 보내기
export const postCategory = async ({ name, parentCategory, categoryType }) => {
  try {
    const newItem = { name, parentCategory, categoryType };
    console.log(newItem);
    const response = await axios.post(
      'http://localhost:3000/api/category',
      newItem
    );

    return response;
  } catch (err) {
    throw new Error(err);
  }
};

//  카테고리 지우기
export const deleteCategory = async ({ _id }) => {
  try {
    const response = await axios.delete(
      `http://localhost:3000/api/category/${_id}`
    );
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};

// 카테고리 업데이트

export const updateCategory = async ({ _id }) => {
  try {
    const response = await axios.delete(
      `http://localhost:3000/api/category/${_id}`
    );
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};

// 대분류 카테고리 불러오기
export const getBigCategory = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/api/category/-1`);
    // const response = await axios.get('http://localhost:3000/api/category', {
    //   params: { parentCategory: '-1' },
    // });
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};

// 카테고리 소분류(대분류ID)
export const getChildCategory = async (parentCategoryId) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/category/${parentCategoryId}`
    );
    // const response = await axios.get('http://localhost:3000/api/category/', {
    //   params: { parentCategory: parentCategoryId },
    // });

    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};
