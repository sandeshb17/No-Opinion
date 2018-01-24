// SideBar.js

import React, { Component } from 'react';

export class SideBar extends Component {
    render(){
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src="img/PIC.jpg" className="img-circle" alt="User Image" />
                        </div>
                        <div className="pull-left info">
                            <p>Sandesh Bhetwal</p>
                            <a href="#"><i className="fa fa-circle text-success"></i> Writer</a>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="header">MAIN NAVIGATION</li>
                        <li className="treeview">
                            <a href="#">
                                <i className="fa fa-file-text"></i>
                                <span>Add new article</span>
                            </a>
                        </li>
                        <li className="treeview">
                            <a href="#">
                                <i className="fa fa-files-o"></i>
                                <span>Drafts</span>
                                <span className="pull-right-container">
                                <span className="label label-primary pull-right">4</span>
                                </span>
                            </a>
                        </li>
                        <li className="treeview">
                            <a href="#">
                                <i className="fa fa-check-circle"></i>
                                <span>Completed</span>
                            </a>
                        </li>
                    </ul>

                </section>
            </aside>
        );
    }
}