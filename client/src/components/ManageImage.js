import { useState } from 'react';
const ManageImage = ({ prd }) => {
  const [product, setProduct] = useState(prd);

  return (
    <div>
      <div>
        메인이미지
        <ul>
          <li>1번 이미지</li>
        </ul>
      </div>
      <div>상세이미지</div>
    </div>
  );
};
export default ManageImage;
