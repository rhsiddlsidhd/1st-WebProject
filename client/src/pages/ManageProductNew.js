import { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate, state } from 'react-router-dom';
import { useLocation } from 'react-router';
import { addProduct } from '../api/productsAPI';

const ManageProductNew = () => {
  let { state } = useLocation();
  const categories = state;
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    if (name === 'sizes') {
      value = value.trim(' ').split(',');
      console.log(value);
    }
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', product.title);
    formData.append('model_number', product.model_number);
    formData.append('type', product.type);
    formData.append('brand', product.brand);
    formData.append('price', product.price);
    formData.append('gender', product.gender);
    formData.append('sizes', product.sizes);

    for (var pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }
    const response = await addProduct(formData);
    console.log('상품추가결과');
    console.log(response);
  };

  const brandList = ['adidas', 'Boutique', '닥터마틴'];
  const typeList = ['sneakers', 'Derby'];

  return (
    <div>
      <h2>Update Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='title'>제품명</label>
          <input
            type='text'
            id='title'
            name='title'
            value={product.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor='model_number'>모델번호</label>
          <input
            type='text'
            id='model_number'
            name='model_number'
            value={product.model_number}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor='type'>타입:</label>
          <select
            id='type'
            name='type'
            value={product.type}
            onChange={handleInputChange}
          >
            {typeList.map((type, idx) => (
              <option value={type} key={idx}>
                {type}
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
            {brandList.map((brand, idx) => (
              <option value={brand} key={idx}>
                {brand}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor='price'>가격</label>
          <input
            type='text'
            id='price'
            name='price'
            value={product.price}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor='gender'>성별</label>
          <select
            id='type'
            name='gender'
            value={product.gender}
            onChange={handleInputChange}
          >
            <option value={'man'}>남성</option>
            <option value={'woman'}>여성</option>
          </select>
        </div>
        <div>
          <label htmlFor='sizes'>사이즈</label>
          <input
            type='text'
            id='sizes'
            name='sizes'
            value={product.sizes}
            onChange={handleInputChange}
          />
        </div>
        <div className='control_box'>
          <button onClick={() => navigate(`/products?cateogory=${categories}`)}>
            추가 취소
          </button>
          <button type='submit'>상품 추가</button>
        </div>
      </form>
    </div>
  );
};

export default ManageProductNew;
