import React from 'react'

import './Home.css'


import NewList from './NewList'
import List from '../List/List'

const Home = props => {
    return (
        <div className="page-container">
               <NewList />
                <List />
        </div>
    )
}

export default Home