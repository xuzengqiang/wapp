(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';

  var document$1 = window.document;

  var location = window.location;

  /**
   * 低版本Android
   * @constant
   */
  var LOW_VERSION_ANDROID = 4.4;

  var wapp = {};

  /**
   * 统一配置APP窗口打开方式
   * @description
   * 在Android 4.4以下,采用'slide-in-right'动画方式,Android 4.4以上以及苹果手机采用'pop-in'方式进入
   */
  wapp.animate = mui.os.android && parseFloat(mui.os.version) < LOW_VERSION_ANDROID ?
    'slide-in-right' :
    'pop-in';

  /**
   * webview模块
   * @date 2018-07-10 17:58:42
   * @since 1.0.0
   */
  wapp.webview = (function () {
    var Webview = {};

    /**
     * 获取到所有的webview对象
     * @date 2018-07-10 17:28:32
     * @version 1.0.0
     * @description 会返回可视和不可视的webview
     */
    Webview.all = function () {
      var webviews = plus.webview.all(),
        displays = [],
        hiddens = [];

      webviews.forEach(function (webview) {
        if (webview.isVisible()) {
          displays.push(webview);
        } else {
          hiddens.push(webview);
        }
      });

      return {
        displays: displays,
        hiddens: hiddens
      }
    };

    /**
     * 获取所有显示的webview
     * @date 2018-07-10 17:45:18
     * @since 1.0.0
     */
    Webview.getDisplayWebviews = function () {
      var webviews = Webview.all();
      return webviews.displays
    };

    /**
     * 获取所有隐藏的webview
     * @date 2018-07-10 18:02:00
     * @since 1.0.0
     */
    Webview.getHiddenWebviews = function () {
      var webviews = Webview.all();
      return webviews.hiddens
    };

    return Webview
  })();

  /**
   * 网络模块
   * @date 2018-07-10 20:01:47
   * @since 1.0.0
   */
  wapp.network = (function () {
    var Network = {};

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
    };

    /**
     * 判断是否处于离线状态
     * @return {Boolean} true/false
     */
    Network.offline = function networkOffline () {
      var currentType = Network.getCurrentType();
      return currentType === null ?
        false :
        currentType <= 1
    };

    /**
     * 判断是否在线状态
     * @return {Boolean} true/false
     */
    Network.online = function networkOnline () {
      var currentType = Network.getCurrentType();
      return currentType === null ?
        false :
        currentType > 1
    };

    /**
     * 判断是否处于wifi状态
     * @return {Boolean} true/false
     */
    Network.wifi = function networkWifi () {
      var currentType = Netework.getCurrentType();
      var networkinfo;

      if (currentType !== null) {
        networkinfo = plus.networkinfo;
        return type === networkinfo.CONNECTION_ETHERNET ||
          type === networkinfo.CONNECTION_WIFI
      }

      return false
    };

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
            var networkType = plus.networkinfo.getCurrentType();
            if (typeof callback === 'function') {
              callback(networkType);
              return
            }
          }, false);
        });
      }
    };

    return Network
  })();

  /**
   * 文件模块
   * @date 2018-07-10 20:05:17
   * @since 1.0.0
   */
  wapp.file = (function () {
    var File = Framework.create();

    File.prototype.extend({
      /**
       * 初始化
       * @param {String} path - 文件路径
       * @return {void}
       */
      initialize: function (path) {
        path = Framework.trim(path);
      }
    });

    return File
  })();

  window.wapp = wapp;

})));
