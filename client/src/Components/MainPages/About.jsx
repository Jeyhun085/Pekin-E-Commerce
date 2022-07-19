import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "./About.styles.scss";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const itemData = [
  {
    img: "/images/0.jpg",
    title: `1 to popular belief, Lorem Ipsum is not simply random text.
    It has roots in a piece of classical Latin literature from 45 BC,
    making it over 2000 years old. Richard McClintock, a Latin
    professor at Hampden-Sydney College in Virginorem Ipsum
    passage, and going through the cites of the word in classical
    literature, discovered s from a line in section 1.10.32.`,
  },
  {
    img: "/images/1.jpg",
    title: `2 to popular belief, Lorem Ipsum is not simply random text.
    It has roots in a piece of classical Latin literature from 45 BC,
    making it over 2000atise on the theory of ethics, very popular

    during the Renaissance. The first line of Lorem Ipsum, "Lorem
    ipsum dolor sit amet..", comes from a line in section 1.10.32.`,
  },
  {
    img: "/images/2.jpg",
    title: `3 to popular belief, Lorem Ipsum is not simply random text.
    It has roots in a piece of classical Latin literature from 45 BC,
   .10.33 of "de Finibus Bonorum et

    Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
    BC. This book is a treatise on the theory of ethics, very popular
    during the Renaissance. The first line of Lorem Ipsum, "Lorem
    ipsum dolor sit amet..", comes from a line in section 1.10.32.`,
  },
];

export default function About() {
  const [photoNum, setPhotoNum] = useState(0);

  return (
    <div className="about-page">
      <div className="about-container">
        <Typography
          fontWeight="800"
          fontFamily="Montserrat"
          variant="h3"
          align="center"
          color="white"
        >
          Haqqımızda
        </Typography>
        <Grid container justify="center" spacing={5}>
          <Grid item alignSelf="center" xs={12} sm={12} md={6}>
            <img
              alt="service"
              style={{ height: "30%", width: "100%" }}
              src={`/images/${photoNum}.jpg`}
            />
          </Grid>
          <Grid item alignSelf="center" xs={12} sm={12} md={6}>
            <Typography
              gutterBottom
              color="white"
              variant="p"
              align="center"
              component="div"
            >
              {itemData[photoNum].title}
            </Typography>
          </Grid>
        </Grid>
      </div>

      <div className="sekiller">
        <ImageList sx={{ width: 1 }} rowHeight={400} cols={3}>
          {itemData.map((item, index) => (
            <ImageListItem
              key={index}
              onClick={() => {
                setPhotoNum(index);
              }}
            >
              <img
                src={item.img}
                srcSet={item.img}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <div className="delivery-container">
        <Typography
          paddingTop={5}
          fontWeight="800"
          fontFamily="Montserrat"
          variant="h3"
          align="center"
          color="white"
        >
          Çatdırılma
        </Typography>
        <Grid container justify="center" spacing={5}>
          <Grid item alignSelf="center" xs={12} sm={12} md={6}>
            <Typography variant="h1" align="center" color="white">
              {itemData[photoNum].slogan}
            </Typography>
            <Typography
              gutterBottom
              color="white"
              variant="p"
              align="center"
              component="div"
            >
              Xtremes of Good and Evil by Cicero, written in 45 BC. This book is
              a treatise on the theory of ethics, very popular during the
              Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
              ame
            </Typography>
          </Grid>
          <Grid item alignSelf="center" xs={12} sm={12} md={6}>
            <img
              alt="service"
              style={{ height: "20%", width: "100%" }}
              src={`/images/store.jpg`}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
