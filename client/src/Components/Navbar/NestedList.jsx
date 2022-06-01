import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import NestedListItem from "./NestedListItem";

export default function NestedList(props) {

  const GWModels = [
    {name: "C30", value: "c30"},
    {name: "C50", value: "c50"},
    {name: "M2", value: "m2"},
    {name: "M4", value: "m4"},
    {name: "H3", value: "h3"},
    {name: "H5", value: "h5"},
    {name: "H6", value: "h6"},
    {name: "Wingle 5", value: "w5"},
    {name: "Wingle 6", value: "w6"},
    {name: "Wingle 7", value: "w7"},
    {name: "Hover", value: "hover"}
  ]

  const CAModels = [
    {name: "Eado", value: "ea"},
    {name: "Eado XT", value: "xt"},
    {name: "CS 35", value: "cs35"},
    {name: "Honor", value: "honor"},
    {name: "CX 20", value: "cx20"},
    {name: "Benni mini", value: "bm"},
    {name: "New Benni", value: "nb"},
    {name: "Alsvin V3", value: "v3"},
    {name: "Alsvin V7", value: "v7"},
    {name: "CS 75", value: "cs75"},
    {name: "Raeton", value: "raeton"}
  ]

  const HavalModels = [
    {name: "H2", value: "h2"},
    {name: "H2 New", value: "h2n"},
    {name: "H6 New", value: "h6n"},
    {name: "H9", value: "h9"}
  ]

  

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Modeller
        </ListSubheader>
      }
    >
      <NestedListItem toggleDrawer={props.toggleDrawer} group="Great Wall" models={GWModels} />
      <NestedListItem toggleDrawer={props.toggleDrawer} group="Changan" models={CAModels} />
      <NestedListItem toggleDrawer={props.toggleDrawer} group="Haval" models={HavalModels} />
    </List>
  );
}
