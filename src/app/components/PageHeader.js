import React, { Component } from "react";
import {Link} from "react-router-dom";

export class PageHeader extends Component {
    render(){
        
        return(
            
           
            <div className="row pg-head">
                    <div className="col-md-12 no-head  center-content pd-10 clearfix">
                        <Link className="col-xs-9 fl" to="/"><img src="img/logo.png"  alt="Subscribe icon" width="25%" /></Link>
                      <button className="fr" type="button" data-toggle="collapse" data-target="#myNavbar">
                        <div></div>
                        <div></div>
                        <div></div>                       
                        </button>
                    </div>
                    <div id="myNavbar" className="collapse">
                    <div className="no-nav col-md-12 center-content ">
                    <ul>
                        <Link to="#"><li  className="col-xs-12">Daily news</li></Link>
                        <Link to="#"><li  className="col-xs-12">The App</li></Link>
                        <Link to="#"><li  className="col-xs-12">Fact Guides</li></Link>
                        <Link to="#"><li  className="col-xs-12">Fact Leaders</li></Link>
                        <Link to="/aboutus"><li  className="col-xs-12">About us</li></Link>
                    </ul>
                    </div>  
                    </div>
                    

                    
            </div>

        );
    }
}

