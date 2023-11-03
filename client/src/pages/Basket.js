// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import { getCategroy, createCategroy } from '../api/categoryAPI';

// function Basket() {
//   const [category, setCategory] = useState({});

//   const createNewData = (e) => {
//     e.preventDefault();

//     // 값들을 가져왔어!
//     const data = {
//       name: '나이키 여성 신발',
//       brand: ['nike'],
//       gender: ['woman'],
//       type: ['sandle', 'sneakers'],
//     };

//     const data2 = {
//       key: 'type',
//       updateValue: 'event',
//     };

//     console.log(createCategroy(data));
//   };

//   getCategroy().then((data) => setCategory(data));

//   return (
//     <div>
//       <div className='header'>
//         <p>this is main : 제목</p>
//       </div>
//       <p>나는 장바구니 화면이야</p>
//       <input placeholder='브랜드' />
//       <input placeholder='성별' />
//       <input placeholder='타입' />
//       <button onClick={createNewData}>
//         {/* <Link to='/product'>여기를 누르면 상품 페이지로 갑니다</Link> */}{' '}
//         데이터 보낼거임!
//       </button>

//       <div>
//         첫번째 카테고리 : <span>{category.brand}</span>
//       </div>
//       <div>두번째 카테고리</div>
//     </div>
//   );
// }

// export default Basket;


