import React from 'react';
import './darkmode.css';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root:{
        width: '100vw', 
        height:'100vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },    
}));
  
export default function BuyButton(props){
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.root}>
                <button className="btn">
                    <div className="bg">
                        <span>Buy</span>
                    </div>
                </button>
            </div>
        </React.Fragment>
    )
}