import { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getProducts } from '../api/productsAPI';
import ManageProduct from '../components/ManageProduct';
import CartegoryBar from '../components/CartegoryBar';
import Pagination from '../components/Pagination';

const ManageProducts = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const productCountRef = useRef(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(1);
  const offset = (page - 1) * limit;
  const currentProducts = products.slice(offset, offset + limit);
  const [count, setCount] = useState(0);

  const paginate = (pageNumber) => setPage(pageNumber);
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
    const productsData = await getProducts(queryString);
    setProducts(productsData);
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
    queryString +=
      selectedCategories.length > 0
        ? `?` + selectedCategories.map((it) => `category_id=${it}`).join('&')
        : '';
    // queryString += '&page=' + page;
    window.history.pushState({}, '', window.location.pathname + queryString);
  };

  // const updateQueryString = () => {
  //   const queryObject = {
  //     page: page,
  //   };
  //   if (selectedCategories) {
  //     queryObject.category_id = selectedCategories;
  //   }
  //   console.log(queryObject)
  //   const query = queryString.stringify(queryObject);

  //   window.history.pushState(null, '', `?${query}`);
  // };

  useEffect(() => {
    updateQueryString();
  }, [selectedCategories, page]);

  const handleRemove = (item) => {
    if (
      window.confirm(
        `${item.title}(${item.model_number})제품을 삭제하시겠습니까?`
      )
    ) {
      getProductList();
    }
  };
  const handleEdit = (item, categories) => {
    navigate(`/productedit/${item.id}`, {
      state: { categories: categories, item: item },
    });
  };

  return (
    <div className='ManageProducts'>
      <h2>List</h2>
      <p>관리자 제품관리 리스트입니다</p>
      <h4>{count}개의 상품이 있습니다</h4>
      <div>
        <button
          onClick={() => navigate('/productnew', { state: selectedCategories })}
        >
          상품추가
        </button>
      </div>
      <CartegoryBar
        selectedCategories={selectedCategories}
        handleSelect={handleSelect}
        handleCheckboxChange={handleCheckboxChange}
      />

      <div>
        <ManageProduct
          // key={item.product_id}
          products={currentProducts}
          categories={selectedCategories}
          getProductList={getProductList}
          handleEdit={handleEdit}
          handleRemove={handleRemove}
        />
      </div>
      <Pagination
        setPage={paginate}
        limit={limit}
        total={products.length}
        page={page}
      />
    </div>
  );
};

export default ManageProducts;
