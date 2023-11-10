import axios from 'axios';

// 유저정보 목록 불러오기
export const getUserOrderList = async (email) => {
  try {
    const response = await axios.get(`/api/order/${email}`);

    console.log(response.data);

    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};
