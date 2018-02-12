import React, { Component } from 'react';
import {feedList} from "../firebase";
import uuid from 'node-uuid';
import * as firebase from 'firebase';
import Notifications, {notify} from 'react-notify-toast';
import _ from 'lodash';



export class AddRssFeed extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            rssPostion :["Far Left","Left","Center","Right","Far Right"],
            rssFeedPosition:'',
            title:'',
            description:'',
            url:'',
            error:'',
            actionType:'Save',
            rssKey:'',
            rssFeed:{},
            errorMessage:''

        }
        this.onHandleChange = this.onHandleChange.bind(this);
        this.renderPosition = this.renderPosition.bind(this);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
    }
    componentWillReceiveProps(nextProps)
    {
        var rssFeed = nextProps.rssFeed;
        var rssKey = nextProps.rssKey;
        if(rssKey !== ''){
            this.setState({
                title: rssFeed.title,
                description: rssFeed.description,
                rssFeedPosition: rssFeed.rssFeedPosition,
                url: rssFeed.url,
                actionType:'Edit',
                rssKey:rssKey
            })
        }
    }

    renderPosition(){
        return this.state.rssPostion.map((position, index) => {
            return (
                <option key={index} value={position} >{position}</option>
            )
        })
    }
    onHandleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    onHandleSubmit(e) {
        e.preventDefault();
        var {rssFeedPosition, title, description, url, rssKey, actionType} = this.state;
        var rssObject = {
            "rssFeedPosition": rssFeedPosition,
            "title": title,
            "description": description,
            "url": url
        }
        if (actionType === 'Save') {
            feedList.orderByChild("title").equalTo(rssObject.title)
                .once("value", snapshot => {
                    const feedData = snapshot.val();
                    if (feedData) {
                        let myColor = {background: '#84130d', text: "#FFFFFF"};
                        notify.show("Rss Feed with title " + title + " already existed", "custom", 5000, myColor);
                        return false;
                    }
                    else {
                        this.createRssFeed(rssObject);
                    }
                })
        }else {
            feedList.orderByChild("title").equalTo(rssObject.title)
                .once("value", snapshot => {
                    const feedData = snapshot.val();
                    var feedKey = '';
                    _.map(feedData, (feed, key) => {
                        feedKey = key;
                    })
                    if (feedData && feedKey !== rssKey) {
                        let myColor = {background: '#84130d', text: "#FFFFFF"};
                        notify.show("Rss Feed with title " + title + " already existed", "custom", 5000, myColor);
                        return false;
                    } else {
                        this.editFeed(rssObject, rssKey);
                    }
                })
            }
        }
    editFeed(rssObject,rssKey){
        this.setState({errorMessage:"error"});
        var that = this;
        firebase.database().ref('/rssFeedList/'+rssKey).set({
            title:rssObject.title,
            description: rssObject.description,
            url : rssObject.url,
            rssFeedPosition: rssObject.rssFeedPosition
        }).then(()=>{
            let myColor = {background: '#38D996', text: "#FFFFFF"};
            notify.show("Successfully Updated", "custom", 5000, myColor);
            that.setState({
                title:'',
                actionType:'Save',
                url: '',
                description: '',
                rssFeedPosition:''
            })
        },(error)=>{
            let myColor = {background: '#84130d', text: "#FFFFFF"};
            notify.show(error.message, "custom", 5000, myColor);
        })
    }

        createRssFeed(rssObject){
        var that = this;
        feedList.push(rssObject, function (error) {
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
                    url: ''
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
                <div className="col-sm-12">
                    <form onSubmit={this.onHandleSubmit}>
                        <h1>Add New RSS Feed Site</h1>
                        <div className="form-group">
                            {/*<input type="hidden" value={this.state.role_id}/>*/}
                            <div className="form-group">
                                <label htmlFor="inputState">Rss Feed Position</label>
                                <select id="inputState" className="form-control" defaultValue="" name="rssFeedPosition"
                                        value={this.state.rssFeedPosition} onChange={this.onHandleChange}>
                                    <option value="" disabled="disabled">Choose...</option>
                                    {this.renderPosition()}
                                </select>
                            </div>
                            <label htmlFor="exampleInputEmail1">Rss Feed Title</label>
                            <input type="text"
                                   className="form-control"
                                   id="exampleInputEmail1"
                                   placeholder="Title"
                                    name="title"
                                    ref="title"
                                   onChange={this.onHandleChange}
                                   value={this.state.title}
                                    required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Rss Feed Url</label>
                            <input type="text"
                                   className="form-control"
                                   id="url"
                                   placeholder="Site URL"
                                   value={this.state.url}
                                    name="url"
                                    onChange={this.onHandleChange}/>
                        </div>
                        <button type="submit" className="btn btn-primary">{this.state.actionType}</button>
                    </form>
                </div>
            </div>
        );
    }
}
