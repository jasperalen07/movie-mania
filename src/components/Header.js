import AboutPage from "../pages/AboutPage";
import Favicon from "../images/favicon.svg"
import { useEffect, useState } from "react";
import Search from "./Search";
import { createBrowserRouter, Link } from "react-router-dom";

function Header() {
    //set showNav to be false
    const [showNAV, setShowNAV] = useState(false);
    const toggleNavTags = () => {
        setShowNAV(!showNAV);
    };
    return (
        <nav>
            <ul className="navbar">
                <li>
                    <Link to="/"><img className="favicon" src={Favicon} alt="favicon" /></Link>
                </li>
                <li className="search-listing"><Search /></li>
                <li className="desktop-nav">
                    <Link to="../pages/AboutPage">About</Link>
                </li>
                <li className="desktop-nav">
                    <Link to="../pages/FavouritePage">Favourites</Link>
                </li>
                <button onClick={toggleNavTags} className="menu"> &#8801;</button>
                {/* decalres if class name is show or hide. */}
            </ul>
            <div className={`navTags ${showNAV ? "open" : "closed"}`}>
                <ul>
                    <li>
                        <Link to="../pages/AboutPage">AboutPage</Link>
                    </li>
                    <li>
                        <Link to="../pages/FavouritePage">FavouritePage</Link>
                    </li>
                </ul>
            </div>
        </nav>

    );
}
export default Header;