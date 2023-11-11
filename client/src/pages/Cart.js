import CartWrapper from "../components/cart/CartWrapper";
import React, { useState, useEffect } from "react";
import SelectWrapper from "../components/cart/SelectWrapper";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const navigate = useNavigate();
  // 장바구니에 넣은 신발
  const [savedItem, setSavedItem] = useState([]);
  // console.log(savedItem);
  // 전체 선택 상태
  const [isAllChecked, setIsAllChecked] = useState(false);
  // 체크 id 배열
  const [selectedItems, setSelectedItems] = useState([]);
  // console.log(selectedItems);
  // 체크 data저장소
  const [selectedItemsData, setSelectedItemsData] = useState([]);
  console.log(selectedItemsData);
  // 상품 금액
  const [totalPrice, setTotalPrice] = useState(0);
  // 총 결제 금액
  const [totalPaymentAmount, setTotalPaymentAmount] = useState(0);
  // 주소
  const [address, setAddress] = useState("");
  // 상세 주소
  const [addressDetail, setaddressDetail] = useState("");
  // 선택되어있는지 boolean
  const [isPurchase, setIsPurchase] = useState(false);
  //배송비
  const deliveryFee = 3000;

  // local 에서 겟해오기
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartProduct")) || [];
    setSavedItem(items);
  }, []);

  // 전체선택
  const handleAllChecked = () => {
    setIsAllChecked(!isAllChecked);

    if (!isAllChecked) {
      const allItemIds = savedItem.map((item) => item?._id);
      setSelectedItems(allItemIds);

      const selectedItemsData = savedItem.map((item) => ({
        //구매하기 눌렀을때 전송해야 할 데이터 작성
        brand: item?.brand,
        price: item?.price,
        quantity: item?.quantity,
        size: item?.size,
        title: item?.title,
        // 메인이미지도 추가(?)
      }));

      setSelectedItemsData(selectedItemsData);
    } else {
      setSelectedItems([]);
      setSelectedItemsData([]);
    }
  };

  //부분선택
  const handleSingleChecked = (itemId) => {
    const updatedSelectedItems = selectedItems.includes(itemId)
      ? selectedItems.filter((id) => id !== itemId)
      : [...selectedItems, itemId];

    setSelectedItems(updatedSelectedItems);
    setIsAllChecked(updatedSelectedItems.length === savedItem.length);

    const updatedSelectedItemsData = savedItem
      .filter((item) => updatedSelectedItems.includes(item?._id))
      .map((item) => ({
        //구매하기 눌렀을때 전송해야 할 데이터 작성
        brand: item?.brand,
        price: item?.price,
        quantity: item?.quantity,
        size: item?.size,
        title: item?.title,
        // 메인이미지도 추가(?)
      }));

    setSelectedItemsData(updatedSelectedItemsData);
  };

  // (쓰레기통) 삭제 하기
  const handleDeleteItem = (item) => {
    if (window.confirm(`${item?._id}현재 장바구니 상품을 삭제하시겠습니까?`)) {
      const localStoragedData =
        JSON.parse(localStorage.getItem("cartProduct")) || [];
      const updatedCartItems = localStoragedData.filter(
        (shoes) => shoes?._id !== item?._id
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
        (shoes) => !selectedItems.includes(shoes?._id)
      );
      localStorage.setItem("cartProduct", JSON.stringify(updatedCartItems));
      setSavedItem(updatedCartItems);
      setSelectedItems([]);
      alert("선택한 상품이 삭제되었습니다.");
    }
  };

  // 상품 금액
  useEffect(() => {
    const totalPrice = selectedItems.reduce((accumulator, currentItem) => {
      const item = savedItem.find((shoes) => shoes?._id === currentItem);
      if (!item) return accumulator;
      const itemToTalPrice = item.price * item.quantity;
      return accumulator + itemToTalPrice;
    }, 0);

    setTotalPrice(totalPrice);
  }, [selectedItems, savedItem]);

  // 총결제금액
  useEffect(() => {
    const totalPaymentAmount = selectedItems.reduce(
      (accumulator, currentItem) => {
        const item = savedItem.find((shoes) => shoes?._id === currentItem);
        if (item && item.price !== undefined) {
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

  // 구매하기
  const handlePurchase = () => {
    console.log("클릭 성공");
    if (window.confirm(`선택한 상품을 구매 하시겠습니까?`)) {
      // 주소와 상세주소가 모두 입력되었는지 확인
      if (!address || !addressDetail) {
        alert("주소와 상세 주소를 모두 입력하세요");
      } else {
        // 주소와 상세주소가 입력되었고 선택한 상품이 하나 이상일 때만 구매 완료 페이지로 이동
        navigate("/PurchaseCompleted");
      }
    }
  };

  // 구매하기 활성화시 조건
  useEffect(() => {
    if (selectedItems.length === 0) {
      setIsPurchase(false);
    }
    if (selectedItems.length > 0) {
      setIsPurchase(true);
    }
  }, [selectedItems]);

  return (
    <>
      <div className="body__div--cart-div-size">
        <h3 className="div__h3--cart-title">장바구니</h3>
        <div className="div__div--cart-content-align">
          <SelectWrapper
            isAllChecked={isAllChecked}
            selectDelete={selectDelete}
            handleAllChecked={handleAllChecked}
          />
          <CartWrapper
            handleSingleChecked={handleSingleChecked}
            savedItem={savedItem}
            selectedItems={selectedItems}
            setSavedItem={setSavedItem}
            handleDeleteItem={handleDeleteItem}
            totalPrice={totalPrice}
            totalPaymentAmount={totalPaymentAmount}
            deliveryFee={deliveryFee}
            handlePurchase={handlePurchase}
            isPurchase={isPurchase}
          />
        </div>
        <div className="deliveryadress">
          <form className="deliveryadress__container">
            <input
              type="text"
              className="form__label--delivery-address"
              placeholder="주소를 입력해주세요."
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
            <input
              type="text"
              className="form__label--delivery-address-detail"
              placeholder="상세 주소를 입력해주세요."
              value={addressDetail}
              onChange={(e) => {
                setaddressDetail(e.target.value);
              }}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Cart;
