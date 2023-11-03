import { Link } from 'react-router-dom';
import { useState } from 'react';
import { getCategory, postCategory } from '../api/categoryAPI';

function Basket() {
    const [categoryName, setCategoryName] = useState('');
    const [caoryTtegpes, setCategoryTpe] = useState('');
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
        <div className='Category'>
            <h3>카테고리 관리</h3>
            {/* 카테고리 목록 */}
            <div>
                <p>카테고리 목록</p>
                <div>
                  {/* 카테고리 데이터를 넣을 부분 */}
                    <div>{}</div><button>삭제</button>
                    <div>{}</div><button>삭제</button>
                    <div>{}</div><button>삭제</button>

                </div>
            </div>
            {/* 카테고리 등록/수정 */}
            <div>
                <form>
                    <label>카테고리 명</label>
                    <input type='text' value={categoryName} onChange={setCategoryName} />;
                    <label>카테고리 분류</label>
                    <select value={categoryTypes} onChange={setCategoryType}>
                        <option value="main" >대분류</option>
                        <option value="sub">중분류</option>
                    </select>
                    <select value={parent} onChange={setParent}>
                        <option value="">brand</option>
                        <option value="">shoes</option>
                    </select>
                    <button type='submit'>등록</button>
                </form>
            </div>
        </div>
    );
    
};

export default Basket;

