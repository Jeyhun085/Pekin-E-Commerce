import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import IconButton from '@mui/material/IconButton';

function Copyright() {
  return (
    <Typography color="white" variant="body2">
      {"Copyright © "}
      <Link color="inherit" href="https://pekin.az/">
        WWW.PEKIN.AZ
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      component="footer"
      textAlign="center"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        
      }}
    >
      <Container >
      <IconButton><InstagramIcon sx={{fill:"white"}} fontSize="large" onClick={() => {window.location.href='https://www.instagram.com/greatwall_changan/'}} /></IconButton>
        <IconButton><WhatsAppIcon sx={{fill:"white"}} fontSize="large" onClick={() => {window.location.href='https://wa.me/9945120000'}} /></IconButton>
        <Copyright />
        
      </Container>
    </Box>
  );
}
