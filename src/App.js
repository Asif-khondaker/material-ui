import React from 'react';
import './App.css';
import { Button, Typography, makeStyles, Grid } from '@material-ui/core'
import  {Header}  from './Header';
import { Content } from './Content';


// const useStyle = makeStyles({
//   helloThereStyle: {
//     fontStyle: "oblique",
//     color: "green",
//     fontSize: "70px"
//   },
//   buttonStyle: {
//     color: 'green',
//     borderBlockColor: 'yellow'
//   }
// })

function App() {

  //const classes = useStyle()
  return (
    // <>
    //  <div className="App">
    // <Typography className={classes.helloThereStyle} color="primary" variant='h1'>
    //   Hi, there
    // </Typography>
   
    //   <Button className={classes.buttonStyle} variant="outlined" color="secondary">THIS IS OUR FIRST BUTTON</Button>
    // </div>
    // </>
    <Grid container direction="column">
      <Grid item>
        <Header/>
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
        <Content />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
}

export default App;
