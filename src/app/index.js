import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {
    IndexRoute,
    hashHistory
} from "react-router";
import { render } from "react-dom";

//components
import {Home} from "./components/Home";
import {Header} from "./components/Header";
import {Dash}  from "./components/Dash";
import {SideBar} from "./components/SideBar";
import {Content} from "./components/Content";
import {Loginform} from "./components/Loginform";
import {About} from "./components/About";


class App extends React.Component {
    render(){
        return (
            <Router history={hashHistory}>
            <div>
               <Route exact path='/' component={Home} >        

               </Route>       
               
               <Route exact path='/dashboard' component={Dash} />                        
                <Route exact path='/login' component={Loginform} />   
                <Route exact path='/aboutus' component={About} /> 
            </div>
                
            </Router>
        );

    }

}

render (<App/>,window.document.getElementById("app"));