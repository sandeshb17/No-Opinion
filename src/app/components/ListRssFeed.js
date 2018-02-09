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

                <tr key={keys}>
                    <td>{rss.title}</td>
                    <td>{rss.url}</td>
                    <td>
                        <button className="btn btn-primary" onClick={this.onHandleEdit.bind(this, rss, keys)}>Edit</button>
                        &emsp;
                        <Confirm
                            onConfirm={this.onHandleDelete.bind(this,keys)}
                            body="Are you sure you want to delete this?"
                            confirmText="Confirm Delete"
                            title="Delete Rss Feed">
                            <button className="btn btn-danger">Delete</button>
                        </Confirm>
                    </td>
                </tr>

            )
            }
        )

    }
    render(){
        return (
            <div>
                <h1>List of RSS Feed Sites</h1>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Feed Site Title</th>
                        <th>Feed site URL</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderRssFeed()}
                    </tbody>
                </table>

            </div>
        )
    }
}
