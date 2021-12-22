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
    maxWidth: 600,
    maxHeight: 300,
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto",
    style : {
      backgroundColor : 'primary'
    },
    boxShadow : "2px 2px"
  },  
});

class MusicList extends React.Component {
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
    (artistName, collectionCensoredName, artworkUrl100) => () => {
      let { likes } = this.state;

      if (likes[collectionCensoredName] == undefined) {
        // 아무것도 선택되어 있지 않을 때는 Undefined
        likes[collectionCensoredName] = true;
      } else {
        // 한번 선택상태면 false나 true이다.
        likes[collectionCensoredName] = likes[collectionCensoredName]
          ? false
          : true;
      }
      console.log(collectionCensoredName, likes[collectionCensoredName]);
      let db = firebase.firestore();

      db.collection("likes").doc(String(collectionCensoredName)).set({
        like: likes[collectionCensoredName],
        collectionCensoredName: collectionCensoredName,
        artistName: artistName,
        artworkUrl100: artworkUrl100,
      });

      
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
        } 

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
            <Card key={item.collectionId} className={classes.card} style = {{background : 'linear-gradient(90deg, #0B6AC0 20%, #99C8F6 80%)'}}>
              <CardContent>
                <Typography variant="subtitle1"> {item.artistName}</Typography>
                <Typography variant="subtitle2">
                  {" "}
                  {item.collectionCensoredName}
                </Typography>
                <CardMedia
                  style={{
                    height: "40px",
                    marginTop: "20px",
                    marginLeft: "450px",
                    width: "30px",
                  }}
                >
                  <img src={item.artworkUrl100}></img>
                </CardMedia>
              </CardContent>
              <CardActions>
                <IconButton
                  onClick={this.toggleFavorite(
                    item.artistName,
                    item.collectionCensoredName,
                    item.artworkUrl100
                  )}
                >
                  {this.state.likes[item.collectionCensoredName] ? (
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

export default withStyles(styles)(MusicList);
