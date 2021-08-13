import React from 'react';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import TrendingUpOutlinedIcon from '@material-ui/icons/TrendingUpOutlined';
import DataUsageOutlinedIcon from '@material-ui/icons/DataUsageOutlined';
import BackupOutlinedIcon from '@material-ui/icons/BackupOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import { TrackChangesOutlined } from '@material-ui/icons';
import logo from '../../Assets/trimble-white.png';
import { NavLink as Link} from 'react-router-dom';
import styled from 'styled-components';

const GuestSideNav = () => {
    return (
        
            <div className="side-nav">
            <div className="side-nav-wrapper">
                <Link to = "/">
                <img className="logo" src={logo} alt="" />
                </Link>
                <h3 className="side-nav-title">Dashboard</h3>
                <ul className="side-nav-list">
                    <StyledLink to="/"><li className="side-nav-list-item active"><DashboardOutlinedIcon /> Home</li> </StyledLink>
                    <StyledLink to= "/users"> <li className="side-nav-list-item"><AccountCircleOutlinedIcon />  Profile </li></StyledLink>
                    <li className="side-nav-list-item"><SettingsOutlinedIcon /> Settings</li>
                    <li className="side-nav-list-item"><HelpOutlineOutlinedIcon /> Help </li>
                    <StyledLink to= "/externaltrace"> <li className="side-nav-list-item"><TrackChangesOutlined />  External Trace </li></StyledLink>
                </ul>
        </div>
        </div>
    )
}
const StyledLink = styled(Link)`
    text-decoration: none;
    color: #fff;

`;

export default GuestSideNav
