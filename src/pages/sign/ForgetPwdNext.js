import React from 'react'
import { ScrollView, StyleSheet, View, Alert } from 'react-native'
import Reg from '../../utils/regular'
import http from '../../utils/http'
import { Input, Button, Image, Header } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { WToast } from 'react-native-smart-tip'
import pxSize from '../../utils/pxSize'

export default class ForgetPwdNext extends React.Component {
  constructor() {
    super()
    this.state = {
      newPassword: '',
      checkPassword: ''
    }
  }
  UNSAFE_componentWillMount() {
    this.setState({
      mobile: this.props.route.params.mobile
    })
  }
  // 校验表单
  submitForm() {
    if (!Reg.pwdreg.test(this.state.newPassword)) {
      WToast.show({ data: '请输入8-20位数字和字母组合的密码' })
      return false
    }
    if (this.state.newPassword !== this.state.checkPassword) {
      WToast.show({ data: '两次输入的密码不一致' })
      return false
    }
    this.forgetPassword()
  }
  forgetPassword() {
    http({
      url: '/api/web/usercore/forgetPassword',
      method: 'post',
      data: {
        mobile: this.state.mobile,
        newPassword: this.state.newPassword,
      }
    }).then(res => {
      Alert.alert('提示', '密码设置成功！快去登录吧', [
        {
          text: '立即登录',
          onPress: () => this.props.navigation.navigate('Sign')
        }])
    }).catch(() => {
    })
  }
  render() {
    return (
      <>
        <Header
          leftComponent={<Icon name='keyboard-arrow-left' size={pxSize(48)} color="#fff" onPress={() => this.props.navigation.goBack()} />}
          centerComponent={{ text: '设置密码', style: { color: '#fff', fontSize: pxSize(30) } }}
        />
        <ScrollView style={styles.containerHeight}>
          <View style={{ paddingBottom: pxSize(44) }}>
            <Image source={require('../../assets/image/signin_picbg.png')} style={{ width: pxSize(690), height: pxSize(160) }} />
          </View>
          <Input
            inputContainerStyle={styles.iptStyle}
            inputStyle={styles.iptTxtStyle}
            placeholder='请输入8-20位密码,组合字母和数字'
            leftIcon={<Image source={require('../../assets/image/lock.png')} style={{ width: pxSize(48), height: pxSize(48) }} />}
            secureTextEntry={true}
            onChangeText={text => this.setState({ newPassword: text })}
            value={this.state.newPassword}
          />
          <Input
            inputContainerStyle={styles.iptStyle}
            inputStyle={styles.iptTxtStyle}
            placeholder='再次输入密码'
            leftIcon={<Image source={require('../../assets/image/lock.png')} style={{ width: pxSize(48), height: pxSize(48) }} />}
            secureTextEntry={true}
            onChangeText={text => this.setState({ checkPassword: text })}
            value={this.state.checkPassword}
          />
          <Button
            title="提交"
            buttonStyle={{ height: pxSize(80), margin: pxSize(10) }}
            onPress={() => this.submitForm()}
          />
        </ScrollView>
      </>
    )
  }
}
const styles = StyleSheet.create({
  containerHeight: {
    backgroundColor: '#fff',
    padding: pxSize(30),
  },
  iptStyle: {
    borderBottomColor: '#e7e7e7',
    borderBottomWidth: pxSize(2)
  },
  iptTxtStyle: {
    fontSize: pxSize(30),
  },
  codebox: {
    position: 'absolute',
    right: 0,
    height: pxSize(88),
    width: pxSize(230),
  },
  codebtn: {
    color: '#ff3232',
    textAlign: 'center',
    lineHeight: pxSize(88),
  }
})