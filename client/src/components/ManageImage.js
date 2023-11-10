import { useState } from 'react';
const ManageImage = ({ prd }) => {
  const [product, setProduct] = useState(prd);

  return (
    <div>
      <button>이미지추가</button>
    </div>
  );
};
export default ManageImage;
