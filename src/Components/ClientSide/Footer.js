import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) => ({
    root:{
        width:'100vw',
        height:'80vh',
        marginTop:'2em',
        backgroundColor: "#303952",
        color:'#ffffff',
        //overflow: 'hidden',
    },
    ul:{
        listStyleType:'none',
        letterSpacing:3.3,
        lineHeight:2.5,
        fontWeight:'300'
    },  
    icons:{
        padding:20,
        fontSize:30,
    },
}))

export default function Footer(props){

    const classes=useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={1} style={{margin:'3em',padding:'2.5em'}}>
                <Grid items xs={12} sm={3}>
                    <ul className={classes.ul}>
                        <li>
                            Home
                        </li>
                        <li>Blog</li>
                    </ul>
                    <ul className={classes.ul}>
                        <h4>Categories</h4>
                        <li>Vegetarian Food</li>
                        <li>Diet Food</li>
                        <li>Beverages</li>
                    </ul>
                </Grid>
                <Grid items xs={12} sm={3} style={{marginLeft:'5em'}}>
                    <ul className={classes.ul}>
                        <h4>Terms & Policies</h4>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policies</li>
                        <li>Preferences</li>
                    </ul>
                </Grid>
                <Grid items xs={12} sm={3} style={{marginLeft:'5em',width:'40%'}}>
                    <h4 style={{letterSpacing:3.3}}>Follow Us On</h4>
                    <div className={classes.socialicons}>
                        <FacebookIcon  className={classes.icons}/> 
                        <InstagramIcon  className={classes.icons}/>
                        <TwitterIcon className={classes.icons}/>
                    </div>
                    <div>
                        <h4 style={{letterSpacing:3.3}}>Contact Info</h4>
                        <ul className={classes.ul}>
                            <li>Mail Us On :- xxx123@gmail.com</li>
                            <li>Contact :- 123567894</li>
                            <li>Location :- xxx</li>
                        </ul>                       
                    </div>                  
                </Grid>
            </Grid>
        </div>
    )
}