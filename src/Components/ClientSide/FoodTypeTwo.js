import * as React from 'react';
import Navbar from "./Navbar";
import { Grid } from "@mui/material";

const JunkFood=[
    {
        id:0,
        name: "Burgers",
        pathname: "/veggieburgers"
    },
    {
        id:1,
        name: "Pizzas",
        pathname: "/vegpizzas"
    },
]

export default function FoodTypeTwo(props){
    return (
        <React.Fragment>
            <Grid container spacing={1}>
                <Grid item xs={12} style={{display:'flex',gap: "2em", marginBottom:'0em' }}>
                {JunkFood.map((item) => {
                return (
                  <Navbar
                    key={item.id}
                    name={item.name}
                    img={item.img}
                    pathname={item.pathname}
                  />
                );
              })}
                </Grid>
            </Grid>
        </React.Fragment>
    )
}