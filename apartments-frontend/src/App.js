import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Listings  from "./components/Listings"
import Upload  from "./components/Upload";
import NavigationBar from "./components/NavigationBar";


function App() {
  return (
    <div className="max-h-screen bg-gray-50 dark:bg-gray-800 transition">
      <BrowserRouter>
        <NavigationBar />
        
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/listings" element={<Listings />}></Route>
          <Route path="/upload" element={<Upload />}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;