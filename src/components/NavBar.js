import React from 'react'
import CustomBtn from './CustomBtn'
import Dice from '../Dice.jpg'
import Dice2 from '../Dice2.jpg'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"; 

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        '@media (max-width:780px)': { 
           flexDirection: "column"
          }
    },
    
    Dice2:{
        width: "100%", 
        display: "none", 
        '@media (max-width:780px)': { 
            display: "inline-block"
            }
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#4f25c8"
        },
        '@media (max-width:780px)': { 
            paddingBottom: "1rem"    }
    }
})

function NavBar() {
    const classes = styles()
    return (
            <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
                
                <img src={Dice2} alt ="Another load of Dice" width="70" height="50"/> 
                <Typography variant="h6" className={classes.menuItem}>
                   About
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Blog
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Careers
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Demos 
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Contact Us 
                </Typography>
                <CustomBtn txt="Trial Our Product"/>
            </Toolbar>
    )
}

export default NavBar