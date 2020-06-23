import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Header = () => {
  return <Text style={styles.textStyling}> Cars </Text>;
};

const styles = StyleSheet.create({
  textStyling: {
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 45,
    height: 100,
    fontWeight: 'bold',
    backgroundColor: 'gainsboro',
  },
});

export default Header;
