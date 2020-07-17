

import Sign from '../../pages/sign/Sign'
import Register from '../../pages/sign/Register'
import ForgetPwd from '../../pages/sign/ForgetPwd'
import ForgetPwdNext from '../../pages/sign/ForgetPwdNext'
import Privacy from '../../pages/sign/Privacy'
export default [
    {
        name: 'Sign',
        component: Sign,
        options: {
            headerTitle: "登录",
            headerShown: false
        }
    },
    {
        name: 'Register',
        component: Register,
        options: {
            headerTitle: "注册",
            headerShown: false
        }
    },
    {
        name: 'ForgetPwd',
        component: ForgetPwd,
        options: {
            headerTitle: "忘记密码",
            headerShown: false
        }
    },
    {
        name: 'ForgetPwdNext',
        component: ForgetPwdNext,
        options: {
            headerTitle: "设置密码",
            headerShown: false
        }
    },
    
    {
        name: 'Privacy',
        component: Privacy,
        options: {
            headerTitle: "隐私协议",
            headerShown: false
        }
    },
]