import React from 'react'
import Form from './Form'
import ListItem from '../createList/ListItem'
import ListItemFooter from '../createList/ListItemFooter'

import './List.css'

const CreateList = props => (
            <div className="page-container">
                <Form />
            <div className="list-items-container">
                <ListItem />
                <ListItemFooter />
            </div>
                    
            </div>
        )
   
export default CreateList