import { useEffect, useState } from 'react';
import { getUserOrderList } from '../api/userOrderAPI';

const ManageOrder = () => {
  return function UserOrder() {
    const [userOrderList, setUserOrderList] = useState([]);

    useEffect(() => {
      const orderList = getUserOrderList('kakao1234@test.com');
      setUserOrderList(userOrderList);
    }, []);

    console.log(userOrderList);
    return (
      <div className='body__div--login-content'>
        <h3 className='body__h3--orderList-logo'>주문 정보 관리</h3>

        <div className='div__orderList--container'>
          <div className='div__orderList--header'>
            <div>상품 이미지</div>
            <div>상품명</div>
            <div>사이즈</div>
            <div>수량</div>
            <div>가격</div>
            <div>배송상태</div>
            <div>주문 수정</div>
            <div>주문 취소</div>
          </div>

          <div className='div__orderList--contents'>
            <div className='div__orderList--order'>
              <div className='div__orderList--order-column'>
                <div>이미지 들어갈거임</div>
              </div>
              <div className='div__orderList--order-column'>상품명</div>
              <div className='div__orderList--order-column'>사이즈</div>
              <div className='div__orderList--order-column'>1</div>
              <div className='div__orderList--order-column'>230000</div>
              <div className='div__orderList--order-column'>주문 완료</div>
              <div className='div__orderList--order-column'>수정하기</div>
              <div className='div__orderList--order-column'>취소하기</div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default ManageOrder;
