import { useState, useEffect, memo, useCallback } from 'react';
import { getChildCategory, getBigCategory } from '../api/categoryAPI';
import Checkbox from './CheckBox';

const CategoryBar = ({
  selectedCategories,
  handleSelect,
  handleCheckboxChange,
  listType,
}) => {
  const [parentCategory, setParentCategory] = useState([]);
  const [typeSubCategory, setTypeSubCategort] = useState([]);
  const [womanSubCategory, setWomanSubCategort] = useState([]);
  const [manSubCategory, setManSubCategort] = useState([]);
  const [brandSubCategory, setBrandSubCategort] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  useEffect(() => {
    async function getParentCategories() {
      const responseArr = await getBigCategory();
      console.log('대분류확인');
      console.log(responseArr);
      const patentCategoryArr = responseArr.map((cate) => ({
        id: cate._id, //12345
        name: cate.name, //타입, 브랜드, 여성, 남성
      }));
      setParentCategory(patentCategoryArr);
      console.log('parentCategory');
      console.log(parentCategory);
    }
    getParentCategories();
  }, []);

  const getChildCategories = useCallback(
    async (parentCategory) => {
      // const test = await getChildCategory('654c6dec0a1b315fa221d0a6');
      // console.log('소분류 테스트');
      // console.log(test);

      const subCategoryWithParent = await parentCategory.map(
        (eachParentCategory) =>
          getChildCategory(eachParentCategory.id).then((data) => ({
            type: eachParentCategory.name,
            data,
          }))
      );
      const res = await Promise.all(subCategoryWithParent);
      setSubCategory(...subCategory, res);
    },
    [parentCategory]
  );

  useEffect(() => {
    getChildCategories(parentCategory);
  }, [getChildCategories]);

  subCategory.map((item) => console.log(item.data));

  const getSpecificCateory = (allSubCategory) => {
    console.log(allSubCategory);
    if (listType === 'woman')
      return allSubCategory.filter(
        (cate) => cate.type === '여성' || cate.type === '브랜드'
      );
    if (listType === 'man')
      return allSubCategory.filter(
        (cate) => cate.type === '남성' || cate.type === '브랜드'
      );
    if (listType === 'all')
      return allSubCategory.filter(
        (cate) => cate.type === '타입' || cate.type === '브랜드'
      );
    else return allSubCategory;
  };

  return (
    <div className='CategoryBar'>
      {/* <select onChange={handleSelect}>
        <option value=''>타입을 선택하세요</option>
        {typeSubCategory.map((item, idx) => (
          <option value={item.id} key={item.id}>
            {item.name}
          </option>
        ))}
      </select> */}

      {getSpecificCateory(subCategory).map((item) => (
        <Checkbox
          type={item.type}
          category={item.data}
          handleCheckboxChange={handleCheckboxChange}
          selectedCategories={selectedCategories}
        />
      ))}
      {/* {subCategory.map((item) => (
        <Checkbox
          type={item.type}
          category={item.data}
          handleCheckboxChange={handleCheckboxChange}
          selectedCategories={selectedCategories}
        />
      ))} */}
    </div>
  );
};

export default memo(CategoryBar);
