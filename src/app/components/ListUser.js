import React, { Component } from 'react';
import {role_coll} from "../firebase";
import _ from 'lodash';
import {Confirm} from "react-confirm-bootstrap";

export class ListUser extends React.Component {
    constructor(props){
        super(props);
        this.state={
            userList:{}
        }
    }
    /*componentWillReceiveProps(nextProps){
        console.log(props);
    }*/
    renderUser(){
        var userList = this.props.userList;
        var roleList = this.props.role_coll;
        //console.log(userList);
        return _.map(userList, (user,key)=>{
            const roleId = user.role;
            const roleTitle = roleList[roleId].title;
            return(
                <tr key={key}>
                    <td>{user.firstName+' '+ user.lastName}</td>
                    <td>{roleTitle}</td>
                </tr>
            )


        })
    }
    render(){
        return (
            <div className="col col-md-7">
                <h1>List User</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.renderUser()}

                    </tbody>
                </table>


            </div>
        )
    }
}
