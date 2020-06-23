/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View} from 'react-native';

import Header from './Header';
import CarList from './CarList';

const App = () => {
  return (
    <View>
      <Header title={'Autos'} />
      <CarList />
    </View>
  );
};

export default App;
