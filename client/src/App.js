import React, { useEffect, useState } from 'react';
import { Route, Router } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import GetFortune from './GetFortune';
import Game from './Game';
import History from './History';
import AccountInfo from './AccountInfo';


function App() {
  
  const [message, setMessage] = useState('');
  
  useEffect(() => {
    fetchMessage();
  }, []);
  
  const fetchMessage = () => {
    fetch('http://localhost:5555')
      .then(r => r.text())
      .then(message => setMessage(message))
  }

  return (
      <div>
        <NavBar />
        <Route exact path= '/'>
          <Home />
        </Route>
        <Route exact path='/get_fortune'>
          <GetFortune />
        </Route>
        <Route exact path='/game'>
          <Game />
        </Route>
        <Route exact path='/history'>
          <History/>
        </Route>
        <Route exact path='/account_info'>
          <AccountInfo />
        </Route>
      </div>
  );
}

export default App;