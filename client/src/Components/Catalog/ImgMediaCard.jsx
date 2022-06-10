import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCookies } from 'react-cookie';

export default function ImgMediaCard(props) {

  const [cookies, setCookie, removeCookie] = useCookies();

  function AddToCart(article) {
    setCookie(article, 2 , {maxAge: 604800})
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
      </CardContent>
      <CardActions>
        <Button onClick={() => {AddToCart(props.article)}} size="large"><ShoppingCartIcon /></Button>
      </CardActions>
    </Card>
  );
}
