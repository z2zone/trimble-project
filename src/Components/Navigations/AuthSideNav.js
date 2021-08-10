import React from 'react';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import TrendingUpOutlinedIcon from '@material-ui/icons/TrendingUpOutlined';
import DataUsageOutlinedIcon from '@material-ui/icons/DataUsageOutlined';
import BackupOutlinedIcon from '@material-ui/icons/BackupOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import FindReplaceOutlinedIcon from '@material-ui/icons/FindReplaceOutlined';
import logo from '../../Assets/trimble-white.png';
import { NavLink as Link } from 'react-router-dom';
import styled from "styled-components"

const AuthSideNav = () => {
    return (
        <div className="side-nav">
            <div className="side-nav-wrapper">
                <Link to = "/">
                <img className="logo" src={logo} alt="" />
                </Link>
                <h3 className="side-nav-title">Dashboard</h3>
                <ul className="side-nav-list">
                    <li className="side-nav-list-item active"><DashboardOutlinedIcon /> <StyledLink to = "/"> Home </StyledLink></li>
                    <li className="side-nav-list-item"><AccountCircleOutlinedIcon /> Profile</li>
                    <li className="side-nav-list-item"><SettingsOutlinedIcon /> Settings</li>
                    <li className="side-nav-list-item"><HelpOutlineOutlinedIcon /> Help </li>
                </ul>
                <br />
                <h3 className="side-nav-title">Analytics</h3>
                <ul className="side-nav-list">
                    <li className="side-nav-list-item"><TrendingUpOutlinedIcon /> <StyledLink to = "/charts"> Data Trends </StyledLink> </li>
                    <li className="side-nav-list-item"><DataUsageOutlinedIcon /> <StyledLink to = "/reports"> Reports </StyledLink></li>
                    <li className="side-nav-list-item"><FindReplaceOutlinedIcon /> <StyledLink to = "/rate"> Rate Quote </StyledLink></li>
                    <li className="side-nav-list-item"><BackupOutlinedIcon /> Backup</li>
                    <li className="side-nav-list-item"><HelpOutlineOutlinedIcon /> Help </li>
                </ul>
            </div>
        </div>
    )
}

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #fff;

`;

export default AuthSideNav
