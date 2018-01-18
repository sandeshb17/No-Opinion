import React from "react";
import { render } from "react-dom";
import {Header} from "./components/Header";
import {Home}  from "./components/Home";
import {SideBar} from "./components/SideBar";
import {Content} from "./components/Content";
import {Loginform} from "./components/Loginform";

class App extends React.Component {
    render(){
        return (
            <div>
                <Header/>
                <SideBar/>
                <Content/>

            </div>
        );

    }

}

render (<App/>,window.document.getElementById("app"));