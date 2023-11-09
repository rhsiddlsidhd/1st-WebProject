import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='body__div--login-content'>
      <h3 className='body__h3--login-logo'>SINBA_D</h3>
      <form>
        <label for='username' className='form__label--text-hidden'>
          이메일
        </label>
        <input
          type='email'
          className='form__input--login-id'
          placeholder='이메일'
          required
        />
        <br />
        <label for='password' className='form__label--text-hidden'>
          비밀번호
        </label>
        <input
          type='password'
          className='form__input--login-password'
          placeholder='비밀번호'
          required
        />
        <br />
        <input
          type='submit'
          className='form__input--login-button'
          value='로그인'
        />
        <Link to='/signup'>
          <button type='button' className='form__input--sign-up-button'>
            회원가입
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
