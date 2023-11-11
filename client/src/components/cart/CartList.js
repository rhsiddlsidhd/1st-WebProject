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
    const updatedItems = savedItem.map((shoes) => {
      if (shoes.id === item.id) {
        const localStoragedData =
          JSON.parse(localStorage.getItem("cartProduct")) || [];

        const totalCount = localStoragedData.reduce(
          (accumulator, currentItem) => accumulator + currentItem.quantity,
          0
        );

        const updatedQuantity = shoes.quantity + 1;
        return { ...shoes, quantity: updatedQuantity, totalCount };
      }
      return shoes;
    });

    localStorage.setItem("cartProduct", JSON.stringify(updatedItems));
    setSavedItem(updatedItems);
  };

  // 수량 줄이기
  const handleDecreaseItem = (item) => {
    const updatedItems = savedItem.map((shoes) => {
      if (shoes.id === item.id) {
        const localStoragedData =
          JSON.parse(localStorage.getItem("cartProduct")) || [];
        const totalCount = localStoragedData.reduce(
          (accumulator, currentItem) => {
            const itemQuantity = currentItem.quantityCount - 1;
            return accumulator - itemQuantity;
          },
          0
        );

        const updatedQuantity = shoes.quantity - 1;
        // 수량이 0 이하로 내려가지 않도록 조건문 추가
        if (updatedQuantity < 1) {
          return { ...shoes, quantity: 1, totalCount };
        }
        return {
          ...shoes,
          quantity: updatedQuantity,
          totalCount,
        };
      }
      return shoes;
    });

    localStorage.setItem("cartProduct", JSON.stringify(updatedItems));
    setSavedItem(updatedItems);
  };

  return (
    <>
      <div className="div__div--cart-list-style">
        {savedItem.map((item) => (
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
                    item[0]?.main_images[0]?.url ||
                    "http://kdt-sw-7-team09.elicecoding.com:5000/images/e6XEhVx1pkjlD83sYaxqr.png"
                  }
                  alt={item.main_images[0]}
                />
                <div className="div__div-cart-list-add-item-brand">
                  {item.brand}
                  <br />
                  {item.title}
                </div>
                <div className="div__div-cart-list-add-item-size">
                  {item.size}
                </div>
                <div className="number">
                  <button
                    onClick={() => {
                      handleDecreaseItem(item);
                    }}
                  >
                    -
                  </button>
                  <div>{item.quantity}</div>
                  <button onClick={() => handleIncreaseItem(item)}>+</button>
                </div>
                <div className="div__div-cart-list-add-item-price">
                  {item.price}
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
