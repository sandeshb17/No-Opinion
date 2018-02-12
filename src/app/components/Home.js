import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//component
import { Box } from "reactjs-admin-lte";
import {PageHeader} from "./PageHeader";
import {PageFooter} from "./PageFooter";


export class Home extends React.Component{
   
    render(){
        
           
        return(
            
            <div className=" landing-page" id="display1">
                <PageHeader/> 
                <div className="row ">                
                                   
                    <div className="no-banner col-xs-8  center-content m-t-25">
                        <a className="col-xs-2"><img src="img/no.png"  alt="no Opinion Image" width="100%" /></a>
                        <div className="col-xs-10 banner-head"><h1>No Opinion? Why not Subscribe</h1>
                        <strong>No Opinion</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print   
                        </div>
                    </div>
                    <div className="no-subscribe col-xs-12">
                        <div className="box effect pd-10 clearfix">
                            <span><img src="img/subs.png"  alt="Subscribe icon" height="45px" /></span>
                            <br/>
                            <span>Subscribe</span>
                            
                            <div className="col-md-12">
                                <input type="text" placeholder="Email"/>
                                <input type="submit" value="Submit"/>
                            </div>
                        </div>
                    </div>
                    <div className="no-body clearfix">
                    <div className="col-sm-6 col-xs-12 m-t-25 pd-25"><h1>No Opinion?</h1>
                        <strong>No Opinion</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print   
                    </div>
                    <div className="col-sm-6 col-xs-12 ">
                    <img src="img/bossimg.png"  alt="body Image" width="100%" />
                    </div>
                    </div>
                </div>                      
               
                <PageFooter/>            
                
            </div>    
            
        );
    }


}