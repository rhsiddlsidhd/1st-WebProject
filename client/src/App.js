import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import "./css/app.css";
import DeliveryAddress from "./pages/DeliveryAddress";
import PurchaseCompleted from "./pages/PurchaseCompleted";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/detail" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/deliveryaddress" element={<DeliveryAddress />} />
          <Route path="/PurchaseCompleted" element={<PurchaseCompleted />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
