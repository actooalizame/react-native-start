import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class ArtistBox extends Component {

  render() {
    const {image, name, likes, comments} = this.props.artist;

    return (
      
      <View style={styles.artistBox}>
        <Image style={styles.image} source={{ uri: image}} />
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Icon name="ios-heart-outline" size={30} color="gray" />
              <Text style={styles.count}>{likes}</Text>
            </View>
            <View style={styles.iconContainer}>
              <Icon name="ios-chatboxes-outline" size={30} color="gray" />
              <Text style={styles.count}>{comments}</Text>
            </View>
          </View>
        </View>
      </View>
      
      
    );
  }
}

const styles = StyleSheet.create({
  artistBox: {
    margin: 9,
    backgroundColor: 'white',
    flexDirection: 'row',
    elevation: 3
  },
  image: {
    width: 200,
    height: 200
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  name: {
    fontSize: 21,
    marginTop: 10,
    color: '#333'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    marginTop: 15
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center'
  },
  count: {
    color: 'gray'
  }
  
});
