const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  //   res.send('i am category');
  res.json({ brand: 'nike' });
});

router.post('/', async (req, res, next) => {
  //   res.send('i am category');
  const data = await req.body;

  /**
   * 몽고디비에 저장할게ㅔㅔㅔㅔㅔ
   *
   */

  console.log(data);

  res.json('category Post Success');
});

module.exports = router;
