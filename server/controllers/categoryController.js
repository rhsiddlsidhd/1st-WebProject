const categoryService = require('../services/categoryService');

//카테고리 리스트
exports.getCategoryList = async (req, res, next) => {
  //   TODO: req.query 부분 수정 필요
  const data = await categoryService.categoryList();

  res.json(data);
};

// 특정 카테고리 정보 불러오기
exports.getCategory = async (req, res) => {
  //   TODO: req.query 부분 수정 필요
  const data = await categoryService.getCategory(req.params);

  res.json(data);
};

//카테고리 생성
exports.createCategory = async (req, res, next) => {
  const data = await categoryService.createCategory(req.body);

  res.status(201).json(data);
};

//카테고리 수정
exports.updateCategory = async (req, res, next) => {
  const data = await categoryService.updateCategory(req.body);
  res.json(data);
};

//카테고리 삭제
exports.deleteCategory = async (req, res, next) => {
  const data = await categoryService.deleteCategory(req.params);
  res.json(data);
};
