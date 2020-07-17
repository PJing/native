import React from 'react'
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Image, Header, ListItem } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons'
import pxSize from '../utils/pxSize'
export default class My extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      simpleAppList: [
        {
          title: '安全设置',
          icon: require('../assets/image/anquan.png'),
          route: ''
        },
        {
          title: '我的账户',
          icon: require('../assets/image/zhanghu.png'),
          route: ''
        },
        {
          title: '支付密码重置',
          icon: require('../assets/image/zhifu.png'),
          route: ''
        },
        {
          title: '收货地址',
          icon: require('../assets/image/shouhuo.png'),
          route: ''
        },
        {
          title: '我的卡券',
          icon: require('../assets/image/kaquan.png'),
          route: ''
        },
      ]
    }
  }
  render() {
    return (
      <>
        <ImageBackground source={require('../assets/image/userBg.png')} style={{ width: pxSize(750), height: pxSize(620) }}>
          <Header
            backgroundColor='transparent'
            centerComponent={{ text: '个人中心', style: { color: '#fff', fontSize: pxSize(30) } }}
            rightComponent={<Text style={{ color: '#fff', fontSize: pxSize(26) }} onPress={() => this.props.navigation.navigate('Setting')}>设置</Text>}
            containerStyle={{ borderBottomColor: 'transparent' }}
          />
          <TouchableOpacity onPress={() => this.props.navigation.navigate('UserInfo')}>
            <ListItem
              containerStyle={{ backgroundColor: 'transparent', color: '#fff', paddingBottom: pxSize(70), paddingTop: pxSize(50) }}
              leftElement={<Image source={require('../assets/image/avatar.png')} style={{ width: pxSize(130), height: pxSize(130), borderRadius: pxSize(100) }} />}
              title={
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ color: '#fff', fontSize: pxSize(40) }}>彭静 </Text>
                  <Image source={require('../assets/image/shiming.png')} style={{ width: pxSize(35), height: pxSize(35) }} />
                  <Text style={{ color: '#FFDD7F', fontSize: pxSize(24) }}> 已实名</Text>
                  <Icon name='chevron-right' color='#FFDD7F' size={pxSize(40)} />
                </View>
              }
              subtitle={
                <Text style={{ color: '#fff', fontSize: pxSize(26), backgroundColor: '#FFB8B8' }}> 18971114460 </Text>
              }
            />
          </TouchableOpacity>
        </ImageBackground>
        <View style={{ marginLeft: pxSize(30), marginRight: pxSize(30), marginTop: pxSize(-100), overflow: 'hidden', borderRadius: pxSize(15) }}>
          {
            this.state.simpleAppList.map((l, i) => (
              <ListItem
                key={i}
                leftElement={<Image source={l.icon} style={{ width: pxSize(60), height: pxSize(60) }} />}
                title={l.title}
                titleStyle={{ color: '#333', fontSize: pxSize(28) }}
                containerStyle={{ borderBottomColor: '#eee', borderBottomWidth: pxSize(1) }}
              />
            ))
          }
        </View>
      </>
    )
  }
}
const styles = StyleSheet.create({
  h3: {
    fontSize: pxSize(30),
    padding: pxSize(30)
  }
})