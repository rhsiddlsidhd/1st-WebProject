function Userinfo() {
  return (
    <div className='body__div--login-content'>
      <h3 className='body__h3--login-logo'>SINBA_D</h3>
      <form>
        <label for='username' className='form__label--text-hidden'>
          아이디
        </label>
        <input
          type='text'
          className='form__input--user-id'
          placeholder='아이디'
          required
        />
        <br />
        <label for='password' className='form__label--text-hidden'>
          비밀번호
        </label>
        <input
          type='password'
          className='form__input--user-password'
          placeholder='비밀번호'
          required
        />
        <br />
        <label for='email' className='form__label--text-hidden'>
          이메일
        </label>
        <input
          type='email'
          className='form__input--user-email'
          placeholder='이메일'
          required
        />
        <br />
        <input
          type='submit'
          className='form__input--modify-button'
          value='수정하기'
        />
        <button type='button' className='form__input--delete-account-button'>
          탈퇴하기
        </button>
      </form>
    </div>
  );
}

export default Userinfo;
