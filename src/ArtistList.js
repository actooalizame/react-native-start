import React, { Component } from 'react';
import {
  ListView
} from 'react-native';

import ArtistBox from './ArtistBox';

export default class ArtistList extends Component {
  constructor(props) {
      super(props);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        dataSource: ds
      }
    };

  componentDidMount(){
    this.updateDataSource(this.props.artists)
  }

  componentWillReceiveProps(newProps){
    if (newProps !== this.props){
      this.updateDataSource(newProps.artists)
    }
  }

  updateDataSource = data => {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(data)
    })
  }

  render() {
    return (
      <ListView
        enableEmptySections = {true}
        dataSource={this.state.dataSource}
        renderRow={(artist) => <ArtistBox artist={artist} />}
      />
      
    );
  }
}


