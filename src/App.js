import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import { UserProvider } from "./Context/UserContext/UserState";
import { Footer } from "./components/Footer/Footer";
import Products from "./components/Products/Products";



function App() {
  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
