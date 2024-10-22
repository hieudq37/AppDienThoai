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
import GridItem from './GridItem';
import axios from 'axios';

function ProductGridView(props) {
  const [products, setProducts] = useState([]);
  
  useEffect(()=>{
    axios.get('http://172.20.10.4:3000/products')
    .then(res=>{
      //cập nhật data
      setProducts(res.data)
    })
    .catch(error=>{
      console.error('Lỗi gọi Api');
    });
  },[]) //chộ rỗng ni chỉ cho chạy 1 lần

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{}}>
        <Text
          style={{
            marginVertical:10,
            fontSize: fontSizes.h1 * 1.3,
            fontWeight: 'bold',
            alignItems: 'center',
            textAlign: 'center',
            color:colors.primary,
          }}>
          Một số sản phẩm nổi bật
        </Text>
      </View>
      <FlatList
        style={{
          marginTop: 5,
        }}
        //mần 2 cột
        data={products}
        keyExtractor={item => item.productname}
        numColumns={2}
        renderItem={({item, index}) => (
          <GridItem 
            //chộ ni truyền sang chộ item
            onPress={() => {
              //... để mần nhân bản, mần trái tim
              let clone = products.map(eachProduct => {
                if (item.productname == eachProduct.productname) {
                  return {
                    ...eachProduct,
                    isSaved:
                      eachProduct.isSaved == false ||
                      eachProduct.isSaved == undefined
                        ? true
                        : false,
                  };
                }
                return eachProduct;
              });
              //gọi trái tim
              setProducts(clone);
            }}
            item={item}
            index={index}
          />
        )}
      />
    </View>
  );
}

export default ProductGridView;
