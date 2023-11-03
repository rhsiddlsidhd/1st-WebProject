import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product from './pages/Product';
import Basket from './pages/Basket';
import Category from './pages/Category';
import './css/app.css';
// import styles from './app.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Basket />}></Route>
        <Route path='/product' element={<Product />}></Route>
        <Route path='/category' element={<Category />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
