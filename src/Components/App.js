/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';

import Header from './Header';

const App = () => {
  return (
    <View style={styles.app}>
      <Header title={'Autos'} />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    padding: 0,
  },
});

export default App;
