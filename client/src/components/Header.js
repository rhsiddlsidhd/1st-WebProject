import imageSrc from "../images/shinba_d.png";
import "../css/App.css";
import React, { useState } from "react";

const Header = () => {
  const [brandView, setBrandView] = useState(false);
  const [shoesView, setShoesView] = useState(false);
  const [userView, setUserView] = useState(false);

  const toggleBrnadMenu = () => {
    setBrandView(!brandView);
  };

  const toggleShoesMenu = () => {
    setShoesView(!shoesView);
  };

  const toggleUserMenu = () => {
    setUserView(!userView);
  };

  return (
    <>
      <header>
        <div className="header__container">
          <div className="header__container-items">
            <div className="header__container-items-logo">
              <img src={imageSrc} alt="logo" />
            </div>
            <nav className="header__container-items-nav">
              <div>NEW</div>
              <div>BEST</div>
              <div>
                <div
                  className="header__container-items-nav-brand"
                  onClick={toggleBrnadMenu}
                >
                  BRAND
                </div>
                {brandView && (
                  <ul className="header__container-items-nav-brand__dropdown">
                    <li>나이키</li>
                    <li>아디다스</li>
                    <li>컨버스</li>
                    <li>휠라</li>
                    <li>라코스테</li>
                  </ul>
                )}
              </div>
              <div>
                <div
                  className="header__container-items-nav-shoes"
                  onClick={toggleShoesMenu}
                >
                  SHOES
                </div>
                {shoesView && (
                  <ul className="header__container-items-nav-shoes__dropdown">
                    <li>런닝화</li>
                    <li>스니커즈</li>
                    <li>샌들</li>
                  </ul>
                )}
              </div>
            </nav>
          </div>
          <div className="header__container-icons">
            <div className="header__container-icons-search">
              <input type="text" placeholder="" />
              <i class="fa-solid fa-magnifying-glass fa-2xs"></i>
            </div>
            <div
              className="header__container-icons-user"
              onClick={toggleUserMenu}
            >
              <i
                className="fa-regular fa-user"
                style={{ color: "#000000" }}
              ></i>
              {userView && (
                <div className="header__container-icons-user-dropdown">
                  <div className="header__container-icons-user-info">계정</div>
                  <ul className="header__container-icons-user-info-dropdown">
                    <li>회원정보관리</li>
                    <li>주문내역관리</li>
                    <li>로그아웃</li>
                  </ul>
                </div>
              )}
            </div>
            <div>
              <i
                className="fa-regular fa-heart"
                style={{ color: "#000000" }}
              ></i>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
