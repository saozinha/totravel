import React from "react";
import { slide as Menu } from "react-burger-menu"; 

const SideBar = () => {
     return (
        <Menu > 
            <a href='/' className="menu-item" >
                Home
            </a>
            <a href='/viagens' className="menu-item" >
                Minhas viagens 
            </a>
            <a href='/novas' className="menu-item" >
                 Nova Viagem
            </a> 
            <a href='/cofrinho' className="menu-item" >
                 Cofrinho
            </a> 
        </Menu> 
     )
} 
export default SideBar 