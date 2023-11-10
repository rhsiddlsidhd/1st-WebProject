import { useState, useEffect, memo, useCallback } from 'react';
import { getChildCategory, getBigCategory } from '../api/categoryAPI';
import Checkbox from './CheckBox';

const CategoryBar = ({
  selectedCategories,
  setSelectedCategories,
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
          getChildCategory(eachParentCategory.id).then((data) => ({
            type: eachParentCategory.name,
            data,
          }))
      );
      const res = await Promise.all(subCategoryWithParent);
      setSubCategory(...subCategory, res);

      const womanId = parentCategory
        .filter((parentCategory) => parentCategory.name === '여성')
        .map((parentCategory) => parentCategory.id);
      const manId = parentCategory
        .filter((parentCategory) => parentCategory.name === '남성')
        .map((parentCategory) => parentCategory.id);
      if (listType === 'woman')
        setSelectedCategories(...selectedCategories, womanId);
      if (listType === 'man')
        setSelectedCategories(...selectedCategories, manId);
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
      {getSpecificCateory(subCategory).map((item) => (
        <Checkbox
          type={item.type}
          category={item.data}
          handleCheckboxChange={handleCheckboxChange}
          selectedCategories={selectedCategories}
        />
      ))}
    </div>
  );
};

export default memo(CategoryBar);
