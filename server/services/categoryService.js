// const Category = req '../models';

//카테고리 전체 가져오기
const categoryList = async () => {
  const data = [
    {
      name: '브랜드',
      parentCategory: '',
      categoryType: '대분류',
    },
    {
      name: '나이키',
      parentCategory: '브랜드카테고리id',
      categoryType: '소분류',
    },
  ];

  return data;
};

// 특정 카테고리 가져오기
const getCategory = async (categoryParams) => {
  const categoryId = categoryParams;
  //DB에서 카테고리 아이디 가져올거임

  // 가져온 정보 예시
  const data = {
    name: '브랜드',
    parentCategory: '',
    categoryType: '대분류',
  };

  return data;
};

//카테고리 추가하기
const createCategory = async (categoryBody) => {
  const data = categoryBody;

  return { message: 'create category Success', data };
};

//카테고리 수정하기
const updateCategory = async (categoryBody) => {
  const data = categoryBody;
  // TODO DB에서 데이터 수정하기

  return { message: 'Update category Success', data };
};

//카테고리 삭제하기
const deleteCategory = async (categoryParams) => {
  // TODO DB에서 데이터 가져온 후 삭제하기
  const data = {
    id: categoryParams.id,
    name: '스니커즈',
    parentCategory: '',
    categoryType: '소분류',
  };

  return { message: 'Delete category Success', data };
};

module.exports = {
  categoryList,
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
};
