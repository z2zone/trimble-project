import React, { useState, useEffect } from "react";
import axios from "axios";
import { setUserSession } from "../../Utils/Common";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
  Container,
  ThemeProvider,
} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { Breadcrumbs } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";
import { connect } from "react-redux";
import { createTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios
      .post("http://localhost:2103/tm/login/", {
        username: username,
        password: password,
      })
      .then((response) => {
        setLoading(false);
        setUserSession(response.data.JWT, username);
        console.log("reponse >>> ", response);
        props.history.push("/");
      })
      .catch((error) => {
        setLoading(false);
        console.log("error >>>", error);
      });
  };

  return (
    <div className="login">
      <Container component="main" maxWidth="xs">
        <ThemeProvider>
          <div className="paper">
            <Avatar className="avatar"></Avatar>
            <Typography component="h1" variant="h5">
              Log in
            </Typography>

            <form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography component="p" variant="p5">
                    Username
                  </Typography>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="username"
                    size="small"
                    autoFocus
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography component="p" variant="p5">
                    Password
                  </Typography>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    size="small"
                    id="password"
                    autoFocus
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button
                    type="submit"
                    className="login-button"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handleLogin}
                  >
                    Login
                  </Button>
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <NavL to="/register" variant="body2">
                        Don't have an account? &nbsp; Sign up!
                      </NavL>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </div>
        </ThemeProvider>
      </Container>
    </div>
  );
};
const NavL = styled(NavLink)`
  text-decoration: none;
  color: #060024;
`;

const mapDispatchToProps = (dispatch) => {
  return {
    setLogin: (user) => dispatch({ type: "SET_LOGIN", payload: user }),
  };
};
export default connect(null, mapDispatchToProps)(Login);
