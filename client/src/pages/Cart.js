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

  console.log(savedItem);

  // 전체 선택 상태
  const [isAllChecked, setIsAllChecked] = useState(false);

  // 체크 아이템
  const [selectedItems, setSelectedItems] = useState([]);
  // 상품 금액
  const [totalPrice, setTotalPrice] = useState(0);
  // 총 결제 금액
  const [totalPaymentAmount, setTotalPaymentAmount] = useState(0);

  // (쓰레기통) 삭제 하기
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

  //선택 삭제
  const selectDelete = () => {
    if (selectedItems.length === 0) {
      alert("선택된 상품이 없습니다.");
      return;
    }

    if (window.confirm(`선택한 상품을 장바구니에서 삭제하시겠습니까?`)) {
      const localStoragedData =
        JSON.parse(localStorage.getItem("cartProduct")) || [];
      const updatedCartItems = localStoragedData.filter(
        (shoes) => !selectedItems.includes(shoes.id)
      );
      localStorage.setItem("cartProduct", JSON.stringify(updatedCartItems));
      setSavedItem(updatedCartItems);
      setSelectedItems([]);
      alert("선택한 상품이 삭제되었습니다.");
    }
  };

  // console.log(selectedItems);

  //배송비
  const deliveryFee = 3000;

  // 상품 금액
  useEffect(() => {
    const totalPrice = selectedItems.reduce((accumulator, currentItem) => {
      const item = savedItem.find((shoes) => shoes.id === currentItem);
      const itemToTalPrice = item.price * item.quantity;
      return accumulator + itemToTalPrice;
    }, 0);

    setTotalPrice(totalPrice);
  }, [selectedItems, savedItem]);

  // 총결제금액
  useEffect(() => {
    const totalPaymentAmount = selectedItems.reduce(
      (accumulator, currentItem) => {
        const item = savedItem.find((shoes) => shoes.id === currentItem);
        if (item && item.price) {
          const itemTotalPrice = item.price * item.quantity;
          return accumulator + itemTotalPrice;
        }
        return accumulator;
      },
      0
    );

    const totalPaymentAmountWithDelivery =
      totalPaymentAmount + (selectedItems.length > 0 ? deliveryFee : 0);

    setTotalPaymentAmount(totalPaymentAmountWithDelivery);
  }, [selectedItems, savedItem]);

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
            totalPrice={totalPrice}
            totalPaymentAmount={totalPaymentAmount}
            deliveryFee={deliveryFee}
          />
        </div>
      </div>
    </>
  );
};

export default Cart;
