import axios from 'axios';
import { setCookie } from '../utils/cookieUtils';
axios.defaults.withCredentials = true;

// 유저정보 목록 불러오기
export const getUserOrderList = async (email) => {
  try {
    const response = await axios.get(`/api/order/${email}`);

    // return response.data;
  } catch (err) {
    throw new Error(err);
  }
};
