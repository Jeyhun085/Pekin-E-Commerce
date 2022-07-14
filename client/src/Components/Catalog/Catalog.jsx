import React, { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ImgMediaCard from "./ImgMediaCard";
import CartButton from "./CartButton";
import Loader from "./Loader";
import DialogSelect from "./DialogSelect";
import { Typography } from "@mui/material";



export default function Catalog() {
  const group = useSelector((state) => state.group);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setData([])
    const fetchData = async () => {

      try {
        const result = await fetch(`http://${window.location.hostname}:8080`, {
          headers: {
            'Content-Type':'application/json'
        },
        mode: 'cors',
          method: "POST",
          body: JSON.stringify(group) 
        });

        const body = await result.json();

        setData(body);
        setIsLoading(false)
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
    setIsLoading(true)
  }, [group]);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
  <Fragment>
  <Box sx={{ flexGrow: 1 }}>
  <Typography sx={{marginTop:5}} align="center" variant="h3">
  Current model is "{group.model}" and section is: "{group.section}" 
  </Typography>
  {group.isSelected || <DialogSelect/>}
  
  </Box>
    <div  className="itemsContainer">
    {isLoading && <Loader />}
      <Box sx={{ flexGrow: 1}}>
        <Grid container justifyContent={"center"} spacing={2}>
          {data.map((item, index) => {
            return (
              <Grid key={index}  item>
                <Item>
                  <ImgMediaCard
                    article={item.article}
                    price={item.price}
                    name={item.name}
                    available= {item.available}
                    inTransit= {item.inTransit}
                  />
                </Item>
              </Grid>
            );
          })}
        </Grid>
        <CartButton />
      </Box>
    </div>
  </Fragment>
  
  );
}
