import React from 'react'


import Form from  './Form'
import CustomCard from '../common/CustomCard'
import Typography from '@material-ui/core/Typography'
import Checkbox from '@material-ui/core/Checkbox'
import { FontAwesomeIcon} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/react-fontawesome'

const CreateList = props => (
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
    const ListItemFooter = () => (
        <div className="list-card-footer">
            <div className="list-card-footer-actions">
                
            </div>
        </div>
    )

export default CreateList