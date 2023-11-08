import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import DeliveryAddress from "./pages/DeliveryAddress";
import PurchaseCompleted from "./pages/PurchaseCompleted";
import ManageProductNew from "./pages/ManageProductNew";
import ManageProductEdit from "./pages/MangeProductEdit";

import Home from './pages/Home';
import List from './pages/List';

import Login from './pages/Login';
import Join from './pages/Join';
import Userinfo from './pages/Userinfo';

import Top from './components/Top';

// import Product from './pages/Product';
// import Basket from './pages/Basket';
import Category from './pages/Category';
import './css/app.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/detail" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/deliveryaddress" element={<DeliveryAddress />} />
          <Route path="/PurchaseCompleted" element={<PurchaseCompleted />} />
        <Route path='/' element={<Home />}></Route>
        <Route path='/list' element={<List />}></Route>
        <Route path='/category' element={<Category />}></Route>
        <Route path='/auth/login' element={<Login />}></Route>
        <Route path='/auth/join' element={<Join />}></Route>
        <Route path='/user' element={<Userinfo />}></Route>

        {/* <Route path='/' element={<Basket />}></Route> */}
        {/* <Route path='/product' element={<Product />}></Route> */}
      </Routes>
      <Top />
      <Footer />
    </Router>
  );
}

export default App;
