import CartWrapper from "../components/cart/CartWrapper";
import React, { useState, useEffect } from "react";
import SelectWrapper from "../components/cart/SelectWrapper";

const Cart = () => {
  // 장바구니에 넣은 신발
  const [savedItem, setSavedItem] = useState([]);

  // local 에서 겟해오기
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartProduct")) || [];
    setSavedItem(items);
  }, []);

  // 전체 선택 상태
  const [isAllChecked, setIsAllChecked] = useState(false);

  // 체크 아이템
  const [selectedItems, setSelectedItems] = useState([]);

  //변 함 초
  // 컴포넌트가 렌더링 될 때마다 특정 작업을 실행할 수 있도록 하는 Hook

  return (
    <>
      <div className="body__div--cart-div-size">
        <h3 className="div__h3--cart-title">장바구니</h3>
        <div className="div__div--cart-content-align">
          <SelectWrapper
            savedItem={savedItem}
            isAllChecked={isAllChecked}
            selectedItems={selectedItems}
            setIsAllChecked={setIsAllChecked}
            setSelectedItems={setSelectedItems}
          />
          <CartWrapper
            savedItem={savedItem}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            setSavedItem={setSavedItem}
          />
        </div>
      </div>
    </>
  );
};

export default Cart;
