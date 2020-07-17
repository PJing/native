import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import Global from './module/global'
import Setting from './module/setting'

import { StatusBar } from 'react-native';

import { ThemeProvider } from 'react-native-elements';
import theme from '../assets/style/theme'
import Root from './module/root'

// let routeList = Object.assign(Global, Setting)
let routeList = [
    ...Global,
    ...Setting
]

const Stack = createStackNavigator()

export default class Routes extends React.Component {
    render() {
        return (
            <>
                <StatusBar barStyle="light-content" />
                <ThemeProvider theme={theme}>
                    <NavigationContainer>
                        <Stack.Navigator initialRouteName='Sign'>
                            {
                                routeList.map(item => (
                                    <Stack.Screen name={item.name} component={item.component} key={item.name} options={item.options}></Stack.Screen>
                                ))
                            }
                            {/* 首页 */}
                            <Stack.Screen name="Root" component={Root}
                                options={{
                                    headerTitle: '',
                                    headerShown: false
                                }} />
                        </Stack.Navigator>
                    </NavigationContainer>
                </ThemeProvider>

            </>
        )
    }
}