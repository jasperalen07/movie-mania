import AboutPage from "../pages/AboutPage";
import Favicon from "../images/favicon.svg"
import {useEffect, useState} from "react";
import Search from "./Search";
import { createBrowserRouter, Link } from "react-router-dom";

function Header(){
    //set showNav to be false
    const [showNav, setShowNAV] = useState(false);
    return(
        <nav>
            <ul  className="navbar">
                <li>
                    <Link to ="/"><img className="favicon" src={Favicon} alt="favicon" /></Link>
                </li>
                <li className="search-listing"><Search/></li>
                <li className="desktop-nav">
                    <Link to = "../pages/AboutPage">About</Link>
                </li>
                <li className="desktop-nav">
                    <Link to ="../pages/FavouritePage">Favourites</Link>
                </li>
                <button onClick  = {() => {
                    //once clicked, turns showNav to the other
                    setShowNAV (!showNav);}}className="menu"> &#8801;</button>
                {/* decalres if class name is show or hide. */}
            </ul>
                <div className={`${showNav ? "show" : "hide"}`}>

            <ul className="navTags">
                 <li>
                    <Link to = "../pages/AboutPage">AboutPage</Link>
                </li>
                <li>
                    <Link to ="../pages/FavouritePage">FavouritePage</Link>
                </li>
            </ul>
                </div>
        </nav>
    
    );
}
export default Header;