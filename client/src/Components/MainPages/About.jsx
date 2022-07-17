import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "./About.styles.scss";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const itemData = [
  {
slogan: "0",
    img: "/images/aboutImages/0.jpg",
    title: `1 to popular belief, Lorem Ipsum is not simply random text.
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
    ipsum dolor sit amet..", comes from a line in section 1.10.32.`
  },
  {
    slogan: "1",
    img: "/images/aboutImages/1.jpg",
    title: `2 to popular belief, Lorem Ipsum is not simply random text.
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
    ipsum dolor sit amet..", comes from a line in section 1.10.32.`
  },
  {
    slogan: "2",
    img: "/images/aboutImages/2.jpg",
    title: `3 to popular belief, Lorem Ipsum is not simply random text.
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
    ipsum dolor sit amet..", comes from a line in section 1.10.32.`
  },
  {
    slogan: "3",
    img: "/images/aboutImages/3.jpg",
    title: `4 to popular belief, Lorem Ipsum is not simply random text.
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
    ipsum dolor sit amet..", comes from a line in section 1.10.32.`
  },
  {
    slogan: "4",
    img: "/images/aboutImages/4.jpg",
    title: `5 to popular belief, Lorem Ipsum is not simply random text.
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
    ipsum dolor sit amet..", comes from a line in section 1.10.32.`
  }
  
]


export default function About() {
  const [photoNum, setPhotoNum] = useState(4);
console.log();
  console.log(itemData[photoNum].title);
  return (
    <div className="about-page">
      <div className="about-container">
        <Grid container justify="center" spacing={5}>
          <Grid item alignSelf="center" xs={12} sm={12} md={6}>
          <Typography variant="h1" align="center" color="white">{itemData[photoNum].slogan}</Typography>
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
          <Grid item alignSelf="center" xs={12} sm={12} md={6}>
            <img
              alt="service"
              style={{ height: "auto", width: "100%" }}
              src={`/images/aboutImages/${photoNum}.jpg`}
            />
          </Grid>
        </Grid>
      </div>

      <div className="sekiller">
      <ImageList sx={{ width: 1}}  rowHeight={400} cols={5}>
      {itemData.map((item, index) => (
        <ImageListItem key={index} onClick={()=>{setPhotoNum(index)}}>
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
    </div>
  );
}
