import { Link } from 'react-router-dom';
import { useState } from 'react';
import { getCategory, postCategory } from '../api/categoryAPI';

function Basket() {
    const [categoryName, setCategoryName] = useState('');
    const [categoryTyepes, setCategoryTpe] = useState('');
    const [parent, setParent] = useState('');
  


    const createNewData = (e) => {
        e.preventDefault();

        const bigCategory = {
            name: categoryName,
            categoryType: categoryTypes,
        };
      
        const smallCategory = {
            name: categoryName,
            parentCategory: parent,
            categoryType: categoryTypes,
        };
        console.log(createCategroy(bigCategory));
    };


    return (
    <div className='body__div--category'>
        <h3 className="div__h3-category-title">카테고리 관리</h3>
        <div className='body__div--category-wrap'>  
            {/* 카테고리 목록 */}
            <div className="div__div--category-list">
                <p className="div__div--category-list-title">카테고리 목록</p>
                <div className="div__div--category-list-data-box">
                {/* 카테고리 데이터를 넣을 부분 */}
                    <div className="div__div--category-list-data">
                        <p>브랜드</p>
                        <button>삭제</button>
                    </div>
                    <div className="div__div--category-list-data">
                        <p>나이키</p>
                        <button>삭제</button>
                    </div>
                    <div className="div__div--category-list-data">
                        <p>아디다스</p>
                        <button>삭제</button>
                    </div>
                    <button className="div__button--category-add-button">추가</button>
                </div>
            </div>
            {/* 카테고리 등록/수정 */}
            <div className="div__div--category-info">
                <form className="div__form--category-form">
                    <div className="form__div--category-info-gap">
                        <label className="form_label--category-label">카테고리 명</label>
                        <input type='text' value={categoryName} onChange={setCategoryName}  className="form__div--category-name" />
                    </div>
                    <div className="form__div--category-info-gap">
                        <label className="form_label--category-label">카테고리 분류</label>
                        <select value={categoryTypes} onChange={setCategoryType} className="form__div--category-select">
                            <option value="main" >대분류</option>
                            <option value="sub">중분류</option>
                        </select>
                    </div>
                    <div className="form__div--category-info-gap">
                        <label className="form_label--category-label">상위 카테고리</label>
                        <select value={parent} onChange={setParent}  className="form__div--category-main-div">
                            <option value="brand">brand</option>
                            <option value="">shoes</option>
                        </select>
                    </div>
                    <button type='button'  className="form__button--category-button">등록</button>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Basket;

