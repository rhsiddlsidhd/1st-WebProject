import Checkbox from '../components/Checkbox';
import React, { useState } from 'react';

function List() {
  return (
    <div className='body__div--product-list-content'>
      <div className='div__div--product-list-content-wrap'>
        <div className='body__div--side-filter-menu'>
          <ul>
            <li className='ul__li--shoes-kind-title'>신발 종류</li>
            <ul>
              <li className='ul__li--filter-menu'>런닝화</li>
              <li className='ul__li--filter-menu'>구두</li>
              <li className='ul__li--filter-menu'>스니커즈</li>
            </ul>
          </ul>
          <hr className='div__div--filter-hr' />
          <ul>
            <li className='ul__li--brand-title'>브랜드</li>
            <ul>
              <li className='ul__li--filter-menu'>
                <Checkbox>나이키</Checkbox>
              </li>
              <li className='ul__li--filter-menu'>
                <Checkbox>라코스테</Checkbox>
              </li>
              <li className='ul__li--filter-menu'>
                <Checkbox>아디다스</Checkbox>
              </li>
              <li className='ul__li--filter-menu'>
                <Checkbox>휠라</Checkbox>
              </li>
            </ul>
          </ul>
          <hr className='div__div--filter-hr' />
          <ul>
            <li className='ul__li--brand-title'>성별</li>
            <ul>
              <li className='ul__li--filter-menu'>
                <Checkbox>여성</Checkbox>
              </li>
              <li className='ul__li--filter-menu'>
                <Checkbox>남성</Checkbox>
              </li>
            </ul>
          </ul>
        </div>
        <div>
          <div className='div__div--title-align'>
            <h2 className='div__h2--list-title'>런닝화</h2>
            <ul className='div__ul--align-list'>
              <li>
                <button className='li__button--align'>최신순</button>
              </li>
              <li>
                <button className='li__button--align'>인기순</button>
              </li>
              <li>
                <button className='li__button--align'>낮은 가격순</button>
              </li>
              <li>
                <button className='li__button--align'>높은 가격순</button>
              </li>
            </ul>
          </div>
          {/* 상품목록 리스트 넣기 */}
          <div className='div__div--product-list'></div>
        </div>
      </div>
    </div>
  );
}

export default List;
