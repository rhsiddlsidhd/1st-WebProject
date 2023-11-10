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
        <li key={product.id} className='ul__li--group-item'>
          <img
            src={product.main_images[0]?.url ?? ''}
            className='li__img--product-image'
          />
          <div className='li__img--product-brand'>
            브랜드:{getBrandName(product.brand)}
          </div>
          <div className='li__div--product-title'>
            {product.title} / {product.model_number}
          </div>
          <div className='li__div--product-price'>
            {new Intl.NumberFormat().format(product.price)} 원
          </div>{' '}
        </li>
      ))}
    </ul>
  );
};

export default Products;
