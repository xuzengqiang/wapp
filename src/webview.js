/*
 * @fileOverview webview模块
 * @author xuzengqiang
 * @date 2018-07-10 17:27:47
 */
import wapp from './define'
import __webview__all__ from './webview/all'
import __get__display__webviews__ from './webview/get_display_webviews'

wapp.webview = (function () {
  var Webview = {}

  Webview.all = __webview__all__
  Webview.getDisplayWebviews = __get__display__webviews__

  return Webview
})()

export default {}
