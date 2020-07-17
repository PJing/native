import React from 'react'
import { View, Dimensions, Text } from 'react-native'
import { Image, Header } from 'react-native-elements';
import pxSize from '../utils/pxSize'
import http from '../utils/http'
export default class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            simpleAppList: []
        }
    }
    componentDidMount() {
        this.getUserServiceList()
    }
    // 获取应用列表
    getUserServiceList() {
        http({
            url: '/api/web/login',
            method: 'post',
            data: {}
        }).then( async res => {

        }).catch(() => {
        })
    }
    render() {
        return (
            <>
                <Header centerComponent={{ text: '首页', style: { color: '#fff', fontSize: pxSize(30) } }} />
                <View style={{ height: Dimensions.get('window').height - pxSize(130) }}>
                    
                    {/* 导航 */}
                    <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', backgroundColor: '#fff' }}>
                        {
                            this.state.simpleAppList.map((item, index) => (
                                <View style={{ width: pxSize(750 / 4), flexDirection: 'column', alignItems: 'center', paddingTop: pxSize(40) }} key={index}>
                                    <Image source={require('../assets/image/avatar.png')} style={{ width: pxSize(100), height: pxSize(100) }} />
                                    <Text style={{ fontSize: pxSize(28), color: '#666', padding: pxSize(10) }}>{item.title}</Text>
                                </View>
                            ))
                        }
                    </View>
                    {/* 地图 */}
                    <View>
                        <Image
                            source={require('../assets/image/map.png')}
                            style={{ width: pxSize(750), height: Dimensions.get('window').height - pxSize(530) }}
                        />
                    </View>
                </View>
            </>
        )
    }
}