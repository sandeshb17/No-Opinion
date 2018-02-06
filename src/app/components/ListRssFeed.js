import React, { Component } from 'react';
import _ from 'lodash';
import {Confirm} from "react-confirm-bootstrap";

export class ListRssFeed extends Component {
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
    renderRssFeed(){
        var rssFeedList = this.props.rssFeedList;
        return _.map(rssFeedList, (rss,keys)=>{
            return(
                <div className="card"  key={keys}>
                    <div className="card-block">
                        <h5 className="card-title">{rss.url}</h5>
                        <p className="card-text">{rss.description}</p>
                        <p className="card-text">{rss.url}</p>
                        <button className="btn btn-primary" onClick={this.onHandleEdit.bind(this, rss, keys)}>Edit</button>

                        <Confirm
                            onConfirm={this.onHandleDelete.bind(this,keys)}
                            body="Are you sure you want to delete this?"
                            confirmText="Confirm Delete"
                            title="Delete Rss Feed">
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
                <h1>List Rss Feed</h1>
                {this.renderRssFeed()}
            </div>
        )
    }
}
