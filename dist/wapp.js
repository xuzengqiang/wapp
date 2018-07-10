(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';

  var document = window.document;

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

  window.wapp = wapp;

})));
