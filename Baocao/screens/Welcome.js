import React from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {images, icon, colors, fontSizes} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {UIButton} from '../components/index';
import {useState, useEffect} from 'react';

function Welcome(props) {
  //state thay đổi ui load lại từ bắt đầu

  // biến thành getter, setter
  const [accountTypes, setAccountTypes] = useState([
    {name: 'Người dùng', isSelected: true},
    {name: 'Chủ cửa hàng', isSelected: false},
    {name: 'Nhà phát triển', isSelected: false},
  ]);
  //navigation
  const {navigation, route} = props;
  //function navigation to/back
  //láy bên trên
  const {navigate, goBack} = navigation;


  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 100,
      }}>
      <ImageBackground
        source={images.background}
        resizeMode="cover"
        style={{
          flex: 100,
        }}>
        <View
          style={{
            flex: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              height: 50,
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Image
              source={icon.fire}
              style={{
                marginHorizontal: 10,
                width: 30,
                height: 30,
              }}
            />
            <Text style={{color: 'white', fontSize:20}}>H37 STORE</Text>
            <View style={{flex: 1}}></View>
            <Icon
              name={'question-circle'}
              color={'white'}
              size={20}
              style={{
                marginRight: 20,
              }}
            />
            {/* <Image
              source={icon.question}
              style={{
                width: 20,
                height: 20,
                tintColor: 'white',
                marginRight: 10,
              }}
            /> */}
          </View>
        </View>
        <View
          style={{flex: 20, justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{marginBottom: 7, color: 'white', fontSize: fontSizes.h3,fontWeight:'bold'}}>
            {' '}
            Chào mừng bạn đến
          </Text>
          <Text
            style={{
              marginBottom: 45,
              color: 'white',
              fontWeight: 'bold',
              fontSize: fontSizes.h2,
              fontStyle:'italic'
            }}>
            H37 STORE
          </Text>
          <Text
            style={{marginBottom: 7, color: 'white', fontSize: fontSizes.h3}}>
              Chọn chế độ đăng nhập
          </Text>
        </View>

        <View style={{flex: 40}}>
          {/* hàm ánh xạ */}
          {accountTypes.map(accountType => (
            <UIButton
              onPress={() => {
                let newAccountTypes = accountTypes.map(eachAccountType => {
                  return {
                    ...eachAccountType,
                    isSelected: eachAccountType.name == accountType.name,
                  };
                });
                setAccountTypes(newAccountTypes); //hàm thay đổi data
              }}
              title={accountType.name}
              isSelected={accountType.isSelected}
            />
          ))}
        </View>
        <View style={{flex: 20}}>
          {/* viết hoa toupcase */}
          <UIButton
          key={accountTypes.name}
            onPress={() => {
              navigate('Login')
            }}
            title={'Khám phá ngay'}
            titleStyle={{ fontSize: 50 }}
          />
          <TouchableOpacity
            onPress={() => {
              navigate('Register')
            }}
            style={{padding: 10}}>
            <Text
              style={{
                color: colors.primary,
                fontSize: fontSizes.h4,
                alignSelf: 'center',
                textDecorationLine: 'underline',
                fontStyle:'italic',
                fontWeight:'bold',
                backgroundColor:colors.inactive1,
                borderRadius:20,
                height:40,
                width:390,
                justifyContent:'center',
                textAlign:'center'
              }}>
              Bạn chưa có tài khoản? Đăng ký ngay
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
export default Welcome;
