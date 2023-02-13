import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ChatIcon from '@mui/icons-material/Chat';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

const Navbar = () => {
    return (
        <nav className = {s.nav}>

            <div  className={s.descr}>SOCIAL</div>
            <div className={s.item}>
                <PersonOutlineIcon  className={s.mainColor} />
                <NavLink  to="/profile" className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
            </div>

            <div className={s.item} >
                <ChatIcon className={s.mainColor} />
                <NavLink to="/dialogs" className = { navData => navData.isActive ? s.active : s.item }>Messages</NavLink>
            </div>

            <div className={s.item} >
                <GroupAddIcon className={s.mainColor} />
                <NavLink to="/users" className = { navData => navData.isActive ? s.active : s.item }>Users</NavLink>
            </div>

            <div className={s.item}>
                <NewspaperIcon className={s.mainColor} />
                <NavLink to="/news" className = { navData => navData.isActive ? s.active : s.item }>News</NavLink>
            </div>

            <div className={s.item}>
                <SlowMotionVideoIcon className={s.mainColor} />
                <NavLink to="/music" className = { navData => navData.isActive ? s.active : s.item }>Music</NavLink>
            </div>

            <br/>

            <div className={s.item}>
                <SettingsIcon className={s.mainColor} />
                <NavLink to="/settings" className = { navData => navData.isActive ? s.active : s.item }>Settings</NavLink>
            </div>

        </nav>

    );
}

export default Navbar;