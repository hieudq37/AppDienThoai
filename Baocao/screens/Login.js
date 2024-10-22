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
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


function Login(props) {
  //state check
  const [errorUser, setErrorUser] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  //state save tk,mk
  const [user, setUser] = useState('');
  const [password, setPasswrord] = useState('');

  //ban đầu k hiện
  const [keyboardIsShown, setkeyboardIsShown] = useState(false);


  //check login
  const isValidationOK = () =>
    user.length > 0 &&
    password.length > 0 &&
    isValidUser(user) == true &&
    isValidPassword(password) == true;

  //load lại
  useEffect(() => {
    //component
    Keyboard.addListener('keyboardDidShow', () => {
      setkeyboardIsShown(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setkeyboardIsShown(false);
    });
  });

  const Login = () => {
    if (user.length == 0) {
      setErrorUser('Bạn cần nhập tài khoản');
      return;
    }
    if (password.length == 0) {
      setErrorPassword('Bạn cần nhập mật khẩu');
      return;
    }

    //láy url
    //đoạn ni check coi có tk không
    let url = 'http://172.20.10.4:3000/users?username=' + user;
    
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(async res_login => {
        //mần sáng nút đăng nhập k
        if (isValidationOK() == false) {
          Alert.alert('Thông báo','Bạn cần nhập đủ kí tự');
          return;
        } else {
          //láy tài khoản
          let objU = res_login[0];
        
          if (res_login == 0) {
           Alert.alert('Thông báo','Sai thông tin đăng nhập');
            return; 
          }
            //check mật khẩu 
          else if (objU.password !== password) {
            Alert.alert('Thông báo','Sai mật khẩu');
            return;
          } else {
            //khúc ni là đúng
            try {
              await AsyncStorage.setItem('LoginInfo', JSON.stringify(objU));
              //chuyển màn hình
              navigate('UITab');
            } catch (error) {
              console.log(error);
            }
          }
        }
      });
  };


    //navigation
    const {navigation, route} = props;
    //function navigation to/back
    //láy bên trên
    const {navigate, goBack} = navigation;
  return (
    // Keyboard quản lý
    // chống co
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={{flex: 100, backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          flex: 30,
          alignItems: 'center',
          justifyContent: 'space-around',
          marginHorizontal:15
        }}>
        <Text
          style={{
            color: colors.primary,
            fontSize: fontSizes.h2,
            fontWeight: 'bold',
            fontStyle: 'italic',
            width: '50%',
          }}>
          Bạn đã có tài khoản chưa?
        </Text>
        <Image
          source={images.logo}
          style={{width: 140, height: 140, alignSelf: 'center'}}></Image>
      </View>
      <View style={{flex: 30}}>
        <View style={{marginHorizontal: 15}}>
          <Text style={{color: colors.primary, fontSize: fontSizes.h4,fontWeight:'bold'}}>
            Tài khoản:
          </Text>
          <TextInput
            onChangeText={text => {
              // if(isValidUser()==false){
              //   setErrorUser('Bạn cần nhập hơn 5 kí tự')
              // } else setErrorUser('')
              setErrorUser(
                isValidUser(text) == true ? '' : 'Bạn cần nhập hơn 5 kí tự',
              );
              setUser(text);
            }}
            style={{color: 'black',fontWeight:'bold'}}
            placeholder="Nhập tài khoản"
            placeholderTextColor={colors.placeholder}
          />
          {/* viền */}
          <View
            style={{
              height: 1.5,
              backgroundColor: colors.primary,
              width: '100%',
              marginHorizontal: 15,
              alignSelf: 'center',
              marginBottom: 5,
            }}></View>
          <Text
            style={{color: 'red', fontSize: fontSizes.h6, marginBottom: 15}}>
            {errorUser}
          </Text>
        </View>
        <View style={{marginHorizontal: 15}}>
          <Text style={{color: colors.primary, fontSize: fontSizes.h4,fontWeight:'bold'}}>
            Mật khẩu:
          </Text>
          <TextInput
            onChangeText={text => {
              setErrorPassword(
                isValidPassword(text) == true ? '' : 'Bạn cần nhập hơn 5 kí tự',
              );
              setPasswrord(text);
            }}
            secureTextEntry={true} //***
            style={{color: 'black',fontWeight:'bold'}}
            placeholder="Nhập mật khẩu"
            placeholderTextColor={colors.placeholder}
          />
          {/* viền */}
          <View
            style={{
              height: 1.5,
              backgroundColor: colors.primary,
              width: '100%',
              marginHorizontal: 15,
              alignSelf: 'center',
              marginBottom: 15,
            }}></View>
          <Text
            style={{color: 'red', fontSize: fontSizes.h6, marginBottom: 15}}>
            {errorPassword}
          </Text>
        </View>
      </View>

      {keyboardIsShown == false && (
        <View style={{flex: 15}}>
          <TouchableOpacity
            //disabled={isValidationOK() == false}
            onPress={Login}
            style={{
              backgroundColor:
              isValidationOK() == true ? colors.primary : colors.inactive,
              alignItems: 'center',
              justifyContent: 'center',
              width: '33%',
              alignSelf: 'center',
              borderRadius: 15,
            }}>
            <Text style={{padding: 10, fontSize: fontSizes.h4, color: 'white'}}>
              Đăng nhập
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{padding: 5, alignSelf: 'center'}}
            onPress={() => {
              navigate('Register')
            }}>
            <Text
              style={{
                padding: 8,
                fontSize: fontSizes.h4,
                color: colors.primary,
                fontStyle:'italic',
                fontWeight:'bold'
              }}>
              Đăng ký ngay bây giờ
            </Text>
          </TouchableOpacity>
        </View>
      )}
      {keyboardIsShown == false && (
        <View style={{flex: 25}}>
          <View
            style={{
              height: 40,
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 25,
            }}>
            <View style={{height: 1.5, backgroundColor: 'black', flex: 1}}></View>
            <Text
              style={{
                padding: 8,
                fontSize: fontSizes.h4*0.9,
                color: colors.primary,
                alignSelf: 'center',
                marginHorizontal: 15,
                fontStyle:'italic',
                fontWeight:'bold'
              }}>
              Đăng nhập bằng
            </Text>
            <View style={{height: 1.5, flex: 1, backgroundColor: 'black'}}></View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Icon onPress={()=>{
              alert('Chức năng đang chờ phát triển')
            }} 
            name="facebook" size={40} color={colors.facebook}></Icon>
            <View style={{width: 20}} />
            <Icon onPress={()=>{
              alert('Chức năng đang chờ phát triển')
            }} 
            name="google" size={40} color={colors.google}></Icon>
          </View>
        </View>
      )}
    </KeyboardAvoidingView>
  );
}

export default Login;
