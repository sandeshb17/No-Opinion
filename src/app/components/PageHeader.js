import React, { Component } from "react";

import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';


export class PageHeader extends Component {
    render(){
        
        return(
            
           
            <div className="row">
               <div className="col-md-12 no-head  center-content pd-10">
                        <Link to="/"><img src="img/logo.png"  alt="Subscribe icon" width="25%" /></Link>
                    </div>
                
                    <div className="no-nav col-md-12 center-content">
                            <ul>
                                <li ><a className="active" href="#">Daily news</a></li>
                                <li ><a href="#">The App</a></li>
                                <li ><a href="#">Fact Guides</a></li>
                                <li ><a href="#">Fact Leaders</a></li>
                                <li ><Link to="/aboutus">About us</Link></li>
                            </ul>
                    </div>
            </div>

        );
    }
}

