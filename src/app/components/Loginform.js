import React from "react";
import { LoginPage } from "reactjs-admin-lte";

export class Loginform extends React.Component {
    render() {
        return (
            <div className="no-login-body">
                <div className="no-login-box clearfix">
                    <div className="col-xs-6 col-xs-offset-3" >
                    <a ><img src="img/logo.png"  alt="Subscribe icon" width="100%" /></a>
                    </div>
                    <div className="col-xs-12">
                        <h3 className="login-box-msg">Sign in to start your session</h3>

                        <form method="post">
                            <div className="form-group has-feedback">
                                <input type="email" className="form-control" placeholder="Email"/>
                                <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                            </div>
                            <div className="form-group has-feedback">
                                <input type="password" className="form-control" placeholder="Password"/>
                                <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                            </div>

                            <div className="row">
                                <div className="col-xs-8">
                                <input type="checkbox" name="remember" value="rememberme"/> Remember Me
                                </div>

                                <div className="col-xs-4">
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
            
        )
    }
}