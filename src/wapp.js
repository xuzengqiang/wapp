/**
 * @copyright (c) 2018, www.wicoder.net. All rights reserved.
 * @fileOverview wapp.js
 * @author xuzengqiang <253948113@qq.com>
 * @date 2018-04-30 10:05:42
 * @version 1.0.0
 * @description 依赖mui.js和framework.js
 */
;(function(global, factory) {
    factory(global)
})(typeof window !== 'undefined' ? window : this, function(window) {
    'use strict'

    var document = window.document
    var location = window.location
    var WAPP = {}

    /**
     * APP日志封装
     * @since 1.0.0
     */
    WAPP.logger = (function() {
        var Logger = {}

        return Logger
    })()

    /**
     * APP webview封装
     * @since 1.0.0
     */
    WAPP.webview = (function() {
        var Webview = {}

        return Webview
    })()

    /**
     * APP ajax请求封装
     * @since 1.0.0
     */
    WAPP.ajax = (function() {
        var Ajax = {}
        return Ajax
    })()

    /**
     * 对外暴露接口
     * @since 1.0.0
     */
    window.WAPP = WAPP
})
