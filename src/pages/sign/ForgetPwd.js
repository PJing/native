import React from 'react'
import { ScrollView, StyleSheet, View, Text } from 'react-native'
import { Input, Button, Image, Header } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons'
import pxSize from '../../utils/pxSize'
import { WToast } from 'react-native-smart-tip'
import Reg from '../../utils/regular'
import http from '../../utils/http'
export default class Register extends React.Component {
  constructor() {
    super()
    this.state = {
      mobile: '',
      code: '',
      count: 60
    }
  }
  // 设置表单
  setForm(key, val) {
    this.setState({
        [key]: val
    })
  }
  // 表单校验
  formSubmit() {
    if (!Reg.phone.test(this.state.mobile)) {
      WToast.show({ data: '请输入正确的手机号' })
      return false
    }
    if (!this.state.code) {
      WToast.show({ data: '请输入验证码' })
      return false
    }
    this.toNext()
  }
  // 校验手机验证码
  toNext() {
    http({
      url: '/api/web/usercore/verificationCode',
      method: 'post',
      data: {
        mobile: this.state.mobile,
        code: this.state.code,
      }
    }).then(res => {
      this.props.navigation.navigate('ForgetPwdNext', {mobile: this.state.mobile})
    }).catch(() => {
    })
  }
  // 获取验证码
  note() {
    if(this.state.count != 60)  return
    if (!Reg.phone.test(this.state.mobile)) {
      WToast.show({data: '请输入正确的手机号'})
      return false
    }
    http({
      url: '/api/web/sms/note',
      method: 'get',
      params: {
        phoneNumber: this.state.mobile
      }
    }).then(res => {
      WToast.show({data: res.msg})
      this.setInter()
    })
  }
  // 验证码倒计时
  setInter() {
    timer =  setInterval(() => {
      if(this.state.count > 0) {
        this.setState({
          count: this.state.count - 1
        })
      }else {
        clearInterval(timer)
        this.setState({
          count: 60
        })
      }
    }, 1000);
  }
  render() {
    return (
      <>
        <Header
          leftComponent={<Icon name='keyboard-arrow-left' size={pxSize(48)} color="#fff" onPress={() => this.props.navigation.goBack()} />}
          centerComponent={{ text: '注册', style: { color: '#fff', fontSize: pxSize(30) } }}
        />
        <ScrollView style={styles.containerHeight}>
          <View style={{ paddingBottom: pxSize(44) }}>
            <Image source={require('../../assets/image/signin_picbg.png')} style={{ width: pxSize(690), height: pxSize(160) }} />
          </View>
          <Input
            inputContainerStyle={styles.iptStyle}
            inputStyle={styles.iptTxtStyle}
            placeholder='请输入手机号'
            leftIcon={<Image source={require('../../assets/image/phone.png')} style={{ width: pxSize(48), height: pxSize(48) }} />}
            keyboardType='numeric'
            value={this.state.mobile}
            onChangeText={(text) => { this.setForm('mobile', text) }}
          />
          <View style={{ position: 'relative' }}>
            <Input
              inputContainerStyle={styles.iptStyle}
              inputStyle={styles.iptTxtStyle}
              placeholder='请输入验证码'
              leftIcon={<Image source={require('../../assets/image/code.png')} style={{ width: pxSize(48), height: pxSize(48) }} />}
              maxLength={6}
              keyboardType='numeric'
              onChangeText={(text) => { this.setForm('code', text) }}
            />
            <View style={styles.codebox}>
              <Text 
              style={[styles.tips, styles.codebtn]}
              onPress={() => this.note()}
              >{this.state.count == 60 ? '获取验证码': this.state.count}</Text>
            </View>
          </View>
          <Button title="下一步" buttonStyle={{ height: pxSize(80), margin: pxSize(10) }} onPress={() => this.formSubmit()}></Button>
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