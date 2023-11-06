import React, { Component, useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 카테고리 ID
    const categoryId = "몽고디비에 저장된 카테고리 ID";

    // API 요청 보내기
    axios
      .get(`http://localhost:3000/api/products?category_id=${categoryId}`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setData(null);
        setLoading(false);
        setError("API 요청에 실패했습니다.");
      });
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <h1>API 응답 데이터:</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
