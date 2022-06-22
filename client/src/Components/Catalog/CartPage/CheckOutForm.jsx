import React from "react";
import { useForm } from "react-hook-form";
import { useCookies } from "react-cookie";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Button from '@mui/material/Button';

import "./CheckOutForm.Styles.scss";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CheckOutForm() {
// Dialog

const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

// Form

  const { register, handleSubmit, reset } = useForm();
  const [cookies, setCookie, removeCookie] = useCookies();
  const onSubmit = (data) => {
    data.mehsullar = cookies;
    fetch("http://localhost:8080/checkout", {
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      method: "POST",
      body: JSON.stringify(data),
    });

    for (var key in cookies) {
      removeCookie(key);
    }
    reset();
    handleClickOpen()
  };

  return (
    <div className="CheckOutForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">Ad</label>
          <input required="required" {...register("firstName")} />
        </div>

        <div>
          <label htmlFor="lastName">Soyad</label>
          <input {...register("lastName")} />
        </div>

        <div>
          <label htmlFor="address">Unvan</label>
          <input {...register("address")} />
        </div>

        <div>
          <label htmlFor="phone">Telefon</label>
          <input required="required" type="tel" {...register("phone")} />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            placeholder="bluebill1049@hotmail.com"
            type="email"
            {...register("email")}
          />
        </div>
        <input type="submit" />
      </form>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Sifaris qeyde alindi"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Tebrikler. Sizin sifaris qeyde alindi. En qisa zamanda bizim satici sizinle elaqe saxliyib
            sifarisi tesdiqletdirecek.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
