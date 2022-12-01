
import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './components/Home/Home';
import RegisterForm from './components/Register/Register';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<Home/>}/>
      </Routes>
      <RegisterForm />
      </BrowserRouter>
    </div>
  );
}

export default App;

