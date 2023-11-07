import axios from 'axios';

const arr = [
  {
    _id: '654530733cdcd2c2c50af7bb',
    name: '브랜드',
    parentCategory: '-1',
    categoryType: '대분류',
    __v: 0,
  },
  {
    _id: '6545317b3cdcd2c2c50af7bd',
    name: '타입',
    parentCategory: '654530733cdcd2c2c50af7bb',
    categoryType: '대분류',
    __v: 0,
  },
  {
    _id: '654532241cc8742ed62b2759',
    name: '여성',
    parentCategory: '-1',
    categoryType: '대분류',
    __v: 0,
  },
];

const subArr = [
  {
    _id: '6545317b3cdcd2c2c50af7bd',
    name: '닥터마틴',
    parentCategory: '654530733cdcd2c2c50af7bb',
    categoryType: '소분류',
    __v: 0,
  },
  {
    _id: '6545317b3cdcd2c2c50af7bv',
    name: '뉴발란스',
    parentCategory: '654530733cdcd2c2c50af7bb',
    categoryType: '소분류',
    __v: 0,
  },
  {
    _id: '6545317b3cd5cd2c2c50af7bv',
    name: '나이키',
    parentCategory: '654530733cdcd2c2c50af7bb',
    categoryType: '소분류',
    __v: 0,
  },
];

export const getParentCategory = async () => {
  return arr;
};

export const getChildCategory = async (parentCategoryId) => {
  try {
    return subArr;
  } catch (err) {
    throw new Error(err);
  }
};

// // 카테고리 대분류
// export const getParentCategory = async () => {
//   try {
//     const response = await axios.get(
//       'http://localhost:3000/api/category/-1'
//     );
//     return response.data;
//   } catch (err) {
//     throw new Error(err);
//   }
// };

// // 카테고리 소분류(대분류ID)
// export const getChildCategory = async (parentCategoryId) => {
//   try {
//     const response = await axios.get(
//       `http://localhost:3000/api/category?parentCategory=${parentCategoryId}`
//     );
//     return response.data;
//   } catch (err) {
//     throw new Error(err);
//   }
// };
