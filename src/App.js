import React from "react";
import "./Styles/app.scss"
import TopNav from "./Components/Navigations/TopNav";
import SideNav from "./Components/Navigations/SideNav";
import Homepage from "./Components/Homepage";
import Rate from "./Components/Rate/Rate";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AuthenticatedRoute from "./Components/Routes/AuthenticatedRoute";
import Login from "./Components/Login_Resister/Login";
import Charts from "./Components/Contents/Charts";
import GuestRoute from "./Components/Routes/GuestRoute";
import Register from "./Components/Login_Resister/Register";
import Reports from "./Components/Reports/Reports"
import MultiStepRegister from "./Components/Login_Resister/MultiStepRegister";
import Trace from "./Components/Trace/Trace";
import ExternalTrace from "./Components/Trace/ExternalTrace";

function App() {

  return (
    <Router>
      <div className="app">
        <TopNav />
        <div className="container">
          <SideNav />
          <div className="content">
            <Switch>
              <Route exact path="/"><Homepage /></Route>
              <Route path = "/login"> <Login /></Route>
              <Route path = "/charts"> <Charts /></Route>
              <Route path = "/register"> <Register /></Route>
              <Route path = "/reports"><Reports /></Route>
              <Route path = "/rate"><Rate /></Route>
              <Route path = "/trace"><Trace /></Route>
              <Route path="/externaltrace"><ExternalTrace /></Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>

  );
  
}

export default App;
