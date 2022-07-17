import React from "react";
import ContentLoader from "react-content-loader";
import Grid from "@mui/material/Grid";

function skeletons(num) {
  const objs = []
  for (var i=0; i < num; i++) {
    objs.push(<Grid key={i}  item>
      <ContentLoader
        speed={3}
        width={200}
        height={300}
        backgroundColor="#f3f3f3"
        foregroundColor="#d1cdc2"
        borderRadius="12px"
      >
        <rect x="0" y="10" rx="2" ry="2" width="400" height="400" />
        <rect x="58" y="60" rx="2" ry="2" width="140" height="10" />
        
       
      </ContentLoader>
    </Grid>)
  }

  return objs
    
  
}

export default function Loader(props) {
  return (
    <Grid container spacing={2}>
      {skeletons(30)}
    </Grid>
  );
}
