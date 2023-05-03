import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import Home from "./components/screens/home/Home";
import Registration from "./components/screens/registration/Registration";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/registration" element={<Registration/>}></Route>
        <Route path='*' element={<div>umer..</div>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
