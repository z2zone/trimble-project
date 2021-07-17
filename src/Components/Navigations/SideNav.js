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
import { connect } from 'react-redux';
import GuestSideNav from './GuestSideNav';
import AuthSideNav from './AuthSideNav';

const SideNav = (props) => {
    return(
        <div>
            {props.loggedIn ? (<AuthSideNav />) : (<GuestSideNav />)}
            {props.children}
        </div>
    );
}

const mapStateToProps = state => {
    return {
      loggedIn: state.auth.loggedIn
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      logout: () => dispatch({ type: "SET_LOGOUT" })
    };
  };
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SideNav);