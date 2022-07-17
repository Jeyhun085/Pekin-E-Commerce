import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "./service.scss";
import Box from "@mui/material/Box";

import Button from '@mui/material/Button';
import { minWidth, width } from "@mui/system";
import { Icon } from "@mui/material";


export default function Service() {
    return (
        <div className="service-page">
            <div className="service-container">
                <Typography
                    gutterBottom
                    color="white"
                    variant="h2"
                    align="center"
                    component="div"
                >
                    Service
                </Typography>
                <Grid container justify="center" spacing={5}>
                    <Grid item alignSelf="center" xs={12} sm={12} md={6}>
                        <Typography
                            gutterBottom
                            color="white"
                            variant="p"
                            align="center"
                            component="div"
                        >
                            popular belief, Lorem Ipsum is not simply random text.
                            It has roots in a piece of classical Latin literature from 45 BC,
                            .10.33 of "de Finibus Bonorum et
                            Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
                            BC. This book is a treatise on the theory of ethics, very popular
                            during the Renaissance. The first line of Lorem Ipsum, "Lorem
                            ipsum dolor sit amet..",
                        </Typography>
                    </Grid>

                    <Grid item alignSelf="center" xs={12} sm={12} md={6}>
                        <img className="service-image"
                            alt="service"
                            style={{ height: "300px", width: "100%", borderRadius: "20px" }}
                            src={`/images/5.jpg`}
                        />
                    </Grid>

                </Grid>
    

            </div>
            <Typography className="headerforxidmet"
                    gutterBottom
                    color="white"
                    variant="h6"
                    align="left"
                    component="div"
                >
                   Xidmətlərimiz
                </Typography>

            <div className="container-for-grids">
                <Grid className="grids-for-icons" container justify="center" alignItems="center" xs={12} sm={3} md={12} lg={12} spacing={1}> 
                <div>
                    <Grid item>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'left'
                            
                          
                        }}>
                            <img className="icons"
                                alt="icon"
                                src={`/images/yag.png`}
                            />
                            <Typography className="service-text" color="white" display="inline" >Yağ dəyişmə</Typography>
                        </Box>

                    </Grid>
                    <Grid item>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'left'
                            
                          
                        }}>
                            <img className="icons"
                                alt="icon"
                                src={`/images/elektron.png`}
                            />
                            <Typography className="service-text"  color="white" display="inline" >Elekton diaqnostika</Typography>
                        </Box>

                    </Grid>
                    <Grid item>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'left'
                            
                          
                        }}>
                            <img className="icons"
                                alt="icon"
                                src={`/images/engine.png`}
                            />
                            <Typography className="service-text"  color="white" display="inline" >Mühərrik təmiri</Typography>
                        </Box>

                    </Grid>
                    </div>
                    <div>
                    <Grid item>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'left'
                            
                          
                        }}>
                            <img className="icons"
                                alt="icon"
                                src={`/images/speed.png`}
                            />
                            <Typography className="service-text"  color="white" display="block" >Sürətlər qutusunun təmiri</Typography>
                        </Box>

                    </Grid>
                    <Grid item>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'left'
                            
                          
                        }}>
                            <img className="icons"
                                alt="icon"
                                src={`/images/asqi.png`}
                            />
                            <Typography className="service-text"  color="white" display="inline" >Asqı sisteminin təmiri</Typography>
                        </Box>

                    </Grid>
                    <Grid item>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'left'
                            
                          
                        }}>
                            <img className="icons"
                                alt="icon"
                                src={`/images/yanacaq.png`}
                            />
                            <Typography className="service-text"  color="white" display="inline" >Yanacaq sisteminin təmiri</Typography>
                        </Box>

                    </Grid>
                    </div>
                    <div>
                    <Grid item>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'left'
                            
                          
                        }}>
                            <img className="icons"
                                alt="icon"
                                src={`/images/kondisioner.png`}
                            />
                            <Typography className="service-text"  color="white" display="inline" >Kondisioner sisteminin təmiri</Typography>
                        </Box>

                    </Grid>
                    <Grid item>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'left'
                            
                          
                        }}>
                            <img className="icons"
                                alt="icon"
                                src={`/images/rul.png`}
                            />
                            <Typography className="service-text"  color="white" display="inline" >Sükan sisteminin təmiri</Typography>
                        </Box>

                    </Grid>
                    <Grid item>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'left'
                            
                          
                        }}>
                            <img className="icons"
                                alt="icon"
                                src={`/images/break.png`}
                            />
                            <Typography className="service-text"  color="white" display="inline" >Əyləc sisteminin təmiri</Typography>
                        </Box>

                    </Grid>
                    </div>
                    <div>
                    <Grid item>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'left'
                            
                          
                        }}>
                            <img className="icons"
                                alt="icon"
                                src={`/images/antifreeze.png`}
                            />
                            <Typography className="service-text"  color="white" display="inline" >Antifriz dəyişmə</Typography>
                        </Box>

                    </Grid>
                    <Grid item>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'left'
                            
                          
                        }}>
                            <img className="icons"
                                alt="icon"
                                src={`/images/filter.png`}
                            />
                            <Typography className="service-text"  color="white" display="inline" >Filter dəyişmə</Typography>
                        </Box>

                    </Grid>
                    <Grid item>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'left'
                            
                          
                        }}>
                            <img className="icons"
                                alt="icon"
                                src={`/images/can.png`}
                            />
                            <Typography className="service-text"  color="white" display="inline" >Əyləc mayesi dəyişmə</Typography>
                        </Box>

                    </Grid>
                    </div>
                    
                    
                </Grid>




            </div>


    <div className="header-mechanic">

    <Typography
                    gutterBottom
                    color="white"
                    variant="h6"
                    align="left"
                    component="div"
                >
                    Usta ile elage
                </Typography>
                </div>
        <div className="container-for-mechanic">
                <Typography 
                            gutterBottom
                            color="white"
                            variant="p"
                            align="center"
                            component="div"
                        >
                            popular belief, Lorem Ipsum is not simply random text.
                            It has roots in a piece of classical Latin literature from 45 BC,
                            .10.33 of "de Finibus
                        </Typography>
                        <Grid justifyContent="center">
                        <Button className="button-for-mechanic" variant="contained" color="success" >
Ustaya zeng
</Button></Grid>
                        </div>


        </div>

    );
}