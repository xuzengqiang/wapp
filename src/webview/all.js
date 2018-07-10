import wapp from '../define'

/**
 * 获取到所有的webview对象
 * @author xuzengqiang
 * @date 2018-07-10 17:28:32
 * @version 1.0.0
 * @description 会返回可视和不可视的webview
 */
export default function () {
  var webviews = plus.webview.all(),
    displays = [],
    hiddens = []

  webviews.forEach(function (webview) {
    if (webview.isVisible()) {
      displays.push(webview)
    } else {
      hiddens.push(webview)
    }
  })

  return {
    displays: displays,
    hiddens: hiddens
  }
}
