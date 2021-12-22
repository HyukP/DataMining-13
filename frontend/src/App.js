import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Tab,
  Tabs,
  Box,
  ImageListItem
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    let device = null;
    if (this.state.value == 1) {
      device = (
        <div>
        <img className = "postive" src = {"https://i.ibb.co/fMCv5MY/Kakao-Talk-20211222-235009944-01.jpg"}></img>
        <img className = "Negative" src = {"https://i.ibb.co/xj1hDjH/Kakao-Talk-20211222-235009944.jpg"}></img>
        </div>
      );
    }

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
          {device}
        </div>
      </div>
    );
  }
}