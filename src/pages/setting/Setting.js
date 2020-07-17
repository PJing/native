import React from 'react'
import { ScrollView, SafeAreaView, StyleSheet, View, Dimensions, Text } from 'react-native'
import { Image, Header, ListItem, Button } from 'react-native-elements';
import pxSize from '../../utils/pxSize'
export default class Setting extends React.Component {
  constructor() {
    super()
    this.state = {
      simpleAppList: [
        {
          title: '退出登录',
          icon: '',
          route: ''
        },
        {
          title: '检查新版本',
          icon: '',
          route: ''
        },
      ]
    }
  }
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View>
            {
              this.state.simpleAppList.map((l, i) => (
                <ListItem
                  key={i}
                  leftElement={<Image source={require('../../assets/image/avatar.png')} style={{ width: pxSize(60), height: pxSize(60) }} />}
                  title={l.title}
                  titleStyle={{ color: '#333', fontSize: pxSize(28) }}
                  rightIcon={{ name: 'chevron-right', color: '#333' }}
                  containerStyle={{ borderBottomColor: '#eee', borderBottomWidth: pxSize(2) }}
                />
              ))
            }
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  h3: {
    fontSize: pxSize(30),
    padding: pxSize(30)
  }
})