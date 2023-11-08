import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DeliveryAddress = () => {
  // 주소
  const [address, setAddress] = useState("");
  // 상세 주소
  const [addressDetail, setaddressDetail] = useState("");

  // 구매완료 버튼
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!address || !addressDetail) {
      return alert("주소와 상세 주소를 모두 입력하세요");
    } else {
      navigate("/PurchaseCompleted");
      alert("배송을 시작할게요");
    }
  };

  const navigate = useNavigate();

  return (
    <div>
      <div className="body__div--delivery-address-div-size">
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="fname"
            className="form__label--delivery-address-title"
          >
            배송지 입력
          </label>
          <br />
          <input
            type="text"
            className="form__label--delivery-address"
            placeholder="주소를 입력해주세요."
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <br />
          <input
            type="text"
            className="form__label--delivery-address-detail"
            placeholder="상세 주소를 입력해주세요."
            value={addressDetail}
            onChange={(e) => {
              setaddressDetail(e.target.value);
            }}
          />
          <button className="div__button--purchase-completed-button-style">
            구매완료
          </button>
        </form>
      </div>
    </div>
  );
};

export default DeliveryAddress;
