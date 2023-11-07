import { useState, useEffect, memo, useCallback } from 'react';
import { getParentCategory } from '../api/categoryAPI';
import { getChildCategory } from '../api/categoryAPI';
import Checkbox from './CheckBox';

const CategoryBar = ({
  selectedCategories,
  handleSelect,
  handleCheckboxChange,
}) => {
  const [parentCategory, setParentCategory] = useState([]);
  const [typeSubCategory, setTypeSubCategort] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

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

  const getChildCategories = useCallback(
    async (parentCategory) => {
      const subCategoryWithParent = await parentCategory.map(
        (eachParentCategory) =>
          getChildCategory(eachParentCategory.id).then(
            (data) => ({ data: data, type: eachParentCategory.name })
            // data.map((cate) => ({
            //   type: eachParentCategory.name,
            //   name: cate.name,
            //   id: cate._id,
            // }))
          )
      );
      const res = await Promise.all(subCategoryWithParent);
      console.log('res');
      console.log(res);
      setSubCategory(res);
    },
    [parentCategory]
  );

  useEffect(() => {
    getChildCategories(parentCategory);
  }, [getChildCategories]);

  console.log('subCategory');
  console.log(subCategory);

  return (
    <div className='CategoryBar'>
      <select onChange={handleSelect}>
        <option value=''>타입을 선택하세요</option>
        {typeSubCategory.map((item) => (
          <option value={item.id} key={item.id}>
            {item.name}
          </option>
        ))}
      </select>

      {subCategory.map((subArr) => (
        <Checkbox
          // key={idx}
          category={subArr}
          handleCheckboxChange={handleCheckboxChange}
          selectedCategories={selectedCategories}
        />
      ))}
    </div>
  );
};

export default memo(CategoryBar);
