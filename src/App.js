import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from "react-router-dom";
import Navigation from "./Navbar/Navbar.js";
import Dashboard from './Dashboard/Dashboard';
import Mypage from './Mypage/Mypage';
import Earn from './Earn/Earn';
import Utility from './Utility/Utility'

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
    </div>
  );
}

export default App;
