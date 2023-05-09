import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import Home from "./components/screens/home/Home";
import Registration from "./components/screens/registration/Registration";
import Login from "./components/screens/login/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/registration" element={<Registration/>}></Route>
        <Route path='*' element={<div>404didntfindumer..</div>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
