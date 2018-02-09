// Content.js

import React, { Component } from 'react';
import {role_coll} from "../firebase";
import {Redirect, BrowserRouter as Router, Link} from "react-router-dom";

import Cookies from "universal-cookie";
import * as firebase from 'firebase';
import Notifications, {notify} from 'react-notify-toast';
import _ from 'lodash';
import {AddRssFeed} from "./AddRssFeed";
import {ListRssFeed} from "./ListRssFeed";
import {feedList} from "../firebase";

const cookies = new Cookies();


export class RssFeedManagement extends Component {
    constructor(props){
        super(props);
        this.state={
            rssFeedList:{},
            errorMessage:'',
            Redirect:false,
            rssFeed : {},
            rssFeedKey:''
        }
        this.onHandleEdit = this.onHandleEdit.bind(this);
        this.onHandleDeleteProps = this.onHandleDeleteProps.bind(this);
    }
    componentDidMount(){

        feedList.on('value',snapshot =>{
            this.setState({
                rssFeedList : snapshot.val()
            })
        })
    }
    onHandleEdit(rssFeed, key){
        this.setState({
            rssFeed : rssFeed,
            rssFeedKey: key
        })
    }

    onHandleDeleteProps(key){
        this.setState({errorMessage:"success"});
        firebase.database().ref('/rssFeedList/'+key).remove().then(()=>{
            let myColor = {background: '#38D996', text: "#FFFFFF"};
            notify.show("Successfully Deleted", "custom", 5000, myColor);
        },(error )=> {
            let myColor = {background: '#84130d', text: "#FFFFFF"};
            notify.show(error.message, "custom", 5000, myColor);
        });
    }
    render(){
       /* var {roleList,role,role_key} = this.state;
        if(this.state.redirect === true){
            return(
                <Redirect to="/" exact="true"/>
            )
        }*/
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
                        <AddRssFeed rssFeed={this.state.rssFeed} rssKey = {this.state.rssFeedKey} />
                    </div>
                    <div className="col-sm-7">
                        <ListRssFeed rssFeedList={this.state.rssFeedList} onHandleEdit={this.onHandleEdit} onHandleDeleteProps={this.onHandleDeleteProps}/>
                    </div>
                </div>


            </div>

        )
    }
}