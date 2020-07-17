import React from 'react'
import { ScrollView, StyleSheet, View, Text } from 'react-native'
import { Header, ListItem } from 'react-native-elements';
import pxSize from '../../utils/pxSize'
export default class UserInfo extends React.Component {
  constructor() {
    super()
    this.state = {
      userInfo: {}
    }
  }
  render() {
    return (
      <>
        <Header
          centerComponent={{ text: '个人资料', style: { color: '#fff', fontSize: pxSize(30) } }}
          rightComponent={
            <Text style={{ color: '#fff', fontSize: pxSize(26) }}
              onPress={() => this.props.navigation.navigate('EditUserInfo')}
            >编辑</Text>}
        />
        <ScrollView>
          <View>
            <Text style={styles.h3}>基本信息</Text>
            <ListItem
              containerStyle={styles.itemContainerStyle}
              title='身份证号'
              titleStyle={styles.titleStyle}
              rightTitle="420821199305222531"
              rightTitleStyle={styles.rightTitleStyle}
            />
            <ListItem
              containerStyle={styles.itemContainerStyle}
              title='姓名'
              titleStyle={styles.titleStyle}
              rightTitle="彭静"
              rightTitleStyle={styles.rightTitleStyle}
            />
            <ListItem
              containerStyle={styles.itemContainerStyle}
              title='年龄'
              titleStyle={styles.titleStyle}
              rightTitle="彭静"
              rightTitleStyle={styles.rightTitleStyle}
            />
            <ListItem
              containerStyle={styles.itemContainerStyle}
              title='性别'
              titleStyle={styles.titleStyle}
              rightTitle="彭静"
              rightTitleStyle={styles.rightTitleStyle}
            />
            <ListItem
              containerStyle={styles.itemContainerStyle}
              title='所在地区'
              titleStyle={styles.titleStyle}
              rightTitle="湖北省武汉市洪山区大学院路37号"
              rightTitleStyle={styles.rightTitleStyle}
            />
            <View style={{ paddingTop: pxSize(30) }}></View>
            <ListItem
              containerStyle={styles.itemContainerStyle}
              title='身份证详细地址'
              titleStyle={styles.titleStyle}
              subtitle="湖北省武汉市洪山区大学院路37号"
              subtitleStyle={styles.subtitleStyle}
            />
            <ListItem
              containerStyle={styles.itemContainerStyle}
              title='现居住地址'
              titleStyle={styles.titleStyle}
              subtitle="湖北省武汉市洪山区大学院路37号"
              subtitleStyle={styles.subtitleStyle}
            />
            <ListItem
              containerStyle={styles.itemContainerStyle}
              title='公司单位信息'
              titleStyle={styles.titleStyle}
              subtitle="武汉微品致远"
              subtitleStyle={styles.subtitleStyle}
            />
          </View>
        </ScrollView>
      </>
    )
  }
}
const styles = StyleSheet.create({
  h3: {
    fontSize: pxSize(28),
    padding: pxSize(30),
    color: '#999'
  },
  itemContainerStyle: {
    borderBottomColor: '#eee',
    borderBottomWidth: pxSize(1),
    minHeight: pxSize(100)
  },
  rightTitleStyle: {
    width: pxSize(400),
    textAlign: 'right',
    color: '#353535',
    fontSize: pxSize(28),
    fontWeight: 'normal'
  },
  titleStyle: {
    color: '#555555',
    fontSize: pxSize(30),
  },
  subtitleStyle: {
    color: '#353535',
    fontSize: pxSize(28),
    paddingTop: pxSize(30)
  }
})