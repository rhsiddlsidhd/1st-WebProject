import { useState, useEffect, memo } from 'react';
import { getParentCategory } from '../api/categoryAPI';
import { getChildCategory } from '../api/categoryAPI';

const CategoryBar = ({
  selectedCategories,
  handleSelect,
  handleCheckboxChange,
}) => {
  const [parentCategory, setParentCategory] = useState([]);
  const [typeSubCategory, setTypeSubCategort] = useState([]);
  const [womanSubCategory, setWomanSubCategort] = useState([]);
  const [manSubCategory, setManSubCategort] = useState([]);
  const [brandSubCategory, setBrandSubCategort] = useState([]);

  useEffect(() => {
    async function getParentCategories() {
      const responseArr = await getParentCategory();
      const patentCategoryArr = responseArr.map((cate) => ({
        id: cate._id,
        name: cate.name,
      }));
      setParentCategory(patentCategoryArr);
    }
    getParentCategories();
  }, []);

  useEffect(() => {
    for (let cate of parentCategory) {
      async function getChildCategories() {
        const responseArr = await getChildCategory(cate._id);
        const childCategoryArr = responseArr.map((cate) => ({
          id: cate._id,
          name: cate.name,
        }));
        console.log(cate.name);
        if (cate.name === '여성') {
          setWomanSubCategort(childCategoryArr);
        }
        if (cate.name === '남성') {
          setManSubCategort(childCategoryArr);
        }
        if (cate.name === '브랜드') {
          setBrandSubCategort(childCategoryArr);
        }
        if (cate.name === '타입') {
          setTypeSubCategort(childCategoryArr);
        }
      }
      getChildCategories();
    }
  }, [parentCategory]);

  return (
    <div className='CategoryBar'>
      <select onChange={handleSelect}>
        <option value=''>타입을 선택하세요</option>
        {typeSubCategory.map((item, idx) => (
          <option value={item.id} key={item.id}>
            {item.name}
          </option>
        ))}
      </select>

      {[womanSubCategory, manSubCategory, brandSubCategory].map((cate) =>
        cate.map((item) => (
          <div key={item.id}>
            <label>
              <input
                type='checkbox'
                name='womanSubCategory'
                value={item.id}
                onChange={handleCheckboxChange}
                checked={selectedCategories.includes(item.id)}
              />
              {item.name}
            </label>
            <br />
          </div>
        ))
      )}
    </div>
  );
};

export default memo(CategoryBar);
