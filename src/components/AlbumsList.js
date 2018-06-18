import React from "react";
import { View, Text } from "react-native";
import axios from "axios";

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
        {this.state.albums.map(album => <Text key={album.title}>{album.title}</Text>)}
      </View>
    );
  }
}