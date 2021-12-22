import React, { useState } from "react";
//import './App.css';
//import PropTypes from 'prop-types';
//import { withStyles } from '@material-ui/core/styles';
//import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import {
  AppBar,
  Typography,
  TextField,
  Button,
  Input,
  IconButton,
  Tab,
  Tabs,
  Box,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Toolbar from "@material-ui/core/Toolbar";
//import MenuIcon from '@material-ui/icons/Menu';
//import IconButton from '@material-ui/core/IconButton';
//import ExitToApp from '@material-ui/icons/ExitToApp';
//import Drawer from '@material-ui/core/Drawer';
//import Forms from './Forms';
//import HomeIcon from '@material-ui/icons/Home';
//import Typography from '@material-ui/core/Typography';
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import GitHubIcon from "@material-ui/icons/GitHub";
import DuoIcon from "@material-ui/icons/Duo";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchWord: "",
      moviesearchWord:"",
      isIn: false,
      value: 0,
    };
  }
  a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };
  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };
  render() {
    return (
      <div>
        <div>
          <AppBar
            position="static"
            style={{
              height: 60,
              background: "transparent",
              flexDirection: "row",
              boxShadow: "4px",
            }}
          >
            <div>
              <Box display="flex" style={{ height: 60 }}>
                <Tabs
                  value={this.state.value}
                  aria-label="simple tabs example"
                  onChange={this.handleChange}
                  style={{ variant: "h3", color: "inherit" }}
                >
                  <Tab label = "Omicron"
                    type = "file"
                    style={{ fontSize: 20 }}
                    {...this.a11yProps(0)}
                  />
                  <Tab label = "Vaccinated"
                    style={{ fontSize: 20 }}
                    {...this.a11yProps(2)}
                  />
                  <Tab label = "BitCoin"
                    style={{ fontSize: 20 }}
                    {...this.a11yProps(1)}
                  />
                  <Tab
                    target="_blank"
                    href="https://github.com/HyukP/DataMining-13"
                    icon={<GitHubIcon fontSize="large"></GitHubIcon>}
                    {...this.a11yProps(3)}
                  />
                </Tabs>
                <Box flexGrow={3} />
              </Box>
            </div>
            <Typography
              align="center"
              variant="h3"
              color="inherit"
              style={{
                fontFamily: '"Helvetica Neue"',
                marginLeft: "auto",
                marginRight: 20,
                textShadow: "#c4e7d2 1px 0 10px",
                fontSize: 40,
              }}
            >
              DataMining Project
            </Typography>
          </AppBar>
        </div>
      </div>
    );
  }
}