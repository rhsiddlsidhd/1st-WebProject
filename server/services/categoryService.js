const { Category } = require('../models');
const httpStatus = require('http-status');
const APIError = require('../utils/ApiError');

//카테고리 전체 가져오기
const categoryList = async () => {
  if (!(await Category.find({}))) {
    throw new APIError(httpStatus.NOT_FOUND, 'GET Category list is not exist');
  }
  try {
    return await Category.find({});
  } catch (e) {
    throw new APIError(httpStatus.NOT_FOUND, 'GET Category list is failed');
  }
};

// 특정 카테고리 가져오기
const getCategory = async (categoryParams) => {
  const data = categoryParams;

  try {
    const category = await Category.findById({ _id: data.id }).exec();
    return category;
  } catch (e) {
    throw new APIError(httpStatus.NOT_FOUND, 'Category is not exist.');
  }
};

//카테고리 추가하기
const createCategory = async (categoryBody) => {
  if (
    categoryBody['name'].length < 1 ||
    categoryBody['categoryType'].length < 1
  ) {
    throw new APIError(
      httpStatus.NO_CONTENT,
      'Category data is Inconsistent data'
    );
  }

  try {
    const newCategory = await Category.create(categoryBody);

    return newCategory;
  } catch (e) {
    throw new APIError(httpStatus[500], 'Category create is FAILED.');
  }
};

//카테고리 수정하기
const updateCategory = async (categoryBody) => {
  const data = categoryBody;
  if (data['name'].length < 1 || categoryBody['categoryType'].length < 1) {
    throw new APIError(
      httpStatus.NO_CONTENT,
      'Category data is Inconsistent data'
    );
  }

  try {
    const _id = data._id;
    const parentCategory = data.parentCategory;
    const categoryType = data.categoryType;

    if (!(await Category.findById({ _id }))) {
      throw new APIError(httpStatus.NOT_FOUND, 'Category is not exist');
    }

    const updatedCategory = await Category.updateOne(
      { _id },
      { parentCategory, categoryType }
    ).exec();

    return updatedCategory;
  } catch (e) {
    throw new APIError(httpStatus.NOT_MODIFIED, 'Category update is FAILED.');
  }
};

//카테고리 삭제하기
const deleteCategory = async (categoryParams) => {
  try {
    const data = categoryParams;
    const deleteItem = await Category.findById({ _id: data.id }).exec();

    if (deleteItem === null) {
      throw new APIError(httpStatus.NOT_FOUND, 'Category is not exist.');
    }

    const result = await Category.deleteOne({ _id: data.id });
    return { message: 'Delete category Failed', deleteItem };
  } catch (e) {
    throw new APIError(httpStatus[500], 'Category delete is FAILED.');
  }
};

module.exports = {
  categoryList,
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
};
