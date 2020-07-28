import React from 'react'
import { CoffeeCard } from './CoffeeCard'
import { Grid } from '@material-ui/core'
import coffeeMakerList from './Constant'

const getCoffeeMakerCard = (obj) => {
    return (
        <Grid item xs={12} sm={4}>
    <CoffeeCard {...obj} />
    </Grid>
    )
}


export const Content = () => {
    return (
        <Grid container spacing={4}>        
            {coffeeMakerList.map(item => getCoffeeMakerCard(item))}
   
        </Grid>
    )
}
