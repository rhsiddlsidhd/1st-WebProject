import { useState, useEffect, memo, useCallback } from 'react';
import { getChildCategory, getBigCategory } from '../api/categoryAPI';
import Checkbox from './CheckBox';

const CategoryBar = ({
  selectedCategories,
  handleSelect,
  handleCheckboxChange,
}) => {
  const [parentCategory, setParentCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  useEffect(() => {
    async function getParentCategories() {
      const responseArr = await getBigCategory();
      console.log('api값확인');
      console.log(responseArr.data);
      const patentCategoryArr = responseArr.data
        .filter((cate) => cate.parentCategory == -1)
        .map((cate) => ({
          id: cate._id,
          name: cate.name,
        }));
      setParentCategory(patentCategoryArr);
    }
    getParentCategories();
  }, []);

  console.log('부모카테고리');
  console.log(parentCategory);

  const getChildCategories = useCallback(
    async (parentCategory) => {
      const subCat = await getChildCategory('654530733cdcd2c2c50af7bb');
      console.log('api2번쨰 확인');
      console.log(subCat);

      const subCategoryWithParent = await parentCategory.map(
        (eachParentCategory) =>
          getChildCategory(eachParentCategory.id).then((data) =>
            data.map((cate) => ({
              type: eachParentCategory.name,
              name: cate.name,
              id: cate._id,
            }))
          )
      );
      const res = await Promise.all(subCategoryWithParent);
      console.log('차일드카테고리들확인');
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
      {/* <select onChange={handleSelect}>
        <option value=''>타입을 선택하세요</option>
        {typeSubCategory.map((item) => (
          <option value={item.id} key={item.id}>
            {item.name}
          </option>
        ))}
      </select> */}

      {subCategory.map((subArr, idx) => (
        <Checkbox
          key={idx}
          category={subArr}
          handleCheckboxChange={handleCheckboxChange}
          selectedCategories={selectedCategories}
        />
      ))}
    </div>
  );
};

export default memo(CategoryBar);
