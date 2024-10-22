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
import {images, icon, colors, fontSizes} from '../../constants';

//_nội bộ file
function _getColor(status) {
  //viết thường
  if (status == 'Hết hàng') {
    return colors.warning;
  } else if (status == 'Còn hàng') {
    return colors.succes;
  }
  //return colors.succes
}
function MobileItem(props) {
  //mobile láy bên mblist
  let {name, status, price, url, nsx} = props.mobile; //dùng destructuring an object
  // bỏ touch vua vì nhấn đc, view k nhấn đc
  const {onPress} = props;

  const tinhtrang = status === 'Còn hàng';

  // mần chộ mua hàng

  return (
    <View
      onPress={props.onPress}
      style={{
        height: 150,
        flexDirection: 'row',
        paddingTop: 20,
        paddingStart: 10,
      }}>
      <Image
        style={{
          width: 100,
          height: 100,
          resizeMode: 'cover',
          borderRadius: 15,
          marginRight: 15,
        }}
        source={{
          uri: url,
        }}></Image>
      <View style={{flex: 1, marginRight: 10}}>
        <Text
          style={{fontWeight: 'bold', fontSize: fontSizes.h5, color: 'black'}}>
          {name}
        </Text>
        <View style={{height: 1, backgroundColor: 'black'}}></View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: fontSizes.h5, color: 'black'}}>
            Trạng thái:{' '}
          </Text>
          <Text style={{fontSize: fontSizes.h5, color: _getColor(status)}}>
            {/* toUpperCase viết hoa */}
            {status.toUpperCase()}
          </Text>
        </View>
        <Text style={{fontSize: fontSizes.h5, color: 'black'}}>
          Giá: {price}
        </Text>
        <Text style={{fontSize: fontSizes.h5, color: 'black'}}>
          Hãng sản xuất: {nsx}
        </Text>
        <TouchableOpacity
        //gọi onpress từ bên mblist tê sang. bên tê định ngĩa r
        onPress={onPress}
        disabled={!tinhtrang}
          style={{
            backgroundColor: tinhtrang? colors.primary:colors.inactive1,
            width: '34%',
            height: '22%',
            borderRadius: 10,
            justifyContent:'center',
            alignItems:'center',
            marginBottom:3,
            opacity: tinhtrang? 1 :0.9
          }}>
          <Text style={{color: 'white', fontSize: fontSizes.h4,marginBottom:3}}>
           {tinhtrang? 'Mua ngay':'Hết hàng'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default MobileItem;
