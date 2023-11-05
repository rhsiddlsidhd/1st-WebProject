import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Product from './pages/Product';
// import Basket from './pages/Basket';
import RouteTest from './components/RouteTest';
import ManageProducts from './pages/ManageProducts';
import ManageProductNew from './pages/ManageProductNew';
import ManageProduct from './pages/ManageProduct';
import ManageProductEdit from './pages/MangeProductEdit';
import './css/app.css';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        {/* <img src={process.env.PUBLIC_URL + `/assets/미소.jpg`}></img> */}
        <Routes>
          <Route path='/products' element={<ManageProducts />}></Route>
          <Route path='/edit/:id' element={<ManageProductEdit />}></Route>
          <Route path='/new' element={<ManageProductNew />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
