import React from 'react'

import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'

import { InputAdornment } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import './List.css'

const units = ['kg', 'lt', 'un']

const Form = props => {
    return(
        <form className="form-container">
        <div className="form-row">
            <TextField
                label="Lista"
                name="list"
                value={''}
                onChange={() => {}}
                margin="normal"
                required 
            />
            <Button variant="outlined" color="primary">Adicionar</Button>                
        </div>
        <div className="form-row">
        <TextField
            label="Produto"
            name="product"
            value={''}
            onChange={() => {}}
            margin="normal"
            required
        />
        <TextField
            label="Quantidade"
            name="quantity" 
            value={''}
            onChange={() => {}}
            margin="normal"
            required
        />
        <TextField
            select
            label="Unidade"
            name="unity"
            value={''}
            onChange={() => {}}
            margin="normal"
            required
        >
            { units.map( option => 
                <MenuItem key={option} value={option}>{option}</MenuItem>
            )}
        </TextField>
    

        <TextField
            label="Preço"
            name="price"
            value={''}
            onChange={() => {}}
            margin="normal"
            InputProps={{
                startAdornment: <InputAdornment position="start">R$</InputAdornment>
            }}
        />
        </div>
        

    </form>
    )
}

export default Form