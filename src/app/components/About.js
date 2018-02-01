import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

  //component
import {PageHeader} from "./PageHeader";
import {PageFooter} from "./PageFooter";
import { Loginform } from "./Loginform";

export class About extends Component {
    render(){
        return(
            
            <div className=" landing-page ">
                
                <div className="row ">                
                    <PageHeader/>   
                    <div className="no-about"> 
                        <div className="col-sm-4 col-md-4 about-text"><h3>About Us<br/></h3>
                            <p className="lead">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print   
                            </p>
                        </div>
                        <div className="col-sm-4 col-md-4"><img className="no-box-shadow" src="img/photo4_2.jpg"  alt="photo about" width="100%" /></div>                 
                        <div className="col-sm-4 col-md-4 about-text">
                            <br/>
                            <br/>
                            <p className="lead">Each purchase of Stack includes six months of free support, including access to our dedicated support forum. In addition to support you'll recieve lifetime updates, including new content and bug-fixes.
                            </p>
                            <a data-toggle="modal" data-target="#myModal">Login</a>

                                <div className="modal p-10em fade" id="myModal" role="dialog">
                                    <div className="modal-dialog">
                                    
                                    <div className="modal-content">
                                        <div className="modal-header">
                                        <div>
                                            <button type="button " className="close fr" data-dismiss="modal">&times;</button>
                                            
                                        <Loginform/>
                                        </div>
                                        </div>
                                    </div>
                                    
                                    </div>
                                </div>
                        </div>                           
                    </div>
                </div>
                <PageFooter/>            
                
            </div>    

        );
    }
}

