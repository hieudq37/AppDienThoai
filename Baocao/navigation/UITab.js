import * as React from 'react'
import {Settings, ProductGridView, MobileList,Profile, Cart} from '../screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {fontSizes,colors} from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { icon } from '@fortawesome/fontawesome-svg-core';
const Tab = createBottomTabNavigator()
//cáy ni chứa navigation đầu
const screenOptions =({route})=>({
    headerShown: false,
    //mần màu tab
    tabBarActiveTintColor: 'white',
    tabBarActiveBackgroundColor: colors.primary,
    tabBarInactiveBackgroundColor: colors.primary,
    tabBarIcon: ({focused, color, size})=> {
        let screenName = route.name;
        let iconName = '';
        if (screenName == 'ProductGridView') {
          iconName = 'align-center';
        } else if (screenName == 'MobileList') {
          iconName = 'accusoft';
        } else if (screenName == 'Settings') {
          iconName = 'cogs';
        } else if (screenName == 'Profile') {
          iconName = 'user';
        } else iconName='shopping-cart'
        return (
          <Icon
            name={iconName}
            size={23}
            style={{paddingTop: 4.5,}}
            //cáy ni là chọn hay k chọn
            color={focused ? 'white' : colors.inactive}
          />
        );

    },

})
function UITab(props)
{
    //khúc ni mần cáy tab bên dưới
    return (
      <Tab.Navigator 
      screenOptions={screenOptions}>
        {/* đặt tên giúng màn hình */}
        <Tab.Screen
          options={{
            tabBarLabel: 'Nổi bật',
            tabBarLabelStyle:{
              fontSize:fontSizes.h6
            }
          }}
          name={'ProductGridView'}
          component={ProductGridView}
        />
        <Tab.Screen
        options={{
            tabBarLabel:'Sản phẩm',
            tabBarLabelStyle:{
              fontSize:fontSizes.h6
            }
        }}
         name={'MobileList'} component={MobileList} />
        
         <Tab.Screen 
        options={{
          tabBarLabel:'Giỏ hàng',
          tabBarLabelStyle:{
            fontSize:fontSizes.h6
          }
        }}
        name={'Cart'} component={Cart} />
         <Tab.Screen 
        options={{
          tabBarLabel:'Cá nhân',
          tabBarLabelStyle:{
            fontSize:fontSizes.h6
          }
        }}
        name={'Profile'} component={Profile} />
        <Tab.Screen 
        options={{
          tabBarLabel:'Cài đặt',
          tabBarLabelStyle:{
            fontSize:fontSizes.h6
          }
        }}
        name={'Settings'} component={Settings} />
      </Tab.Navigator>
    );

}

export default UITab