import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ListItem = props => {
    return (
        <div className="list-card-item">
            <FontAwesomeIcon icon={props.icon} size="sm" />
            <p>{props.item}</p>
        </div>
    )
}

ListItem.prototypes = {
    icon: PropTypes.object.isRequired,
    item: PropTypes.object.isRequired,
}

export default ListItem