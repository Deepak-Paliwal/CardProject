import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "components/Login/Login.jsx";
import Forgotpassword from "components/Forgotpassword/Forgotpassword.jsx";
import Signup from "components/Signup/Signup.jsx";
import Template from "layouts/Dashboard/Template.js";
import Mycard from "layouts/Dashboard/Mycard/Mycard.js"
import Dashboard from "layouts/Dashboard/Dashboard.js";
import NewLogin from "../components/NewLogin";
import Setting from "layouts/Dashboard/Setting.js";
 
class Routers extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/forgotpassword" component={Forgotpassword} />
          <Route exact path="/register" component={Signup} />
          <Route exact path="/dashboard" component ={Dashboard} /> 
          <Route exact path="/dashboard/template" component={Template} />
          <Route exact path="/dashboard/mycard" component={Mycard} />
          <Route exact path="/dashboard/dashboard" component ={Dashboard} /> 
          <Route exact path="/setting" component={Setting}/>
          {/* <Route exact path="/" component ={NewLogin} />  */}
        </Switch>
      </div>
    );
  }
}

export default Routers;
