import React, { Component } from "react";
import { BrowserRouter, Route ,Switch} from "react-router-dom";
import Register from "../../ui/pages/register";
import Login from "../../ui/pages/login";
import Layout from "../../ui/container/Layout"
import About from "../../ui/pages/About"
import Contact from "../../ui/pages/Contact"
import ForgotPassword from "../../ui/pages/forgot-password"
import Dashboard from "../../ui/container/Dashboard";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/register" exact component={Register} /> 
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/about" component={About} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/contact" component={Contact} />
        </Switch> 
      </BrowserRouter>
    );
  }
}

export default App;