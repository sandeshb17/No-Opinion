import React, { Component } from 'react';
import _ from 'lodash';
import {Confirm} from "react-confirm-bootstrap";

export class ListRole extends React.Component {
    constructor(props){
        super(props);
        this.state={
            roleList:{},
            showDialog : false
        }
    }
    onHandleEdit(role,key){
        this.props.onHandleEdit(role, key);
    }
    onHandleDelete(key){
        this.props.onHandleDeleteProps(key);
    }
    renderRole(){
        var roleList = this.props.roleList;
        return _.map(roleList, (role,key)=>{
            return(
                <tr key={key}>
                    <td>{role.title}</td>
                    <td>{role.description}</td>
                    <td><button className="btn btn-primary" onClick={this.onHandleEdit.bind(this, role, key)}>Edit</button></td>
                </tr>
            )


        })
    }
    render(){
        return (
            <div>
                <h1>List of User Roles</h1>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderRole()}
                    </tbody>
                </table>

            </div>
        )
    }
}
