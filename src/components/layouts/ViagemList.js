import React, { Component } from "react"; 
import ZingGrid from "zinggrid";

import SideBar from "./sidebar";  

class ViagemList extends Component { 
 render() {
        return ( 
      <div className="App">
             <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />  
              <br />
                <div> 
                  <zing-grid
                    ref={grid => {
                      this.grid = grid;
                    }}
                    data={[] }
                    caption="Viagens realizadas"
                    editor
                    loading
                    layout="row"
                    viewport-stop
                  />
                </div>

          </div>
        );
      } 
} 
export default ViagemList;