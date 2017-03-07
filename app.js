/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import ArtistBox from './ArtistBox';

export default class musik extends Component {

  render() {
    const artist = {
      image: 'http://lorempixel.com/200/200/sports/Dummy-Text/',
      name: 'David',
      likes: 200,
      comments: 140
    }

    return (
      <View style={styles.container}>
        <ArtistBox artist={artist}/>
        <ArtistBox artist={artist}/>
        <ArtistBox artist={artist}/>
        <ArtistBox artist={artist}/>
        <ArtistBox artist={artist}/>
        <ArtistBox artist={artist}/>
        <ArtistBox artist={artist}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 50
  }
  
});

AppRegistry.registerComponent('musik', () => musik);
