// const { Router } = require('express');
// const router = Router();

// /**
//  * 각 라우터별 데이터 검증하는 미들웨어 체크하기
//  */
// const validate = require('../../middlewares/vaildate');
// const useralidation = require('../../validation/userValidation');

// // 일반 사용자 : 사용자 현재 정보 가져오기
// //관리자 : 사용자 리스트 가져오기
// // 미들웨어 : 사용자 어드민 검증 필요
// router.get('/', validate(), userController);

// // 일반 사용자 : 현재 정보 수정
// router.patch(
//   '/:id',
//   validate(categoryValidation.updateCategory),
//   categoryController.updateCategory
// );

// //일반 사용자 : 탈퇴 (삭제)
// router.delete('/:id', validate(useralidation), userController);

// module.exports = router;
