import React from 'react'
import CustomCard from '../common/CustomCard'
import Typography from '@material-ui/core/Typography'
import Checkbox from '@material-ui/core/Checkbox'
import ListItemFooter from '../createList/ListItemFooter'

const ListItem = props => (
    <div className="list-items-container">
                <CustomCard 
                    link="#"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GPlrnw9cdOVgBkkSPJOvBn08G7CGQG8H-Xm4Ssz18-3z856p"
                    containerClass="list-item"
                    footer={<ListItemFooter />}
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
)

export default ListItem