import { useState, useEffect, useCallback, useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getBrands, getProducts } from '../api/productsAPI';
import CategoryBar from './CategoryBar';
import Pagination from './Pagination';
import Products from './Products';
import '../css/btn.css';

const ProductList = () => {
  const { listType } = useParams();

  console.log('리스트카테고리확인');
  console.log(listType);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState('');
  const [brands, setBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(16);
  const offset = (page - 1) * limit;
  const [count, setCount] = useState(0);

  let queryString;

  const { state } = useLocation();
  useEffect(() => {
    if (state) setSelectedCategories(state);
  }, [state]);

  const handleSelect = (e) => {
    const value = e.target.value;
    setSelected(value);
    setSelectedCategories([...selectedCategories, value]);
  };

  const getProductList = useCallback(async () => {
    setLoading(true);
    const productsData = await getProducts(queryString);
    const brandList = await getBrands();
    setProducts(productsData);
    setBrands(brandList);
    setLoading(false);
    setCount(productsData.length);
  }, [queryString]);

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

  const currentProducts = products.slice(offset, offset + limit);

  const paginate = (pageNumber) => setPage(pageNumber);

  return (
    <div className='ManageProducts'>
      <h2>List</h2>
      <h4>{count}개의 상품이 있습니다</h4>

      <CategoryBar
        selectedCategories={selectedCategories}
        handleSelect={handleSelect}
        handleCheckboxChange={handleCheckboxChange}
        listType={listType}
      />

      <div>
        <Products
          products={currentProducts}
          loading={loading}
          brands={brands}
        />
        <Pagination
          setPage={paginate}
          limit={limit}
          total={products.length}
          page={page}
        />
      </div>
      <div>{listType}페이지 입니다</div>
    </div>
  );
};
export default ProductList;
