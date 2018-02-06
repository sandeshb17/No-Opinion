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
                <div className="card"  key={key}>
                    <div className="card-block">
                        <h5 className="card-title">{role.title}</h5>
                        <p className="card-text">{role.description}</p>
                        <button className="btn btn-primary" onClick={this.onHandleEdit.bind(this, role, key)}>Edit</button>

                        <Confirm
                            onConfirm={this.onHandleDelete.bind(this,key)}
                            body="Are you sure you want to delete this?"
                            confirmText="Confirm Delete"
                            title="Delete Role">
                            <button className="btn btn-danger">Delete</button>
                        </Confirm>
{/*
                        <button className="btn btn-danger" onClick={this.onHandleDelete.bind(this,key)}>Delete</button>
*/}
                    </div>
                </div>
            )


        })
    }
    render(){
        return (
            <div>
                <h1>List Role</h1>
                {this.renderRole()}
            </div>
        )
    }
}
