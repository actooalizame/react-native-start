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

import ArtistList from './ArtistList';


export default class musik extends Component {


  render() {
    
    const artist = {
      image: 'http://lorempixel.com/200/200/sports/Dummy-Text/',
      name: 'David',
      likes: 200,
      comments: 140
    };
    const artists = Array(500).fill(artist);

    return (
      <View style={styles.container}>
        <ArtistList artists={artists}/>
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
