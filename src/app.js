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
    

    return (
      <View style={styles.container}>
        <ArtistList />
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