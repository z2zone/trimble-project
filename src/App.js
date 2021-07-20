import React from "react";
import "./Styles/app.scss";
import TopNav from "./Components/Navigations/TopNav";
import SideNav from "./Components/Navigations/SideNav";
import Homepage from "./Components/Homepage";
import User from "./Components/Users";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthenticatedRoute from "./Components/Routes/AuthenticatedRoute";
import Login from "./Components/Login_Resister/Login";
import GuestRoute from "./Components/Routes/GuestRoute";
import Register from "./Components/Login_Resister/Register";
import Reports from "./Components/Reports/Reports"
import MultiStepRegister from "./Components/Login_Resister/MultiStepRegister";

function App() {
  return (
    <Router>
      <div className="app">
        <TopNav />
        <div className="container">
          <SideNav />
<<<<<<< Updated upstream
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/users">
              <User />
            </Route>
            <GuestRoute path="/login">
              {" "}
              <Login />
            </GuestRoute>
            <GuestRoute path="/register">
              {" "}
              <Register />
            </GuestRoute>
            <AuthenticatedRoute path="/reports">
              <Reports />
            </AuthenticatedRoute>
          </Switch>
=======
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route path="/users">
                <User />
              </Route>
              <Route path = "/login"> <Login /></Route>
              <Route path = "/register"> <Register /></Route>
              <Route path = "/reports"><Reports /></Route>
            </Switch>
          </div>
>>>>>>> Stashed changes
        </div>
      </div>
    </Router>
  );
}

export default App;
