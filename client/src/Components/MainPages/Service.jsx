import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "./service.scss";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";

export default function Service() {
  return (
    <div className="service-page">
      <Typography
        paddingTop={5}
        paddingBottom={5}
        fontWeight="800"
        fontFamily="Montserrat"
        variant="h3"
        align="center"
        color="white"
      >
        Xidmətlərimiz
      </Typography>

      <div className="container-for-grids">
        <Grid
          className="grids-for-icons"
          container
          justify="center"
          alignItems="center"
          xs={12}
          sm={3}
          md={12}
          lg={12}
          spacing={1}
        >
          <div>
            <Grid item>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "left",
                }}
              >
                <img className="icons" alt="icon" src={`/images/yag.png`} />
                <Typography
                  className="service-text"
                  color="white"
                  display="inline"
                >
                  Yağ dəyişmə
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "left",
                }}
              >
                <img
                  className="icons"
                  alt="icon"
                  src={`/images/elektron.png`}
                />
                <Typography
                  className="service-text"
                  color="white"
                  display="inline"
                >
                  Elekton diaqnostika
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "left",
                }}
              >
                <img className="icons" alt="icon" src={`/images/engine.png`} />
                <Typography
                  className="service-text"
                  color="white"
                  display="inline"
                >
                  Mühərrik təmiri
                </Typography>
              </Box>
            </Grid>
          </div>
          <div>
            <Grid item>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "left",
                }}
              >
                <img className="icons" alt="icon" src={`/images/speed.png`} />
                <Typography
                  className="service-text"
                  color="white"
                  display="block"
                >
                  Sürətlər qutusunun təmiri
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "left",
                }}
              >
                <img className="icons" alt="icon" src={`/images/asqi.png`} />
                <Typography
                  className="service-text"
                  color="white"
                  display="inline"
                >
                  Asqı sisteminin təmiri
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "left",
                }}
              >
                <img className="icons" alt="icon" src={`/images/yanacaq.png`} />
                <Typography
                  className="service-text"
                  color="white"
                  display="inline"
                >
                  Yanacaq sisteminin təmiri
                </Typography>
              </Box>
            </Grid>
          </div>
          <div>
            <Grid item>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "left",
                }}
              >
                <img
                  className="icons"
                  alt="icon"
                  src={`/images/kondisioner.png`}
                />
                <Typography
                  className="service-text"
                  color="white"
                  display="inline"
                >
                  Kondisioner sisteminin təmiri
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "left",
                }}
              >
                <img className="icons" alt="icon" src={`/images/rul.png`} />
                <Typography
                  className="service-text"
                  color="white"
                  display="inline"
                >
                  Sükan sisteminin təmiri
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "left",
                }}
              >
                <img className="icons" alt="icon" src={`/images/break.png`} />
                <Typography
                  className="service-text"
                  color="white"
                  display="inline"
                >
                  Əyləc sisteminin təmiri
                </Typography>
              </Box>
            </Grid>
          </div>
          <div>
            <Grid item>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "left",
                }}
              >
                <img
                  className="icons"
                  alt="icon"
                  src={`/images/antifreeze.png`}
                />
                <Typography
                  className="service-text"
                  color="white"
                  display="inline"
                >
                  Antifriz dəyişmə
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "left",
                }}
              >
                <img className="icons" alt="icon" src={`/images/filter.png`} />
                <Typography
                  className="service-text"
                  color="white"
                  display="inline"
                >
                  Filter dəyişmə
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "left",
                }}
              >
                <img className="icons" alt="icon" src={`/images/can.png`} />
                <Typography
                  className="service-text"
                  color="white"
                  display="inline"
                >
                  Əyləc mayesi dəyişmə
                </Typography>
              </Box>
            </Grid>
          </div>
        </Grid>
      </div>

      <div className="header-mechanic">
        <Typography
          paddingTop={5}
          fontWeight="800"
          fontFamily="Montserrat"
          variant="h3"
          align="center"
          color="white"
        >
             Usta ilə əlaqə
        </Typography>
      </div>
      <div className="container-for-mechanic">
        <Typography
          fontWeight="400"
          fontFamily="Montserrat"
          variant="h6"
          align="center"
          color="white"
        >
          Asagıdaki linkə click etməklə ustanızla əlaqə saxlayıb, qiymətlər
          haqqında məlumat alıb və öncədən yer bronlasdıra bilərsiz
        </Typography>
        <Button
          sx={{ marginTop: 2 }}
          size="large"
          variant="contained"
          color="success"
          onClick={() => window.open("tel:+99507492124", "_self")}
        >
          Ustaya zəng
        </Button>
      </div>
    </div>
  );
}
