import React from 'react'

import { faShoppingBasket, faCheck } from '@fortawesome/free-solid-svg-icons'

import CustomCard from '../common/CustomCard'
import ListFooter from './ListFooter'
import ListItem from './ListItem'

const List = props => {
    return(
        <CustomCard 
                containerClass="list-container"
                link="/lista"
                footer={ <ListFooter />}>
                <div>
                    <p className="title">Mês</p>
                        <div className="list-card-body">
                        <ListItem icon={faShoppingBasket} item="1 item(s) Restante" />
                        <ListItem icon={faCheck} item=" 2 item(s) Comprados" />
                    </div>
                </div>
            </CustomCard>
    )
}

export default List