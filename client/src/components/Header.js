const Header = () => {
  return (
    <header className="body__header">
      <div className="header__div--header-wrap">
        <h1 className="header__h1--logo">
          <a href="/">SINBA_D</a>
        </h1>
        <nav className="header__nav">
          <ul className="nav__ul--gnb">
            <li>
              <a href="/" className="ul__li--main-menu">
                NEW
              </a>
            </li>
            <li>
              <a href="/" className="ul__li--main-menu">
                BEST
              </a>
            </li>
            <li>
              <a href="/" className="ul__li--main-menu">
                BRAND
              </a>
              <ul>
                <li>
                  <a href="/" className="ul__li--sub-menu">
                    런닝화
                  </a>
                </li>
                <li>
                  <a href="/" className="ul__li--sub-menu">
                    스니커즈
                  </a>
                </li>
                <li>
                  <a href="/" className="ul__li--sub-menu">
                    샌들
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/" className="ul__li--main-menu">
                SHOES
              </a>
              <ul>
                <li>
                  <a href="/" className="ul__li--sub-menu">
                    나이키
                  </a>
                </li>
                <li>
                  <a href="/" className="ul__li--sub-menu">
                    아디다스
                  </a>
                </li>
                <li>
                  <a href="/" className="ul__li--sub-menu">
                    컨버스
                  </a>
                </li>
                <li>
                  <a href="/" className="ul__li--sub-menu">
                    휠라
                  </a>
                </li>
                <li>
                  <a href="/" className="ul__li--sub-menu">
                    라코스테
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className="header__div--icon">
          <form>
            <input
              type="text"
              className="form__input--search-text"
              placeholder="검색하기"
            />
            <button type="submit">
              <i
                className="fa-solid fa-magnifying-glass"
                style={{ color: "#000000" }}
              ></i>
            </button>
          </form>
          <button>
            <i className="fa-regular fa-user" style={{ color: "#000000" }}></i>
          </button>
          <button>
            <i className="fa-regular fa-heart" style={{ color: "#000000" }}></i>
          </button>
          <div className="div__div--login-user-menu">
            <p className="div__p--login-user-title">계정</p>
            <button className="div__button--login-user-info">
              회원정보관리
            </button>
            <button className="div__button--login-user-order">
              주문내역관리
            </button>
            <button className="div__button--login-user-logout">로그아웃</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
