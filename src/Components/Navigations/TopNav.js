import React from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import { NavLink} from 'react-router-dom';
import GuestTopNav from './GuestTopNav';
import AuthTopNav from './AuthTopNav';
import { connect } from 'react-redux';
import { removeUserSession } from '../../Utils/Common';

const TopNav = (props) => {
    return(
        <div>
            {props.loggedIn ? (<AuthTopNav />) : (<GuestTopNav />)}
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
  )(TopNav);