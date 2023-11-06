const { Category } = require('../models');
//카테고리 전체 가져오기
const categoryList = async () => {
  return await Category.find({});
};

// 특정 카테고리 가져오기
const getCategory = async (categoryParams) => {
  const data = categoryParams;
  const category = await Category.findById({ _id: data.id }).exec();

  return category;
};

//카테고리 추가하기
const createCategory = async (categoryBody) => {
  const newCategory = await Category.create(categoryBody);

  return newCategory;
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
  const data = categoryParams;
  const deleteItem = await Category.findById({ _id: data.id }).exec();

  if (deleteItem !== null) {
    const result = await Category.deleteOne({ _id: data.id });
    return { message: 'Delete category Success', deleteItem, result };
  }

  return { message: 'Delete category Failed', deleteItem };
};

module.exports = {
  categoryList,
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
};
