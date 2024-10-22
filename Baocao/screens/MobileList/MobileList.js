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
  Button
} from 'react-native';
import {images, icon, colors, fontSizes} from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {UIButton} from '../../components/index';
import {useState, useEffect} from 'react';
import {isValidUser, isValidPassword} from '../../utilies/Validations';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import MobileItem from './MobileItem';
import axios from 'axios';

function MobileList(props) {
  //list of mobile =state
  //mỗi lần nớ đều load lại

  const [mobiles, setMobiles] = useState([]);
  //mần api
  useEffect(()=>{
    axios.get('http://172.20.10.4:3000/mobiles')
    .then(res=>{
      setMobiles(res.data)
    })
    .catch(error=>{
      console.error('Lỗi gọi Api');
    })
  },[])


  const [categories, setCategories] = useState([]);
  //mần api
  useEffect(()=>{
    axios.get('http://172.20.10.4:3000/categories')
    .then(res=>{
      setCategories(res.data)
    })
    .catch(error=> {
      console.error('Lỗi gọi Api')
    })
  },[])


  const { navigation, cart } = props;
    //chộ ni giỏ hàng
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    //kiểm tra coi tồn tại chưa
    const existingItemIndex = cartItems.findIndex(item => item.name === product.name);
    //cáy ni là đã tồn tại
    if (existingItemIndex !== -1) {
      //tồn tại sau cập nhật số lượng
      const updatedCart = cartItems.map((item, index) => {
        if (index === existingItemIndex) {
          return {
            ...item,
            quantity: item.quantity + 1 // tăng thêm 1 cáy đt
          };
        }
        return item;
      });
      setCartItems(updatedCart);
    } else {
      //chộ ni là thêm mới
      const updatedCart = [...cartItems, { name: product.name, price: product.price, imgLink: product.url, quantity: 1 }];
      setCartItems(updatedCart);
    }
  
    Alert.alert('Thông báo', 'Sản phẩm đã được thêm vào giỏ hàng');
  };
  
  


  const [search, setSearch] = useState('');
  const filteredMobiles = () =>
    mobiles.filter(eachMobile =>
      //cáy ni viết thường. Coi cáy nhập vua có nằm bên trong tên dt hung(includes)
      eachMobile.name.toLowerCase().includes(search.toLowerCase()),
    );
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View>
        {/* nỏ dùng nựa, dùng flat */}
        {/* <ScrollView> */}
        {/* ánh xạ ds mobiles, đầu ra là mobile sau truyền từng cáy xuống */}
        {/* {mobiles.map(eachMobile=> <MobileItem  mobile={eachMobile}> </MobileItem>)} */}
        {/* </ScrollView> */}
        {/* chộ tìm kiếm */}
        <View
          style={{
            marginHorizontal: 10,
            marginVertical: 10,
            marginTop: 7,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {/* đoạn ni mần thanh tìm kiếm */}
          <Icon
            // mần nằm trong
            style={{position: 'absolute', top: 9.5, left: 17}}
            name="search"
            size={20}
            color="black"></Icon>
          <TextInput
            autoCorrect={false}
            //lưu text
            onChangeText={text => {
              setSearch(text);
            }}
            placeholder="Nhập từ khóa tìm kiếm"
            style={{
              backgroundColor: colors.inactive1,
              height: 40,
              flex: 1,
              //opa mần mờ
              marginEnd: 10,
              borderRadius: 6,
              opacity: 0.6,
              paddingStart: 45,
            }}></TextInput>
          {/* //mần menu */}
          <Icon name="bars" size={30} color="black"></Icon>
        </View>
        <View style={{height: 100}}>
          <View style={{height: 1.5, backgroundColor: 'black'}}></View>
          <FlatList
            //mần ngang
            horizontal
            data={categories}
            keyExtractor={item => item.name}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    Alert.alert('Thông báo', `Bạn vừa chọn: ${item.name}`);
                  }}
                  style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Image
                    style={{
                      width: 50,
                      height: 50,
                      resizeMode: 'contain',
                      borderRadius: 10,
                      margin: 13,
                    }}
                    source={{
                      uri: item.url,
                    }}></Image>
                  <Text
                    style={{
                      fontSize: fontSizes.h6,
                      color: 'black',
                      fontWeight: 'bold',
                    }}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            }}
            style={{flex: 1.6, marginTop: 0, marginBottom: 2.5}}></FlatList>
          {/* viền */}
          <View
            style={{
              height: 1.5,
              backgroundColor: 'black',
              marrginTop: 4,
            }}></View>
        </View>
      </View>
      {/* filter mà lọc */}
      {filteredMobiles().length > 0 ? (
        <FlatList
          data={filteredMobiles()}
          renderItem={({item}) => (
            <MobileItem
              onPress={() => addToCart(item)}
              mobile={item}
              key={item.name}></MobileItem>
          )}
          keyExtractor={eachMobile => eachMobile.name}></FlatList>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: 'black', fontSize: fontSizes.h3}}>
            Không có dữ liệu theo yêu cầu!
          </Text>
        </View>
      )}
      <TouchableOpacity
        style={{
          borderRadius: 40,
          width: '40%',
          backgroundColor: 'blue',
          padding: 10, 
          alignItems: 'center', // Canh chỉnh các phần tử bên trong theo trục ngang,
          justifyContent: 'center',
          marginLeft:125,
        }}
        onPress={() => {
          navigation.navigate('Cart', {cart: cartItems});
        }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Xem giỏ hàng</Text>
      </TouchableOpacity>
    </View>
  );
}
export default MobileList;
