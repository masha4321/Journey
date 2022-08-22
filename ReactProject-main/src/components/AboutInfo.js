import React from "react";
import spongebob from "../assets/spongebob.png";
import patrick from "../assets/patrick.png";
import squidward from "../assets/squidward.png";
import mrKrabs from "../assets/mr.krabs.png";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

// Opening message
function AboutInfo() {
  return (
    <div className="homePage">
      <section component="main" maxWidth="xs">
        <Grid class="row" align="center" padding={5}>
          <h3>About Us</h3>
          <h5>Our Super-Duper Team</h5>
          <p>
            What do you get when you mix mental health with physical health?
            <br />
            One could say you are going on an epic ride to self discovery, we
            call it a <span> Journey</span>.
            <br />
            We are a team that are dedicated to the well being of both the human
            psyche and physical recreation.
          </p>
          <hr />
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
          marginTop={2}
          padding={5}
        >
          <Grid item xs={3}>
            <Card
              className="aboutCard"
              sx={{ backgroundColor: "rgba(90, 83, 115,0.30)" }}
            >
              <CardActionArea>
                <CardMedia
                  className="cardImage"
                  component="img"
                  image={spongebob}
                  alt="spongebob"
                  style={{
                    padding: "10px",
                  }}
                />
                <CardContent>
                  <Typography
                    align="center"
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    Moosa
                  </Typography>
                  <Typography
                    align="center"
                    variant="body2"
                    color="text.secondary"
                  >
                    Task Manager
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card
              className="aboutCard"
              sx={{ backgroundColor: "rgba(90, 83, 115,0.30)" }}
            >
              <CardActionArea>
                <CardMedia
                  className="cardImage"
                  component="img"
                  image={patrick}
                  alt="patrick"
                  style={{
                    padding: "10px",
                  }}
                />
                <CardContent>
                  <Typography
                    align="center"
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    Maryia
                  </Typography>
                  <Typography
                    align="center"
                    variant="body2"
                    color="text.secondary"
                  >
                    Scribe
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card
              className="aboutCard"
              sx={{ backgroundColor: "rgba(90, 83, 115,0.30)" }}
            >
              <CardActionArea>
                <CardMedia
                  className="cardImage"
                  component="img"
                  image={squidward}
                  alt="squidward"
                  style={{
                    padding: "10px",
                  }}
                />
                <CardContent>
                  <Typography
                    align="center"
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    Tanshif
                  </Typography>
                  <Typography
                    align="center"
                    variant="body2"
                    color="text.secondary"
                  >
                    Main Coordinator
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card
              className="aboutCard"
              sx={{ backgroundColor: "rgba(90, 83, 115,0.30)" }}
            >
              <CardActionArea>
                <CardMedia
                  className="cardImage"
                  component="img"
                  image={mrKrabs}
                  alt="Mr. Krabs"
                  style={{
                    padding: "10px",
                  }}
                />
                <CardContent>
                  <Typography
                    align="center"
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    Jean-Gabriel
                  </Typography>
                  <Typography
                    align="center"
                    variant="body2"
                    color="text.secondary"
                  >
                    GIT Manager
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </section>
    </div>
  );
}

export default AboutInfo;
