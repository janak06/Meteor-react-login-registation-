import React from 'react';
import {Meteor} from 'meteor/meteor'
import {render} from "react-dom";
import 'bootstrap/dist/css/bootstrap.css'
import App from "../imports/startup/router/App";
// import './main.html';
Meteor.startup(() => {
  render(<App />, document.getElementById("root"));
});



