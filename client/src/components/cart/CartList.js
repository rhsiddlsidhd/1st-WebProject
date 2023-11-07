import axios from "axios";
import React, { useEffect, useState } from "react";

const CartList = ({ updateCartItemCount }) => {
  const [count, setCount] = useState(1);
  const [savedItem, setSavedItem] = useState([]);

  // 데이터 상태
  const [data, setData] = useState([]);

  // axios 기본 구조
  // axios.get('url').then((res)=>console.log(res)).catch((error)=>console.log(error))
  // get('주소')
  // then(콜백으로 response를 받음)
  // catch(에러가 있다면 캐치함)

  // 데이터 get해오는 useEffect
  useEffect(() => {
    axios
      .get(
        "http://localhost:3000/api/products?category_id=1123123&category_id=1123123&page=1"
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("데이터를 불러오는 중 오류 발생: ", error);
      });
  }, []);

  console.log(`데이터가 잘 들어왔나요? ${data}`);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartProduct")) || [];
    setSavedItem(items);
    updateCartItemCount(items.length);
  }, [updateCartItemCount]);

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
    <div className="cart-area">
      {savedItem.map((item) => (
        <div className="div__div-cart-list-all-add">
          <label className="checkbox-container">
            <input type="checkbox" className="cart-checkbox" />
            <span className="checkmark">
              <i className="fa-solid fa-check"></i>
            </span>
          </label>
          <div className="div__div-cart-list-add">
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartList;
