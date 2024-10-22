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
  FlatList,
} from 'react-native';
import {images, icon, colors, fontSizes} from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {UIButton} from '../../components/index';
import {useState, useEffect} from 'react';
import {isValidUser, isValidPassword} from '../../utilies/Validations';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import FiveStarts from './FiveStars';

function GridItem(props)
{
    const {item,index,onPress} = props
    return  <View
    //chia hết thì xanh hung hết thì đỏ
    style={{
      flex: 0.5,
      height: 200,
      marginLeft: index % 2 == 0 ? 10 : 0,
      marginTop: 5,
      marginRight: 10,
      marginBottom: 5,
      borderRadius: 20,
      borderWidth: 2,
      borderColor: 'black',
    }}>
    {/* mần ngang */}
    <TouchableOpacity
        onPress={()=>{
          Alert.alert('Thông báo', `Bạn vừa chọn: ${item.productname}`);
        }}
      style={{
        flexDirection: 'row',
        marginTop: 10,
        marginHorizontal: 5,
      }}>
    
      <Image
        style={{
          width: 100,
          height: 100,
          resizeMode: 'cover',
          borderRadius: 20,
          marginRight: 2,
        }}
        source={{
          uri: item.url,
        }}></Image>
        <View>
        <Text
        style={{fontSize: fontSizes.h5, flex: 1,marginTop:5, textAlign: 'center',color:'black', fontWeight:'bold'}}>
        {item.nsx}
      </Text>
      <Text
        style={{fontSize: fontSizes.h5, flex: 1,marginTop:39, textAlign: 'right',color:'black', fontWeight:'bold'}}>
        {item.price}
      </Text>
        </View>
       
    </TouchableOpacity>
    <Text
      style={{
        fontSize: fontSizes.h5,
        fontWeight: 'bold',
        marginTop: 8,
        marginHorizontal: 10,
        color:'black'
      }}>
      {item.productname}
    </Text>
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity 
      onPress={onPress}
      style={{flexDirection:'row'}}>
        <Icon
          style={{marginEnd: 5, marginTop:7}}
          name="heart"
          size={22}
          color={item.stars>=4 ? 
             'red': colors.inactive }></Icon>
          {/* color={item.isSaved==undefined ||  item.isSaved==false ? 
          colors.inactive : 'red'}></Icon> */}
        <Text style={{color: item.stars>=4  ? 
          'red' : colors.inactive, 
          fontSize: fontSizes.h6, width: 75}}>
          Được yêu thích
        </Text>
        {/* <Text style={{color: item.isSaved==undefined ||  item.isSaved==false ? 
          'black' : 'red', 
          fontSize: fontSizes.h6, width: 75}}>
          Được yêu thích
        </Text> */}
      </TouchableOpacity>
      <View style={{flex: 1}}>
        <FiveStarts number={item.stars}></FiveStarts>
        <Text
          style={{
            color: colors.succes,
            textAlign: 'right',
            marginRight: 3,
          }}>
          {item.views} Đánh giá
        </Text>
      </View>
    </View>
  </View>
}

export default GridItem