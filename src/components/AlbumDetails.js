import React from 'react';
import { View, Text } from 'react-native';

export default AlbumDetails = (props) => (
    <View>
        <Text>{props.album.title}</Text>
    </View>
)