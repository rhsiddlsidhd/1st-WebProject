import Header from "../components/Header";
import Footer from "../components/Footer";

// import React, { useState } from "react";

const Detail = () => {
  const randomId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  const addToCart = () => {
    const product = {
      img: "이미지경로",
      brandname: "브랜드명",
      productname: "상품명",
      price: "가격",
      optionvalue: "사이즈",
      number: "0",
      id: randomId(),
    };

    const previousStorage =
      JSON.parse(localStorage.getItem("cartProduct")) || [];
    if (Array.isArray(previousStorage)) {
      const updateStorage = [...previousStorage, product];
      console.log(updateStorage);
      localStorage.setItem("cartProduct", JSON.stringify(updateStorage));
    } else {
      const updateStorage = [product];
      localStorage.setItem("cartProduct", JSON.stringify(updateStorage));
    }
  };

  return (
    <div>
      <Header />
      <div className="body__div--detail-content">
        {/* 상품 정보 */}
        <div className="div__div--info-flex">
          <div className="div__div--product-img">상품 이미지 부분</div>
          <div className="div__div--info-text">
            <p className="div__p--brand-name">nike</p>
            <p className="div__p--product-name">나이키 코드 버로우 로우 2</p>
            <p className="div__p--price">38,300 원</p>
            <select className="div__select--select-style">
              <option value="" disabled selected hidden>
                사이즈 선택
              </option>
              <option></option>
            </select>
            <form>
              <input
                type="button"
                value="구매하기"
                className="form__input--purchase-button-style"
              />

              <input
                type="button"
                value="장바구니"
                className="form__input--cart-button-style form__input--cart-button"
                onClick={addToCart}
              />
            </form>
          </div>
        </div>
        {/* 상세페이지 이미지 나열 부분 */}
        <div className="div__div--detail-img">{/* 이미지 내용 */}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Detail;
