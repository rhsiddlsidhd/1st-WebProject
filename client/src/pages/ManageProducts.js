import { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getProducts } from '../api/productsAPI';
import Product from '../components/Product';

const ManageProducts = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  // const [productCount, setProductCount] = useState();
  const productCountRef = useRef(null);
  let queryString;

  const { state } = useLocation();
  useEffect(() => {
    if (state) setSelectedCategories(state);
  }, []);

  // NOTE 대분류에서 타입가져오기
  const selectList = ['스니커즈', '샌들', '로퍼'];
  // NOTE 체크박스는 대분류에서 성별, 브랜드가져오기
  // FIXME 이 두 부분을 컴포넌트로 빼기

  const handleSelect = (e) => {
    const value = e.target.value;
    setSelected(value);
    setSelectedCategories([...selectedCategories, value]);
  };

  const getProductList = useCallback(async () => {
    const productsData = await getProducts(queryString);
    setProducts(productsData);
    // NOTE setProduct()같은 경우 왜 바로 반영이 안되는지
    // console.log(products.length);
    console.log('api호출 완료');
    productCountRef.current.textContent = `총 ${productsData.length}개의 상품이 있습니다`;
  }, [selectedCategories]);

  useEffect(() => {
    getProductList();
  }, [getProductList]);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setSelectedCategories([...selectedCategories, value]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((category) => category !== value)
      );
    }
  };

  const updateQueryString = () => {
    queryString =
      selectedCategories.length > 0
        ? `?` + selectedCategories.map((it) => `category_id=${it}`).join('&')
        : '';
    window.history.pushState({}, '', window.location.pathname + queryString);
  };

  useEffect(() => {
    updateQueryString();
  }, [selectedCategories]);

  return (
    <div className='ManageProducts'>
      <h2>List</h2>
      <p>관리자 제품관리 리스트입니다</p>

      <h4 ref={productCountRef}></h4>
      <div>
        <button onClick={() => navigate('/new', { state: selectedCategories })}>
          상품추가
        </button>
        <select onChange={handleSelect} value={selected}>
          <option value=''>타입을 선택하세요</option>
          {selectList.map((item, idx) => (
            <option value={item} key={idx}>
              {item}
            </option>
          ))}
        </select>
      </div>
      {/* NOTE 브랜드, 성별 체크박스로 */}
      <div>
        <label>
          <input
            type='checkbox'
            name='category'
            value='Category1'
            onChange={handleCheckboxChange}
            checked={selectedCategories.includes('Category1')}
          />{' '}
          Category 1
        </label>
        <br />
        <label>
          <input
            type='checkbox'
            name='category'
            value='Category2'
            onChange={handleCheckboxChange}
            checked={selectedCategories.includes('Category2')}
          />{' '}
          Category 2
        </label>
        <br />
        <label>
          <input
            type='checkbox'
            name='category'
            value='Category3'
            onChange={handleCheckboxChange}
            checked={selectedCategories.includes('Category3')}
          />{' '}
          Category 3
        </label>
      </div>
      <div>
        {products.map((item) => (
          // <Product key={item.product_id} item={item} cate={Selected} />
          <Product
            key={item.product_id}
            item={item}
            categories={selectedCategories}
            getProductList={getProductList}
          />
        ))}
      </div>
    </div>
  );
};

export default ManageProducts;
