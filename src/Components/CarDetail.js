import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const CarDetail = ({brand}) => {
  return (
    <View style={styles.viewStyle}>
      <View>
        <Text>{brand.brand}</Text>
      </View>
      {brand.model.map(models => {
        return (
          <View>
            <Text>{models.name}</Text>
            <Image source={{uri: models.image}} style={styles.imageStyle} />
          </View>
        );
      })}
      <View>
        <TouchableOpacity style={styles.button}>
          <Text>Go To Site</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: 'gainsboro',
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
  imageStyle: {
    height: 300,
  },
  button: {
    padding: 20,
    alignItems: 'center',
  },
});

export default CarDetail;
