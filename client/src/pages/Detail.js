import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

// import React, { useState } from "react";

const Detail = () => {
  const navigate = useNavigate();

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
      .get("http://localhost:3000/api/products")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("데이터를 불러오는 중 오류 발생: ", error);
      });
  }, []);

  // console.log(`데이터가 잘 들어왔나요? ${data}`);

  //많은 데이터들이 배열안에 객체로 {key:data} 값으로 콘솔에 찍힘

  const product = {
    img: data[0]?.main_images,
    brandname: data[0]?.brand,
    productname: data[0]?.title,
    price: data[0]?.price,
    optionvalue: data[0]?.size,
    number: data[0]?.__v,
    id: data[0]?._id,
    quantity: 1,
  };

  const addToCart = () => {
    const previousStorage =
      JSON.parse(localStorage.getItem("cartProduct")) || [];
    //중복방지 some 특정 조건을 만족하는지 배열 내부의 원소를 순회하면서 검사
    const isDuplication = previousStorage.some((item) => {
      return item.id === product.id;
    });
    if (!isDuplication) {
      const updateStorage = [...previousStorage, product];
      console.log(updateStorage);
      localStorage.setItem("cartProduct", JSON.stringify(updateStorage));
      alert("장바구니에 상품이 추가되었습니다.");
    } else if (isDuplication) {
      alert("이미 장바구니에 삼품이 있습니다.");
    }
  };

  return (
    <div>
      <Header />
      <div className="body__div--detail-content">
        {/* 상품 정보 */}

        <div className="div__div--info-flex">
          <div className="div__div--product-img">{product.img}</div>
          <div className="div__div--info-text">
            <p className="div__p--brand-name">{product.brandname}</p>
            <p className="div__p--product-name">{product.productname}</p>
            <p className="div__p--price">{`${product.price} 원`}</p>
            <select className="div__select--select-style">
              <option value="" disabled selected hidden>
                사이즈 선택
              </option>
              {/* 해당 데이터의 사이즈를 전부 펼쳐야함 */}
              {data.map((item, index) => (
                <option key={index}>{item.size}</option>
              ))}
            </select>
            <form>
              <input
                onClick={() => {
                  navigate("/deliveryaddress");
                }}
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
