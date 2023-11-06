import axios from 'axios';

// 카테고리 목록 불러오기
export const getCategory = async () => {
    try {
        const response = await axios.get( 'http://localhost:3000/api/category' )
        return response.data;
    } catch (err) {
        throw new Error(err);
    }
};


// 카테고리 보내기
export const postCategory = async ({ name, brand, gender, type }) => {
    try {
        const newItem = { name, brand, gender, type };
        const response = await axios.post( 'http://localhost:3000/api/category', newItem );

        return response.data;
    }   catch(err) {
        throw new Error(err);
    }
};


