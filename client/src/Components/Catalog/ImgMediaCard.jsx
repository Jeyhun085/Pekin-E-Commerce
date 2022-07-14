import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCookies } from "react-cookie";
import { useSnackbar } from "notistack";

export default function ImgMediaCard(props) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleClick = (name) => {
    enqueueSnackbar(`"${name}" mehsul sebete elave olundu`, {
      variant: "success",
    });
  };

  //                Cookies part

  const [cookies, setCookie, removeCookie] = useCookies();
  function AddToCart(article, name, price) {
    var params = {
      name: name,
      price: price,
      article: article,
      qty: 1,
    };

    setCookie(article, params, { expires: new Date(Date.now() + 604800000) });
    handleClick(name);
  }

  return (
    <Card sx={{ maxWidth: 450, minWidth: 400 }}>
      <CardMedia
        component="img"
        alt={props.name}
        height="140"
        image="/images/sparePart.jpeg"
      />
      <CardContent sx={{paddingBottom:1}}>
        <Typography sx={{width: 1,fontSize: "1.625rem",fontWeight: "bold" }} align={"left"} gutterBottom  component="h5">
          {props.name}
        </Typography>
        <Typography sx={{width: 1}} align={"left"} gutterBottom variant="h5" component="h5">
          Kod: {props.article}
        </Typography>
        <Typography
          sx={{ fontWeight: "bold" }}
          align={"right"}
          gutterBottom
          variant="h5"
          component="h5"
        >
          {props.price} AZN
        </Typography>
        
      </CardContent>
      <CardActions spa sx={{paddingTop:0, justifyContent: "space-between" }}>
      <Button
          sx={{  fontSize: "1.29rem" }}
          variant="contained"
          color={props.available ? "success" : props.inTransit ? "warning" : "error"}
        >
          Qaliq:{" "}
          {props.available ? "Var" : props.inTransit ? "Yoldadir" : "Bitib"}
        </Button>
        <Button
          sx={{  height: 1  }}
          variant="contained"
          onClick={() => {
            AddToCart(props.article, props.name, props.price);
          }}
          
        >
          <ShoppingCartIcon sx={{  fontSize: "2.25rem"  }} />

        </Button>
      </CardActions>
    </Card>
  );
}
