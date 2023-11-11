import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import logoImgage from '../../image/logo.png';

const Header = () => {
  return (
    <header className='body__header'>
      <div className='header__div--header-wrap'>
        <h1 className='header__h1--logo'>
          <Link to='/'>
            <img src={logoImgage} alt='logo' />
          </Link>
        </h1>
        <nav className='header__nav'>
          <ul className='nav__ul--gnb'>
            <li className='nav__ul--gnb-list'>
              <Link to='/plist/all'>SHOES</Link>
            </li>
            <li className='nav__ul--gnb-list'>
              <Link to='/plist/man?category_id=654d9b796935839734182b33&page=1'>
                MAN
              </Link>
            </li>
            <li className='nav__ul--gnb-list'>
              <Link to='/plist/woman?category_id=654d9b7e6935839734182b3c&page=1'>
                WOMAN
              </Link>
            </li>
          </ul>
        </nav>
        <div className='header__div--icon'>
          <button>
            <Link to='/auth/login'>
              <FontAwesomeIcon
                icon={faUser}
                className='div__button--user-button'
              />
            </Link>
          </button>
          <button>
            <Link to='/cart'>
              <FontAwesomeIcon
                icon={faHeart}
                className='div__button--cart-button'
              />
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
