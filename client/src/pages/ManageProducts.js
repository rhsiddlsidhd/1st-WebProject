import { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getProducts } from '../api/productsAPI';
import ManageProduct from '../components/ManageProduct';
import CategoryBar from '../components/CategoryBar';

const ManageProducts = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const productCountRef = useRef(null);
  let queryString;

  const { state } = useLocation();
  useEffect(() => {
    if (state) setSelectedCategories(state);
  }, []);

  const handleSelect = (e) => {
    const value = e.target.value;
    setSelected(value);
    setSelectedCategories([...selectedCategories, value]);
  };

  const getProductList = useCallback(async () => {
    const productsData = await getProducts(queryString);
    setProducts(productsData);
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
      </div>
      <CategoryBar
        selectedCategories={selectedCategories}
        handleSelect={handleSelect}
        handleCheckboxChange={handleCheckboxChange}
      />

      <div>
        {products.map((item) => (
          <ManageProduct
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
