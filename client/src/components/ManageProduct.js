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
  return (
    <table className='div__product-info-list'>
      <thead className='table__thead--table-content'>
        <tr>
          <th>상품 이미지</th>
          <th>상품명</th>
          <th>사이즈</th>
          <th>카테고리</th>
          <th>상품 수정</th>
          <th>상품 삭제</th>
        </tr>
      </thead>
      <tbody className='table__tbody--table-content'>
        {products.map((item) => (
          <tr key={item.id}>
            <td>
              <img
                className='image'
                src={process.env.PUBLIC_URL + `/assets/미소.jpg`}
                width='100px'
              />
            </td>
            <td className='div__span--item-title'>{item.title}</td>
            <td className='div__span--item-price'>{item.price}</td>
            <td className='div__span--item-brand'>
              {getBrandName(item.brand)}
            </td>
            <td>
              <button onClick={() => handleEdit(item, categories)}>
                수정하기
              </button>
            </td>
            <td>
              <button onClick={() => handleRemove(item)}>삭제하기</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default memo(ManageProduct);
