const categoryController = require('../../controllers/categoryController');
const {
  verifyData,
  verifyNewData,
} = require('../../middlewares/categoryMiddleware');
const { Router } = require('express');
const router = Router();
/**
 * 각 라우터별 데이터 검증하는 미들웨어 체크하기
 */

//카테고리 리스트 가져오기
router.get('/', verifyData, categoryController.getCategoryList);

//특정 카테고리 정보 불러오기
router.get('/:id', verifyData, categoryController.getCategory);

//관리자가 카테고리 새로 추가
router.post('/', verifyNewData, categoryController.createCategory);

//카테고리 수정
router.patch('/:id', categoryController.updateCategory);

// 카테고리 삭제
router.delete('/', categoryController.deleteCategory);

module.exports = router;
