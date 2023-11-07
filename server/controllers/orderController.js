const userService = require('../services/userService');
const APIError = require('../utils/ApiError');

// 주문 등록 하기
exports.postOrder = async (req, res, next) => {
  //   try {
  //     //cookie 의 Token으로 로그인 상태 확인
  //     if (!req.cookies.token) {
  //       throw new APIError(httpStatus[400], 'User Token is not exist.');
  //     }
  //     const user = await userService.getUserInfo(req.params);
  //     res.status(200).json(user);
  //   } catch (e) {
  //     next(e);
  //     res.status(500).json('[ERROR] Get User Info is FAILED');
  //   }
};

// 주문 정보 수정

// 주문 삭제
