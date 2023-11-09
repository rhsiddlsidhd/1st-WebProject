import axios from 'axios';

// 유저정보 목록 불러오기
export const getUserOrderList = async (email) => {
  try {
    console.log(email);
    const urlTEst = `http://localhost:3000/api/order/${email}`;
    console.log(urlTEst);

    const response = await axios.get(
      `http://localhost:3000/api/order/${email}`,
      {
        headers: {
          Cookie:
            'token=eyJhbGciOiJIUzI1NiJ9.aGVsbG93b3JsZEB0ZXN0LmNvbQ.Js4pQhTOHaxC97EkacRr6yrdJCb6IwFV1K2rTWKFYvQ',
        },
      }
    );
    // console.log(response.data);

    // return response.data;
  } catch (err) {
    throw new Error(err);
  }
};
