import { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate, state } from 'react-router-dom';
import { useLocation } from 'react-router';
import { updateProduct } from '../api/productsAPI';

const ManageProductEdit = () => {
  let { state } = useLocation();
  const categories = state.categories;
  const productItem = state.item;
  const [product, setProduct] = useState(productItem);

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

    for (const pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }
    // const response = await updateProduct(formData);
    // console.log(response);
  };

  const brandList = ['adclassNameas', 'Boutique', '닥터마틴'];
  const typeList = ['sneakers', 'Derby'];
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
            {typeList.map((type, classNamex) => (
              <option value={type} key={classNamex}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor='brand'>브랜드:</label>
          <select
            className='brand'
            name='brand'
            value={product.brand}
            onChange={handleInputChange}
          >
            {brandList.map((brand, classNamex) => (
              <option value={brand} key={classNamex}>
                {brand}
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
            <option value={'man'}>남성</option>
            <option value={'woman'}>여성</option>
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
            onClick={() => navigate(`/manageList`, { state: categories })}
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
