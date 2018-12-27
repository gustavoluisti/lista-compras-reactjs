import React from 'react'
import Form from './Form'
import ListItem from '../createList/ListItem'
import ListItemFooter from '../createList/ListItemFooter'

const CreateList = props => (
            <div className="page-container">
                <Form />
                <ListItem />
                <ListItemFooter />    
            </div>
        )
   
export default CreateList