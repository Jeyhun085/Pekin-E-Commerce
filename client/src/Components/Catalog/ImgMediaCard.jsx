import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCookies } from "react-cookie";
import { useSnackbar } from 'notistack';

export default function ImgMediaCard(props) {

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const handleClick = (name) => {
        enqueueSnackbar(`"${name}" mehsul sebete elave olundu`, {variant :'success'});
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
    handleClick(name)
  }

  return (
    
    <Card sx={{ width: 200 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/images/sparePart.jpeg"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {props.name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Kod: {props.article}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {props.price} AZN
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Movcudlug:{" "}
          {props.available ? "Var" : props.inTransit ? "Yoldadir" : "Bitib"}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          sx={{ width: "100%", fontSize: "10px" }}
          variant="contained"
          onClick={() => {
            AddToCart(props.article, props.name, props.price);
          }}
          size="large"
        >
          <ShoppingCartIcon />
          Sebete elave et
        </Button>
      </CardActions>
    </Card>
   
  );
}
