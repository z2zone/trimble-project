import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Breadcrumbs, MuiThemeProvider } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Paper, ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://trimble.com/">
        Trimble
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Register() {
  return (
    <Container component="main" maxWidth="xs">
      <ThemeProvider>
        <div className="register paper">
          <Avatar></Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography component="p" variant="p5">
                  First Name *
                </Typography>
                <TextField
                  autoComplete="fname"
                  color="secondary"
                  name="firstName"
                  variant="outlined"
                  required
                  size="small"
                  fullWidth
                  id="firstName"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                Last Name *
                <TextField
                  variant="outlined"
                  color="secondary"
                  required
                  size="small"
                  fullWidth
                  id="lastName"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                Email
                <TextField
                  variant="outlined"
                  color="secondary"
                  required
                  fullWidth
                  size="small"
                  id="email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                Password *
                <TextField
                  variant="outlined"
                  color="secondary"
                  required
                  fullWidth
                  size="small"
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                Access Code *
                <TextField
                  variant="outlined"
                  color="secondary"
                  required
                  fullWidth
                  name="password"
                  type="text"
                  id="access"
                  size="small"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="secondary" />
                  }
                  label="Keep me signed in"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              className="login-button"
              variant="contained"
              color="primary"
            >
              Next
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <NavL to="/login" variant="body2">
                  Already have an account? Sign in
                </NavL>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </ThemeProvider>
    </Container>
  );
}

const NavL = styled(NavLink)`
  text-decoration: none;
  color: #060024;
`;
