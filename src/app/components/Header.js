import React from "react";

export class Header extends React.Component {
    render(){
        return(

            <header className="april-2016" id="nav-bar-2017">
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

        );
    }
}