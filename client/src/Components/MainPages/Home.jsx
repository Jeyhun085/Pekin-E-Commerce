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
import Icon from "@mui/icons-material/ThumbUpAlt";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import Button from '@mui/material/Button';

const features = [
  {
    text: "Yüksək keyfiyyət",
    image: "/images/badge.png",
  },
  {
    text: "Sürətli çatdırılma",
    image: "/images/fast-delivery.png",
  },
  {
    text: "Münasib qiymətlər",
    image: "/images/wallet.png",
  },
];

export default function Home() {
  return (
    <div className="home-page">
      {/* Slogan */}
      <div className="slogan-container">
        <Typography
          fontWeight="800"
          fontFamily="Montserrat"
          variant="h2"
          color="white"
        >
          Keyfiyəti təmin edirik!
        </Typography>
      </div>
      {/* Brands */}
      <div className="brands-container">
        <Grid container alignItems="center" spacing={1}>
          <Grid align="center" item xs={4}>
            <Box
              className="marki"
              component="img"
              alt="Great Wall"
              src="/images/gw.png"
            />
          </Grid>
          <Grid align="center" item xs={4}>
            <Box
              className="marki"
              component="img"
              alt="Haval"
              src="/images/HavalLogo.svg"
            />
          </Grid>
          <Grid align="center" item xs={4}>
            <Box
              className="marki"
              component="img"
              alt="Changan"
              src="/images/changanlogo1.png"
            />
          </Grid>
        </Grid>
        <Typography
          fontWeight="200"
          fontFamily="Montserrat"
          className="brandsText"
          variant="h5"
          align="center"
          color="white"
        >
          "Great Wall", "Haval" və "Changan" brendlərinə ehtiyat hissələrini
          bizdən əldə edə bilərsiniz.
        </Typography>
      </div>
      {/* Hot Parts */}
      <div className="deal-container">
        <Typography
          paddingBottom={5}
          fontWeight="800"
          fontFamily="Montserrat"
          variant="h3"
          align="center"
        >
          Bu ayın təklifi
        </Typography>
        <CardMedia
          component="img"
          height="400"
          image="/images/sale.jpg"
          alt="sale"
        />
      </div>
      {/* Features */} 
      <div className="features-container">
        <div>
          <Typography
            paddingBottom={5}
            fontWeight="800"
            fontFamily="Montserrat"
            variant="h3"
            align="center"
          >
            Niyə "Pekin Avto"?
          </Typography>
        </div>
        <Grid container justify="center" alignItems="center">
          {features.map((feature) => {
            return (
              <Grid item align="center" xs={12} sm={12} md={4}>
                <Card
                  className="cardsFeautures"
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
                        fontFamily="Montserrat"
                        className="featureIconText"
                        gutterBottom
                        variant="h6"
                        align="center"
                        component="div"
                      >
                        {feature.text}
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
        <Typography 
        padding={5}
        fontWeight="200"
          fontFamily="Montserrat"
          className="brandsText"
          variant="h4"
          align="center"
          color="white">
          Kataloq bölməsində bizdə mövcud olan ehtiyat hissələri ceşidi ilə yaxından tanış olub, evinizə onlayn sifariş edə bilərsiniz!
        </Typography>
        <Button size="large" variant="contained" color="success" href="/catalog">Kataloqa keçid</Button>
      </div>
    </div>
  );
}
