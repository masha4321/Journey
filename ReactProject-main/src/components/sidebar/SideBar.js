import React from "react";
import "./sidebar.css";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

import CloudIcon from "@mui/icons-material/Cloud";

function SideBar() {
  return (
    <>
      <Box
        className="box"
        flex={1}
        p={2}
        sx={{
          display: { sm: "block" },
          marginTop: "0px",
          borderRadius: "16px",
        }}
      >
        {/* <Box position="fixed"> */}
        <List>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              padding="10px"
              image="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/132.png"
              alt="ditto pokemon"
            />
            <CardContent>
              <Typography
                align="center"
                gutterBottom
                variant="h5"
                component="div"
              >
                USERS NAME
              </Typography>
            </CardContent>
          </Card>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#dashboard">
              <ListItemIcon>{<CloudIcon color="success" />}</ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>{" "}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#weeklyprogress">
              <ListItemIcon>{<CloudIcon color="success" />}</ListItemIcon>
              <ListItemText primary="Weekly Progress" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#setting">
              <ListItemIcon>{<CloudIcon color="success" />}</ListItemIcon>
              <ListItemText primary="Setting" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#logout">
              <ListItemIcon>{<CloudIcon color="success" />}</ListItemIcon>
              <ListItemText primary="Log Out" />
            </ListItemButton>
          </ListItem>
        </List>
        {/* </Box> */}
      </Box>
    </>
  );
}

export default SideBar;
