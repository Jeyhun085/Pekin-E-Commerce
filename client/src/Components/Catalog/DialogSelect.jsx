import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { GWModels, CAModels, HavalModels, sections } from "../ModelLists";
import { changeModel, changeSection, changeIsSelected } from "../../redux/group";
import { useSelector, useDispatch } from "react-redux";
import { useSnackbar } from 'notistack';

export default function DialogSelect() {
  const [open, setOpen] = React.useState(true);
  const [brand, setBrand] = React.useState("");
  const [model, setModel] = React.useState("");
  const [section, setSection] = React.useState("");
  const [brandList, setBrandList] = React.useState([]);
  const group = useSelector((state) => state.group);
  const dispatch = useDispatch();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleError = (name) => {
    enqueueSnackbar(`"${name}" bolmesin secmeyiniz xais olunur`, {variant :'error'});
};

  const handleBrandChange = (event) => {
    setBrand(event.target.value || "");
    if (event.target.value === "GW") {
      setBrandList(GWModels);
    } else if (event.target.value === "CA") {
      setBrandList(CAModels);
    } else if (event.target.value === "Haval") {
      setBrandList(HavalModels);
    }
  };

  const handleModelChange = (event) => {
    setModel(event.target.value);
  };

  const handleSectionChange = (event) => {
    setSection(event.target.value);
  };
  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
    dispatch(changeModel(model));
    dispatch(changeSection(section));
    dispatch(changeIsSelected());
    console.log(group);
  };

  const handleSubmit = (event, reason) => {
    if (brand === "") {
      handleError("Brand")
    } else if (model === "") {
      handleError("Model")
    } else if (section === "") {
      handleError("Section")
    } else {
      handleClose()
    }
  };

  return (
    <div>
      <Dialog disableEscapeKeyDown open={open} onClose={handleSubmit}>
        <DialogTitle>Bolmeni secin</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
            <FormControl required sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="demo-dialog-native">Brand</InputLabel>
              <Select
                native
                value={brand}
                onChange={handleBrandChange}
                input={<OutlinedInput label="Brand" id="demo-dialog-native" />}
              >
                <option aria-label="None" value="" />
                <option value={"GW"}>Great Wall</option>
                <option value={"CA"}>Changan</option>
                <option value={"Haval"}>Haval</option>
              </Select>
            </FormControl>

            <FormControl required sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="demo-dialog-native">Model</InputLabel>
              <Select
                native
                onChange={handleModelChange}
                input={<OutlinedInput label="Model" id="demo-dialog-native" />}
              >
                <option aria-label="None" value="" />

                {brandList.map((model) => {
                  return <option value={model.value}>{model.name}</option>;
                })}
              </Select>
            </FormControl>
            <FormControl required sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="demo-dialog-native">Section</InputLabel>
              <Select
                native
                onChange={handleSectionChange}
                input={
                  <OutlinedInput label="Section" id="demo-dialog-native" />
                }
              >
                <option aria-label="None" value="" />

                {sections.map((model) => {
                  return <option value={model.value}>{model.name}</option>;
                })}
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
