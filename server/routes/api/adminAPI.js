// const adminController = require('../../controllers/adminController');
// const { Router } = require('express');
// const router = Router();

// /**
//  * 각 라우터별 데이터 검증하는 미들웨어 체크하기
//  */
// const validate = require('../../middlewares/vaildate');
// const adminValidation = require('../../validation/adminValidation');

// // 사용자 목록 가져오기
// router.get('/users', validate(adminValidation.getUsers), authController.login);

// //로그아웃
// router.get('/logout', authController.logout);

// // 회원가입
// router.post('/join', validate(authValidation.join), authController.join);

// module.exports = router;
