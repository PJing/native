

import Setting from '../../pages/setting/Setting'
import UserInfo from '../../pages/user/UserInfo'
import EditUserInfo from '../../pages/user/EditUserInfo'

export default  [
    {
        name: 'Setting',
        component: Setting,
        options: {
            headerTitle: "设置",
            headerShown: false
        }
    },
    {
        name: 'UserInfo',
        component: UserInfo,
        options: {
            headerTitle: "个人资料",
            headerShown: false
        }
    },
    {
        name: 'EditUserInfo',
        component: EditUserInfo,
        options: {
            headerTitle: "编辑个人资料",
            headerShown: false
        }
    }
]