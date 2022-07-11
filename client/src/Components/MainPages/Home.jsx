import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "./Home.styles.scss";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const features = [
  {
    text: "Salam 1",
    image: "/images/wallet-filled-money-tool.png",
  },
  {
    text: "Salam 2",
    image: "/images/wallet-filled-money-tool.png",
  },
  {
    text: "Salam 3",
    image: "/images/wallet-filled-money-tool.png",
  },
  {
    text: "Salam 4",
    image: "/images/wallet-filled-money-tool.png",
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
        <Grid container spacing={2}>
          <Grid align="center" item xs={4}>
            <Box
              component="img"
              sx={{
                height: 233,
                width: 350,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
              }}
              alt="Great Wall"
              src="/images/GWLogo.png"
            />
          </Grid>
          <Grid align="center" item xs={4}>
            <Box
              component="img"
              sx={{
                height: 233,
                width: 350,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
              }}
              alt="Haval"
              src="/images/HavalLogo.svg"
            />
          </Grid>
          <Grid align="center" item xs={4}>
            <Box
              component="img"
              sx={{
                height: 233,
                width: 350,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
              }}
              alt="Changan"
              src="/images/ChanganLogo.png"
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
      <Typography className="brandsText" variant="h5" align="center">
          Ayin kampaniyasi
        </Typography>
      </div>

      {/* Features */}
      <div className="features-container">
        <Grid container justify="center" spacing={5}>
          {features.map((feature) => {
            return (
              <Grid item align="center" xs={12} sm={6} md={3}>
                <Card
                  sx={{ boxShadow: "none", bgcolor: "inherit", maxWidth: 150 }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="150"
                      image={feature.image}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
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
    </div>
  );
}
