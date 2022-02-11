import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import FoodCategories from "./FoodCategories";
import Navbar from "./Navbar";
import FoodzoneHeader from "./FoodzoneHeader";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Footer from "./Footer";

const soupData = [
  {
    id: 1,
    img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2016%2F12%2F27113323%2F42918571.jpg",
    name: "Spicy Cabbage Soup",
    price: "120",
  },
  {
    id: 2,
    img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2020%2F12%2F01%2FMushroom-Sherry-Soup.jpg",
    name: "Slow Cooker Mushroom Soup with Sherry",
    price: "60",
  },
  {
    id: 3,
    img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2019%2F08%2F28003203%2F38454541.jpg",
    name: "Sweet Potato & Black Bean Chili",
    price: "100",
  },
  {
    id: 4,
    img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2019%2F08%2F28003203%2F38454541.jpg",
    name: "Roasted Cauliflower and Potato Curry Soup",
    price: "80",
  },
  {
    id: 5,
    img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2020%2F09%2F18%2FSouthwestern-Three-Bean-Barley-Soup.jpg",
    name: "Southwestern Three-Bean & Barley Soup",
    price: "80",
  },
  {
    id: 6,
    img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2020%2F01%2F02%2F7551493.jpg",
    name: "Mediterranean Cabbage Soup",
    price: "180",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: "auto",
    height: "100vh",
    overflowX: "hidden",
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

export default function Soup(props) {
  const classes = useStyles();

  return (
    <div>
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
              <Grid item xs={12} sm={3} style={{ display: "flex", gap: "2em" }}>
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
                  <div>
                    <Grid container spacing={1} style={{ width: "70vw" }}>
                      {soupData.map((item) => {
                        return (
                          <>
                            <Grid
                              item
                              xs={12}
                              sm={4}
                              style={{ marginTop: "2em", width: "50vw" }}
                            >
                              <Card
                                sx={{
                                  maxWidth: 340,
                                  height: "48.5vh",
                                  borderRadius: 5,
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
                                  <span>Buy</span>
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
                  </div>
                </main>
              </Grid>
            </Grid>
          </section>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
