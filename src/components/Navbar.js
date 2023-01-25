import React, { useState } from "react";
import {FaReact} from "react-icons/fa";
import {FaBars} from "react-icons/fa";
import {TfiClose} from "react-icons/tfi";
import {Link} from "react-router-dom";

const Navbar=() => {
    const [clicked, setClicked]=useState(false)

    const onClickHandler=() => {
        setClicked(!clicked)
    }
    return(
        <nav className="ui secondary menu">
            <h1 className="title">
                React
                <FaReact className="icon"/>
            </h1>
            
            <ul className={clicked ? 'navMenu active' : 'navMenu'}>
                <li>
                <Link to="/" className="item">
                    Home
                </Link>
                </li>
                <li >
                <Link to="/" className="item">
                    Services
                </Link>
                </li>
                <li>
                <Link to="/" className="item">
                    Products
                </Link>
                </li>
                <li>
                <Link to="/ " className="item">
                    Contact Us
                </Link>
                </li>
                <li>
                <Link to="/" className="item-btn">
                    Sign Up
                </Link>
                </li>
                {/* <button className="btn">Sign Up</button> */}
            </ul>
            <div className="mobile" onClick={onClickHandler}>
                {clicked ? <TfiClose className="close"/> : <FaBars className="menu" /> }
            </div>
            
        </nav>
    )
}

export default Navbar