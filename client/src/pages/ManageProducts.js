import { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getProducts, getBrands, deleteProduct } from '../api/productsAPI';
import ManageProduct from '../components/ManageProduct';
import CategoryBar from '../components/CategoryBar';
import Pagination from '../components/Pagination';

const ManageProducts = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selected, setSelected] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(30);
  const [total, setTotal] = useState(1);
  let queryString;

  const paginate = (pageNumber) => {
    setPage(pageNumber);
  };

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

  // useEffect(() => {
  //   updateQueryString();
  // }, [selectedCategories, page]);

  const handleRemove = async (item) => {
    if (
      window.confirm(
        `${item.title}(${item.model_number})제품을 삭제하시겠습니까?`
      )
    ) {
      await deleteProduct(item._id);
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
      <h4>{total}개의 상품이 있습니다</h4>
      <div>
        <button
          onClick={() =>
            navigate('/productnew', {
              state: {
                categories: selectedCategories,
                brands: brands,
              },
            })
          }
        >
          상품추가
        </button>
      </div>
      <CategoryBar
        selectedCategories={selectedCategories}
        handleSelect={handleSelect}
        handleCheckboxChange={handleCheckboxChange}
      />

      <div>
        <ManageProduct
          products={products}
          categories={selectedCategories}
          getProductList={getProductList}
          handleEdit={handleEdit}
          handleRemove={handleRemove}
          brands={brands}
        />
      </div>
      <Pagination setPage={paginate} limit={limit} total={total} page={page} />
    </div>
  );
};

export default ManageProducts;
