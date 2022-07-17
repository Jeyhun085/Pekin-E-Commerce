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
import Modal from "@mui/material/Modal";
import { styled, Box } from "@mui/system";
import BadgeUnstyled, { badgeUnstyledClasses } from "@mui/base/BadgeUnstyled";

const StyledBadge = styled(BadgeUnstyled)`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-variant: tabular-nums;
  list-style: none;
  font-family: IBM Plex Sans, sans-serif;
  position: relative;
  display: inline-block;
  line-height: 1;

  & .${badgeUnstyledClasses.badge} {
    z-index: auto;
    min-width: 40px;
    height: 20px;
    padding: 12px 24px;
    color: #fff;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    white-space: nowrap;
    text-align: center;
    background: inherit;
    border-radius: 10px;
    box-shadow: 0 0 0 1px #fff;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(10%, -10%);
    transform-origin: 100% 0;
  }
`;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ImgMediaCard(props) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleClick = (name) => {
    enqueueSnackbar(`"${name}" mehsul sebete elave olundu`, {
      variant: "success",
    });
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
    <div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <img
              alt={props.name}
              src={`/images/parts/${props.article}.png`}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = "/images/parts/notAvailable.png";
              }}
            />
          </Box>
        </Modal>
      </div>
      <StyledBadge
        sx={{
          background: props.available
            ? "green"
            : props.inTransit
            ? "orange"
            : "red",
        }}
        badgeContent={`Qaliq: ${
          props.available ? "Var" : props.inTransit ? "Yoldadir" : "Bitib"
        }`}
      >
        <Card sx={{ width: 400 }}>
          <CardMedia
            component="img"
            alt={props.name}
            width="400"
            height="400"
            image={`/images/parts/${props.article}.png`}
            onClick={handleOpen}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = "/images/parts/notAvailable.png";
            }}
          />

          <CardContent sx={{ paddingBottom: 1 }}>
            <Typography
              sx={{ width: 1, fontSize: "1.625rem", fontWeight: "bold" }}
              align={"left"}
              gutterBottom
              component="h5"
            >
              {props.name}
            </Typography>
            <Typography
              sx={{ width: 1 }}
              align={"left"}
              gutterBottom
              variant="h5"
              component="h5"
            >
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
          <CardActions sx={{ paddingTop: 0, justifyContent: "space-between" }}>
            <Button
              sx={{ width: 1, height: 1 }}
              variant="contained"
              onClick={() => {
                AddToCart(props.article, props.name, props.price);
              }}
            >
              {" "}
              Sebete elave et
              <ShoppingCartIcon sx={{ fontSize: "2.25rem" }} />
            </Button>
          </CardActions>
        </Card>
      </StyledBadge>
    </div>
  );
}
