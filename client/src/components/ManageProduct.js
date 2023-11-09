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
        className='image'
        src={process.env.PUBLIC_URL + `/assets/미소.jpg`}
        width='100px'
      ></img>
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
            handleEdit(item, categories);
          }}
        >
          수정하기
        </button>
      </span>
    </div>
  ));
};

export default memo(ManageProduct);
