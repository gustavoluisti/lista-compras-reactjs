import React, { Component } from 'react'

import AppBar from '@material-ui/core/AppBar'
import { Link } from 'react-router-dom'

export default class Header extends Component{
    render(){
        return(
            <div>
                <AppBar position="static" color="primary">
                    <div className="header">
                        <Link to="/">
                        <p className="title text-left">Lista </p>
                        </Link>
                    </div>
                </AppBar>
            </div>
        )
    }
}