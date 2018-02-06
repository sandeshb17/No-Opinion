// Content.js

import React, { Component } from 'react';
import {role_coll} from "../firebase";
import {AddUser} from "./AddUser";
import {ListUser} from "./ListUser";
import {appUser} from "../firebase"


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
            <div>
                <div className="row">

                </div>
                <AddUser roleList={this.state.roleList}/>
                <ListUser userList={this.state.userList} role_coll = {this.state.roleList}/>
            </div>
        )
    }
}