
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import { UserProvider } from './Context/UserContext/UserState';
import { ProductsProvider } from './Context/ProductContext/ProductsState';
import { Footer } from './components/Footer/Footer';
import Profile from './components/Profile/Profile';


function App() {
  return (
    <div className="App">
      <UserProvider >
        <ProductsProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/profile" element={<Profile />}/>
            </Routes>
            <Home/>
            <Footer />
          </BrowserRouter>
        </ProductsProvider>
      </UserProvider>
    </div>
  );
}

export default App;

