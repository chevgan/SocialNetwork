import React from 'react';
import s from './Header.module.css';
import logo from "../../Icons/Logo.svg";
const Header = () => {
    return <header className = {s.header}>
        <img src={logo} alt=""/>
        <h2>SocialChevgan</h2>
    </header>
}

export default Header;