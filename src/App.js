import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./Context/UserContext/UserState";
import './App.css';
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
         
            <Login />
         
        </UserProvider>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/register" element={<Register />} /> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
