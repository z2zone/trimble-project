import React from 'react';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import TrendingUpOutlinedIcon from '@material-ui/icons/TrendingUpOutlined';
import DataUsageOutlinedIcon from '@material-ui/icons/DataUsageOutlined';
import BackupOutlinedIcon from '@material-ui/icons/BackupOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import logo from '../../Assets/trimble-white.png';
import { NavLink } from 'react-router-dom';

const AuthSideNav = () => {
    return (
        <div className="side-nav">
            <div className="side-nav-wrapper">
                <NavLink to = "/">
                <img className="logo" src={logo} alt="" />
                </NavLink>
                <h3 className="side-nav-title">Dashboard</h3>
                <ul className="side-nav-list">
                    <li className="side-nav-list-item active"><DashboardOutlinedIcon /> Home</li>
                    <li className="side-nav-list-item"><AccountCircleOutlinedIcon /> Profile</li>
                    <li className="side-nav-list-item"><SettingsOutlinedIcon /> Settings</li>
                    <li className="side-nav-list-item"><HelpOutlineOutlinedIcon /> Help </li>
                </ul>
                <br />
                <h3 className="side-nav-title">Data Analytics</h3>
                <ul className="side-nav-list">
                    <li className="side-nav-list-item"><TrendingUpOutlinedIcon /> Data Trends</li>
                    <li className="side-nav-list-item"><DataUsageOutlinedIcon /> <NavLink to = "/reports"> Reports </NavLink></li>
                    <li className="side-nav-list-item"><BackupOutlinedIcon /> Backup</li>
                    <li className="side-nav-list-item"><HelpOutlineOutlinedIcon /> Help </li>
                </ul>
            </div>
        </div>
    )
}

export default AuthSideNav
