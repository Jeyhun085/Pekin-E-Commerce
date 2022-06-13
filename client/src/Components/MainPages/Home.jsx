import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "./Home.styles.scss";
import { Navigation } from "swiper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

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
    <div>
      <div className="home-container">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide className="slide1">
            <h1>Pekin avto kfbhvlskfnvskl;mv s., djbhklsdjbh</h1>
          </SwiperSlide>
          <SwiperSlide className="slide2">
            {" "}
            <h1>fjvbkjn jk;ljk';k';ll/.,</h1>
          </SwiperSlide>
          <SwiperSlide className="slide3">
            <h1>Slide 3</h1>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Features */}

      <div className="icon-container">
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

      {/* Features */}

      <div className="about-container">
        <Grid container justify="center" spacing={5}>
          <Grid item alignSelf="center" xs={12} sm={12} md={6} >
            <Typography gutterBottom color="white" variant="p" align="center" component="div">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </Typography>
          </Grid>
          <Grid item alignSelf="center" xs={12} sm={12} md={6}>
            <img alt="service" style={{ height: "auto", width: "100%" }} src="https://img.freepik.com/free-vector/cheerful-team-auto-mechanics-against-background-car-service-auto-repair-station-workers_165429-1151.jpg" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
