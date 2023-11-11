import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// import React, { useState } from "react";

const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // 데이터 상태
  const [data, setData] = useState([]);
  console.log(data);

  // 데이터 get해오는 useEffect
  useEffect(() => {
    axios
      .get(`/api/products/${id}`)

      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("데이터를 불러오는 중 오류 발생: ", error);
      });
  }, []);

  const addToCart = () => {
    const previousStorage =
      JSON.parse(localStorage.getItem("cartProduct")) || [];
    //중복방지 some 특정 조건을 만족하는지 배열 내부의 원소를 순회하면서 검사
    const isDuplication = previousStorage.some((item) => {
      return item.id === data.id;
    });
    if (!isDuplication) {
      const updateStorage = [...previousStorage, data];
      console.log(updateStorage);
      localStorage.setItem("cartProduct", JSON.stringify(updateStorage));
      alert("장바구니에 상품이 추가되었습니다.");
    } else if (isDuplication) {
      alert("이미 장바구니에 상품이 있습니다.");
    }
  };

  return (
    <div>
      <div className="body__div--detail-content">
        {/* 상품 정보 */}

        <div className="div__div--info-flex">
          <div className="div__div--product-img">
            <img src={data.main_images[0].url} />
            {/* {data?.main_images?.map((image, index) => {
              return <img src={data.main_images[0].url} key={index} />;
            })} */}
          </div>
          <div className="div__div--info-text">
            <p className="div__p--brand-name">{data.brand}</p>
            <p className="div__p--product-name">{data.title}</p>
            <p className="div__p--price">{`${data.price} 원`}</p>

            <select className="div__select--select-style">
              <option value="" disabled hidden>
                {/* 사이즈 선택 */}
              </option>
              {/* 해당 데이터의 사이즈를 전부 펼쳐야함 */}
              {/* {data?.map((item, index) => (
                <option key={index}>{item.size}</option>
              ))} */}
              <option>{data.size}</option>
            </select>
            <form>
              <input
                onClick={() => {
                  navigate("/PurchaseCompleted");
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
        <div className="div__div--detail-img">
          {/* 이미지 내용 */}
          {data?.detail_images?.map((image, index) => {
            return <img src={image.url} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Detail;
