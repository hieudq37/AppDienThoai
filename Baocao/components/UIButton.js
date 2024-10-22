import React from 'react';
import {Text, View, Image, ImageBackground, TouchableOpacity, Alert} from 'react-native';
import {sum2Number, substract2Number, pi} from '../utilies/Calculaiton';
import {images,icon,colors} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';

function UIButton(props) {
    const{onPress, title, isSelected} =props
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        height: 45,
        marginHorizontal: 15,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: isSelected==true? 'white': null
      }}>
      {isSelected==true&& <Icon
        size={20}
        name="check-circle"
        style={{color: 'green', position: 'absolute', left: 10, top: 10}}
      />}

      <Text style={{color: isSelected==true? colors.primary: 'white'}}>{title}</Text>
    </TouchableOpacity>
  );
}
export default UIButton;