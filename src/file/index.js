import wapp from '../define'
/**
 * 文件模块
 * @date 2018-07-10 20:05:17
 * @since 1.0.0
 */
wapp.file = (function () {
  var File = Framework.create()

  File.prototype.extend({
    /**
     * 初始化
     * @param {String} path - 文件路径
     * @return {void}
     */
    initialize: function (path) {
      path = Framework.trim(path)
    }
  })

  return File
})()
