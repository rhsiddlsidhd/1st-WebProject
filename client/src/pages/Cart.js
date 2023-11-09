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

  // (쓰레기통)삭제하기
  const handleDeleteItem = (item) => {
    if (window.confirm(`${item.id}현재 장바구니 상품을 삭제하시겠습니까?`)) {
      const localStoragedData =
        JSON.parse(localStorage.getItem("cartProduct")) || [];
      const updatedCartItems = localStoragedData.filter(
        (shoes) => shoes.id !== item.id
      );
      localStorage.setItem("cartProduct", JSON.stringify(updatedCartItems));
      setSavedItem(updatedCartItems);
      alert("삭제되었습니다.");
    }
  };

  //선택삭제
  const selectDelete = () => {
    if (window.confirm("선택된 항목을 삭제하시겠습니까?")) {
      const localStoragedData =
        JSON.parse(localStorage.getItem("cartProduct")) || [];
      const updatedCartItems = localStoragedData.filter((item) => {
        return !selectedItems.includes(item.id);
      });
      localStorage.setItem("cartProduct", JSON.stringify(updatedCartItems));
      setSavedItem(updatedCartItems);
      alert("선택된 항목이 삭제되었습니다.");
    }
  };

  return (
    <>
      <div className="body__div--cart-div-size">
        <h3 className="div__h3--cart-title">장바구니</h3>
        <div className="div__div--cart-content-align">
          <SelectWrapper
            savedItem={savedItem}
            isAllChecked={isAllChecked}
            setIsAllChecked={setIsAllChecked}
            setSelectedItems={setSelectedItems}
            selectDelete={selectDelete}
          />
          <CartWrapper
            savedItem={savedItem}
            selectedItems={selectedItems}
            setIsAllChecked={setIsAllChecked}
            setSelectedItems={setSelectedItems}
            setSavedItem={setSavedItem}
            handleDeleteItem={handleDeleteItem}
          />
        </div>
      </div>
    </>
  );
};

export default Cart;
