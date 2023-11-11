import axios from 'axios';

// 유저정보 목록 불러오기
export const getUserOrderList = async (email) => {
  try {
    const response = await axios.get(`/api/order/${email}`);
    const orderList = response.data;

    if (orderList.length >= 1) {
      orderList.map(async (order) => {
        const productId = order.items[0];
        const imageSrc = await axios.get(`/api/products/${productId}`);

        order['imgUrl'] = imageSrc.data.main_images[0].url;
        return order;
      });

      return orderList;
    }

    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};

// 주문 삭제하기
export const deleteOrder = async (order_id) => {
  try {
    const response = await axios.delete(`/api/order/${order_id}`);

    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};

export const getImage = async (id) => {
  try {
    const response = await axios.get(`/api/products/${id}`);

    console.log(response.data);

    // return response.data;
  } catch (err) {
    throw new Error(err);
  }
};
