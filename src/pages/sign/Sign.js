import React from 'react'
import { View, Text, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import pxSize from '../../utils/pxSize'
import { Input, Button, Image, Header } from 'react-native-elements';
import { WToast } from 'react-native-smart-tip'
import Reg from '../../utils/regular'
import http from '../../utils/http'
import process from '../../env'
import AsyncStorage from '@react-native-community/async-storage'

export default class Sign extends React.Component {
    constructor() {
        super()
        this.state = {
            account: '',
            password: '',
            captcha: '',
            uuid: '',
            imageUrl: '',
            loading: false
        }
    }
    UNSAFE_componentWillMount() {
        this.getCodeUrl()
    }
    // 获取图片验证码
    getCodeUrl() {
        const tmpUuid = new Date().getTime()+ parseInt(Math.random() * 1000)
        this.setState({
            uuid: tmpUuid,
            imageUrl: process.baseUrl + '/captcha.jpg?uuid=' + tmpUuid
        })
    }
    // 表单校验
    formSubmit() {
        if (!Reg.phone.test(this.state.account)) {
            WToast.show({ data: '请输入正确的手机号' })
            return false
        }
        if (!this.state.password) {
            WToast.show({ data: '请输入密码' })
            return false
        }
        if (!this.state.captcha) {
            WToast.show({ data: '请输入验证码' })
            return false
        }
        this.login()
    }
    // 登录
    login() {
        this.setState({loading: true})
        http({
            url: '/api/web/login',
            method: 'post',
            data: {
                account: this.state.account,
                password: this.state.password,
                captcha: this.state.captcha,
                uuid: this.state.uuid,
            }
        }).then( async res => {
            await AsyncStorage.setItem('token',res.data.ucToken)
            this.props.navigation.replace('Root')
        }).catch(() => {
            this.getCodeUrl()
        })
        this.setState({loading: false})
    }
    // 设置登录表单
    setForm(key, val) {
        this.setState({
            [key]: val
        })
    }
    render() {
        return (
            <>
                <Header
                    centerComponent={{ text: '登录', style: { color: '#fff', fontSize: pxSize(30) } }}
                />
                <ScrollView style={styles.containerHeight}>
                    <View style={{ height: Dimensions.get('window').height - pxSize(500) }}>
                        <View style={{ paddingBottom: pxSize(44) }}>
                            <Image source={require('../../assets/image/signin_picbg.png')} style={{ width: pxSize(690), height: pxSize(160) }} />
                        </View>
                        <Input
                            inputContainerStyle={styles.iptStyle}
                            inputStyle={styles.iptTxtStyle}
                            placeholder='请输入手机号'
                            leftIcon={<Image source={require('../../assets/image/phone.png')} style={{ width: pxSize(48), height: pxSize(48) }} />}
                            keyboardType='numeric'
                            value={this.state.account}
                            onChangeText={(text) => { this.setForm('account', text) }}
                        />
                        <Input
                            inputContainerStyle={styles.iptStyle}
                            inputStyle={styles.iptTxtStyle}
                            placeholder='请输入密码'
                            leftIcon={<Image source={require('../../assets/image/lock.png')} style={{ width: pxSize(48), height: pxSize(48) }} />}
                            secureTextEntry={true}
                            value={this.state.password}
                            onChangeText={(text) => { this.setForm('password', text) }}
                        />

                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Input
                                inputContainerStyle={styles.iptStyle}
                                inputStyle={styles.iptTxtStyle}
                                containerStyle={{ width: pxSize(500) }}
                                placeholder='请输入图片验证码'
                                leftIcon={<Image source={require('../../assets/image/code.png')} style={{ width: pxSize(48), height: pxSize(48) }} />}
                                maxLength={4}
                                value={this.state.captcha}
                                onChangeText={(text) => { this.setForm('captcha', text) }}
                            />
                            <TouchableOpacity onPress={() => this.getCodeUrl()}>
                                <Image
                                    source={{ uri: this.state.imageUrl }}
                                    style={{ width: pxSize(180), height: pxSize(90), resizeMode: 'stretch' }}
                                />
                            </TouchableOpacity>
                        </View>
                        <Button title="登录" buttonStyle={{ height: pxSize(80), margin: pxSize(10) }} loading={this.state.loading} onPress={() => this.formSubmit()}></Button>
                        <View style={styles.txtList}>
                            <Text style={styles.txtbtn, styles.leftbtn} onPress={() => this.props.navigation.navigate('Register')}>我要注册</Text>
                            <Text style={styles.txtbtn} onPress={() => this.props.navigation.navigate('ForgetPwd')}>忘记密码</Text>
                        </View>
                        <View style={[styles.wxbox, { paddingTop: pxSize(180) }]}>
                            <View style={styles.line}></View>
                            <Text style={{ color: '#9A9A9A' }}> 微信登录 </Text>
                            <View style={styles.line}></View>
                        </View>
                    </View>
                    <View style={styles.wxbox}>
                        <Image source={require('../../assets/image/wechat.png')} style={{ width: pxSize(88), height: pxSize(88) }} />
                    </View>
                    <Text onPress={() => this.props.navigation.navigate('Privacy')} style={styles.fixed}>登录即代表您已阅读并同意<Text style={styles.tips}>隐私政策</Text></Text>
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
    tips: {
        color: '#FF3232'
    },
    fixed: {
        width: pxSize(690),
        color: '#666',
        textAlign: 'center',
        fontSize: pxSize(24),
        paddingTop: pxSize(80),
        position: 'relative'
    },
    txtbtn: {
        color: '#555555',
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
    txtList: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: pxSize(48),
        paddingLeft: pxSize(130),
        paddingRight: pxSize(130)
    },
    leftbtn: {
        color: '#FF3232',
        borderRightWidth: pxSize(2),
        borderRightColor: '#333',
    },
    wxbox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    line: {
        height: pxSize(2),
        width: pxSize(120),
        backgroundColor: '#E7E7E7'
    }
})