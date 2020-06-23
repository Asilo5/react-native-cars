/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';

import Header from './Header';
import CarList from './CarList';

const App = () => {
  return (
    <View style={styles.root}>
      <Header title={'Autos'} />
      <CarList />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
