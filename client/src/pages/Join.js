import { useEffect, useState } from 'react';

import { getUser, postUser } from '../api/authAPI';
// import { EmailCheck } from '../components/EmailCheck';

function Join() {
  // 데이터 보내기 변수
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userEmail, setUserEmail] = useState('');

  // 회원가입 post
  const createNewUser = async (e) => {
    const newUser = {
      name: userName,
      password: userPassword,
      email: userEmail,
    };

    await postUser(newUser);
  };

  // 가입하기 버튼 클릭시 실행되는 함수
  // const joinButtonClick = () => {
  //   createNewUser();
  //   EmailCheck(userEmail);
  // };

  return (
    <div className='body__div--login-content'>
      <h3 className='body__h3--login-logo'>SINBA_D</h3>
      <form>
        {/* 이메일 작성 */}
        <label for='username' className='form__label--text-hidden'>
          이메일
        </label>
        <input
          type='email'
          className='form__input--signup-id'
          placeholder='이메일'
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          required
        />
        {console.log(userEmail)}
        <br />
        {/* 비밀번호 작성 */}
        <label for='password' className='form__label--text-hidden'>
          비밀번호
        </label>
        <input
          type='password'
          className='form__input--signup-password'
          placeholder='비밀번호'
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          required
        />
        {console.log(userPassword)}
        <br />
        {/* 비밀번호 재입력 */}
        <label for='confirm-password' className='form__label--text-hidden'>
          비밀번호
        </label>
        <input
          type='password'
          className='form__input--signup-confirm-password'
          placeholder='비밀번호확인'
          required
        />
        <br />
        {/* 이름 작성 */}
        <label for='email' className='form__label--text-hidden'>
          이름
        </label>
        <input
          type='text'
          className='form__input--signup-name'
          placeholder='이름'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        {console.log(userName)}

        <br />
        <input
          type='button'
          className='form__input--signup-completed-button'
          value='가입하기'
          // onClick={joinButtonClick}
        />
      </form>
    </div>
  );
}

export default Join;
