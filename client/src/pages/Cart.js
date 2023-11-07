import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import CartList from "../components/cart/CartList";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

// 1. 장바구니 페이지에서 구매하기 버튼 클릭 시 주소입력창 페이지로 이동한다. -> 끝
// 2. 2개 인풋 중 1개라도 미입력 후 구매완료 누르면 alert

const Cart = () => {
  const navigate = useNavigate();
  const [cartItemCount, setCartItemCount] = useState(0);

  const UpdateCartItemCount = (count) => {
    setCartItemCount(count);
  };

  return (
    <div>
      <Header />
      <div className="body__div--cart-div-size">
        <h3 className="div__h3--cart-title">장바구니</h3>
        <div className="div__div--cart-content-align">
          <div className="div__div--select-display">
            <label className="checkbox-container">
              <input type="checkbox" className="cart-checkbox" />
              <span className="checkmark">
                <i className="fa-solid fa-check"></i>
              </span>
            </label>
            <p className="div__p--select-all-text">전체선택</p>
            <button className="div__button--select-delete-button">
              선택삭제
            </button>
          </div>
          <div className="body__div--cart-div-content-flex">
            <div className="div__div--cart-list-style">
              <hr className="div__hr--hr-style" />
              {/* 장바구니 추가시 상품이 추가될 곳 */}

              <CartList updateCartItemCount={UpdateCartItemCount} />
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
              <button
                className="div__button--purchase-button-style"
                onClick={() => {
                  if (cartItemCount > 0) {
                    navigate("/deliveryaddress");
                  }
                }}
                disabled={cartItemCount === 0}
                style={{ opacity: cartItemCount > 0 ? 1 : 0.5 }}
              >
                구매하기
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
