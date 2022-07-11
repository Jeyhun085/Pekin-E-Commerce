import React, { Fragment } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "./About.styles.scss";

export default function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <Grid container justify="center" spacing={5}>
          <Grid item alignSelf="center" xs={12} sm={12} md={6}>
            <Typography
              gutterBottom
              color="white"
              variant="p"
              align="center"
              component="div"
            >
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
            <img
              alt="service"
              style={{ height: "auto", width: "100%" }}
              src="https://img.freepik.com/free-vector/cheerful-team-auto-mechanics-against-background-car-service-auto-repair-station-workers_165429-1151.jpg"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
