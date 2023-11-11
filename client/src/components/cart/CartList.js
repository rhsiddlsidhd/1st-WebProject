import React from "react";

const CartList = ({
  handleSingleChecked,
  handleDeleteItem,
  savedItem,
  setSavedItem,
  selectedItems,
}) => {
  // 수량 추가하기
  const handleIncreaseItem = (item) => {
    let cartProductKey = `cartProduct_${item?._id}`;
    let localStoragedData =
      JSON.parse(localStorage.getItem(cartProductKey)) || item;

    // count 값 증가
    localStoragedData.count += 1;

    localStorage.setItem(cartProductKey, JSON.stringify(localStoragedData));

    // 상태 업데이트
    const updatedItems = savedItem.map((shoes) =>
      shoes._id === item._id ? localStoragedData : shoes
    );
    setSavedItem(updatedItems);
  };

  // 수량 줄이기

  const handleDecreaseItem = (item) => {
    let cartProductKey = `cartProduct_${item?._id}`;
    let localStoragedData =
      JSON.parse(localStorage.getItem(cartProductKey)) || item;

    // count 값이 1보다 클 때만 감소
    if (localStoragedData.count > 1) {
      localStoragedData.count -= 1;
    }

    localStorage.setItem(cartProductKey, JSON.stringify(localStoragedData));

    // 상태 업데이트
    const updatedItems = savedItem.map((shoes) =>
      shoes._id === item._id ? localStoragedData : shoes
    );
    setSavedItem(updatedItems);
  };

  return (
    <>
      <div className="div__div--cart-list-style">
        {savedItem?.map((item) => (
          <div className="div__div-cart-list-all-add" key={item.id}>
            <label className="checkbox-container">
              <input
                type="checkbox"
                className="cart-checkbox"
                checked={selectedItems.includes(item?._id)}
                onChange={() => handleSingleChecked(item?._id)}
              />
              <span className="checkmark">
                <i className="fa-solid fa-check"></i>
              </span>
            </label>
            <div className="div__div-cart-list-add">
              <div key={item.id} className="div__div-cart-list-add-item">
                <img
                  src={
                    (item?.main_images &&
                      item.main_images.length > 0 &&
                      item.main_images[0].url) ||
                    "http://kdt-sw-7-team09.elicecoding.com:5000/images/e6XEhVx1pkjlD83sYaxqr.png"
                  }
                  alt={`Error`}
                />

                <div className="div__div-cart-list-add-item-brand">
                  {item?.brand}
                  <br />
                  {item?.title}
                </div>
                <div className="div__div-cart-list-add-item-size">
                  {item?.size}
                </div>
                <div className="number">
                  <button
                    onClick={() => {
                      handleDecreaseItem(item);
                    }}
                  >
                    -
                  </button>
                  <div>{item?.count}</div>
                  <button onClick={() => handleIncreaseItem(item)}>+</button>
                </div>
                <div className="div__div-cart-list-add-item-price">
                  {item?.price}
                </div>
                <button
                  className="div__div-cart-list-add-item-delete"
                  onClick={() => {
                    handleDeleteItem(item);
                  }}
                >
                  <i class="fa-regular fa-trash-can"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CartList;
