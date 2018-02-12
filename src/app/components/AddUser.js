import React, { Component } from 'react';
import Notifications, {notify} from 'react-notify-toast';
import _ from 'lodash';
import {appUser} from "../firebase";
import {authenticateUser} from "../firebase";



export class AddUser extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            FirstName:'',
            LastName:'',
            PhoneNumber:'',
            ActionType:'Save',
            Role:'',
            Email:'',
            Password:'',
            ConfirmPassword:'',
            ErrorMessage:'',
        }
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
    }

    onHandleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    onHandleSubmit(e){
        e.preventDefault();
        var {
            FirstName,
            LastName,
            PhoneNumber,
            Role,
            Email,
            Password,
            ConfirmPassword,
            ActionType
        } = this.state

        var userData = {
            firstName: FirstName,
            lastName: LastName,
            phoneNumber: PhoneNumber,
            role: Role,
            email: Email,
            password: Password
        }
        if(ActionType === 'Save'){
            appUser.orderByChild("email").equalTo(Email).once("value",snapshot => {
                const userInstance = snapshot.val();
                if (userInstance){
                    alert("email already exist")
                    /*let myColor = {background: '#84130d', text: "#FFFFFF"};
                    notify.show("Role with title "+title+" already existed", "custom", 5000, myColor);
                    return false;*/
                }else{
                    this.createUser(userData);
                }
            });
        }else{
            /*role_coll.orderByChild("title").equalTo(role.title).once("value",snapshot => {
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
            });*/

        }
    }
    createUser(userData) {
        console.log(userData);
        var that = this;
        authenticateUser.createUserWithEmailAndPassword
        (userData.email, userData.password).then(function (user) {
            if(user.uid){
                var userDetail ={
                    userId : user.uid,
                    firstName: userData.firstName,
                    lastName: userData.lastName,
                    phoneNumber: userData.phoneNumber,
                    role: userData.role,
                    email: userData.email
                }
                appUser.push(userDetail, function (error) {
                if (error) {
                    alert(error.message);
                    /*let myColor = {background: '#84130d', text: "#FFFFFF"};
                    notify.show(error.message, "custom", 5000, myColor);*/
                } else {
                    /*let myColor = {background: '#38D996', text: "#FFFFFF"};
                    notify.show("Successfully Created", "custom", 5000, myColor);*/
                    alert("successfully created");
                    that.setState({
                        FirstName:'',
                        LastName:'',
                        PhoneNumber:'',
                        Role:'',
                        Email:'',
                        Password:'',
                        ConfirmPassword:'',
                        actionType:'Save'
                    })
                }
            });
            }
        }).catch(function (error) {
            console.log(error);
        });


        /*appUser.push(userData, function (error) {
            that.errormessage = 'error';
            if (error) {
                alert(error.message);
                /!*let myColor = {background: '#84130d', text: "#FFFFFF"};
                notify.show(error.message, "custom", 5000, myColor);*!/
            } else {
                /!*let myColor = {background: '#38D996', text: "#FFFFFF"};
                notify.show("Successfully Created", "custom", 5000, myColor);*!/
                alert("successfully created");
                that.setState({
                    FirstName:'',
                    LastName:'',
                    PhoneNumber:'',
                    Role:'',
                    Email:'',
                    Password:'',
                    ConfirmPassword:'',
                    actionType:'Save'
                })
            }
        });*/
    }
    renderRole () {
        var roleList = this.props.roleList;
         return _.map(roleList, (role,key)=>{
            return (
                <option key={key} value={key} >{role.title}</option>
            )
        })
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
                        <h1>Add New User</h1>
                        <div className="form-group">
                                <label htmlFor="FirstName">First Name</label>
                                <input type="text"
                                       className="form-control"
                                       id="FirstName"
                                       placeholder="First Name"
                                        name="FirstName"
                                        ref="FirstName"
                                       onChange={this.onHandleChange}
                                       value={this.state.FirstName}
                                        required
                                       maxLength="50"/>

                        </div>

                        <div className="form-group">
                            <label htmlFor="LastName">Last Name</label>
                            <input type="text"
                                   className="form-control"
                                   id="LastName"
                                   placeholder="Last Name"
                                   name="LastName"
                                   ref="LastName"
                                   onChange={this.onHandleChange}
                                   value={this.state.LastName}
                                   required
                                   maxLength="50"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="PhoneNumber">Phone Number</label>
                            <input type="text"
                                   className="form-control"
                                   id="PhoneNumber"
                                   placeholder="Phone Number"
                                   name="PhoneNumber"
                                   ref="PhoneNumber"
                                   onChange={this.onHandleChange}
                                   value={this.state.PhoneNumber}
                                   required
                                   maxLength="13"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputState">Role</label>
                            <select id="inputState" className="form-control" defaultValue="" name="Role"
                                    value={this.state.Role} onChange={this.onHandleChange}>
                                <option value="" disabled="disabled">Choose...</option>
                                {this.renderRole()}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Email">Email</label>
                            <input type="text"
                                   className="form-control"
                                   id="Email"
                                   placeholder="Email"
                                   name="Email"
                                   ref="Email"
                                   onChange={this.onHandleChange}
                                   value={this.state.email}
                                   required
                                   maxLength="64"/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="Password">Password</label>
                        <input type="text"
                               className="form-control"
                               id="Password"
                               placeholder="New Password"
                               value={this.state.Password}
                               name="Password"
                               onChange={this.onHandleChange}
                               required
                               minLength="8"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="ConfirmPassword">Confirm Password</label>
                        <input type="text"
                               className="form-control"
                               id="ConfirmPassword"
                               placeholder="Confirm Password"
                               value={this.state.ConfirmPassword}
                               name="ConfirmPassword"
                               onChange={this.onHandleChange}
                               minLength="8"
                               required/>
                    </div>
                        <button type="submit" className="btn btn-primary">{this.state.ActionType}</button>
                    </form>
                </div>
                </div>
            </div>
        );
    }
}
