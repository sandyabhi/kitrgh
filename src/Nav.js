import React from 'react'
import "./style/Nav.css"
import { NavLink } from "react-router-dom";
function Nav() {
    const checkActive = (match, location) => {
        if (!location) return false;
        const { pathname } = location;
        console.log(pathname);
        return pathname === "/";
    }
    return (
        <div>
            <ul className="nav">
                <li><NavLink className="NavLink" activeClassName="activeRoute" isActive={checkActive} to="/">Home</NavLink></li>
                {/* <li><NavLink className="NavLink" activeClassName="activeRoute" to="/compiler">Compiler</NavLink></li>
                <li><NavLink className="NavLink" activeClassName="activeRoute" to="/timetable">Timetable</NavLink></li> */}
                <li><NavLink className="NavLink" activeClassName="activeRoute" to="/paper">Paper</NavLink></li>
                <li><NavLink className="NavLink" activeClassName="activeRoute" to="/weather">Weather</NavLink></li>
                <li><NavLink className="NavLink" activeClassName="activeRoute" to="/about">About</NavLink></li>
            </ul>
        </div>
    )
}

export default Nav
