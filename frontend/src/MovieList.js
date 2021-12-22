import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  CardMedia,
  Cardimg,
  IconButton,
  requirePropFactory,
  Box,
} from "@material-ui/core";
import { Favorite, FavoriteBorder } from "@material-ui/icons";
import firebase from "./firebase";
import SnackbarMsg from "./snackmsg";

const styles = (theme) => ({
  content: {},
  layout: {
    display: "flex",
    justifyContent: "center",
  },
  card: {
    minWidth: 275,
    maxWidth: 800,
    maxHeight: 500,
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto",
    style: {
      backgroundColor: "primwry",
    },
    boxShadow: "2px 2px",
  },
});

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: {},
      snackbar: {},
    };
  	/*fetch(`/likes`).then(data => data.json()).then(data => {
	  for (var i = 0; i < Object.keys(data).length; i++) {
		this.state.likes[data[i]["collectionCensoredName"]] = data[i]["like"];
	  }
	  console.log("likes 파이어베이스 접근");
	});*/
  }

  toggleFavorite = 
    (trackId, artistName, trackName, collectionCensoredName, artworkUrl100, previewUrl) => () => {
      let { likes } = this.state;

      if (likes[trackId] == undefined) {
        // 아무것도 선택되어 있지 않을 때는 Undefined
        likes[trackId] = true;
      } else {
        // 한번 선택상태면 false나 true이다.
        likes[trackId] = likes[trackId]
          ? false
          : true;
      }
      console.log(trackId, likes[trackId]);
      let db = firebase.firestore();

      db.collection("movies").doc(String(trackId)).set({
        like: likes[trackId],
		    trackId: trackId,
        artistName: artistName,
		    collectionCensoredName: collectionCensoredName,
        artworkUrl100: artworkUrl100,
        trackName : trackName,
        previewUrl : previewUrl,
      });

      /*
        try {
            let ref = db.collection('likes').doc(String(id));
            ref.get().then((doc) => {
                if (doc.exists) {
                    console.log('document data : ', doc.data());    
                }
                else {
                    console.log('No Such Document')
                }
            }).catch((e) => {
                console.log('Error while accessing Firestore : ' + e);
            });
        }
        catch (e) {
            console.log('Error Occurred : '+ e);
        } */

      this.setState({
        likes,
        snackbar: {
          open: true,
          msg: `${artistName} : ${collectionCensoredName} clicked`,
        },
      });
    };

  handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ snackbar: { open: false, msg: "" } });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        {this.props.list.results.map((item) => {
          return (
            <Card
              key={item.collectionId}
              className={classes.card}
              style={{
                background: "linear-gradient(90deg, #0B6AC0 20%, #99C8F6 80%)",
              }}
            >
              <CardContent>
                <Typography variant="subtitle1"> {item.artistName}</Typography>
                <Typography variant="subtitle2">
                  {" "}
                  {item.collectionCensoredName}
                </Typography>
                <Box style = {{flexDirection : 'row'}}>
                  <CardMedia><img src = {item.artworkUrl100} style ={{width : "185px", height : "254px", marginRight : "200px"}}></img>
                  <iframe
                    id="video"  
                    width="330"
                    height="254"
                    src={item.previewUrl}
                    frameBorder="0"
                    allow="accelerometer, autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  /></CardMedia>
                </Box>
              </CardContent>
              <CardActions>
                <IconButton
                  onClick={this.toggleFavorite(
                    item.trackId,
					          item.artistName,
                    item.trackName,
                    item.collectionCensoredName,
                    item.artworkUrl100,
                    item.previewUrl
                  )}
                >
                  {this.state.likes[item.trackId] ? (
                    <Favorite />
                  ) : (
                    <FavoriteBorder />
                  )}
                </IconButton>
              </CardActions>
            </Card>
          );
        })}
        <SnackbarMsg
          open={this.state.snackbar.open}
          message={this.state.snackbar.msg}
          onClose={this.handleSnackbarClose}
        ></SnackbarMsg>
      </div>
    );
  }
}

export default withStyles(styles)(MovieList);
