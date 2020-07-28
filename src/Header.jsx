import React from 'react'
import { AppBar, Typography, makeStyles, Toolbar } from '@material-ui/core'
import AcUnitIcon from '@material-ui/icons/AcUnit';

const useStyles = makeStyles(() => ({
    typographyStyles: {
        flex: 1
    }
}))

export const Header = () => {
    const classes = useStyles()
    return (
       <AppBar position='static'>
           <Toolbar>
           <Typography className={classes.typographyStyles}>
                    Header
               </Typography>
               <AcUnitIcon/>
           </Toolbar> 
       </AppBar>
    )
}
// import React from "react";
// import { AppBar, Toolbar, Typography } from "@material-ui/core";
// import AcUnitRoundedIcon from "@material-ui/icons/AcUnitRounded";
// import { makeStyles } from "@material-ui/styles";

// const useStyles = makeStyles(() => ({
//   typographyStyles: {
//     flex: 1
//   }
// }));

// const Header = () => {
//   const classes = useStyles();
//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Typography className={classes.typographyStyles}>
//           Anthony sistilli
//         </Typography>
//         <AcUnitRoundedIcon />
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;