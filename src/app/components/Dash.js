import React from "react";
import { Box } from "reactjs-admin-lte";

import {Header} from "./Header";
import {SideBar} from "./SideBar";
import {Content} from "./Content";

export class Dash extends React.Component {
    render(){
        return(
        <div>
            <Header />    
            <SideBar/>
         </div>
        );
    }


}