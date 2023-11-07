const { Router } = require('express');
const router = Router();

const orderController = require('../../controllers/orderController');

/**
 * 각 라우터별 데이터 검증하는 미들웨어 체크하기
 */
const validate = require('../../middlewares/vaildate');
const orderValidation = require('../../validation/orderValidation');

// // 일반 사용자 : 주문 등록하기
router.post('/', validate(orderValidation.order), orderController.postOrder);

// // 일반 사용자 (탈퇴)
// router.delete(
//   '/:id',
//   validate(userValidation.withdraw),
//   userController.userWithdraw
// );

// // 일반 사용자 : 현재 정보 수정
// router.patch(
//   '/:id',
//   validate(userValidation.updateUserInfo),
//   userController.updateUserInfo
// );

module.exports = router;
