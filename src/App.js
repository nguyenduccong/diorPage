import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Footer from "./components/footer/footer";
import IndexAD from "./view/admin/view";
import CataAd from "./view/admin/view/catalog/catalog";
import Img from "./view/admin/view/img/img";
import ListKH from "./view/admin/view/kh/ListKh";
import ProductAd from "./view/admin/view/Product/Product";
import Signin from "./view/Authenticator/Signin/Signin";
import BaoCao from "./view/BaoCao/BaoCao";
import Cart from "./view/Cart/Cart";
import Detail from "./view/Detail/Detail";
import Home from "./view/home/home";
import Products from "./view/Products/Products";

function App() {
  const [navbar, setNavbar] = useState(false);

  const changedBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changedBackground);

  return (
    <BoxContent>
      <Router>
        <Route exact path="/">
          <Home changedBackground={navbar}></Home>
        </Route>

        <Route exact path="/signin">
          <Signin changedBackground={navbar}></Signin>
        </Route>

        <Route exact path="/cart">
          <Cart changedBackground={navbar}></Cart>
        </Route>

        {/* <Route exact path="/product">

          <ListProduct changedBackground={navbar}></ListProduct>

        </Route> */}

        <Route path="/product/:id">
          <Detail changedBackground={navbar}></Detail>
        </Route>

        <Route path="/cata/:id">
          <Products changedBackground={navbar}></Products>
        </Route>

        <Route exact path="/admin">
          <IndexAD></IndexAD>
        </Route>

        <Route path="/admin/product">
          <ProductAd></ProductAd>
        </Route>

        <Route path="/admin/cata">
          <CataAd></CataAd>
        </Route>

        <Route path="/admin/kh">
          <ListKH></ListKH>
        </Route>

        <Route path="/admin/img">
          <Img></Img>
        </Route>
        <Footer></Footer>
      </Router>
    </BoxContent>
  );
}

const BoxContent = styled.div`
  overflow: hidden;
  min-height: 100vh;
`;
export default App;
