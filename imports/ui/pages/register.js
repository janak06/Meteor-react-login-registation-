import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../../../client/adminlte.css"
class Register extends Component {
    constructor(props){
        super(props)
        this.state ={
            email : '',
            password : '',
            access_code : '',
            error :''
        }
    }
    onChange =(e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit =(e) =>{
        e.preventDefault();
        const Data = {
            email : this.state.email,
            password : this.state.password,
            access_code : this.state.access_code
        }
        console.log(Data)
        Accounts.createUser({email:Data.email,password:Data.password ,profile: {access_code:Data.access_code}}, (err) => {
            if(err){
                alert(err)
                this.setState({
                error: err.reason
                });
            }else {
                alert("Register success")
                this.props.history.push('/');
            }
        });

    }
    render() { 
        return ( 
            <div className="hold-transition register-page">
           <div className="register-box">
                <div className="register-logo">
                    <img id="profile-img" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
                </div>

                <div className="card">
                    <div className="card-body register-card-body">
                    <p className="login-box-msg">Register a new membership</p>

                    <form  onSubmit={this.handleSubmit}>
                        <div className="input-group mb-3">
                        <input type="email" id="email" onChange={this.onChange} className="form-control" placeholder="Email" required />
                        <div className="input-group-append">
                            <div className="input-group-text">
                            <span className="fas fa-envelope"></span>
                            </div>
                        </div>
                        </div>
                        <div className="input-group mb-3">
                        <input type="text" id="access_code" onChange={this.onChange} className="form-control" placeholder="Access code" required />
                        <div className="input-group-append">
                            <div className="input-group-text">
                            <span className="fas fa-lock"></span>
                            </div>
                        </div>
                        </div>
                        <div className="input-group mb-3">
                        <input type="password" id="password" onChange={this.onChange} className="form-control" placeholder="Password" required />
                        <div className="input-group-append">
                            <div className="input-group-text">
                            <span className="fas fa-lock"></span>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <button type="submit" className="btn btn-primary btn-block">Register</button>
                            </div>
                        </div>
                    </form>

                    <div className="social-auth-links text-center">
                        <p>- OR -</p>
                        <a href="#" className="btn btn-block btn-primary">
                        <i className="fab fa-facebook mr-2"></i>
                        Sign up using Facebook
                        </a>
                        <a href="#" className="btn btn-block btn-danger">
                        <i className="fab fa-google-plus mr-2"></i>
                        Sign up using Google+
                        </a>
                    </div>

                    <Link to="/" className="text-center">I already have a membership</Link>
                    </div>
                </div>
                </div>
            </div>
         );
    }
}
export default Register;
 