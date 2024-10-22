import React from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Alert,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  ScrollView,
} from 'react-native';
//cáy ni phải bỏ ngoài vì mần trong thư mục
import {images, icon, colors, fontSizes} from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {UIButton} from '../components/index';
import {useState, useEffect} from 'react';
import {isValidUser, isValidPassword} from '../utilies/Validations';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
function FiveStarts(props) {
  const {number} = props;
  //mần 5 sao
  return (
    <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
      {[0, 1, 2, 3, 4].map(item => (
        <Icon
          key={`${item}`}
          style={{marginEnd: 0.5}}
          name="star"
          size={13.4}
          color={item <= number - 1 ? colors.warning : colors.inactive}
        />
      ))}
    </View>
  );
}
export default FiveStarts;
