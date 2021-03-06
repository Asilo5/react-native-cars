import React, {Component} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import axios from 'axios';

import CarDetail from './CarDetail';

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
      return <CarDetail brand={car} key={car.model[0].name} />;
    });
  };

  render() {
    return <ScrollView style={styles.carList}>{this.renderList()}</ScrollView>;
  }
}

const styles = StyleSheet.create({
  carList: {
    padding: 20,
  },
});

export default CarList;
