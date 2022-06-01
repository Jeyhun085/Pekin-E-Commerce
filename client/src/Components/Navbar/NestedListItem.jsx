import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import {  useDispatch } from 'react-redux'
import { changeModel } from '../../redux/group'

export default function NestedListItem(props) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch()
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    
      <div>
    
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={props.group}/>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {props.models.map((model, index) => {
            return (
              <ListItemButton key={index} onClick={()=>{dispatch(changeModel(model.value)); props.toggleDrawer()}} sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary={model.name} />
              </ListItemButton>
            );
          })}
        </List>
      </Collapse>
    </div>
    
    
  );
}
