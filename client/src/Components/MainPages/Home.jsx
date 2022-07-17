import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { autocompleteClasses, CardActionArea } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "./Home.styles.scss";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Icon from '@mui/icons-material/ThumbUpAlt';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';

const features = [
  {
    text: "Salam 1",
    image: "/images/badge.png",
podtext: "functionn1"
   
  },
  {
    text: "Salam 2",
    image: "/images/fast-delivery.png",
    podtext: "functionn2"
  },
  {
    text: "Salam 3",
    image: "/images/wallet.png",
    podtext: "functionn3"
  },

];

export default function Home() {
  return (
    <div className="home-page">
      {/* Slogan */}
      <div className="slogan-container">
        <h1>KEYFIYYETI TEMIN EDIRIK</h1>
      </div>

      {/* Brands */}
      <div className="brands-container">
        <Grid container spacing={1}>
          <Grid align="center" item xs={4}>
            <Box className="marki"
              component="img"
              sx={{
                
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
              }}
              alt="Great Wall"
              src="/images/gw.png"
            />
          </Grid>
          <Grid align="center" item xs={4}>
            <Box className="marki"
              component="img"
              sx={{
               
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
              }}
              alt="Haval"
              src="/images/HavalLogo.svg"
            />
          </Grid>
          <Grid align="center" item xs={4}>
            <Box 
          className="marki"
              component="img"
              sx={{
               
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
              }}
              alt="Changan"
              src="/images/changanlogo1.png"
            />
          </Grid>
        </Grid>
        <Typography className="brandsText" variant="h5" align="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, proin nec
          eu donec sit quis.
        </Typography>
      </div>

      {/* Hot Parts */}
      <div className="deal-container">
        <Typography className="dealText" variant="h5" align="center">
          Ayin kampaniyasi
        </Typography>
        <CardMedia
          className="deal-image"
          component="img"
          height="400"
          image="/images/sale.jpg"
          alt="sale"
        />

      </div>

      {/* Features */}
      <div className="features-container">
      <div>
      <Typography variant="h5" align="center"
      >Ustunluk</Typography>
      </div>
        <Grid container justify="center" alignItems="center" spacing={5}>
          {features.map((feature) => {
            return (
              <Grid item align="center" xs={12} sm={12} md={4}>
                <Card className="cardsFeautures"
                  sx={{ boxShadow: "none", bgcolor: "inherit", maxWidth: 150 }}
                >
                  <CardActionArea>
                    <CardMedia
                      className="featureIconImage"
                      component="img"
                   
                     
                      image={feature.image}
                      alt="icons"
                    />
                    <CardContent>
                      <Typography
                        className="featureIconText"
                        gutterBottom
                        variant="h5"
                        align="center"
                        component="div"

                      >

                        {feature.text}
                        {feature.podtext}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
      <div className="katalog-container">
      <Typography className="catalog-info" variant="h6" align="center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, proin nec
          eu donec sit quis.
      </Typography>

        <button className="katalog-button">Kataloga kechid</button>
      </div>
    </div>
  );
}
