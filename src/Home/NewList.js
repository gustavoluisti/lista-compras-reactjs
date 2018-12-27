import React from 'react'
import CustomCard from '../common/CustomCard'

import './Home.css'

const NewList = props => {
    return (
             <CustomCard link="/lista" containerClass="new-list-container">
                <div>
                    <p className="title">Adicionar novas listas:</p>
                </div>
            </CustomCard>
    )
}

export default NewList