import React from 'react'
import { ScrollView, StyleSheet, View, Text } from 'react-native'
import { Input, Button, Image, Header } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { WToast } from 'react-native-smart-tip'
import Reg from '../../utils/regular'
import http from '../../utils/http'
import pxSize from '../../utils/pxSize'
let timer = null
export default class Register extends React.Component {
  constructor() {
    super()
    this.state = {
      form: {
        mobile: '',
        password: '',
        captcha: ''
      },
      checkPassword: '',
      count: 60
    }
  }
  componentWillUnmount() {
    // 清除定时器
    clearInterval(timer)
  }
  // 设置表单
  setForm(key,val) {
    this.setState({
      form: {
        ...this.state.form,
        [key]: val
      }
    })
  }
  // 校验表单
  submitForm() {
    const formData = this.state.form
    if (!Reg.phone.test(formData.mobile)) {
       WToast.show({data: '请输入正确的手机号'})
       return false
    }
    if (!formData.captcha) {
       WToast.show({data: '请输入验证码'})
       return false
    }
    if (!Reg.pwdreg.test(formData.password)) {
       WToast.show({data: '请输入8-20位数字和字母组合的密码'})
       return false
    }
    if (formData.password != this.state.checkPassword) {
       WToast.show({data: '两次输入的密码不一致'})
       return false
    }
    this.register()
  }
  // 注册
  register() {
    http({
      url: '/api/web/register',
      method: 'post',
      data: this.state.form
    }).then(res => {
      WToast.show({data: res.msg})
      this.props.navigation.goBack()
    }).catch(() =>{})
  }
  // 获取验证码
  note() {
    if(this.state.count != 60)  return
    const formData = this.state.form
    if (!Reg.phone.test(formData.mobile)) {
      WToast.show({data: '请输入正确的手机号'})
      return false
    }
    http({
      url: '/api/web/sms/note',
      method: 'get',
      params: {
        phoneNumber: formData.mobile
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
            onChangeText={text => this.setForm('mobile',text)}
            value={this.state.form.mobile}
          />
          <View style={{ position: 'relative' }}>
            <Input
              inputContainerStyle={styles.iptStyle}
              inputStyle={styles.iptTxtStyle}
              placeholder='请输入验证码'
              leftIcon={<Image source={require('../../assets/image/code.png')} style={{ width: pxSize(48), height: pxSize(48) }} />}
              maxLength={6}
              keyboardType='numeric'
              onChangeText={text => this.setForm('captcha',text)}
              value={this.state.form.captcha}
            />
            <View style={styles.codebox}>
              <Text 
              style={[styles.tips, styles.codebtn]}
              onPress={() => this.note()}
              >{this.state.count == 60 ? '获取验证码': this.state.count}</Text>
            </View>
          </View>
          <Input
            inputContainerStyle={styles.iptStyle}
            inputStyle={styles.iptTxtStyle}
            placeholder='请输入8-20位密码,组合字母和数字'
            leftIcon={<Image source={require('../../assets/image/lock.png')} style={{ width: pxSize(48), height: pxSize(48) }} />}
            secureTextEntry={true}
            onChangeText={text => this.setForm('password',text)}
            value={this.state.form.password}
          />
          <Input
            inputContainerStyle={styles.iptStyle}
            inputStyle={styles.iptTxtStyle}
            placeholder='再次输入密码'
            leftIcon={<Image source={require('../../assets/image/lock.png')} style={{ width: pxSize(48), height: pxSize(48) }} />}
            secureTextEntry={true}
            onChangeText={text => this.setState({checkPassword: text})}
            value={this.state.checkPassword}
          />
          <Button 
          title="注 册" 
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
  icon: {
    width: pxSize(70),
  },
  txtbtn: {
    color: '#2089dc',
    paddingLeft: pxSize(20),
    paddingRight: pxSize(20)
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