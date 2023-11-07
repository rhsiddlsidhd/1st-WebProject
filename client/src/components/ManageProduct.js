import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
const ManageProduct = ({ item, categories, getProductList }) => {
  const handleRemove = () => {
    if (
      window.confirm(
        `${item.title}(${item.model_number})제품을 삭제하시겠습니까?`
      )
    ) {
      getProductList();
    }
  };
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/edit/${item.id}`, {
      state: { categories: categories, item: item },
    });
  };

  return (
    <div className='Product'>
      <img
        className='image'
        src={process.env.PUBLIC_URL + `/assets/미소.jpg`}
        width='100px'
      ></img>
      <span className='title'>{item.title}</span>
      <span className='price'>{item.price}</span>
      <span className='brand'>{item.brand}</span>
      <span>
        <button onClick={handleRemove}>삭제하기</button>
        <button onClick={handleEdit}>수정하기</button>
      </span>
    </div>
  );
};

export default memo(ManageProduct);
