import React from "react"
import {Link} from "react-router-dom"

const NavBar = () => {
    return(
        <div className="navbar-container">
            <Link to="/" className="home-icon"><i className="fas fa-utensils fa-2x"></i></Link>
            <div className="links-container">
                <Link to="/" className="home-button">Home</Link>
                <Link to="/search" className="search-button">Search</Link>
            </div>
            <div className="social-media-container">
                <a href="https://github.com/FlorenciaPetrone" target="_blank">
                    <i className="fab fa-github-square fa-1x" aria-hidden="true"></i>
                </a>
                <a href="https://www.linkedin.com/in/florencia-petrone/" target="_blank">
                    <i className="fab fa-linkedin fa-1x" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    )
}

export default NavBar