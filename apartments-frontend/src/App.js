import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Listings  from "./components/Listings"
import Upload  from "./components/Upload";
import NavigationBar from "./components/NavigationBar";
import Login from "./components/Login"


function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogIn = () => {
      setLoggedIn(
          !loggedIn
      );
  };

  return (
    <div className="max-h-screen bg-gray-50 dark:bg-gray-800 transition">
      <BrowserRouter>
        <NavigationBar loggedIn={loggedIn} handleLogIn={handleLogIn}/>
        
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/listings" element={<Listings edit={false} />}></Route>
          <Route path="/upload" element={<Upload />}></Route>
          <Route path="/editlistings" element={<Listings edit={true} />}></Route>
          <Route path="/login" element={<Login handleLogin={handleLogIn}/>}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;