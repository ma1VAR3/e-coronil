import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './views/home'
import Help from './views/help'
import Info from './views/info'
import Stats from './views/stats'
import Updates from './views/updates'
import MyNav from './views/components/navbar';


function App() {
  return (
    <BrowserRouter>
      <MyNav />
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/help">
        <Help />
      </Route>
      <Route path="/info">
        <Info />
      </Route>
      <Route path="/stats">
        <Stats />
      </Route>
      <Route path="/updates">
        <Updates />
      </Route>
    </BrowserRouter>   
  );
}

export default App;



