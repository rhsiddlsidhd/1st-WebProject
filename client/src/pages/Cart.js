import Header from "../components/Header";
import Footer from "../components/Footer";
import CartList from "../components/CartList";

const Cart = () => {
  return (
    <div>
      <Header />
      <div className="body__div--cart-div-size">
        <h3 className="div__h3--cart-title">장바구니</h3>
        <div className="div__div--cart-content-align">
          <div className="div__div--select-display">
            <input type="checkbox" className="div--input__checkbox-style" />
            <p className="div__p--select-all-text">전체선택</p>
            <button className="div__button--select-delete-button">
              선택삭제
            </button>
          </div>
          <div className="body__div--cart-div-content-flex">
            <div className="div__div--cart-list-style">
              <hr className="div__hr--hr-style" />
              {/* 장바구니 추가시 상품이 추가될 곳 */}

              <CartList />
            </div>
            <form className="div__form--order-sheet-style">
              <div className="div__p--product-amount-flex">
                <p className="div__p--product-amount-text">상품 금액</p>
                <p className="div__p--product-amount"></p>
              </div>
              <div className="div__p--total-payment-amount-flex">
                <p className="div__p--total-payment-amount-text">
                  총 결제 금액
                </p>
                <p className="div__p--total-payment-amount"></p>
              </div>
              <input
                type="submit"
                value="구매하기"
                className="div__button--purchase-button-style"
              />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
