import React from 'react'

import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ListItemFooter = () => (
    <div className="list-card-footer">
        <div className="list-card-footer-actions">
        <FontAwesomeIcon 
                icon={faTrash}
                color="f50057"
                size="1x"
            />
            <FontAwesomeIcon 
                icon={faPen}
                color="f50057"
                size="1x"
            />
        </div>
        <p>Total: R$ 50</p>
    </div>
)

export default ListItemFooter
