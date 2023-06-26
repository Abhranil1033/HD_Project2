import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar/Navbar.js"
import Home from "./components/Home/Home.js";
import Footer from "./components/layout/Footer/Footer.js"
import FlatHome from "./components/Home/FlatHome.js";
import FlatmateHome from "./components/Home/FlatmateHome.js";



function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/flats" element={<FlatHome />}></Route>
        <Route path="/flatmates" element={<FlatmateHome />}></Route>
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
