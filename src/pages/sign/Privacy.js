import React from 'react'
import { ScrollView, StyleSheet, View, Dimensions, Text } from 'react-native'
import { Button ,Header} from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons'
import pxSize from '../../utils/pxSize'

export default class Register extends React.Component {
  constructor() {
    super()
    this.state= {
      mobile: '',
      code
    }
  }
  render() {
    return (
      <>
      <Header
          leftComponent={<Icon name='keyboard-arrow-left' size={pxSize(48)} color="#fff" onPress={() => this.props.navigation.goBack()} />}
          centerComponent={{ text: '隐私协议', style: { color: '#fff', fontSize: pxSize(30) } }}
        />
        <ScrollView style={styles.containerHeight}>
          <View style={{ paddingTop: pxSize(20),minHeight: Dimensions.get('window').height - pxSize(300) }}>
            <Text style={styles.h1}>捷算平台隐私政策</Text>
          </View>
          <Button title="返回" buttonStyle={{ height: pxSize(80) }}></Button>
        </ScrollView>
      </>
    )
  }
}
const styles = StyleSheet.create({
  containerHeight: {
    backgroundColor: '#fff'
  },
  h1:{
    fontSize: pxSize(30),
    textAlign: 'center',
    color:'#333'
  }
})