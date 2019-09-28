import React from "react";
import { slide as Menu } from "react-burger-menu"; 
 

const SideBar = () => {
 
     return (
          
        <Menu > 

            <a href='/viagens' className="menu-item" >
                Minhas viagens 
            </a>

            <a href='/novas' className="menu-item" >
            Onde quero ir
            </a> 
        </Menu> 
     )

} 
export default SideBar 