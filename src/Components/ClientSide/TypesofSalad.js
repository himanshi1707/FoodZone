import React, {useState} from "react";
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
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Footer from "./Footer";

const saladData = [
  {
    id: 1,
    img: "https://i.ndtvimg.com/i/2018-02/carrot-salad_620x350_51517485756.jpg",
    name: "Carrot Salad with Black Grape Dressing",
    price: "100",
  },
  {
    id: 2,
    img: "https://c.ndtvimg.com/2018-10/jdd7l6a8_pav-bhaji_625x300_22_October_18.jpg",
    name: "Barley Salad",
    price: "80",
  },
  {
    id: 3,
    img: "https://www.ndtv.com/cooks/images/green%20apple%20salad-620.jpg",
    name: "Green Apple Salad",
    price: "110",
  },
  {
    id: 4,
    img: "https://i.ndtvimg.com/i/2018-05/salad_620x330_61525846627.jpg",
    name: "Leafy Salad with Walnuts",
    price: "80",
  },
  {
    id: 5,
    img: "https://c.ndtvimg.com/2018-10/om84boug_pav-bhaji_625x300_22_October_18.jpg",
    name: "Pickled Beetroot with Feta",
    price: "150",
  },
  {
    id: 6,
    img: "https://i.ndtvimg.com/i/2018-05/salad_620x330_61525687821.jpg",
    name: "Chipotle and Toasted Walnut Wheat Berry Salad",
    price: "200",
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
    cursor: "pointer",
  },
}));

export default function TypesofSalad(props) {
  const classes = useStyles();
  const [getSalad, setSalad] = useState(props.saladData)
  
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
            {getSalad}
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
              <Grid item xs={12} sm={7}>
                <main
                  style={{
                    width: "auto",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <Grid container spacing={1} style={{ width: "70vw" }}>
                      {saladData.map((item) => {
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
