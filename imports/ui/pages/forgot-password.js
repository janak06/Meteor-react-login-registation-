import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../../../client/adminlte.css'
class ForgotPassword extends Component {
    constructor(props){
      super()
      this.state = {
        email: "",
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
      const Data = {
        email : this.state.email
      }
      Accounts.forgotPassword({
        email: Data.email
      }, function (e, r) {
        if (e) {
          console.log(e.reason);
        } else {
          console.log(r)
          alert("success")
        }
      });
    }
    render() { 
      const responseFacebook = (response) => {
        console.log(response);
      }
        return (
          <div className="hold-transition login-page">
            <div class="login-box">
                <div class="card">
                    <div class="card-body login-card-body">
                    <p class="login-box-msg">You forgot your password? Here you can easily retrieve a new password.</p>

                    <form  onSubmit={this.handleSubmit}>
                        <div class="input-group mb-3">
                        <input type="email" id="email" onChange = {
                          this.onChange
                        } class="form-control" placeholder="Email" />
                        <div class="input-group-append">
                            <div class="input-group-text">
                            <span class="fas fa-envelope"></span>
                            </div>
                        </div>
                        </div>
                        <div class="row">
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary btn-block">Request new password</button>
                        </div>
                        </div>
                    </form>

                    <p class="mt-3 mb-1">
                        <Link to="/">Login</Link>
                    </p>
                    <p class="mb-0">
                        <Link to="/register" class="text-center">Register a new membership</Link>
                    </p>
                    </div>
                </div>
                </div>
          </div>
        );
    }
}
export default ForgotPassword;