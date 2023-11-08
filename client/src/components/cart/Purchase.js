import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Purchase = ({ savedItem }) => {
  const navigate = useNavigate();
  // 구매하기 boolean으로 관리
  const [isPurchase, setIsPurchase] = useState(false);

  // 구매하기
  const handlePurchase = () => {
    if (isPurchase) {
      navigate("/deliveryaddress");
    }
  };

  // 구매하기 활성화시 이동
  useEffect(() => {
    if (savedItem.length < 1) {
      setIsPurchase(false);
    } else {
      setIsPurchase(true);
    }
  }, [savedItem]);

  return (
    <>
      <form className="div__form--order-sheet-style">
        <div className="div__p--product-amount-flex">
          <p className="div__p--product-amount-text">상품 금액</p>

          <p className="div__p--product-amount">
            {savedItem.reduce((total, item) => total + item.price, 0)}
          </p>
        </div>
        {/* 배송비 넣으면 좋을듯함 */}
        <div className="div__p--total-payment-amount-flex">
          <p className="div__p--total-payment-amount-text">총 결제 금액</p>
          <p className="div__p--total-payment-amount">
            {/* reduce 배열을 축소하거나 합치는 함수 reduce((callback),0) */}
            {savedItem.reduce((total, item) => total + item.price, 0)}
          </p>
        </div>
        <button
          className="div__button--purchase-button-style"
          onClick={handlePurchase}
          disabled={!isPurchase}
          style={{
            opacity: isPurchase ? 1 : 0.5,
          }}
        >
          구매하기
        </button>
      </form>
    </>
  );
};

export default Purchase;
