import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/common/Header';
import Footer from './components/common/Footer';

import Home from './pages/Home';
import ProductList from './components/ProductList';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import DeliveryAddress from './pages/DeliveryAddress';
import PurchaseCompleted from './pages/PurchaseCompleted';

// 로그인, 회원가입
import Login from './pages/Login';
import Join from './pages/Join';

// 관리자 페이지
import Category from './pages/Category';
import ManageProducts from './pages/ManageProducts';
import ManageProductNew from './pages/ManageProductNew';
import ManageProductEdit from './pages/ManageProductEdit';
import ManageOrder from './pages/ManageOrder';

//사용자 마이페이지
import UserOrder from './pages/UserOrder';
import Userinfo from './pages/Userinfo';
import './css/app.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/plist/all' element={<ProductList />}></Route>
        <Route path='/detail' element={<Detail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/deliveryaddress' element={<DeliveryAddress />} />
        <Route path='/PurchaseCompleted' element={<PurchaseCompleted />} />
        <Route path='/auth/login' element={<Login />}></Route>
        <Route path='/auth/join' element={<Join />}></Route>

        {/* 관리자페이지 */}
        <Route path='/category' element={<Category />}></Route>
        <Route path='/manageproducts' element={<ManageProducts />}></Route>
        <Route path='/productnew' element={<ManageProductNew />}></Route>
        <Route path='/productedit' element={<ManageProductEdit />}></Route>
        <Route path='/manageorder' element={<ManageOrder />}></Route>

        {/* 사용자페이지 */}
        <Route path='/user/order' element={<UserOrder />}></Route>
        <Route path='/user/:id' element={<Userinfo />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
