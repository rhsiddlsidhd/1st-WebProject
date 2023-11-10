// 업데이트 메시지, 제품정보
// FIXME api요청주소 BASE_URL/api로 변경
import axios from 'axios';

// // get response:
const API_BASE_URL = 'http://localhost:3000';
export const getProducts = async (categories, page) => {
  try {
    console.log('카테고리확인', page);
    console.log(categories);

    let query = { params: { page: page || 1 } };

    if (categories.length) {
      query['params']['category_id'] = categories;
    }

    const response = await axios.get(`${API_BASE_URL}/api/products`, query);
    console.log('response');
    console.log(response);

    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};
// const arr = [
//   {
//     id: '몽고DB에서 부여한 고유 ID',
//     title: '가젤 볼드 W',
//     brand: 'adidas',
//     type: 'sneakers',
//     price: '10000',
//     model_number: '1234567',
//     gender: 'woman',
//     sizes: ['220', '230', '235', '240', '245'],
//     option_groups: {
//       color: ['begie'],
//       etc: '추가 옵션 생길 수 있음',
//     },
//     reviews: ['ex.작성한 리뷰 데이터 ID1', 'ex.작성한 리뷰 데이터 ID2'],
//     discount_ratio: '0',
//     main_images: [
//       'ex)상품 정보 image 데이터 ID1',
//       'ex)상품 정보 image 데이터 ID2',
//     ],
//     detail_images: [
//       'ex)상세 정보 image 데이터 ID1',
//       'ex)상세 정보 image 데이터 ID2',
//     ],
//   },
//   {
//     id: '몽고DB에서 부여한 고유 ID2',
//     title: '1461 3홀 모노 블랙',
//     brand: '닥터마틴',
//     type: 'Derby',
//     price: '10000',
//     model_number: '0003339',
//     gender: 'man',
//     sizes: ['235', '240', '245', '260', '270'],
//     option_groups: {
//       color: ['black'],
//       etc: '추가 옵션 생길 수 있음2',
//     },
//     reviews: ['ex.작성한 리뷰 데이터 ID1', 'ex.작성한 리뷰 데이터 ID2'],
//     discount_ratio: '5 (5프로 할인)',
//     main_images: [
//       'ex)상품 정보 image 데이터 ID1',
//       'ex)상품 정보 image 데이터 ID2',
//     ],
//     detail_images: [
//       'ex)상세 정보 image 데이터 ID1',
//       'ex)상세 정보 image 데이터 ID2',
//     ],
//   },
//   {
//     id: '몽고DB에서 부여한 고유 ID3',
//     title: '모나코 M 스니커즈',
//     brand: 'Boutique',
//     type: 'sneakers',
//     price: '10000',
//     model_number: 'ok928j23',
//     gender: 'man',
//     sizes: ['250', '255', '260', '265', '270'],
//     option_groups: {
//       color: ['black', 'white', 'red'],
//       etc: '추가 옵션 생길 수 있음2',
//     },
//     reviews: ['ex.작성한 리뷰 데이터 ID1', 'ex.작성한 리뷰 데이터 ID2'],
//     discount_ratio: '2',
//     main_images: [
//       'ex)상품 정보 image 데이터 ID1',
//       'ex)상품 정보 image 데이터 ID2',
//     ],
//     detail_images: [
//       'ex)상세 정보 image 데이터 ID1',
//       'ex)상세 정보 image 데이터 ID2',
//     ],
//   },
// ];

// export const getProducts = async () => {
//   try {
//     return arr;
//   } catch (err) {
//     throw new Error(err);
//   }
// };

export const getProduct = async () => {
  try {
    const response = await axios.get(
      'http://localhost:3000/api/products?id=4548'
    );
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};

// export const getProduct = async () => {
//   try {
//     const response = await axios.get(
//       'http://localhost:3000/api/products?id=4548'
//     );
//     return response.data;
//   } catch (err) {
//     throw new Error(err);
//   }
// };

// NOTE 상품 수정이라 추가 request body 똑같이 해달라고 하신건지 다시 확인
// response : "new product add Success"
export const addProduct = async (newProduct) => {
  try {
    const response = await axios.post(
      'http://localhost:3000/api/products',
      JSON.stringify(newProduct),
      { headers: { 'Content-Type': 'application/json' } }
    );

    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};

// response: 삭제와 수정의 응답 같음.
// {
//   "message": "Product Info Updated/ Delete Success",
//   "updatedItem": [
//     "몽고DB에서 부여한 고유 ID"
//   ]
// }
//
// 삭제가 됐을때 객체정보 던지는 기능하는 부분이있음 -> 삭제완료가 완료된 메시지만.
//
export const updateProduct = async (updatedProduct) => {
  try {
    const response = await axios.post(
      'http://localhost:3000/api/products/:id',
      updatedProduct
    );

    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(
      `http://localhost:3000/api/products/${id}`
    );

    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};

export const getBrands = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/brand');

    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};
