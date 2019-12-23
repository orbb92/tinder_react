import React from 'react';
import './App.css';

import TinderHome from './Components/TinderHome'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App container-fluid myDiv"  style={{height:"100vh"}} >
      
      <div className="bg"></div>
     <TinderHome ></TinderHome>
    
    </div>
  );
}

export default App;
