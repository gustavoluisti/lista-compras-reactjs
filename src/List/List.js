import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket, faCheck } from '@fortawesome/free-solid-svg-icons'

import CustomCard from '../common/CustomCard'

const List = props => {
    return(
        <CustomCard 
                containerClass="list-container"
                footer={
                    <div className="list-footer">
                        <p>01/01/2019</p>
                        <p>R$ 100</p>
                    </div>
                }
            >
                <div>
                    <p className="title">Mês</p>
                        <div className="list-card-body">
                        <div className="list-card-item">
                            <FontAwesomeIcon icon={faShoppingBasket} size="sm" />
                            <p> 1 item(s) Restante</p>
                        </div>
                        <div className="list-card-item">
                        <FontAwesomeIcon icon={faCheck} size="sm" />
                            <p> 2 item(s) Comprados</p>
                        </div>
                    </div>
                </div>
            </CustomCard>
    )
}

export default List