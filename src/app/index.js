import React, { Component } from 'react';
import { render } from "react-dom";
import { Switch, BrowserRouter, Route, browserHistory, HashRouter } from 'react-router-dom';
import {Home} from "./components/Home";
import {About} from "./components/About";
import {Loginform} from "./components/Loginform";
import {Dash} from "./components/Dash";
import Cookies from "universal-cookie";
import {AddRole} from "./components/AddRole";
import {AddUser} from "./components/AddUser";
import {RssFeedCron} from "./components/RssFeedCron";
import {RssFeedManagement} from "./components/RssFeedManagement";
const cookies = new Cookies();


export class App extends React.Component {
    componentWillMount(){
        if(!cookies.get("noOpinionUser")){
            console.log("no cookies");
            console.log(this.props.location);
        }else{
            console.log("yes cookies");
        }
    }

    render() {
        return (
            <HashRouter>

                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/dashboard' component={Dash} />
                    <Route exact path='/login' component={Loginform} />
                    <Route exact path='/aboutus' component={About} />
                    <Route exact path='/RssFeedCron' component={RssFeedCron}/>

                    <Dash>
                        <Route component={AddRole} path="/Add-Role" pattern="/Add-Role"  />
                        <Route component={AddUser} path="/Add-User" pattern="/Add-User"  />
                        <Route exact path='/Rss' component={RssFeedManagement}/>

                    </Dash>

                </Switch>

            </HashRouter>

        );
    }
}


render (<App/>,window.document.getElementById("app"));