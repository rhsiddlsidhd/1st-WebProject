import axios from 'axios';

// 유저정보 불러오기
export const updateAddress = async ({ id, address, addressDetail }) => {
  try {
    const updateData = { address, addressDetail };
    const response = await axios.patch(`/api/order/${id}`, updateData, {
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};
