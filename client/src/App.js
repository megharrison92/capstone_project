import React, { useEffect, useState } from 'react';
import { Routes, Route, Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import GetFortune from './components/GetFortune';
import Game from './components/Game';
import History from './components/History';
import AccountInfo from './components/AccountInfo';


function App() {
  return (
      <div>
        <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/get_fortune" element={<GetFortune />} />
            <Route exact path="/game" element={<Game />} />
            <Route exact path="/history" element={<History />} />
            <Route exact path="/account_info" element={<AccountInfo />} />
          </Routes>
      </div>
  );
}

export default App;