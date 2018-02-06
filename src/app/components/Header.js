import React, { Component } from "react";
import {Link} from 'react-router-dom';

export class Header extends React.Component {
    render(){
        return(

            <header className="main-header">

                <Link to="/Dash" className="logo">
                    <span className="logo-mini"><b>N</b>O</span>
                    <span className="logo-lg"><b>No</b>Opinion</span>
                </Link>
                <nav className="navbar navbar-static-top">
                    <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                        <span className="sr-only">Toggle navigation</span>
                    </a>
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            <li className="dropdown messages-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="fa fa-envelope-o"></i>
                                    <span className="label label-success">1</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="header">You have 1 messages</li>
                                    <li>
                                        <ul className="menu">
                                            <li>
                                                <a href="#">
                                                    <div className="pull-left">
                                                        <img src="img/avatar04.png" className="img-circle" alt="User Image" />
                                                    </div>
                                                    <h4>
                                                        Team
                                                        <small><i className="fa fa-clock-o"></i> 5 mins</small>
                                                    </h4>
                                                    <p>Hey, k cha ho kabar?</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

        );
    }
}

