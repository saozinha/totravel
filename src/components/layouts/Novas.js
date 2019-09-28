import React, { Component } from "react";  

import SideBar from "./sidebar";  

class Novas extends Component {
       render() {
        return (
          <div className="App">
             <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />  
              <br />
                <div> 
                  <h1>Novas Viagens </h1>
                </div>
          </div>
        );
      } 
}

export default Novas