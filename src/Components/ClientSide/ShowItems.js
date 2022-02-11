import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import FoodCategories from "./FoodCategories";
import Navbar from "./Navbar";
import "./foodzone.css";
import FoodzoneHeader from "./FoodzoneHeader";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Dishes from "./Dishes";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "auto",
    height: "auto",
    overflow: "hidden",
    fontFamily: "Roboto, sans-serif",
    letterSpacing: "0.4em",
    fontWeight: 600,
  },
  image: {
    height: "30vh",
    width: "20vw",
    position: "absolute",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  button: {
    color: "#ffffff",
    backgroundColor: "#000000",
    display: "flex",
    justifyContent: "center",
    cursor: 'pointer'
  },
}));

export default function ShowItems(props) {
  const classes = useStyles();

  // const handleCard = async(id)=>{
  //   const data = {pid: Dishes[id]}
  // }

  return (
      <div className={classes.root}>
        <header>
          <FoodzoneHeader />
        </header>
          <section style={{ marginTop: "3em" }}>
            <h2
              style={{
                display: "flex",
                justifyContent: "center",
                padding: 10,
                margin: 30,
                fontWeight: 500,
                fontSize: 50,
              }}
            >
              DIET FOOD
            </h2>
            <Grid
              container
              spacing={1}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid item xs={12} style={{ display: "flex", gap: "2em", marginBottom:'0em' }}>
                {FoodCategories.map((item) => {
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
              <Grid item xs={12}>
                <main
                  style={{
                    width: "80vw",
                    height: "auto",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                    <Grid container spacing={1} style={{ width: "70vw"}}>
                      {Dishes.map((item) => {
                        return (
                          <>
                            <Grid
                              item
                              xs={12}
                              md={4}
                              
                            >
                              <Card
                                sx={{
                                  maxWidth: 340,
                                  height: "48.5vh",
                                  borderRadius: 5,
                                  margin: 2
                                }}
                              >
                                <CardMedia
                                  component="img"
                                  height="140"
                                  image={item.img}
                                  alt="green iguana"
                                  // className={classes.image}
                                />
                                <CardContent sx={{ backgroundColor: "#275d81" }}>
                                  <Typography className="content">
                                    <p>
                                      {item.name.length > 11
                                        ? item.name.substring(0, 11) + "..."
                                        : item.name}
                                    </p>
                                    <p>&#8377;{item.price}</p>
                                  </Typography>
                                </CardContent>
                                <CardActions className={classes.button}>
                                  <Link to={`foodzoneheader/cid=${item.id}`}>
                                    <span>Buy</span>
                                  </Link>
                                </CardActions>
                                <Stack spacing={1} className="rating">
                                  <Rating
                                    name="half-rating"
                                    defaultValue={2.5}
                                    precision={0.5}
                                    size="small"
                                  />
                                </Stack>
                              </Card>
                            </Grid>
                          </>
                        );
                      })}
                    </Grid>
                </main>
              </Grid>
            </Grid>
          </section>
        <footer>
          <Footer />
        </footer>
      </div>
  );
}
