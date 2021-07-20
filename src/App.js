import React from "react";
import "./Styles/app.scss"
import TopNav from "./Components/Navigations/TopNav";
import SideNav from "./Components/Navigations/SideNav";
import Homepage from "./Components/Homepage";
import User from "./Components/Users"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
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
        </div>
      </div>
    </Router>

  );
  
}

export default App;
