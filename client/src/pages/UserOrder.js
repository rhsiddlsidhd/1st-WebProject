import { useEffect, useState } from 'react';
import { getUserOrderList } from '../api/userOrderAPI';

function UserOrder() {
  const [userOrderList, setUserOrderList] = useState([]);

  const getOrderList = async () => {
    //TODO: 로그인 이후에 id 값 가져오기
    const orderList = getUserOrderList('kakao1234@test.com').then((data) => {
      setUserOrderList(data);
    });
  };

  useEffect(() => {
    getOrderList();
  }, []);

  return (
    <div className='body__div--orderList-content'>
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
          {userOrderList.map((order) => {
            return (
              <div className='div__orderList--order'>
                <div className='div__orderList--order-column'>
                  <div>이미지 들어갈거임</div>
                </div>
                <div className='div__orderList--order-column'>상품명</div>
                <div className='div__orderList--order-column'>사이즈</div>
                <div className='div__orderList--order-column'>1</div>
                <div className='div__orderList--order-column'>230000</div>
                <div className='div__orderList--order-column'>
                  {order['delivery_state']}
                </div>
                <div className='div__orderList--order-column'>수정하기</div>
                <div className='div__orderList--order-column'>취소하기</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default UserOrder;
