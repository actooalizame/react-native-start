import React, { Component } from 'react';
import {
  ListView
} from 'react-native';

import ArtistBox from './ArtistBox';

export default class ArtistList extends Component {

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const artist = {
      image: 'http://lorempixel.com/200/200/sports/Dummy-Text/',
      name: 'David',
      likes: 200,
      comments: 140
    };
    const artists = Array(500).fill(artist);
    this.state = {
      dataSource: ds.cloneWithRows(artists),
    };
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(artist) => <ArtistBox artist={artist} />}
      />
      
    );
  }
}


