import React, { memo } from 'react';
import baseProductImgage from '../image/base_product_image.png';
// import logoImgage from '../../image/logo.png';
const ManageProduct = ({
  categories,
  products,
  handleEdit,
  handleRemove,
  brands,
}) => {
  const getBrandName = (brandId) => {
    return brands
      .filter((brand) => brand._id === brandId)
      .map((brand) => brand.name);
  };
  // console.log(products[0].main_images[0].url);
  console.log('products -->', products);
  return products.map((item) => {
    const imgSrc =
      item.main_images.length && item.main_images[0]
        ? item.main_images[0].url
        : baseProductImgage;
    return (
      <div className='Product'>
        <img src={imgSrc} />
        <span className='title'>{item.title}</span>
        <span className='price'>{item.price}</span>
        <span className='brand'>{getBrandName(item.brand)}</span>
        <span>
          <button
            onClick={() => {
              handleRemove(item);
            }}
          >
            삭제하기
          </button>
          <button
            onClick={() => {
              const product = item;
              console.log('product :', product);
              handleEdit(product, categories);
            }}
          >
            수정하기
          </button>
        </span>
      </div>
    );
  });
};

export default memo(ManageProduct);
