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
} from 'react-native';
import {sum2Number, substract2Number, pi} from '../utilies/Calculaiton';
import {images, icon, colors, fontSizes} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {UIButton} from '../components/index';
import {useState, useEffect} from 'react';
import {isValidUser, isValidPassword} from '../utilies/Validations';
// import {user as UserRepository, population as PopulationRepository} from '../repositories';

import user from '../repositories/user'
import {user as UserRepository} from '../repositories'



function Profile(props) {
  const {navigation, route} = props;
  //function navigation to/back
  //láy bên trên
  const {navigate, goBack} = navigation;
  
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text
        style={{
          color: colors.primary,
          fontWeight: 'bold',
          fontSize: fontSizes.h1 * 1.5,
          marginTop: 25,
        }}>
        Trang cá nhân
      </Text>
      <Text
        style={{
          fontSize: fontSizes.h2 * 1.2,
          fontWeight: 'bold',
          marginTop: 70,
          fontStyle: 'italic',
          color: '#FFCCCC',
        }}>
        Xin chào quý khách
      </Text>

      <Text
        style={{fontSize: fontSizes.h2, fontWeight: 'bold', color: '#66FFCC'}}>
        H37 STORE hân hạnh được phục vụ
      </Text>
      <View
        style={{
          marginTop: 50,
          backgroundColor: 'rgba(0,0,0,0.25)',
          padding: 20,
          borderRadius: 30,
          marginHorizontal: 4,
        }}>
        <View style={{marginTop: 5, padding: 10}}>
          <Text
            style={{
              fontSize: fontSizes.h4,
              color: 'black',
              fontWeight: 'bold',
            }}>
            Tên khách hàng: Nguyễn Thị Hương
          </Text>
          <Text
            style={{
              fontSize: fontSizes.h4,
              marginTop: 10,
              color: 'black',
              fontWeight: 'bold',
            }}>
            Giới tính: Nữ
          </Text>
          <Text
            style={{
              fontSize: fontSizes.h4,
              marginTop: 10,
              color: 'black',
              fontWeight: 'bold',
            }}>
            Địa chỉ: Diễn Phú, Diễn Châu, Nghệ An
          </Text>
          <Text
            style={{
              fontSize: fontSizes.h4,
              marginTop: 10,
              color: 'black',
              fontWeight: 'bold',
            }}>
            Loại khách hàng: Thành viên VIP
          </Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => {
          Alert.alert(
            'Xác nhận đăng xuất',
            'Bạn có chắc chắn muốn đăng xuất?',
            [
              {
                text: 'Hủy',
                onPress: () => console.log('Hủy đăng xuất'),
                style: 'cancel',
              },
              {
                text: 'Đăng xuất',
                onPress: () => {
                  navigate('Login');
                },
              },
            ],//cáy ni là hung chạm bên ngoài để tắ
            {cancelable: false},
          );
        }}
        style={{
          marginTop: 210,
          backgroundColor: colors.primary,
          borderRadius: 8,
          paddingVertical: 12,
          paddingHorizontal: 20,
        }}>
        <Text
          style={{color: 'white', fontSize: fontSizes.h5, textAlign: 'center'}}>
          Đăng xuất
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Profile;