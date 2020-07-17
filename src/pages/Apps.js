import React from 'react'
import { ScrollView, SafeAreaView, StyleSheet, View, Dimensions, Text } from 'react-native'
import { Image, Header, ListItem, Button } from 'react-native-elements';
import pxSize from '../utils/pxSize'
export default class Apps extends React.Component {
  constructor() {
    super()
    this.state = {
      simpleAppList: [
        {
          title: '惠白色',
          icon: '',
          route: ''
        },
        {
          title: '惠白色',
          icon: '',
          route: ''
        },
        {
          title: '惠白色',
          icon: '',
          route: ''
        },
        {
          title: '惠白色',
          icon: '',
          route: ''
        },
        {
          title: '惠白色',
          icon: '',
          route: ''
        },
        {
          title: '惠白色',
          icon: '',
          route: ''
        },
        {
          title: '惠白色',
          icon: '',
          route: ''
        },
        {
          title: '惠白色',
          icon: '',
          route: ''
        }
      ]
    }
  }
  render() {
    return (
      <>
        {/* <SafeAreaView> */}
        <Header
          centerComponent={{ text: '应用服务大厅', style: { color: '#fff', fontSize: pxSize(30) } }}
        />
        <ScrollView>
          {/* 我的应用 */}
          <Text style={styles.h3}>我的应用</Text>
          <ScrollView horizontal={true} style={{ backgroundColor: '#fff', paddingTop: pxSize(20), paddingBottom: pxSize(20) }}>
            {
              this.state.simpleAppList.map((item, index) => (
                <View style={{ width: pxSize(750 / 4), flexDirection: 'column', alignItems: 'center' }} key={index}>
                  <Image source={require('../assets/image/avatar.png')} style={{ width: pxSize(100), height: pxSize(100) }} />
                  <Text style={{ fontSize: pxSize(28), color: '#666', padding: pxSize(10) }}>{item.title}</Text>
                </View>
              ))
            }
          </ScrollView>
          {/* 全部应用 */}
          <Text style={styles.h3}>全部应用</Text>
          <View>
            {
              this.state.simpleAppList.map((l, i) => (
                <ListItem
                  key={i}
                  leftElement={<Image source={require('../assets/image/avatar.png')} style={{ width: pxSize(100), height: pxSize(100) }} />}
                  title={l.title}
                  titleStyle={{ color: '#333',fontSize: pxSize(28) }}
                  rightElement={<Button
                    buttonStyle={{ borderRadius: pxSize(30), padding: pxSize(8), width: pxSize(100) }}
                    title="移除"
                    titleStyle={{ fontSize: pxSize(22) }}
                    type='outline'
                  />}
                  containerStyle={{ borderBottomColor: '#eee', borderBottomWidth: pxSize(2) }}
                />
              ))
            }
          </View>
        </ScrollView>
        {/* </SafeAreaView> */}
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