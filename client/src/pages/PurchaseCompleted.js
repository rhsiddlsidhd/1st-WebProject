import React from "react";

const PurchaseCompleted = () => {
  const CompleteStyle = {
    width: "100%",
    height: "1044px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      <div style={CompleteStyle}>
        <h2>주문이 완료되었습니다</h2>
      </div>
    </>
  );
};

export default PurchaseCompleted;
