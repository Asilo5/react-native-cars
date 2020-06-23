import React from 'react';
import {View, Text} from 'react-native';

const CarDetail = ({brand}) => {
  return (
    <View>
      <Text>{brand.model[0].name}</Text>
    </View>
  );
};

export default CarDetail;
