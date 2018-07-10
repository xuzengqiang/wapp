(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';

  var document = window.document;
  var location = window.location;
  var WAPP = {};

  /**
   * APP日志封装
   * @since 1.0.0
   */
  WAPP.logger = (function () {
    var Logger = {};

    return Logger
  })();

  /**
   * APP webview封装
   * @since 1.0.0
   */
  WAPP.webview = (function () {
    var Webview = {};

    return Webview
  })();

  /**
   * APP网络请求封装
   * @since 1.0.0
   */
  WAPP.network = (function () {
    var Network = {};

    return Network
  })();

  /**
   * APP ajax请求封装
   * @since 1.0.0
   */
  WAPP.ajax = (function () {
    var Ajax = {};
    return Ajax
  })();

  /**
   * APP文件操作
   * @since 1.0.0
   */
  WAPP.file = (function () {
    var File = {};
    return File
  })();

  /**
   * 对外暴露接口
   * @since 1.0.0
   */
  window.WAPP = WAPP;

})));
