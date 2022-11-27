import "./App.css";
import {createContext, useEffect, useState} from 'react'
import Nav from "./Components/Nav/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import Contact from "./Components/Contact/Contact";
import Login from "./Components/Login/Login";
import Footer from "./Components/Footer/Footer";
import RiseLoader from "react-spinners/RiseLoader";
import Cong from "./Components/Congratulation/Cong";
import Account from './Components/Account/Dashboard'



export const countContext = createContext()
export const cartItemContext = createContext()
export const loginContext = createContext()
function App() {
  const [count, setCount] = useState(0);
  const [cartItem, setCartItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#fff");
  const [logged,setLogged] = useState(false)
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    },3000)
  },[])
  return (
    <>
      {loading ? (
        <div className="preloader">
          <RiseLoader
            color={color}
            loading={loading}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <loginContext.Provider value={{logged,setLogged}}>
          <countContext.Provider value={{ count, setCount }}>
            <cartItemContext.Provider value={{ cartItem, setCartItem }}>
              <BrowserRouter>
                <Nav count={count} />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/congratulations" element={<Cong />} />
                  <Route path="/account" element={<Account/>} />
                </Routes>
                <Footer />
              </BrowserRouter>
            </cartItemContext.Provider>
          </countContext.Provider>
        </loginContext.Provider>
      )}
    </>
  );
}

export default App;
