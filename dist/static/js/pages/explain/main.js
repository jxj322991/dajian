global.webpackJsonp([6],{

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(53);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_template_compiler_index_id_data_v_3b8b47ac_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(72);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(54)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3b8b47ac"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_template_compiler_index_id_data_v_3b8b47ac_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\explain\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3b8b47ac", Component.options)
  } else {
    hotAPI.reload("data-v-3b8b47ac", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 54:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_mainTitle__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_videoCard__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_searchBox__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_station__ = __webpack_require__(6);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    var _ref;

    return _ref = {
      thisPage: "explain",
      prePage: undefined,
      leftNone: false,
      dataList: []
    }, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_ref, "prePage", undefined), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_ref, "listShow", true), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_ref, "listHide", false), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_ref, "hideSearch", false), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_ref, "searchNew", 0), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_ref, "animation", true), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_ref, "searchText", ""), _ref;
  },


  components: {
    mainTitle: __WEBPACK_IMPORTED_MODULE_2__components_mainTitle__["a" /* default */],
    videoCard: __WEBPACK_IMPORTED_MODULE_3__components_videoCard__["a" /* default */],
    searchBox: __WEBPACK_IMPORTED_MODULE_4__components_searchBox__["a" /* default */],
    station: __WEBPACK_IMPORTED_MODULE_5__components_station__["a" /* default */]
  },

  methods: {
    escape2Html: function escape2Html(str) {
      var arrEntities = { lt: "<", gt: ">", nbsp: " ", amp: "&", quot: '"' };
      return str.replace(/&(lt|gt|nbsp|amp|quot);/gi, function (all, t) {
        return arrEntities[t];
      });
    },
    toSearch: function toSearch() {
      var _this = this;

      this.hideSearch = true;
      this.listHide = true;
      setTimeout(function () {
        _this.searchNew = +new Date();
        _this.listShow = false;
      }, 500);
    },
    toVideo: function toVideo(x) {
      wx.setStorage({
        key: "video",
        data: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(x)
      });

      wx.setStorageSync("pre_page", this.thisPage);
      wx.setStorageSync("player", {
        data: this.dataList,
        video: x
      });
      var url = "../player/main";
      wx.navigateTo({
        url: url
      });
    },
    getList: function getList() {
      var _this2 = this;

      this.leftNone = false;
      setTimeout(function () {
        _this2.leftNone = true;
      }, 200);
    },
    exit: function exit() {
      var SP = wx.getStorageSync("search_page");
      console.log(SP);
      if (SP) {
        wx.setStorageSync("search_page", false);
        return;
      }
      this.leftNone = false;
      this.listShow = true;
      this.listHide = false;
      this.dataList = [];
      this.hideSearch = false;
      this.animation = true;
    }
  },
  created: function created() {},
  onShow: function onShow() {
    this.searchText = wx.getStorageSync("searchText");
    this.prePage = wx.getStorageSync("pre_page");

    if (this.prePage == "none") {
      this.animation = false;
    }

    var data = wx.getStorageSync("explain");
    console.log("explain", data);
    this.dataList = data.data.data.list;

    wx.setStorageSync("pre_page", "none");
    var title = this.escape2Html(data.title);
    wx.setNavigationBarTitle({
      title: title || "视频列表" //页面标题为路由参数
    });
    this.getList();
  },
  onHide: function onHide() {
    this.exit();
  },
  onUnload: function onUnload() {
    this.exit();
  }
});

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroll-view', {
    staticClass: "max_width"
  }, [_c('main-title', {
    attrs: {
      "thisPage": _vm.thisPage,
      "hideSearch": _vm.hideSearch,
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "toSearch": _vm.toSearch
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "contentBox"
  }, [(_vm.listHide) ? _c('div', {
    staticClass: "searchBox"
  }, [_c('search-box', {
    attrs: {
      "searchPage": _vm.thisPage,
      "searchNew": _vm.searchNew,
      "mpcomid": '1'
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.listShow) ? _c('div', {
    staticClass: "listBox",
    class: {
      listHide: _vm.listHide
    }
  }, [(_vm.prePage == 'search') ? _c('div', {
    staticClass: "search"
  }, [_vm._v("\n        “" + _vm._s(_vm.searchText) + "”搜索到 " + _vm._s(_vm.dataList.length) + " 条结果\n      ")]) : _vm._e(), _vm._v(" "), _c('div', _vm._l((_vm.dataList), function(x, key) {
    return _c('div', {
      key: key
    }, [_c('video-card', {
      attrs: {
        "animation": _vm.animation,
        "videos": x,
        "index": key,
        "leftNone": _vm.leftNone,
        "eventid": '1-' + key,
        "mpcomid": '2-' + key
      },
      on: {
        "toVideo": _vm.toVideo
      }
    })], 1)
  })), _vm._v(" "), (_vm.dataList.length == 0) ? _c('station', {
    attrs: {
      "mpcomid": '3'
    }
  }) : _vm._e()], 1) : _vm._e()])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-3b8b47ac", esExports)
  }
}

/***/ })

},[52]);
//# sourceMappingURL=main.js.map