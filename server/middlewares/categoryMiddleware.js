/**
 * 여기서 미들웨어를 불러서 에러처리까지 해야함
 * 에러처리는 여기서
 */

const verifyData = async (req, res, next) => {
  const { id } = await req.params;
  //   const name = req.query;

  console.log('링크 파람 값 : ', id);
  //   console.log('링크 쿼리 값 : ', name);
  console.log('this is category check middleware');
  next();
};

//새로 추가하는 카테고리 데이터 검증
/**
 * body :
 */
const verifyNewData = async (req, res, next) => {
  console.log('this is newcategory check middleware');
  const { name, parentCategory, categoryType } = await req.body;

  if (name.length < 1 || categoryType.length < 1) {
    throw new Error('카테고리 이름 혹은 카테고리 타입 값이 없습니다.');
    return;
  }

  next();
};

module.exports = { verifyData, verifyNewData };
