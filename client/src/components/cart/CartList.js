import React from "react";

const CartList = ({
  handleDeleteItem,
  savedItem,
  setSavedItem,
  selectedItems,
  setSelectedItems,
  setIsAllChecked,
}) => {
  // 수량 추가하기
  const handleIncreaseItem = (item) => {
    const updatedItems = savedItem.map((shoes) => {
      if (shoes.id === item.id) {
        return { ...shoes, quantity: shoes.quantity + 1 };
      }
      return shoes;
    });
    setSavedItem(updatedItems);
  };

  // 수량 줄이기
  const handleDecreaseItem = (item) => {
    const updatedItems = savedItem.map((shoes) => {
      if (shoes.id === item.id && shoes.quantity > 1) {
        return { ...shoes, quantity: shoes.quantity - 1 };
      }
      return shoes;
    });
    setSavedItem(updatedItems);
  };

  // 부분 선택
  const hendleChecked = (itemId) => {
    const updatedSelectedItems = selectedItems.includes(itemId)
      ? selectedItems.filter((id) => id !== itemId)
      : [...selectedItems, itemId];

    setSelectedItems(updatedSelectedItems);
    setIsAllChecked(updatedSelectedItems.length === savedItem.length);
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
                checked={selectedItems.includes(item.id)}
                onChange={() => hendleChecked(item.id)}
              />
              <span className="checkmark">
                <i className="fa-solid fa-check"></i>
              </span>
            </label>
            <div className="div__div-cart-list-add">
              <div key={item.id} className="div__div-cart-list-add-item">
                <img src="#" alt={item.img} />
                <div className="div__div-cart-list-add-item-brand">
                  {item.brandname}
                  <br />
                  {item.productname}
                </div>
                <div className="div__div-cart-list-add-item-size">
                  {item.optionvalue}
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
