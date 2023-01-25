import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Router } from './Router'
import Navigation from './components/Navigation'
// import { Provider } from 'react-redux';
// import store from './redux/store';

function App() {
  
  return (
      <BrowserRouter>
          <Navigation />
          <Router />
      </BrowserRouter>
  );
}

export default App;
