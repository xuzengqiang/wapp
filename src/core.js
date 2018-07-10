import LOW_VERSION_ANDROID from './var/LOW_VERSION_ANDROID'
import wapp from './define'

/**
 * 统一配置APP窗口打开方式
 * @description
 * 在Android 4.4以下,采用'slide-in-right'动画方式,Android 4.4以上以及苹果手机采用'pop-in'方式进入
 */
wapp.animate = mui.os.android && parseFloat(mui.os.version) < LOW_VERSION_ANDROID ?
  'slide-in-right' :
  'pop-in'
