import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import "./foodzone.css";
import FoodzoneHeader from "./FoodzoneHeader";
import Stack from "@mui/material/Stack";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "auto",
    height: "auto",
    overflow: "hidden",
    fontFamily: "Roboto, sans-serif",
    letterSpacing: "0.4em",
    fontWeight: 600,
    //backgroundColor: "#ecf0f1",
  },
  main: {
    width: "auto",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "-2em",
  },
  image: {
    height: "30vh",
    width: "20vw",
    position: "absolute",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    "@media (max-width: 600px)": {
      width: "45vw",
      height: "20vh",
    },
  },
  content: {
    position: "relative",
    backgroundColor: "#275d81",
    padding: "5px",
    height: "30vh",
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    width: "20vw",
    top: "0em",
    opacity: 0.4,
    "@media (max-width: 600px)": {
      height: "20vh",
      width: "auto",
    },
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    position: "absolute",
    zIndex: 2,
    height: "10vh",
    width: "20vw",
    letterSpacing: "0.1em",
    fontWeight: 600,
    fontSize: "16px",
    color: "#ffffff",
    bottom: "10em",
    backgroundColor: "#275d81",
    padding: 16,
    top: "4.5em",
    opacity: 0.9,
    "@media (max-width: 600px)": {
      width: "33vw",
      height: "6vh",
      left: "1.5em",
      fontSize: "17px",
    },
  },
  card: {
    height: "30vh",
    width: "20vw",
    margin: "20px",
    position: "relative",
    border: "2px solid #000000",
    "@media (max-width: 600px)": {
      width: "45vw",
      height: "20vh",
    },
  },
  heading: {
    fontWeight: "bold",
    letterSpacing: 1,
    color: "#34495e",
    "@media (max-width: 768px)": {
      fontSize: "22px",
      top: "13em",
      display: "block",
      margin: "0px auto",
      textAlign: "center",
    },
  },
}));

const foodTypes = [
  {
    id: 0,
    name: "Fast Food",
    image: "./junkfood1.jpg",
    path: "./veggieburgers",
  },
  {
    id: 1,
    name: "Diet Food",
    image: "./dietfood.jpg",
    path: "./showitems",
  },
  {
    id: 2,
    name: "Dessert's",
    image: "./cakes1.jpg",
    path: "",
  },
];

export default function ShowItems(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <header>
        <FoodzoneHeader />
      </header>
      <main>
        <div className={classes.main}>
          <h1 className={classes.heading}>Eat what makes you happy</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignSelf: "center",
              width: "70vw",
            }}
          >
            <Grid container spacing={1} style={{ margin: "2em" }}>
              {foodTypes.map((item) => {
                
                return (
                  <>
                    <Grid item xs={12} md={4} style={{ width: "50vw" }}>
                      <Link to={item.path}>
                          <div className={classes.card}>
                            <div>
                              <img src={item.image} className={classes.image} />
                              {/* <div></div> */}
                            </div>
                            <div className={classes.content}></div>
                            <span className={classes.title}>{item.name}</span>
                            <div>
                              <Stack spacing={1} className="rating">
                                <Rating
                                  name="half-rating"
                                  defaultValue={2.5}
                                  precision={0.5}
                                  size="small"
                                />
                              </Stack>
                            </div>
                          </div>
                      </Link>
                    </Grid>
                  </>
                );
              })}
            </Grid>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
