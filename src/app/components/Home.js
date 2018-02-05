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
                                   
                    <div className="no-banner col-md-8  center-content m-t-25">
                        <a className="col-md-2"><img  className="fr" src="img/no.png"  alt="no Opinion Image" height="175px" /></a>
                        <div className="col-md-10 banner-head m-t-25"><h1>No Opinion? Why not Subscribe</h1>
                        <strong>No Opinion</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print   
                        </div>
                    </div>
                    <div className="no-subscribe m-t-25 ">
                        <div className="box effect pd-10">
                            <span><img src="img/subs.png"  alt="Subscribe icon" height="45px" /></span>
                            <br/>
                            <span>Subscribe</span>
                            <br/>
                            <div className="col-md-12">
                                <input type="text" placeholder="Email"/>
                                <input type="submit" value="Submit"/>
                            </div>
                        </div>
                    </div>
                    <div className="no-body">
                    <div className="col-md-6 m-t-25 pd-25"><h1>No Opinion?</h1>
                        <strong>No Opinion</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print   
                    </div>
                    <div className="col-md-6 ">
                    <img src="img/bossimg.png"  alt="body Image" height="300px" />
                    </div>
                    </div>
                </div>                      
               
                <PageFooter/>            
                
            </div>    
            
        );
    }


}