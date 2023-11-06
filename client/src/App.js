import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import "./css/app.css";
import DeliveryAddress from "./pages/DeliveryAddress";
import PurchaseCompleted from "./pages/PurchaseCompleted";

// import Product from './pages/Product';
// import Basket from './pages/Basket';
import RouteTest from "./components/RouteTest";
import ManageProducts from "./pages/ManageProducts";
import ManageProductNew from "./pages/ManageProductNew";
import ManageProduct from "./pages/ManageProduct";
import ManageProductEdit from "./pages/MangeProductEdit";
import "./css/app.css";

function App() {
  return (
    <div className="App">
      {/* <img src={process.env.PUBLIC_URL + `/assets/미소.jpg`}></img> */}
      <BrowserRouter>
        <Routes>
          <Route path="/detail" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/deliveryaddress" element={<DeliveryAddress />} />
          <Route path="/PurchaseCompleted" element={<PurchaseCompleted />} />
          <Route path="/products" element={<ManageProducts />}></Route>
          <Route path="/edit/:id" element={<ManageProductEdit />}></Route>
          <Route path="/new" element={<ManageProductNew />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
