import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product from './pages/Product';
import Basket from './pages/Basket';
import './css/app.css';
// import styles from './app.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Basket />}></Route>
        <Route path='/product' element={<Product />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

/**
 * 링크 넘기는거
 * useEffect
 * 포스트맨 도큐먼트를 보고 어떻게 코드를 작성하나?
 */
