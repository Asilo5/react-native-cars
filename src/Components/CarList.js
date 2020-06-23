import React, {Component} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';

class CarList extends Component {
  state = {
    carList: [],
  };

  componentDidMount() {
    axios
      .get('http://givecars.herokuapp.com/')
      .then(resp => this.setState({carList: resp}));
  }

  render() {
    return (
      <View>
        <Text>Car List</Text>
      </View>
    );
  }
}

export default CarList;
