import "./App.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./screens/home/Home";
import Details from "./screens/details/Details";
import Carts from "./screens/carts/Carts";
import Search from "./screens/search/Search";
import LogIn from "./screens/acount/login/LogIn";
import MyAccount from "./screens/acount/myAcount/MyAccount";
import ProductList from "./screens/productList/ProductList";
import { Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/carts" Component={Carts} />
        <Route exact path="/details/:id" Component={Details} />
        <Route exact path="/login" Component={LogIn} />
        <Route exact path="/search/:keyword" Component={Search} />
        <Route exact path="/products/:keyword" Component={ProductList} />
        <Route exact path="/account" Component={MyAccount} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
