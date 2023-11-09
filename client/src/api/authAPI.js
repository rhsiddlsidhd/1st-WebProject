import axios from 'axios';

// 유저정보 목록 불러오기
export const getUser = async () => {
  try {
    //   const response = await axios.get('localhost:3000/api/auth/login');
    const data = [
      {
        name: '박영희',
        email: 'helloworld@test.com',
        password: '1q2w3e4r',
      },
      {
        name: '김철수',
        email: 'chulsoo@test.com',
        password: 'asdqwe1234',
      },
      {
        name: '신짱구',
        email: 'shinjjgooo@test.com',
        password: 'dsdfqwer1233',
      },
    ];
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

// 유저정보 보내기 (회원가입)
export const postUser = async ({ name, password, email }) => {
  try {
    const newItem = { name, password, email };
    const response = await axios.post('localhost:3000/api/auth/join', newItem);

    return response;
  } catch (err) {
    throw new Error(err);
  }
};
