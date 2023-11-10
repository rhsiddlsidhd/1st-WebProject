// import React, { memo, useEffect } from "react";
import { useNavigate, state } from 'react-router-dom';
// import { deleteProduct } from "../api/productsAPI";
const Products = ({ products, loading, brands }) => {
  if (loading) {
    return <h2>제품을 불러오는 중</h2>;
  }
  console.log(products);
  console.log('브랜드확인');
  console.log(brands);

  const getBrandName = (brandId) => {
    return brands
      .filter((brand) => brand._id === brandId)
      .map((brand) => brand.name);
  };

  return (
    <ul className='list-group'>
      {products.map((product) => (
        <li key={product.id} className='list-group-item'>
          <img src={product.main_images[0]?.url ?? ''} />
          <span>
            {product.title}/{product.model_number}
          </span>
          <span>{product.price}원</span>{' '}
          <span>브랜드:{getBrandName(product.brand)}</span>
        </li>
      ))}
    </ul>
  );
};

export default Products;
