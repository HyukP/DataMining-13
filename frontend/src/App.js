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
import MusicList from "./MusicList";
import music_list from "./data";
import { Colorize, Duo } from "@material-ui/icons";
import LayersClearIcon from "@material-ui/icons/LayersClear";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import GitHubIcon from "@material-ui/icons/GitHub";
import MovieList from "./MovieList";
import DuoIcon from "@material-ui/icons/Duo";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      music_list: {},
      movie_list: {},
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
  handleSearchTextChange = (event) => {
    //console.log(event.target.value);
    this.setState({ searchWord: event.target.value });
  };

  handleSearch = (event) => {
    event.preventDefault();
    console.log(this.state.searchWord);
    this.setState({ searchWord: "" }); //이부분부터 다시 읽도록 하자.
    fetch(`/musicSearch/${this.state.searchWord}`)
      .then((r) => r.json())
      .then((r) => {
        this.setState({ music_list: r, searchWord: "", isIn: false });
      })
      .catch((e) => console.log("error when search musician"));
  };
  handleMovieSearch = (event) => {
    event.preventDefault();
    this.setState({ searchWord: "" });
    fetch(`/movieSearch/${this.state.searchWord}`)
      .then((r) => r.json())
      .then((r) => {
        console.log(r);
        this.setState({ movie_list: r, searchWord: "", isIn: false });
      })
      .catch((e) => console.log("error when search video"));
  };

  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };

  HandleFavorite = (event) => {
    event.preventDefault();
    this.setState({ searchWord: "" });
    fetch(`/likes`)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        this.setState({ searchWord: "" });
        var data2 = [{}];
        var data2_index = 0;
        for (var i = 0; i < Object.keys(data).length; i++) {
          if (data[i]["like"] == true) {
            data2[data2_index++] = data[i];
            console.log(data[i]);
          }
        }
        var likes = { resultCount: Object.keys(data2).length, results: data2 };
        console.log(likes);
        this.setState({ music_list: likes, searchWord: "", value: 0 });
      })
      .catch((e) => console.log("error when search musician"));
  };

  HandleMovieFavorite = (event) => {
    event.preventDefault();
    this.setState({ moviesearchWord: "" });
    fetch(`/movies`)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        this.setState({ moviesearchWord: "" });
        var data2 = [{}];
        var data2_index = 0;
        for (var i = 0; i < Object.keys(data).length; i++) {
          if (data[i]["like"] == true) {
            data2[data2_index++] = data[i];
            console.log(data[i]);
          }
        }
        var movies = { resultCount: Object.keys(data2).length, results: data2 };
        console.log(movies);
        this.setState({ movie_list: movies, moviesearchWord: "", value: 3 });
      })
      .catch((e) => console.log("error when search musician"));
  };

  render() {
    let device = null;
    if (this.state.value == 0) {
      device = (
        <div>
          {this.state.music_list.results &&
            this.state.music_list.results.length > 0 && (
              <MusicList list={this.state.music_list}></MusicList>
            )}
        </div>
      );
    } else if(this.state.value==3) {
      device = <div>{this.state.movie_list.results &&
        this.state.movie_list.results.length > 0 && (
          <MovieList list={this.state.movie_list}></MovieList>
        )} </div>
    }
    else if (this.state.value == 2) {
      device = (
        <div>
          <TextField
            variant="outlined"
            label="Movie Search"
            type="search"
            style={{
              height: 55,
              maxWidth: 350,
              backgroundColor: "white",
              width: 450,
              borderRadius: 5,
              marginLeft: 540,
              marginTop: 50,
            }}
            onChange={this.handleSearchTextChange}
            value={this.state.searchWord}
          ></TextField>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={this.handleMovieSearch}
            style={{
              height: 55,
              marginLeft: 20,
              marginRight: "auto",
              marginTop: 50,
            }}
          >
            Search
          </Button>
          {this.state.movie_list.results &&
            this.state.movie_list.results.length > 0 && (
              <MovieList list={this.state.movie_list}></MovieList>
            )}
        </div>
      );
      //이부분에서 this.state.music_list 이부분을 내가 movie가 나오게끔 만들면 된다.!!!
    } else if (this.state.value == 1) {
      device = (
        <div>
          <TextField
            variant="outlined"
            label="Music Album Search"
            type="search"
            style={{
              height: 55,
              maxWidth: 350,
              backgroundColor: "white",
              width: 450,
              borderRadius: 5,
              marginLeft: 540,
              marginTop: 50,
            }}
            onChange={this.handleSearchTextChange}
            value={this.state.searchWord}
          ></TextField>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={this.handleSearch}
            style={{
              height: 55,
              marginLeft: 20,
              marginRight: "auto",
              marginTop: 50,
            }}
          >
            Search
          </Button>
          {this.state.music_list.results &&
            this.state.music_list.results.length > 0 && (
              <MusicList list={this.state.music_list}></MusicList>
            )}
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
                  onChange={this.handleChange}
                  aria-label="simple tabs example"
                  style={{ variant: "h3", color: "inherit" }}
                >
                  <Tab
                    icon={<ThumbUpIcon fontSize="large"></ThumbUpIcon>}
                    style={{ fontSize: 10 }}
                    {...this.a11yProps(0)}
                    onClick={this.HandleFavorite}
                  />
                  <Tab
                    icon={
                      <LibraryMusicIcon fontSize="large"></LibraryMusicIcon>
                    }
                    style={{ fontSize: 20 }}
                    {...this.a11yProps(2)}
                  />
                  <Tab
                    icon={<DuoIcon fontSize="large"></DuoIcon>}
                    style={{ fontSize: 20 }}
                    {...this.a11yProps(1)}
                  />
                  <Tab
                    icon={<LocalMoviesIcon fontSize="large"></LocalMoviesIcon>}
                    style={{ fontSize: 20 }}
                    {...this.a11yProps(3)}
                    onClick = {this.HandleMovieFavorite}
                  />
                  <Tab
                    target="_blank"
                    href="https://git.ajou.ac.kr/Hyuk/practical-coding1-group1"
                    icon={<GitHubIcon fontSize="large"></GitHubIcon>}
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
              Group1 Application
            </Typography>
          </AppBar>
          {device}
        </div>
      </div>
    );
  }
}