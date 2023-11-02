const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

// API 기능들을 불러올거야
const testAPI = require('./testAPI');
const categoryAPI = require('./category');

app.use(express.json());
app.use(cors());

app.use('/', testAPI);
app.use('/api/category', categoryAPI);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
