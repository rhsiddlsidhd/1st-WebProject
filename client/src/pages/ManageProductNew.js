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
    <div className='div__manage-product-add-content'>
      <div className='div__manage-product-add-content-wrap'>
        <h2 className='div__h2--product-add-title'>상품 추가</h2>
        <form
          onSubmit={handleSubmit}
          className='div__form--manage-product-edit'
        >
          <div className='div__div--input-list-wrap'>
            <div>
              <label
                htmlFor='title'
                className='form__label--input-title-hidden'
              >
                제품명
              </label>
              <input
                type='text'
                id='title'
                name='title'
                value={product.title}
                onChange={handleInputChange}
                className='form__input--input-value-style'
                placeholder='제품명을 입력해 주세요.'
              />
            </div>
            <div>
              <label
                htmlFor='model_number'
                className='form__label--input-title-hidden'
              >
                모델번호
              </label>
              <input
                type='text'
                id='model_number'
                name='model_number'
                value={product.model_number}
                onChange={handleInputChange}
                className='form__input--input-value-style'
                placeholder='모델명을 입력해 주세요.'
              />
            </div>
            <div className='div__div--button-flex'>
              <div>
                <label
                  htmlFor='type'
                  className='form__label--input-title-hidden'
                >
                  타입:
                </label>
                <select
                  id='type'
                  name='type'
                  value={product.type}
                  onChange={handleInputChange}
                  className='form__input--input-value-style form__input--input-value-style-type'
                >
                  <option>타입을 선택하세요.</option>
                  {typeSubCategories.map((type, idx) => (
                    <option value={type.name} key={idx}>
                      {type.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor='brand'
                  className='form__label--input-title-hidden'
                >
                  브랜드:
                </label>
                <select
                  id='brand'
                  name='brand'
                  value={product.brand}
                  onChange={handleInputChange}
                  className='form__input--input-value-style form__input--input-value-style-brand'
                >
                  <option>브랜드를 선택하세요.</option>

                  {brands.map((brand, idx) => (
                    <option value={brand._id} key={idx}>
                      {brand.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label
                htmlFor='price'
                className='form__label--input-title-hidden'
              >
                가격
              </label>
              <input
                type='text'
                id='price'
                name='price'
                placeholder='가격을 입력해 주세요.'
                value={product.price}
                onChange={handleInputChange}
                className='form__input--input-value-style'
              />
            </div>
            <div>
              <label
                htmlFor='gender'
                className='form__label--input-title-hidden'
              >
                성별
              </label>
              <select
                id='type'
                name='gender'
                value={product.gender}
                onChange={handleInputChange}
                className='form__input--input-value-style'
              >
                <option>성별을 선택하세요.</option>
                <option value={'BOTH'}>모두</option>
                <option value={'MALE'}>남성</option>
                <option value={'FEMALE'}>여성</option>
              </select>
            </div>
            <div>
              <label htmlFor='size' className='form__label--input-title-hidden'>
                사이즈
              </label>
              <input
                type='text'
                id='size'
                name='size'
                value={product.size}
                onChange={handleInputChange}
                placeholder='사이즈를 입력해 주세요.'
                className='form__input--input-value-style'
              />
            </div>
            <div className='control_box'>
              <button
                type='button'
                onClick={() => navigate(-1)}
                className='div__button--product-cancel-button'
              >
                취소하기
              </button>
              <button type='submit' className='div__button--product-add-button'>
                등록하기
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ManageProductNew;
