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
      .then(resp => this.setState({carList: resp.data}));
  }

  renderList = () => {
    return this.state.carList.map(car => {
      return <Text key={car.brand}>{car.model[0].name}</Text>;
    });
  };

  render() {
    return <View>{this.renderList()}</View>;
  }
}

export default CarList;
