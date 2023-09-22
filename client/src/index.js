import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

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
      <Switch>
        <Route exact path = '/'>
          <Home message={message}/>
        </Route>
      </Switch>
    </div>
  );
}
  
  
export default App;
