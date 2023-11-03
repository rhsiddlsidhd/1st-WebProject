const Joi = require('joi');

// 카테고리 추가 시 검증할 데이터
const createCategory = {
  body: Joi.object().keys({
    name: Joi.string().min(1).required(),
    parentCategory: Joi.string(),
    categoryType: Joi.string().min(1).required(),
  }),
};

// 특정 카테고리 불러올 시 검증할 데이터
// TODO : db에 아이디가 있는지 확인햐는 것 추가해야함
const getCategory = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

// 카테고리 수정 시 검증할 데이터
// TODO : db에 아이디가 있는지 확인햐는 것 추가해야함
const updateCategory = {
  body: Joi.object().keys({
    id: Joi.string().min(1).required(),
    name: Joi.string().min(1).required(),
    parentCategory: Joi.string(),
    categoryType: Joi.string().min(1).required(),
  }),
};

// 카테고리 삭제 시 검증할 데이터
// TODO : db에 아이디가 있는지 확인햐는 것 추가해야함
const deleteCategory = {
  body: Joi.object().keys({
    id: Joi.string().min(1).required(),
  }),
};

module.exports = {
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
};
