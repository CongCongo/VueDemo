/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _app = __webpack_require__(1);
	
	var _app2 = _interopRequireDefault(_app);
	
	__webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	Vue.filter('time', function (val) {
	    return moment(val).format('YYYY-MM-DD HH:mm');
	});
	
	Vue.use(VueRouter);
	
	var router = new VueRouter({
	    hashbang: true
	});
	
	router.map({
	    '/shop': {
	        component: __webpack_require__(10),
	        menu: '1-1'
	    }
	});
	
	router.redirect({
	    '/': '/shop'
	});
	
	router.beforeEach(function (transition) {
	    if (transition.to.hasOwnProperty('menu')) {
	        router.app.current = transition.to.menu;
	    }
	    transition.next();
	});
	
	router.start(_app2.default, '#app');

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(2)
	__vue_script__ = __webpack_require__(4)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] web\\src\\page\\main\\app.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(5)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./app.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    data: function data() {
	        return {
	            current: ''
	        };
	    }
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n<div class=\"layout\" _v-f9706d5a=\"\">\n    <div class=\"layout-nav\" _v-f9706d5a=\"\">\n        <img src=\"" + __webpack_require__(6) + "\" class=\"nav-logo\" _v-f9706d5a=\"\">\n    </div>\n    <div class=\"layout-menu\" _v-f9706d5a=\"\">\n        <menu :active-key=\"current\" width=\"auto\" :open-keys=\"['1', '2', '3']\" _v-f9706d5a=\"\">\n            <submenu key=\"1\" _v-f9706d5a=\"\">\n                <template slot=\"title\">\n                    <icon type=\"ios-navigate\" _v-f9706d5a=\"\"></icon>\n                    商家管理\n                </template>\n                <menu-item key=\"1-1\" _v-f9706d5a=\"\">商家列表</menu-item>\n            </submenu>\n            <submenu key=\"2\" _v-f9706d5a=\"\">\n                <template slot=\"title\">\n                    <icon type=\"ios-keypad\" _v-f9706d5a=\"\"></icon>\n                    商品管理\n                </template>\n                <menu-item key=\"2-1\" _v-f9706d5a=\"\">商品列表</menu-item>\n                <menu-item key=\"2-2\" _v-f9706d5a=\"\">商品分类</menu-item>\n            </submenu>\n            <submenu key=\"3\" _v-f9706d5a=\"\">\n                <template slot=\"title\">\n                    <icon type=\"ios-analytics\" _v-f9706d5a=\"\"></icon>\n                    用户管理\n                </template>\n                <menu-item key=\"3-1\" _v-f9706d5a=\"\">用户列表</menu-item>\n            </submenu>\n        </menu>\n    </div>\n    <div class=\"layout-content\" _v-f9706d5a=\"\">\n        <router-view _v-f9706d5a=\"\"></router-view>\n    </div>\n</div>\n";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/logo.fe8d29.png";

/***/ },
/* 7 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 8 */,
/* 9 */,
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(11)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] web\\src\\page\\main\\shop.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(13)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./shop.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _util = __webpack_require__(12);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: function data() {
	        return {
	            params: {
	                name: '',
	                addr: '',
	                page: 1,
	                size: 15
	            },
	            total: 0,
	            addModal: false,
	            viewModal: false,
	            editModal: false,
	            self: this,
	            rows: [],
	            columns: [{
	                type: 'index',
	                width: 60,
	                align: 'center'
	            }, {
	                title: '商家名称',
	                key: 'name',
	                width: 250
	            }, {
	                title: '商家地址',
	                key: 'addr',
	                width: 400
	            }, {
	                title: '人均',
	                key: 'avgprice',
	                width: 100,
	                render: function render(row) {
	                    return '￥' + row.avgprice;
	                }
	            }, {
	                title: '平均分',
	                key: 'score',
	                width: 200,
	                render: function render(row) {
	                    return '<Rate show-text :value="' + row.score + '" disabled><span class="rate-color">{{' + row.score + '}}</span></Rate>';
	                }
	            }, {
	                title: '电话',
	                key: 'phone',
	                width: 200
	            }, {
	                title: '操作',
	                key: 'option',
	                render: function render(row, column, index) {
	                    return '<i-button type="primary" size="small" @click="show(' + index + ')">\u67E5\u770B</i-button> <i-button type="primary" size="small" @click="edit(' + index + ')">\u7F16\u8F91</i-button> <i-button type="error" size="small" @click="remove(' + index + ')">\u5220\u9664</i-button>';
	                }
	            }],
	            rules: {
	                name: [{ required: true, message: '商家名称不能为空', trigger: 'blur' }],
	                addr: [{ required: true, message: '商家地址不能为空', trigger: 'blur' }],
	                phone: [{ required: true, message: '商家电话不能为空', trigger: 'blur' }]
	            },
	            index: 0,
	            addform: {
	                name: '',
	                score: 0,
	                avgprice: 0,
	                addr: '',
	                phone: '',
	                longitude: 0,
	                latitude: 0
	            },
	            viewform: {
	                name: '',
	                score: 0,
	                avgprice: 0,
	                addr: '',
	                phone: '',
	                longitude: 0,
	                latitude: 0,
	                ctime: ''
	            },
	            editform: {
	                name: '',
	                score: 0,
	                avgprice: 0,
	                addr: '',
	                phone: '',
	                longitude: 0,
	                latitude: 0
	            }
	        };
	    },
	
	    computed: {},
	    methods: {
	        show: function show(index) {
	            this.viewform = this.rows[index];
	            this.viewModal = true;
	        },
	        edit: function edit(index) {
	            this.index = index;
	            for (var key in this.editform) {
	                this.editform[key] = this.rows[index][key];
	            }
	            this.editModal = true;
	        },
	        remove: function remove(index) {
	            var _this = this;
	
	            this.$Modal.confirm({
	                title: '确定要删除该记录吗？',
	                content: '<p>一旦删除不可恢复</p>',
	                onOk: function onOk() {
	                    _util2.default.post({
	                        url: '/shop/remove',
	                        data: {
	                            _id: _this.rows[index]._id
	                        }
	                    }).then(function (data) {
	                        if (data.stat == 'OK') {
	                            _this.$Message.success('数据删除成功！', 3);
	                            _this.getData();
	                        } else {
	                            _this.$Message.error(data.message, 3);
	                        }
	                    });
	                }
	            });
	        },
	        search: function search() {
	            this.params.page = 1;
	            this.getData();
	        },
	        getData: function getData() {
	            var _this2 = this;
	
	            this.$Loading.start();
	            _util2.default.post({
	                url: '/shop/list',
	                data: this.params
	            }).then(function (data) {
	                _this2.$Loading.finish();
	                if (data.stat == 'OK') {
	                    _this2.rows = data.rows;
	                    _this2.total = data.total;
	                }
	            });
	        },
	        add: function add() {
	            this.addModal = true;
	        },
	        create: function create() {
	            var _this3 = this;
	
	            this.$refs.addformmodal.validate(function (result) {
	                if (result == false) {
	                    return;
	                }
	                _util2.default.post({
	                    url: '/shop/create',
	                    data: _this3.addform
	                }).then(function (data) {
	                    if (data.stat == 'OK') {
	                        _this3.$refs.addformmodal.resetFields();
	                        _this3.addModal = false;
	                        _this3.$Message.success('数据添加成功！', 3);
	                        _this3.getData();
	                    } else {
	                        _this3.$Message.error(data.message);
	                    }
	                });
	            });
	        },
	        update: function update() {
	            var _this4 = this;
	
	            this.$refs.editformmodal.validate(function (result) {
	                if (result == false) {
	                    return;
	                }
	                _util2.default.post({
	                    url: '/shop/update',
	                    data: {
	                        _id: _this4.rows[_this4.index]._id,
	                        data: _this4.editform
	                    }
	                }).then(function (data) {
	                    if (data.stat == 'OK') {
	                        _this4.$refs.editformmodal.resetFields();
	                        _this4.editModal = false;
	                        _this4.$Message.success('数据更新成功！', 3);
	                        _this4.getData();
	                    } else {
	                        _this4.$Message.error(data.message, 3);
	                    }
	                });
	            });
	        }
	    },
	    ready: function ready() {
	        this.$Loading.config({
	            height: 4
	        });
	        this.getData();
	    }
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	module.exports = {
	    post: function post(option) {
	        var defaults = {
	            url: option.url,
	            type: 'POST',
	            dataType: 'json',
	            data: option.data || {},
	            checkLogin: option.checkLogin === undefined ? true : option.checkLogin,
	            headers: {
	                'COntent-Type': 'application/json',
	                'X-Device': 'Web'
	            }
	        };
	        defaults.data = JSON.stringify(defaults.data);
	        return new Promise(function (resolve, reject) {
	            $.ajax(defaults).done(function (data) {
	                if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) != 'object') {
	                    try {
	                        data = JSON.parse(data);
	                    } catch (error) {
	                        console.log(error);
	                    }
	                }
	                if (defaults.checkLogin === true && data.stat == 'ERR_NOT_LOGIN') {
	                    window.location.href = 'login.html';
	                }
	                resolve(data);
	            }).fail(function (data) {
	                if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) != 'object') {
	                    try {
	                        data = JSON.parse(data);
	                    } catch (error) {
	                        console.log(error);
	                    }
	                }
	                reject(data);
	            });
	        });
	    }
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n    <div class=\"toolbar\">\n        <i-form :model=\"search\" inline>\n            <form-item>\n                <i-button type=\"primary\" icon=\"plus\" @click=\"add\">新增商家</i-button>\n            </form-item>\n            <form-item>\n                <i-input type=\"text\" :value.sync=\"params.name\" placeholder=\"商家名称\"></i-input>\n            </form-item>\n            <form-item>\n                <i-input type=\"text\" :value.sync=\"params.addr\" placeholder=\"商家地址\"></i-input>\n            </form-item>\n            <form-item>\n                <i-button type=\"primary\" icon=\"ios-search\" @click=\"search\">搜索</i-button>\n            </form-item>\n        </i-form>\n    </div>\n    <i-table border :content=\"self\" :columns=\"columns\" :data=\"rows\"></i-table>\n    <div class=\"page-wrap\">\n        <Page :total=\"total\" show-total :current.sync=\"params.page\" @on-change=\"getData\" :page-size=\"15\"></Page>\n    </div>\n    <Modal :visible.sync=\"addModal\" title=\"新增商家\">\n        <i-form v-ref:addformmodal :label-width=\"80\" :model=\"addform\" :rules=\"rules\">\n            <Form-item label=\"商家名称\" prop=\"name\">\n                <i-input :value.sync=\"addform.name\" placeholder=\"商家名称\"></i-input>\n            </Form-item>\n            <Form-item label=\"商家地址\" prop=\"addr\">\n                <i-input :value.sync=\"addform.addr\" placeholder=\"商家地址\"></i-input>\n            </Form-item>\n            <Form-item label=\"电话\" prop=\"phone\">\n                <i-input :value.sync=\"addform.phone\" placeholder=\"电话\"></i-input>\n            </Form-item>\n            <Form-item label=\"人均消费\">\n                <i-input :value.sync=\"addform.avgprice\" placeholder=\"人均消费\"></i-input>\n            </Form-item>\n            <Form-item label=\"平均分\">\n                <i-input :value.sync=\"addform.score\" placeholder=\"平均分\"></i-input>\n            </Form-item>\n            <Form-item label=\"经度\">\n                <i-input :value.sync=\"addform.longitude\" placeholder=\"经度\"></i-input>\n            </Form-item>\n            <Form-item label=\"纬度\">\n                <i-input :value.sync=\"addform.latitude\" placeholder=\"纬度\"></i-input>\n            </Form-item>\n        </i-form>\n        <div slot=\"footer\" class=\"modal-footer\">\n            <i-button size=\"large\" type=\"text\" @click=\"addModal=false\">取消</i-button>\n            <i-button size=\"large\" type=\"primary\" @click=\"create\">确定</i-button>\n        </div>\n    </Modal>\n    <Modal :visible.sync=\"editModal\" title=\"编辑商家\">\n        <i-form v-ref:editformmodal :label-width=\"80\" :model=\"editform\" :rules=\"rules\">\n            <Form-item label=\"商家名称\" prop=\"name\">\n                <i-input :value.sync=\"editform.name\" placeholder=\"商家名称\"></i-input>\n            </Form-item>\n            <Form-item label=\"商家地址\" prop=\"addr\">\n                <i-input :value.sync=\"editform.addr\" placeholder=\"商家地址\"></i-input>\n            </Form-item>\n            <Form-item label=\"电话\" prop=\"phone\">\n                <i-input :value.sync=\"editform.phone\" placeholder=\"电话\"></i-input>\n            </Form-item>\n            <Form-item label=\"人均消费\">\n                <i-input :value.sync=\"editform.avgprice\" placeholder=\"人均消费\"></i-input>\n            </Form-item>\n            <Form-item label=\"平均分\">\n                <i-input :value.sync=\"editform.score\" placeholder=\"平均分\"></i-input>\n            </Form-item>\n            <Form-item label=\"经度\">\n                <i-input :value.sync=\"editform.longitude\" placeholder=\"经度\"></i-input>\n            </Form-item>\n            <Form-item label=\"纬度\">\n                <i-input :value.sync=\"editform.latitude\" placeholder=\"纬度\"></i-input>\n            </Form-item>\n        </i-form>\n        <div slot=\"footer\" class=\"modal-footer\">\n            <i-button size=\"large\" type=\"text\" @click=\"editModal=false\">取消</i-button>\n            <i-button size=\"large\" type=\"primary\" @click=\"update\">确定</i-button>\n        </div>\n    </Modal>\n    <Modal :visible.sync=\"viewModal\" title=\"查看详情\">\n        <i-form :label-width=\"80\">\n            <Form-item label=\"商家名称\">\n                {{viewform.name}}\n            </Form-item>\n            <Form-item label=\"商家地址\">\n                {{viewform.addr}}\n            </Form-item>\n            <Form-item label=\"电话\">\n                {{viewform.phone}}\n            </Form-item>\n            <Form-item label=\"人均消费\">\n                {{viewform.avgprice}}\n            </Form-item>\n            <Form-item label=\"平均分\">\n                {{viewform.score}}\n            </Form-item>\n            <Form-item label=\"经度\">\n                {{viewform.longitude}}\n            </Form-item>\n            <Form-item label=\"纬度\">\n                {{viewform.latitude}}\n            </Form-item>\n            <Form-item label=\"添加时间\">\n                {{viewform.ctime | time}}\n            </Form-item>\n        </i-form>\n        <div slot=\"footer\" class=\"modal-footer\">\n            <i-button size=\"large\" type=\"primary\" @click=\"viewModal=false\">确定</i-button>\n        </div>\n    </Modal>\n</div>\n";

/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map