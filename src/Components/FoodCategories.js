import React,{useState} from 'react';
import {Button, Grid,TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Avatar from '@material-ui/core/Avatar';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme)=>({
    root:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'auto',
    },
    subdiv:{
        display:'flex',
        alignItems:'center',
        width:500,
        height:500,
        margin:10
    },
    input: {
        display: 'none',
      },
      formControl: {
        margin: theme.spacing(1),
        width:490,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
       
}))

export default function FoodCategories(){

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <div className={classes.subdiv}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <h2>Food Categories</h2>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Category Name" variant="outlined" fullWidth/>
                    </Grid>
                    <Grid item xs={6} style={{display:'flex',justifyContent:'flex-start',alignItems:'center'}}>
                    <span style={{fontSize:16}}>Upload Ad</span>
                        <input accept="image/*" className={classes.input} id="ad-button-file" type="file" />
                        <label htmlFor="ad-button-file">
                            <IconButton color="primary" aria-label="upload ad" component="span">     
                                <PhotoCamera/>
                            </IconButton>
                        </label> 
                    </Grid>
                    <Grid item xs={6} sm={6} style={{display:'flex',justifyContent:'flex-end',alignItems:'center'}}>
                        <Avatar alt="" variant="rounded" src=" " style={{width:'50px',height:'50px'}} />
                    </Grid>
                    <Grid item xs={6} style={{display:'flex',justifyContent:'flex-start',alignItems:'center'}}>
                    <span style={{fontSize:16}}>Upload Icon</span>
                        <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                        <label htmlFor="icon-button-file">
                            <IconButton color="primary" aria-label="upload icon" component="span">     
                                <PhotoCamera/>
                            </IconButton>
                        </label> 
                    </Grid>
                    <Grid item xs={6} sm={6} style={{display:'flex',justifyContent:'flex-end',alignItems:'center'}}>
                        <Avatar alt="" variant="rounded" src=" " style={{width:'50px',height:'50px'}} />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
                            <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            //value={age}
                            //onChange={handleChange}
                            label="Age"
                            >
                            <MenuItem value={'Activate'}>Activate</MenuItem>
                            <MenuItem value={'Deactivate'}>Deactivate</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={6} style={{padding:10}}>
                        <Button variant="contained" color="primary" fullWidth>Save</Button>
                    </Grid>
                    <Grid item xs={6} sm={6} style={{padding:10}}>
                        <Button variant="contained" color="primary" fullWidth>Reset</Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}