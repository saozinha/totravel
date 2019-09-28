import React from 'react';
import "./styles.css";
import './App.css';
import SideBar from "./components/layouts/sidebar";  
 

function App() {
  return ( 
        <div className="App">

          <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />  
          <br />
          
          <header className="App-header">
              <div id="page-wrap">
                <h1>Viagar pelo Mundo  </h1>
                <h2>Viagens que fiz e quero fazer na vida !</h2>
              
              </div>
          </header>
        </div> 
  )
}

export default App; 


