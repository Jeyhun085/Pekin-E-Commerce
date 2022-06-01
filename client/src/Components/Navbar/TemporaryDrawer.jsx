import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import ListSubheader from "@mui/material/ListSubheader";
import NestedList from "./NestedList";
import {  useDispatch } from 'react-redux'
import { changeSection } from '../../redux/group'

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({right: false});
  const dispatch = useDispatch()

  const sections = [{name: "Asqi", value: "chassy"},
   {name: "Muherrik", value: "engine"},
    {name: "Transmissiya", value: "gearbox"}, 
    {name: "Electric", value: "electric"},
    {name: "Govde", value: "body"}
  ];

  const toggleDrawer = (anchor, open) => (event) => {
    setState({"right": open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
    <List>
    <ListItem onClick={toggleDrawer(anchor, false)}  button  key="Ana sehife">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Ana sehife" />
          </ListItem>
      </List>

      <Divider />
      <List>
        <NestedList
          toggleDrawer={toggleDrawer(anchor, false)}
        />
      </List>

      <Divider />

      <List>
      <ListSubheader component="div" id="nested-list-subheader">
          Bolmeler
        </ListSubheader>
        {sections.map((item, index) => (
          <ListItem onClick={()=>{dispatch(changeSection(item.value));   setState({"right": false }); }} button key={item.name}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            Filter
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
