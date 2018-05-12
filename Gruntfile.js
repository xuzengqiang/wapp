/**
 * @copyright (c) 2018, www.wicoder.net. All rights reserved.
 * @fileOverview Grunt配置文件
 * @author xuzengqiang <253948113@qq.com>
 * @date 2018-04-30 07:14:22
 * @version 1.0.0
 */
module.exports = function(grunt) {
    "use strict";

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        uglify: {
            options: {
                stripBanners: true,
                banner:
                    "/**\n" +
                    " * <%= pkg.name %> v<%= pkg.version %> \n" +
                    " * @copyright www.wicoder.net \n" +
                    " * @date <%= grunt.template.today('yyyy-mm-dd HH:mm:ss') %> \n" +
                    " * @author xuzengqiang <25394113@qq.com>\n" +
                    " */\n"
            },
            build: {
                src: "src/wapp.js",
                dest: "dist/<%=pkg.name%>-<%=pkg.version%>.min.js"
            }
        }
    });

    /**
     * 使用Uglify插件
     * @since 1.0.0
     */
    grunt.loadNpmTasks("grunt-contrib-uglify");

    /**
     * 在执行grunt命令的时候自动执行uglify插件
     * @since 1.0.0
     */
    grunt.registerTask("default", ["uglify"]);
};
