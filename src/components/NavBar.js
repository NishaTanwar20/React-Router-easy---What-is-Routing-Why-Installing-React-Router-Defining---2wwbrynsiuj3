import React from 'react';
import { NavLink } from 'react-router-dom';


export const NavBar = () =>{
    return(
        <nav>
            <ul>
                <li>
                    <NavLink to="/" exact className = "index-link">
                    Index</NavLink>
                </li>
                <li>
                    <NavLink to="/home" exact className = "home-link">
                    Home</NavLink>
                </li>
            </ul>
        </nav>
        
    )
}