import React, { Fragment } from "react";
import "./Contact.styles.scss";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ListItemText from "@mui/material/ListItemText";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import HomeIcon from "@mui/icons-material/Home";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";
import Box from "@mui/material/Box";

export default function Contact() {
  return (
    <div className="contact-container">
      <Typography paddingBottom={5}
          fontWeight="800"
          fontFamily="Montserrat"
          variant="h3"
          align="center"
          color="white">
        Bizimlə əlaqə
      </Typography>
      <div className="melumat">
        <Grid
          container
          spacing={10}
          alignItems="center"
          justifyContent="center"
        >
          <Grid className="contact-info" item>
          <Box  sx={{ color: "white"}}>
          <List fontSize="3rem" >
              <ListItem
                onClick={() => window.open("tel:+994775120000", "_self")}
              >
                <ListItemButton>
                  <ListItemIcon>
                    <PhoneIcon fontSize="large" />
                  </ListItemIcon>
                  <ListItemText sx={{fontSize: "20"}} primary="077-512-00-00" />
                </ListItemButton>
              </ListItem>
              <ListItem onClick={() => {window.location.href='https://wa.me/9945120000'}}>
                <ListItemButton >
                  <ListItemIcon>
                    <WhatsAppIcon fontSize="large"  />
                  </ListItemIcon>
                  <ListItemText primary="077-512-00-00" />
                </ListItemButton>
              </ListItem>
              <ListItem onClick={() => window.open("tel:+994122419185", "_self")}>
                <ListItemButton>
                  <ListItemIcon>
                    <HomeIcon fontSize="large"  />
                  </ListItemIcon>
                  <ListItemText primary="012-341-91-85" />
                </ListItemButton>
              </ListItem>
              <ListItem onClick={() => window.open("mailto:azfiliz-i@mail.ru", "_self")}>
                <ListItemButton>
                  <ListItemIcon>
                    <AlternateEmailIcon fontSize="large"  />
                  </ListItemIcon>
                  <ListItemText primary="azfiliz-i@mail.ru" />
                </ListItemButton>
              </ListItem>
              <ListItem onClick={() => {window.location.href='https://goo.gl/maps/aXDCtY6GV2SnStpGA'}}>
                <ListItemButton>
                  <ListItemIcon>
                    <LocationOnIcon fontSize="large"  />
                  </ListItemIcon>
                  <ListItemText primary="Xirdalan dairesi, 1ci meden" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
           
          </Grid>

          <Grid item>
            <iframe
              title="location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.440424339163!2d49.77059611615463!3d40.44338806194036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4030866da1baa12b%3A0x695ff83a840eb6f2!2sPekin%20avto%20ehtiyyat%20hiss%C9%99l%C9%99ri!5e0!3m2!1sru!2s!4v1658042061414!5m2!1sru!2s"
              width="500"
              height="500"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
