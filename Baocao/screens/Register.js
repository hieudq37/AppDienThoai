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
import {images, icon, colors, fontSizes} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {UIButton} from '../components/index';
import {useState, useEffect} from 'react';
import {isValidUser, isValidPassword, isValidPasswordconfirm} from '../utilies/Validations';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';


function Register(props) {
  
  
  const {navigation, route} = props;
  //function navigation to/back
  //láy bên trên
  const {navigate, goBack} = navigation;


  //state check
  const [errorUser, setErrorUser] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [erroPasswordconfirm, setErrorPasswordconfirm] = useState('');
  //state save tk,mk
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [passwordconfirm, setPasswordconfirm] = useState('');

  //ban đầu k hiện
  const [keyboardIsShown, setkeyboardIsShown] = useState(false);
  //check login 
  const isValidationOK = () =>
    user.length > 0 &&
    password.length > 0 &&
    passwordconfirm.length > 0 &&
    isValidUser(user) == true &&
    isValidPassword(password) == true &&
    isValidPasswordconfirm(passwordconfirm, password) == true;


    

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



  const registerUser = async () => {
    try {
      const userData = {
        username: user,
        password: password,
      };
      console.log('Gửi request đăng ký với thông tin:', userData);

      const response = await axios.post('http://172.20.10.4:3000/users', userData);

      console.log('Đăng ký thành công!', response.data);
      Alert.alert('Thông báo','Đăng ký tài khoản thành công');
      navigate('Login')

    } catch (error) {
      console.error('Lỗi đăng ký:', error);
     
    }
  };

  return (
    //  Keyboard quản lý
    // chống co
    <View style={{flex: 100, backgroundColor: colors.primary}}>
      <View
        style={{
          marginHorizontal: 10,
          flexDirection: 'row',
          flex: 20,
          alignItems: 'center',
          justifyContent: 'space-around',
          backgroundColor: 'white',
          borderRadius: 20,
          marginTop: 20,
          marginBottom:15,
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: fontSizes.h2,
            fontWeight: 'bold',
            fontStyle: 'italic',
            width: '50%',
            marginLeft:22,
          }}>
          Bạn đã có tài khoản chưa?
        </Text>
        <Image
          source={images.logo}
          style={{width: 140, height: 140, alignSelf: 'center'}}></Image>
      </View>
      <View
        style={{
          flex: 45,
          backgroundColor: 'white',
          padding: 10,
          margin: 10,
          borderRadius: 20,
        }}>
        <View style={{marginHorizontal: 15}}>
          <Text style={{color: colors.primary, fontSize: fontSizes.h4}}>
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
            style={{color: 'black'}}
            placeholder="Nhập tài khoản"
            placeholderTextColor={colors.placeholder}
          />
          {/* viền */}
          <View
            style={{
              height: 1,
              backgroundColor: colors.primary,
              width: '100%',
              marginHorizontal: 15,
              alignSelf: 'center',
              marginBottom: 10,
            }}></View>
          <Text
            style={{color: 'red', fontSize: fontSizes.h6, marginBottom: 10}}>
            {errorUser}
          </Text>
        </View>
        <View style={{marginHorizontal: 15}}>
          <Text style={{color: colors.primary, fontSize: fontSizes.h4}}>
            Mật khẩu:
          </Text>
          <TextInput
            onChangeText={text => {
              setErrorPassword(
                isValidPassword(text) == true ? '' : 'Bạn cần nhập hơn 5 kí tự',
              );
              setPassword(text);
            }}
            secureTextEntry={true} //***
            style={{color: 'black'}}
            placeholder="Nhập mật khẩu"
            placeholderTextColor={colors.placeholder}
          />
          {/* viền */}
          <View
            style={{
              height: 1,
              backgroundColor: colors.primary,
              width: '100%',
              marginHorizontal: 15,
              alignSelf: 'center',
              marginBottom: 9,
            }}></View>
          <Text
            style={{color: 'red', fontSize: fontSizes.h6, marginBottom: 14}}>
            {errorPassword}
          </Text>
        </View>
        <View style={{marginHorizontal: 15,}}>
          <Text style={{color: colors.primary, fontSize: fontSizes.h4}}>
            Nhập lại mật khẩu:
          </Text>
          <TextInput
            onChangeText={text => {
              setErrorPasswordconfirm(
                isValidPasswordconfirm(text,password) == true ? '' : 'Mật khẩu nhập lại chưa khớp',
              );
              setPasswordconfirm(text);
            }}
            secureTextEntry={true} //***
            style={{color: 'black'}}
            placeholder="Nhập lại mật khẩu"
            placeholderTextColor={colors.placeholder}
          />
          {/* viền */}
          <View
            style={{
              height: 1,
              backgroundColor: colors.primary,
              width: '100%',
              marginHorizontal: 15,
              alignSelf: 'center',
              marginBottom: 7,
            }}></View>
          <Text style={{color: 'red', fontSize: fontSizes.h6,marginBottom: 3}}>
            {erroPasswordconfirm}
          </Text>
        </View>
        <View style={{flexDirection:'row'}}>
          
        </View>
        <TouchableOpacity
          disabled={isValidationOK() == false}
          onPress={registerUser} 
          style={{
            backgroundColor:
              isValidationOK() == true ? colors.primary : colors.inactive,
            alignItems: 'center',
            justifyContent: 'center',
            width: '30%',
            alignSelf: 'center',
            borderRadius: 15,
          }}>
          <Text style={{padding: 8, fontSize: fontSizes.h4, color: 'white'}}>
            Đăng ký
          </Text>
        </TouchableOpacity>
      </View>

      {keyboardIsShown == false && (
        <View style={{flex: 20, backgroundColor:colors.primary}}>
          <View
            style={{
              height: 40,
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 25,
            }}>
            <View style={{height: 1, backgroundColor: 'white', flex: 1}}></View>
            <Text
              style={{
                padding: 8,
                fontSize: fontSizes.h4*0.9,
                color: 'white',
                alignSelf: 'center',
                marginHorizontal: 15,
                fontStyle:'italic',
                fontWeight:'bold'
              }}>
              Đăng nhập bằng
            </Text>
            <View style={{height: 1, flex: 1, backgroundColor: 'white'}}></View>
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
    </View>
  );
}

export default Register;
