import React, { useState } from "react";

const CartList = () => {
  const [count, setCount] = useState(1);

  const savedItem = JSON.parse(localStorage.getItem("cartProduct")) || [];
  console.log(savedItem);

  //재배치

  const addItem = () => {
    setCount(count + 1);
  };

  const deleteItem = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="div__div-cart-list-add">
      {savedItem.map((item) => (
        <div key={item.id}>
          <img src="#" alt={item.img} />
          <div>{item.brandname}</div>
          <div>{item.optionvalue}</div>
          <div className="number">
            <button onClick={deleteItem}>-</button>
            <div>{item.number}</div>
            <button onClick={addItem}>+</button>
          </div>
          <div>{item.price}</div>
          <div>
            <i class="fa-regular fa-trash-can"></i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartList;
