import React from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import { NavLink as Link } from "react-router-dom";
import { removeUserSession } from "../../Utils/Common";
import { connect } from "react-redux";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const AuthTopNav = (props) => {
    let history = useHistory();
    const handleLogout = (e) => {
    e.preventDefault();
    removeUserSession();
    props.logout();
    history.push("/");
  };
  return (
    <nav className="top-nav">
      <div className="top-nav-wrapper">
        <span className="bread-crumb">
          <h1>Dashboard</h1>
        </span>
        <ul>
          <li className="serach-bar">
            <input type="text" id="search-bar" placeholder="Search..." />
            <SearchOutlinedIcon className="search-icon" />
            <a href="#"></a>
          </li>
          <div class="top-nav-icons">
            <li>
              <NotificationsOutlinedIcon />
            </li>
            <li className="top-nav-border">
              <ModeCommentOutlinedIcon />
            </li>
            <li className="log-in-status">
              <AccountCircleOutlinedIcon />
              &nbsp;&nbsp;{" "}
              <StyledLink className="link" to="/" onClick={handleLogout}>
                {" "}
                Sign Out{" "}
              </StyledLink>
              <ArrowDropDownIcon />{" "}
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.loggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch({ type: "SET_LOGOUT" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AuthTopNav);
