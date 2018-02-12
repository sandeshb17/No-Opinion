// Content.js

import React, { Component } from 'react';
import {role_coll} from "../firebase";
import {AddUser} from "./AddUser";
import {ListUser} from "./ListUser";
import {appUser} from "../firebase";

import Notifications, {notify} from 'react-notify-toast';


export class User extends Component {
    constructor(props){
        super(props);
        this.state={
            userList:{},
            errorMessage:'',
            userDetailList:{}
        }
    }
    componentDidMount(){
        role_coll.on('value',snapshot =>{
            this.setState({
                roleList : snapshot.val()
            })
        })
        appUser.on('value',snapshot =>{
            this.setState({
                userList : snapshot.val()
            })
        })
    }
    render(){
        return (
            <div className="container">

                <div className="row">
                    <div className="col-sm-5">
                        <AddUser roleList={this.state.roleList}/>
                    </div>
                    <div className="col-sm-5">
                        <ListUser userList={this.state.userList} role_coll = {this.state.roleList}/>
                    </div>
                </div>


            </div>

        )
    }
}