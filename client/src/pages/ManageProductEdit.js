import { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate, state } from 'react-router-dom';
import { useLocation } from 'react-router';
import { updateProduct } from '../api/productsAPI';

const ManageProductEdit = () => {
  let { state } = useLocation();
  const { categories } = state; //선택된 카테고리
  const { brands } = state;
  const { typeSubCategories } = state;
  const { product } = state;
  const [updatedProduct, setUpdatedProduct] = useState(product);

  const navigate = useNavigate();
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setUpdatedProduct({ ...updatedProduct, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (product.title.length < 5) {
      alert('상품 이름은 5글자 이상 입력하세요');
      return;
    }

    const jsonData = {
      title: product.title,
      model_number: product.model_number,
      type: product.type,
      brand: product.brand,
      price: product.price,
      gender: product.gender,
      size: product.size,
    };

    const response = await updateProduct(jsonData);
    alert('상품이 수정되었습니다.');
    navigate(-1);
    // console.log(response);
  };

  // const brandList = ['adclassNameas', 'Boutique', '닥터마틴'];
  // const typeList = ['sneakers', 'Derby'];
  return (
    <div className='ManageProductEdit'>
      <h2>Update Product</h2>
      <form onSubmit={handleSubmit}>
        <img
          className='image'
          src={
            product.image
              ? product.image
              : process.env.PUBLIC_URL + `/assets/미소.jpg`
          }
          alt='상품 이미지'
        />
        <div>
          <label htmlFor='title'>제품명</label>
          <input
            type='text'
            className='title'
            name='title'
            value={product.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor='model_number'>모델번호</label>
          <input
            type='text'
            className='model_number'
            name='model_number'
            value={product.model_number}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor='type'>타입:</label>
          <select
            className='type'
            name='type'
            value={product.type}
            onChange={handleInputChange}
          >
            <option>타입 선택</option>
            {typeSubCategories.map((type, idx) => (
              <option value={type.name} key={idx}>
                {type.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor='brand'>브랜드:</label>
          <select
            id='brand'
            name='brand'
            value={product.brand}
            onChange={handleInputChange}
          >
            <option>브랜드를 선택</option>

            {brands.map((brand, idx) => (
              <option value={brand._id} key={idx}>
                {brand.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor='price'>가격</label>
          <input
            type='text'
            className='price'
            name='price'
            value={product.price}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor='gender'>성별</label>
          <select
            className='type'
            name='gender'
            value={product.gender}
            onChange={handleInputChange}
          >
            <option>성별을 선택하세요</option>
            <option value={'BOTH'}>모두</option>
            <option value={'MALE'}>남성</option>
            <option value={'FEMALE'}>여성</option>
          </select>
        </div>
        <div>
          <label htmlFor='sizes'>사이즈</label>
          <input
            type='text'
            className='sizes'
            name='sizes'
            value={product.sizes}
            onChange={handleInputChange}
          />
        </div>
        <div className='control_box'>
          <button
            onClick={() => navigate(`/manageproducts`, { state: categories })}
          >
            수정 취소
          </button>
          <button type='submit'>상품 수정</button>
        </div>
      </form>
    </div>
  );
};

export default ManageProductEdit;
