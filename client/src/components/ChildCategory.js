import { useEffect, useState } from 'react';
import { getChildCategory, deleteCategory } from '../api/categoryAPI';

function ChildCategory({ parentCategoryId }) {
  const [childCatgory, setChildCategory] = useState([]);

  const refreshChild = () => {
    getChildCategory(parentCategoryId).then((response) => {
      setChildCategory(response);
    });
  };

  useEffect(() => {
    refreshChild();
  }, []);

  // 카테고리 삭제 delete
  const deleteData = async (e) => {
    const deleteId = {
      _id: e.target.parentElement.id,
    };
    await deleteCategory(deleteId);
    refreshChild();
  };

  return childCatgory.map((item) => {
    return (
      <div id={item['_id']} className='div__div--category-list-data'>
        <div className='div__div--blank'>*ㄴ</div>
        <p className='div__p--category-big-name-data'>{item['name']}</p>
        <button
          type='submit'
          className='div__button--delete-button'
          onClick={deleteData}
        >
          삭제
        </button>
      </div>
    );
  });
}

export default ChildCategory;
