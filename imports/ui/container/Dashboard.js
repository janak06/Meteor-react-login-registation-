import React, { Component } from 'react';
//import "../../../client/main.css"
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = this.getMeteorData();
    setTimeout(()=>{this.setState({ email: Meteor.user().emails[0].address });},1000);
  }
  getMeteorData() {
    return { isAuthenticated: Meteor.userId() !== null };
  }
  
  componentWillMount() {
    if (!this.state.isAuthenticated) {
      this.props.history.push("/");
    }
  }
  logout=(e)=> {
    e.preventDefault();
    Meteor.logout((err) => {
      if (err) {
        console.log(err.reason);
      } else {
        this.props.history.push("/");
      }
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (!this.state.isAuthenticated) {
      this.props.history.push("/");
    }
  }
  render() {
    return (
      <div className="container">
        <h1>Welcome {this.state.email}</h1>
        <br />
        <button className="btn btn-primary" onClick={this.logout}>logout</button>
      </div>
    );
  }
}
 
export default Dashboard;