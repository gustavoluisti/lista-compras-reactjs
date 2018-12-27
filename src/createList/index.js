import React, { Component } from 'react'


import Form from  './Form'
import CustomCard from '../common/CustomCard'
import checkbox from '@material-ui/core/Checkbox'
import Typography from '@material-ui/core/Typography'
import Checkbox from '@material-ui/core/Checkbox';

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

            <div className="list-items-container">
                <CustomCard
                    link="#"
                    containerClass="list-item"
                >
                <div>
                    <div className="list-item-header">
                        <Typography variant="subtitle1" component="h2">Café</Typography>
                        <Checkbox />
                    </div>
                        <Typography component="p">1 unidade</Typography>
                        <Typography component="p">R$ 10.00</Typography>
                </div>
                </CustomCard>
            </div>
            </div>
        )
    }
}