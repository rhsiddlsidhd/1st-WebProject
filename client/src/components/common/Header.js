import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import logoImgage from '../../image/logo.png';
import { getBigCategory } from '../../api/categoryAPI';

const Header = () => {
  // 대분류 목록 불러오기
  const [bigCategoryList, setBigCategoryList] = useState([]);

  useEffect(() => {
    refresh();
  }, []);

  const refresh = () => {
    getBigCategory().then((response) => {
      setBigCategoryList(response);
    });
  };

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
            {bigCategoryList.map((category, _id) => (
              <li key={_id}>
                <Link to={`/${category.name}`}>{category.name}</Link>
              </li>
            ))}
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
