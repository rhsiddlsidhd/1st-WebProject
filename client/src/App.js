import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/App.css";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";

// import Login from "./pages/Login";
// import List from "./pages/List";
// import Signup from "./pages/Signup";
// import DeliveryAddress from "./pages/DeliveryAddress";
// import Main from "./pages/Main";
// import Userinfo from "./pages/Userinfo";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/detail" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
