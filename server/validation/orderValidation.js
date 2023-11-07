const Joi = require('joi');

// 사용자 주문 등록 시 검증 데이터
const order = {
  body: Joi.object()
    .keys({
      id: Joi.string().min(1).required(),
      items: Joi.array().min(1).required,
      address: Joi.string().min(1).required(),
      date: Joi.string().min(1).required(),
    })
    .unknown(false),
};

module.exports = {
  order,
};
