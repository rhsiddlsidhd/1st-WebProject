// import React, { memo, useEffect } from "react";
import { useNavigate, state } from 'react-router-dom';
// import { deleteProduct } from "../api/productsAPI";
const Products = ({ products, loading }) => {
  if (loading) {
    return <h2>제품을 불러오는 중</h2>;
  }

  return (
    <ul className='list-group'>
      {products.map((product) => (
        <li key={product.id} className='list-group-item'>
          {product.title}
        </li>
      ))}
    </ul>
  );
};

export default Products;
