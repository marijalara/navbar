import React, { useState} from 'react';
import {FaReact } from 'react-icons/fa';
import {FaBars} from "react-icons/fa";
import {TfiClose} from "react-icons/tfi";
import {Link} from "react-router-dom";

const Navbar: React.FC = () => {
    const [clicked, setClicked]=useState<boolean>(false)

    const onClickHandler=() => {
        setClicked(!clicked)
    }
    return (
        <>
        <nav className="ui-secondary-menu">
            <Link to="/" className="title">
                React
                <FaReact className="icon"/>
            </Link>
            <div>
            <ul className={clicked ? 'navMenu active' : 'navMenu'}>
                <li className="item">
                <Link to="/" className="navLink">
                    Home
                </Link>
                </li>
                <li className="item">
                <Link to="/" className="navLink">
                    Services
                </Link>
                </li>
                <li className="item">
                <Link to="/" className="navLink">
                    Products
                </Link>
                </li>
                <li className="item">
                <Link to="/ " className="navLink">
                    Contact Us
                </Link>
                </li>
                <li className="item">
                <Link to="/" className="navLink-btn">
                    Sign Up
                </Link>
                </li>
            </ul>
            </div>
            <div className="mobile" onClick={onClickHandler}>
                <i>{clicked ? <TfiClose className="close"/> : <FaBars className="menu" />}</i>
            </div>
        </nav>
        </>
    )
}

export default Navbar