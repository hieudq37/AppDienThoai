import React from 'react';
import {Text, View, Image, ImageBackground, TouchableOpacity, Alert} from 'react-native';
import {sum2Number, substract2Number, pi} from '../utilies/Calculaiton';
import {images,icon,colors,fontSizes} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';

function UIHeader(props) {
    const {title} = props
    return <View style={{height: 60, backgroundColor: colors.primary}}>
    <Text
      style={{
        fontSize: fontSizes.h4,
        alignSelf: 'center',
        lineHeight: 55,
        color:'white',
      }}>
     {title}
    </Text>
  </View>

}

export default UIHeader