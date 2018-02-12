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

export class About extends React.Component {
    render(){
        return(
            
            <div className=" landing-page ">
                <PageHeader/>  
                <div className="row ">                
                     
                    <div className="no-about clearfix"> 
                        <div className="col-xs-12 col-sm-4 col-md-4 about-text"><h3>About Us<br/></h3>
                            <p className="lead">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print   
                            </p>
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4"><img className="no-box-shadow" src="img/photo4_2.jpg"  alt="photo about" width="100%" /></div>                 
                        <div className="col-xs-12 col-sm-4 col-md-4 about-text">
                            
                            <p className="lead">Each purchase of Stack includes six months of free support, including access to our dedicated support forum. In addition to support you'll recieve lifetime updates, including new content and bug-fixes.
                            </p>
                            <button type="button" className="btn btn-primary btn-block btn-flat" data-toggle="modal" data-target="#myModal">Login</button>

                            <div className="modal fade " id="myModal" role="dialog">
                                <div className="modal-dialog">
                                
                                <div className="modal-content">
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">X</button>
                                    </div>
                                    <div className="modal-body">
                                    <Loginform/>
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

