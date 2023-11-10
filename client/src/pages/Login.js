import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getUser } from '../api/authAPI';

function Login() {
  const navigate = useNavigate();

  // 입력된 유저 아이디, 비밀번호
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');

  // 저장된 유저 아이디, 비밀번호 배열
  const [userIdList, setUserIdList] = useState([]);
  const [userPasswordList, setUserPasswordList] = useState([]);

  // 로그인 버튼 클릭시 실행되는 함수
  const loginButtonClick = () => {
    if (
      doubleCheckId(userId)
      // && doubleCheckPassword(userPassword)
    ) {
      alert('로그인에 성공하였습니다.');
      navigate('/');
    }
  };

  // 유저 정보 Id(email) get
  useEffect(() => {
    getUser()
      .then((data) => {
        setUserIdList(data.id); // 사용자들의 아이디를 불러옴
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // 유저 정보 Id 존재 여부 확인
  const doubleCheckId = (userIdList, userId) => {
    if (userIdList.includes(userId)) {
      console.log({ userId });
    } else {
      alert('존재하지 않는 아이디입니다.');
    }
  };
  console.log();

  // // 유저 정보 password get
  useEffect(() => {
    getUser()
      .then((data) => {
        setUserPasswordList(data.password);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // const doubleCheckPassword = (userPassword) => {

  // };

  return (
    <div className='body__div--login-content'>
      <h3 className='body__h3--login-logo'>SINBA_D</h3>
      <form>
        <label htmlFor='username' className='form__label--text-hidden'>
          이메일
        </label>
        <input
          type='email'
          className='form__input--login-id'
          placeholder='이메일'
          required
          onChange={(e) => setUserId(e.target.value)}
        />
        <br />
        <label htmlFor='password' className='form__label--text-hidden'>
          비밀번호
        </label>
        <input
          type='password'
          className='form__input--login-password'
          placeholder='비밀번호'
          required
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <br />
        <input
          type='submit'
          className='form__input--login-button'
          value='로그인'
          onClick={loginButtonClick}
        />
        <Link to='/auth/join'>
          <button type='button' className='form__input--sign-up-button'>
            회원가입
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
