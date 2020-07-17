import {Dimensions} from 'react-native'

// 竖屏模式下只用获取一次屏幕宽度
const deviceWidthDp = Dimensions.get('window').width
// 设计稿宽度
const uiWidthPx = 750

function pxSize(uiElementPx) {
  return uiElementPx * deviceWidthDp / uiWidthPx
}
export default pxSize