import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <h1>News Ticker App</h1>
      <h2>This is working.</h2>
      <p>This app is in {process.env.NODE_ENV} mode</p>
      <p>The secret key is {process.env.REACT_APP_SECRET_KEY}</p>
    </div>
  );
}

export default App;
