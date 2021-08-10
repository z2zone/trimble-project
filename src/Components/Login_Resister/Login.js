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
import { NavLink, useHistory } from "react-router-dom";
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

  let history = useHistory();

  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios
      .post("http://localhost:2103/tm/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        setLoading(false);
        setUserSession(response.data.JWT, username);
        console.log("reponse >>> ", response);
        history.push("/");
      })
      .catch((error) => {
        setLoading(false);
        console.log("error >>>", error);
      });
  };

  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      boxShadow: "0px 3px 1px -2px  #7b7fda",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: "#060024",
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  const classes = useStyles();

  const theme = createTheme({
    palette: {
      primary: {
        main: "#060024",
      },
      secondary: {
        main: green[500],
      },
    },
  });

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <ThemeProvider theme={theme}>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}></Avatar>
            <Typography component="h1" variant="h5">
              Log in
            </Typography>

            <form className={classes.form}>
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
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={handleLogin}
                  >
                    Login
                  </Button>
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <NavL to="/register" variant="body2">
                        Don't have an account? Sign up!
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
