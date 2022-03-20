import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from "react-router-dom";
import Navigation from "./component/Navbar/Navbar.js";
import Dashboard from './component/Dashboard/Dashboard';
import Mypage from './component/Mypage/Mypage';
import Earn from './component/Earn/Earn';
import Utility from './component/Utility/Utility'
import Footer from "./component/Footer/Footer.js";

import './App.css';

function App() {

  return (
    <div className="App">
      <Navigation />
      <Router>
        <Routes>
          <Route exact path="dashboard" element={<Dashboard />} />
          <Route path="mypage" element={<Mypage />} />
          <Route path="earn" element={<Earn />} />
          <Route path="utility" element={<Utility />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
