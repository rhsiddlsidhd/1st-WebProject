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
        {products.map((item) => {
          const imgSrc =
            item.main_images.length && item.main_images[0]
              ? item.main_images[0].url
              : baseProductImgage;
          return (
            <tr key={item.id}>
              <td>
                <img className='image' src={imgSrc} width='100px' />
              </td>
              <td className='div__span--item-title'>{item.title}</td>
              <td className='div__span--item-price'>{item.price}</td>
              <td className='div__span--item-brand'>
                {getBrandName(item.brand)}
              </td>
              <td>
                <button
                  onClick={() => {
                    const product = item;
                    console.log('product :', product);
                    handleEdit(product, categories);
                  }}
                >
                  수정하기
                </button>
              </td>
              <td>
                <button onClick={() => handleRemove(item)}>삭제하기</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default memo(ManageProduct);
