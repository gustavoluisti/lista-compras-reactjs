import React, { Component } from 'react'

import AppBar from '@material-ui/core/AppBar';

export default class Header extends Component{
    render(){
        return(
            <div>
                <AppBar position="static" color="primary">
                    <div className="header">
                        <p className="title">Lista </p>
                    </div>
                </AppBar>
            </div>
        )
    }
}