import React from "react";
import "./Styles/app.scss"
import TopNav from "./Components/Navigations/TopNav";
import SideNav from "./Components/Navigations/SideNav";
import Homepage from "./Components/Homepage";
import User from "./Components/Users"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

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
            </Switch>
          </div>
        </div>
      </div>
    </Router>

  );
  
}

export default App;
