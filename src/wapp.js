(function(global, factory) {
    "use strict";

    factory(global);
})(typeof window !== "undefined" ? window : this, function(window) {
    var document = window.document;
    var location = window.location;
    var WAPP = {};

    /**
     * 对外暴露接口
     * @since 1.0.0
     */
    window.WAPP = WAPP;
});
