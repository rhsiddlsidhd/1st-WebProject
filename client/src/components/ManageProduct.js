import React, { memo } from 'react';
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
  return products.map((item) => (
    <div className='Product'>
      <img
        src={
          item.main_images[0]?.url ??
          process.env.PUBLIC_URL + `/images/기본제품이미지.jpg`
        }
      />
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
  ));
};

export default memo(ManageProduct);
