import wapp from '../define'

/**
 * 网络模块
 * @date 2018-07-10 20:01:47
 * @since 1.0.0
 */
wapp.network = (function () {
  var Network = {}

  /**
   * 获取当前网络状态类型
   * @return {Number} 网络类型枚举值
	 * 网络状态枚举:
	 * CONNECTION_UNKNOW: 网络连接状态未知,固定值0
	 * CONNECTION_NONE: 未连接网络,固定值1
	 * CONNECTION_ETHERNET: 有线网络,固定值2
	 * CONNECTION_WIFI: 无线WIFI网络,固定值3
	 * CONNECTION_CELL2G: 蜂窝移动2G网络,固定值4
	 * CONNECTION_CELL3G: 蜂窝移动3G网络,固定值5
	 * CONNECTION_CELL4G: 蜂窝移动4G网络,固定值6
   */
  Network.getCurrentType = function getCurrentType () {
    if (mui.os.plus && plus) {
      return plus.networkinfo.getCurrentType()
    }
    return null
  }

  /**
   * 判断是否处于离线状态
   * @return {Boolean} true/false
   */
  Network.offline = function networkOffline () {
    var currentType = Network.getCurrentType()
    return currentType === null ?
      false :
      currentType <= 1
  }

  /**
   * 判断是否在线状态
   * @return {Boolean} true/false
   */
  Network.online = function networkOnline () {
    var currentType = Network.getCurrentType()
    return currentType === null ?
      false :
      currentType > 1
  }

  /**
   * 判断是否处于wifi状态
   * @return {Boolean} true/false
   */
  Network.wifi = function networkWifi () {
    var currentType = Netework.getCurrentType()
    var networkinfo

    if (currentType !== null) {
      networkinfo = plus.networkinfo
      return type === networkinfo.CONNECTION_ETHERNET ||
        type === networkinfo.CONNECTION_WIFI
    }

    return false
  }

  /**
   * 开启网络事件监听
   * @param {Function} callback - 回调函数
   * @return {void}
   * @description 如果有callback.则自行处理监听事件
   * @see {@link http://www.html5plus.org/doc/zh_cn/device.html#plus.networkinfo}
   */
  Network.listener = function networkListener (callback) {
    if (mui.os.plus) {
      mui.plusReady(function () {
        document.addEventListener('netchange', function () {
          var networkType = plus.networkinfo.getCurrentType()
          if (typeof callback === 'function') {
            callback(networkType)
            return
          }
        }, false)
      })
    }
  }

  return Network
})()
