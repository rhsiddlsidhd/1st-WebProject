import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

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
      <Header />
      <div style={CompleteStyle}>
        <h2>주문이 완료되었습니다</h2>
      </div>
      <Footer />
    </>
  );
};

export default PurchaseCompleted;
