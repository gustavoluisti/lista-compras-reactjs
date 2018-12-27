import React, { Component } from 'react'

import './List.css'
import Form from  './Form'


export default class createList extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    
    render(){
        return(
            <div className="page-container">
                <Form />
            </div>
        )
    }
}