import React, { Component } from 'react';
import {role_coll} from "../firebase";
import * as firebase from 'firebase';
import Notifications, {notify} from 'react-notify-toast';
import _ from 'lodash';



export class AddRole extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            title:'',
            description:'',
            error:'',
            actionType:'Save',
            role_key:'',
            roleList:'',
            errorMessage:''

        }
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
    }
    componentWillReceiveProps(nextProps)
    {
        var roleList = nextProps.roleList;
        var role = nextProps.role;
        var role_key = nextProps.role_key;
        if(role_key !== ''){
            this.setState({
                title: role.title,
                description: role.description,
                actionType:'Edit',
                role_key:role_key
            })
        }
    }
    onHandleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    onHandleSubmit(e){
        e.preventDefault();
        var {role_key, title, description, actionType} = this.state;
           var  role = {
                title: title,
                description:description
            }
            if(actionType === 'Save'){
                role_coll.orderByChild("title").equalTo(role.title)
                    .once("value",snapshot => {
                    const roleData = snapshot.val();
                    if (roleData){
                        let myColor = {background: '#84130d', text: "#FFFFFF"};
                        notify.show("Role with title "+title+" already existed", "custom", 5000, myColor);
                        return false;
                    }else{
                        this.createRole(role);

                    }
                });
            }else{
                role_coll.orderByChild("title").equalTo(role.title)
                    .once("value",snapshot => {
                    const roleData = snapshot.val();
                    var roleKey = '';
                    _.map(roleData, (role,key)=>{
                        roleKey = key;
                    })
                    if (roleData && roleKey !== role_key){
                        let myColor = {background: '#84130d', text: "#FFFFFF"};
                        notify.show("Role with title "+title+" already existed", "custom", 5000, myColor);
                        return false;
                    }else{
                        this.editRole(role,role_key);
                    }
                });

            }

    }
    editRole(role,role_key){
        this.setState({errorMessage:"error"});
        var that = this;
        firebase.database().ref('/roles/'+role_key).set({
            title:role.title,
            description: role.description
        }).then(()=>{
            let myColor = {background: '#38D996', text: "#FFFFFF"};
            notify.show("Successfully Updated", "custom", 5000, myColor);
            that.setState({
                role_key:'',
                actionType:'Save',
                title: '',
                description: ''
            })
        },(error)=>{
            let myColor = {background: '#84130d', text: "#FFFFFF"};
            notify.show(error.message, "custom", 5000, myColor);
        })
    }
    createRole(role) {
        var that = this;
        role_coll.push(role, function (error) {
            that.errormessage = 'error';
            if (error) {
                let myColor = {background: '#84130d', text: "#FFFFFF"};
                notify.show(error.message, "custom", 5000, myColor);
            } else {
                let myColor = {background: '#38D996', text: "#FFFFFF"};
                notify.show("Successfully Created", "custom", 5000, myColor);
                that.setState({
                    role_id: '',
                    title: '',
                    description: ''
                })
            }
        });
    }
    render(){
        return (
            <div>
                <div className="row">
                    <div style={{"display": (this.state.errorMessages)!==""?"":"none","position":"absolute","zIndex":"99999"}}>
                        <Notifications/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <form onSubmit={this.onHandleSubmit}>
                            <h1>Add New Role</h1>
                            <div className="form-group">
                                <input type="hidden" value={this.state.role_id}/>
                                <label htmlFor="exampleInputEmail1">Role Title</label>
                                <input type="text"
                                       className="form-control"
                                       id="exampleInputEmail1"
                                       placeholder="Title"
                                       name="title"
                                       ref="title"
                                       onChange={this.onHandleChange}
                                       value={this.state.title}
                                       required
                                       maxLength="25"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Role Description</label>
                                <input type="text"
                                       className="form-control"
                                       id="roleDesc"
                                       placeholder="Description"
                                       value={this.state.description}
                                       name="description"
                                       onChange={this.onHandleChange}
                                maxLength="100"/>
                            </div>
                            <button type="submit" className="btn btn-primary">{this.state.actionType}</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
