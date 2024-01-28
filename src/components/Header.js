import AboutPage from "../pages/AboutPage";
import favicon from "../images/favicon.svg";
import {useEffect, useState} from "react";


import { createBrowserRouter, Link } from "react-router-dom";

function Header(){
    //set showNav to be false
    const [showNav, setShowNAV] = useState(false);
    return(
        <nav className="navbar">
            <ul>
                <li>
                    <Link to ="/"><img className="favicon" src={favicon} alt="favicon" /></Link>
                </li>
                <button onClick  = {() => {
                    //once clicked, turns showNav to the other
                    setShowNAV (!showNav);
                }}
                className="menu"
                >
                    X
                </button>
                {/* decalres if class name is show or hide. */}
                <div className={`${showNav ? "show" : "hide"}`}>
                <li>
                    <Link to = "../pages/AboutPage">AboutPage</Link>
                </li>
                <li>
                    <Link to ="../pages/FavouritePage">FavouritePage</Link>
                </li>
                </div>
            </ul>
        </nav>
    
    );
}
export default Header;