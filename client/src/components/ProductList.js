import { useState, useEffect, useCallback, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { getProducts } from '../api/productsAPI';
import CategoryBar from './CategoryBar';
import Pagination from './Pagination';
import Products from './Products';
import '../css/btn.css';

const ProductList = () => {

  const { listType } = useParams();

  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(false);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [page, setPage] = useState(1);

  const [limit, setLimit] = useState(30);
  const [total, setTotal] = useState(1);

  let queryString;

  const { state } = useLocation();
  useEffect(() => {
    if (state) setSelectedCategories(state);
  }, [state]);

  const getProductList = useCallback(async () => {

    const data = await getProducts(selectedCategories, page);
    const products = data.products;
    const total = data.total;

    const brandList = await getBrands();
    setProducts(products);
    setBrands(brandList);
    setTotal(total);
    updateQueryString();
  }, [selectedCategories, page]);

  useEffect(() => {
    getProductList();
  }, [getProductList]);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    console.log('이벤트의밸류확ㅇ;ㄴ');
    console.log(event.target.value);
    if (event.target.checked) {
      setSelectedCategories([...selectedCategories, value]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((category) => category !== value)
      );
    }
  };

  const updateQueryString = () => {
    let queryString =
      selectedCategories.length > 0
        ? `?` + selectedCategories.map((it) => `category_id=${it}`).join('&')
        : '';
    if (!queryString) {
      queryString += '?';
    } else {
      queryString += '&';
    }
    queryString += page ? `page=${page}` : 'page=1';
    window.history.pushState({}, '', window.location.pathname + queryString);
  };

  const paginate = (pageNumber) => setPage(pageNumber);

  return (
    <div className='body__div--product-list-content'>
      <div className='div__div--product-list-content-wrap'>
        <div className='body__div--side-filter-menu'>
          <CategoryBar
            selectedCategories={selectedCategories}
            handleSelect={handleSelect}
            handleCheckboxChange={handleCheckboxChange}
          />
        </div>
        <div className='div__div--product-list'>
          <h2 className='div__div--shoes-title'>Shoes</h2>
          <p>총 {count}개의 상품이 있습니다.</p>
        </div>
        <div className='div__div--products'>
          <Products products={currentProducts} loading={loading} />
          <Pagination
            setPage={paginate}
            limit={limit}
            total={products.length}
            page={page}
          />
        </div>
      </div>
    </div>
  );
};
export default ProductList;
