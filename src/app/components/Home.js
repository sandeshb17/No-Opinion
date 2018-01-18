import React from "react";
import { Box } from "reactjs-admin-lte";

export class Home extends React.Component {
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">

                    </div>

                    <div className="col-sm-4 box">
                        <div className="row">
                            <div className="col-sm-1 col-md-1">
                            </div>
                            <div className="col-sm-10 col-md-10 box_inside">
                                <form className="reviews_await" >

                                    <input type="text" placeholder="Email"  className="log_user"
                                           autoFocus required/>

                                    <input type="password" placeholder="Password"  className="log_pass"
                                           required/>

                                    <button className="btn btn-primary btn_signin" style={{"outline":"none"}}>
                                       Sign In
                                    </button>
                                </form>
                                <br/>
                            </div>
                            <div className="col-sm-1 col-md-1">

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">

                    </div>
                </div>
            </div>
        );
    }


}