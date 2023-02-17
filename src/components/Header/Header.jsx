import React from 'react';
import s from './Header.module.css';
import logo from "../../Icons/Logo.svg";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <div className={s.header}>
            <img src={logo} alt=""/>
            <h2>SocialChevgan</h2>
        </div>
        <div className={s.loginBlock}>
            {props.isAuth ?  props.login
                : <NavLink to={'/login'}>Войти</NavLink>}
        </div>
    </header>
}

export default Header;