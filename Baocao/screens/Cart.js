import React from 'react';
import { View, Text, FlatList, StyleSheet,TouchableOpacity, Alert, Image } from 'react-native';
import { colors, fontSizes } from '../constants';

function Cart(props) {
  const { route } = props;
  //coi tồn tại hung, tồn tại thì láy, k thì rỗng
  const cart = route.params ? route.params.cart : []; 
   // reduce ni để lập sau đó tăng sản phẩm
   //số lượng ở sau khu hắn
   const totalQuantity = cart.reduce((total, currentItem) => total + currentItem.quantity, 0);

   // cáy ni tính thành tiền
   //mớ trong relapce là loại bỏ cáy k phải số
   const totalPrice = cart.reduce(
     (total, currentItem) => total + parseFloat(currentItem.price.replace(/\D/g, '')) * currentItem.quantity,
     0
   );
 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giỏ hàng của bạn:</Text>
      <FlatList
        data={cart}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{
                  width: 85,
                  height: 85,
                  resizeMode: 'cover',
                  borderRadius: 10,
                  marginRight: 15,
                }}
                source={{uri: item.imgLink}}></Image>
              <View>
                <Text style={styles.itemName}>Tên: {item.name}</Text>
                <Text style={styles.itemPrice}>Giá tiền: {item.price}</Text>
                <Text style={{fontSize: fontSizes.h5, color: colors.primary}}>
                  Số lượng: {item.quantity}
                </Text>
              </View>
            </View>
            <TouchableOpacity style={{marginLeft:330}} onPress={()=>{Alert.alert('Thông báo','Bạn vừa nhấn xóa')}}>
              <Text style={{color: 'red', fontSize: fontSizes.h5,fontWeight:'bold'}}>Xóa</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.name}
      />
      {/* Hiển thị tổng số tiền hoặc nút thanh toán tại đây */}
      <View
        style={{
          justifyContent: 'space-between',
          marginTop: 70,marginLeft:20,
        }}>
        <Text
          style={{
            fontSize: fontSizes.h4,
            color: colors.primary,
            fontWeight: 'bold',
          }}>
          Tổng số lượng: {totalQuantity}
        </Text>
        <Text
          style={{
            fontSize: fontSizes.h4,
            color: colors.primary,
            fontWeight: 'bold',
            marginBottom:15,
          }}>
          Tổng thành tiền:{' '}
          {totalPrice.toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND',
          })}
        </Text>
      </View>

      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            Alert.alert('Thông báo', 'Chúc mừng bạn đã thanh toán thành công!');
          }}
          style={{
            backgroundColor: colors.primary,
            borderRadius: 12,
            padding: 10,
            width: 127,
            height: 45,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: fontSizes.h5,
              textAlign: 'center',
            }}>
            Thanh toán
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding:12,
  },
  title: {
    fontSize: fontSizes.h2*1.4,
    fontWeight: 'bold',
    color: colors.primary,
    textAlign: 'center',
    marginBottom:20,
    marginTop: 10
  },
  itemContainer: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 10,
    marginBottom: 16,
  },
  itemName: {
    fontSize: fontSizes.h5,
    marginBottom: 5,
    color:colors.primary,
  },
  itemPrice: {
    fontSize: fontSizes.h5,
    color:colors.primary,
    marginBottom: 5,
  },
});

export default Cart;


