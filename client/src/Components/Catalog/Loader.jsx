import React from "react";
import ContentLoader from "react-content-loader";
import Grid from "@mui/material/Grid";

function skeletons(num) {
  const objs = []
  for (var i=0; i < num; i++) {
    objs.push(<Grid key={i}  item>
      <ContentLoader
        speed={1}
        width={300}
        height={300}
        backgroundColor="#f3f3f3"
        foregroundColor="grey"
      >
        <circle cx="31" cy="31" r="15" />
        <rect x="58" y="18" rx="2" ry="2" width="140" height="10" />
        <rect x="58" y="34" rx="2" ry="2" width="140" height="10" />
        <rect x="0" y="60" rx="2" ry="2" width="400" height="400" />
      </ContentLoader>
    </Grid>)
  }

  return objs
    
  
}

export default function Loader(props) {
  return (
    <Grid container justifyContent={"center"} spacing={2}>
      {skeletons(20)}
    </Grid>
  );
}
