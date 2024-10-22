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
  Switch,
} from 'react-native';
import {images, icon, colors, fontSizes} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {UIButton} from '../../components/index';
import {useState, useEffect} from 'react';
import {isValidUser, isValidPassword} from '../../utilies/Validations';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { UIHeader } from '../components';

function Settings(props)
{
    //mặc định tắt mở nhờ vua đay
    const [isEnabledLockApp, setEnabledLockApp] = useState(true)
    const [isUseFingerPrint, setUseFingerPrint] = useState(false)
    const [isEnabledChangePassword, setEnableChangePassword] = useState(true)
    return (
      <View style={{flex: 1}}>
        <UIHeader title={'Cài đặt'}></UIHeader>
        <ScrollView>
          <View
            style={{
              height: 40,
              backgroundColor: ' rgba(0,0,0,0.2)',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: fontSizes.h5,
                color: colors.primary,
                paddingStart: 10,
              }}>
              Chung
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <Icon
              style={{marginStart: 10}}
              name="globe"
              size={20}
              color={'black'}
            />
            <Text
              style={{
                color: 'black',
                fontSize: fontSizes.h5,
                color: 'black',
                paddingStart: 10,
              }}>
              Ngôn ngữ
            </Text>
            {/* đẩy ra */}
            <View style={{flex: 1}} />
            <Text
              style={{
                color: 'black',
                fontSize: fontSizes.h5,
                color: 'black',
                paddingEnd: 10,
                //mần mờ
                opacity: 0.75,
              }}>
              Tiếng việt
            </Text>
            <Icon
              style={{paddingEnd: 10}}
              name="chevron-right"
              size={20}
              color={'black'}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <Icon
              style={{marginStart: 10}}
              name="cloud"
              size={17}
              color={'black'}
            />
            <Text
              style={{
                color: 'black',
                fontSize: fontSizes.h5,
                color: 'black',
                paddingStart: 10,
              }}>
              Môi trường
            </Text>
            {/* đẩy ra */}
            <View style={{flex: 1}} />
            <Text
              style={{
                color: 'black',
                fontSize: fontSizes.h5,
                color: 'black',
                paddingEnd: 10,
                //mần mờ
                opacity: 0.75,
              }}>
              Đám mây
            </Text>
            <Icon
              style={{paddingEnd: 10}}
              name="chevron-right"
              size={20}
              color={'black'}
            />
          </View>
          <View
            style={{
              height: 40,
              backgroundColor: ' rgba(0,0,0,0.2)',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: fontSizes.h5,
                color: colors.primary,
                paddingStart: 10,
              }}>
              Tài khoản
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <Icon
              style={{marginStart: 10}}
              name="phone"
              size={17}
              color={'black'}
            />
            <Text
              style={{
                color: 'black',
                fontSize: fontSizes.h5,
                color: 'black',
                paddingStart: 10,
              }}>
              Số điện thoại
            </Text>
            {/* đẩy ra */}
            <View style={{flex: 1}} />
            <Icon
              style={{paddingEnd: 10}}
              name="chevron-right"
              size={20}
              color={'black'}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <Icon
              style={{marginStart: 10}}
              name="envelope"
              size={17}
              color={'black'}
            />
            <Text
              style={{
                color: 'black',
                fontSize: fontSizes.h5,
                color: 'black',
                paddingStart: 10,
              }}>
              Email
            </Text>
            {/* đẩy ra */}
            <View style={{flex: 1}} />
            <Icon
              style={{paddingEnd: 10}}
              name="chevron-right"
              size={20}
              color={'black'}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <Icon
              style={{marginStart: 10}}
              name="sign-out-alt"
              size={17}
              color={'black'}
            />
            <Text
              style={{
                color: 'black',
                fontSize: fontSizes.h5,
                color: 'black',
                paddingStart: 10,
              }}>
              Đăng xuất
            </Text>
            {/* đẩy ra */}
            <View style={{flex: 1}} />
            <Icon
              style={{paddingEnd: 10}}
              name="chevron-right"
              size={20}
              color={'black'}
            />
          </View>
          <View
            style={{
              height: 40,
              backgroundColor: ' rgba(0,0,0,0.2)',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: fontSizes.h5,
                color: colors.primary,
                paddingStart: 10,
              }}>
              Bảo mật
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <Icon
              style={{marginStart: 10}}
              name="door-closed"
              size={17}
              color={'black'}
            />
            <Text
              style={{
                color: 'black',
                fontSize: fontSizes.h5,
                color: 'black',
                paddingStart: 10,
              }}>
              Khóa ứng dụng ở chế độ nền
            </Text>
            {/* đẩy ra */}
            <View style={{flex: 1}} />
            {/* để mà gạt */}
            <Switch
            style={{marginEnd: 7}}
              trackColor={{false:colors.inactive, true: colors.primary}}
              thumbColor={isEnabledLockApp ? colors.primary : colors.inactive}
              //ios_backgroundColor="#3e3e3e"
              onValueChange={() => {
                //để mần đảo lại giá trị true false
                setEnabledLockApp(!isEnabledLockApp)
              }}
              value={isEnabledLockApp}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <Icon
              style={{marginStart: 10}}
              name="fingerprint"
              size={17}
              color={'black'}
            />
            <Text
              style={{
                color: 'black',
                fontSize: fontSizes.h5,
                color: 'black',
                paddingStart: 10,
              }}>
              Sử dụng vân tay
            </Text>
            {/* đẩy ra */}
            <View style={{flex: 1}} />
            {/* để mà gạt */}
            <Switch
            style={{marginEnd: 7}}
              trackColor={{false:colors.inactive, true: colors.primary}}
              thumbColor={isUseFingerPrint ? colors.primary : colors.inactive}
              //ios_backgroundColor="#3e3e3e"
              onValueChange={() => {
                //để mần đảo lại giá trị true false
                setUseFingerPrint(!isUseFingerPrint)
              }}
              value={isUseFingerPrint}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <Icon
              style={{marginStart: 10}}
              name="lock"
              size={17}
              color={'black'}
            />
            <Text
              style={{
                color: 'black',
                fontSize: fontSizes.h5,
                color: 'black',
                paddingStart: 10,
              }}>
              Đổi mật khẩu
            </Text>
            {/* đẩy ra */}
            <View style={{flex: 1}} />
            {/* để mà gạt */}
            <Switch
            style={{marginEnd: 7}}
              trackColor={{false:colors.inactive, true: colors.primary}}
              thumbColor={isEnabledChangePassword ? colors.primary : colors.inactive}
              //ios_backgroundColor="#3e3e3e"
              onValueChange={() => {
                //để mần đảo lại giá trị true false
                setEnableChangePassword(!isEnabledChangePassword)
              }}
              value={isEnabledChangePassword}
            />
          </View>
          <View
            style={{
              height: 40,
              backgroundColor: ' rgba(0,0,0,0.2)',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: fontSizes.h5,
                color: colors.primary,
                paddingStart: 10,
              }}>
              Khác
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <Icon
              style={{marginStart: 10}}
              name="file-alt"
              size={20}
              color={'black'}
            />
            <Text
              style={{
                color: 'black',
                fontSize: fontSizes.h5,
                color: 'black',
                paddingStart: 10,
              }}>
              Điều khoản dịch vụ
            </Text>
            {/* đẩy ra */}
            <View style={{flex: 1}} />
            <Icon
              style={{paddingEnd: 10}}
              name="chevron-right"
              size={20}
              color={'black'}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <Icon
              style={{marginStart: 10}}
              name="passport"
              size={20}
              color={'black'}
            />
            <Text
              style={{
                color: 'black',
                fontSize: fontSizes.h5,
                color: 'black',
                paddingStart: 10,
              }}>
              Giấy phép nguồn mở
            </Text>
            {/* đẩy ra */}
            <View style={{flex: 1}} />
            <Icon
              style={{paddingEnd: 10}}
              name="chevron-right"
              size={20}
              color={'black'}
            />
          </View>
        </ScrollView>
      </View>
    );
}

export default Settings