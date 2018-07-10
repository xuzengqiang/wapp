/**
 * @fileoverview rollup开发环境配置
 * @author xuzengqiang
 * @date 2018-07-10 16:59:27
 * @version 1.0.0
 */
export default {
  /**
   * rollup执行的入口文件
   */
  input: 'src/wapp.js',
  /**
   * rollup输出配置
   */
  output: {
    file: 'dist/wapp.js',
    /**
     * 生成包的格式
     * @description 支持
     * 1、amd - 异步模块定义,用于类RequireJS这样的模块加载器
     * 2、cjs - CommonJS,适用于Node或Browserify/webpack
     * 3、es - 将软件包保存为ES模块文件.
     * 4、iife - 一个自执行的功能.适用于<script>标签引入
     * 5、umd - 通用模块定义,以amd, cjs, 和 iife 为一体
     */
    format: 'umd'
  }
}

