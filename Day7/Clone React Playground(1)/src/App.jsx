// router is used defined where your app we want access to react of dom staff
// routes defined all the route
import React from "react";
import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Contact } from "./pages/Contact";
import {Profile} from './pages/Profile'
import { Navbar } from "./Navbar";
import {useState,createContext} from 'react';
export const AppContext = createContext();

function App() {
  const [userName,setUserName] = useState("PedroTech");
  return (
    <div className="App">
    <AppContext.Provider value={{userName,setUserName}}>
    // we providing data to inside all the components of this when use provider you have to specify which data component provided
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
