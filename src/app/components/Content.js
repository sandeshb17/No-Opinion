// Content.js

import React, { Component } from 'react';

export class Content extends React.Component {
    render(){
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Dashboard

                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                        <li className="active">Dashboard</li>
                    </ol>
                </section>
                <section className="content">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="info-box">
                                <span className="info-box-icon bg-yellow"><i className="fa fa-files-o"></i></span>

                                <div className="info-box-content">
                                    <span className="info-box-text">Total Articles</span>
                                    <span className="info-box-number">15</span>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="timeline">

                                <li className="time-label">
                                    <span className="bg-red">
                                        23 Jan. 2018
                                    </span>
                                </li>

                                <li>
                                    <i className="fa fa-envelope bg-blue"></i>
                                    <div className="timeline-item">
                                        <span className="time"><i className="fa fa-clock-o"></i> 12:05</span>

                                        <h3 className="timeline-header"><a href="#">First News</a> ...</h3>

                                        <div className="timeline-body">
                                           This is just a content for the first news. All articles will be shown in timeline.
                                        </div>

                                        <div className="timeline-footer">
                                            <a className="btn btn-primary btn-xs">...</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <i className="fa fa-user bg-aqua"></i>

                                    <div className="timeline-item">
                                        <span className="time"><i className="fa fa-clock-o"></i> 5 mins ago</span>

                                        <h3 className="timeline-header no-border"><a href="#">Sarah Young</a> edited your article.</h3>
                                    </div>
                                </li>
                                <li>
                                    <i className="fa fa-comments bg-yellow"></i>

                                    <div className="timeline-item">
                                        <span className="time"><i className="fa fa-clock-o"></i> 27 mins ago</span>

                                        <h3 className="timeline-header"><a href="#">Jay White</a> commented on your article</h3>

                                        <div className="timeline-body">
                                            Everything looks good. The arguments are valid and neutral instead of being ambigious and misunderstanding.
                                        </div>
                                        <div className="timeline-footer">
                                            <a className="btn btn-warning btn-flat btn-xs">View comment</a>
                                        </div>
                                    </div>
                                </li>
                                <li className="time-label">
                                  <span className="bg-green">
                                    25 Jan. 2018
                                  </span>
                                </li>
                                <li>
                                    <i className="fa fa-camera bg-purple"></i>

                                    <div className="timeline-item">
                                        <span className="time"><i className="fa fa-clock-o"></i> 2 days ago</span>

                                        <h3 className="timeline-header"><a href="#">Mina Lee</a> uploaded new photos</h3>

                                        <div className="timeline-body">
                                            <img src="http://placehold.it/150x100" alt="..." className="margin"/>
                                                <img src="http://placehold.it/150x100" alt="..." className="margin"/>
                                                    <img src="http://placehold.it/150x100" alt="..." className="margin"/>
                                                        <img src="http://placehold.it/150x100" alt="..." className="margin"/>
                                        </div>
                                    </div>
                                </li>

                                ...

                            </ul>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}