import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.textStyling}>Cars</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyling: {
    fontSize: 30,
    textAlign: 'center',
  },
  headerContainer: {
    paddingTop: 45,
    height: 100,
    fontWeight: 'bold',
    backgroundColor: 'gainsboro',
  },
});

export default Header;
