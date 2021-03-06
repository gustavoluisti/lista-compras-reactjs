import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia'
import Divider from '@material-ui/core/Divider'
import './CustomCard.css'
import { Link } from 'react-router-dom'

const CustomCard = props => {
    return(
        <div className={props.containerClass}>
            <Link to={props.link}>
                <Card className="card">
                    <CardActionArea className="card-action-area">
                        {   props.image && 
                        <CardMedia
                            component="img"
                            className="card-img"
                            height="100"
                            image={props.image}
                            title="image"
                        />
                            }
                        <CardContent className="card-content">
                            <div>
                                {props.children}
                            </div>
                        </CardContent>
                    </CardActionArea>
                    {
                        props.footer && (
                            <div>
                                <Divider />
                                <CardActions className="card-footer">
                                    {props.footer}
                                </CardActions>
                            </div>
                        )
                    }
                </Card>
            </Link>
           
            </div>
    )
}

export default CustomCard