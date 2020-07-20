## 本项目是捷算的APP应用



# 1,安装依赖
- yarn install

# 2,启动项目
- 安卓端： yarn android (Android暂未做适配，待后期完善)

- ios端： yarn ios



## 其他
- ios端第一次启动项目之前需要进入ios 文件夹内，然后使用命令 pod install 安装一次原生插件
- 目录结构采用和vue cli3 相同的目录结构，所有代码均在src文件夹目录里面，
- env.js文件为公共地址的配置文件，由于 react native 没有环境变量的概念，所以打包不同的环境的时候请自行对文件里面的地址进行相应的配置

## 打包
（待完善）

## 接口地址
http://10.0.0.47:3000/project/85/interface/api