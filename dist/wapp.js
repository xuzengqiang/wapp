(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';

  var document = window.document;

  var location = window.location;

  /**
   * @fileoverview 判断是否为低版本Android
   * @author xuzengqiang
   * @date 2018-07-10 17:18:50
   * @description 针对低版本的android.打开webview采用slide-in-right
   */

  /*
   * @fileOverview index.js
   * @author xuzengqiang
   * @date 2018-07-10 17:07:59
   */

  var wapp = {};

  /**
   * 获取到所有的webview对象
   * @author xuzengqiang
   * @date 2018-07-10 17:28:32
   * @version 1.0.0
   * @description 会返回可视和不可视的webview
   */
  function __webview__all__ () {
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
  }

  /**
   * 获取所有显示的webview
   * @date 2018-07-10 17:45:18
   * @since 1.0.0
   */
  function __get__display__webviews__ () {
    return __webview__all__().displays
  }

  /*
   * @fileOverview webview模块
   * @author xuzengqiang
   * @date 2018-07-10 17:27:47
   */

  wapp.webview = (function () {
    var Webview = {};

    Webview.all = __webview__all__;
    Webview.getDisplayWebviews = __get__display__webviews__;

    return Webview
  })();

  window.wapp = wapp;

})));
