import axios from 'axios';

// 유저정보 목록 불러오기 (로그인, 회원가입 중복 확인)
export const getUser = async ({ email, password }) => {
  try {
    const getItem = { id: email, password };
    const response = await axios.get('/api/auth/login', getItem);
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};

// 유저정보 보내기 (회원가입)
export const postUser = async ({ name, password, email }) => {
  try {
    const newItem = { name, password, email };
    const response = await axios.post('/api/auth/join', newItem);
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};

const signIn = async () => {
  getUser({ email: userId, password: userPassword }).then((data) => {
    doubleCheckId(data);
  });
};

useEffect(() => {
  getUser({ email: userId, password: userPassword })
    .then((data) => {
      doubleCheckId(data);
    })
    .catch((error) => {
      console.error(error);
    });
}, []);
