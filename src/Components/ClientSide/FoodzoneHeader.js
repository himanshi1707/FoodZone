import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CallIcon from "@mui/icons-material/Call";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import "./foodzone.css";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Dishes from "./Dishes";
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";
import { textAlign } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "-12em",
    padding: "2em",
    flexDirection: "column",
  },
  subdiv: {
    height: "auto",
  },
  responsiveHeader:{
    backgroundColor: "#303952",
    height:'55vh',
    "@media (max-width: 600px)":{
      height: '30vh',
    }
  },
  card: {
    width: "20vw",
    fontSize: 13,
    margin: 5,
    backgroundColor: "#dcdde1",
    "&:hover": {
      transition: "all 0.3s ease-in-out",
      transform: "scale(1.05,1.05)",
    },
  },
  btn: {
    width: "10vw",
    background: "#000000",
    color: "#F8EFBA",
    "&:hover": {
      background: "#2C3A47",
      transition: "all .3s ease",
      transform: "scale(1.1,1.1)",
    },
  },
  txt: {
    textAlign: "center",
    margin: "1em",
    color: "#ffffff",
    fontSize: 62,
    textShadow: "2px 3px 3px #000000",
    fontWeight: "bolder",
    fontFamily: "monospace",
    letterSpacing: 1,
    "@media (max-width: 600px)": {
      fontSize: 30,
      margin: 0,
      letterSpacing: 0,
      position: "relative",
      top: "-2.2em",
      left: "4em",
      width: "fit-content",
    },
  },
  h3: {
    color: "#7f8fa6",
    textAlign: "center",
    margin: "2em",
    fontSize: 36,
    letterSpacing: 2,
  },
  list: {
    listStyleType: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "2.3em",
    "@media (max-width: 600px)": {
      gap: "1em",
      width: "fit-content",
      position: "relative",
      display:'flex',
      margin: '0px auto',
      textAlign: 'center',
      // left: "1em",
      top: "-8em",
    },
  },
  icon: {
    border: "1px solid #000000",
    padding: "2em",
    borderRadius: 45,
    backgroundColor: "#F0F8FF",
    color: "#000000",
    boxShadow: "0px 4px 5px #000000",
    cursor: "pointer",
    "@media (max-width: 600px)": {
      padding: "0.3em",
    },
  },
  image: {
    height: "10vh",
    width: "10vw",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
  },
  animate:{
    '&:hover':{
      transform: 'scale(1.5,1.2)',
      transition: "all 1s ease"
    }
  },
  responsiveimage:{
    width: "25vw",
    borderRadius: 200,
    position: "relative",
    "@media (max-width: 600px)":{
      width: '50vw' ,
      //height: '11vh',
      display:'block',
      margin:'0px auto',
      textAlign:'center'
    }
  },
}));

export default function FoodzoneHeader(props) {
  const classes = useStyles();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const cart = (item) => {
    return (
      <div>
        <h1>
          {props.name}
        </h1>
      </div>
    )
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div>
          <p>Total Amount</p>
          <Divider />
          <div>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <h1>
                  {props.name}
                </h1>
              </Grid>
              {Dishes.map((i) => {
                return (
                  <Grid items xs={12} md={4} style={{ marginTop: "2em" }}>
                    <div style={{ display: "flex", gap: "2em", margin: "2em" }}>
                      <div>
                        <img src={i.img} className={classes.image} />
                      </div>
                      <div>
                        <p>
                          {i.name.length > 11
                            ? i.name.substring(0, 11) + "..."
                            : i.name}
                        </p>
                        <p>&#8377;{i.price}</p>
                      </div>
                    </div>
                  </Grid>
                );
              })}
            </Grid>
          </div>
        </div>
      </List>
    </Box>
  );
  return (
    <React.Fragment>
      <header className={classes.responsiveHeader}>
        <Grid container spacing={1} style={{ padding: "2em" }}>
          <Grid item xs={12} sm={6}>
            <img
              src="./foodzonelogo1.png"
              className={classes.responsiveimage}            
            />
          </Grid>
          <Grid item xs={12} sm={6} style={{marginTop:'5em'}}>
            {/* <h1 className={classes.txt}>FoodZone</h1> */}
            <ul className={classes.list}>
              <li className={classes.icon}>
                <Link to="./main" style={{color:'#000000'}}>
                  <HomeIcon fontSize="medium" className={classes.animate}/>
                </Link>
              </li>
              <li className={classes.icon}>
                <RestaurantIcon fontSize="medium" className={classes.animate}/>
              </li>
              <li className={classes.icon}>
                {["bottom"].map((anchor) => (
                  <div key={anchor}>
                    {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
                    <ShoppingCartIcon
                      fontSize="medium"
                      onClick={toggleDrawer(anchor, true)}
                      className={classes.animate}
                    />
                    <Drawer
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                    >
                      {list(anchor)}
                    </Drawer>
                  </div>
                ))}
              </li>
              <li className={classes.icon}>
                <CallIcon fontSize="medium" className={classes.animate}/>
              </li>
              <li className={classes.icon}>
                <LocalOfferIcon fontSize="medium" className={classes.animate}/>
              </li>
            </ul>
          </Grid>
        </Grid>
      </header>
    </React.Fragment>
  );
}
