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

        //console.log(role_coll);
        //console.log(userList);
        return _.map(userList, (user,key)=>{
            const roleId = user.role;
            //console.log(typeof (roleList[roleId]))
            const roleTitle = (typeof (roleList[roleId]) === 'undefined')?'noRole':roleList[roleId].title;
            return(
                <tr key={key}>
                    <td>{user.firstName+' '+ user.lastName}</td>
                    <td>{roleTitle}</td>
                    <td>{user.email}</td>
                </tr>
            )


        })
    }
    render(){
        return (
            <div className="row">
                <div className="col-sm-12">
                    <h1>List of User Details</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>User Name</th>
                                <th>User Role</th>
                                <th>User Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderUser()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
