import { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate, state } from 'react-router-dom';
import { useLocation } from 'react-router';
import { addProduct } from '../api/productsAPI';
import ManageImage from '../components/ManageImage';

const ManageProductNew = () => {
  let { state } = useLocation();
  const { categories } = state;
  const { brands } = state;
  const { typeSubCategories } = state;

  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setProduct({ ...product, [name]: value });
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
      type: product.type,
      brand: product.brand,
      price: product.price,
      gender: product.gender,
      size: product.size,
    };

    const response = await addProduct(jsonData);
    // console.log('상품추가값!!!!!!!!!!!!!!!!!!!!!');
    // console.log(response);
    alert('상품이 추가되었습니다.');
    const { _id } = response;
    navigate(`/productedit/${_id}`, {
      state: {
        categories: categories,
        item: response,
        // categories: selectedCategories,
        brands: brands,
        typeSubCategories,
      },
    });
    // navigate(-1);
  };

  return (
    <div class='ManageProductEdit'>
      <h2>새로운 상품 추가</h2>
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
            id='price'
            name='price'
            placeholder='가격 입력'
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
            <option>성별을 선택하세요</option>
            <option value={'BOTH'}>모두</option>
            <option value={'MALE'}>남성</option>
            <option value={'FEMALE'}>여성</option>
          </select>
        </div>
        <div>
          <label htmlFor='size'>사이즈</label>
          <input
            type='text'
            id='size'
            name='size'
            value={product.size}
            onChange={handleInputChange}
          />
        </div>
        {/* <ManageImage></ManageImage> */}
        <div className='control_box'>
          <button type='button' onClick={() => navigate(-1)}>
            추가 취소
          </button>
          <button type='submit'>상품 추가</button>
        </div>
      </form>
    </div>
  );
};

export default ManageProductNew;
