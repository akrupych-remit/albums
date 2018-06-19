import React from "react";
import { View, Text } from "react-native";
import axios from "axios";
import AlbumDetails from "./AlbumDetails";

export default class AlbumsList extends React.Component {
  state = {
    albums: []
  };

  componentWillMount() {
    axios
      .get("https://rallycoding.herokuapp.com/api/music_albums")
      .then(response =>
        this.setState({
          albums: response.data
        })
      );
  }

  render() {
    return (
      <View>
        {this.state.albums.map(album =>
          <AlbumDetails key={album.title} album={album} />
        )}
      </View>
    );
  }
}
