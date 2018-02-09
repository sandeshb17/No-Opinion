// Content.js

import React, { Component } from 'react';
import {role_coll} from "../firebase";
import {Redirect, BrowserRouter as Router, Link} from "react-router-dom";

import Cookies from "universal-cookie";
import * as firebase from 'firebase';
import Notifications, {notify} from 'react-notify-toast';
import {AddRole} from "./AddRole";
import {ListUser} from "./ListUser";
import {ListRole} from "./ListRole";
const cookies = new Cookies();


export class Role extends Component {
    constructor(props){
        super(props);
        this.state={
            roleList:{},
            role:{},
            role_key:'',
            errorMessage:'',
            Redirect:false,
        }
        this.onHandleRoleEdit = this.onHandleRoleEdit.bind(this);
        this.onHandleDeleteProps = this.onHandleDeleteProps.bind(this);
    }
    componentDidMount(){

        role_coll.on('value',snapshot =>{
            this.setState({
                roleList : snapshot.val()
            })
        })
    }

    onHandleRoleEdit(role, key){
        this.setState({role:role, role_key:key});
    }
    onHandleDeleteProps(key){
        this.setState({errorMessage:"success"});
        firebase.database().ref('/roles/'+key).remove().then(()=>{
            let myColor = {background: '#38D996', text: "#FFFFFF"};
            notify.show("Successfully Deleted", "custom", 5000, myColor);
        },(error )=> {
            let myColor = {background: '#84130d', text: "#FFFFFF"};
            notify.show(error.message, "custom", 5000, myColor);
        });
    }
    render(){
        var {roleList,role,role_key} = this.state;
        if(this.state.redirect === true){
            return(
                <Redirect to="/" exact="true"/>
            )
        }
        //console.log(roleList.size());
        /*if(isEmpty(roleList)){
            /!*return(
                <div>Loading</div>
            )*!/
        }*/
        return (
            <div className="container">
                <div className="row">
                    <div style={{"display": (this.state.errorMessages)!==""?"":"none","position":"absolute","zIndex":"99999"}}>
                        <Notifications/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-5">
                        <AddRole role={role} roleList={roleList} role_key={role_key}/>
                    </div>
                    <div className="col-sm-5">
                        <ListRole roleList={roleList} onHandleEdit={this.onHandleRoleEdit} onHandleDeleteProps={this.onHandleDeleteProps}/>
                    </div>
                </div>


            </div>
        )
    }
}