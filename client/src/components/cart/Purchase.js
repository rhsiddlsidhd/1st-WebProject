const Purchase = ({
  isPurchase,
  handlePurchase,
  savedItem,
  totalPrice,
  totalPaymentAmount,
  deliveryFee,
  selectedItems,
}) => {
  // console.log(`deliveryFee: ${deliveryFee}`);
  // console.log(`totalPaymentAmount: ${totalPaymentAmount}`);
  //Order API
  // 구매하기
  // const handlePurchase = async () => {
  //   if (isPurchase) {
  //     if (window.confirm(`선택한 상품을 구매 하시겠습니까?`)) {
  //       try {
  //         const response = await axios.post("http://localhost:3000/api/order", {
  //           savedItem: savedItem,
  //           totalPrice: totalPrice,
  //           totalPaymentAmount: totalPaymentAmount,
  //           deliveryFee: deliveryFee,
  //           selectedItems: selectedItems,
  //         });

  //         if (response.status === 200) {
  //           navigate("/deliveryaddress");
  //         } else {
  //           console.error("API 호출 실패");
  //         }
  //       } catch (error) {
  //         console.error("API 호출 중 오류:", error);
  //       }
  //     }
  //   }
  // };
  return (
    <div>
      <form className="div__form--order-sheet-style">
        <div className="div__p--product-amount-flex">
          <p className="div__p--product-amount-text">상품 금액</p>

          <p className="div__p--product-amount">{`${totalPrice}원`}</p>
        </div>
        <div className="div__p--delivery-fee-text-flex">
          <p className="div__p--delivery-fee-text">배송비</p>
          <p className="div__p--delivery-fee">
            {selectedItems.length > 0 ? `${deliveryFee}원` : `0원`}
          </p>
        </div>
        <div className="div__p--total-payment-amount-flex">
          <p className="div__p--total-payment-amount-text">총 결제 금액</p>
          <p className="div__p--total-payment-amount">
            {/* reduce 배열을 축소하거나 합치는 함수 reduce((callback),0) */}
            {`${totalPaymentAmount}원`}
          </p>
        </div>
      </form>
      <button
        className="div__button--purchase-button-style"
        onClick={handlePurchase}
        disabled={!isPurchase || selectedItems.length === 0}
        style={{
          opacity: isPurchase ? 1 : 0.5,
        }}
      >
        구매하기
      </button>
    </div>
  );
};

export default Purchase;
