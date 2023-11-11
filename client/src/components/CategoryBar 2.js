import { useState, useEffect, memo, useCallback } from "react";
import { getChildCategory, getBigCategory } from "../api/categoryAPI";
import Checkbox from "./CheckBox";

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
  const [subCategory, setSubCategory] = useState([]);

  useEffect(() => {
    async function getParentCategories() {
      const responseArr = await getBigCategory();
      const patentCategoryArr = responseArr.map((cate) => ({
        id: cate._id, //12345
        name: cate.name, //타입, 브랜드, 여성, 남성
      }));
      setParentCategory(patentCategoryArr);
    }
    getParentCategories();
  }, []);

  // useEffect(() => {
  //   for (let cate of parentCategory) {
  //     async function getChildCategories() {
  //       const responseArr = await getChildCategory(cate._id);
  //       const childCategoryArr = responseArr.map((cate) => ({
  //         id: cate._id,
  //         name: cate.name,
  //       }));
  //       console.log(cate.name);
  //       if (cate.name === '여성') {
  //         setWomanSubCategort(childCategoryArr);
  //       }
  //       if (cate.name === '남성') {
  //         setManSubCategort(childCategoryArr);
  //       }
  //       if (cate.name === '브랜드') {
  //         setBrandSubCategort(childCategoryArr);
  //       }
  //       if (cate.name === '타입') {
  //         setTypeSubCategort(childCategoryArr);
  //       }
  //     }
  //     getChildCategories();
  //   }
  // }, [parentCategory]);

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
    },
    [parentCategory]
  );

  useEffect(() => {
    getChildCategories(parentCategory);
  }, [getChildCategories]);

  subCategory.map((item) => console.log(item.data));

  return (
    <div className="CategoryBar">
      <select onChange={handleSelect}>
        <option value="">타입을 선택하세요</option>
        {typeSubCategory.map((item, idx) => (
          <option value={item.id} key={item.id}>
            {item.name}
          </option>
        ))}
      </select>

      {subCategory.map((item) => (
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
