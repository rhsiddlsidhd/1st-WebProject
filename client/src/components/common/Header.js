import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import logoImgage from "../../image/logo.png";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleMouseEnter = () => {
    setExpanded(true);
  };

  const handleMouseLeave = () => {
    setExpanded(false);
  };

  return (
    <header className={`body__header ${expanded ? "expanded" : ""}`}>
      <div className="header__div--header-wrap">
        <h1 className="header__h1--logo">
          <Link to="/">
            <img src={logoImgage} alt="logo" />
          </Link>
        </h1>
        <nav
          className={`header__nav ${expanded ? "expanded" : ""}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ul className="nav__ul--gnb">
            <li>
              <Link to="/list" className="ul__li--main-menu">
                BRAND
              </Link>
              <ul>
                <li>
                  <Link to="/" className="ul__li--sub-menu">
                    런닝화
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ul__li--sub-menu">
                    스니커즈
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ul__li--sub-menu">
                    샌들
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/list" className="ul__li--main-menu">
                SHOES
              </Link>
              <ul>
                <li>
                  <Link to="/" className="ul__li--sub-menu">
                    나이키
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ul__li--sub-menu">
                    아디다스
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ul__li--sub-menu">
                    컨버스
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ul__li--sub-menu">
                    휠라
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ul__li--sub-menu">
                    라코스테
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/list" className="ul__li--main-menu">
                MAN
              </Link>
              <ul>
                <li>
                  <Link to="/" className="ul__li--sub-menu">
                    나이키
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ul__li--sub-menu">
                    아디다스
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ul__li--sub-menu">
                    컨버스
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ul__li--sub-menu">
                    휠라
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ul__li--sub-menu">
                    라코스테
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/list" className="ul__li--main-menu">
                WOMAN
              </Link>
              <ul>
                <li>
                  <Link to="/" className="ul__li--sub-menu">
                    나이키
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ul__li--sub-menu">
                    아디다스
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ul__li--sub-menu">
                    컨버스
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ul__li--sub-menu">
                    휠라
                  </Link>
                </li>
                <li>
                  <Link to="/" className="ul__li--sub-menu">
                    라코스테
                  </Link>
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
              placeholder="상품을 검색해주세요."
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="form__icon--search-button"
            />
          </form>
          <button>
            <Link to="/login">
              <FontAwesomeIcon
                icon={faUser}
                className="div__button--user-button"
              />
            </Link>
          </button>
          <button>
            <Link to="/cart">
              <FontAwesomeIcon
                icon={faHeart}
                className="div__button--cart-button"
              />
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
