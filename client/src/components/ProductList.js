import { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getProducts } from '../api/productsAPI';
import ManageProduct from './ManageProduct';
import CategoryBar from './CategoryBar';
import Products from './Products';
import Pagination from './Pagination';

const ProductList = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(16);
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
    setLoading(true);
    const productsData = await getProducts(queryString);
    setProducts(productsData);
    setLoading(false);
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

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='ManageProducts'>
      <h2>List</h2>
      <p>상품 리스트입니다</p>
      <h4 ref={productCountRef}></h4>
      <CategoryBar
        selectedCategories={selectedCategories}
        handleSelect={handleSelect}
        handleCheckboxChange={handleCheckboxChange}
      />

      <div>
        <Products products={currentProducts} loading={loading} />
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={products.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};
export default ProductList;
