import React from 'react'
import { StatusBar } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from '../../pages/Home'
import Apps from '../../pages/Apps'
import My from '../../pages/My'

const Tab = createBottomTabNavigator()

class Index extends React.Component {
  render() {
    return (
      <>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = 'home';
              }
              else if (route.name === 'Apps') {
                iconName = 'minus-square-o'
              }
              else if (route.name === 'My') {
                iconName = 'user-o'
              }
              return <Icon name={iconName} size={size} color={color} />;
            }
            
          })}
          tabBarOptions={{
            activeTintColor: '#FF6132',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="Home" component={Home} options={{
            tabBarLabel: '首页',
            headerShown: true
          }}></Tab.Screen>
          <Tab.Screen name="Apps" component={Apps} options={{
            tabBarLabel: '扫一扫'
          }}></Tab.Screen>
          <Tab.Screen name="My" component={My} options={{
            tabBarLabel: '我的'
          }}></Tab.Screen>
        </Tab.Navigator>
      </>
    )
  }
}
export default Index