import React, { Component } from "react";

export class Header extends Component {
    render(){
        return(

            /*<header className="april-2016" id="nav-bar-2017">
                <div className="container">
                    <div className="row">
                        <div className="column-logo-no-form">
                            <a href="/" id="logo">
                                <img alt="theSkimm" className="img-responsive swap" src=""/>
                                    <h1 className="sr-only">
                                        theSkimm
                                    </h1>
                            </a>
                        </div>
                    </div>
                    <nav className="navbar-collapse collapse" id="nav-main">
                        <ul className="nav nav-justified">
                            <li className="hidden-xs show-xxxs"><a className="track-nav-click dailySkimmNavClick" href="">Daily News</a></li>
                            <li className="hidden-xs show-xxs"><a className="track-nav-click skimmAheadNavClick" href="">The App</a></li>
                            <li><a className="track-nav-click skimmGuidesNavClick" href="">Fact Guides</a></li>
                            <li><a className="track-nav-click skimmbassadorsNavClick" href="">Fact Leaders</a></li>
                            <li><a className="track-nav-click aboutUsNavClick" href="">About Us</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            */

            <header className="main-header">
                <a href="#" className="logo">
                    <span className="logo-mini"><b>N</b>O</span>
                    <span className="logo-lg"><b>No</b>Opinion</span>
                </a>
                <nav className="navbar navbar-static-top">
                    <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                        <span className="sr-only">Toggle navigation</span>
                    </a>
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            <li className="dropdown messages-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="fa fa-envelope-o"></i>
                                    <span className="label label-success">4</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="header">You have 4 messages</li>
                                    <li>
                                        <ul className="menu">
                                            <li>
                                                <a href="#">
                                                    <div className="pull-left">
                                                        <img src="img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                                                    </div>
                                                    <h4>
                                                        Support Team
                                                        <small><i className="fa fa-clock-o"></i> 5 mins</small>
                                                    </h4>
                                                    <p>Why not buy a new awesome theme?</p>
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

