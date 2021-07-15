import React from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

const TopNav = () => {
    return(
        <nav className="top-nav">
            <div className="top-nav-wrapper">
                <span className="bread-crumb"><h1>Dashboard</h1></span>
                <ul>
                    <li className="serach-bar">
                        <input type="text" id="search-bar" placeholder="Search..." /><SearchOutlinedIcon className="search-icon"/>
                        <a href="#"></a>
                    </li>
                    <div class="top-nav-icons">                        
                        <li><NotificationsOutlinedIcon/></li>
                        <li className="top-nav-border"><ModeCommentOutlinedIcon /></li>
                        <li className="log-in-status"><AccountCircleOutlinedIcon />&nbsp;&nbsp; Sign in<ArrowDropDownIcon /> </li>
                    </div>
                </ul>
            </div>
        </nav>
    );
}

export default TopNav;