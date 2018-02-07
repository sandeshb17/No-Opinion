// SideBar.js

import React, { Component } from 'react';
import {Link, BrowserRouter as Router, Route} from 'react-router-dom';
import {User} from "./User";
import {Dash} from "./Dash";
import {Role} from "./Role";
import {RssFeedManagement} from "./RssFeedManagement";

export class SideBar extends Component {
    constructor(props){
        super(props);
        this.state={
            errorMessages:false
        }
    }
    render(){
        return (
            <Router>
                <div>
                    <aside className="main-sidebar">
                        <section className="sidebar">
                            <div className="user-panel">
                                <div className="pull-left image">
                                    <img src="./img/PIC.jpg" className="img-circle" alt="User Image" />
                                </div>
                                <div className="pull-left info">
                                    <p>Sandesh Bhetwal</p>
                                    <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                                </div>
                            </div>
                            <ul className="sidebar-menu" data-widget="tree">
                                <li className="header">MAIN NAVIGATION</li>
                                <li className="treeview">
                                    <a href="">
                                        <i className="fa fa-files-o"></i>
                                        <span>User Management</span>
                                    </a>
                                    <ul className="treeview-menu">
                                        <li><Link to="/Role"><i className="fa fa-circle-o"></i>Role</Link></li>
                                        <li><Link to="/User"><i className="fa fa-circle-o"></i>User</Link></li>
                                    </ul>
                                </li>
                                <li className="header">RSS Feed Management</li>
                                <li className="treeview">
                                    <a href="#">
                                        <i className="fa fa-files-o"></i>
                                        <span>Rss Feed</span>
                                        <span className="pull-right-container">
                                            <span className="label label-primary pull-right"></span>
                                            </span>
                                    </a>
                                    <ul className="treeview-menu">
                                        <li><Link to="/Rss"><i className="fa fa-circle-o"></i>Add Rss Feed</Link></li>
                                    </ul>
                                </li>

                            </ul>
                        </section>
                    </aside>

                    <div className="content-wrapper">
                        <Route exact path="/dashboard" component={Dash}/>
                        <Route exact path='/Role' component={Role} />
                        <Route exact path='/User' component={User} />
                        <Route exact path='/Rss' component={RssFeedManagement} />
                    </div>
                </div>
            </Router>
        );
    }
}