import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumsList from './src/components/AlbumsList';

const App = () => (
    <View>
        <Header title={'My Play Music'}/>
        <AlbumsList/>
    </View>
)

AppRegistry.registerComponent('albums', () => App);