import React from "react";
import { LoginPage } from "reactjs-admin-lte";
import {Home} from "./Home";
import {authenticateUser} from "./../firebase";
import {Redirect, BrowserRouter as Router, Link} from "react-router-dom";
import Cookies from 'universal-cookie';
// import {Axios} from 'axios';

// const axios = new Axios();

const cookies = new Cookies();

export class Loginform extends React.Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            error:'',
            redirect: false
        };
        this.onHandleLogin=this.onHandleLogin.bind(this);
        this.onHandleChange = this.onHandleChange.bind(this);
    }
    componentDidMount(){

    }
    onHandleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onHandleLogin(e) {
        e.preventDefault();
        const {username, password} = this.state;
        var that = this;
        authenticateUser.signInWithEmailAndPassword(username, password).then(function(firebaseUser){
            var cookiesData = {};
            cookiesData['email'] = firebaseUser.email;
            cookiesData['refreshToken'] = firebaseUser.refreshToken;
            cookies.set("noopinionUser",cookiesData);
            //FirebaseUser user = authenticateUser.getCurrentUser();
            that.setState({redirect:true});

        }).catch(function (error) {
            that.setState({
                error : error.message
            })
        })
    }
    render() {
        if(this.state.redirect === true){
            console.log("hello");
            return(
                <Redirect to="/Dash" exact="true"/>
            )
        }

        return (
            <div className="no-login-body">
                <div className="no-login-box clearfix col-md-4 col-sm-8  col-xs-9  ">
                    <div className="col-xs-6 col-xs-offset-3" >
                    <a ><img src="img/logo.png"  alt="Subscribe icon" width="100%" /></a>
                    </div>
                    <div className="col-xs-12">
                        <h3 className="login-box-msg">Sign in to start your session</h3>
                        <div className="error-content">
                            {this.state.error}
                        </div>

                        <form method="post" onSubmit={this.onHandleLogin}>
                            <div className="form-group has-feedback">
                                <input type="email" className="form-control" placeholder="Email"
                                       value={this.state.username}
                                       name="username"
                                       onChange={this.onHandleChange}
                                       required
                                />
                                <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                            </div>
                            <div className="form-group has-feedback">
                                <input type="password" className="form-control" placeholder="Password"
                                       name="password"
                                       value={this.state.password}
                                       onChange={this.onHandleChange}
                                       required
                                />
                                <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                            </div>

                            <div className="row">
                                <div className="col-sm-4 col-xs-8">
                                    <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
                                </div>
                            </div>
                        </form>
                        <a href="#">I forgot my password</a>
                        <br/>
                        <a href="#">Register a new membership</a>

                    </div>
                </div>
            </div>
            
        );
    }
}
