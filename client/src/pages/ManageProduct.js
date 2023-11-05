import { useParams } from 'react-router-dom';

const ManageProduct = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Product</h2>
      <p>이곳은 상품상세</p>
    </div>
  );
};

export default ManageProduct;
