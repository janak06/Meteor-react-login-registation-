import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../../../client/adminlte.css'
class Login extends Component {
    constructor(props){
      super()
      this.state = {
        email: "",
        password: "",
        error: "",
      };
    }
    onChange=(e)=>{
      this.setState({
        [e.target.id] : e.target.value
      })
    }
    handleSubmit=(e)=>{
      e.preventDefault()
      const User = {
        email : this.state.email,
        password : this.state.password
      }
      Meteor.loginWithPassword(User.email, User.password ,  (err) => {
        if (err) {
          alert(err.reason)
          this.setState({
            error: err.reason,
          });
        } else {
          alert("Login success")
          this.props.history.push("/dashboard");
        }
      });
    }
    LoginFacebook=(e)=>{
      e.preventDefault();
      Meteor.loginWithFacebook({
        requestPermissions: ['public_profile', 'email']
      }, function (err) {
        if (err) {
          console.log('Handle errors here: ', err);
        }
      });
    }
    LoginGoogle=(e)=>{
      e.preventDefault()
      console.log("aa")
      Meteor.loginWithGoogle({
        requestPermissions: ['email']
      }, function (error) {
        if (error) {
          console.log(error); //If there is any error, will get error here
        } else {
          console.log(Meteor.user()); // If there is successful login, you will get login details here
        }
      });
    }
    render() { 
      const responseFacebook = (response) => {
        console.log(response);
      }
        return (
          <div className="hold-transition login-page">
            <div className="login-box">
              <div className="login-logo">
                <img id="profile-img" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
              </div>
              <div className="card">
                <div className="card-body login-card-body">
                  <p class="login-box-msg">Sign in to start your session</p>
                  <form onSubmit={this.handleSubmit}>
                    <div className="input-group mb-3">
                      <input
                        type="email"
                        id = "email"
                        onChange = {
                          this.onChange
                        }
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div className="input-group mb-3">
                      <input
                        type="password"
                        id = "password"
                        onChange = {
                          this.onChange
                        }
                        className="form-control"
                        placeholder="Password"
                      />
                      <div className="input-group-append">
                        <div className="input-group-text">
                          <span className="fas fa-lock"></span>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                        >
                          Login
                        </button>
                      </div>
                    </div>
                  </form>
                  <div className="social-auth-links text-center mb-3">
                    <p>- OR -</p>
                    <button  onClick={this.LoginFacebook} className="btn btn-block btn-primary">
                      <i className="fab fa-facebook mr-2"></i> Sign in using
                      Facebook
                    </button>
                    <button onClick={this.LoginGoogle} className="btn btn-block btn-danger">
                      <i className="fab fa-google-plus mr-2"></i> Sign in using
                      Google+
                    </button>
                  </div>
                  <p className="mb-1">
                    <Link to="/forgot-password">I forgot my password</Link>
                  </p>
                  <p className="mb-0">
                    <Link to="/register" className="text-center">
                      Register a new membership
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
export default Login;
 