/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _folders = __webpack_require__(1);

var _folders2 = _interopRequireDefault(_folders);

var _errorcodes = __webpack_require__(31);

var _errorcodes2 = _interopRequireDefault(_errorcodes);

var _platform = __webpack_require__(32);

var _platform2 = _interopRequireDefault(_platform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	VERSION: chrome.runtime.getManifest().version,
	PLATFORM: _platform2.default.name,
	BROWSERLANG: chrome.i18n.getUILanguage(),
	FALLBACKLINK: "https://base0-sv.diltwo.com/client/",
	SERVERSJSONFILE: _folders2.default.ASSETS + "/servers.json",
	TIERUPDATETTL: 86400,
	VERSIONSTATUSTTL: 86400,
	UNINSTALLPATH: "/html/uninstalled.php",
	BASEDOMAIN: "diltwo.com",
	BACKUPBASEDOMAIN: "mainbackupdomain.com",
	TESTREQUESTREGEX: /http:\/\/test[0-9]{6,12}\.io/,
	SERVICE: "SetupVPN",
	SERVICESHORT: "setupvpn",
	SHORTNAME: "sv",
	REALM: "setupvpn.com",
	CONTACTSUPPORTURL: "https://setupvpn.com/contact/",
	PACSCRIPT: "js/PAC.js",
	DOWNLOADLINKS: {
		ANDROID: "https://play.google.com/store/apps/details?id=com.setupvpn.main",
		DESKTOP: "http://desktopclient.net/gw/index.html#/setupvpn"
	},
	RATEUS: {
		LINKS: {
			FIREFOX: "https://addons.mozilla.org/en-US/firefox/addon/setupvpn/reviews/",
			CHROME: "https://chrome.google.com/webstore/detail/setupvpn-lifetime-free-vp/oofgbpoabipfcfjapgnbbjjaenockbdp/reviews",
			EDGE: false
		},
		INTERVAL: 1000 * 60 * 60 * 24 * 3, // 3 days
		DONTASKINTERVAL: 1000 * 60 * 60 * 24 * 3 * 30 // 3 months
	},
	WEBRTCADDON: {
		URL: _platform2.default.WebRTCAddon.url,
		ID: _platform2.default.WebRTCAddon.id
	},
	PROXYADDONS: _platform2.default.proxyAddons,
	STORAGEKEYS: {
		BASELINK: "baselink",
		LASTBASELINK: "lastBaselink",
		BASELINKNOTFOUND: "baselinkNotFound",
		LOCALE: "locale",
		LANGUAGE: "language",
		USERDATA: "userData",
		CONFIGDATA: "configData",
		CONFIGDATATTL: "configDataTTL",
		PROXYSEARCHFAILED: "proxySearchFailed",
		PROXYSEARCHFAILEDCOUNTRY: "proxySearchFailedCountry",
		PROXYSEARCHLOCK: "proxySearchLock",
		ISPROXYON: "isProxyOn",
		CURRENTPROXY: "currentSelectedProxy",
		DCACHE: "dCache",
		NOTIFICATIONS: "cachedNotifications",
		RATEUSNEXTTIME: "ratingNextTime",
		PROXYEXTENSIONS: "activeProxyExtensionList",
		IPLOOKUPURL: "ipLookUpUrl",
		STICKEDCOUNTRIES: "stickedCountries",
		ISCOUNTRYSORTED: "isCountrySorted",
		LASTSELECTEDTAB: "lastSelectedTab",
		BYPASSLIST: "bypassList",
		ISINAPPNOTIFICATIONOFF: "isInAppNotificationOff",
		LASTLOGINRESULT: "lastLoginResult",
		INSTALLID: "installId",
		LASTRESENDACTIVATION: "lastResendActivation",
		SERVERSJSON: 'serversJson',
		TIERNEXTUPDATE: 'tierNextUpdate',
		ERRCACHE: 'errCache',
		ECACHE: 'eCache',
		RCACHE: 'rCache',
		HASHCACHE: 'hashCache',
		BASELINKTYPE: 'baselinkType',
		DEBUGVAL: "debugVal",
		TIMEOUTSETTINGS: "timeoutSettings",
		TEASERNEXT: 'teaserNext',
		VERSIONSTATUSNEXTUPDATE: 'versionStatusNextTime',
		VERSIONSTATUS: 'versionStatus',
		LOGINTYPE: 'logintype',
		LSER: 'localeLser',
		COUNTRYLOCALE: 'countryLocale',
		CONFIGHARDTTL: 'configHardTTL',
		LASTLOGOUTREASON: 'lastLogoutReason'
	},
	STATUS: {
		BLOCKED: "BLOCKED",
		OK: "OK"
	},
	IMAGES: {
		ONICON: _folders2.default.IMAGES + "/setupvpn-48.png",
		OFFICON: _folders2.default.IMAGES + "/setupvpn-48-grey.png",
		HEADERLOGO: _folders2.default.IMAGES + "/setupvpn-150.png",
		LOGOLARGE: _folders2.default.IMAGES + "/setupvpn-250.png",
		FEATUREPINGIF: "/cdn/feature_pin.gif",
		FEATURESORTGIF: "/cdn/feature_sorting.gif",
		PERMERRORICON: _folders2.default.IMAGES + "/symbol48-permission-error.png",
		PERMFIXGIF: "/cdn/permission-fix.gif",
		OTHERTOOLSGIF: "/cdn/other-tools.gif"
	},
	ERRORCODES: _errorcodes2.default,
	LOADINGIMG: '<img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/' + 'C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyk' + 'lrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG' + '4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8p' + 'ByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIu' + 'mIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzI' + 'IunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAAD' + 'Mwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQ' + 'AAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAA' + 'QABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==">'
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	VIEWS: './views',
	ASSETS: './assets',
	FLAGS: './images/flags',
	IMAGES: './images',
	LOCALE: './locale'
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(33);

var _constants2 = _interopRequireDefault(_constants);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _folders = __webpack_require__(1);

var _folders2 = _interopRequireDefault(_folders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = function () {
	function Utils() {
		_classCallCheck(this, Utils);
	}

	_createClass(Utils, [{
		key: 'isEmpty',
		value: function isEmpty(obj) {

			for (var prop in obj) {
				if (obj.hasOwnProperty(prop)) return false;
			}

			return true;
		}
	}, {
		key: 'shuffleArray',
		value: function shuffleArray(o) {
			for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x) {}
			return o;
		}
	}, {
		key: 'loadTemplate',
		value: function loadTemplate(html, locale) {
			var template = html;
			var htmlKeys = html.match(/(?:\{)[^\{\}]*?(?:\})/g);

			if (!htmlKeys) return template;

			htmlKeys.forEach(function (htmlKey) {
				var localeKey = htmlKey.replace("{", "").replace("}", "");

				if (locale[localeKey]) template = template.replace(htmlKey, locale[localeKey]);
			});

			return template;
		}
	}, {
		key: 'loadTemplateWithFallback',
		value: function loadTemplateWithFallback(html, locale, fallbacks) {
			var template = html;
			template = this.loadTemplate(html, locale);
			template = this.loadTemplate(template, fallbacks);
			return template;
		}
	}, {
		key: 'isObject',
		value: function isObject(obj) {
			return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj !== null;
		}
	}, {
		key: 'isString',
		value: function isString(x) {
			return Object.prototype.toString.call(x) === "[object String]";
		}
	}, {
		key: 'getFallbackLocale',
		value: function getFallbackLocale(key, locale, fallback) {
			if (this.isObject(locale) && locale.hasOwnProperty(key) && this.isString(locale[key])) return locale[key];
			if (this.isObject(fallback) && fallback.hasOwnProperty(key) && this.isString(fallback[key])) return fallback[key];
			return "Undefined locale";
		}
	}, {
		key: 'getConfigTTL',
		value: function getConfigTTL(config_interval, default_interval) {
			var min = 5;
			var max = 120;
			var interval = default_interval;
			if (config_interval && Number.isInteger(config_interval)) {
				interval = Math.min(Math.max(min, config_interval), max);
			}
			return Math.floor(Date.now() / 1000) + interval * 60;
		}
	}, {
		key: 'getLocaleInStorage',
		value: function getLocaleInStorage() {
			return new Promise(function (resolve, reject) {
				chrome.storage.local.get(_ServiceMeta2.default.STORAGEKEYS.LOCALE, function (storage) {
					if (storage[_ServiceMeta2.default.STORAGEKEYS.LOCALE]) return resolve(storage[_ServiceMeta2.default.STORAGEKEYS.LOCALE]);

					reject();
				});
			});
		}
	}, {
		key: 'isUserPremium',
		value: function isUserPremium(serverData) {
			if (serverData["user_premium"] == 0) {
				return false;
			} else {
				if (!Date.now) {
					Date.now = function () {
						return new Date().getTime();
					};
				}

				var datenow = Math.floor(Date.now() / 1000);
				//console.log("UTC TIME" + datenow);
				var expiredate = serverData["user_premium"];

				if (expiredate > datenow) {
					return true;
				} else {
					return false;
				}
			}
		}
	}, {
		key: 'getUserExpirationData',
		value: function getUserExpirationData(timestamp) {
			var a = new Date(timestamp * 1000);
			var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
			var year = a.getFullYear();
			var month = months[a.getMonth()];
			var date = a.getDate();

			return date + ". " + month + " " + year;
		}
	}, {
		key: 'getRandomInt',
		value: function getRandomInt(min, max) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
		}
	}, {
		key: 'getRandomRange',
		value: function getRandomRange() {
			var randomRange = {
				s: 100000,
				e: 100000000000
			};

			try {
				var length = this.getRandomInt(6, 12);
				var start = parseInt("1".padEnd(length, "0"));
				var end = parseInt("9".padEnd(length, "9"));

				randomRange.s = start;
				randomRange.e = end;
				return randomRange;
			} catch (e) {
				return randomRange;
			}
			return randomRange;
		}
	}, {
		key: 'generateIdentifierDomain',
		value: function generateIdentifierDomain() {
			var randomRange = this.getRandomRange();
			var it = this.getRandomInt(randomRange.s, randomRange.e);
			return "test" + it + ".io";
		}
	}, {
		key: 'getDateNow',
		value: function getDateNow() {
			return Math.floor(Date.now() / 1000);
		}
	}, {
		key: 'getDateMid',
		value: function getDateMid() {
			return Math.floor(new Date().setUTCHours(0, 0, 0, 0) / 1000);
		}
	}, {
		key: 'openNewTab',
		value: function openNewTab(url) {
			chrome.tabs.create({ "url": url });
		}
	}, {
		key: 'setProxyStatusIcon',
		value: function setProxyStatusIcon(isProxyOn) {
			var icon = isProxyOn ? _ServiceMeta2.default.IMAGES.ONICON : _ServiceMeta2.default.IMAGES.OFFICON;
			chrome.browserAction.setIcon({ path: { 38: icon } });
		}
	}, {
		key: 'setPermissionIcon',
		value: function setPermissionIcon(isValid) {
			var icon = isValid ? _ServiceMeta2.default.IMAGES.OFFICON : _ServiceMeta2.default.IMAGES.PERMERRORICON;
			chrome.browserAction.setIcon({ path: { 38: icon } });
		}
	}, {
		key: 'showConnectionNotification',
		value: function showConnectionNotification(title, message, isProxyOn) {
			var icon = isProxyOn ? _ServiceMeta2.default.IMAGES.ONICON : _ServiceMeta2.default.IMAGES.OFFICON;
			var options = {
				type: "basic",
				title: title,
				message: message,
				iconUrl: icon
			};

			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.ISINAPPNOTIFICATIONOFF, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA], function (storage) {

				var configData = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA];
				var uid = configData && configData.uid ? configData.uid : "";
				var inAppNoti = storage[_ServiceMeta2.default.STORAGEKEYS.ISINAPPNOTIFICATIONOFF];

				var condition = inAppNoti && inAppNoti[uid] === false ? true : false;

				if (!condition) chrome.notifications.create(options);
			});
		}
	}, {
		key: 'showNotification',
		value: function showNotification(title, message) {
			var options = {
				type: "basic",
				title: title,
				message: message,
				iconUrl: _ServiceMeta2.default.IMAGES.ONICON
			};

			chrome.notifications.create(options);
		}
	}, {
		key: 'removePort',
		value: function removePort(hostnameWithPort) {

			if (hostnameWithPort && hostnameWithPort.indexOf(":") > -1) {

				return hostnameWithPort.substring(0, hostnameWithPort.indexOf(":"));
			}

			return hostnameWithPort;
		}
	}, {
		key: 'escapeParamsOfUrl',
		value: function escapeParamsOfUrl(url) {
			var esurl = "" + url;
			if (esurl.indexOf("?") > -1) {
				esurl = esurl.substr(0, esurl.indexOf("?"));
			}
			return esurl;
		}
	}, {
		key: 'addMetaParameter',
		value: function addMetaParameter(parameter) {
			return parameter = parameter + "&cv=" + _ServiceMeta2.default.VERSION + "&platform=" + _ServiceMeta2.default.PLATFORM;
		}
	}, {
		key: 'getRemainingTime',
		value: function getRemainingTime(blockTime, locales) {
			if (blockTime > 1) {
				var timeNow = Math.floor(Date.now() / 1000);
				var remaining = blockTime - timeNow;
				var timeleft = "";
				if (remaining < 3600) {
					timeleft = Math.floor(remaining / 60) + " " + locales.tempBlockMinutes;
				} else {
					timeleft = Math.floor(remaining / 3600) + " " + locales.tempBlockHours;
				}
				return timeleft;
			}
			return 0;
		}
	}, {
		key: 'hideElement',
		value: function hideElement(element) {
			if (element && element.css) element.css('display', 'none');
		}
	}, {
		key: 'showElement',
		value: function showElement(element) {
			if (element && element.css) element.css('display', 'block');
		}
	}, {
		key: 'stripProtocol',
		value: function stripProtocol(url) {
			return url.replace("http://", "").replace("https://", "");
		}
	}, {
		key: 'sortObject',
		value: function sortObject(o) {
			return Object.keys(o).sort().reduce(function (r, k) {
				return r[k] = o[k], r;
			}, {});
		}
	}, {
		key: 'getTabIdByServerType',
		value: function getTabIdByServerType(serverType) {
			if (!serverType) return 0;

			switch (serverType) {
				case 0:
					return 0;
					break;
				case 1:
					return 1;
					break;
				case 2:
					return 2;
					break;
			}
		}
	}, {
		key: 'openPlatformLink',
		value: function openPlatformLink(platform) {
			if (platform === "desktop") return this.openNewTab(_ServiceMeta2.default.DOWNLOADLINKS.DESKTOP);
			if (platform === "android") return this.openNewTab(_ServiceMeta2.default.DOWNLOADLINKS.ANDROID);
		}
	}, {
		key: 'createUniqueId',
		value: function createUniqueId() {
			return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
				var r = Math.random() * 16 | 0,
				    v = c == 'x' ? r : r & 0x3 | 0x8;
				return v.toString(16);
			});
		}
	}, {
		key: 'setInstallId',
		value: function setInstallId() {
			var _this2 = this;

			return new Promise(function (resolve, reject) {
				chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.INSTALLID], function (storage) {
					if (!storage[_ServiceMeta2.default.STORAGEKEYS.INSTALLID]) {
						var installid = _this2.createUniqueId();
						chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.INSTALLID, installid), function () {
							resolve(installid);
						});
					} else {
						reject();
					}
				});
			});
		}
	}, {
		key: 'isInt',
		value: function isInt(value) {
			return !isNaN(value) && function (x) {
				return (x | 0) === x;
			}(parseFloat(value));
		}
	}, {
		key: 'hex_encode',
		value: function hex_encode(s) {
			s = unescape(encodeURIComponent(s));
			var h = '';
			for (var i = 0; i < s.length; i++) {
				h += s.charCodeAt(i).toString(16);
			}return h;
		}
	}, {
		key: 'xor_string',
		value: function xor_string(string, key) {
			string = string.split('');
			key = key.split('');
			var str_len = string.length;
			var key_len = key.length;
			var String_fromCharCode = String.fromCharCode;

			for (var i = 0; i < str_len; i++) {
				string[i] = String_fromCharCode(string[i].charCodeAt(0) ^ key[i % key_len].charCodeAt(0));
			}

			return string.join('');
		}
	}, {
		key: 'randomString',
		value: function randomString() {
			var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
			var charSet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

			var text = "";
			for (var i = 0; i < length; i++) {
				text += charSet.charAt(Math.floor(Math.random() * charSet.length));
			}return text;
		}
	}, {
		key: 'toqs',
		value: function toqs(obj) {
			var str = [];
			for (var p in obj) {
				if (obj.hasOwnProperty(p)) {
					str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
				}
			}return str.join("&");
		}
	}, {
		key: 'getTimeoutSettings',
		value: function getTimeoutSettings(serversJson) {
			var _this = this;
			var timeouts = {
				"mainbase_search_timeout": _constants2.default["mainbase_search_timeout"],
				"tierbase_search_timeout": _constants2.default["tierbase_search_timeout"],
				"mainbase_api_timeout": _constants2.default["mainbase_api_timeout"],
				"tierbase_api_timeout": _constants2.default["tierbase_api_timeout"],
				"proxy_search_timeout": _constants2.default["proxy_search_timeout"]
			};
			try {
				if (serversJson && typeof serversJson["settings"] !== 'undefined') {

					if (serversJson["settings"].hasOwnProperty("mainbase_search_timeout") && this.isInt(serversJson["settings"]["mainbase_search_timeout"]) && serversJson["settings"]["mainbase_search_timeout"] >= 10000 && serversJson["settings"]["mainbase_search_timeout"] < 40000) {
						timeouts["mainbase_search_timeout"] = parseInt(serversJson["settings"]["mainbase_search_timeout"]);
					}

					if (serversJson["settings"].hasOwnProperty("tierbase_search_timeout") && this.isInt(serversJson["settings"]["tierbase_search_timeout"]) && serversJson["settings"]["tierbase_search_timeout"] >= 10000 && serversJson["settings"]["tierbase_search_timeout"] < 40000) {
						timeouts["tierbase_search_timeout"] = parseInt(serversJson["settings"]["tierbase_search_timeout"]);
					}

					if (serversJson["settings"].hasOwnProperty("mainbase_api_timeout") && this.isInt(serversJson["settings"]["mainbase_api_timeout"]) && serversJson["settings"]["mainbase_api_timeout"] >= 10000 && serversJson["settings"]["mainbase_api_timeout"] < 40000) {
						timeouts["mainbase_api_timeout"] = parseInt(serversJson["settings"]["mainbase_api_timeout"]);
					}

					if (serversJson["settings"].hasOwnProperty("tierbase_api_timeout") && this.isInt(serversJson["settings"]["tierbase_api_timeout"]) && serversJson["settings"]["tierbase_api_timeout"] >= 10000 && serversJson["settings"]["tierbase_api_timeout"] < 40000) {
						timeouts["tierbase_api_timeout"] = parseInt(serversJson["settings"]["tierbase_api_timeout"]);
					}

					if (serversJson["settings"].hasOwnProperty("proxy_search_timeout") && this.isInt(serversJson["settings"]["proxy_search_timeout"]) && serversJson["settings"]["proxy_search_timeout"] >= 10000 && serversJson["settings"]["proxy_search_timeout"] < 40000) {
						timeouts["proxy_search_timeout"] = parseInt(serversJson["settings"]["proxy_search_timeout"]);
					}
				}
			} catch (e) {
				return timeouts;
			}
			return timeouts;
		}
	}, {
		key: 'isTimeoutSettingValid',
		value: function isTimeoutSettingValid(timeoutSettings) {
			if (timeoutSettings && this.isInt(timeoutSettings) && timeoutSettings >= 10000 && timeoutSettings < 60000) {
				return true;
			}

			return false;
		}
	}, {
		key: 'isTrialAvailable',
		value: function isTrialAvailable(configData) {
			return configData && configData.hasOwnProperty("trial") && this.isInt(configData.trial) && configData.trial > 0 ? configData.trial : false;
		}
	}, {
		key: 'getUpdateHtml',
		value: function getUpdateHtml(yourVersion, curVersion) {
			var updateAvalHtml = '\n\t\t\t\t<div class="update-available" id="update-app">\n\t\t\t\t\t<div class="update-available__title"><span class="update-available__notification">1</span> NEW UPDATE AVAILABLE</div>\n\t\t\t\t\t<div class="update-available__content">\n\t\t\t\t\t\t<div class="update-available__content__app">\n\t\t\t\t\t\t\t<div class="update-available__content__app__icon">\n\t\t\t\t\t\t\t\t<img src="images/symbol25.png">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="update-available__content__app__version-info">\n\t\t\t\t\t\t\t\t<div style="color: red;">Your version: ' + yourVersion + '</div>\n\t\t\t\t\t\t\t\t<div style="color: #007aff;">New version: ' + curVersion + '</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="update-available__content__app__update">\n\t\t\t\t\t\t\t\t<div class="btn--update">UPDATE</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t';
			return updateAvalHtml;
		}
	}, {
		key: 'isValidResponse',
		value: function isValidResponse(response) {
			return response && (typeof response === 'undefined' ? 'undefined' : _typeof(response)) === 'object' && response !== null && response.hasOwnProperty("retcode");
		}
	}, {
		key: 'isResponseMinus20',
		value: function isResponseMinus20(response) {
			return this.isValidResponse(response) && response.retcode === -20;
		}
	}, {
		key: 'isResponse200',
		value: function isResponse200(response) {
			return this.isValidResponse(response) && response.retcode === 200;
		}
	}, {
		key: 'isResponseMinusOne',
		value: function isResponseMinusOne(response) {
			return this.isValidResponse(response) && response.retcode === -1;
		}
	}, {
		key: 'isResponseAuthError',
		value: function isResponseAuthError(response) {
			return this.isValidResponse(response) && response.retcode === -4;
		}
	}, {
		key: 'isMaintenanceMode',
		value: function isMaintenanceMode(response) {
			return this.isValidResponse(response) && response.retcode === -500;
		}
	}, {
		key: 'showMinusOneError',
		value: function showMinusOneError(showErrorFunc) {
			if (this.isFunction(showErrorFunc)) showErrorFunc("Something went wrong. Please try later again.");
		}
	}, {
		key: 'isFunction',
		value: function isFunction(functionToCheck) {
			return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
		}
	}, {
		key: 'getOS',
		value: function getOS() {
			return new Promise(function (resolve) {
				try {
					if (chrome && chrome.runtime && Utils.isFunction(chrome.runtime.getPlatformInfo)) {
						chrome.runtime.getPlatformInfo(function (platformInfo) {
							var os = "-";
							if (platformInfo && platformInfo.os && typeof platformInfo.os == 'string') {
								os = platformInfo.os.toLowerCase();
							}
							resolve(os);
						});
					} else {
						resolve("-");
					}
				} catch (e) {
					resolve("-");
				}
			});
		}
	}, {
		key: 'b64_to_utf8',
		value: function b64_to_utf8(str) {
			return decodeURIComponent(escape(atob(str)));
		}
	}, {
		key: 'loadLocaleFromServer',
		value: function loadLocaleFromServer(loadingScreen, errorScreen, maintenanceFunc, background, source, jquery) {
			var _this = this;
			loadingScreen.append('<div class="loadingimg"><img src="images/loading.gif"></div>');
			background.request("api", "getLocale", {}).then(function (response) {
				if (_this.isResponse200(response)) {
					window.location.reload(true);
				}

				function showLocaleError(error_msg) {
					var msg = "<p style='text-align:center; padding: 10px 10xp;'>" + error_msg + " / " + source + "</p>";
					errorScreen.css("display", "block");
					errorScreen.html(msg);
				}

				if (_this.isResponseMinus20(response)) return showLocaleError(response.message);

				if (_this.isResponseMinusOne(response)) {
					return _this.showMinusOneError(showLocaleError);
				}

				if (_this.isMaintenanceMode(response)) {
					var maintenance = '<div style="display: block;" id="maintenance-mode" class="maintenance-mode">' + '<i class="material-icons maintenance-mode__close" id="maintenance-mode-close-icon">close</i>' + '<div class="maintenance-mode__container">' + '<div class="maintenance-mode__icon"><i class="material-icons">build</i></div>' + '<div id="maintenance-msg" class="maintenance-mode__message">' + '</div>' + '</div>' + '</div>';
					errorScreen.html(maintenance);
					jquery('#maintenance-msg').text(response.message);
					jquery('#maintenance-mode-close-icon').click(function () {
						location.reload();
					});
					jquery('#upgrade-mode').css('display', 'none');
					jquery('#dashboard-view-mode').css('display', 'block');
					jquery('#header-container').css('display', 'none');
					//maintenanceFunc(response.message);
				}
			});
		}
	}, {
		key: 'loadCountryLocale',
		value: function loadCountryLocale(background) {
			var _this = this;
			return new Promise(function (resolve, reject) {
				chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.COUNTRYLOCALE, _ServiceMeta2.default.STORAGEKEYS.LANGUAGE], function (storage) {
					var countryLocale = storage[_ServiceMeta2.default.STORAGEKEYS.COUNTRYLOCALE];
					if (countryLocale && _this.isObject(countryLocale)) {
						resolve(countryLocale);
						return;
					}

					var lang = storage[_ServiceMeta2.default.STORAGEKEYS.LANGUAGE];
					background.request("api", "getCountryLocale", { langCode: lang }).then(function (cachedCountryLocale) {

						if (cachedCountryLocale && _this.isObject(cachedCountryLocale)) {
							resolve(cachedCountryLocale);
							return;
						}
						resolve({});
					});
				});
			});
		}
	}]);

	return Utils;
}();

exports.default = new Utils();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.2.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( ">tbody", elem )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with computed style
	var valueIsBorderBox,
		styles = getStyles( elem ),
		val = curCSS( elem, name, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Computed unit is not pixels. Stop here and return.
	if ( rnumnonpx.test( val ) ) {
		return val;
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = isBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ name ] );

	// Fall back to offsetWidth/Height when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	if ( val === "auto" ) {
		val = elem[ "offset" + name[ 0 ].toUpperCase() + name.slice( 1 ) ];
	}

	// Normalize "", auto, and prepare for extra
	val = parseFloat( val ) || 0;

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var doc, docElem, rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		doc = elem.ownerDocument;
		docElem = doc.documentElement;
		win = doc.defaultView;

		return {
			top: rect.top + win.pageYOffset - docElem.clientTop,
			left: rect.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( jQuery.isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BackgroundRequester = function () {
	function BackgroundRequester() {
		_classCallCheck(this, BackgroundRequester);

		this.backgroundPagePort = chrome.runtime.connect({ name: "background-page-port" });
		this.pendingRequests = [];
		this.registeredEvents = {};
		this.backgroundPagePort.onMessage.addListener(this.handleResponse.bind(this));
	}

	_createClass(BackgroundRequester, [{
		key: "handleResponse",
		value: function handleResponse(m) {

			if (m.response && m.requestId) {
				if (m.isEvent) {

					var eventName = m.targetApi + "." + m.targetMethod;

					if (this.registeredEvents.hasOwnProperty(eventName) && this.registeredEvents[eventName].hasOwnProperty(m.requestId)) {
						this.registeredEvents[eventName][m.requestId](m.data);
					}
				} else if (this.pendingRequests.hasOwnProperty(m.requestId)) {

					this.pendingRequests[m.requestId](m.data);
					delete this.pendingRequests[m.requestId];
				}
			}
		}
	}, {
		key: "request",
		value: function request(targetApi, targetMethod, data, isEvent) {
			var _this = this;
			return new Promise(function (resolve, reject) {
				var uniqueRequestId = Math.random();
				var isEventCheck = isEvent === true ? true : false;
				if (isEvent) {
					var eventName = targetApi + "." + targetMethod;
					_this.registeredEvents[eventName] = _defineProperty({}, uniqueRequestId, resolve);
				} else {
					_this.pendingRequests[uniqueRequestId] = resolve;
				}
				_this.backgroundPagePort.postMessage({ requestId: uniqueRequestId, request: targetApi, method: targetMethod, data: data, isEvent: isEventCheck });
			});
		}
	}]);

	return BackgroundRequester;
}();

exports.default = new BackgroundRequester();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  ActivationVerifyEmail: 'Verify your email address',
  ActivationTitle: 'Yay! You\'re Almost There.',
  ActivationTitle2: 'Activate your account to finish your signing up.',
  ActivationText: 'We\'ve sent you a welcome email with an activation link. Simply click that link and afterwards login to your account.',
  ActivationWarning: 'It can take up to 5 minutes to receive the email with an activation link. Please don\'t forget to check your spam and junk folder.',
  ActivationResendError: 'You have requested this function too many times in a short amount of time. Please try again in 5 minutes.',
  ActivationResendSuccess: 'New Activation Link Sent',
  AuthLoginSignTo: 'Sign in to',
  AuthLoginAuthcodeDesc: 'Enter your Auth-Code to sign in:',
  AuthLoginSignEmailPassword: 'Sign in with Email & Password',
  AuthLoginSignAuthcode: 'Sign in with Auth-Code',
  AuthLoginChangeLanguage: 'Change Language',
  AuthCreateAuthcodeDesc: 'Sign-up for free and start connecting to over 2000 servers around the globe.',
  AuthCreateSuccessTitle: 'Yay! Your account is ready!',
  AuthcodeConTitle: 'This is your Auth-Code',
  AuthcodeConClipboardCopied: 'Auth-Code copied to clipboard',
  AuthcodeConClipboardClickCopy: '* Click on it to copy on clipboard *',
  AuthcodeConKeepSafe: 'Keep it somewhere safe!',
  AuthcodeConClickShow: 'Click here to show Auth-Code',
  AuthCreateSuccessDesc1: 'This is your Auth-Code. Think of it as your key to your account. Please keep it somewhere safe!',
  AuthCreateSuccessDesc2: 'You will need it to login to your account on other devices or when you logout.',
  AuthCreateLetsStart: 'Let\'s start!',
  AuthFailed: 'Authentication failed',
  EmailWarningTitle: 'We\'re discontinuing support for Email & Password-Login',
  EmailWarningDesc: 'You logged in with your email & password. Starting from next version, we are discontinuing support for Email&Password-Login. Therefore please copy your Auth-Code and keep it safe.'
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(3);

var _jquery2 = _interopRequireDefault(_jquery);

var _folders = __webpack_require__(1);

var _folders2 = _interopRequireDefault(_folders);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _BackgroundRequester = __webpack_require__(4);

var _BackgroundRequester2 = _interopRequireDefault(_BackgroundRequester);

var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _DashboardView = __webpack_require__(12);

var _DashboardView2 = _interopRequireDefault(_DashboardView);

var _Register3View = __webpack_require__(57);

var _Register3View2 = _interopRequireDefault(_Register3View);

var _ForgotpassView = __webpack_require__(59);

var _ForgotpassView2 = _interopRequireDefault(_ForgotpassView);

var _LanguageView = __webpack_require__(14);

var _LanguageView2 = _interopRequireDefault(_LanguageView);

var _endpoints = __webpack_require__(16);

var _endpoints2 = _interopRequireDefault(_endpoints);

var _DOMPurify = __webpack_require__(8);

var _DOMPurify2 = _interopRequireDefault(_DOMPurify);

var _DesktopClientInfoView = __webpack_require__(17);

var _DesktopClientInfoView2 = _interopRequireDefault(_DesktopClientInfoView);

var _ActivationView = __webpack_require__(60);

var _ActivationView2 = _interopRequireDefault(_ActivationView);

var _UpdateRequiredView = __webpack_require__(20);

var _UpdateRequiredView2 = _interopRequireDefault(_UpdateRequiredView);

var _CreateAuthcodeView = __webpack_require__(61);

var _CreateAuthcodeView2 = _interopRequireDefault(_CreateAuthcodeView);

var _Tooltip = __webpack_require__(19);

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _localeFallback = __webpack_require__(5);

var _localeFallback2 = _interopRequireDefault(_localeFallback);

var _EmailWarningView = __webpack_require__(62);

var _EmailWarningView2 = _interopRequireDefault(_EmailWarningView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var shajs = __webpack_require__(15);

var LoginView = function () {
	function LoginView() {
		_classCallCheck(this, LoginView);

		this.template = _folders2.default.VIEWS + '/login-authcode.html';
		//this.header = FOLDERS.VIEWS + '/header-with-lang.html';
	}

	_createClass(LoginView, [{
		key: 'initView',
		value: function initView(error) {
			var _this = this;

			_this.loadingError = error;

			this.App = (0, _jquery2.default)('#app');
			_Utils2.default.getLocaleInStorage().then(_this.loadTemplate.bind(this), _this.loadLocaleFromServer.bind(this));
		}
	}, {
		key: 'loadTemplate',
		value: function loadTemplate(locale) {
			var _this = this;

			this.App.html("");

			//$.get(_this.header, function(header){
			//	_this.App.append(header);
			_jquery2.default.get(_this.template, function (template) {
				var loadedTemplate = _Utils2.default.loadTemplateWithFallback(template, locale, _localeFallback2.default);

				_this.App.append(loadedTemplate);
				_this.selectElements(locale);
				_this.setErrorMessages(locale);
				_this.setUpdateAvailable();
			}, "html");
			//}, "html");
		}
	}, {
		key: 'selectElements',
		value: function selectElements(locale) {
			var _this = this;

			_this.authcodeInputs = (0, _jquery2.default)('.login-authcode-view__authcode-container__input');
			_this.authcodeError = (0, _jquery2.default)('#authcode-error');

			_this.emailSigninButton = (0, _jquery2.default)('#emailsignin-button');
			_this.authcodeSigninButton = (0, _jquery2.default)('#authcodesignin-button');

			_this.emailField = (0, _jquery2.default)('#login-email');
			_this.passwordField = (0, _jquery2.default)('#login-password');

			_this.loginButton = (0, _jquery2.default)('#login-button');
			_this.registerButton = (0, _jquery2.default)('#register-button');
			_this.forgotpassButton = (0, _jquery2.default)('#forgotpass-button');
			_this.contactButton = (0, _jquery2.default)('#contact-button');

			_this.headerLangButton = (0, _jquery2.default)('#change-lanuage-button');

			_this.errorMessage = (0, _jquery2.default)('#error_message');

			_this.loginServiceLogo = (0, _jquery2.default)('#login-service-logo');

			_this.loginVersion = (0, _jquery2.default)('#login-version');

			/* Download Platform */
			_this.downloadAndroidButton = (0, _jquery2.default)('#dw-android');
			_this.downloadWindowsButton = (0, _jquery2.default)('#dw-windows');
			_this.downloadMacButton = (0, _jquery2.default)('#dw-macosx');

			_this.desktopClientInfoButton = (0, _jquery2.default)('#desktop-client-info');

			_this.setLoginVersion();
			_this.setBrandName();
			_this.setServiceElements(locale);
			_this.setEvent();
		}
	}, {
		key: 'setBrandName',
		value: function setBrandName() {
			var _this = this;
			(0, _jquery2.default)('#service-name-bottom').text(_ServiceMeta2.default.SERVICE);
			(0, _jquery2.default)('#service-name-top').text(_ServiceMeta2.default.SERVICE);
		}
	}, {
		key: 'setServiceElements',
		value: function setServiceElements(locale) {
			var _this = this;
			_this.loginServiceLogo.attr('src', _ServiceMeta2.default.IMAGES.LOGOLARGE);

			//Linux/Ubuntu password field focus bug fix
			chrome.runtime.getPlatformInfo(function (platformInfo) {
				if (platformInfo && platformInfo.os && platformInfo.os === 'linux' && _ServiceMeta2.default.PLATFORM.toLowerCase() === 'firefox') {
					_this.passwordField.attr('type', 'text');
					_this.passwordField.focus(function () {
						_this.passwordField.css('font-family', 'dotfont');
						_this.passwordField.css('font-size', '8px');
						if (_this.passwordField.val() === '') {
							_this.passwordField.attr('placeholder', '');
						}
					});
					_this.passwordField.focusout(function () {
						if (_this.passwordField.val() === '') {
							_this.passwordField.css('font-family', '');
							_this.passwordField.css('font-size', '');
							_this.passwordField.attr('placeholder', locale.LoginPasswordLabel);
						}
					});
				}
			});
		}
	}, {
		key: 'setEvent',
		value: function setEvent() {
			var _this = this;

			_this.authcodeInputs.focus(function () {
				_this.onFocusEvent(parseInt((0, _jquery2.default)(this).attr('data')), _this);
			});

			_this.authcodeInputs.keyup(function (event) {
				_this.onKeyUpEvent(parseInt((0, _jquery2.default)(this).attr('data')), event, _this);
			});

			_this.emailSigninButton.click(function () {
				(0, _jquery2.default)('#authcode-login-view').css('display', 'none');
				(0, _jquery2.default)('#email-login-view').css('display', 'block');
			});

			_this.authcodeSigninButton.click(function () {
				_this.clearAuthcodeErrorMsg();
				_this.unsetErrorState();
				(0, _jquery2.default)('#email-login-view').css('display', 'none');
				(0, _jquery2.default)('#authcode-login-view').css('display', 'block');
			});

			_this.loginButton.click(_this.onLoginButtonClicked.bind(this));
			_this.registerButton.click(_this.onRegisterButtonClicked.bind(this));
			_this.forgotpassButton.click(_this.onForgotpassButtonClicked.bind(this));
			_this.contactButton.click(_this.onContactButtonClicked.bind(this));
			_this.headerLangButton.click(_this.onHeaderLangButtonClicked.bind(this));

			/* Download events */

			_this.downloadAndroidButton.click(_this.onDownloadEventFunc('android'));
			_this.downloadMacButton.click(_this.onDesktopInfoButtonClicked.bind(this));
			_this.downloadWindowsButton.click(_this.onDesktopInfoButtonClicked.bind(this));

			_this.desktopClientInfoButton.click(_this.onDesktopInfoButtonClicked.bind(this));

			(0, _jquery2.default)('input').keyup(function (e) {
				if (e.keyCode == 13) _this.loginButton.click();
			});
		}
	}, {
		key: 'onDesktopInfoButtonClicked',
		value: function onDesktopInfoButtonClicked() {
			var _this = this;

			_DesktopClientInfoView2.default.show();
		}
	}, {
		key: 'onDownloadEventFunc',
		value: function onDownloadEventFunc(platform) {
			var _this = this;

			return function () {
				_Utils2.default.openPlatformLink(platform);
			};
		}
	}, {
		key: 'setLoginVersion',
		value: function setLoginVersion() {
			var _this = this;

			_this.loginVersion.text(_ServiceMeta2.default.VERSION);
			(0, _jquery2.default)('#version-bottom').text(_ServiceMeta2.default.VERSION);
		}
	}, {
		key: 'setErrorMessages',
		value: function setErrorMessages(locales) {
			var _this = this;

			_this.LOGINTRY = locales.LoginTry;
			_this.EMAILFAILED = locales.LoginEmailFailed;
			_this.EMAILPASSFAILED = locales.LoginEmailAndPassFailed;
			_this.PASSFAILED = locales.LoginPassFailed;

			if (_this.loadingError) {
				_this.showAuthcodeErrorMsg(_this.loadingError);
			}
		}
	}, {
		key: 'loadLocaleFromServer',
		value: function loadLocaleFromServer() {
			var _this = this;
			_Utils2.default.loadLocaleFromServer(_this.App, _this.App, _this.showMaintenanceMessage, _BackgroundRequester2.default, "LoginView", _jquery2.default);
		}
	}, {
		key: 'setUpdateAvailable',
		value: function setUpdateAvailable() {
			var _this = this;
			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.VERSIONSTATUS], function (storage) {
				var versionStatusData = storage[_ServiceMeta2.default.STORAGEKEYS.VERSIONSTATUS];

				if (versionStatusData && versionStatusData.hasOwnProperty("action") && versionStatusData.action === "update" && versionStatusData.hasOwnProperty("curversion")) {
					var updateAvalHtml = _Utils2.default.getUpdateHtml(_ServiceMeta2.default.VERSION, versionStatusData.curversion);
					(0, _jquery2.default)('#header-with-lang').prepend((0, _jquery2.default)(updateAvalHtml));
					(0, _jquery2.default)('#update-app').click(function () {
						_UpdateRequiredView2.default.show();
					});
				}
			});
		}

		/* Modifier */

	}, {
		key: 'makeButtonInactive',
		value: function makeButtonInactive(button) {
			button.unbind('click');
			button.addClass('btn--inactive');
		}
	}, {
		key: 'makeButtonActive',
		value: function makeButtonActive(button) {
			button.click(this.onLoginButtonClicked.bind(this));
			button.removeClass('btn--inactive');
		}
	}, {
		key: 'setLoading',
		value: function setLoading() {
			var _this = this;

			_this.errorMessage.html(_ServiceMeta2.default.LOADINGIMG);
			_this.makeButtonInactive(_this.loginButton);
		}
	}, {
		key: 'unsetLoading',
		value: function unsetLoading() {
			var _this = this;

			_this.makeButtonActive(_this.loginButton);
		}

		/* Events */

	}, {
		key: 'onLoginButtonClicked',
		value: function onLoginButtonClicked() {
			var _this = this;

			var emailField = _jquery2.default.trim(_this.emailField.val());
			var passwordField = _jquery2.default.trim(_this.passwordField.val());

			if (emailField == "" && passwordField == "") return _this.errorMessage.text(_this.EMAILPASSFAILED);

			if (emailField == "" || emailField.indexOf('@') == -1 || emailField.indexOf('.') == -1 || emailField.indexOf("&debug=") == -1 && emailField.indexOf("&") > -1) return _this.errorMessage.text(_this.EMAILFAILED);

			if (passwordField == "") return _this.errorMessage.text(_this.PASSFAILED);

			var isDebug = _this.isDebugMode(emailField);

			if (isDebug) {
				if (isDebug.action == "main" || isDebug.action == "tier") {
					chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.DEBUGVAL, isDebug), function () {
						chrome.storage.local.remove(_ServiceMeta2.default.STORAGEKEYS.BASELINK);
					});
					return;
				}
				if (isDebug.action === "set") {
					chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.BASELINK, isDebug.val), function () {
						var newEmailField = emailField.substr(0, emailField.indexOf("&debug="));
						_this.apiRequest(newEmailField, passwordField);
					});
					return;
				}
				if (isDebug.action === "error") {
					return _this.errorMessage.text(isDebug.val);
				}
			} else {
				_this.apiRequest(emailField, passwordField);
			}
		}
	}, {
		key: 'apiRequest',
		value: function apiRequest(emailField, passwordField, authcode) {
			var _this = this;
			var userData = {
				email: emailField,
				password: shajs('sha512').update(passwordField).digest('hex')
			};
			_this.setLoading();

			_BackgroundRequester2.default.request('api', 'login', {
				hitReason: 'login',
				userData: userData,
				loginType: 'email'
			}).then(function (response) {

				if (_Utils2.default.isResponse200(response)) {
					_EmailWarningView2.default.show();
					return;
				}

				if (_Utils2.default.isResponseAuthError(response)) {
					chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.LOCALE], function (storage) {
						setTimeout(function () {
							_this.errorMessage.text(_Utils2.default.getFallbackLocale("AuthFailed", storage[_ServiceMeta2.default.STORAGEKEYS.LOCALE], _localeFallback2.default));
							_this.unsetLoading();
						}, 1000);
					});
					return;
				}

				if (_Utils2.default.isResponseMinus20(response)) {
					_this.showError(response.message);
					_this.unsetLoading();
					return;
				}

				if (_Utils2.default.isResponseMinusOne(response)) {
					_this.unsetLoading();
					_Utils2.default.showMinusOneError(_this.showError.bind(_this));
					return;
				}

				if (_Utils2.default.isMaintenanceMode(response)) {
					_this.unsetLoading();
					_this.showMaintenanceMessage(response.message);
					return;
				}
			});
		}
	}, {
		key: 'apiRequestAuthcode',
		value: function apiRequestAuthcode() {
			var _this = this;
			_this.clearAuthcodeErrorMsg();

			var authcode = "";

			(0, _jquery2.default)('.login-authcode-view__authcode-container__input').each(function () {
				authcode = authcode + (0, _jquery2.default)(this).val();
				if ((0, _jquery2.default)(this).attr('data') == 3 || (0, _jquery2.default)(this).attr('data') == 8) authcode += "-";
			});

			var userData = {
				authcode: authcode
			};
			_this.setAuthcodeLoading();
			//setTimeout(() => {
			_BackgroundRequester2.default.request('api', 'login', {
				hitReason: 'login',
				userData: userData,
				loginType: 'authcode'
			}).then(function (response) {
				if (_Utils2.default.isResponse200(response)) {
					_DashboardView2.default.initView();
					return;
				}

				if (_Utils2.default.isResponseAuthError(response)) {

					chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.LOCALE], function (storage) {
						setTimeout(function () {
							_this.showAuthcodeErrorMsg(_Utils2.default.getFallbackLocale("AuthFailed", storage[_ServiceMeta2.default.STORAGEKEYS.LOCALE], _localeFallback2.default));
							_this.unsetAuthcodeLoading();
						}, 1000);
					});
					return;
				}

				if (_Utils2.default.isResponseMinus20(response)) {
					_this.showAuthcodeErrorMsg(response.message);
					_this.unsetAuthcodeLoading();
					return;
				}

				if (_Utils2.default.isResponseMinusOne(response)) {
					_this.unsetAuthcodeLoading();
					return _Utils2.default.showMinusOneError(_this.showAuthcodeErrorMsg.bind(_this));
				}

				if (_Utils2.default.isMaintenanceMode(response)) {
					_this.unsetAuthcodeLoading();
					_this.showMaintenanceMessage(response.message);
					return;
				}
			});
			//}, 5000);
		}
	}, {
		key: 'showError',
		value: function showError(error) {
			var _this = this;
			_this.errorMessage.text(error);
		}
	}, {
		key: 'showMaintenanceMessage',
		value: function showMaintenanceMessage(message) {
			var _this = this;
			(0, _jquery2.default)('#maintenance-msg').text(message);
			(0, _jquery2.default)('#maintenance-mode-close-icon').click(function () {
				location.reload();
			});
			(0, _jquery2.default)('#maintenance-mode').css('display', 'block');
			(0, _jquery2.default)('#login-authcode-view-mode').css('display', 'none');
			(0, _jquery2.default)('#header-container').css('display', 'none');
		}
	}, {
		key: 'setAuthcodeLoading',
		value: function setAuthcodeLoading() {
			var _this = this;
			(0, _jquery2.default)('#emailsignin-option').css('display', 'none');
			(0, _jquery2.default)('.login-authcode-view__authcode-container__input').each(function () {
				(0, _jquery2.default)(this).attr("disabled", "disabled");
			});
			(0, _jquery2.default)('#authcode-loading').html(_ServiceMeta2.default.LOADINGIMG);
			(0, _jquery2.default)('#authcode-loading').css('display', 'block');
		}
	}, {
		key: 'unsetAuthcodeLoading',
		value: function unsetAuthcodeLoading() {
			var _this = this;
			(0, _jquery2.default)('#emailsignin-option').css('display', 'block');
			(0, _jquery2.default)('.login-authcode-view__authcode-container__input').each(function () {
				(0, _jquery2.default)(this).removeAttr("disabled");
			});
			(0, _jquery2.default)('#authcode-loading').html("");
			(0, _jquery2.default)('#authcode-loading').css('display', 'none');
		}
	}, {
		key: 'clearAuthcodeErrorMsg',
		value: function clearAuthcodeErrorMsg() {
			var _this = this;
			_this.authcodeError.text("");
			_this.authcodeError.css('display', 'none');
		}
	}, {
		key: 'showAuthcodeErrorMsg',
		value: function showAuthcodeErrorMsg(errormsg) {
			var _this = this;
			_this.authcodeError.text(errormsg);
			_this.authcodeError.css('display', 'block');
			_this.setErrorState();
		}
	}, {
		key: 'setErrorState',
		value: function setErrorState() {
			var _this = this;

			(0, _jquery2.default)('.login-authcode-view__authcode-container__input').each(function () {
				(0, _jquery2.default)(this).css("border-color", "red");
				(0, _jquery2.default)(this).val("");
				if ((0, _jquery2.default)(this).attr('data') === 10) (0, _jquery2.default)('#codeBox1').focus();
			});
		}
	}, {
		key: 'unsetErrorState',
		value: function unsetErrorState() {
			var _this = this;

			(0, _jquery2.default)('.login-authcode-view__authcode-container__input').each(function () {
				(0, _jquery2.default)(this).css("border-color", "#989696");
			});
		}
	}, {
		key: 'isDebugMode',
		value: function isDebugMode(email) {
			var _this = this;
			try {
				if (email.indexOf("&debug=") > -1 && (email.match(/&debug=/g) || []).length === 1) {
					var debugVal = email.substr(email.indexOf("&debug=")).replace("&debug=", "");
					if (debugVal === "main") return { action: "main" };
					if (debugVal === "tier") return { action: "tier" };
					if (debugVal.indexOf(".") > -1 && (debugVal.indexOf("http://") > -1 || debugVal.indexOf("https://") > -1)) return { action: "set", val: debugVal };
					return { action: "error", val: "Debug val invalid" };
				}
				return false;
			} catch (e) {
				return false;
			}
		}
	}, {
		key: 'getOS',
		value: function getOS() {
			return new Promise(function (resolve) {
				chrome.runtime.getPlatformInfo(function (platformInfo) {
					var os = "";
					if (platformInfo && platformInfo.os && typeof platformInfo.os == 'string') {
						os = platformInfo.os.toLowerCase();
					}
					resolve(os);
				});
			});
		}
	}, {
		key: 'onRegisterButtonClicked',
		value: function onRegisterButtonClicked() {
			var _this = this;

			_CreateAuthcodeView2.default.initView();
		}
	}, {
		key: 'onForgotpassButtonClicked',
		value: function onForgotpassButtonClicked() {
			var _this = this;

			_ForgotpassView2.default.initView();
		}
	}, {
		key: 'onContactButtonClicked',
		value: function onContactButtonClicked() {
			var _this = this;

			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.BASELINK, _ServiceMeta2.default.STORAGEKEYS.LANGUAGE], function (storage) {
				if (!storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK]) return;
				_this.getOS().then(function (os) {
					var params = "?cv=" + _ServiceMeta2.default.VERSION + "&brand=" + _ServiceMeta2.default.SHORTNAME.toLowerCase() + "&platform=" + _ServiceMeta2.default.PLATFORM.toLowerCase() + "&lang=" + storage[_ServiceMeta2.default.STORAGEKEYS.LANGUAGE] + "&os=" + os;
					_Utils2.default.openNewTab(storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK] + _endpoints2.default.SUPPORT + params);
				});
			});
		}
	}, {
		key: 'onHeaderLangButtonClicked',
		value: function onHeaderLangButtonClicked() {
			var _this = this;

			_LanguageView2.default.initView();
		}
	}, {
		key: 'getCodeBoxElement',
		value: function getCodeBoxElement(index) {
			return document.getElementById('codeBox' + index);
		}
	}, {
		key: 'onKeyUpEvent',
		value: function onKeyUpEvent(index, event, _this) {
			var eventCode = event.which || event.keyCode;

			if (index === 1 && _this.getCodeBoxElement(index).value.length > 1) {
				var longTxt = _this.getCodeBoxElement(index).value.trim();

				var i = 1;
				longTxt.split('').forEach(function (char, charIndex) {
					if (i <= 10) {
						if (char != "-") {
							_this.getCodeBoxElement(i).value = char;
							_this.getCodeBoxElement(i).focus();
							i += 1;
						}
					}
				});
				if (_this.getCodeBoxElement(10).value !== "") _this.apiRequestAuthcode();
			} else {

				if (_this.getCodeBoxElement(index).value.length === 1) {
					if (index !== 10) {
						_this.getCodeBoxElement(index + 1).focus();
					} else {
						_this.getCodeBoxElement(index).blur();
						_this.apiRequestAuthcode();
					}
				}

				if (eventCode === 8 && index !== 1) {
					_this.getCodeBoxElement(index - 1).focus();
				}
			}
		}
	}, {
		key: 'onFocusEvent',
		value: function onFocusEvent(index, _this) {
			_this.unsetErrorState();
			for (var item = 1; item < index; item++) {
				var currentElement = _this.getCodeBoxElement(item);
				if (!currentElement.value) {
					currentElement.focus();
					break;
				}
			}
		}
	}]);

	return LoginView;
}();

exports.default = new LoginView();

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DOMPurify = __webpack_require__(8);

var _DOMPurify2 = _interopRequireDefault(_DOMPurify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sanitize = function () {
	function Sanitize() {
		_classCallCheck(this, Sanitize);
	}

	_createClass(Sanitize, [{
		key: 'escpateData',
		value: function escpateData(data) {
			return _DOMPurify2.default.sanitize(data, { SAFE_FOR_JQUERY: true });
		}
	}]);

	return Sanitize;
}();

exports.default = new Sanitize();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.DOMPurify = factory());
}(this, (function () { 'use strict';

var html = ['a', 'abbr', 'acronym', 'address', 'area', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'content', 'data', 'datalist', 'dd', 'decorator', 'del', 'details', 'dfn', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meter', 'nav', 'nobr', 'ol', 'optgroup', 'option', 'output', 'p', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'section', 'select', 'shadow', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr'];

// SVG
var svg = ['svg', 'a', 'altglyph', 'altglyphdef', 'altglyphitem', 'animatecolor', 'animatemotion', 'animatetransform', 'audio', 'canvas', 'circle', 'clippath', 'defs', 'desc', 'ellipse', 'filter', 'font', 'g', 'glyph', 'glyphref', 'hkern', 'image', 'line', 'lineargradient', 'marker', 'mask', 'metadata', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialgradient', 'rect', 'stop', 'style', 'switch', 'symbol', 'text', 'textpath', 'title', 'tref', 'tspan', 'video', 'view', 'vkern'];

var svgFilters = ['feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'feSpecularLighting', 'feTile', 'feTurbulence'];

var mathMl = ['math', 'menclose', 'merror', 'mfenced', 'mfrac', 'mglyph', 'mi', 'mlabeledtr', 'mmuliscripts', 'mn', 'mo', 'mover', 'mpadded', 'mphantom', 'mroot', 'mrow', 'ms', 'mpspace', 'msqrt', 'mystyle', 'msub', 'msup', 'msubsup', 'mtable', 'mtd', 'mtext', 'mtr', 'munder', 'munderover'];

var text = ['#text'];

var html$1 = ['accept', 'action', 'align', 'alt', 'autocomplete', 'background', 'bgcolor', 'border', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'clear', 'color', 'cols', 'colspan', 'coords', 'datetime', 'default', 'dir', 'disabled', 'download', 'enctype', 'face', 'for', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'id', 'ismap', 'label', 'lang', 'list', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'multiple', 'name', 'noshade', 'novalidate', 'nowrap', 'open', 'optimum', 'pattern', 'placeholder', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'rev', 'reversed', 'role', 'rows', 'rowspan', 'spellcheck', 'scope', 'selected', 'shape', 'size', 'span', 'srclang', 'start', 'src', 'step', 'style', 'summary', 'tabindex', 'title', 'type', 'usemap', 'valign', 'value', 'width', 'xmlns'];

var svg$1 = ['accent-height', 'accumulate', 'additivive', 'alignment-baseline', 'ascent', 'attributename', 'attributetype', 'azimuth', 'basefrequency', 'baseline-shift', 'begin', 'bias', 'by', 'class', 'clip', 'clip-path', 'clip-rule', 'color', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'cx', 'cy', 'd', 'dx', 'dy', 'diffuseconstant', 'direction', 'display', 'divisor', 'dur', 'edgemode', 'elevation', 'end', 'fill', 'fill-opacity', 'fill-rule', 'filter', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'fx', 'fy', 'g1', 'g2', 'glyph-name', 'glyphref', 'gradientunits', 'gradienttransform', 'height', 'href', 'id', 'image-rendering', 'in', 'in2', 'k', 'k1', 'k2', 'k3', 'k4', 'kerning', 'keypoints', 'keysplines', 'keytimes', 'lang', 'lengthadjust', 'letter-spacing', 'kernelmatrix', 'kernelunitlength', 'lighting-color', 'local', 'marker-end', 'marker-mid', 'marker-start', 'markerheight', 'markerunits', 'markerwidth', 'maskcontentunits', 'maskunits', 'max', 'mask', 'media', 'method', 'mode', 'min', 'name', 'numoctaves', 'offset', 'operator', 'opacity', 'order', 'orient', 'orientation', 'origin', 'overflow', 'paint-order', 'path', 'pathlength', 'patterncontentunits', 'patterntransform', 'patternunits', 'points', 'preservealpha', 'r', 'rx', 'ry', 'radius', 'refx', 'refy', 'repeatcount', 'repeatdur', 'restart', 'result', 'rotate', 'scale', 'seed', 'shape-rendering', 'specularconstant', 'specularexponent', 'spreadmethod', 'stddeviation', 'stitchtiles', 'stop-color', 'stop-opacity', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke', 'stroke-width', 'style', 'surfacescale', 'tabindex', 'targetx', 'targety', 'transform', 'text-anchor', 'text-decoration', 'text-rendering', 'textlength', 'type', 'u1', 'u2', 'unicode', 'values', 'viewbox', 'visibility', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'width', 'word-spacing', 'wrap', 'writing-mode', 'xchannelselector', 'ychannelselector', 'x', 'x1', 'x2', 'xmlns', 'y', 'y1', 'y2', 'z', 'zoomandpan'];

var mathMl$1 = ['accent', 'accentunder', 'align', 'bevelled', 'close', 'columnsalign', 'columnlines', 'columnspan', 'denomalign', 'depth', 'dir', 'display', 'displaystyle', 'fence', 'frame', 'height', 'href', 'id', 'largeop', 'length', 'linethickness', 'lspace', 'lquote', 'mathbackground', 'mathcolor', 'mathsize', 'mathvariant', 'maxsize', 'minsize', 'movablelimits', 'notation', 'numalign', 'open', 'rowalign', 'rowlines', 'rowspacing', 'rowspan', 'rspace', 'rquote', 'scriptlevel', 'scriptminsize', 'scriptsizemultiplier', 'selection', 'separator', 'separators', 'stretchy', 'subscriptshift', 'supscriptshift', 'symmetric', 'voffset', 'width', 'xmlns'];

var xml = ['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink'];

/* Add properties to a lookup table */
function addToSet(set, array) {
  var l = array.length;
  while (l--) {
    if (typeof array[l] === 'string') {
      array[l] = array[l].toLowerCase();
    }
    set[array[l]] = true;
  }
  return set;
}

/* Shallow clone an object */
function clone(object) {
  var newObject = {};
  var property = void 0;
  for (property in object) {
    if (Object.prototype.hasOwnProperty.call(object, property)) {
      newObject[property] = object[property];
    }
  }
  return newObject;
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var getGlobal = function getGlobal() {
  return typeof window === 'undefined' ? null : window;
};

function createDOMPurify() {
  var window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getGlobal();

  var DOMPurify = function DOMPurify(root) {
    return createDOMPurify(root);
  };

  /**
      * Version label, exposed for easier checks
      * if DOMPurify is up to date or not
      */
  DOMPurify.version = '1.0.2';

  /**
    * Array of elements that DOMPurify removed during sanitation.
    * Empty if nothing was removed.
    */
  DOMPurify.removed = [];

  if (!window || !window.document || window.document.nodeType !== 9) {
    // Not running in a browser, provide a factory function
    // so that you can pass your own Window
    DOMPurify.isSupported = false;

    return DOMPurify;
  }

  var originalDocument = window.document;
  var useDOMParser = false; // See comment below
  var useXHR = false;

  var document = window.document;
  var DocumentFragment = window.DocumentFragment,
      HTMLTemplateElement = window.HTMLTemplateElement,
      Node = window.Node,
      NodeFilter = window.NodeFilter,
      _window$NamedNodeMap = window.NamedNodeMap,
      NamedNodeMap = _window$NamedNodeMap === undefined ? window.NamedNodeMap || window.MozNamedAttrMap : _window$NamedNodeMap,
      Text = window.Text,
      Comment = window.Comment,
      DOMParser = window.DOMParser,
      _window$XMLHttpReques = window.XMLHttpRequest,
      XMLHttpRequest = _window$XMLHttpReques === undefined ? window.XMLHttpRequest : _window$XMLHttpReques,
      _window$encodeURI = window.encodeURI,
      encodeURI = _window$encodeURI === undefined ? window.encodeURI : _window$encodeURI;

  // As per issue #47, the web-components registry is inherited by a
  // new document created via createHTMLDocument. As per the spec
  // (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
  // a new empty registry is used when creating a template contents owner
  // document, so we use that as our parent document to ensure nothing
  // is inherited.

  if (typeof HTMLTemplateElement === 'function') {
    var template = document.createElement('template');
    if (template.content && template.content.ownerDocument) {
      document = template.content.ownerDocument;
    }
  }

  var _document = document,
      implementation = _document.implementation,
      createNodeIterator = _document.createNodeIterator,
      getElementsByTagName = _document.getElementsByTagName,
      createDocumentFragment = _document.createDocumentFragment;

  var importNode = originalDocument.importNode;

  var hooks = {};

  /**
    * Expose whether this browser supports running the full DOMPurify.
    */
  DOMPurify.isSupported = implementation && typeof implementation.createHTMLDocument !== 'undefined' && document.documentMode !== 9;

  /**
    * We consider the elements and attributes below to be safe. Ideally
    * don't add any new ones but feel free to remove unwanted ones.
    */

  /* allowed element names */
  var ALLOWED_TAGS = null;
  var DEFAULT_ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray(html), _toConsumableArray(svg), _toConsumableArray(svgFilters), _toConsumableArray(mathMl), _toConsumableArray(text)));

  /* Allowed attribute names */
  var ALLOWED_ATTR = null;
  var DEFAULT_ALLOWED_ATTR = addToSet({}, [].concat(_toConsumableArray(html$1), _toConsumableArray(svg$1), _toConsumableArray(mathMl$1), _toConsumableArray(xml)));

  /* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */
  var FORBID_TAGS = null;

  /* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */
  var FORBID_ATTR = null;

  /* Decide if ARIA attributes are okay */
  var ALLOW_ARIA_ATTR = true;

  /* Decide if custom data attributes are okay */
  var ALLOW_DATA_ATTR = true;

  /* Decide if unknown protocols are okay */
  var ALLOW_UNKNOWN_PROTOCOLS = false;

  /* Output should be safe for jQuery's $() factory? */
  var SAFE_FOR_JQUERY = false;

  /* Output should be safe for common template engines.
   * This means, DOMPurify removes data attributes, mustaches and ERB
   */
  var SAFE_FOR_TEMPLATES = false;

  /* Specify template detection regex for SAFE_FOR_TEMPLATES mode */
  var MUSTACHE_EXPR = /\{\{[\s\S]*|[\s\S]*\}\}/gm;
  var ERB_EXPR = /<%[\s\S]*|[\s\S]*%>/gm;

  /* Decide if document with <html>... should be returned */
  var WHOLE_DOCUMENT = false;

  /* Track whether config is already set on this instance of DOMPurify. */
  var SET_CONFIG = false;

  /* Decide if all elements (e.g. style, script) must be children of
   * document.body. By default, browsers might move them to document.head */
  var FORCE_BODY = false;

  /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html string.
   * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
   */
  var RETURN_DOM = false;

  /* Decide if a DOM `DocumentFragment` should be returned, instead of a html string */
  var RETURN_DOM_FRAGMENT = false;

  /* If `RETURN_DOM` or `RETURN_DOM_FRAGMENT` is enabled, decide if the returned DOM
   * `Node` is imported into the current `Document`. If this flag is not enabled the
   * `Node` will belong (its ownerDocument) to a fresh `HTMLDocument`, created by
   * DOMPurify. */
  var RETURN_DOM_IMPORT = false;

  /* Output should be free from DOM clobbering attacks? */
  var SANITIZE_DOM = true;

  /* Keep element content when removing element? */
  var KEEP_CONTENT = true;

  /* Allow usage of profiles like html, svg and mathMl */
  var USE_PROFILES = {};

  /* Tags to ignore content of when KEEP_CONTENT is true */
  var FORBID_CONTENTS = addToSet({}, ['audio', 'head', 'math', 'script', 'style', 'template', 'svg', 'video']);

  /* Tags that are safe for data: URIs */
  var DATA_URI_TAGS = addToSet({}, ['audio', 'video', 'img', 'source', 'image']);

  /* Attributes safe for values like "javascript:" */
  var URI_SAFE_ATTRIBUTES = addToSet({}, ['alt', 'class', 'for', 'id', 'label', 'name', 'pattern', 'placeholder', 'summary', 'title', 'value', 'style', 'xmlns']);

  /* Keep a reference to config to pass to hooks */
  var CONFIG = null;

  /* Ideally, do not touch anything below this line */
  /* ______________________________________________ */

  var formElement = document.createElement('form');

  /**
  * _parseConfig
  *
  * @param  optional config literal
  */
  // eslint-disable-next-line complexity
  var _parseConfig = function _parseConfig(cfg) {
    /* Shield configuration object from tampering */
    if ((typeof cfg === 'undefined' ? 'undefined' : _typeof(cfg)) !== 'object') {
      cfg = {};
    }

    /* Set configuration parameters */
    ALLOWED_TAGS = 'ALLOWED_TAGS' in cfg ? addToSet({}, cfg.ALLOWED_TAGS) : DEFAULT_ALLOWED_TAGS;
    ALLOWED_ATTR = 'ALLOWED_ATTR' in cfg ? addToSet({}, cfg.ALLOWED_ATTR) : DEFAULT_ALLOWED_ATTR;
    FORBID_TAGS = 'FORBID_TAGS' in cfg ? addToSet({}, cfg.FORBID_TAGS) : {};
    FORBID_ATTR = 'FORBID_ATTR' in cfg ? addToSet({}, cfg.FORBID_ATTR) : {};
    USE_PROFILES = 'USE_PROFILES' in cfg ? cfg.USE_PROFILES : false;
    ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false; // Default true
    ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false; // Default true
    ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false
    SAFE_FOR_JQUERY = cfg.SAFE_FOR_JQUERY || false; // Default false
    SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false; // Default false
    WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false; // Default false
    RETURN_DOM = cfg.RETURN_DOM || false; // Default false
    RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false; // Default false
    RETURN_DOM_IMPORT = cfg.RETURN_DOM_IMPORT || false; // Default false
    FORCE_BODY = cfg.FORCE_BODY || false; // Default false
    SANITIZE_DOM = cfg.SANITIZE_DOM !== false; // Default true
    KEEP_CONTENT = cfg.KEEP_CONTENT !== false; // Default true

    if (SAFE_FOR_TEMPLATES) {
      ALLOW_DATA_ATTR = false;
    }

    if (RETURN_DOM_FRAGMENT) {
      RETURN_DOM = true;
    }

    /* Parse profile info */
    if (USE_PROFILES) {
      ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray(text)));
      ALLOWED_ATTR = [];
      if (USE_PROFILES.html === true) {
        addToSet(ALLOWED_TAGS, html);
        addToSet(ALLOWED_ATTR, html$1);
      }
      if (USE_PROFILES.svg === true) {
        addToSet(ALLOWED_TAGS, svg);
        addToSet(ALLOWED_ATTR, svg$1);
        addToSet(ALLOWED_ATTR, xml);
      }
      if (USE_PROFILES.svgFilters === true) {
        addToSet(ALLOWED_TAGS, svgFilters);
        addToSet(ALLOWED_ATTR, svg$1);
        addToSet(ALLOWED_ATTR, xml);
      }
      if (USE_PROFILES.mathMl === true) {
        addToSet(ALLOWED_TAGS, mathMl);
        addToSet(ALLOWED_ATTR, mathMl$1);
        addToSet(ALLOWED_ATTR, xml);
      }
    }

    /* Merge configuration parameters */
    if (cfg.ADD_TAGS) {
      if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
        ALLOWED_TAGS = clone(ALLOWED_TAGS);
      }
      addToSet(ALLOWED_TAGS, cfg.ADD_TAGS);
    }
    if (cfg.ADD_ATTR) {
      if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
        ALLOWED_ATTR = clone(ALLOWED_ATTR);
      }
      addToSet(ALLOWED_ATTR, cfg.ADD_ATTR);
    }
    if (cfg.ADD_URI_SAFE_ATTR) {
      addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR);
    }

    /* Add #text in case KEEP_CONTENT is set to true */
    if (KEEP_CONTENT) {
      ALLOWED_TAGS['#text'] = true;
    }

    // Prevent further manipulation of configuration.
    // Not available in IE8, Safari 5, etc.
    if (Object && 'freeze' in Object) {
      Object.freeze(cfg);
    }

    CONFIG = cfg;
  };

  /**
  * _forceRemove
  *
  * @param  a DOM node
  */
  var _forceRemove = function _forceRemove(node) {
    DOMPurify.removed.push({ element: node });
    try {
      node.parentNode.removeChild(node);
    } catch (err) {
      node.outerHTML = '';
    }
  };

  /**
  * _removeAttribute
  *
  * @param  an Attribute name
  * @param  a DOM node
  */
  var _removeAttribute = function _removeAttribute(name, node) {
    DOMPurify.removed.push({
      attribute: node.getAttributeNode(name),
      from: node
    });
    node.removeAttribute(name);
  };

  /**
  * _initDocument
  *
  * @param  a string of dirty markup
  * @return a DOM, filled with the dirty markup
  */
  var _initDocument = function _initDocument(dirty) {
    /* Create a HTML document */
    var doc = void 0;
    var body = void 0;

    if (FORCE_BODY) {
      dirty = '<remove></remove>' + dirty;
    }

    /* Use XHR if necessary because Safari 10.1 and newer are buggy */
    if (useXHR) {
      try {
        dirty = encodeURI(dirty);
      } catch (err) {}
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'document';
      xhr.open('GET', 'data:text/html;charset=utf-8,' + dirty, false);
      xhr.send(null);
      doc = xhr.response;
    }

    /* Use DOMParser to workaround Firefox bug (see comment below) */
    if (useDOMParser) {
      try {
        doc = new DOMParser().parseFromString(dirty, 'text/html');
      } catch (err) {}
    }

    /* Otherwise use createHTMLDocument, because DOMParser is unsafe in
    Safari (see comment below) */
    if (!doc || !doc.documentElement) {
      doc = implementation.createHTMLDocument('');
      body = doc.body;
      body.parentNode.removeChild(body.parentNode.firstElementChild);
      body.outerHTML = dirty;
    }

    /* Work on whole document or just its body */
    return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? 'html' : 'body')[0];
  };

  // Safari 10.1+ (unfixed as of time of writing) has a catastrophic bug in
  // its implementation of DOMParser such that the following executes the
  // JavaScript:
  //
  // new DOMParser()
  //   .parseFromString('<svg onload=alert(document.domain)>', 'text/html');
  //
  // Later, it was also noticed that even more assumed benign and inert ways
  // of creating a document are now insecure thanks to Safari. So we work
  // around that with a feature test and use XHR to create the document in
  // case we really have to. That one seems safe for now.
  //
  // However, Firefox uses a different parser for innerHTML rather than
  // DOMParser (see https://bugzilla.mozilla.org/show_bug.cgi?id=1205631)
  // which means that you *must* use DOMParser, otherwise the output may
  // not be safe if used in a document.write context later.
  //
  // So we feature detect the Firefox bug and use the DOMParser if necessary.
  if (DOMPurify.isSupported) {
    (function () {
      var doc = _initDocument('<svg><g onload="this.parentNode.remove()"></g></svg>');
      if (!doc.querySelector('svg')) {
        useXHR = true;
      }
      try {
        doc = _initDocument('<svg><p><style><img src="</style><img src=x onerror=alert(1)//">');
        if (doc.querySelector('svg img')) {
          useDOMParser = true;
        }
      } catch (err) {}
    })();
  }

  /**
  * _createIterator
  *
  * @param  document/fragment to create iterator for
  * @return iterator instance
  */
  var _createIterator = function _createIterator(root) {
    return createNodeIterator.call(root.ownerDocument || root, root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT, function () {
      return NodeFilter.FILTER_ACCEPT;
    }, false);
  };

  /**
  * _isClobbered
  *
  * @param  element to check for clobbering attacks
  * @return true if clobbered, false if safe
  */
  var _isClobbered = function _isClobbered(elm) {
    if (elm instanceof Text || elm instanceof Comment) {
      return false;
    }
    if (typeof elm.nodeName !== 'string' || typeof elm.textContent !== 'string' || typeof elm.removeChild !== 'function' || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== 'function' || typeof elm.setAttribute !== 'function') {
      return true;
    }
    return false;
  };

  /**
  * _isNode
  *
  * @param object to check whether it's a DOM node
  * @return true is object is a DOM node
  */
  var _isNode = function _isNode(obj) {
    return (typeof Node === 'undefined' ? 'undefined' : _typeof(Node)) === 'object' ? obj instanceof Node : obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && typeof obj.nodeType === 'number' && typeof obj.nodeName === 'string';
  };

  /**
  * _executeHook
  * Execute user configurable hooks
  *
  * @param  {String} entryPoint  Name of the hook's entry point
  * @param  {Node} currentNode
  */
  var _executeHook = function _executeHook(entryPoint, currentNode, data) {
    if (!hooks[entryPoint]) {
      return;
    }

    hooks[entryPoint].forEach(function (hook) {
      hook.call(DOMPurify, currentNode, data, CONFIG);
    });
  };

  /**
  * _sanitizeElements
  *
  * @protect nodeName
  * @protect textContent
  * @protect removeChild
  *
  * @param   node to check for permission to exist
  * @return  true if node was killed, false if left alive
  */
  var _sanitizeElements = function _sanitizeElements(currentNode) {
    var content = void 0;

    /* Execute a hook if present */
    _executeHook('beforeSanitizeElements', currentNode, null);

    /* Check if element is clobbered or can clobber */
    if (_isClobbered(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }

    /* Now let's check the element's type and name */
    var tagName = currentNode.nodeName.toLowerCase();

    /* Execute a hook if present */
    _executeHook('uponSanitizeElement', currentNode, {
      tagName: tagName,
      allowedTags: ALLOWED_TAGS
    });

    /* Remove element if anything forbids its presence */
    if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
      /* Keep content except for black-listed elements */
      if (KEEP_CONTENT && !FORBID_CONTENTS[tagName] && typeof currentNode.insertAdjacentHTML === 'function') {
        try {
          currentNode.insertAdjacentHTML('AfterEnd', currentNode.innerHTML);
        } catch (err) {}
      }
      _forceRemove(currentNode);
      return true;
    }

    /* Convert markup to cover jQuery behavior */
    if (SAFE_FOR_JQUERY && !currentNode.firstElementChild && (!currentNode.content || !currentNode.content.firstElementChild) && /</g.test(currentNode.textContent)) {
      DOMPurify.removed.push({ element: currentNode.cloneNode() });
      currentNode.innerHTML = currentNode.textContent.replace(/</g, '&lt;');
    }

    /* Sanitize element content to be template-safe */
    if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
      /* Get the element's text content */
      content = currentNode.textContent;
      content = content.replace(MUSTACHE_EXPR, ' ');
      content = content.replace(ERB_EXPR, ' ');
      if (currentNode.textContent !== content) {
        DOMPurify.removed.push({ element: currentNode.cloneNode() });
        currentNode.textContent = content;
      }
    }

    /* Execute a hook if present */
    _executeHook('afterSanitizeElements', currentNode, null);

    return false;
  };

  var DATA_ATTR = /^data-[\-\w.\u00B7-\uFFFF]/; // eslint-disable-line no-useless-escape
  var ARIA_ATTR = /^aria-[\-\w]+$/; // eslint-disable-line no-useless-escape
  var IS_ALLOWED_URI = /^(?:(?:(?:f|ht)tps?|mailto|tel):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i; // eslint-disable-line no-useless-escape
  var IS_SCRIPT_OR_DATA = /^(?:\w+script|data):/i;
  /* This needs to be extensive thanks to Webkit/Blink's behavior */
  var ATTR_WHITESPACE = /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g;

  /**
  * _sanitizeAttributes
  *
  * @protect attributes
  * @protect nodeName
  * @protect removeAttribute
  * @protect setAttribute
  *
  * @param   node to sanitize
  * @return  void
  */
  // eslint-disable-next-line complexity
  var _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
    var attr = void 0;
    var name = void 0;
    var value = void 0;
    var lcName = void 0;
    var idAttr = void 0;
    var attributes = void 0;
    var l = void 0;
    /* Execute a hook if present */
    _executeHook('beforeSanitizeAttributes', currentNode, null);

    attributes = currentNode.attributes;

    /* Check if we have attributes; if not we might have a text node */
    if (!attributes) {
      return;
    }

    var hookEvent = {
      attrName: '',
      attrValue: '',
      keepAttr: true,
      allowedAttributes: ALLOWED_ATTR
    };
    l = attributes.length;

    /* Go backwards over all attributes; safely remove bad ones */
    while (l--) {
      attr = attributes[l];
      name = attr.name;
      value = attr.value.trim();
      lcName = name.toLowerCase();

      /* Execute a hook if present */
      hookEvent.attrName = lcName;
      hookEvent.attrValue = value;
      hookEvent.keepAttr = true;
      _executeHook('uponSanitizeAttribute', currentNode, hookEvent);
      value = hookEvent.attrValue;

      /* Remove attribute */
      // Safari (iOS + Mac), last tested v8.0.5, crashes if you try to
      // remove a "name" attribute from an <img> tag that has an "id"
      // attribute at the time.
      if (lcName === 'name' && currentNode.nodeName === 'IMG' && attributes.id) {
        idAttr = attributes.id;
        attributes = Array.prototype.slice.apply(attributes);
        _removeAttribute('id', currentNode);
        _removeAttribute(name, currentNode);
        if (attributes.indexOf(idAttr) > l) {
          currentNode.setAttribute('id', idAttr.value);
        }
      } else if (
      // This works around a bug in Safari, where input[type=file]
      // cannot be dynamically set after type has been removed
      currentNode.nodeName === 'INPUT' && lcName === 'type' && value === 'file' && (ALLOWED_ATTR[lcName] || !FORBID_ATTR[lcName])) {
        continue;
      } else {
        // This avoids a crash in Safari v9.0 with double-ids.
        // The trick is to first set the id to be empty and then to
        // remove the attribute
        if (name === 'id') {
          currentNode.setAttribute(name, '');
        }
        _removeAttribute(name, currentNode);
      }

      /* Did the hooks approve of the attribute? */
      if (!hookEvent.keepAttr) {
        continue;
      }

      /* Make sure attribute cannot clobber */
      if (SANITIZE_DOM && (lcName === 'id' || lcName === 'name') && (value in window || value in document || value in formElement)) {
        continue;
      }

      /* Sanitize attribute content to be template-safe */
      if (SAFE_FOR_TEMPLATES) {
        value = value.replace(MUSTACHE_EXPR, ' ');
        value = value.replace(ERB_EXPR, ' ');
      }

      /* Allow valid data-* attributes: At least one character after "-"
         (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
         XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
         We don't need to check the value; it's always URI safe. */
      if (ALLOW_DATA_ATTR && DATA_ATTR.test(lcName)) {
        // This attribute is safe
      } else if (ALLOW_ARIA_ATTR && ARIA_ATTR.test(lcName)) {
        // This attribute is safe
        /* Otherwise, check the name is permitted */
      } else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
        continue;

        /* Check value is safe. First, is attr inert? If so, is safe */
      } else if (URI_SAFE_ATTRIBUTES[lcName]) {
        // This attribute is safe
        /* Check no script, data or unknown possibly unsafe URI
         unless we know URI values are safe for that attribute */
      } else if (IS_ALLOWED_URI.test(value.replace(ATTR_WHITESPACE, ''))) {
        // This attribute is safe
        /* Keep image data URIs alive if src/xlink:href is allowed */
      } else if ((lcName === 'src' || lcName === 'xlink:href') && value.indexOf('data:') === 0 && DATA_URI_TAGS[currentNode.nodeName.toLowerCase()]) {
        // This attribute is safe
        /* Allow unknown protocols: This provides support for links that
         are handled by protocol handlers which may be unknown ahead of
         time, e.g. fb:, spotify: */
      } else if (ALLOW_UNKNOWN_PROTOCOLS && !IS_SCRIPT_OR_DATA.test(value.replace(ATTR_WHITESPACE, ''))) {
        // This attribute is safe
        /* Check for binary attributes */
        // eslint-disable-next-line no-negated-condition
      } else if (!value) {
        // Binary attributes are safe at this point
        /* Anything else, presume unsafe, do not add it back */
      } else {
        continue;
      }

      /* Handle invalid data-* attribute set by try-catching it */
      try {
        currentNode.setAttribute(name, value);
        DOMPurify.removed.pop();
      } catch (err) {}
    }

    /* Execute a hook if present */
    _executeHook('afterSanitizeAttributes', currentNode, null);
  };

  /**
  * _sanitizeShadowDOM
  *
  * @param  fragment to iterate over recursively
  * @return void
  */
  var _sanitizeShadowDOM = function _sanitizeShadowDOM(fragment) {
    var shadowNode = void 0;
    var shadowIterator = _createIterator(fragment);

    /* Execute a hook if present */
    _executeHook('beforeSanitizeShadowDOM', fragment, null);

    while (shadowNode = shadowIterator.nextNode()) {
      /* Execute a hook if present */
      _executeHook('uponSanitizeShadowNode', shadowNode, null);

      /* Sanitize tags and elements */
      if (_sanitizeElements(shadowNode)) {
        continue;
      }

      /* Deep shadow DOM detected */
      if (shadowNode.content instanceof DocumentFragment) {
        _sanitizeShadowDOM(shadowNode.content);
      }

      /* Check attributes, sanitize if necessary */
      _sanitizeAttributes(shadowNode);
    }

    /* Execute a hook if present */
    _executeHook('afterSanitizeShadowDOM', fragment, null);
  };

  /**
  * Sanitize
  * Public method providing core sanitation functionality
  *
  * @param {String|Node} dirty string or DOM node
  * @param {Object} configuration object
  */
  // eslint-disable-next-line complexity
  DOMPurify.sanitize = function (dirty, cfg) {
    var body = void 0;
    var importedNode = void 0;
    var currentNode = void 0;
    var oldNode = void 0;
    var returnNode = void 0;
    /* Make sure we have a string to sanitize.
      DO NOT return early, as this will return the wrong type if
      the user has requested a DOM object rather than a string */
    if (!dirty) {
      dirty = '<!-->';
    }

    /* Stringify, in case dirty is an object */
    if (typeof dirty !== 'string' && !_isNode(dirty)) {
      // eslint-disable-next-line no-negated-condition
      if (typeof dirty.toString !== 'function') {
        throw new TypeError('toString is not a function');
      } else {
        dirty = dirty.toString();
      }
    }

    /* Check we can run. Otherwise fall back or ignore */
    if (!DOMPurify.isSupported) {
      if (_typeof(window.toStaticHTML) === 'object' || typeof window.toStaticHTML === 'function') {
        if (typeof dirty === 'string') {
          return window.toStaticHTML(dirty);
        } else if (_isNode(dirty)) {
          return window.toStaticHTML(dirty.outerHTML);
        }
      }
      return dirty;
    }

    /* Assign config vars */
    if (!SET_CONFIG) {
      _parseConfig(cfg);
    }

    /* Clean up removed elements */
    DOMPurify.removed = [];

    if (dirty instanceof Node) {
      /* If dirty is a DOM element, append to an empty document to avoid
         elements being stripped by the parser */
      body = _initDocument('<!-->');
      importedNode = body.ownerDocument.importNode(dirty, true);
      if (importedNode.nodeType === 1 && importedNode.nodeName === 'BODY') {
        /* Node is already a body, use as is */
        body = importedNode;
      } else {
        body.appendChild(importedNode);
      }
    } else {
      /* Exit directly if we have nothing to do */
      if (!RETURN_DOM && !WHOLE_DOCUMENT && dirty.indexOf('<') === -1) {
        return dirty;
      }

      /* Initialize the document to work on */
      body = _initDocument(dirty);

      /* Check we have a DOM node from the data */
      if (!body) {
        return RETURN_DOM ? null : '';
      }
    }

    /* Remove first element node (ours) if FORCE_BODY is set */
    if (FORCE_BODY) {
      _forceRemove(body.firstChild);
    }

    /* Get node iterator */
    var nodeIterator = _createIterator(body);

    /* Now start iterating over the created document */
    while (currentNode = nodeIterator.nextNode()) {
      /* Fix IE's strange behavior with manipulated textNodes #89 */
      if (currentNode.nodeType === 3 && currentNode === oldNode) {
        continue;
      }

      /* Sanitize tags and elements */
      if (_sanitizeElements(currentNode)) {
        continue;
      }

      /* Shadow DOM detected, sanitize it */
      if (currentNode.content instanceof DocumentFragment) {
        _sanitizeShadowDOM(currentNode.content);
      }

      /* Check attributes, sanitize if necessary */
      _sanitizeAttributes(currentNode);

      oldNode = currentNode;
    }

    /* Return sanitized string or DOM */
    if (RETURN_DOM) {
      if (RETURN_DOM_FRAGMENT) {
        returnNode = createDocumentFragment.call(body.ownerDocument);

        while (body.firstChild) {
          returnNode.appendChild(body.firstChild);
        }
      } else {
        returnNode = body;
      }

      if (RETURN_DOM_IMPORT) {
        /* AdoptNode() is not used because internal state is not reset
               (e.g. the past names map of a HTMLFormElement), this is safe
               in theory but we would rather not risk another attack vector.
               The state that is cloned by importNode() is explicitly defined
               by the specs. */
        returnNode = importNode.call(originalDocument, returnNode, true);
      }

      return returnNode;
    }

    return WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
  };

  /**
  * Public method to set the configuration once
  * setConfig
  *
  * @param {Object} configuration object
  * @return void
  */
  DOMPurify.setConfig = function (cfg) {
    _parseConfig(cfg);
    SET_CONFIG = true;
  };

  /**
  * Public method to remove the configuration
  * clearConfig
  *
  * @return void
  */
  DOMPurify.clearConfig = function () {
    CONFIG = null;
    SET_CONFIG = false;
  };

  /**
  * AddHook
  * Public method to add DOMPurify hooks
  *
  * @param {String} entryPoint
  * @param {Function} hookFunction
  */
  DOMPurify.addHook = function (entryPoint, hookFunction) {
    if (typeof hookFunction !== 'function') {
      return;
    }
    hooks[entryPoint] = hooks[entryPoint] || [];
    hooks[entryPoint].push(hookFunction);
  };

  /**
  * RemoveHook
  * Public method to remove a DOMPurify hook at a given entryPoint
  * (pops it from the stack of hooks if more are present)
  *
  * @param {String} entryPoint
  * @return void
  */
  DOMPurify.removeHook = function (entryPoint) {
    if (hooks[entryPoint]) {
      hooks[entryPoint].pop();
    }
  };

  /**
  * RemoveHooks
  * Public method to remove all DOMPurify hooks at a given entryPoint
  *
  * @param  {String} entryPoint
  * @return void
  */
  DOMPurify.removeHooks = function (entryPoint) {
    if (hooks[entryPoint]) {
      hooks[entryPoint] = [];
    }
  };

  /**
  * RemoveAllHooks
  * Public method to remove all DOMPurify hooks
  *
  * @return void
  */
  DOMPurify.removeAllHooks = function () {
    hooks = {};
  };

  return DOMPurify;
}

var purify = createDOMPurify();

return purify;

})));
//# sourceMappingURL=purify.js.map


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable node/no-deprecated-api */
var buffer = __webpack_require__(40)
var Buffer = buffer.Buffer

// alternative to using Object.keys for old browsers
function copyProps (src, dst) {
  for (var key in src) {
    dst[key] = src[key]
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports)
  exports.Buffer = SafeBuffer
}

function SafeBuffer (arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length)
}

// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer)

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number')
  }
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  var buf = Buffer(size)
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding)
    } else {
      buf.fill(fill)
    }
  } else {
    buf.fill(0)
  }
  return buf
}

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return Buffer(size)
}

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return buffer.SlowBuffer(size)
}


/***/ }),
/* 10 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(9).Buffer

// prototype class for hash functions
function Hash (blockSize, finalSize) {
  this._block = Buffer.alloc(blockSize)
  this._finalSize = finalSize
  this._blockSize = blockSize
  this._len = 0
}

Hash.prototype.update = function (data, enc) {
  if (typeof data === 'string') {
    enc = enc || 'utf8'
    data = Buffer.from(data, enc)
  }

  var block = this._block
  var blockSize = this._blockSize
  var length = data.length
  var accum = this._len

  for (var offset = 0; offset < length;) {
    var assigned = accum % blockSize
    var remainder = Math.min(length - offset, blockSize - assigned)

    for (var i = 0; i < remainder; i++) {
      block[assigned + i] = data[offset + i]
    }

    accum += remainder
    offset += remainder

    if ((accum % blockSize) === 0) {
      this._update(block)
    }
  }

  this._len += length
  return this
}

Hash.prototype.digest = function (enc) {
  var rem = this._len % this._blockSize

  this._block[rem] = 0x80

  // zero (rem + 1) trailing bits, where (rem + 1) is the smallest
  // non-negative solution to the equation (length + 1 + (rem + 1)) === finalSize mod blockSize
  this._block.fill(0, rem + 1)

  if (rem >= this._finalSize) {
    this._update(this._block)
    this._block.fill(0)
  }

  var bits = this._len * 8

  // uint32
  if (bits <= 0xffffffff) {
    this._block.writeUInt32BE(bits, this._blockSize - 4)

  // uint64
  } else {
    var lowBits = (bits & 0xffffffff) >>> 0
    var highBits = (bits - lowBits) / 0x100000000

    this._block.writeUInt32BE(highBits, this._blockSize - 8)
    this._block.writeUInt32BE(lowBits, this._blockSize - 4)
  }

  this._update(this._block)
  var hash = this._hash()

  return enc ? hash.toString(enc) : hash
}

Hash.prototype._update = function () {
  throw new Error('_update must be implemented by subclass')
}

module.exports = Hash


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(3);

var _jquery2 = _interopRequireDefault(_jquery);

var _folders = __webpack_require__(1);

var _folders2 = _interopRequireDefault(_folders);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _BackgroundRequester = __webpack_require__(4);

var _BackgroundRequester2 = _interopRequireDefault(_BackgroundRequester);

var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _LoginView = __webpack_require__(6);

var _LoginView2 = _interopRequireDefault(_LoginView);

var _Tabs = __webpack_require__(35);

var _Tabs2 = _interopRequireDefault(_Tabs);

var _ServerList = __webpack_require__(36);

var _ServerList2 = _interopRequireDefault(_ServerList);

var _ProxySearchView = __webpack_require__(21);

var _ProxySearchView2 = _interopRequireDefault(_ProxySearchView);

var _UpgradeView = __webpack_require__(13);

var _UpgradeView2 = _interopRequireDefault(_UpgradeView);

var _UserProfile3View = __webpack_require__(37);

var _UserProfile3View2 = _interopRequireDefault(_UserProfile3View);

var _BypassConfigView = __webpack_require__(47);

var _BypassConfigView2 = _interopRequireDefault(_BypassConfigView);

var _endpoints = __webpack_require__(16);

var _endpoints2 = _interopRequireDefault(_endpoints);

var _ConnectedView = __webpack_require__(49);

var _ConnectedView2 = _interopRequireDefault(_ConnectedView);

var _GifView = __webpack_require__(55);

var _GifView2 = _interopRequireDefault(_GifView);

var _Sticked = __webpack_require__(25);

var _Sticked2 = _interopRequireDefault(_Sticked);

var _DOMPurify = __webpack_require__(8);

var _DOMPurify2 = _interopRequireDefault(_DOMPurify);

var _DesktopClientInfoView = __webpack_require__(17);

var _DesktopClientInfoView2 = _interopRequireDefault(_DesktopClientInfoView);

var _Sanitize = __webpack_require__(7);

var _Sanitize2 = _interopRequireDefault(_Sanitize);

var _PermissionView = __webpack_require__(18);

var _PermissionView2 = _interopRequireDefault(_PermissionView);

var _OtherToolsView = __webpack_require__(26);

var _OtherToolsView2 = _interopRequireDefault(_OtherToolsView);

var _Tooltip = __webpack_require__(19);

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _GetPremiumView = __webpack_require__(27);

var _GetPremiumView2 = _interopRequireDefault(_GetPremiumView);

var _TrialView = __webpack_require__(28);

var _TrialView2 = _interopRequireDefault(_TrialView);

var _TeaserView = __webpack_require__(56);

var _TeaserView2 = _interopRequireDefault(_TeaserView);

var _UpdateRequiredView = __webpack_require__(20);

var _UpdateRequiredView2 = _interopRequireDefault(_UpdateRequiredView);

var _localeFallback = __webpack_require__(5);

var _localeFallback2 = _interopRequireDefault(_localeFallback);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DashboardView = function () {
	function DashboardView() {
		_classCallCheck(this, DashboardView);

		this.template = _folders2.default.VIEWS + '/dashboard.html';
		this.header = _folders2.default.VIEWS + '/header.html';

		this.fallbackCopyTextToClipboard = this.fallbackCopyTextToClipboard.bind(this);
		this.copyTextToClipboard = this.copyTextToClipboard.bind(this);
		this.setUserProfile = this.setUserProfile.bind(this);
	}

	_createClass(DashboardView, [{
		key: 'initView',
		value: function initView() {

			var _this = this;
			this.App = (0, _jquery2.default)('#app');
			this.App.html("");

			_Utils2.default.getLocaleInStorage().then(_this.loadTemplate.bind(this), _this.loadLocaleFromServer.bind(this));
		}
	}, {
		key: 'fallbackCopyTextToClipboard',
		value: function fallbackCopyTextToClipboard(text) {
			var _this = this;
			var textArea = document.createElement("textarea");
			textArea.value = text;
			textArea.style.position = "fixed"; //avoid scrolling to bottom
			document.body.appendChild(textArea);
			textArea.focus();
			textArea.select();

			try {
				var successful = document.execCommand('copy');
				var msg = successful ? 'successful' : 'unsuccessful';
			} catch (err) {
				console.error('Fallback: Oops, unable to copy', err);
			}

			document.body.removeChild(textArea);
		}
	}, {
		key: 'copyTextToClipboard',
		value: function copyTextToClipboard(text) {
			var _this = this;

			if (!navigator.clipboard) {
				_this.fallbackCopyTextToClipboard(text);
				return;
			}
			navigator.clipboard.writeText(text).then(function () {}, function (err) {
				console.error('Async: Could not copy text: ', err);
			});
		}
	}, {
		key: 'loadTemplate',
		value: function loadTemplate(locale) {
			var _this = this;

			this.App.html("");

			_this.loadStorageData().then(function (storage) {
				_this.Storage = storage;

				_this.setNotification();

				if (storage[_ServiceMeta2.default.STORAGEKEYS.ISPROXYON]) {
					_ConnectedView2.default.initView();
					return;
				}

				_this.loadDashboardView(locale, storage);
			});
		}
	}, {
		key: 'loadDashboardView',
		value: function loadDashboardView(locale, storage) {
			var _this = this;
			_BackgroundRequester2.default.request('PermissionController', 'registerView', {}, true).then(_this.onPermissionChanged.bind(this));
			_jquery2.default.get(_this.header, function (header) {
				_jquery2.default.get(_this.template, function (template) {
					_this.App.html("");
					_this.App.append(header);
					var loadedTemplate = _Utils2.default.loadTemplateWithFallback(template, locale, _localeFallback2.default);
					_this.App.append(loadedTemplate);

					_this.setTabs();

					_this.serverList = {};

					_this.selectElements();

					_this.setUserProfile(locale);
					_this.setToolTip(locale);

					_this.checkBlockedStatus(storage, locale);
					_this.checkRateUsTime(storage, locale, _this);

					_this.loadServerList();

					_this.setTrial(storage);
					_this.setTeaser(storage);
					_this.setUpdateAvailable();

					// Setting all events for selected elements
					_this.setEvents();

					_this.setAuthcodeContainer(storage);
				}, "html");
			}, "html");
		}
	}, {
		key: 'loadServerList',
		value: function loadServerList(tabId, sorted) {
			var _this = this;

			if (!tabId) tabId = _this.Tab.current;

			var currentTabSection = _this.getSectionByTabId(tabId);
			var uid = _this.Storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA] ? _this.Storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA].uid : "";

			var legacyList = _this.generateLegacyList(_this.Storage.configData.servers);

			if (!_this.serverList[tabId]) _this.serverList[tabId] = _this.getServerListByTabId(tabId, legacyList);

			var isSorted = sorted || _this.Storage && _this.Storage[_ServiceMeta2.default.STORAGEKEYS.ISCOUNTRYSORTED] && _this.Storage[_ServiceMeta2.default.STORAGEKEYS.ISCOUNTRYSORTED][uid] && _this.Storage[_ServiceMeta2.default.STORAGEKEYS.ISCOUNTRYSORTED][uid][tabId] ? true : false;

			if (currentTabSection.html() == "") return _this.buildServerList(currentTabSection, _this.serverList[tabId], tabId, isSorted);
		}
	}, {
		key: 'generateLegacyList',
		value: function generateLegacyList(newList) {
			var _this = this;
			var legacyList = {};
			if (_Utils2.default.isObject(newList)) {
				Object.keys(newList).forEach(function (cc) {
					var serverListByCountry = newList[cc];
					if (_Utils2.default.isObject(serverListByCountry)) {

						Object.keys(serverListByCountry).forEach(function (serverId) {
							var server = serverListByCountry[serverId];

							if (_Utils2.default.isObject(server) && server.hasOwnProperty("h") && server.hasOwnProperty("p") && server.hasOwnProperty("t")) {

								var serverType = _this.getServerTypeNameById(server.t);
								var serverUri;
								try {
									serverUri = new URL(server.h);
								} catch (e) {
									serverUri = null;
								}
								//console.log("serverUri", serverUri);
								if (serverType !== null && _Utils2.default.isObject(serverUri) && serverUri.hostname && serverUri.hostname !== "") {
									var fixedPort = _this.fixPortByScheme(serverUri.port, serverUri.protocol);
									var scheme = serverUri.protocol.replace(":", "");
									if (fixedPort !== null) {

										if (!legacyList.hasOwnProperty(serverType)) legacyList[serverType] = {};
										legacyList[serverType][serverId] = {
											"Host": serverUri.hostname,
											"Port": fixedPort,
											"Scheme": scheme,
											"CountryCode": cc,
											"Pos": server.p,
											"Type": server.t
										};
										if (server.hasOwnProperty("l")) legacyList[serverType][serverId]["Label"] = server.l;
									}
								}
							}
						});
					}
				});
			}
			return legacyList;
		}

		/* We are parsing the host with new URL if port is 443 or 80 uri.port returns
  	empty string. It will check this case and return port as integer. return
  	null if port is not correct value
  */

	}, {
		key: 'fixPortByScheme',
		value: function fixPortByScheme(port, scheme) {
			var fixedPort;
			if (port === "" && scheme === "https:") return 443;
			if (port === "" && scheme === "http:") return 80;

			fixedPort = parseInt(port);
			return Number.isInteger(fixedPort) ? fixedPort : null;
		}
	}, {
		key: 'getServerTypeNameById',
		value: function getServerTypeNameById(id) {
			if (id == 0) return "SERVERS";
			if (id == 1) return "PREMIUMSERVERS";
			if (id == 2) return "PUBLICSERVERS";
			return null;
		}
	}, {
		key: 'setAuthcodeContainer',
		value: function setAuthcodeContainer(storage) {
			var _this = this;

			var loginType = storage[_ServiceMeta2.default.STORAGEKEYS.LOGINTYPE];
			var userdata = storage[_ServiceMeta2.default.STORAGEKEYS.USERDATA];
			if (loginType != "email") {
				_this.authcodeContainer.css('display', 'none');
				_this.downloadContainer.css('display', 'block');
				_this.userProfileStatus.css('margin-top', '30px');
				(0, _jquery2.default)('.dashboard-view__user-profile').css('height', '115px');
				(0, _jquery2.default)('.dashboard-view__user-profile').css('max-height', '115px');
				(0, _jquery2.default)('.dashboard-view__server-list').css('min-height', '273px');
				(0, _jquery2.default)('.dashboard-view__server-list').css('max-height', '273px');

				(0, _jquery2.default)('#rate-us-box').css('height', '360px');
				(0, _jquery2.default)('#rate-us-box').css('max-height', '360px');

				(0, _jquery2.default)('#limit-info').css('height', '360px');
				(0, _jquery2.default)('#limit-info').css('max-height', '360px');
			}
		}
	}, {
		key: 'setTabs',
		value: function setTabs() {
			var _this = this;

			var tabs = [];
			[].slice.call(document.querySelectorAll('.tabs')).forEach(function (el) {
				tabs.push(new _Tabs2.default(el));
			});

			_this.Tab = tabs[0];
			_this.Tab.addOnChangedListener(_this.onTabChanged.bind(this));
			chrome.storage.local.get(_ServiceMeta2.default.STORAGEKEYS.LASTSELECTEDTAB, function (storage) {
				var lastSelectedTab = storage[_ServiceMeta2.default.STORAGEKEYS.LASTSELECTEDTAB];

				if (lastSelectedTab && lastSelectedTab > 0) {
					_this.onTabChanged(lastSelectedTab);
					_this.Tab._show(lastSelectedTab);
				}
			});
		}
	}, {
		key: 'selectElements',
		value: function selectElements() {
			var _this = this;

			_this.headerLogo = (0, _jquery2.default)('#header-logo');
			_this.headerVersion = (0, _jquery2.default)('#header-version');

			_this.userProfileAuthcode = (0, _jquery2.default)('#user-profile-authcode');
			_this.userProfileAuthcodeCopied = (0, _jquery2.default)('#authcode-copied-clipboard');
			_this.userProfileShowAuthcode = (0, _jquery2.default)('#show-authcode');

			_this.downloadContainer = (0, _jquery2.default)('#download-container');
			_this.authcodeContainer = (0, _jquery2.default)('#authcode-container');

			_this.userProfileUsername = (0, _jquery2.default)('#user-profile-username');
			_this.userProfileStatus = (0, _jquery2.default)('#user-profile-status');
			_this.userProfileUpgradeButton = (0, _jquery2.default)('#user-profile-upgrade-button');

			_this.freeServerListSection = (0, _jquery2.default)('#free-server-list');
			_this.premiumServerListSection = (0, _jquery2.default)('#premium-server-list');
			_this.publicServerListSection = (0, _jquery2.default)('#public-server-list');

			_this.serverListContainer = (0, _jquery2.default)('#server-list-container');

			_this.logoutButton = (0, _jquery2.default)('#logout-button');
			_this.userProfileButton = (0, _jquery2.default)('#user-profile-button');
			_this.ipLookupButton = (0, _jquery2.default)('#iplookup-button');
			_this.contactButton = (0, _jquery2.default)('#contact-button');

			_this.limitInfo = (0, _jquery2.default)('#limit-info');

			/* Download Platform */
			_this.downloadAndroidButton = (0, _jquery2.default)('#dw-android');
			_this.downloadWindowsButton = (0, _jquery2.default)('#dw-windows');
			_this.downloadMacButton = (0, _jquery2.default)('#dw-macosx');

			_this.otherToolsButton = (0, _jquery2.default)('#dw-othertools');
			if (_ServiceMeta2.default.PLATFORM.toLowerCase() === 'edge') _this.otherToolsButton.css('display', 'none');

			_this.otherToolsGif = (0, _jquery2.default)('#othertools-gif');

			/* Sort option */

			_this.sortListByNameButton = (0, _jquery2.default)('#sort-list-by-name');

			_this.isSortedIcon = (0, _jquery2.default)('#is-sorted-icon');
			_this.sortFunctionDropdownContent = (0, _jquery2.default)('#sort-function-dropdown-content');

			_this.sortFunctionContainer = (0, _jquery2.default)('#sort-function-container');
			_this.selectLocationHeadline = (0, _jquery2.default)('#select-location-headline');

			_this.bypasslistFunctionButton = (0, _jquery2.default)('#bypass-function-container');

			_this.getTrial = (0, _jquery2.default)('#get-trial');
			_this.getTrialContainer = (0, _jquery2.default)('#get-trial-container');

			_this.setServiceElements();
		}
	}, {
		key: 'setServiceElements',
		value: function setServiceElements() {
			var _this = this;
			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.BASELINK, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA], function (storage) {
				var logosource = _ServiceMeta2.default.IMAGES.HEADERLOGO;
				var uid = "";
				var config = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA];

				if (config && config.uid !== undefined) uid = "&uid=" + config.uid;

				var headerlogo = logosource + "?cv=" + _ServiceMeta2.default.VERSION + uid;
				_this.headerLogo.attr('src', headerlogo);

				var otherToolsGif = storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK] ? storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK] + _ServiceMeta2.default.IMAGES.OTHERTOOLSGIF : "";
				_this.otherToolsGif.attr('src', otherToolsGif);
			});
			_this.headerVersion.text('v. ' + _ServiceMeta2.default.VERSION);
		}
	}, {
		key: 'setToolTip',
		value: function setToolTip(locales) {
			var _this = this;

			var options = {
				placement: 'top', // or bottom, left, right, and variations
				title: "Top"
			};

			new _Tooltip2.default(_this.logoutButton, {
				placement: 'top', // or bottom, left, right, and variations
				title: locales.Logout
			});
			new _Tooltip2.default(_this.userProfileButton, {
				placement: 'top', // or bottom, left, right, and variations
				title: locales.EditProfile
			});
			new _Tooltip2.default(_this.ipLookupButton, {
				placement: 'top', // or bottom, left, right, and variations
				title: locales.DasboardIPLookup
			});
			new _Tooltip2.default(_this.contactButton, {
				placement: 'top', // or bottom, left, right, and variations
				title: locales.DasboardContactSupport
			});
		}
	}, {
		key: 'setTrial',
		value: function setTrial(storage) {
			if (!storage) return;
			var _this = this;

			var config = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA];
			var userData = storage[_ServiceMeta2.default.STORAGEKEYS.USERDATA];

			if (!config || !userData) return;

			var trial = _Utils2.default.isTrialAvailable(config);

			if (trial > 0) {
				_this.getTrial.click(function () {
					_this.onGetTrialClicked(trial, userData);
				});
				(0, _jquery2.default)('#get-trial-days').text(trial);
				_this.getTrialContainer.css("display", "block");
			}
		}
	}, {
		key: 'setTeaser',
		value: function setTeaser(storage) {
			var _this = this;
			if (!storage) return;

			var config = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA];
			var userData = storage[_ServiceMeta2.default.STORAGEKEYS.USERDATA];
			if (!config || !userData) return;

			if (_Utils2.default.isUserPremium(config)) return;

			var teaserTime = storage[_ServiceMeta2.default.STORAGEKEYS.TEASERNEXT];

			var trial = _Utils2.default.isTrialAvailable(config);

			if (teaserTime !== undefined && _Utils2.default.isInt(teaserTime)) {
				if (teaserTime < _Utils2.default.getDateNow()) {
					chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.TEASERNEXT, _Utils2.default.getDateNow() + 259200), function () {
						_TeaserView2.default.show(trial, userData);
					});
				}
			} else {
				chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.TEASERNEXT, _Utils2.default.getDateNow() + 259200));
			}
		}
	}, {
		key: 'setUpdateAvailable',
		value: function setUpdateAvailable() {
			var _this = this;
			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.VERSIONSTATUS], function (storage) {
				var versionStatusData = storage[_ServiceMeta2.default.STORAGEKEYS.VERSIONSTATUS];

				if (versionStatusData && versionStatusData.hasOwnProperty("action") && versionStatusData.action === "update" && versionStatusData.hasOwnProperty("curversion")) {
					var updateAvalHtml = _Utils2.default.getUpdateHtml(_ServiceMeta2.default.VERSION, versionStatusData.curversion);
					(0, _jquery2.default)('#header-container').prepend((0, _jquery2.default)(updateAvalHtml));
					(0, _jquery2.default)('#update-app').click(function () {
						_UpdateRequiredView2.default.show();
					});
				}
			});
		}
	}, {
		key: 'checkBlockedStatus',
		value: function checkBlockedStatus(storage, locale) {
			var _this = this;

			var config = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA];

			if (config && config["user_status"] == _ServiceMeta2.default.STATUS.BLOCKED && !_Utils2.default.isUserPremium(config)) {

				_BackgroundRequester2.default.request('ProxySetting', 'clearSettings', {}).then(function () {

					var remainingTime = _Utils2.default.getRemainingTime(config["user_statusdata"], locale);
					var remainingTimeTxt = locale.tempBlockTextRemaining.replace('{0}', remainingTime);
					(0, _jquery2.default)('#limit-info-remaining-time').text(remainingTimeTxt);
					(0, _jquery2.default)('#limit-info-upgrade-button').click(_this.onUpgradeButtonClicked.bind(_this));

					_this.limitInfo.css("display", "block");
				});
			}
		}
	}, {
		key: 'checkRateUsTime',
		value: function checkRateUsTime(storage, locale, _this) {
			var isProxyOn = storage[_ServiceMeta2.default.STORAGEKEYS.ISPROXYON];
			var nextRateTime = storage[_ServiceMeta2.default.STORAGEKEYS.RATEUSNEXTTIME];
			var config = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA];

			var nextTime = Date.now() + _ServiceMeta2.default.RATEUS.INTERVAL;

			if (nextRateTime === undefined) {
				chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.RATEUSNEXTTIME, nextTime));
			}

			var rateUsLink = false;
			if (_ServiceMeta2.default.PLATFORM.toLowerCase() == "firefox") rateUsLink = _ServiceMeta2.default.RATEUS.LINKS.FIREFOX;
			if (_ServiceMeta2.default.PLATFORM.toLowerCase() == "chrome") rateUsLink = _ServiceMeta2.default.RATEUS.LINKS.CHROME;
			if (_ServiceMeta2.default.PLATFORM.toLowerCase() == "edge") rateUsLink = _ServiceMeta2.default.RATEUS.LINKS.EDGE;

			if (nextRateTime !== undefined && rateUsLink && nextRateTime < Date.now() && !isProxyOn && config["user_status"] == _ServiceMeta2.default.STATUS.OK) {
				var rateUsBox = (0, _jquery2.default)('#rate-us-box');

				rateUsBox.css('display', 'block');

				var rateUsNowButton = (0, _jquery2.default)('#rate-us-now-button');

				var rateUsTxt = locale.RateNotRate ? locale.RateNotRate.replace("{0}", _ServiceMeta2.default.SERVICE) : locale.RateNotRate;
				rateUsNowButton.text(rateUsTxt);

				rateUsNowButton.click(function () {

					chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.RATEUSNEXTTIME, nextTime), function () {

						rateUsBox.css('display', 'none');
						_Utils2.default.openNewTab(rateUsLink);
					});
				});

				(0, _jquery2.default)('#rate-us-later-button').click(function () {
					chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.RATEUSNEXTTIME, nextTime), function () {
						rateUsBox.css('display', 'none');
					});
				});

				(0, _jquery2.default)('#rate-us-dont-ask-button').click(function () {
					var dontAskTime = Date.now() + _ServiceMeta2.default.RATEUS.DONTASKINTERVAL;

					chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.RATEUSNEXTTIME, dontAskTime), function () {
						rateUsBox.css('display', 'none');
					});
				});
			}
		}
	}, {
		key: 'setEvents',
		value: function setEvents() {
			var _this = this;

			_this.userProfileAuthcode.click(_this.onUserProfileAuthcodeClicked.bind(this));
			_this.userProfileShowAuthcode.click(_this.onUserProfileShowAuthcodeClicked.bind(this));

			_this.userProfileUpgradeButton.click(_this.onUpgradeButtonClicked.bind(this));
			_this.logoutButton.click(_this.onLogoutButtonClicked.bind(this));
			_this.userProfileButton.click(_this.onUserProfileButtonClicked.bind(this));
			_this.ipLookupButton.click(_this.onIpLookupButtonClicked.bind(this));
			_this.contactButton.click(_this.onContactButtonClicked.bind(this));

			_this.sortListByNameButton.click(_this.onSortByNameClicked.bind(this));
			_this.bypasslistFunctionButton.click(_this.onBypasslistFunctionButtonClicked.bind(this));

			_this.sortFunctionContainer.mouseover(_this.overSortFunctionDropdown.bind(this));
			_this.sortFunctionContainer.mouseout(_this.outSortFunctionDropdown.bind(this));

			/* Download events */

			_this.downloadAndroidButton.click(_this.onDownloadEventFunc('android'));
			_this.downloadMacButton.click(_this.onDesktopInfoButtonClicked.bind(this));
			_this.downloadWindowsButton.click(_this.onDesktopInfoButtonClicked.bind(this));
			_this.otherToolsButton.click(_this.onOtherToolsButtonClicked.bind(this));
		}
	}, {
		key: 'onGetTrialClicked',
		value: function onGetTrialClicked(trial, userData) {
			_TrialView2.default.show(trial, userData);
		}
	}, {
		key: 'onOtherToolsButtonClicked',
		value: function onOtherToolsButtonClicked() {
			var _this = this;

			_OtherToolsView2.default.show();
		}
	}, {
		key: 'onDesktopInfoButtonClicked',
		value: function onDesktopInfoButtonClicked() {
			var _this = this;

			_DesktopClientInfoView2.default.show();
		}
	}, {
		key: 'onDownloadEventFunc',
		value: function onDownloadEventFunc(platform) {
			var _this = this;

			return function () {
				_Utils2.default.openPlatformLink(platform);
			};
		}
	}, {
		key: 'setUserProfile',
		value: function setUserProfile(locale) {
			var _this = this;

			//_this.userProfileUsername.text(_this.Storage.configData.name);
			if (_this.Storage.userData.authcode) {
				_this.userProfileAuthcode.text(_this.Storage.userData.authcode);
				(0, _jquery2.default)('#authcode-container').css('display', 'block');
			}

			if (_Utils2.default.isUserPremium(_this.Storage.configData)) {

				var userPremiumAccountExpiration = _Utils2.default.getUserExpirationData(_this.Storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA]["user_premium"]);

				var premiumStatusText = "<p>" + locale.MemberStatusPremium + "</p>" + "<p>" + locale.MemberStatusExpire + " " + userPremiumAccountExpiration + "</p>";

				_this.userProfileStatus.addClass('dashboard-view__user-profile__status--premium');
				_this.userProfileStatus.html(_DOMPurify2.default.sanitize(premiumStatusText, { SAFE_FOR_JQUERY: true }));
				_this.userProfileUpgradeButton.text(locale.MemberStatusPremiumExtend);
			} else {

				var freeStatusText = "<p>" + locale.MemberStatusFree + "</p>";
				_this.userProfileStatus.addClass('dashboard-view__user-profile__status--free');
				_this.userProfileStatus.html(_DOMPurify2.default.sanitize(freeStatusText, { SAFE_FOR_JQUERY: true }));
				_this.userProfileUpgradeButton.text(locale.MemberStatusFreeExtend);
			}
		}
	}, {
		key: 'setNotification',
		value: function setNotification() {
			_BackgroundRequester2.default.request('Notification', 'onPopupOpened', {});
		}
	}, {
		key: 'loadStorageData',
		value: function loadStorageData() {
			return new Promise(function (resolve, reject) {

				chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.USERDATA, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA, _ServiceMeta2.default.STORAGEKEYS.ISPROXYON, _ServiceMeta2.default.STORAGEKEYS.CURRENTPROXY, _ServiceMeta2.default.STORAGEKEYS.RATEUSNEXTTIME, _ServiceMeta2.default.STORAGEKEYS.LOCALE, _ServiceMeta2.default.STORAGEKEYS.ISCOUNTRYSORTED, _ServiceMeta2.default.STORAGEKEYS.LASTSELECTEDTAB, _ServiceMeta2.default.STORAGEKEYS.TEASERNEXT, _ServiceMeta2.default.STORAGEKEYS.LOGINTYPE, _ServiceMeta2.default.STORAGEKEYS.COUNTRYLOCALE], function (storage) {

					resolve(storage);
				});
			});
		}
	}, {
		key: 'loadLocaleFromServer',
		value: function loadLocaleFromServer() {
			var _this = this;

			_Utils2.default.loadLocaleFromServer(_this.App, _this.App, _this.showMaintenanceMessage, _BackgroundRequester2.default, "DashboardView", _jquery2.default);
		}

		/* Helper */

	}, {
		key: 'getSectionByTabId',
		value: function getSectionByTabId(tabId) {
			var _this = this;
			switch (tabId) {
				case 0:
					return _this.freeServerListSection;
					break;
				case 1:
					return _this.premiumServerListSection;
					break;
				case 2:
					return _this.publicServerListSection;
					break;
			}
		}
	}, {
		key: 'getServerListByTabId',
		value: function getServerListByTabId(tabId, serverData) {
			var _this = this;
			switch (tabId) {
				case 0:
					return _ServerList2.default.sortByLoad(serverData.SERVERS, false);
					break;
				case 1:
					return _ServerList2.default.sortByLoad(serverData.PREMIUMSERVERS, false);
					break;
				case 2:
					return _ServerList2.default.sortByLoad(serverData.PUBLICSERVERS, true);
					break;
			}
		}
	}, {
		key: 'buildServerList',
		value: function buildServerList(section, serverList, tabId, sorted) {
			var _this2 = this;

			var _this = this;

			var isUserPremium = _Utils2.default.isUserPremium(_this.Storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA]);

			var listElements = [];

			if (serverList && serverList.isPublic) {
				var isPublic = true;
				serverList = serverList.serverListData;
			}

			_Utils2.default.loadCountryLocale(_BackgroundRequester2.default).then(function (countryLocale) {

				for (var serverKey in serverList) {

					var serverItemId = tabId + "" + serverKey;
					var sortKey = serverItemId;

					var premiumLock = sortOption = "";

					if (tabId == 1 && _this.Storage && !isUserPremium) premiumLock = '<i class="material-icons">lock</i>';

					if (!isUserPremium && premiumLock == "" || premiumLock == "") {
						var sortOption = '<i class="material-icons sort-option" title="Move to top">vertical_align_top</i>';
					}

					var countryCode = isPublic ? serverList[serverKey].CountryCode.toLowerCase() : serverList[serverKey][0].CountryCode.toLowerCase();

					var countryLabel = countryLocale && countryLocale.hasOwnProperty(countryCode.toUpperCase()) ? countryLocale[countryCode.toUpperCase()] : countryCode;

					if (serverList[serverKey].hasOwnProperty("Label")) {
						countryLabel = serverList[serverKey].Label;
					}

					if (isPublic) {
						serverItemId = tabId + "-" + serverKey.replace(':', '-');
						sortKey = tabId + "" + countryCode;
					}

					var isPublicVal = isPublic ? 'y' : 'n';

					var serverItem = '<div id="' + _Sanitize2.default.escpateData(serverItemId) + '" class="server-item" isPublicVal="' + isPublicVal + '" sortkey="' + _Sanitize2.default.escpateData(sortKey) + '" section="' + tabId + '" serverkey="' + _Sanitize2.default.escpateData(serverKey) + '">' + '<a class="server-item__server">' + '<img class="server-item__server__server-flag" src="' + _folders2.default.FLAGS + '/' + _Sanitize2.default.escpateData(countryCode) + '.png">' + '<div class="server-item__server__server-info">' + '<div class="server-item__server__server-info__server-label">' + countryLabel + '</div>' + '</div>' + premiumLock + sortOption + '</a>' + '</div>';

					var jServerItem = (0, _jquery2.default)(serverItem);

					jServerItem.click(_this.onServerSelected.bind(_this2));
					jServerItem.find('.sort-option').click(_this.onPushCountryToTopClicked.bind(_this2));
					jServerItem.mouseover(_this.fadeInSortOption);
					jServerItem.mouseout(_this.fadeOutSortOption);

					var listItem = {
						label: countryLabel,
						html: jServerItem
					};

					listElements.push(listItem);
				}

				if (sorted && isUserPremium) {
					listElements.sort(function (a, b) {
						var labelA = a.label.toUpperCase();
						var labelB = b.label.toUpperCase();

						if (labelA < labelB) return -1;
						if (labelA > labelB) return 1;

						return 0;
					});
				}

				for (var i = 0; i < listElements.length; i++) {
					section.append(listElements[i].html);
				};

				//_this.setSortedCountries(tabId);
				_this.setStickedCountries(tabId);
			});
		}
	}, {
		key: 'setStickedCountries',
		value: function setStickedCountries(tabId) {
			var _this = this;

			if (!_Utils2.default.isUserPremium(_this.Storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA])) return;

			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.STICKEDCOUNTRIES, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA], function (storage) {

				var stickedCountries = storage[_ServiceMeta2.default.STORAGEKEYS.STICKEDCOUNTRIES];
				var section = _this.getSectionByTabId(tabId);
				var uid = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA] ? storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA].uid : "";

				if (!stickedCountries || stickedCountries && !stickedCountries[uid]) return;

				var stickedCountriesOfUser = stickedCountries[uid][tabId];

				for (var i = 0; i < stickedCountriesOfUser.length; i++) {
					var itemSelector = '[sortKey=' + stickedCountriesOfUser[i] + ']';
					var item = (0, _jquery2.default)(itemSelector);

					item.unbind("mouseover");
					item.unbind("mouseout");
					(0, _jquery2.default)(itemSelector + " .sort-option").unbind("click");

					_this.replaceSortOptionWithPinned((0, _jquery2.default)(itemSelector + " .sort-option"));
					section.prepend((0, _jquery2.default)(itemSelector));
				};
			});
		}
	}, {
		key: 'replaceSortOptionWithPinned',
		value: function replaceSortOptionWithPinned(sortOption) {
			var _this = this;
			var pinned = (0, _jquery2.default)("<img class='sort-option__pinned' src='images/pin.png'>");
			pinned.click(_this.onUnpinClicked.bind(_this));

			sortOption.replaceWith(pinned);
		}

		/* Sort Option */

	}, {
		key: 'fadeInSortOption',
		value: function fadeInSortOption() {
			var id = (0, _jquery2.default)(this).attr('id');
			var sortOption = (0, _jquery2.default)('#' + id + " .sort-option");
			sortOption.show();
		}
	}, {
		key: 'fadeOutSortOption',
		value: function fadeOutSortOption(sortOption) {
			var id = (0, _jquery2.default)(this).attr('id');
			var sortOption = (0, _jquery2.default)('#' + id + " .sort-option");
			sortOption.stop().show();
			sortOption.hide();
		}
	}, {
		key: 'freeUserClickedOnPremium',
		value: function freeUserClickedOnPremium() {
			var _this = this;
			var locale = _this.Storage[_ServiceMeta2.default.STORAGEKEYS.LOCALE];

			_UpgradeView2.default.initView();

			if (locale) _Utils2.default.showNotification(locale.PremiumAccountNotTitle, locale.PremiumAccountNotText);
		}

		/* Events */

	}, {
		key: 'onBypasslistFunctionButtonClicked',
		value: function onBypasslistFunctionButtonClicked() {
			var _this = this;

			//if(!Utils.isUserPremium(_this.Storage[ClientMeta.STORAGEKEYS.CONFIGDATA]))
			//	return _this.showBypassFunctionError();

			_BypassConfigView2.default.initView();
		}
	}, {
		key: 'onServerSelected',
		value: function onServerSelected(e) {
			var _this = this;

			var tabId = (0, _jquery2.default)(e.currentTarget).attr('section');
			var serverKey = (0, _jquery2.default)(e.currentTarget).attr('serverKey');
			var isPublicVal = (0, _jquery2.default)(e.currentTarget).attr('isPublicVal');
			var isPublic = isPublicVal == 'y' ? true : false;

			if (tabId == 1 && _this.Storage && !_Utils2.default.isUserPremium(_this.Storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA])) return _this.freeUserClickedOnPremium();

			var serverList = _this.serverList[tabId];
			var searchData = {};

			if (isPublic) {
				var publicServer = [];
				publicServer.push(serverList.serverListData[serverKey]);
				searchData = {
					randomSelectedServer: publicServer,
					serverList: []
				};
			} else {
				var bestServer = _ServerList2.default.getServerByLoad(serverList, serverKey);
				searchData = _ServerList2.default.generateSearchData(bestServer, serverList[serverKey]);
			}

			_ProxySearchView2.default.initView(searchData);
		}
	}, {
		key: 'onTabChanged',
		value: function onTabChanged(tabId) {
			var _this = this;
			chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.LASTSELECTEDTAB, tabId), function () {
				_this.loadServerList(tabId);
			});
		}
	}, {
		key: 'onUpgradeButtonClicked',
		value: function onUpgradeButtonClicked() {

			_GetPremiumView2.default.show();
			//UpgradeView.initView();
		}
	}, {
		key: 'onLogoutButtonClicked',
		value: function onLogoutButtonClicked() {
			var _this = this;

			_BackgroundRequester2.default.request('ProxySetting', 'clearSettings', {}).then(function () {

				chrome.storage.local.remove([_ServiceMeta2.default.STORAGEKEYS.USERDATA, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATATTL, _ServiceMeta2.default.STORAGEKEYS.CONFIGHARDTTL, _ServiceMeta2.default.STORAGEKEYS.LASTLOGOUTREASON], function () {
					_LoginView2.default.initView();
				});
			});

			/*
   todo:
   		bgService.request("proxy", "clearProxySetting", {});
             bgService.request("user", "clear", {});
             loginPage.load(error_msg);
             $(".member").remove();
   */
		}
	}, {
		key: 'onUserProfileButtonClicked',
		value: function onUserProfileButtonClicked() {

			var _this = this;

			_UserProfile3View2.default.initView();
		}
	}, {
		key: 'onIpLookupButtonClicked',
		value: function onIpLookupButtonClicked() {
			chrome.storage.local.get(_ServiceMeta2.default.STORAGEKEYS.IPLOOKUPURL, function (storage) {

				var ipLookupUrl = storage[_ServiceMeta2.default.STORAGEKEYS.IPLOOKUPURL];

				if (ipLookupUrl) _Utils2.default.openNewTab(ipLookupUrl);
			});
		}
	}, {
		key: 'onContactButtonClicked',
		value: function onContactButtonClicked() {
			var _this = this;

			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.BASELINK, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA], function (storage) {
				if (!storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK]) return;
				var configData = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA];
				var supportLink = storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK] + _endpoints2.default.SUPPORT;
				if (configData && configData.hasOwnProperty("support_url")) supportLink = configData["support_url"];
				_Utils2.default.openNewTab(supportLink);
			});
		}
	}, {
		key: 'showSortFunctionError',
		value: function showSortFunctionError(byname) {
			var _this = this;

			var gifView = new _GifView2.default("Pinned Countries", "Move your favorite countries to the top of the server list", _ServiceMeta2.default.IMAGES.FEATUREPINGIF);

			if (byname) gifView = new _GifView2.default("Country Sorting", "With this function you can sort the server list by country name", _ServiceMeta2.default.IMAGES.FEATURESORTGIF);

			gifView.show();
		}
	}, {
		key: 'onPushCountryToTopClicked',
		value: function onPushCountryToTopClicked(e) {
			e.stopPropagation();

			var _this = this;

			var countryEl = (0, _jquery2.default)(e.currentTarget).parent().parent();
			var countryElId = countryEl.attr('sortKey');
			var sectionId = parseInt(countryEl.attr('section'));
			var section = _this.getSectionByTabId(sectionId);

			if (!_Utils2.default.isUserPremium(_this.Storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA])) return _this.showSortFunctionError();

			_Sticked2.default.pin(countryElId, sectionId).then(function () {

				var currentTabSection = _this.getSectionByTabId(sectionId);
				currentTabSection.html("");
				_this.loadServerList(sectionId);

				(0, _jquery2.default)('#free-server-list').parent().scrollTop(0);
			}, function () {
				_this.showSortFunctionError();
			});
		}
	}, {
		key: 'onUnpinClicked',
		value: function onUnpinClicked(e) {
			var _this = this;
			e.stopPropagation();

			var countryEl = (0, _jquery2.default)(e.currentTarget).parent().parent();
			var countryElId = countryEl.attr('sortKey');
			var sectionId = parseInt(countryEl.attr('section'));

			_Sticked2.default.unpin(countryElId, sectionId).then(function () {
				var currentTabSection = _this.getSectionByTabId(sectionId);
				currentTabSection.html("");
				_this.loadServerList(sectionId);
			});
		}
	}, {
		key: 'overSortFunctionDropdown',
		value: function overSortFunctionDropdown() {
			var _this = this;

			_this.sortFunctionDropdownContent.show();
			var currentTabId = _this.Tab.current;

			_this.isTabSorted(currentTabId).then(function (isSorted) {

				if (isSorted) return _this.isSortedIcon.show();

				_this.isSortedIcon.hide();
			});
		}
	}, {
		key: 'outSortFunctionDropdown',
		value: function outSortFunctionDropdown() {
			var _this = this;
			_this.sortFunctionDropdownContent.hide();
		}
	}, {
		key: 'isTabSorted',
		value: function isTabSorted(tabId) {

			return new Promise(function (resolve, reject) {
				chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.ISCOUNTRYSORTED, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA], function (storage) {

					var isCountrySorted = storage[_ServiceMeta2.default.STORAGEKEYS.ISCOUNTRYSORTED];
					var uid = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA] ? storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA].uid : "";

					if (isCountrySorted && isCountrySorted[uid] && isCountrySorted[uid][tabId]) return resolve(true);

					return resolve(false);
				});
			});
		}

		/* Sort option actions */

	}, {
		key: 'onSortByNameClicked',
		value: function onSortByNameClicked() {
			var _this = this;

			_Utils2.default.hideElement(_this.sortFunctionDropdownContent);

			if (!_Utils2.default.isUserPremium(_this.Storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA])) return _this.showSortFunctionError(true);

			var currentTabId = _this.Tab.current;
			var currentTabSection = _this.getSectionByTabId(currentTabId);

			_this.isTabSorted(currentTabId).then(function (isSorted) {

				if (!isSorted) return _this.sortListByName(currentTabId, currentTabSection);

				_this.resetSortedCountries(currentTabId, currentTabSection).then(function () {
					location.reload();
				});
			});
		}
	}, {
		key: 'sortListByName',
		value: function sortListByName(currentTabId, currentTabSection) {
			var _this = this;

			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.ISCOUNTRYSORTED, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA], function (storage) {

				var isCountrySorted = storage[_ServiceMeta2.default.STORAGEKEYS.ISCOUNTRYSORTED];
				var uid = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA] ? storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA].uid : "";

				if (!isCountrySorted) isCountrySorted = {};

				if (!isCountrySorted[uid]) {

					isCountrySorted[uid] = {
						0: false,
						1: false,
						2: false
					};
				}

				isCountrySorted[uid][currentTabId] = true;

				chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.ISCOUNTRYSORTED, isCountrySorted), function () {

					currentTabSection.html("");
					_this.loadServerList(currentTabId, true);
				});
			});
		}
	}, {
		key: 'resetSortedCountries',
		value: function resetSortedCountries(currentTabId, currentTabSection) {
			var _this = this;
			return new Promise(function (resolve, reject) {

				chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.ISCOUNTRYSORTED, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA], function (storage) {

					var isCountrySorted = storage[_ServiceMeta2.default.STORAGEKEYS.ISCOUNTRYSORTED];
					var uid = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA] ? storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA].uid : "";

					if (!isCountrySorted || isCountrySorted && !isCountrySorted[uid]) return resolve();

					isCountrySorted[uid][currentTabId] = false;

					chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.ISCOUNTRYSORTED, isCountrySorted), function () {
						resolve();
					});
				});
			});
		}
	}, {
		key: 'onDisconnectButtonClicked',
		value: function onDisconnectButtonClicked() {

			_BackgroundRequester2.default.request('ProxySetting', 'clearSettings', {}).then(function () {

				location.reload();
			});
		}
	}, {
		key: 'onPermissionChanged',
		value: function onPermissionChanged(isValid) {

			if (isValid === false) _PermissionView2.default.show();
		}
	}, {
		key: 'onUserProfileAuthcodeClicked',
		value: function onUserProfileAuthcodeClicked() {
			var _this = this;
			var authcode = (0, _jquery2.default)('#user-profile-authcode').text().toUpperCase();

			if (_ServiceMeta2.default.PLATFORM.toLowerCase() === 'firefox') {
				_this.fallbackCopyTextToClipboard(authcode);
			} else {
				_this.copyTextToClipboard(authcode);
			}

			_this.userProfileAuthcode.css('display', 'none');
			_this.userProfileAuthcodeCopied.css('display', 'block');

			setTimeout(function () {
				_this.userProfileAuthcodeCopied.css('display', 'none');
				_this.userProfileAuthcode.css('display', 'block');
			}, 5000);
		}
	}, {
		key: 'onUserProfileShowAuthcodeClicked',
		value: function onUserProfileShowAuthcodeClicked() {
			var _this = this;
			_this.userProfileShowAuthcode.css('display', 'none');
			_this.userProfileAuthcode.css('display', 'block');
		}
	}]);

	return DashboardView;
}();

exports.default = new DashboardView();

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(3);

var _jquery2 = _interopRequireDefault(_jquery);

var _folders = __webpack_require__(1);

var _folders2 = _interopRequireDefault(_folders);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _BackgroundRequester = __webpack_require__(4);

var _BackgroundRequester2 = _interopRequireDefault(_BackgroundRequester);

var _DashboardView = __webpack_require__(12);

var _DashboardView2 = _interopRequireDefault(_DashboardView);

var _Sanitize = __webpack_require__(7);

var _Sanitize2 = _interopRequireDefault(_Sanitize);

var _LoginView = __webpack_require__(6);

var _LoginView2 = _interopRequireDefault(_LoginView);

var _localeFallback = __webpack_require__(5);

var _localeFallback2 = _interopRequireDefault(_localeFallback);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UpgradeView = function () {
	function UpgradeView() {
		_classCallCheck(this, UpgradeView);

		this.template = _folders2.default.VIEWS + '/upgrade.html';
		this.header = _folders2.default.VIEWS + '/header.html';
	}

	_createClass(UpgradeView, [{
		key: 'initView',
		value: function initView() {
			var _this = this;

			this.App = (0, _jquery2.default)('#app');
			this.App.html("");

			_Utils2.default.getLocaleInStorage().then(_this.loadTemplate.bind(this), _this.loadLocaleFromServer.bind(this));
		}
	}, {
		key: 'loadTemplate',
		value: function loadTemplate(locale) {
			var _this = this;

			_jquery2.default.get(_this.header, function (header) {
				_this.App.append(header);
				_jquery2.default.get(_this.template, function (template) {

					_this.loadStorageData().then(function (storage) {
						_this.Storage = storage;

						var loadedTemplate = _Utils2.default.loadTemplate(template, locale);
						_this.App.append(loadedTemplate);

						_this.selectElements();

						// Setting all events for selected elements
						_this.setEvents();
						_this.setHeaderBackButton();

						_this.upgradeView.css("display", "none");

						_this.loadProductsFromServer().then(_this.onProductsLoaded.bind(_this)).catch(_this.onProductError.bind(_this));
					});
				}, "html");
			}, "html");
		}
	}, {
		key: 'selectElements',
		value: function selectElements() {
			var _this = this;

			_this.headerLogo = (0, _jquery2.default)('#header-logo');

			_this.productTable = (0, _jquery2.default)('#product-table');
			_this.productTableBody = (0, _jquery2.default)('#product-table-body');

			_this.paymentContainer = (0, _jquery2.default)('#payment-container');

			_this.nextToPayment = (0, _jquery2.default)('#next-to-payment');
			_this.backToProduct = (0, _jquery2.default)('#back-to-product');

			_this.upgradeView = (0, _jquery2.default)('#upgrade-view');

			_this.errorMessage = (0, _jquery2.default)('#error_message');

			_this.paymentButton = (0, _jquery2.default)('#payment-button');

			_this.setServiceElements();
		}
	}, {
		key: 'setServiceElements',
		value: function setServiceElements() {
			var _this = this;
			_this.headerLogo.attr('src', _ServiceMeta2.default.IMAGES.HEADERLOGO);
		}
	}, {
		key: 'setEvents',
		value: function setEvents() {
			var _this = this;

			_this.paymentButton.click(_this.onPaymentButtonClicked.bind(this));
			_this.nextToPayment.click(_this.onNextToPaymentClicked.bind(this));
			_this.backToProduct.click(_this.onBackToProductClicked.bind(this));
		}
	}, {
		key: 'setHeaderBackButton',
		value: function setHeaderBackButton() {
			var _this = this;
			_this.headerBackButton = (0, _jquery2.default)('#header-back-button');
			_this.headerBackButton.css('display', 'block');
			_this.headerBackButton.click(_this.onHeaderBackButtonClicked.bind(this));
		}
	}, {
		key: 'loadProductsFromServer',
		value: function loadProductsFromServer() {
			var _this = this;

			return new Promise(function (resolve, reject) {

				_this.App.append('<div class="loadingimg"><img src="images/loading.gif"></div>');

				chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.USERDATA], function (storage) {
					var userdata = storage[_ServiceMeta2.default.STORAGEKEYS.USERDATA];
					_BackgroundRequester2.default.request('api', 'getProducts', {
						authcode: userdata && userdata.authcode ? userdata.authcode.toLowerCase() : ""
					}).then(function (response) {

						(0, _jquery2.default)('.loadingimg').css('display', 'none');

						if (_Utils2.default.isResponse200(response)) {

							var products = response["products"];
							var paymentMethods = response["payment_methods"];

							if (Array.isArray(products) && Array.isArray(paymentMethods)) {

								products.forEach(function (productPackage) {
									var checked = productPackage.default ? 'checked="checked"' : '';
									var packageItem = '<tr><td>' + '<input type="radio" ' + checked + ' name="package" value="' + _Sanitize2.default.escpateData(productPackage.id) + '"></td>' + '<td>' + _Sanitize2.default.escpateData(productPackage.title) + '</td>' + '<td>' + _Sanitize2.default.escpateData(productPackage.price) + ' ' + _Sanitize2.default.escpateData(productPackage.currency) + '</td></tr>';

									_this.productTableBody.append(packageItem);
								});

								paymentMethods.forEach(function (paymentMethod) {

									var paymentItem = '<div class="paymentItem">' + '<input type="radio" name="provider" value="' + _Sanitize2.default.escpateData(paymentMethod.endpoint) + '">' + '<img class="upgrade-view__payment-image" alt="' + _Sanitize2.default.escpateData(paymentMethod.title) + '" title="' + _Sanitize2.default.escpateData(paymentMethod.title) + '" src="' + _Sanitize2.default.escpateData(paymentMethod.logosrc) + '">' + '</div>';

									_this.paymentContainer.append(paymentItem);
								});

								(0, _jquery2.default)('.upgrade-view__payment-image').click(function () {
									(0, _jquery2.default)(this).prev().prop("checked", true);
								});
							} else {
								reject({ code: 0, msg: "Response is not array" });
								return;
							}

							resolve();
						} else {
							reject({ code: 1, response: response });
						}
					});
				});
			});
		}
	}, {
		key: 'loadStorageData',
		value: function loadStorageData() {
			return new Promise(function (resolve, reject) {

				chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.USERDATA, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA], function (storage) {

					resolve(storage);
				});
			});
		}
	}, {
		key: 'loadLocaleFromServer',
		value: function loadLocaleFromServer() {
			var _this = this;
			_Utils2.default.loadLocaleFromServer(_this.App, _this.App, _this.showMaintenanceMessage, _BackgroundRequester2.default, "UpgradeView", _jquery2.default);
		}

		/* Modifier */

	}, {
		key: 'makeButtonInactive',
		value: function makeButtonInactive(button) {
			button.unbind('click');
			button.addClass('btn--inactive');
		}
	}, {
		key: 'makeButtonActive',
		value: function makeButtonActive(button) {
			button.click(this.onPaymentButtonClicked.bind(this));
			button.removeClass('btn--inactive');
		}
	}, {
		key: 'setLoading',
		value: function setLoading() {
			var _this = this;

			_this.errorMessage.html(_ServiceMeta2.default.LOADINGIMG);
			_this.makeButtonInactive(_this.paymentButton);
		}
	}, {
		key: 'unsetLoading',
		value: function unsetLoading() {
			var _this = this;

			_this.makeButtonActive(_this.paymentButton);
		}
	}, {
		key: 'displayErrors',
		value: function displayErrors(error) {
			var _this = this;
			_this.errorMessage.html("");
			_this.errorMessage.text(error);
		}

		/* Events */

	}, {
		key: 'onProductsLoaded',
		value: function onProductsLoaded() {
			var _this = this;

			_this.upgradeView.css("display", "block");
		}
	}, {
		key: 'showError',
		value: function showError(msg) {
			var _this = this;
			_this.upgradeView.css("display", "block");
			_this.upgradeView.html("<p>" + msg + "</p>");
		}
	}, {
		key: 'showMaintenanceMessage',
		value: function showMaintenanceMessage(message) {
			var _this = this;
			(0, _jquery2.default)('#maintenance-msg').text(message);
			(0, _jquery2.default)('#maintenance-mode-close-icon').click(function () {
				location.reload();
			});
			(0, _jquery2.default)('#upgrade-mode').css('display', 'none');
			(0, _jquery2.default)('#maintenance-mode').css('display', 'block');
			(0, _jquery2.default)('#header-container').css('display', 'none');
		}
	}, {
		key: 'onProductError',
		value: function onProductError(error) {
			var _this = this;

			if (error.code === 0) {
				_this.showError(error.msg);
				return;
			}

			if (error.code === 1 && error.response) {
				var response = error.response;
				if (_Utils2.default.isResponseMinus20(response)) return _this.showError(response.message);

				if (_Utils2.default.isResponseMinusOne(response)) {
					return _Utils2.default.showMinusOneError(_this.showError.bind(_this));
				}

				if (_Utils2.default.isResponseAuthError(response)) {
					chrome.storage.local.remove([_ServiceMeta2.default.STORAGEKEYS.USERDATA], function () {
						chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.LOCALE], function (storage) {
							_LoginView2.default.initView(_Utils2.default.getFallbackLocale("AuthFailed", storage[_ServiceMeta2.default.STORAGEKEYS.LOCALE], _localeFallback2.default));
						});
					});
				}

				if (_Utils2.default.isMaintenanceMode(response)) {
					_this.showMaintenanceMessage(response.message);
				}
			}
		}
	}, {
		key: 'onPaymentButtonClicked',
		value: function onPaymentButtonClicked() {
			var _this = this;

			var selectedPackage = (0, _jquery2.default)('#product-table-body input:checked');
			var selectedPayment = (0, _jquery2.default)('#payment-container input:checked');

			var productId = selectedPackage.val();
			var paymentPath = selectedPayment.val();

			if (!paymentPath) return _this.displayErrors(["Please select a payment method"]);

			_this.setLoading();

			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.USERDATA], function (storage) {

				var paymentData = {
					productid: productId,
					endpoint: paymentPath
				};

				var userdata = storage[_ServiceMeta2.default.STORAGEKEYS.USERDATA];
				paymentData.authcode = userdata && userdata.authcode ? userdata.authcode.toLowerCase() : "";
				_BackgroundRequester2.default.request('api', 'getPaymentLink', paymentData).then(function (response) {

					_this.unsetLoading();

					if (_Utils2.default.isResponse200(response)) {
						_Utils2.default.openNewTab(response.payat);
						chrome.storage.local.remove(_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA);
						window.close();
					} else {

						if (_Utils2.default.isResponseMinus20(response)) return _this.displayErrors(response.message);

						if (_Utils2.default.isResponseMinusOne(response)) {
							return _Utils2.default.showMinusOneError(_this.displayErrors.bind(_this));
						}

						if (_Utils2.default.isResponseAuthError(response)) {
							chrome.storage.local.remove([_ServiceMeta2.default.STORAGEKEYS.USERDATA], function () {
								chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.LOCALE], function (storage) {
									_LoginView2.default.initView(_Utils2.default.getFallbackLocale("AuthFailed", storage[_ServiceMeta2.default.STORAGEKEYS.LOCALE], _localeFallback2.default));
								});
							});
						}

						if (_Utils2.default.isMaintenanceMode(response)) {
							_this.showMaintenanceMessage(response.message);
						}
					}
				});
			});
		}
	}, {
		key: 'onHeaderBackButtonClicked',
		value: function onHeaderBackButtonClicked() {
			var _this = this;

			_DashboardView2.default.initView();
		}
	}, {
		key: 'onNextToPaymentClicked',
		value: function onNextToPaymentClicked() {
			var _this = this;
			(0, _jquery2.default)('#product-step').css('display', 'none');
			(0, _jquery2.default)('#payment-step').css('display', 'block');
		}
	}, {
		key: 'onBackToProductClicked',
		value: function onBackToProductClicked() {
			var _this = this;
			(0, _jquery2.default)('#product-step').css('display', 'block');
			(0, _jquery2.default)('#payment-step').css('display', 'none');
		}
	}]);

	return UpgradeView;
}();

exports.default = new UpgradeView();

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(3);

var _jquery2 = _interopRequireDefault(_jquery);

var _folders = __webpack_require__(1);

var _folders2 = _interopRequireDefault(_folders);

var _BackgroundRequester = __webpack_require__(4);

var _BackgroundRequester2 = _interopRequireDefault(_BackgroundRequester);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _Sanitize = __webpack_require__(7);

var _Sanitize2 = _interopRequireDefault(_Sanitize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LanguageView = function () {
	function LanguageView() {
		_classCallCheck(this, LanguageView);

		this.template = _folders2.default.VIEWS + '/language.html';
		this.header = _folders2.default.VIEWS + '/header.html';
		this.loadingSpin = _folders2.default.VIEWS + '/loading-tmp.html';
	}

	_createClass(LanguageView, [{
		key: 'initView',
		value: function initView() {
			this.App = (0, _jquery2.default)('#app');
			this.App.html("");

			var _this = this;
			_jquery2.default.get(_this.header, function (header) {
				_this.App.append(header);
				_this.selectElements();
				_jquery2.default.get(_this.loadingSpin, function (loadingSpin) {
					_this.App.append(loadingSpin);
					_jquery2.default.get(_this.template, function (template) {
						_this.App.append(template);
						_this.loadLanguageList();
					}, "html");
				}, "html");
			}, "html");
		}
	}, {
		key: 'selectElements',
		value: function selectElements() {
			var _this = this;

			_this.headerLogo = (0, _jquery2.default)('#header-logo');
			_this.headerVersion = (0, _jquery2.default)('#header-version');

			_this.setServiceElements();
		}
	}, {
		key: 'setServiceElements',
		value: function setServiceElements() {
			var _this = this;
			_this.headerLogo.attr('src', _ServiceMeta2.default.IMAGES.HEADERLOGO);
			_this.headerVersion.text('v. ' + _ServiceMeta2.default.VERSION);
		}
	}, {
		key: 'showError',
		value: function showError(error) {
			var _this = this;
			(0, _jquery2.default)("#loading-spin").css({ display: "none" });
			if (error) return (0, _jquery2.default)('#lang-list-error').text(error);
			(0, _jquery2.default)('#lang-list-error').text("Unknow error, contact support");
		}
	}, {
		key: 'showMaintenanceMessage',
		value: function showMaintenanceMessage(message) {
			var _this = this;
			(0, _jquery2.default)("#loading-spin").css({ display: "none" });
			(0, _jquery2.default)('#maintenance-msg').text(message);
			(0, _jquery2.default)('#maintenance-mode-close-icon').click(function () {
				location.reload();
			});
			(0, _jquery2.default)('#maintenance-mode').css('display', 'block');
			(0, _jquery2.default)('#language-mode').css('display', 'none');
			(0, _jquery2.default)('#header-container').css('display', 'none');
		}
	}, {
		key: 'loadLanguageList',
		value: function loadLanguageList() {
			var _this = this;
			_BackgroundRequester2.default.request("api", "getLanguage", {}).then(function (response) {

				if (_Utils2.default.isResponse200(response)) {

					(0, _jquery2.default)("#loading-spin").css({ display: "none" });

					for (var lang in response.languages) {
						var langItem = response.languages[lang];
						(0, _jquery2.default)(".lang-list ul").append('<li data="' + _Sanitize2.default.escpateData(langItem.id) + '"><a href="#"">' + _Sanitize2.default.escpateData(langItem.native) + '</a></li>');
					}

					var languageItems = (0, _jquery2.default)(".lang-list li");
					languageItems.click(_this.onLangSelected);
				}

				if (_Utils2.default.isResponseMinus20(response)) return _this.showError(response.message);

				if (_Utils2.default.isResponseMinusOne(response)) {
					return _Utils2.default.showMinusOneError(_this.showError.bind(_this));
				}

				if (_Utils2.default.isMaintenanceMode(response)) {
					_this.showMaintenanceMessage(response.message);
				}
			});
		}
	}, {
		key: 'onLangSelected',
		value: function onLangSelected() {
			var selectedLanguage = (0, _jquery2.default)(this);

			chrome.storage.local.set({ language: selectedLanguage.attr("data") }, function () {
				chrome.storage.local.remove(_ServiceMeta2.default.STORAGEKEYS.LOCALE, function () {
					location.reload();
				});
			});
		}
	}]);

	return LanguageView;
}();

exports.default = new LanguageView();

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var exports = module.exports = function SHA (algorithm) {
  algorithm = algorithm.toLowerCase()

  var Algorithm = exports[algorithm]
  if (!Algorithm) throw new Error(algorithm + ' is not supported (we accept pull requests)')

  return new Algorithm()
}

exports.sha = __webpack_require__(39)
exports.sha1 = __webpack_require__(44)
exports.sha224 = __webpack_require__(45)
exports.sha256 = __webpack_require__(23)
exports.sha384 = __webpack_require__(46)
exports.sha512 = __webpack_require__(24)


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	PING: '/api2/p',
	TIER: '/api2/t/u',
	LANGUAGELIST: '/api2/l/l',
	GETLOCALE: '/api2/l/g',
	CONFIG: '/api/c/e',
	TICKETTOKEN: '/api/misc/persist',
	REST: '/api',
	REST2: '/api2',
	FORGOTPASS: '/api/user/forgotpassword',
	PRODUCTS: '/api2/i/p',
	PROFILE: '/api/user/profile',
	AUTOPROXY: '/debug',
	FEEDBACK: '/api2/m/feedback',
	NOTIFICATION: '/api/user/profile/notification',
	SUPPORT: '/support',
	DISCONNECTS: '/api/misc/disconnects',
	RESENDACTIVATION: '/api/user/activation/resend',
	CLOSEACCOUNT: '/api2/user/closeaccount',
	TRIAL: '/api2/user/trial',
	CLIENTUPDATES: '/api2/cu',
	CREATEAUTHCODE: '/api2/r6',
	LOGINAUTHCODE: '/api2/c/1'
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(3);

var _jquery2 = _interopRequireDefault(_jquery);

var _folders = __webpack_require__(1);

var _folders2 = _interopRequireDefault(_folders);

var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _LoginView = __webpack_require__(6);

var _LoginView2 = _interopRequireDefault(_LoginView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DesktopClientInfoView = function () {
	function DesktopClientInfoView() {
		_classCallCheck(this, DesktopClientInfoView);

		this.template = _folders2.default.VIEWS + '/desktopclient-info.html';
	}

	_createClass(DesktopClientInfoView, [{
		key: 'show',
		value: function show() {
			var _this = this;

			this.App = (0, _jquery2.default)('#app');
			this.App.html("");

			_jquery2.default.get(_this.template, function (template) {

				_this.App.append(template);
				_this.selectElements();
			}, "html");
		}
	}, {
		key: 'selectElements',
		value: function selectElements() {
			var _this = this;

			_this.closeButton = (0, _jquery2.default)('#dc-info-close');
			_this.downloadButton = (0, _jquery2.default)('#dw-desktop-client');

			_this.setEvents();
		}
	}, {
		key: 'setEvents',
		value: function setEvents() {
			var _this = this;

			_this.closeButton.click(_this.onCloseButtonClicked.bind(this));
			_this.downloadButton.click(_this.onDownloadButtonClicked.bind(this));
		}
	}, {
		key: 'onCloseButtonClicked',
		value: function onCloseButtonClicked() {
			var _this = this;

			location.reload();
		}
	}, {
		key: 'onDownloadButtonClicked',
		value: function onDownloadButtonClicked() {
			var _this = this;

			_Utils2.default.openPlatformLink('desktop');
		}
	}]);

	return DesktopClientInfoView;
}();

exports.default = new DesktopClientInfoView();

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(3);

var _jquery2 = _interopRequireDefault(_jquery);

var _folders = __webpack_require__(1);

var _folders2 = _interopRequireDefault(_folders);

var _BackgroundRequester = __webpack_require__(4);

var _BackgroundRequester2 = _interopRequireDefault(_BackgroundRequester);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _endpoints = __webpack_require__(16);

var _endpoints2 = _interopRequireDefault(_endpoints);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PermissionView = function () {
  function PermissionView() {
    _classCallCheck(this, PermissionView);

    this.template = _folders2.default.VIEWS + '/permission.html';
  }

  _createClass(PermissionView, [{
    key: 'show',
    value: function show() {
      var _this = this;

      this.App = (0, _jquery2.default)('#app');
      this.App.html("");

      _jquery2.default.get(_this.template, function (template) {

        _this.App.append(template);
        _this.selectElements();
        _BackgroundRequester2.default.request('PermissionController', 'registerView', {}, true).then(_this.onPermissionChanged.bind(this));
      }, "html");
    }
  }, {
    key: 'selectElements',
    value: function selectElements() {
      var _this = this;

      _this.contactSupportButton = (0, _jquery2.default)('#contact-support');

      _this.permFixGif = (0, _jquery2.default)('#perm-fix-gif');
      _this.setPermFixGif();

      _this.setEvents();
    }
  }, {
    key: 'setPermFixGif',
    value: function setPermFixGif() {
      var _this = this;

      chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.BASELINK], function (storage) {
        var permFixGifImage = storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK] ? storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK] + _ServiceMeta2.default.IMAGES.PERMFIXGIF : "";
        _this.permFixGif.attr('src', permFixGifImage);
      });
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {
      var _this = this;
      _this.contactSupportButton.click(_this.onContactButtonClicked.bind(this));
    }
  }, {
    key: 'onContactButtonClicked',
    value: function onContactButtonClicked() {
      chrome.storage.local.get(_ServiceMeta2.default.STORAGEKEYS.BASELINK, function (storage) {
        if (!storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK]) return;

        _Utils2.default.openNewTab(storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK] + _endpoints2.default.SUPPORT);
      });
    }
  }, {
    key: 'onPermissionChanged',
    value: function onPermissionChanged(isValid) {

      if (isValid === true) location.reload();
    }
  }]);

  return PermissionView;
}();

exports.default = new PermissionView();

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_popper_js__ = __webpack_require__(54);
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.3.2
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */


/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var DEFAULT_OPTIONS = {
  container: false,
  delay: 0,
  html: false,
  placement: 'top',
  title: '',
  template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  trigger: 'hover focus',
  offset: 0,
  arrowSelector: '.tooltip-arrow, .tooltip__arrow',
  innerSelector: '.tooltip-inner, .tooltip__inner'
};

var Tooltip = function () {
  /**
   * Create a new Tooltip.js instance
   * @class Tooltip
   * @param {HTMLElement} reference - The DOM node used as reference of the tooltip (it can be a jQuery element).
   * @param {Object} options
   * @param {String} options.placement='top'
   *      Placement of the popper accepted values: `top(-start, -end), right(-start, -end), bottom(-start, -end),
   *      left(-start, -end)`
   * @param {String} options.arrowSelector='.tooltip-arrow, .tooltip__arrow' - className used to locate the DOM arrow element in the tooltip.
   * @param {String} options.innerSelector='.tooltip-inner, .tooltip__inner' - className used to locate the DOM inner element in the tooltip.
   * @param {HTMLElement|String|false} options.container=false - Append the tooltip to a specific element.
   * @param {Number|Object} options.delay=0
   *      Delay showing and hiding the tooltip (ms) - does not apply to manual trigger type.
   *      If a number is supplied, delay is applied to both hide/show.
   *      Object structure is: `{ show: 500, hide: 100 }`
   * @param {Boolean} options.html=false - Insert HTML into the tooltip. If false, the content will inserted with `textContent`.
   * @param {String} [options.template='<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>']
   *      Base HTML to used when creating the tooltip.
   *      The tooltip's `title` will be injected into the `.tooltip-inner` or `.tooltip__inner`.
   *      `.tooltip-arrow` or `.tooltip__arrow` will become the tooltip's arrow.
   *      The outermost wrapper element should have the `.tooltip` class.
   * @param {String|HTMLElement|TitleFunction} options.title='' - Default title value if `title` attribute isn't present.
   * @param {String} [options.trigger='hover focus']
   *      How tooltip is triggered - click, hover, focus, manual.
   *      You may pass multiple triggers; separate them with a space. `manual` cannot be combined with any other trigger.
   * @param {Boolean} options.closeOnClickOutside=false - Close a popper on click outside of the popper and reference element. This has effect only when options.trigger is 'click'.
   * @param {String|HTMLElement} options.boundariesElement
   *      The element used as boundaries for the tooltip. For more information refer to Popper.js'
   *      [boundariesElement docs](https://popper.js.org/popper-documentation.html)
   * @param {Number|String} options.offset=0 - Offset of the tooltip relative to its reference. For more information refer to Popper.js'
   *      [offset docs](https://popper.js.org/popper-documentation.html)
   * @param {Object} options.popperOptions={} - Popper options, will be passed directly to popper instance. For more information refer to Popper.js'
   *      [options docs](https://popper.js.org/popper-documentation.html)
   * @return {Object} instance - The generated tooltip instance
   */
  function Tooltip(reference, options) {
    classCallCheck(this, Tooltip);

    _initialiseProps.call(this);

    // apply user options over default ones
    options = _extends({}, DEFAULT_OPTIONS, options);

    reference.jquery && (reference = reference[0]);

    // cache reference and options
    this.reference = reference;
    this.options = options;

    // get events list
    var events = typeof options.trigger === 'string' ? options.trigger.split(' ').filter(function (trigger) {
      return ['click', 'hover', 'focus'].indexOf(trigger) !== -1;
    }) : [];

    // set initial state
    this._isOpen = false;
    this._popperOptions = {};

    // set event listeners
    this._setEventListeners(reference, events, options);
  }

  //
  // Public methods
  //

  /**
   * Reveals an element's tooltip. This is considered a "manual" triggering of the tooltip.
   * Tooltips with zero-length titles are never displayed.
   * @method Tooltip#show
   * @memberof Tooltip
   */


  /**
   * Hides an element’s tooltip. This is considered a “manual” triggering of the tooltip.
   * @method Tooltip#hide
   * @memberof Tooltip
   */


  /**
   * Hides and destroys an element’s tooltip.
   * @method Tooltip#dispose
   * @memberof Tooltip
   */


  /**
   * Toggles an element’s tooltip. This is considered a “manual” triggering of the tooltip.
   * @method Tooltip#toggle
   * @memberof Tooltip
   */


  /**
   * Updates the tooltip's title content
   * @method Tooltip#updateTitleContent
   * @memberof Tooltip
   * @param {String|HTMLElement} title - The new content to use for the title
   */


  //
  // Private methods
  //

  createClass(Tooltip, [{
    key: '_create',


    /**
     * Creates a new tooltip node
     * @memberof Tooltip
     * @private
     * @param {HTMLElement} reference
     * @param {String} template
     * @param {String|HTMLElement|TitleFunction} title
     * @param {Boolean} allowHtml
     * @return {HTMLElement} tooltipNode
     */
    value: function _create(reference, template, title, allowHtml) {
      // create tooltip element
      var tooltipGenerator = window.document.createElement('div');
      tooltipGenerator.innerHTML = template.trim();
      var tooltipNode = tooltipGenerator.childNodes[0];

      // add unique ID to our tooltip (needed for accessibility reasons)
      tooltipNode.id = 'tooltip_' + Math.random().toString(36).substr(2, 10);

      // set initial `aria-hidden` state to `false` (it's visible!)
      tooltipNode.setAttribute('aria-hidden', 'false');

      // add title to tooltip
      var titleNode = tooltipGenerator.querySelector(this.options.innerSelector);
      this._addTitleContent(reference, title, allowHtml, titleNode);

      // return the generated tooltip node
      return tooltipNode;
    }
  }, {
    key: '_addTitleContent',
    value: function _addTitleContent(reference, title, allowHtml, titleNode) {
      if (title.nodeType === 1 || title.nodeType === 11) {
        // if title is a element node or document fragment, append it only if allowHtml is true
        allowHtml && titleNode.appendChild(title);
      } else if (isFunction(title)) {
        // if title is a function, call it and set textContent or innerHtml depending by `allowHtml` value
        var titleText = title.call(reference);
        allowHtml ? titleNode.innerHTML = titleText : titleNode.textContent = titleText;
      } else {
        // if it's just a simple text, set textContent or innerHtml depending by `allowHtml` value
        allowHtml ? titleNode.innerHTML = title : titleNode.textContent = title;
      }
    }
  }, {
    key: '_show',
    value: function _show(reference, options) {
      // don't show if it's already visible
      // or if it's not being showed
      if (this._isOpen && !this._isOpening) {
        return this;
      }
      this._isOpen = true;

      // if the tooltipNode already exists, just show it
      if (this._tooltipNode) {
        this._tooltipNode.style.visibility = 'visible';
        this._tooltipNode.setAttribute('aria-hidden', 'false');
        this.popperInstance.update();
        return this;
      }

      // get title
      var title = reference.getAttribute('title') || options.title;

      // don't show tooltip if no title is defined
      if (!title) {
        return this;
      }

      // create tooltip node
      var tooltipNode = this._create(reference, options.template, title, options.html);

      // Add `aria-describedby` to our reference element for accessibility reasons
      reference.setAttribute('aria-describedby', tooltipNode.id);

      // append tooltip to container
      var container = this._findContainer(options.container, reference);

      this._append(tooltipNode, container);

      this._popperOptions = _extends({}, options.popperOptions, {
        placement: options.placement
      });

      this._popperOptions.modifiers = _extends({}, this._popperOptions.modifiers, {
        arrow: _extends({}, this._popperOptions.modifiers && this._popperOptions.modifiers.arrow, {
          element: options.arrowSelector
        }),
        offset: _extends({}, this._popperOptions.modifiers && this._popperOptions.modifiers.offset, {
          offset: options.offset
        })
      });

      if (options.boundariesElement) {
        this._popperOptions.modifiers.preventOverflow = {
          boundariesElement: options.boundariesElement
        };
      }

      this.popperInstance = new __WEBPACK_IMPORTED_MODULE_0_popper_js__["a" /* default */](reference, tooltipNode, this._popperOptions);

      this._tooltipNode = tooltipNode;

      return this;
    }
  }, {
    key: '_hide',
    value: function _hide() /*reference, options*/{
      // don't hide if it's already hidden
      if (!this._isOpen) {
        return this;
      }

      this._isOpen = false;

      // hide tooltipNode
      this._tooltipNode.style.visibility = 'hidden';
      this._tooltipNode.setAttribute('aria-hidden', 'true');

      return this;
    }
  }, {
    key: '_dispose',
    value: function _dispose() {
      var _this = this;

      // remove event listeners first to prevent any unexpected behaviour
      this._events.forEach(function (_ref) {
        var func = _ref.func,
            event = _ref.event;

        _this.reference.removeEventListener(event, func);
      });
      this._events = [];

      if (this._tooltipNode) {
        this._hide();

        // destroy instance
        this.popperInstance.destroy();

        // destroy tooltipNode if removeOnDestroy is not set, as popperInstance.destroy() already removes the element
        if (!this.popperInstance.options.removeOnDestroy) {
          this._tooltipNode.parentNode.removeChild(this._tooltipNode);
          this._tooltipNode = null;
        }
      }
      return this;
    }
  }, {
    key: '_findContainer',
    value: function _findContainer(container, reference) {
      // if container is a query, get the relative element
      if (typeof container === 'string') {
        container = window.document.querySelector(container);
      } else if (container === false) {
        // if container is `false`, set it to reference parent
        container = reference.parentNode;
      }
      return container;
    }

    /**
     * Append tooltip to container
     * @memberof Tooltip
     * @private
     * @param {HTMLElement} tooltipNode
     * @param {HTMLElement|String|false} container
     */

  }, {
    key: '_append',
    value: function _append(tooltipNode, container) {
      container.appendChild(tooltipNode);
    }
  }, {
    key: '_setEventListeners',
    value: function _setEventListeners(reference, events, options) {
      var _this2 = this;

      var directEvents = [];
      var oppositeEvents = [];

      events.forEach(function (event) {
        switch (event) {
          case 'hover':
            directEvents.push('mouseenter');
            oppositeEvents.push('mouseleave');
            break;
          case 'focus':
            directEvents.push('focus');
            oppositeEvents.push('blur');
            break;
          case 'click':
            directEvents.push('click');
            oppositeEvents.push('click');
            break;
        }
      });

      // schedule show tooltip
      directEvents.forEach(function (event) {
        var func = function func(evt) {
          if (_this2._isOpening === true) {
            return;
          }
          evt.usedByTooltip = true;
          _this2._scheduleShow(reference, options.delay, options, evt);
        };
        _this2._events.push({ event: event, func: func });
        reference.addEventListener(event, func);
      });

      // schedule hide tooltip
      oppositeEvents.forEach(function (event) {
        var func = function func(evt) {
          if (evt.usedByTooltip === true) {
            return;
          }
          _this2._scheduleHide(reference, options.delay, options, evt);
        };
        _this2._events.push({ event: event, func: func });
        reference.addEventListener(event, func);
        if (event === 'click' && options.closeOnClickOutside) {
          document.addEventListener('mousedown', function (e) {
            if (!_this2._isOpening) {
              return;
            }
            var popper = _this2.popperInstance.popper;
            if (reference.contains(e.target) || popper.contains(e.target)) {
              return;
            }
            func(e);
          }, true);
        }
      });
    }
  }, {
    key: '_scheduleShow',
    value: function _scheduleShow(reference, delay, options /*, evt */) {
      var _this3 = this;

      this._isOpening = true;
      // defaults to 0
      var computedDelay = delay && delay.show || delay || 0;
      this._showTimeout = window.setTimeout(function () {
        return _this3._show(reference, options);
      }, computedDelay);
    }
  }, {
    key: '_scheduleHide',
    value: function _scheduleHide(reference, delay, options, evt) {
      var _this4 = this;

      this._isOpening = false;
      // defaults to 0
      var computedDelay = delay && delay.hide || delay || 0;
      window.clearTimeout(this._showTimeout);
      window.setTimeout(function () {
        if (_this4._isOpen === false) {
          return;
        }
        if (!document.body.contains(_this4._tooltipNode)) {
          return;
        }

        // if we are hiding because of a mouseleave, we must check that the new
        // reference isn't the tooltip, because in this case we don't want to hide it
        if (evt.type === 'mouseleave') {
          var isSet = _this4._setTooltipNodeEvent(evt, reference, delay, options);

          // if we set the new event, don't hide the tooltip yet
          // the new event will take care to hide it if necessary
          if (isSet) {
            return;
          }
        }

        _this4._hide(reference, options);
      }, computedDelay);
    }
  }, {
    key: '_updateTitleContent',
    value: function _updateTitleContent(title) {
      if (typeof this._tooltipNode === 'undefined') {
        if (typeof this.options.title !== 'undefined') {
          this.options.title = title;
        }
        return;
      }
      var titleNode = this._tooltipNode.querySelector(this.options.innerSelector);
      this._clearTitleContent(titleNode, this.options.html, this.reference.getAttribute('title') || this.options.title);
      this._addTitleContent(this.reference, title, this.options.html, titleNode);
      this.options.title = title;
      this.popperInstance.update();
    }
  }, {
    key: '_clearTitleContent',
    value: function _clearTitleContent(titleNode, allowHtml, lastTitle) {
      if (lastTitle.nodeType === 1 || lastTitle.nodeType === 11) {
        allowHtml && titleNode.removeChild(lastTitle);
      } else {
        allowHtml ? titleNode.innerHTML = '' : titleNode.textContent = '';
      }
    }
  }]);
  return Tooltip;
}();

/**
 * Title function, its context is the Tooltip instance.
 * @memberof Tooltip
 * @callback TitleFunction
 * @return {String} placement - The desired title.
 */


var _initialiseProps = function _initialiseProps() {
  var _this5 = this;

  this.show = function () {
    return _this5._show(_this5.reference, _this5.options);
  };

  this.hide = function () {
    return _this5._hide();
  };

  this.dispose = function () {
    return _this5._dispose();
  };

  this.toggle = function () {
    if (_this5._isOpen) {
      return _this5.hide();
    } else {
      return _this5.show();
    }
  };

  this.updateTitleContent = function (title) {
    return _this5._updateTitleContent(title);
  };

  this._events = [];

  this._setTooltipNodeEvent = function (evt, reference, delay, options) {
    var relatedreference = evt.relatedreference || evt.toElement || evt.relatedTarget;

    var callback = function callback(evt2) {
      var relatedreference2 = evt2.relatedreference || evt2.toElement || evt2.relatedTarget;

      // Remove event listener after call
      _this5._tooltipNode.removeEventListener(evt.type, callback);

      // If the new reference is not the reference element
      if (!reference.contains(relatedreference2)) {
        // Schedule to hide tooltip
        _this5._scheduleHide(reference, options.delay, options, evt2);
      }
    };

    if (_this5._tooltipNode.contains(relatedreference)) {
      // listen to mouseleave on the tooltip element to be able to hide the tooltip
      _this5._tooltipNode.addEventListener(evt.type, callback);
      return true;
    }

    return false;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Tooltip);
//# sourceMappingURL=tooltip.js.map


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(3);

var _jquery2 = _interopRequireDefault(_jquery);

var _folders = __webpack_require__(1);

var _folders2 = _interopRequireDefault(_folders);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _localeFallback = __webpack_require__(5);

var _localeFallback2 = _interopRequireDefault(_localeFallback);

var _BackgroundRequester = __webpack_require__(4);

var _BackgroundRequester2 = _interopRequireDefault(_BackgroundRequester);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UpdateRequiredView = function () {
  function UpdateRequiredView() {
    _classCallCheck(this, UpdateRequiredView);

    this.template = _folders2.default.VIEWS + '/update-required.html';
  }

  _createClass(UpdateRequiredView, [{
    key: 'show',
    value: function show(isStop) {
      var _this = this;
      _this.isStop = isStop;

      this.App = (0, _jquery2.default)('#app');
      this.App.html("");

      _jquery2.default.get(_this.template, function (template) {

        _this.App.append(template);
        _this.selectElements();
        _this.setContent();
      }, "html");
    }
  }, {
    key: 'setContent',
    value: function setContent() {
      var _this = this;

      chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.VERSIONSTATUS], function (storage) {
        var versionStatusData = storage[_ServiceMeta2.default.STORAGEKEYS.VERSIONSTATUS];

        if (versionStatusData && versionStatusData.hasOwnProperty("action") && versionStatusData.action === "update") {
          var desc = '\n            <p>\n            You are running version ' + _ServiceMeta2.default.VERSION + ' but there is an update\n            to version ' + versionStatusData.curversion + '. We highly recommend you to update in order to be bugfree\n            and have latest features.\n            </p>\n            ';
          (0, _jquery2.default)('#up-desc').prepend((0, _jquery2.default)(desc));
          var update = '\n          <div class="update-available__title"><span class="update-available__notification">1</span> NEW UPDATE AVAILABLE</div>\n          <div class="update-available__content">\n            <div class="update-available__content__app">\n              <div class="update-available__content__app__icon">\n                <img src="images/symbol25.png">\n              </div>\n              <div class="update-available__content__app__version-info">\n                <div style="color: red;">Your version: ' + _ServiceMeta2.default.VERSION + '</div>\n                <div style="color: #007aff;">New version: ' + versionStatusData.curversion + '</div>\n              </div>\n\n            </div>\n          </div>';
          (0, _jquery2.default)('#up-update').prepend((0, _jquery2.default)(update));

          if (versionStatusData.hasOwnProperty("sources") && versionStatusData.sources.length > 0) {
            versionStatusData.sources.forEach(function (source) {
              var sourceButtonHtml = '\n                <div class="btn--update btn--update--large">' + source.label + '</div>\n              ';
              var sourceButton = (0, _jquery2.default)(sourceButtonHtml);
              sourceButton.click(function () {
                _Utils2.default.openNewTab(source.url);
              });
              (0, _jquery2.default)('#update-links').append(sourceButton);
            });
          }
          (0, _jquery2.default)('#up-content').css('display', 'block');
        }

        if (versionStatusData && versionStatusData.hasOwnProperty("action") && versionStatusData.action === "stop") {
          (0, _jquery2.default)('#up-loading-img').append((0, _jquery2.default)(_ServiceMeta2.default.LOADINGIMG));
          (0, _jquery2.default)('#up-loading').css("display", "block");

          _BackgroundRequester2.default.request('ProxySetting', 'clearSettings', {}).then(function () {
            _BackgroundRequester2.default.request('api', 'getClientVersionStatus', { ignoreTTL: true }).then(function (versionResponse) {

              (0, _jquery2.default)('#up-loading').css("display", "none");
              if (versionResponse && versionResponse != "" && versionResponse.retcode === 200 && versionResponse.data && versionResponse.data.hasOwnProperty("action") && versionResponse.data.action === "stop") {
                if (_this.isStop) {
                  (0, _jquery2.default)('#up-container').addClass("update-required--stop");
                  (0, _jquery2.default)('#up-title').text("Outdated Version");
                  (0, _jquery2.default)('#up-title').css("color", "white");
                }
                var _desc = '\n                <p>\n                You are running an outdated version ' + _ServiceMeta2.default.VERSION + '. In order to use\n                this software you need to update to most current version ' + versionStatusData.curversion + '\n                </p>\n                ';
                (0, _jquery2.default)('#up-desc').prepend((0, _jquery2.default)(_desc));
                if (versionStatusData.hasOwnProperty("sources") && versionStatusData.sources.length > 0) {
                  versionStatusData.sources.forEach(function (source) {
                    var sourceButtonHtml = '\n                    <div class="btn--update btn--update--large">' + source.label + '</div>\n                  ';
                    var sourceButton = (0, _jquery2.default)(sourceButtonHtml);
                    sourceButton.click(function () {
                      _Utils2.default.openNewTab(source.url);
                    });
                    (0, _jquery2.default)('#update-links').append(sourceButton);
                  });
                }
                (0, _jquery2.default)('#up-content').css('display', 'block');
              } else {
                chrome.storage.local.remove([_ServiceMeta2.default.STORAGEKEYS.VERSIONSTATUS, _ServiceMeta2.default.STORAGEKEYS.VERSIONSTATUSNEXTUPDATE], function () {
                  var nextUpdate = _Utils2.default.getDateNow() + _ServiceMeta2.default.VERSIONSTATUSTTL;
                  chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.VERSIONSTATUSNEXTUPDATE, nextUpdate));
                  location.reload();
                });
              }
            });
          });
        }
      });
    }
  }, {
    key: 'selectElements',
    value: function selectElements() {}
  }, {
    key: 'setEvents',
    value: function setEvents() {}
  }]);

  return UpdateRequiredView;
}();

exports.default = new UpdateRequiredView();

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(3);

var _jquery2 = _interopRequireDefault(_jquery);

var _folders = __webpack_require__(1);

var _folders2 = _interopRequireDefault(_folders);

var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _BackgroundRequester = __webpack_require__(4);

var _BackgroundRequester2 = _interopRequireDefault(_BackgroundRequester);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProxySearchView = function () {
	function ProxySearchView() {
		_classCallCheck(this, ProxySearchView);

		this.template = _folders2.default.VIEWS + '/proxysearch.html';
		this.header = _folders2.default.VIEWS + '/header.html';
	}

	_createClass(ProxySearchView, [{
		key: 'initView',
		value: function initView(searchData) {
			var _this = this;
			this.App = (0, _jquery2.default)('#app');
			this.App.html("");

			if (searchData) _this.SearchData = searchData;

			_Utils2.default.getLocaleInStorage().then(_this.loadTemplate.bind(this), _this.loadLocaleFromServer.bind(this));
		}
	}, {
		key: 'loadTemplate',
		value: function loadTemplate(locale) {
			var _this = this;

			_this.loadStorageData().then(function (storage) {
				_this.Storage = storage;

				_jquery2.default.get(_this.template, function (template) {

					var loadedTemplate = _Utils2.default.loadTemplate(template, locale);
					_this.App.append(loadedTemplate);

					_this.selectElements();
					// Setting all events for selected elements
					_this.setEvents();

					if (_this.Storage[_ServiceMeta2.default.STORAGEKEYS.PROXYSEARCHLOCK] && _this.Storage[_ServiceMeta2.default.STORAGEKEYS.PROXYSEARCHFAILED]) return _this.onSearchFailed(_this.Storage[_ServiceMeta2.default.STORAGEKEYS.PROXYSEARCHFAILEDCOUNTRY]);

					_this.setSearchPort();
					_this.initState();
				}, "html");
			});

			/*
   		$.get(_this.header, function(header){
   			_this.App.append(header);
   			$.get(_this.template, function(template){
   
   				_this.loadStorageData().then(function (storage){
   					_this.Storage = storage;
   
   					var loadedTemplate = Utils.loadTemplate(template, locale)
   					_this.App.append(loadedTemplate);
   
   					_this.selectElements();
   					// Setting all events for selected elements
   					_this.setEvents();
   
   					_this.setSearchPort();
   					//_this.initState();
   
   				});
   			}, "html");
   		}, "html");
   */
		}
	}, {
		key: 'initState',
		value: function initState() {
			var _this = this;

			if (_this.SearchData) return _this.startSearch(_this.SearchData);

			_this.requestUpdate();
		}
	}, {
		key: 'loadStorageData',
		value: function loadStorageData() {
			return new Promise(function (resolve, reject) {

				chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.USERDATA, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA, _ServiceMeta2.default.STORAGEKEYS.PROXYSEARCHLOCK, _ServiceMeta2.default.STORAGEKEYS.PROXYSEARCHFAILED, _ServiceMeta2.default.STORAGEKEYS.LOCALE, _ServiceMeta2.default.STORAGEKEYS.PROXYSEARCHFAILEDCOUNTRY], function (storage) {

					resolve(storage);
				});
			});
		}
	}, {
		key: 'loadLocaleFromServer',
		value: function loadLocaleFromServer() {
			var _this = this;
			_Utils2.default.loadLocaleFromServer(_this.App, _this.App, _this.showMaintenanceMessage, _BackgroundRequester2.default, "ProxySearchView", _jquery2.default);
		}

		/* Actions */

	}, {
		key: 'startSearch',
		value: function startSearch(searchData) {
			var _this = this;

			if (_this.Port) _this.Port.postMessage({ action: "search", data: searchData });
		}
	}, {
		key: 'requestUpdate',
		value: function requestUpdate() {
			var _this = this;

			if (_this.Port) _this.Port.postMessage({ action: "getUpdate" });
		}

		/* Selecting and Setting */

	}, {
		key: 'selectElements',
		value: function selectElements() {
			var _this = this;

			_this.proxySearchActiveView = (0, _jquery2.default)('#proxysearch-active');
			_this.proxySearchFailedView = (0, _jquery2.default)('#proxysearch-failed');

			_this.cancelSearchButton = (0, _jquery2.default)('#cancel-search-button');
			_this.backToDashboardButton = (0, _jquery2.default)('#back-to-dashboard-button');

			_this.searchProgress = (0, _jquery2.default)('#search-progress');
			_this.searchCountry = (0, _jquery2.default)('#search-country');

			_this.searchFailedTxt = (0, _jquery2.default)('#search-result-txt');

			_this.progressBar = (0, _jquery2.default)('#progress-bar');

			/* Download Client */
			_this.downloadDesktopClient = (0, _jquery2.default)('#dw-desktop-client');
		}
	}, {
		key: 'setEvents',
		value: function setEvents() {
			var _this = this;

			_this.cancelSearchButton.click(_this.onCancelButtonClicked.bind(this));
			_this.backToDashboardButton.click(_this.onBackToDashboardButtonClicked.bind(this));

			_this.downloadDesktopClient.click(_this.onDownloadDesktopClientClicked.bind(this));
		}
	}, {
		key: 'setSearchPort',
		value: function setSearchPort() {
			this.Port = chrome.runtime.connect({ name: "proxysearch-port" });
			this.Port.onMessage.addListener(this.onSearchMessage.bind(this));
		}

		/* Progress bar */

	}, {
		key: 'updateProgressBar',
		value: function updateProgressBar(current, total) {
			var _this = this;

			var progress = (total - current) / total * 100;

			_this.progressBar.width(Math.round(progress) + "%");
		}

		/* Events */

	}, {
		key: 'onDownloadDesktopClientClicked',
		value: function onDownloadDesktopClientClicked() {
			var _this = this;

			_Utils2.default.openPlatformLink('desktop');
		}
	}, {
		key: 'onCancelButtonClicked',
		value: function onCancelButtonClicked() {
			var _this = this;

			chrome.storage.local.remove([_ServiceMeta2.default.STORAGEKEYS.PROXYSEARCHLOCK, _ServiceMeta2.default.STORAGEKEYS.PROXYSEARCHFAILED], function () {

				if (_this.Port) _this.Port.postMessage({ action: "cancel" });

				location.reload();
			});
		}
	}, {
		key: 'onBackToDashboardButtonClicked',
		value: function onBackToDashboardButtonClicked() {
			var _this = this;
			chrome.storage.local.remove([_ServiceMeta2.default.STORAGEKEYS.PROXYSEARCHLOCK, _ServiceMeta2.default.STORAGEKEYS.PROXYSEARCHFAILED], function () {
				location.reload();
			});
		}
	}, {
		key: 'onSearchMessage',
		value: function onSearchMessage(message) {
			var _this = this;
			switch (message.action) {
				case "success":
					_this.onSearchSuccess(message.data);
					break;
				case "update":
					_this.onSearchUpdate(message.data);
					break;
				case "failed":
					_this.onSearchFailed(message.data);
					break;
			}
		}
	}, {
		key: 'onSearchSuccess',
		value: function onSearchSuccess(data) {
			location.reload();
		}
	}, {
		key: 'onSearchUpdate',
		value: function onSearchUpdate(data) {
			var _this = this;

			_this.updateProgressBar(data.count, data.total);

			if (data && data.server && data.server.CountryCode) {
				_Utils2.default.loadCountryLocale(_BackgroundRequester2.default).then(function (countryLocale) {
					var countryCode = data.server.CountryCode;
					var countryLabel = countryLocale && countryLocale.hasOwnProperty(countryCode.toUpperCase()) ? countryLocale[countryCode.toUpperCase()] : countryCode;

					_this.searchCountry.text(countryLabel);
				});
			}
		}
	}, {
		key: 'onSearchFailed',
		value: function onSearchFailed(data) {
			var _this = this;
			if (data && _this.Storage && _this.Storage[_ServiceMeta2.default.STORAGEKEYS.LOCALE] && _this.Storage[_ServiceMeta2.default.STORAGEKEYS.LOCALE].SearchingProxyResultText) {
				_this.searchFailedTxt.text(_this.Storage[_ServiceMeta2.default.STORAGEKEYS.LOCALE].SearchingProxyResultText.replace('{0}', data));
			}

			var _this = this;
			var clienversion = (0, _jquery2.default)("#client-version");
			clienversion.text(_ServiceMeta2.default.VERSION);
			_this.proxySearchActiveView.css("display", "none");
			_this.proxySearchFailedView.css("display", "block");
		}
	}]);

	return ProxySearchView;
}();

exports.default = new ProxySearchView();

/***/ }),
/* 22 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-256, as defined
 * in FIPS 180-2
 * Version 2.2-beta Copyright Angel Marin, Paul Johnston 2000 - 2009.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 *
 */

var inherits = __webpack_require__(10)
var Hash = __webpack_require__(11)
var Buffer = __webpack_require__(9).Buffer

var K = [
  0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5,
  0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5,
  0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3,
  0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174,
  0xE49B69C1, 0xEFBE4786, 0x0FC19DC6, 0x240CA1CC,
  0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA,
  0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7,
  0xC6E00BF3, 0xD5A79147, 0x06CA6351, 0x14292967,
  0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13,
  0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85,
  0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3,
  0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070,
  0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5,
  0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3,
  0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208,
  0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2
]

var W = new Array(64)

function Sha256 () {
  this.init()

  this._w = W // new Array(64)

  Hash.call(this, 64, 56)
}

inherits(Sha256, Hash)

Sha256.prototype.init = function () {
  this._a = 0x6a09e667
  this._b = 0xbb67ae85
  this._c = 0x3c6ef372
  this._d = 0xa54ff53a
  this._e = 0x510e527f
  this._f = 0x9b05688c
  this._g = 0x1f83d9ab
  this._h = 0x5be0cd19

  return this
}

function ch (x, y, z) {
  return z ^ (x & (y ^ z))
}

function maj (x, y, z) {
  return (x & y) | (z & (x | y))
}

function sigma0 (x) {
  return (x >>> 2 | x << 30) ^ (x >>> 13 | x << 19) ^ (x >>> 22 | x << 10)
}

function sigma1 (x) {
  return (x >>> 6 | x << 26) ^ (x >>> 11 | x << 21) ^ (x >>> 25 | x << 7)
}

function gamma0 (x) {
  return (x >>> 7 | x << 25) ^ (x >>> 18 | x << 14) ^ (x >>> 3)
}

function gamma1 (x) {
  return (x >>> 17 | x << 15) ^ (x >>> 19 | x << 13) ^ (x >>> 10)
}

Sha256.prototype._update = function (M) {
  var W = this._w

  var a = this._a | 0
  var b = this._b | 0
  var c = this._c | 0
  var d = this._d | 0
  var e = this._e | 0
  var f = this._f | 0
  var g = this._g | 0
  var h = this._h | 0

  for (var i = 0; i < 16; ++i) W[i] = M.readInt32BE(i * 4)
  for (; i < 64; ++i) W[i] = (gamma1(W[i - 2]) + W[i - 7] + gamma0(W[i - 15]) + W[i - 16]) | 0

  for (var j = 0; j < 64; ++j) {
    var T1 = (h + sigma1(e) + ch(e, f, g) + K[j] + W[j]) | 0
    var T2 = (sigma0(a) + maj(a, b, c)) | 0

    h = g
    g = f
    f = e
    e = (d + T1) | 0
    d = c
    c = b
    b = a
    a = (T1 + T2) | 0
  }

  this._a = (a + this._a) | 0
  this._b = (b + this._b) | 0
  this._c = (c + this._c) | 0
  this._d = (d + this._d) | 0
  this._e = (e + this._e) | 0
  this._f = (f + this._f) | 0
  this._g = (g + this._g) | 0
  this._h = (h + this._h) | 0
}

Sha256.prototype._hash = function () {
  var H = Buffer.allocUnsafe(32)

  H.writeInt32BE(this._a, 0)
  H.writeInt32BE(this._b, 4)
  H.writeInt32BE(this._c, 8)
  H.writeInt32BE(this._d, 12)
  H.writeInt32BE(this._e, 16)
  H.writeInt32BE(this._f, 20)
  H.writeInt32BE(this._g, 24)
  H.writeInt32BE(this._h, 28)

  return H
}

module.exports = Sha256


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var inherits = __webpack_require__(10)
var Hash = __webpack_require__(11)
var Buffer = __webpack_require__(9).Buffer

var K = [
  0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd,
  0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc,
  0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019,
  0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118,
  0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe,
  0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2,
  0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1,
  0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694,
  0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3,
  0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65,
  0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483,
  0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5,
  0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210,
  0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4,
  0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725,
  0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70,
  0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926,
  0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df,
  0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8,
  0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b,
  0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001,
  0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30,
  0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910,
  0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8,
  0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53,
  0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8,
  0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb,
  0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3,
  0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60,
  0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec,
  0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9,
  0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b,
  0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207,
  0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178,
  0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6,
  0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b,
  0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493,
  0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c,
  0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a,
  0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817
]

var W = new Array(160)

function Sha512 () {
  this.init()
  this._w = W

  Hash.call(this, 128, 112)
}

inherits(Sha512, Hash)

Sha512.prototype.init = function () {
  this._ah = 0x6a09e667
  this._bh = 0xbb67ae85
  this._ch = 0x3c6ef372
  this._dh = 0xa54ff53a
  this._eh = 0x510e527f
  this._fh = 0x9b05688c
  this._gh = 0x1f83d9ab
  this._hh = 0x5be0cd19

  this._al = 0xf3bcc908
  this._bl = 0x84caa73b
  this._cl = 0xfe94f82b
  this._dl = 0x5f1d36f1
  this._el = 0xade682d1
  this._fl = 0x2b3e6c1f
  this._gl = 0xfb41bd6b
  this._hl = 0x137e2179

  return this
}

function Ch (x, y, z) {
  return z ^ (x & (y ^ z))
}

function maj (x, y, z) {
  return (x & y) | (z & (x | y))
}

function sigma0 (x, xl) {
  return (x >>> 28 | xl << 4) ^ (xl >>> 2 | x << 30) ^ (xl >>> 7 | x << 25)
}

function sigma1 (x, xl) {
  return (x >>> 14 | xl << 18) ^ (x >>> 18 | xl << 14) ^ (xl >>> 9 | x << 23)
}

function Gamma0 (x, xl) {
  return (x >>> 1 | xl << 31) ^ (x >>> 8 | xl << 24) ^ (x >>> 7)
}

function Gamma0l (x, xl) {
  return (x >>> 1 | xl << 31) ^ (x >>> 8 | xl << 24) ^ (x >>> 7 | xl << 25)
}

function Gamma1 (x, xl) {
  return (x >>> 19 | xl << 13) ^ (xl >>> 29 | x << 3) ^ (x >>> 6)
}

function Gamma1l (x, xl) {
  return (x >>> 19 | xl << 13) ^ (xl >>> 29 | x << 3) ^ (x >>> 6 | xl << 26)
}

function getCarry (a, b) {
  return (a >>> 0) < (b >>> 0) ? 1 : 0
}

Sha512.prototype._update = function (M) {
  var W = this._w

  var ah = this._ah | 0
  var bh = this._bh | 0
  var ch = this._ch | 0
  var dh = this._dh | 0
  var eh = this._eh | 0
  var fh = this._fh | 0
  var gh = this._gh | 0
  var hh = this._hh | 0

  var al = this._al | 0
  var bl = this._bl | 0
  var cl = this._cl | 0
  var dl = this._dl | 0
  var el = this._el | 0
  var fl = this._fl | 0
  var gl = this._gl | 0
  var hl = this._hl | 0

  for (var i = 0; i < 32; i += 2) {
    W[i] = M.readInt32BE(i * 4)
    W[i + 1] = M.readInt32BE(i * 4 + 4)
  }
  for (; i < 160; i += 2) {
    var xh = W[i - 15 * 2]
    var xl = W[i - 15 * 2 + 1]
    var gamma0 = Gamma0(xh, xl)
    var gamma0l = Gamma0l(xl, xh)

    xh = W[i - 2 * 2]
    xl = W[i - 2 * 2 + 1]
    var gamma1 = Gamma1(xh, xl)
    var gamma1l = Gamma1l(xl, xh)

    // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
    var Wi7h = W[i - 7 * 2]
    var Wi7l = W[i - 7 * 2 + 1]

    var Wi16h = W[i - 16 * 2]
    var Wi16l = W[i - 16 * 2 + 1]

    var Wil = (gamma0l + Wi7l) | 0
    var Wih = (gamma0 + Wi7h + getCarry(Wil, gamma0l)) | 0
    Wil = (Wil + gamma1l) | 0
    Wih = (Wih + gamma1 + getCarry(Wil, gamma1l)) | 0
    Wil = (Wil + Wi16l) | 0
    Wih = (Wih + Wi16h + getCarry(Wil, Wi16l)) | 0

    W[i] = Wih
    W[i + 1] = Wil
  }

  for (var j = 0; j < 160; j += 2) {
    Wih = W[j]
    Wil = W[j + 1]

    var majh = maj(ah, bh, ch)
    var majl = maj(al, bl, cl)

    var sigma0h = sigma0(ah, al)
    var sigma0l = sigma0(al, ah)
    var sigma1h = sigma1(eh, el)
    var sigma1l = sigma1(el, eh)

    // t1 = h + sigma1 + ch + K[j] + W[j]
    var Kih = K[j]
    var Kil = K[j + 1]

    var chh = Ch(eh, fh, gh)
    var chl = Ch(el, fl, gl)

    var t1l = (hl + sigma1l) | 0
    var t1h = (hh + sigma1h + getCarry(t1l, hl)) | 0
    t1l = (t1l + chl) | 0
    t1h = (t1h + chh + getCarry(t1l, chl)) | 0
    t1l = (t1l + Kil) | 0
    t1h = (t1h + Kih + getCarry(t1l, Kil)) | 0
    t1l = (t1l + Wil) | 0
    t1h = (t1h + Wih + getCarry(t1l, Wil)) | 0

    // t2 = sigma0 + maj
    var t2l = (sigma0l + majl) | 0
    var t2h = (sigma0h + majh + getCarry(t2l, sigma0l)) | 0

    hh = gh
    hl = gl
    gh = fh
    gl = fl
    fh = eh
    fl = el
    el = (dl + t1l) | 0
    eh = (dh + t1h + getCarry(el, dl)) | 0
    dh = ch
    dl = cl
    ch = bh
    cl = bl
    bh = ah
    bl = al
    al = (t1l + t2l) | 0
    ah = (t1h + t2h + getCarry(al, t1l)) | 0
  }

  this._al = (this._al + al) | 0
  this._bl = (this._bl + bl) | 0
  this._cl = (this._cl + cl) | 0
  this._dl = (this._dl + dl) | 0
  this._el = (this._el + el) | 0
  this._fl = (this._fl + fl) | 0
  this._gl = (this._gl + gl) | 0
  this._hl = (this._hl + hl) | 0

  this._ah = (this._ah + ah + getCarry(this._al, al)) | 0
  this._bh = (this._bh + bh + getCarry(this._bl, bl)) | 0
  this._ch = (this._ch + ch + getCarry(this._cl, cl)) | 0
  this._dh = (this._dh + dh + getCarry(this._dl, dl)) | 0
  this._eh = (this._eh + eh + getCarry(this._el, el)) | 0
  this._fh = (this._fh + fh + getCarry(this._fl, fl)) | 0
  this._gh = (this._gh + gh + getCarry(this._gl, gl)) | 0
  this._hh = (this._hh + hh + getCarry(this._hl, hl)) | 0
}

Sha512.prototype._hash = function () {
  var H = Buffer.allocUnsafe(64)

  function writeInt64BE (h, l, offset) {
    H.writeInt32BE(h, offset)
    H.writeInt32BE(l, offset + 4)
  }

  writeInt64BE(this._ah, this._al, 0)
  writeInt64BE(this._bh, this._bl, 8)
  writeInt64BE(this._ch, this._cl, 16)
  writeInt64BE(this._dh, this._dl, 24)
  writeInt64BE(this._eh, this._el, 32)
  writeInt64BE(this._fh, this._fl, 40)
  writeInt64BE(this._gh, this._gl, 48)
  writeInt64BE(this._hh, this._hl, 56)

  return H
}

module.exports = Sha512


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sticked = function () {
	function Sticked() {
		_classCallCheck(this, Sticked);
	}

	_createClass(Sticked, [{
		key: 'pin',
		value: function pin(countryElId, sectionId) {
			var _this = this;
			return new Promise(function (resolve, reject) {
				chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.STICKEDCOUNTRIES, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA], function (storage) {

					if (!_Utils2.default.isUserPremium(storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA])) return reject();

					var stickedCountries = storage[_ServiceMeta2.default.STORAGEKEYS.STICKEDCOUNTRIES];
					var uid = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA] ? storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA].uid : "";

					var sortedStickedCountries = _this.createPinObj(stickedCountries, countryElId, sectionId, uid);

					chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.STICKEDCOUNTRIES, sortedStickedCountries), function () {
						resolve();
					});
				});
			});
		}
	}, {
		key: 'unpin',
		value: function unpin(countryElId, sectionId) {

			var _this = this;

			return new Promise(function (resolve, reject) {

				chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.STICKEDCOUNTRIES, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA], function (storage) {

					var stickedCountries = storage[_ServiceMeta2.default.STORAGEKEYS.STICKEDCOUNTRIES];
					var uid = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA] ? storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA].uid : "";

					if (stickedCountries && stickedCountries[uid] && stickedCountries[uid][sectionId]) {
						var index = stickedCountries[uid][sectionId].indexOf(countryElId);

						if (index > -1) {

							stickedCountries[uid][sectionId].splice(index, 1);

							chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.STICKEDCOUNTRIES, stickedCountries), resolve);
							return;
						}
					}

					resolve();
				});
			});
		}
	}, {
		key: 'getPinnedState',
		value: function getPinnedState(countryElId, sectionId) {
			var _this = this;

			return new Promise(function (resolve, reject) {

				chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.STICKEDCOUNTRIES, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA], function (storage) {

					var uid = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA] ? storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA].uid : "";
					var stickedCountries = storage[_ServiceMeta2.default.STORAGEKEYS.STICKEDCOUNTRIES];

					var countryIsPinned = stickedCountries && stickedCountries[uid] && stickedCountries[uid][sectionId] && stickedCountries[uid][sectionId].indexOf(countryElId) > -1;

					if (countryIsPinned) return resolve(true);

					return resolve(false);
				});
			});
		}
	}, {
		key: 'createPinObj',
		value: function createPinObj(stickedCountries, movedCountryId, movedCountrySection, uid) {

			if (!stickedCountries) stickedCountries = {};

			if (!stickedCountries.hasOwnProperty(uid)) {
				stickedCountries[uid] = {
					0: [],
					1: [],
					2: []
				};

				stickedCountries[uid][movedCountrySection].push(movedCountryId);

				return stickedCountries;
			}

			var index = stickedCountries[uid][movedCountrySection].indexOf(movedCountryId);

			if (index > -1) stickedCountries[uid][movedCountrySection].slice(index, 1);

			stickedCountries[uid][movedCountrySection].push(movedCountryId);

			return stickedCountries;
		}
	}]);

	return Sticked;
}();

exports.default = new Sticked();

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(3);

var _jquery2 = _interopRequireDefault(_jquery);

var _folders = __webpack_require__(1);

var _folders2 = _interopRequireDefault(_folders);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _otherTools = __webpack_require__(53);

var _otherTools2 = _interopRequireDefault(_otherTools);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OtherToolsView = function () {
  function OtherToolsView() {
    _classCallCheck(this, OtherToolsView);

    this.template = _folders2.default.VIEWS + '/othertools.html';
  }

  _createClass(OtherToolsView, [{
    key: 'show',
    value: function show() {
      var _this = this;

      this.App = (0, _jquery2.default)('#app');
      this.App.html("");

      _jquery2.default.get(_this.template, function (template) {

        _this.App.append(template);
        _this.selectElements();
        _this.populateItems();
      }, "html");
    }
  }, {
    key: 'selectElements',
    value: function selectElements() {
      var _this = this;
      _this.closeButton = (0, _jquery2.default)('#dc-info-close');
      _this.otherToolsBrand = (0, _jquery2.default)('#othertools-brand');

      _this.itemContainer = (0, _jquery2.default)('#othertools-items-container');

      _this.otherToolsBrand.text(_ServiceMeta2.default.SERVICE);

      _this.setEvents();
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {
      var _this = this;
      _this.closeButton.click(_this.onCloseButtonClicked.bind(_this));
    }
  }, {
    key: 'populateItems',
    value: function populateItems() {
      var _this2 = this;

      var _this = this;

      _otherTools2.default.tools.forEach(function (item, index) {
        var item = (0, _jquery2.default)(_this.generateItem(item, index));

        item.children('.othertools__item__clickable').click(_this.onItemClicked.bind(_this2));
        _this.itemContainer.append(item);
      });
    }
  }, {
    key: 'onCloseButtonClicked',
    value: function onCloseButtonClicked() {
      var _this = this;
      location.reload();
    }
  }, {
    key: 'onItemClicked',
    value: function onItemClicked(e) {
      var _this = this;
      e.preventDefault();
      var targetId = (0, _jquery2.default)(e.target).attr('targetId');

      var platform = _ServiceMeta2.default.PLATFORM.toLowerCase();
      _Utils2.default.openNewTab(_otherTools2.default.tools[targetId].download[platform]);
    }
  }, {
    key: 'generateItem',
    value: function generateItem(item, index) {
      return '<div class="othertools__item">' + '<img class="othertools__item__image" src="' + item.icon + '">' + '<div class="othertools__item__title">' + item.title + '</div>' + '<div class="othertools__item__desc">' + item.description + '</div>' + '<img class="othertools__item__rating" src="images/rating.png">' + '<div class="othertools__item__download-container">' + '<div class="othertools__item__download-container__button-container">' + '<div class="othertools__item__download-container__button-container__button">' + '<div class="othertools__item__download-container__button-container__button__label">' + 'Download' + '</div>' + '</div>' + '</div>' + '</div>' + '<div class="othertools__item__clickable" targetId="' + index + '"></div></div>';
    }
  }]);

  return OtherToolsView;
}();

exports.default = new OtherToolsView();

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(3);

var _jquery2 = _interopRequireDefault(_jquery);

var _folders = __webpack_require__(1);

var _folders2 = _interopRequireDefault(_folders);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _localeFallback = __webpack_require__(5);

var _localeFallback2 = _interopRequireDefault(_localeFallback);

var _BackgroundRequester = __webpack_require__(4);

var _BackgroundRequester2 = _interopRequireDefault(_BackgroundRequester);

var _UpgradeView = __webpack_require__(13);

var _UpgradeView2 = _interopRequireDefault(_UpgradeView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GetPremiumView = function () {
  function GetPremiumView() {
    _classCallCheck(this, GetPremiumView);

    this.template = _folders2.default.VIEWS + '/get-premium.html';
  }

  _createClass(GetPremiumView, [{
    key: 'show',
    value: function show() {
      var _this2 = this;

      var _this = this;

      _Utils2.default.getLocaleInStorage().then(function (locale) {
        _this2.App = (0, _jquery2.default)('#app');
        _this2.App.html("");

        _jquery2.default.get(_this.template, function (template) {
          var loadedTemplate = _Utils2.default.loadTemplateWithFallback(template, locale, _localeFallback2.default);

          _this.App.append(loadedTemplate);
          _this.selectElements();
        }, "html");
      });
    }
  }, {
    key: 'selectElements',
    value: function selectElements() {
      var _this = this;
      _this.closeButton = (0, _jquery2.default)('#getprem-close');
      _this.upgradeButton = (0, _jquery2.default)('#getprem-upgrade-btn');
      _this.setEvents();
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {
      var _this = this;

      _this.closeButton.click(_this.onCloseButtonClicked.bind(this));
      _this.upgradeButton.click(_this.onUpgradeButtonClicked.bind(this));
    }
  }, {
    key: 'onCloseButtonClicked',
    value: function onCloseButtonClicked() {
      location.reload();
    }
  }, {
    key: 'onUpgradeButtonClicked',
    value: function onUpgradeButtonClicked() {
      _UpgradeView2.default.initView();
    }
  }]);

  return GetPremiumView;
}();

exports.default = new GetPremiumView();

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(3);

var _jquery2 = _interopRequireDefault(_jquery);

var _folders = __webpack_require__(1);

var _folders2 = _interopRequireDefault(_folders);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _localeFallback = __webpack_require__(5);

var _localeFallback2 = _interopRequireDefault(_localeFallback);

var _BackgroundRequester = __webpack_require__(4);

var _BackgroundRequester2 = _interopRequireDefault(_BackgroundRequester);

var _LoginView = __webpack_require__(6);

var _LoginView2 = _interopRequireDefault(_LoginView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TrialView = function () {
  function TrialView() {
    _classCallCheck(this, TrialView);

    this.template = _folders2.default.VIEWS + '/trial.html';
  }

  _createClass(TrialView, [{
    key: 'show',
    value: function show(trialDays, userData) {
      var _this2 = this;

      var _this = this;
      this.trialDays = trialDays;
      this.userData = userData;

      _Utils2.default.getLocaleInStorage().then(function (locale) {
        _this2.App = (0, _jquery2.default)('#app');
        _this2.App.html("");

        _jquery2.default.get(_this.template, function (template) {
          var loadedTemplate = _Utils2.default.loadTemplateWithFallback(template, locale, _localeFallback2.default);

          _this.App.append(loadedTemplate);
          _this.selectElements();

          _this.setTrialDays(trialDays);
        }, "html");
      });
    }
  }, {
    key: 'selectElements',
    value: function selectElements() {
      var _this = this;
      _this.closeButton = (0, _jquery2.default)('#gettrial-close');
      _this.upgradeButton = (0, _jquery2.default)('#gettrial-upgrade-btn');

      _this.loadingDiv = (0, _jquery2.default)('#loading-div');
      _this.loadingImg = (0, _jquery2.default)('#gettrial-loading-img');

      _this.contentDiv = (0, _jquery2.default)('#trial-content');

      _this.errorDiv = (0, _jquery2.default)('#error-div');
      _this.successDiv = (0, _jquery2.default)('#success-div');
      _this.setEvents();
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {
      var _this = this;

      _this.closeButton.click(_this.onCloseButtonClicked.bind(this));
      _this.upgradeButton.click(_this.onUpgradeButtonClicked.bind(this));
    }
  }, {
    key: 'setTrialDays',
    value: function setTrialDays(days) {
      (0, _jquery2.default)('#t-d1').text(days);
      (0, _jquery2.default)('#t-d2').text(days);
    }
  }, {
    key: 'onCloseButtonClicked',
    value: function onCloseButtonClicked() {
      location.reload();
    }
  }, {
    key: 'onUpgradeButtonClicked',
    value: function onUpgradeButtonClicked() {
      var _this = this;
      _this.setLoading();
      var data = {};
      if (_this.userData && _this.userData.authcode) {
        data = {
          authcode: _this.userData.authcode
        };
      }
      _BackgroundRequester2.default.request('api', 'getTrial', data).then(function (response) {

        _this.unsetLoading();

        if (_Utils2.default.isResponse200(response)) return _this.trialSuccess(response);

        if (_Utils2.default.isResponseMinus20(response)) return _this.trialError(response.message);

        if (_Utils2.default.isResponseMinusOne(response)) return _Utils2.default.showMinusOneError(_this.trialError.bind(_this));

        if (_Utils2.default.isResponseAuthError(response)) {
          chrome.storage.local.remove([_ServiceMeta2.default.STORAGEKEYS.USERDATA], function () {
            chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.LOCALE], function (storage) {
              _LoginView2.default.initView(_Utils2.default.getFallbackLocale("AuthFailed", storage[_ServiceMeta2.default.STORAGEKEYS.LOCALE], _localeFallback2.default));
            });
          });
        }

        if (_Utils2.default.isMaintenanceMode(response)) {
          _this.showMaintenanceMessage(response.message);
        }
      });
    }
  }, {
    key: 'showMaintenanceMessage',
    value: function showMaintenanceMessage(message) {
      var _this = this;
      (0, _jquery2.default)('#maintenance-msg').text(message);
      (0, _jquery2.default)('#maintenance-mode-close-icon').click(function () {
        location.reload();
      });
      (0, _jquery2.default)('#maintenance-mode').css('display', 'block');
      (0, _jquery2.default)('#trial-mode').css('display', 'none');
      (0, _jquery2.default)('#header-container').css('display', 'none');
    }
  }, {
    key: 'trialSuccess',
    value: function trialSuccess(response) {
      var _this = this;
      _this.successDiv.css('display', 'block');
      (0, _jquery2.default)('#success-con').css('display', 'block');
      if (response.message) (0, _jquery2.default)('#success-title').text(response.message);
      (0, _jquery2.default)('#expiration-date').text(_Utils2.default.getUserExpirationData(response.expiration));
    }
  }, {
    key: 'trialError',
    value: function trialError(error) {
      var _this = this;
      (0, _jquery2.default)('#fail-con').css('display', 'block');
      if (error) return _this.errorDiv.text(error);
      _this.errorDiv.text("No error message, contact support");
    }
  }, {
    key: 'setLoading',
    value: function setLoading() {
      var _this = this;
      _this.loadingImg.html(_ServiceMeta2.default.LOADINGIMG);
      _this.loadingDiv.css('display', 'block');
      _this.contentDiv.css('display', 'none');
      _this.closeButton.css('display', 'none');
    }
  }, {
    key: 'unsetLoading',
    value: function unsetLoading() {
      var _this = this;
      _this.loadingDiv.css('display', 'none');
      _this.closeButton.css('display', 'block');
    }
  }]);

  return TrialView;
}();

exports.default = new TrialView();

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(3);

var _jquery2 = _interopRequireDefault(_jquery);

var _Main = __webpack_require__(30);

var _Main2 = _interopRequireDefault(_Main);

var _browserTabs = __webpack_require__(64);

var _browserTabs2 = _interopRequireDefault(_browserTabs);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(document).ready(function () {
  _Main2.default.init();

  var htmlElement = document.querySelector("html");
  var screenResolutionFactor = _browserTabs2.default.getScreenResolutionFactor();

  if (_ServiceMeta2.default.PLATFORM.toLowerCase() == "chrome" || _ServiceMeta2.default.PLATFORM.toLowerCase() == "edge") {
    _browserTabs2.default.isZoomed().then(function (settings) {
      if (settings.isZoomed) {
        var fixingZoomFactor = _browserTabs2.default.getZoomFactor(settings.zoomFactor);
        (0, _jquery2.default)(htmlElement).css('zoom', fixingZoomFactor + '%');
      }
    });
  }
});

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(3);

var _jquery2 = _interopRequireDefault(_jquery);

var _LanguageView = __webpack_require__(14);

var _LanguageView2 = _interopRequireDefault(_LanguageView);

var _BaseSearchView = __webpack_require__(34);

var _BaseSearchView2 = _interopRequireDefault(_BaseSearchView);

var _LoginView = __webpack_require__(6);

var _LoginView2 = _interopRequireDefault(_LoginView);

var _DashboardView = __webpack_require__(12);

var _DashboardView2 = _interopRequireDefault(_DashboardView);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _BackgroundRequester = __webpack_require__(4);

var _BackgroundRequester2 = _interopRequireDefault(_BackgroundRequester);

var _folders = __webpack_require__(1);

var _folders2 = _interopRequireDefault(_folders);

var _ProxySearchView = __webpack_require__(21);

var _ProxySearchView2 = _interopRequireDefault(_ProxySearchView);

var _Extension = __webpack_require__(63);

var _Extension2 = _interopRequireDefault(_Extension);

var _PermissionView = __webpack_require__(18);

var _PermissionView2 = _interopRequireDefault(_PermissionView);

var _UpdateRequiredView = __webpack_require__(20);

var _UpdateRequiredView2 = _interopRequireDefault(_UpdateRequiredView);

var _Sanitize = __webpack_require__(7);

var _Sanitize2 = _interopRequireDefault(_Sanitize);

var _localeFallback = __webpack_require__(5);

var _localeFallback2 = _interopRequireDefault(_localeFallback);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = function () {
	function Main() {
		_classCallCheck(this, Main);

		this.header = _folders2.default.VIEWS + '/header.html';
		this.maintenance = _folders2.default.VIEWS + '/maintenance-mode.html';

		this.showMaintenanceMessage = this.showMaintenanceMessage.bind(this);
		this.showError = this.showError.bind(this);
	}

	_createClass(Main, [{
		key: 'init',
		value: function init() {
			var _this = this;

			this.App = (0, _jquery2.default)('#app');
			this.App.html("");

			/*
   		$.get(_this.header, function(header){
   			_this.App.append(header);
   			_this.App.append(ClientMeta.LOADINGIMG);
   */

			_Extension2.default.isPermissionValid().then(function (permission) {
				if (permission === false) {
					_PermissionView2.default.show();
				} else {
					_Extension2.default.isVersionStop().then(function (isStop) {
						if (isStop) {
							_UpdateRequiredView2.default.show(true);
							return;
						}
						_this.run();
					}).catch(function () {
						_this.run();
					});
				}
			});
			/*
   		}, "html");
   */
		}
	}, {
		key: 'run',
		value: function run() {
			var _this = this;
			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.LANGUAGE, _ServiceMeta2.default.STORAGEKEYS.BASELINK, _ServiceMeta2.default.STORAGEKEYS.USERDATA, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATATTL, _ServiceMeta2.default.STORAGEKEYS.PROXYSEARCHLOCK, _ServiceMeta2.default.STORAGEKEYS.CONFIGHARDTTL], function (storage) {

				chrome.storage.onChanged.addListener(_this.onSettingsChanged.bind(_this));

				if (!storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK]) return _BaseSearchView2.default.initView();

				if (!storage[_ServiceMeta2.default.STORAGEKEYS.LANGUAGE]) return _LanguageView2.default.initView();

				if (storage[_ServiceMeta2.default.STORAGEKEYS.USERDATA]) return _this.userIsLoggedIn(storage);

				_LoginView2.default.initView();
			});
		}
	}, {
		key: 'onSettingsChanged',
		value: function onSettingsChanged(changes, namespace) {
			var _this = this;
			var changedItems = Object.keys(changes);

			if (changedItems.indexOf(_ServiceMeta2.default.STORAGEKEYS.BASELINK) > -1) {
				var isBaselinkDeleted = changes[_ServiceMeta2.default.STORAGEKEYS.BASELINK].newValue === undefined ? true : false;

				if (isBaselinkDeleted) _BaseSearchView2.default.initView();
			}

			if (changedItems.indexOf(_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA) > -1 && changedItems.indexOf(_ServiceMeta2.default.STORAGEKEYS.USERDATA) > -1) {
				var isUserDeleted = changes[_ServiceMeta2.default.STORAGEKEYS.USERDATA].newValue === undefined ? true : false;
				var isConfigDeteled = changes[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA].newValue === undefined ? true : false;

				if (isUserDeleted && isConfigDeteled) {
					_BackgroundRequester2.default.request('ProxySetting', 'clearSettings', {}).then(function () {
						chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.LASTLOGOUTREASON], function (storage) {
							chrome.storage.local.remove(_ServiceMeta2.default.STORAGEKEYS.LASTLOGOUTREASON, function () {
								var lasterror = storage[_ServiceMeta2.default.STORAGEKEYS.LASTLOGOUTREASON];
								_LoginView2.default.initView(lasterror);
							});
						});
					});
				}
			}

			if (changedItems.indexOf(_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA) > -1) {
				var oldConfig = changes[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA].oldValue;
				var newConfig = changes[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA].newValue;
				if (newConfig && _Utils2.default.isObject(newConfig) && newConfig.hasOwnProperty("user_status") && newConfig["user_status"] == _ServiceMeta2.default.STATUS.BLOCKED && oldConfig && _Utils2.default.isObject(oldConfig) && oldConfig.hasOwnProperty("user_status") && oldConfig["user_status"] == _ServiceMeta2.default.STATUS.OK) {
					_BackgroundRequester2.default.request('ProxySetting', 'clearSettings', {}).then(function () {
						_DashboardView2.default.initView();
					});
				}
			}
		}

		/* Actions */

	}, {
		key: 'userIsLoggedIn',
		value: function userIsLoggedIn(storage) {
			var _this = this;

			_this.clearOldConfig(storage).then(function (oldConfigRemoved) {
				if (!storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA] || oldConfigRemoved || storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA]["user_status"] == _ServiceMeta2.default.STATUS.BLOCKED || storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGHARDTTL] < _Utils2.default.getDateNow()) {
					return _this.getFreshConfig(storage);
				}

				if (storage[_ServiceMeta2.default.STORAGEKEYS.PROXYSEARCHLOCK]) return _ProxySearchView2.default.initView();

				if (storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATATTL] < _Utils2.default.getDateNow()) {

					_BackgroundRequester2.default.request('ConfigUpdater', 'setRefreshList').then(function () {
						_DashboardView2.default.initView();
					});
					return;
				}

				_DashboardView2.default.initView();
			});
		}
	}, {
		key: 'getFreshConfig',
		value: function getFreshConfig(storage) {
			var _this = this;

			var loginData = {
				hitReason: "refreshList",
				userData: storage[_ServiceMeta2.default.STORAGEKEYS.USERDATA]
			};

			_jquery2.default.get(_this.header, function (header) {
				_this.App.append(header);
				_this.setHeaderElements();
				_this.App.append('<div class="loadingimg"><img src="images/loading.gif"></div>');

				_BackgroundRequester2.default.request('api', 'login', loginData).then(function (response) {

					if (_Utils2.default.isResponse200(response)) {

						_DashboardView2.default.initView();
					} else {
						_BackgroundRequester2.default.request('ProxySetting', 'clearSettings', {});
						// Authentication failed
						if (_Utils2.default.isResponseAuthError(response)) {
							chrome.storage.local.remove([_ServiceMeta2.default.STORAGEKEYS.USERDATA, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATATTL, _ServiceMeta2.default.STORAGEKEYS.CONFIGHARDTTL], function () {
								chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.LOCALE], function (storage) {
									_LoginView2.default.initView(_Utils2.default.getFallbackLocale("AuthFailed", storage[_ServiceMeta2.default.STORAGEKEYS.LOCALE], _localeFallback2.default));
								});
							});
							return;
						}

						if (_Utils2.default.isResponseMinus20(response)) {
							chrome.storage.local.remove([_ServiceMeta2.default.STORAGEKEYS.USERDATA, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATATTL, _ServiceMeta2.default.STORAGEKEYS.CONFIGHARDTTL], function () {
								_LoginView2.default.initView(response.message);
							});
							return;
						}

						if (_Utils2.default.isResponseMinusOne(response)) {
							return _Utils2.default.showMinusOneError(_this.showError.bind(_this));
						}

						if (_Utils2.default.isMaintenanceMode(response)) {
							_this.showMaintenanceMessage(response.message);
						}
					}
				});
			}, "html");
		}
	}, {
		key: 'clearOldConfig',
		value: function clearOldConfig(storage) {
			return new Promise(function (resolve, reject) {
				var curConfig = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA];
				if (curConfig && _Utils2.default.isObject(curConfig) && curConfig.hasOwnProperty("data") && _Utils2.default.isObject(curConfig.data) && curConfig.data.hasOwnProperty("SERVERS")) {
					chrome.storage.local.remove(_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA, function () {
						resolve(true);
					});
				} else {
					resolve(false);
				}
			});
		}
	}, {
		key: 'showError',
		value: function showError(error) {
			var _this = this;
			(0, _jquery2.default)('#app').html('');
			(0, _jquery2.default)('#app').append('<p style="text-align:center">' + _Sanitize2.default.escpateData(error) + '</p>');
		}
	}, {
		key: 'showMaintenanceMessage',
		value: function showMaintenanceMessage(message) {
			var _this = this;
			_jquery2.default.get(_this.maintenance, function (maintenance) {
				(0, _jquery2.default)('#app').html('');
				(0, _jquery2.default)('#app').append(maintenance);

				(0, _jquery2.default)('#maintenance-msg').text(message);
				(0, _jquery2.default)('#maintenance-mode-close-icon').click(function () {
					location.reload();
				});
				(0, _jquery2.default)('#maintenance-mode').css('display', 'block');
			});
		}
	}, {
		key: 'setHeaderElements',
		value: function setHeaderElements() {
			var _this = this;
			_this.headerLogo = (0, _jquery2.default)('#header-logo');
			_this.headerLogo.attr('src', _ServiceMeta2.default.IMAGES.HEADERLOGO);
		}
	}]);

	return Main;
}();

exports.default = new Main();

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	CONNECTIONERROR: "net::ERR_PROXY_CONNECTION_FAILED",
	VERIFYERROR: "net::ERR_NAME_NOT_RESOLVED"
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	name: 'Chrome',
	WebRTCAddon: {
		id: 'bppamachkoflopbagkdoflbgfjflfnfl',
		url: 'https://chrome.google.com/webstore/detail/webrtc-leak-shield/bppamachkoflopbagkdoflbgfjflfnfl'
	},
	proxyAddons: ["oofgbpoabipfcfjapgnbbjjaenockbdp", "nbcojefnccbanplpoffopkoepjmhgdgh"]
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	"mainbase_search_timeout": 10000,
	"tierbase_search_timeout": 15000,
	"mainbase_api_timeout": 20000,
	"tierbase_api_timeout": 25000,
	"proxy_search_timeout": 10000
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(3);

var _jquery2 = _interopRequireDefault(_jquery);

var _folders = __webpack_require__(1);

var _folders2 = _interopRequireDefault(_folders);

var _BackgroundRequester = __webpack_require__(4);

var _BackgroundRequester2 = _interopRequireDefault(_BackgroundRequester);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseSearchView = function () {
	function BaseSearchView() {
		_classCallCheck(this, BaseSearchView);

		this.template = _folders2.default.VIEWS + '/basesearch.html';
		this.header = _folders2.default.VIEWS + '/header.html';
	}

	_createClass(BaseSearchView, [{
		key: 'initView',
		value: function initView() {
			var _this = this;

			this.App = (0, _jquery2.default)('#app');
			this.App.html("");

			_this.loadStorageData().then(function (storage) {

				_jquery2.default.get(_this.header, function (header) {
					_this.App.append(header);
					_jquery2.default.get(_this.template, function (template) {
						_this.App.append(template);

						_this.selectElements();
						_this.setSearchPort();

						_BackgroundRequester2.default.request('baseFinder', 'init', {}, function () {});
					}, "html");
				}, "html");
			});

			/*
   
   $.get(_this.header, function(header){
   	_this.App.append(header);
   	$.get(_this.template, function(template){
   		_this.App.append(template);
   		_this.selectElements();
   		_this.setSearchPort();
   	}, "html");
   }, "html");	
   */
		}
	}, {
		key: 'setBaselinkNotFound',
		value: function setBaselinkNotFound() {
			var _this = this;

			_this.searchView.css('display', 'none');
			_this.searchFailedView.css('display', 'block');
		}
	}, {
		key: 'unsetBaselinkNotFound',
		value: function unsetBaselinkNotFound() {
			var _this = this;

			_this.searchView.css('display', 'block');
			_this.searchFailedView.css('display', 'none');
		}
	}, {
		key: 'loadStorageData',
		value: function loadStorageData() {
			return new Promise(function (resolve, reject) {

				chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.BASELINKNOTFOUND], function (storage) {

					resolve(storage);
				});
			});
		}
	}, {
		key: 'selectElements',
		value: function selectElements() {
			var _this = this;

			_this.headerLogo = (0, _jquery2.default)('#header-logo');
			_this.searchServiceName = (0, _jquery2.default)('#search-service-name');

			_this.progressText = (0, _jquery2.default)('#basesearch-progress');
			_this.cancelButton = (0, _jquery2.default)('#basesearch-cancel-btn');

			_this.searchView = (0, _jquery2.default)('#search-view');
			_this.searchFailedView = (0, _jquery2.default)('#search-failed-view');

			_this.tryAgainButton = (0, _jquery2.default)('#try-again-button');
			_this.contactSupportButton = (0, _jquery2.default)('#contact-support-button');

			_this.setServiceElements();
			_this.setEvents();
		}
	}, {
		key: 'setServiceElements',
		value: function setServiceElements() {
			var _this = this;
			_this.headerLogo.attr('src', _ServiceMeta2.default.IMAGES.HEADERLOGO);
			_this.searchServiceName.text(_ServiceMeta2.default.SERVICE);
		}
	}, {
		key: 'setEvents',
		value: function setEvents() {
			var _this = this;
			_this.cancelButton.click(_this.onCancelButton.bind(this));
			_this.tryAgainButton.click(_this.onTryAgainButtonClicked.bind(this));
			_this.contactSupportButton.click(_this.onContactSupportButtonClicked.bind(this));
		}
	}, {
		key: 'setSearchPort',
		value: function setSearchPort() {
			this.searchPort = chrome.runtime.connect({ name: "basesearch-port" });
			this.searchPort.onMessage.addListener(this.onSearchUpdate.bind(this));
		}
	}, {
		key: 'onSearchUpdate',
		value: function onSearchUpdate(update) {
			var _this = this;

			switch (update.action) {
				case "progress":
					_this.onUpdateReceived(update.data);
					break;
				case "failed":
					_this.onSearchFailed(update.data);
					break;
				case "success":
					_this.onSearchSuccess(update.data);
					break;
			}

			/*
   if(update && update.progress)
   _this.progressText.text(update.progress);
   */
		}
	}, {
		key: 'onSearchSuccess',
		value: function onSearchSuccess() {
			var _this = this;

			location.reload();
		}
	}, {
		key: 'onUpdateReceived',
		value: function onUpdateReceived(update) {
			var _this = this;

			_this.unsetBaselinkNotFound();
			_this.progressText.text(update);
		}
	}, {
		key: 'onSearchFailed',
		value: function onSearchFailed(data) {
			var _this = this;

			_this.setBaselinkNotFound();
		}
	}, {
		key: 'onCancelButton',
		value: function onCancelButton() {
			_BackgroundRequester2.default.request('baseFinder', 'abortAll', {}, function () {});
		}
	}, {
		key: 'onTryAgainButtonClicked',
		value: function onTryAgainButtonClicked() {
			var _this = this;

			chrome.storage.local.remove(_ServiceMeta2.default.STORAGEKEYS.BASELINKNOTFOUND, function () {
				_this.unsetBaselinkNotFound();
				_BackgroundRequester2.default.request('baseFinder', 'init', {}, function () {});
			});
		}
	}, {
		key: 'onContactSupportButtonClicked',
		value: function onContactSupportButtonClicked() {
			var _this = this;

			_Utils2.default.openNewTab(_ServiceMeta2.default.CONTACTSUPPORTURL);
		}
	}]);

	return BaseSearchView;
}();

exports.default = new BaseSearchView();

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tabs = function () {
	function Tabs(el, options) {
		_classCallCheck(this, Tabs);

		this.options = { start: 0 };
		this.el = el;
		this.options = this.extend({}, this.options);
		this.extend(this.options, options);
		this._init();
	}

	_createClass(Tabs, [{
		key: 'extend',
		value: function extend(a, b) {
			for (var key in b) {
				if (b.hasOwnProperty(key)) {
					a[key] = b[key];
				}
			}
			return a;
		}
	}, {
		key: 'addOnChangedListener',
		value: function addOnChangedListener(func) {
			this.onChangedFunc = func;
		}
	}, {
		key: '_init',
		value: function _init() {
			// tabs elems
			this.tabs = [].slice.call(this.el.querySelectorAll('nav > ul > li'));
			// content items
			this.items = [].slice.call(this.el.querySelectorAll('.tabs__content-wrap > section'));
			// current index
			this.current = -1;
			// show current content item
			this._show();
			// init events
			this._initEvents();
		}
	}, {
		key: '_initEvents',
		value: function _initEvents() {
			var self = this;
			this.tabs.forEach(function (tab, idx) {
				tab.addEventListener('click', function (ev) {
					ev.preventDefault();
					self._show(idx);

					if (self.onChangedFunc) self.onChangedFunc(idx);
				});
			});
		}
	}, {
		key: '_show',
		value: function _show(idx) {
			if (this.current >= 0) {
				this.tabs[this.current].className = this.items[this.current].className = '';
			}
			// change current
			this.current = idx != undefined ? idx : this.options.start >= 0 && this.options.start < this.items.length ? this.options.start : 0;
			this.tabs[this.current].className = 'tab-current';
			this.items[this.current].className = 'content-current';
		}
	}]);

	return Tabs;
}();

exports.default = Tabs;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ServerList = function () {
    function ServerList() {
        _classCallCheck(this, ServerList);
    }

    _createClass(ServerList, [{
        key: "sortByCountry",
        value: function sortByCountry(serverList) {
            var listByCountry = {
                serverList: {},
                stats: {}
            };

            for (var serverKey in serverList) {
                if (serverList.hasOwnProperty(serverKey)) {
                    var server = serverList[serverKey];
                    var country = server.CountryCode;

                    if (!listByCountry.serverList.hasOwnProperty(country)) listByCountry.serverList[country] = [];
                    listByCountry.serverList[country].push(server);

                    if (!listByCountry.stats.hasOwnProperty(country)) {
                        listByCountry.stats[country] = {};
                        listByCountry.stats[country].sum = 0;
                        listByCountry.stats[country].count = 0;
                    }

                    listByCountry.stats[country].count += 1;
                    listByCountry.stats[country].sum += server.Pos === 0 ? 1 : server.Pos;
                }
            }

            for (var key in listByCountry.serverList) {
                //console.log(key);
                if (listByCountry.serverList.hasOwnProperty(key)) {
                    //console.log(listByCountry.serverList[key]);
                    for (var i = 0; i < listByCountry.serverList[key].length; i++) {
                        var pos = listByCountry.serverList[key][i].Pos === 0 ? 1 : listByCountry.serverList[key][i].Pos;
                        listByCountry.serverList[key][i].TotalPos = listByCountry.stats[key].sum / pos;

                        if (listByCountry.stats.hasOwnProperty(key)) {
                            if (!listByCountry.stats[key].hasOwnProperty("TotalPosSum")) listByCountry.stats[key].TotalPosSum = 0;
                            listByCountry.stats[key].TotalPosSum += listByCountry.serverList[key][i].TotalPos;
                        }
                    }
                }
            }

            for (var key in listByCountry.serverList) {
                if (listByCountry.serverList.hasOwnProperty(key)) {
                    for (var i = 0; i < listByCountry.serverList[key].length; i++) {
                        listByCountry.serverList[key][i].Prozent = listByCountry.serverList[key][i].TotalPos / listByCountry.stats[key].TotalPosSum * 100;
                    }
                }
            }

            for (var key in listByCountry.serverList) {
                if (listByCountry.serverList.hasOwnProperty(key)) {

                    var max = 100;
                    var sum = 0;
                    for (var i = 0; i < listByCountry.serverList[key].length; i++) {
                        listByCountry.serverList[key][i].rangeMin = sum;
                        sum += listByCountry.serverList[key][i].Prozent;
                        listByCountry.serverList[key][i].rangeMax = sum;
                    }
                }
            }

            return listByCountry.serverList;
        }
    }, {
        key: "sortByLoad",
        value: function sortByLoad(serverList, isPublic) {

            var server_sorted = [];
            for (var server in serverList) {
                if (serverList.hasOwnProperty(server)) {
                    var serverItemObject = serverList[server];
                    serverItemObject.Identifier = server;
                    server_sorted.push([serverItemObject, serverList[server].Pos]);
                }
            }
            server_sorted.sort(function (a, b) {
                return a[1] - b[1];
            });

            var serverListData = {};
            for (var i = 0; i < server_sorted.length; i++) {
                serverListData[server_sorted[i][0].Identifier] = server_sorted[i][0];
            }

            if (!isPublic) return this.sortByCountry(serverListData);

            var serverData = {
                isPublic: true,
                serverListData: serverListData
            };

            return serverData;
        }
    }, {
        key: "generateSearchData",
        value: function generateSearchData(randomServer, serverList) {

            for (var i = 0; i < serverList.length; i++) {
                if (randomServer.hasOwnProperty('Host')) {
                    if (serverList[i].Host === randomServer.Host) {
                        serverList.splice(i, 1);
                    }
                }
            }

            var randomServerArray = [];
            randomServerArray.push(randomServer);

            var searchData = {
                randomSelectedServer: randomServerArray,
                serverList: serverList
            };

            return searchData;
        }
    }, {
        key: "getServerByLoad",
        value: function getServerByLoad(servers, key) {
            var random = Math.floor(Math.random() * 99) + 1;

            if (servers && servers.hasOwnProperty(key)) {
                for (var i = 0; i < servers[key].length; i++) {
                    if (servers[key][i].rangeMin < random && random < servers[key][i].rangeMax) {

                        return servers[key][i];
                    }
                }
            }
            return servers[key][0];
        }
    }]);

    return ServerList;
}();

exports.default = new ServerList();

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(3);

var _jquery2 = _interopRequireDefault(_jquery);

var _folders = __webpack_require__(1);

var _folders2 = _interopRequireDefault(_folders);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _LanguageView = __webpack_require__(14);

var _LanguageView2 = _interopRequireDefault(_LanguageView);

var _DashboardView = __webpack_require__(12);

var _DashboardView2 = _interopRequireDefault(_DashboardView);

var _BackgroundRequester = __webpack_require__(4);

var _BackgroundRequester2 = _interopRequireDefault(_BackgroundRequester);

var _Sanitize = __webpack_require__(7);

var _Sanitize2 = _interopRequireDefault(_Sanitize);

var _CloseAccountView = __webpack_require__(38);

var _CloseAccountView2 = _interopRequireDefault(_CloseAccountView);

var _localeFallback = __webpack_require__(5);

var _localeFallback2 = _interopRequireDefault(_localeFallback);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var shajs = __webpack_require__(15);

var UserProfileView = function () {
	function UserProfileView() {
		_classCallCheck(this, UserProfileView);

		this.template = _folders2.default.VIEWS + '/userprofile3.html';
		this.header = _folders2.default.VIEWS + '/header.html';
	}

	_createClass(UserProfileView, [{
		key: 'initView',
		value: function initView() {
			var _this = this;

			_Utils2.default.getLocaleInStorage().then(_this.loadTemplate.bind(this), _this.loadLocaleFromServer.bind(this));
		}
	}, {
		key: 'loadTemplate',
		value: function loadTemplate(locale) {
			var _this = this;

			this.App = (0, _jquery2.default)('#app');
			this.App.html("");

			_jquery2.default.get(_this.header, function (header) {
				_this.App.append(header);
				_jquery2.default.get(_this.template, function (template) {

					_this.loadStorageData().then(function (storage) {
						_this.Storage = storage;

						var loadedTemplate = _Utils2.default.loadTemplateWithFallback(template, locale, _localeFallback2.default);
						_this.App.append(loadedTemplate);

						_this.selectElements(locale);
						_this.setHeaderBackButton();
						_this.setAuthcode(storage);

						_this.setPlaceholder(storage);

						_this.setInAppNotificationState();

						// Setting all events for selected elements
						_this.setEvents();
					});
				}, "html");
			}, "html");
		}
	}, {
		key: 'setAuthcode',
		value: function setAuthcode() {
			var _this = this;
			if (_this.Storage.userData.authcode) {
				_this.userProfileAuthcode.text(_this.Storage.userData.authcode);
				(0, _jquery2.default)('#authcode-container').css('display', 'block');
			}
		}
	}, {
		key: 'selectElements',
		value: function selectElements(locale) {
			var _this = this;

			_this.headerLogo = (0, _jquery2.default)('#header-logo');
			_this.headerVersion = (0, _jquery2.default)('#header-version');

			_this.userProfileAuthcode = (0, _jquery2.default)('#user-profile-authcode');
			_this.userProfileAuthcodeCopied = (0, _jquery2.default)('#authcode-copied-clipboard');
			_this.userProfileShowAuthcode = (0, _jquery2.default)('#show-authcode');

			_this.changeLanguageButton = (0, _jquery2.default)('#change-language-button');
			_this.changeBackButton = (0, _jquery2.default)('#user-profile-back-button');

			_this.closeAccountButton = (0, _jquery2.default)('#close-account-btn');

			/* In-App Notification */
			_this.inAppNotificationContainer = (0, _jquery2.default)('#notification-inapp-container');
			_this.inAppNotificationCheckbox = (0, _jquery2.default)('#notification-inapp-checkbox');

			_this.setServiceElements(locale);
		}
	}, {
		key: 'setServiceElements',
		value: function setServiceElements(locale) {
			var _this = this;
			_this.headerLogo.attr('src', _ServiceMeta2.default.IMAGES.HEADERLOGO);
			_this.headerVersion.text('v. ' + _ServiceMeta2.default.VERSION);
		}
	}, {
		key: 'setEvents',
		value: function setEvents() {
			var _this = this;

			_this.userProfileAuthcode.click(_this.onUserProfileAuthcodeClicked.bind(this));
			_this.userProfileShowAuthcode.click(_this.onUserProfileShowAuthcodeClicked.bind(this));

			_this.closeAccountButton.click(_this.onCloseAccountClicked.bind(this));
		}
	}, {
		key: 'onCloseAccountClicked',
		value: function onCloseAccountClicked() {
			var _this = this;

			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.USERDATA], function (storage) {
				_CloseAccountView2.default.show(storage[_ServiceMeta2.default.STORAGEKEYS.USERDATA]);
			});
		}
	}, {
		key: 'setHeaderBackButton',
		value: function setHeaderBackButton() {
			var _this = this;
			_this.headerBackButton = (0, _jquery2.default)('#header-back-button');
			_this.headerBackButton.css('display', 'block');
			_this.headerBackButton.click(_this.onBackButtonClicked.bind(this));
		}
	}, {
		key: 'setPlaceholder',
		value: function setPlaceholder(storage) {
			var _this = this;

			_this.changeLanguageButton.click(_this.onChangeLanguageClicked.bind(this));

			_this.changeBackButton.click(_this.onBackButtonClicked.bind(this));

			/* In-App Notification */
			_this.inAppNotificationCheckbox.click(_this.onInAppNotificationSwitchChanged.bind(this));
		}
	}, {
		key: 'setNotificationState',
		value: function setNotificationState(storage) {
			var _this = this;

			var config = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA];

			if (config && config.notificationstate.toLowerCase() == 'y') return _this.notificationCheckbox.prop('checked', true);

			_this.notificationCheckbox.prop('checked', false);
		}
	}, {
		key: 'setInAppNotificationState',
		value: function setInAppNotificationState() {
			var _this = this;

			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.ISINAPPNOTIFICATIONOFF, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA], function (storage) {
				var configData = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA];
				var uid = configData && configData.uid ? configData.uid : "";

				var inAppNoti = storage[_ServiceMeta2.default.STORAGEKEYS.ISINAPPNOTIFICATIONOFF];

				var condition = inAppNoti && inAppNoti[uid] === false ? true : false;

				if (condition) {
					return _this.inAppNotificationCheckbox.prop('checked', false);
				}

				_this.inAppNotificationCheckbox.prop('checked', true);
			});
		}
	}, {
		key: 'loadStorageData',
		value: function loadStorageData() {
			return new Promise(function (resolve, reject) {

				chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.USERDATA, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA, _ServiceMeta2.default.STORAGEKEYS.LOCALE], function (storage) {

					resolve(storage);
				});
			});
		}
	}, {
		key: 'loadLocaleFromServer',
		value: function loadLocaleFromServer() {

			_BackgroundRequester2.default.request("api", "getLocale", {}).then(function (resp) {
				if (resp != undefined && resp != "" && resp.Retcode === 200) {

					chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.LOCALE, resp.locale), function () {

						window.location.reload(true);
					});
				} else {
					//todo can't get locale
				}
			});
		}
	}, {
		key: 'fallbackCopyTextToClipboard',
		value: function fallbackCopyTextToClipboard(text) {
			var _this = this;
			var textArea = document.createElement("textarea");
			textArea.value = text;
			textArea.style.position = "fixed"; //avoid scrolling to bottom
			document.body.appendChild(textArea);
			textArea.focus();
			textArea.select();

			try {
				var successful = document.execCommand('copy');
				var msg = successful ? 'successful' : 'unsuccessful';
			} catch (err) {
				console.error('Fallback: Oops, unable to copy', err);
			}

			document.body.removeChild(textArea);
		}
	}, {
		key: 'copyTextToClipboard',
		value: function copyTextToClipboard(text) {
			var _this = this;

			if (!navigator.clipboard) {
				_this.fallbackCopyTextToClipboard(text);
				return;
			}
			navigator.clipboard.writeText(text).then(function () {}, function (err) {
				console.error('Async: Could not copy text: ', err);
			});
		}

		/* Events */

	}, {
		key: 'onBackButtonClicked',
		value: function onBackButtonClicked() {
			location.reload();
		}
	}, {
		key: 'onChangeLanguageClicked',
		value: function onChangeLanguageClicked() {
			_LanguageView2.default.initView();
		}
	}, {
		key: 'onInAppNotificationSwitchChanged',
		value: function onInAppNotificationSwitchChanged() {
			var _this = this;

			var notificationSwitch = _this.inAppNotificationCheckbox.prop('checked');

			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA, _ServiceMeta2.default.STORAGEKEYS.ISINAPPNOTIFICATIONOFF], function (storage) {

				var configData = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA];
				var uid = configData && configData.uid ? configData.uid : "";

				var inAppNotification = storage[_ServiceMeta2.default.STORAGEKEYS.ISINAPPNOTIFICATIONOFF];

				if (!inAppNotification) inAppNotification = {};

				inAppNotification[uid] = notificationSwitch;

				chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.ISINAPPNOTIFICATIONOFF, inAppNotification));
			});
		}
	}, {
		key: 'onUserProfileAuthcodeClicked',
		value: function onUserProfileAuthcodeClicked() {
			var _this = this;
			var authcode = (0, _jquery2.default)('#user-profile-authcode').text().toUpperCase();

			if (_ServiceMeta2.default.PLATFORM.toLowerCase() === 'firefox') {
				_this.fallbackCopyTextToClipboard(authcode);
			} else {
				_this.copyTextToClipboard(authcode);
			}

			_this.userProfileAuthcode.css('display', 'none');
			_this.userProfileAuthcodeCopied.css('display', 'block');

			setTimeout(function () {
				_this.userProfileAuthcodeCopied.css('display', 'none');
				_this.userProfileAuthcode.css('display', 'block');
			}, 5000);
		}
	}, {
		key: 'onUserProfileShowAuthcodeClicked',
		value: function onUserProfileShowAuthcodeClicked() {
			var _this = this;
			_this.userProfileShowAuthcode.css('display', 'none');
			_this.userProfileAuthcode.css('display', 'block');
		}
	}]);

	return UserProfileView;
}();

exports.default = new UserProfileView();

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(3);

var _jquery2 = _interopRequireDefault(_jquery);

var _folders = __webpack_require__(1);

var _folders2 = _interopRequireDefault(_folders);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _localeFallback = __webpack_require__(5);

var _localeFallback2 = _interopRequireDefault(_localeFallback);

var _BackgroundRequester = __webpack_require__(4);

var _BackgroundRequester2 = _interopRequireDefault(_BackgroundRequester);

var _LoginView = __webpack_require__(6);

var _LoginView2 = _interopRequireDefault(_LoginView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CloseAccountView = function () {
  function CloseAccountView() {
    _classCallCheck(this, CloseAccountView);

    this.template = _folders2.default.VIEWS + '/close-account.html';
  }

  _createClass(CloseAccountView, [{
    key: 'show',
    value: function show(userData) {
      var _this2 = this;

      var _this = this;
      _this.userData = userData;

      _Utils2.default.getLocaleInStorage().then(function (locale) {
        _this2.App = (0, _jquery2.default)('#app');
        _this2.App.html("");

        _jquery2.default.get(_this.template, function (template) {
          var loadedTemplate = _Utils2.default.loadTemplateWithFallback(template, locale, _localeFallback2.default);

          _this.App.append(loadedTemplate);
          _this.selectElements();
        }, "html");
      });
    }
  }, {
    key: 'selectElements',
    value: function selectElements() {
      var _this = this;

      _this.closeAccountButton = (0, _jquery2.default)('#close-account-btn');
      _this.goBackButton = (0, _jquery2.default)('#go-back-btn');
      _this.closeIcon = (0, _jquery2.default)('#close-icon');

      _this.loadingImg = (0, _jquery2.default)('#close-account-loading');
      _this.loadingDiv = (0, _jquery2.default)('#loading-div');

      _this.contentDiv = (0, _jquery2.default)('#content-div');

      _this.errorDiv = (0, _jquery2.default)('#error-div');

      _this.successDiv = (0, _jquery2.default)('#success-div');

      _this.setEvents();
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {
      var _this = this;

      _this.closeAccountButton.click(_this.onCloseAccountClicked.bind(this));
      _this.goBackButton.click(_this.onCancel.bind(this));
      _this.closeIcon.click(_this.onCancel.bind(this));
    }

    // Events

  }, {
    key: 'onCloseAccountClicked',
    value: function onCloseAccountClicked() {
      var _this = this;
      _this.setLoading();
      _BackgroundRequester2.default.request('api', 'closeAccount', {
        authcode: _this.userData && _this.userData.authcode ? _this.userData.authcode.toLowerCase() : ""
      }).then(function (response) {

        _this.unsetLoading();

        if (_Utils2.default.isResponse200(response)) return _this.accountClosed();

        if (_Utils2.default.isResponseMinus20(response)) return _this.showError(response.message);

        if (_Utils2.default.isResponseMinusOne(response)) {
          return _Utils2.default.showMinusOneError(_this.showError.bind(_this));
        }

        if (_Utils2.default.isResponseAuthError(response)) {
          chrome.storage.local.remove([_ServiceMeta2.default.STORAGEKEYS.USERDATA], function () {
            chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.LOCALE], function (storage) {
              _LoginView2.default.initView(_Utils2.default.getFallbackLocale("AuthFailed", storage[_ServiceMeta2.default.STORAGEKEYS.LOCALE], _localeFallback2.default));
            });
          });
        }

        if (_Utils2.default.isMaintenanceMode(response)) {
          _this.showMaintenanceMessage(response.message);
        }
      });
    }
  }, {
    key: 'showMaintenanceMessage',
    value: function showMaintenanceMessage(message) {
      var _this = this;
      (0, _jquery2.default)('#maintenance-msg').text(message);
      (0, _jquery2.default)('#maintenance-mode-close-icon').click(function () {
        location.reload();
      });
      (0, _jquery2.default)('#maintenance-mode').css('display', 'block');
      (0, _jquery2.default)('#close-account-mode').css('display', 'none');
      (0, _jquery2.default)('#header-container').css('display', 'none');
    }
  }, {
    key: 'onCancel',
    value: function onCancel() {
      var _this = this;
      location.reload();
    }
  }, {
    key: 'accountClosed',
    value: function accountClosed() {
      var _this = this;
      _this.successDiv.css('display', 'block');
    }
  }, {
    key: 'showError',
    value: function showError(error) {
      var _this = this;
      if (error) return _this.errorDiv.text(error);
      _this.errorDiv.text("Unknow error, contact support");
    }
  }, {
    key: 'setLoading',
    value: function setLoading() {
      var _this = this;
      _this.loadingImg.html(_ServiceMeta2.default.LOADINGIMG);
      _this.loadingDiv.css('display', 'block');
      _this.contentDiv.css('display', 'none');
      _this.closeIcon.css('display', 'none');
    }
  }, {
    key: 'unsetLoading',
    value: function unsetLoading() {
      var _this = this;
      _this.loadingDiv.css('display', 'none');
      _this.closeIcon.css('display', 'block');
    }
  }]);

  return CloseAccountView;
}();

exports.default = new CloseAccountView();

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-0, as defined
 * in FIPS PUB 180-1
 * This source code is derived from sha1.js of the same repository.
 * The difference between SHA-0 and SHA-1 is just a bitwise rotate left
 * operation was added.
 */

var inherits = __webpack_require__(10)
var Hash = __webpack_require__(11)
var Buffer = __webpack_require__(9).Buffer

var K = [
  0x5a827999, 0x6ed9eba1, 0x8f1bbcdc | 0, 0xca62c1d6 | 0
]

var W = new Array(80)

function Sha () {
  this.init()
  this._w = W

  Hash.call(this, 64, 56)
}

inherits(Sha, Hash)

Sha.prototype.init = function () {
  this._a = 0x67452301
  this._b = 0xefcdab89
  this._c = 0x98badcfe
  this._d = 0x10325476
  this._e = 0xc3d2e1f0

  return this
}

function rotl5 (num) {
  return (num << 5) | (num >>> 27)
}

function rotl30 (num) {
  return (num << 30) | (num >>> 2)
}

function ft (s, b, c, d) {
  if (s === 0) return (b & c) | ((~b) & d)
  if (s === 2) return (b & c) | (b & d) | (c & d)
  return b ^ c ^ d
}

Sha.prototype._update = function (M) {
  var W = this._w

  var a = this._a | 0
  var b = this._b | 0
  var c = this._c | 0
  var d = this._d | 0
  var e = this._e | 0

  for (var i = 0; i < 16; ++i) W[i] = M.readInt32BE(i * 4)
  for (; i < 80; ++i) W[i] = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16]

  for (var j = 0; j < 80; ++j) {
    var s = ~~(j / 20)
    var t = (rotl5(a) + ft(s, b, c, d) + e + W[j] + K[s]) | 0

    e = d
    d = c
    c = rotl30(b)
    b = a
    a = t
  }

  this._a = (a + this._a) | 0
  this._b = (b + this._b) | 0
  this._c = (c + this._c) | 0
  this._d = (d + this._d) | 0
  this._e = (e + this._e) | 0
}

Sha.prototype._hash = function () {
  var H = Buffer.allocUnsafe(20)

  H.writeInt32BE(this._a | 0, 0)
  H.writeInt32BE(this._b | 0, 4)
  H.writeInt32BE(this._c | 0, 8)
  H.writeInt32BE(this._d | 0, 12)
  H.writeInt32BE(this._e | 0, 16)

  return H
}

module.exports = Sha


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(41)
var ieee754 = __webpack_require__(42)
var isArray = __webpack_require__(43)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)))

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return (b64.length * 3 / 4) - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr((len * 3 / 4) - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0; i < l; i += 4) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ }),
/* 42 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 43 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined
 * in FIPS PUB 180-1
 * Version 2.1a Copyright Paul Johnston 2000 - 2002.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for details.
 */

var inherits = __webpack_require__(10)
var Hash = __webpack_require__(11)
var Buffer = __webpack_require__(9).Buffer

var K = [
  0x5a827999, 0x6ed9eba1, 0x8f1bbcdc | 0, 0xca62c1d6 | 0
]

var W = new Array(80)

function Sha1 () {
  this.init()
  this._w = W

  Hash.call(this, 64, 56)
}

inherits(Sha1, Hash)

Sha1.prototype.init = function () {
  this._a = 0x67452301
  this._b = 0xefcdab89
  this._c = 0x98badcfe
  this._d = 0x10325476
  this._e = 0xc3d2e1f0

  return this
}

function rotl1 (num) {
  return (num << 1) | (num >>> 31)
}

function rotl5 (num) {
  return (num << 5) | (num >>> 27)
}

function rotl30 (num) {
  return (num << 30) | (num >>> 2)
}

function ft (s, b, c, d) {
  if (s === 0) return (b & c) | ((~b) & d)
  if (s === 2) return (b & c) | (b & d) | (c & d)
  return b ^ c ^ d
}

Sha1.prototype._update = function (M) {
  var W = this._w

  var a = this._a | 0
  var b = this._b | 0
  var c = this._c | 0
  var d = this._d | 0
  var e = this._e | 0

  for (var i = 0; i < 16; ++i) W[i] = M.readInt32BE(i * 4)
  for (; i < 80; ++i) W[i] = rotl1(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16])

  for (var j = 0; j < 80; ++j) {
    var s = ~~(j / 20)
    var t = (rotl5(a) + ft(s, b, c, d) + e + W[j] + K[s]) | 0

    e = d
    d = c
    c = rotl30(b)
    b = a
    a = t
  }

  this._a = (a + this._a) | 0
  this._b = (b + this._b) | 0
  this._c = (c + this._c) | 0
  this._d = (d + this._d) | 0
  this._e = (e + this._e) | 0
}

Sha1.prototype._hash = function () {
  var H = Buffer.allocUnsafe(20)

  H.writeInt32BE(this._a | 0, 0)
  H.writeInt32BE(this._b | 0, 4)
  H.writeInt32BE(this._c | 0, 8)
  H.writeInt32BE(this._d | 0, 12)
  H.writeInt32BE(this._e | 0, 16)

  return H
}

module.exports = Sha1


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-256, as defined
 * in FIPS 180-2
 * Version 2.2-beta Copyright Angel Marin, Paul Johnston 2000 - 2009.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 *
 */

var inherits = __webpack_require__(10)
var Sha256 = __webpack_require__(23)
var Hash = __webpack_require__(11)
var Buffer = __webpack_require__(9).Buffer

var W = new Array(64)

function Sha224 () {
  this.init()

  this._w = W // new Array(64)

  Hash.call(this, 64, 56)
}

inherits(Sha224, Sha256)

Sha224.prototype.init = function () {
  this._a = 0xc1059ed8
  this._b = 0x367cd507
  this._c = 0x3070dd17
  this._d = 0xf70e5939
  this._e = 0xffc00b31
  this._f = 0x68581511
  this._g = 0x64f98fa7
  this._h = 0xbefa4fa4

  return this
}

Sha224.prototype._hash = function () {
  var H = Buffer.allocUnsafe(28)

  H.writeInt32BE(this._a, 0)
  H.writeInt32BE(this._b, 4)
  H.writeInt32BE(this._c, 8)
  H.writeInt32BE(this._d, 12)
  H.writeInt32BE(this._e, 16)
  H.writeInt32BE(this._f, 20)
  H.writeInt32BE(this._g, 24)

  return H
}

module.exports = Sha224


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var inherits = __webpack_require__(10)
var SHA512 = __webpack_require__(24)
var Hash = __webpack_require__(11)
var Buffer = __webpack_require__(9).Buffer

var W = new Array(160)

function Sha384 () {
  this.init()
  this._w = W

  Hash.call(this, 128, 112)
}

inherits(Sha384, SHA512)

Sha384.prototype.init = function () {
  this._ah = 0xcbbb9d5d
  this._bh = 0x629a292a
  this._ch = 0x9159015a
  this._dh = 0x152fecd8
  this._eh = 0x67332667
  this._fh = 0x8eb44a87
  this._gh = 0xdb0c2e0d
  this._hh = 0x47b5481d

  this._al = 0xc1059ed8
  this._bl = 0x367cd507
  this._cl = 0x3070dd17
  this._dl = 0xf70e5939
  this._el = 0xffc00b31
  this._fl = 0x68581511
  this._gl = 0x64f98fa7
  this._hl = 0xbefa4fa4

  return this
}

Sha384.prototype._hash = function () {
  var H = Buffer.allocUnsafe(48)

  function writeInt64BE (h, l, offset) {
    H.writeInt32BE(h, offset)
    H.writeInt32BE(l, offset + 4)
  }

  writeInt64BE(this._ah, this._al, 0)
  writeInt64BE(this._bh, this._bl, 8)
  writeInt64BE(this._ch, this._cl, 16)
  writeInt64BE(this._dh, this._dl, 24)
  writeInt64BE(this._eh, this._el, 32)
  writeInt64BE(this._fh, this._fl, 40)

  return H
}

module.exports = Sha384


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _folders = __webpack_require__(1);

var _folders2 = _interopRequireDefault(_folders);

var _jquery = __webpack_require__(3);

var _jquery2 = _interopRequireDefault(_jquery);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _BackgroundRequester = __webpack_require__(4);

var _BackgroundRequester2 = _interopRequireDefault(_BackgroundRequester);

var _UpgradeView = __webpack_require__(13);

var _UpgradeView2 = _interopRequireDefault(_UpgradeView);

var _localhosts = __webpack_require__(48);

var _localhosts2 = _interopRequireDefault(_localhosts);

var _DOMPurify = __webpack_require__(8);

var _DOMPurify2 = _interopRequireDefault(_DOMPurify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BypassConfigView = function () {
	function BypassConfigView() {
		_classCallCheck(this, BypassConfigView);

		this.template = _folders2.default.VIEWS + '/bypass-config.html';
		this.header = _folders2.default.VIEWS + '/header.html';
	}

	_createClass(BypassConfigView, [{
		key: 'initView',
		value: function initView() {
			var _this = this;

			this.App = (0, _jquery2.default)('#app');
			this.App.html("");

			_Utils2.default.getLocaleInStorage().then(_this.loadTemplate.bind(this), _this.loadLocaleFromServer.bind(this));
		}
	}, {
		key: 'loadTemplate',
		value: function loadTemplate(locale) {
			var _this = this;

			_this.loadStorageData().then(function (storage) {
				_this.Storage = storage;

				_jquery2.default.get(_this.header, function (header) {
					_this.App.append(header);
					_jquery2.default.get(_this.template, function (template) {

						var loadedTemplate = _Utils2.default.loadTemplate(template, locale);
						_this.App.append(loadedTemplate);

						_this.selectElements();
					}, "html");
				}, "html");
			});
		}
	}, {
		key: 'selectElements',
		value: function selectElements() {
			var _this = this;

			_this.headerLogo = (0, _jquery2.default)('#header-logo');
			_this.bypasslist = (0, _jquery2.default)('#bypasslist');
			_this.updateListButton = (0, _jquery2.default)('#update-bypasslist-button');
			_this.errorMessages = (0, _jquery2.default)('#error_message');

			_this.upgradeButton = (0, _jquery2.default)('#upgrade-account-bypass');

			_this.setUpgradeButton();
			_this.setServiceElements();
			_this.setCurrentBypassList();
			_this.setHeaderBackButton();
			_this.setEvents();
		}
	}, {
		key: 'setUpgradeButton',
		value: function setUpgradeButton() {
			var _this = this;

			if (!_Utils2.default.isUserPremium(_this.Storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA])) {
				_this.updateListButton.hide();
				_this.upgradeButton.show();
				_this.bypasslist.attr('readonly', 'readonly');
				_this.showBypassFunctionError();
			}
		}
	}, {
		key: 'setCurrentBypassList',
		value: function setCurrentBypassList(response) {
			var _this = this;

			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.BYPASSLIST, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA], function (storage) {

				var configData = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA];
				var bypassList = storage[_ServiceMeta2.default.STORAGEKEYS.BYPASSLIST] ? storage[_ServiceMeta2.default.STORAGEKEYS.BYPASSLIST] : [];
				var uid = configData && configData.uid ? configData.uid : "";

				if (response) bypassList = response.bypassList;

				var bypassString = "";

				bypassList = bypassList && bypassList[uid] ? bypassList[uid] : [];

				//bypassList = bypassList.concat(Localhosts);

				var uniqueList = bypassList.concat(_localhosts2.default.filter(function (item) {
					return bypassList.indexOf(item) < 0;
				}));

				for (var i = 0; i < uniqueList.length; i++) {
					bypassString += uniqueList[i] + "\n";
				};

				_this.bypasslist.val(bypassString);
			});
		}
	}, {
		key: 'setEvents',
		value: function setEvents() {
			var _this = this;

			_this.updateListButton.click(_this.onUpdateListButtonClicked.bind(this));
			_this.upgradeButton.click(_this.onUpgradeButtonClicked.bind(this));
		}
	}, {
		key: 'setServiceElements',
		value: function setServiceElements() {
			var _this = this;
			_this.headerLogo.attr('src', _ServiceMeta2.default.IMAGES.HEADERLOGO);
		}
	}, {
		key: 'setHeaderBackButton',
		value: function setHeaderBackButton() {
			var _this = this;
			_this.headerBackButton = (0, _jquery2.default)('#header-back-button');
			_this.headerBackButton.css('display', 'block');
			_this.headerBackButton.click(_this.onHeaderBackButtonClicked.bind(this));
		}
	}, {
		key: 'loadStorageData',
		value: function loadStorageData() {
			var _this = this;
			return new Promise(function (resolve, reject) {

				chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA, _ServiceMeta2.default.STORAGEKEYS.LOCALE, _ServiceMeta2.default.STORAGEKEYS.BYPASSLIST], function (storage) {
					_this.Storage = storage;
					resolve(storage);
				});
			});
		}
	}, {
		key: 'loadLocaleFromServer',
		value: function loadLocaleFromServer() {
			var _this = this;

			_Utils2.default.loadLocaleFromServer(_this.App, _this.App, _this.showMaintenanceMessage, _BackgroundRequester2.default, "BypassConfigView", _jquery2.default);
		}
	}, {
		key: 'showResult',
		value: function showResult(response) {
			var _this = this;
			var resultStr = "";
			_this.errorMessages.html("");

			if (response.valid == 1) resultStr += "<p style='color: green;'>1 line added successfully</p>";
			if (response.valid > 1) resultStr += "<p style='color: green;'>" + response.valid + " lines added successfully</p>";

			if (response.invalid == 1) resultStr += "<p> 1 line is not valid: " + response.errorLines[0] + "</p>";

			if (response.invalid > 1) {
				resultStr += "<p>" + response.invalid + " lines are not valid:</p>";
				for (var i = 0; i < response.errorLines.length; i++) {
					resultStr += "<p>" + response.errorLines[i] + "</p>";
				};
			}

			_this.errorMessages.html(_DOMPurify2.default.sanitize(resultStr, { SAFE_FOR_JQUERY: true }));
		}
	}, {
		key: 'showBypassFunctionError',
		value: function showBypassFunctionError() {
			var _this = this;

			_this.errorMessages.html("This function is only available for premium user");
		}

		/* Events */

	}, {
		key: 'onUpdateListButtonClicked',
		value: function onUpdateListButtonClicked() {
			var _this = this;

			var configData = _this.Storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA];
			var uid = configData && configData.uid ? configData.uid : "";
			var bypassData = _this.Storage[_ServiceMeta2.default.STORAGEKEYS.BYPASSLIST];
			var bypassList = bypassData && bypassData[uid] ? bypassData[uid] : [];

			var validationData = {
				currentData: bypassList,
				newData: _this.bypasslist.val()
			};

			_BackgroundRequester2.default.request('Bypasslist', 'validate', validationData).then(function (response) {

				_this.showResult(response);

				_this.setCurrentBypassList();
			});
		}
	}, {
		key: 'onHeaderBackButtonClicked',
		value: function onHeaderBackButtonClicked() {
			location.reload();
		}
	}, {
		key: 'onUpgradeButtonClicked',
		value: function onUpgradeButtonClicked() {
			var _this = this;

			_UpgradeView2.default.initView();
		}
	}]);

	return BypassConfigView;
}();

exports.default = new BypassConfigView();

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = ["localhost", "127.0.0.1", "local", "intra", "intranet", "onion"];

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(3);

var _jquery2 = _interopRequireDefault(_jquery);

var _folders = __webpack_require__(1);

var _folders2 = _interopRequireDefault(_folders);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _BackgroundRequester = __webpack_require__(4);

var _BackgroundRequester2 = _interopRequireDefault(_BackgroundRequester);

var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _Sticked = __webpack_require__(25);

var _Sticked2 = _interopRequireDefault(_Sticked);

var _DOMPurify = __webpack_require__(8);

var _DOMPurify2 = _interopRequireDefault(_DOMPurify);

var _WebRTCAddon = __webpack_require__(50);

var _WebRTCAddon2 = _interopRequireDefault(_WebRTCAddon);

var _WebRTCAddonView = __webpack_require__(52);

var _WebRTCAddonView2 = _interopRequireDefault(_WebRTCAddonView);

var _DesktopClientInfoView = __webpack_require__(17);

var _DesktopClientInfoView2 = _interopRequireDefault(_DesktopClientInfoView);

var _PermissionView = __webpack_require__(18);

var _PermissionView2 = _interopRequireDefault(_PermissionView);

var _OtherToolsView = __webpack_require__(26);

var _OtherToolsView2 = _interopRequireDefault(_OtherToolsView);

var _Tooltip = __webpack_require__(19);

var _Tooltip2 = _interopRequireDefault(_Tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ConnectedView = function () {
	function ConnectedView() {
		_classCallCheck(this, ConnectedView);

		this.template = _folders2.default.VIEWS + '/connected.html';
		this.header = _folders2.default.VIEWS + '/header.html';
	}

	_createClass(ConnectedView, [{
		key: 'initView',
		value: function initView() {

			var _this = this;
			this.App = (0, _jquery2.default)('#app');
			this.App.html("");
			_BackgroundRequester2.default.request('PermissionController', 'registerView', {}, true).then(_this.onPermissionChanged.bind(this));

			_Utils2.default.getLocaleInStorage().then(_this.loadTemplate.bind(this), _this.loadLocaleFromServer.bind(this));
		}
	}, {
		key: 'loadTemplate',
		value: function loadTemplate(locale) {
			var _this = this;

			_this.loadStorageData().then(function (storage) {
				_this.Storage = storage;
				_jquery2.default.get(_this.template, function (template) {
					var loadedTemplate = _Utils2.default.loadTemplate(template, locale);
					_this.App.append(loadedTemplate);

					_this.selectElements();
					_this.setEvents();

					var currentProxy = storage[_ServiceMeta2.default.STORAGEKEYS.CURRENTPROXY] ? storage[_ServiceMeta2.default.STORAGEKEYS.CURRENTPROXY] : "";
					_this.speedLink = currentProxy && currentProxy != "" && currentProxy.SpeedTest ? currentProxy.SpeedTest : false;
					if (_this.speedLink && _this.speedLink != "") {
						_this.speedTest.css('display', 'block');
					}
					_this.countryElId = _this.getCountryElementIdByServer(_this.Storage[_ServiceMeta2.default.STORAGEKEYS.CURRENTPROXY]);

					_this.tabId = _Utils2.default.getTabIdByServerType(currentProxy.Type);
					_this.usertag = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA] ? storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA].usertag : "";

					_Utils2.default.loadCountryLocale(_BackgroundRequester2.default).then(function (countryLocale) {
						var countryCode = currentProxy.CountryCode;
						var countryLabel = countryLocale && countryLocale.hasOwnProperty(countryCode.toUpperCase()) ? countryLocale[countryCode.toUpperCase()] : countryCode;
						_this.connectedCountry.text(countryLabel);
					});
					_this.setProxyExtensionWarning();
					_this.setPinCountryButtonState();

					_this.setWebRTCCheckboxState();
				}, "html");
			});
		}
	}, {
		key: 'loadStorageData',
		value: function loadStorageData() {
			return new Promise(function (resolve, reject) {

				chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.ISPROXYON, _ServiceMeta2.default.STORAGEKEYS.CURRENTPROXY, _ServiceMeta2.default.STORAGEKEYS.LOCALE, _ServiceMeta2.default.STORAGEKEYS.ISCOUNTRYSORTED, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA], function (storage) {

					resolve(storage);
				});
			});
		}
	}, {
		key: 'selectElements',
		value: function selectElements() {
			var _this = this;

			_this.connectedContainer = (0, _jquery2.default)('#connected-container');

			_this.connectedCountry = (0, _jquery2.default)('#connected-country');
			_this.connectedIpLookupButton = (0, _jquery2.default)('#connected-ip-lookup-button');
			_this.connectedDisconnectButton = (0, _jquery2.default)('#connected-disconnect-button');
			_this.connectedProxyExtensionNames = (0, _jquery2.default)('#proxyExtensionNames');
			_this.connectedProxyExtensionServiceName = (0, _jquery2.default)('#proxyextenion-servicename');
			_this.connectedProxyExtensionsMessage = (0, _jquery2.default)('#proxyextensions');

			_this.speedTest = (0, _jquery2.default)('#speed-test');

			/* Download Platform */
			_this.downloadAndroidButton = (0, _jquery2.default)('#dw-android');
			_this.downloadWindowsButton = (0, _jquery2.default)('#dw-windows');
			_this.downloadMacButton = (0, _jquery2.default)('#dw-macosx');

			_this.otherToolsButton = (0, _jquery2.default)('#dw-othertools');

			_this.otherToolsGif = (0, _jquery2.default)('#othertools-gif');
			_this.setOtherToolsGif();

			_this.pinnedImg = (0, _jquery2.default)('#pinned-image');

			_this.pinCountryButton = (0, _jquery2.default)('#pin-country');

			_this.webRTCCheckbox = (0, _jquery2.default)('#webrtc-checkbox');
			_this.webRTCContainer = (0, _jquery2.default)('#webrtc-container');
			if (_ServiceMeta2.default.PLATFORM.toLowerCase() == 'edge') {
				_this.webRTCContainer.css('display', 'none');
				_this.otherToolsButton.css('display', 'none');
			}
		}
	}, {
		key: 'setOtherToolsGif',
		value: function setOtherToolsGif() {
			var _this = this;

			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.BASELINK], function (storage) {
				var otherToolsGif = storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK] ? storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK] + _ServiceMeta2.default.IMAGES.OTHERTOOLSGIF : "";
				_this.otherToolsGif.attr('src', otherToolsGif);
			});
		}
	}, {
		key: 'setEvents',
		value: function setEvents() {
			var _this = this;

			_this.connectedIpLookupButton.click(_this.onIpLookupButtonClicked.bind(this));
			_this.connectedDisconnectButton.click(_this.onDisconnectButtonClicked.bind(this));
			_this.pinCountryButton.click(_this.onPinCountryButtonClicked.bind(this));

			_this.webRTCCheckbox.click(_this.onWebRTCCheckboxChanged.bind(this));

			_this.speedTest.click(_this.onSpeedTestClicked.bind(this));

			/* Download events */

			_this.downloadAndroidButton.click(_this.onDownloadEventFunc('android'));
			_this.downloadMacButton.click(_this.onDesktopInfoButtonClicked.bind(this));
			_this.downloadWindowsButton.click(_this.onDesktopInfoButtonClicked.bind(this));

			_this.otherToolsButton.click(_this.onOtherToolsButtonClicked.bind(this));
		}
	}, {
		key: 'onOtherToolsButtonClicked',
		value: function onOtherToolsButtonClicked() {
			var _this = this;

			_OtherToolsView2.default.show();
		}
	}, {
		key: 'onSpeedTestClicked',
		value: function onSpeedTestClicked() {
			var _this = this;

			if (_this.speedLink && _this.speedLink != "") _Utils2.default.openNewTab(_this.speedLink);
		}
	}, {
		key: 'onDesktopInfoButtonClicked',
		value: function onDesktopInfoButtonClicked() {
			var _this = this;

			_DesktopClientInfoView2.default.show();
		}
	}, {
		key: 'onDownloadEventFunc',
		value: function onDownloadEventFunc(platform) {
			var _this = this;

			return function () {
				_Utils2.default.openPlatformLink(platform);
			};
		}
	}, {
		key: 'setWebRTCCheckboxState',
		value: function setWebRTCCheckboxState() {
			var _this = this;

			_WebRTCAddon2.default.getState().then(function (state) {

				var checked = state.value === 'disable_non_proxied_udp' ? true : false;

				_this.webRTCCheckbox.prop('checked', checked);
			}, function (error) {});
		}
	}, {
		key: 'onWebRTCAddonError',
		value: function onWebRTCAddonError(error) {

			if (error.reason == 'not_installed' || error.reason == 'not_active') return _WebRTCAddonView2.default.initView(error.reason);
		}
	}, {
		key: 'onWebRTCCheckboxChanged',
		value: function onWebRTCCheckboxChanged() {
			var _this = this;

			var isChecked = _this.webRTCCheckbox.prop('checked');

			_WebRTCAddon2.default.setState(isChecked).then(function (result) {}, _this.onWebRTCAddonError);
		}
	}, {
		key: 'setPinCountryButtonState',
		value: function setPinCountryButtonState() {
			var _this = this;
			var isUserPremium = _Utils2.default.isUserPremium(_this.Storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA]);

			if (!isUserPremium) return _this.pinButtonForFreeUser();

			_Sticked2.default.getPinnedState(_this.countryElId, _this.tabId).then(function (isPinned) {

				if (isPinned) return _this.alreadyPinnedButton();
			});
		}
	}, {
		key: 'alreadyPinnedButton',
		value: function alreadyPinnedButton() {
			var _this = this;

			_this.pinnedImg.css('display', 'none');
			_this.pinCountryButton.text('Unpin Country');
			_this.pinCountryButton.unbind('click');
			_this.pinCountryButton.click(_this.onUnpinCountryClicked.bind(this));
		}
	}, {
		key: 'onUnpinCountryClicked',
		value: function onUnpinCountryClicked() {
			var _this = this;

			_Sticked2.default.unpin(_this.countryElId, _this.tabId).then(function () {
				location.reload();
			});
		}
	}, {
		key: 'deactivatePinButton',
		value: function deactivatePinButton() {
			var _this = this;

			_this.pinCountryButton.removeClass('btn--blue');
			_this.pinCountryButton.addClass('btn--inactive');
		}
	}, {
		key: 'pinButtonForFreeUser',
		value: function pinButtonForFreeUser() {
			var _this = this;

			_this.deactivatePinButton();

			var options = {
				placement: 'top', // or bottom, left, right, and variations
				title: "Top"
			};

			new _Tooltip2.default(_this.pinCountryButton, {
				placement: 'top', // or bottom, left, right, and variations
				title: "Only accessible for premium user"
			});
		}
	}, {
		key: 'getCountryElementIdByServer',
		value: function getCountryElementIdByServer(server) {
			var tabId = _Utils2.default.getTabIdByServerType(server.Type);
			var serverCountryCode = server && server.CountryCode ? server.CountryCode.toLowerCase() : "";

			return tabId + serverCountryCode;
		}

		/* Event */

	}, {
		key: 'onPinCountryButtonClicked',
		value: function onPinCountryButtonClicked() {
			var _this = this;

			_Sticked2.default.pin(_this.countryElId, _this.tabId).then(function () {

				location.reload();
			});
		}
	}, {
		key: 'onIpLookupButtonClicked',
		value: function onIpLookupButtonClicked() {
			chrome.storage.local.get(_ServiceMeta2.default.STORAGEKEYS.IPLOOKUPURL, function (storage) {

				var ipLookupUrl = storage[_ServiceMeta2.default.STORAGEKEYS.IPLOOKUPURL];

				if (ipLookupUrl) _Utils2.default.openNewTab(ipLookupUrl);
			});
		}
	}, {
		key: 'onDisconnectButtonClicked',
		value: function onDisconnectButtonClicked() {

			_BackgroundRequester2.default.request('ProxySetting', 'clearSettings', {}).then(function () {

				location.reload();
			});
		}
	}, {
		key: 'setProxyExtensionWarning',
		value: function setProxyExtensionWarning() {
			var _this = this;

			_BackgroundRequester2.default.request('Management', 'cacheExtWithProxyPerm', {}).then(function (extWithProxy) {

				chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.PROXYEXTENSIONS], function (storage) {

					var proxyExtensionList = storage[_ServiceMeta2.default.STORAGEKEYS.PROXYEXTENSIONS];

					if (!proxyExtensionList || proxyExtensionList && proxyExtensionList.length == 0) return;

					var proxyExtensionNameString = _this.getExtensionNamesAsString(proxyExtensionList);

					_this.connectedProxyExtensionServiceName.text(_ServiceMeta2.default.SERVICE);
					_this.connectedProxyExtensionNames.html(_DOMPurify2.default.sanitize(proxyExtensionNameString, { SAFE_FOR_JQUERY: true }));
					_this.connectedProxyExtensionsMessage.css('display', 'block');

					_this.connectedContainer.removeClass('connected-view__middle');
				});
			});
		}
	}, {
		key: 'getExtensionNamesAsString',
		value: function getExtensionNamesAsString(ext) {
			var _this = this;

			if (!ext) return "";

			if (ext.length == 1) return _this.addBoldToName(ext[0].name);
			if (ext.length == 2) return _this.addBoldToName(ext[0].name) + " and " + _this.addBoldToName(ext[1].name);

			var string = "";
			if (ext.length > 2) {
				for (var i = 0; i < ext.length; i++) {
					string += _this.addBoldToName(ext[i].name);
					if (i == ext.length - 2) string += " and ";
					if (i != ext.length - 2 || i != ext.length - 1) string += ", ";
				};

				return string;
			}

			return "";
		}
	}, {
		key: 'addBoldToName',
		value: function addBoldToName(name) {
			return "<b style='text-decoration:underline'>" + name + "</b>";
		}
	}, {
		key: 'loadLocaleFromServer',
		value: function loadLocaleFromServer() {
			var _this = this;

			_Utils2.default.loadLocaleFromServer(_this.App, _this.App, _this.showMaintenanceMessage, _BackgroundRequester2.default, "ConnectedView", _jquery2.default);
		}
	}, {
		key: 'onPermissionChanged',
		value: function onPermissionChanged(isValid) {

			if (isValid === false) _PermissionView2.default.show();
		}
	}]);

	return ConnectedView;
}();

exports.default = new ConnectedView();

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Management = __webpack_require__(51);

var _Management2 = _interopRequireDefault(_Management);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WebRTCAddon = function () {
	function WebRTCAddon() {
		_classCallCheck(this, WebRTCAddon);

		this.addonPort = false;
		this.addonId = _ServiceMeta2.default.WEBRTCADDON.ID;
		this.requests = {};
	}

	_createClass(WebRTCAddon, [{
		key: 'setState',
		value: function setState(isEnabled) {
			var _this = this;

			return new Promise(function (resolve, reject) {
				_this.connect().then(function (isActive) {
					return _this.sendRequest(isActive, "set", isEnabled);
				}, reject).then(resolve);
			});
		}
	}, {
		key: 'getState',
		value: function getState() {
			var _this = this;
			return new Promise(function (resolve, reject) {
				_this.connect().then(function (isActive) {
					return _this.sendRequest(isActive, "state");
				}, reject).then(resolve);
			});
		}
	}, {
		key: 'sendRequest',
		value: function sendRequest(isActive, request, data) {
			var _this = this;

			return new Promise(function (resolve, reject) {
				if (isActive) {
					var uniqueRequestId = new Date().getTime();

					_this.addonPort.postMessage({
						request: request,
						requestId: uniqueRequestId,
						data: data
					});

					_this.requests[uniqueRequestId] = resolve;
				}
			});
		}
	}, {
		key: 'connect',
		value: function connect() {
			var _this2 = this;

			var _this = this;

			return new Promise(function (resolve, reject) {
				_Management2.default.isExtInstalled(_this.addonId).then(function () {
					return _Management2.default.isExtActive(_this.addonId);
				}, reject).then(function (isActive) {
					if (!isActive) return resolve(false);

					if (_this2.addonPort) return resolve(true);
					_this2.addonPort = chrome.runtime.connect(_this.addonId);
					_this2.addonPort.onDisconnect.addListener(_this.onDisconnect.bind(_this));
					_this2.addonPort.onMessage.addListener(_this.onMessage.bind(_this));
					resolve(true);
				}, reject);
			});
		}
	}, {
		key: 'onMessage',
		value: function onMessage(message) {
			var _this = this;

			if (message && message.requestId && _this.requests.hasOwnProperty(message.requestId)) {
				_this.requests[message.requestId](message.data);
				delete _this.requests[message.requestId];
			}
		}
	}, {
		key: 'onDisconnect',
		value: function onDisconnect(p) {
			var _this = this;

			_this.addonPort = false;
		}
	}]);

	return WebRTCAddon;
}();

exports.default = new WebRTCAddon();

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Management = function () {
	function Management() {
		_classCallCheck(this, Management);
	}

	_createClass(Management, [{
		key: 'isExtInstalled',
		value: function isExtInstalled(extensionId) {
			var _this = this;

			return new Promise(function (resolve, reject) {
				_this.getAllExt().then(function (listOfExtensions) {

					for (var i = 0; i < listOfExtensions.length; i++) {
						if (listOfExtensions[i].id == extensionId) return resolve(true);
					};

					reject({
						reason: 'not_installed'
					});
				});
			});
		}
	}, {
		key: 'isExtActive',
		value: function isExtActive(extensionId) {
			var _this = this;

			return new Promise(function (resolve, reject) {
				_this.getAllExt().then(function (listOfExtensions) {

					for (var i = 0; i < listOfExtensions.length; i++) {
						if (listOfExtensions[i].enabled === true && listOfExtensions[i].id == extensionId) {

							return resolve(true);
						}
					};

					reject({
						reason: 'not_active'
					});
				});
			});
		}
	}, {
		key: 'cacheExtWithProxyPerm',
		value: function cacheExtWithProxyPerm(popupCallback) {
			var _this = this;

			_this.getAllProxyExt().then(_this.saveInStorage.bind(this)).then(function (extWithProxy) {
				if (popupCallback) popupCallback(extWithProxy);
			});
		}
	}, {
		key: 'saveInStorage',
		value: function saveInStorage(extWithProxy) {
			return new Promise(function (resolve, reject) {
				chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.PROXYEXTENSIONS, extWithProxy), function () {
					resolve(extWithProxy);
				});
			});
		}
	}, {
		key: 'getAllExt',
		value: function getAllExt() {
			var _this = this;

			return new Promise(function (resolve, reject) {

				if (_ServiceMeta2.default.PLATFORM.toUpperCase() == "FIREFOX") return browser.management.getAll().then(resolve);

				return chrome.management.getAll(resolve);
			});
		}
	}, {
		key: 'getAllProxyExt',
		value: function getAllProxyExt(popupCallback) {
			var _this = this;

			return new Promise(function (resolve, reject) {

				function listCallback(listOfExtensions) {

					var extWithProxy = [];

					for (var i = 0; i < listOfExtensions.length; i++) {
						if (_this.hasExtensionProxyPermission(listOfExtensions[i]) && chrome.runtime.id !== listOfExtensions[i].id && _ServiceMeta2.default.PROXYADDONS.indexOf(listOfExtensions[i].id) === -1 && listOfExtensions[i].enabled) extWithProxy.push(listOfExtensions[i]);
					};

					if (popupCallback) return popupCallback(extWithProxy);

					resolve(extWithProxy);
				}

				_this.getAllExt().then(listCallback);
			});
		}
	}, {
		key: 'popupCallback',
		value: function popupCallback(port, requestId, method) {

			return function (data) {
				port.postMessage({ response: method, requestId: requestId, data: data });
			};
		}
	}, {
		key: 'popupMessageHandler',
		value: function popupMessageHandler(port, requestId, method, data) {
			var _this = this;

			switch (method) {
				case "cacheExtWithProxyPerm":
					_this.cacheExtWithProxyPerm(_this.popupCallback(port, requestId, method));
					break;
				default:

					break;
			}
		}
	}, {
		key: 'hasExtensionProxyPermission',
		value: function hasExtensionProxyPermission(ext) {
			return ext && ext.permissions && ext.permissions.indexOf('proxy') > -1 ? true : false;
		}
	}]);

	return Management;
}();

exports.default = new Management();

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(3);

var _jquery2 = _interopRequireDefault(_jquery);

var _folders = __webpack_require__(1);

var _folders2 = _interopRequireDefault(_folders);

var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _BackgroundRequester = __webpack_require__(4);

var _BackgroundRequester2 = _interopRequireDefault(_BackgroundRequester);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WebRTCAddonView = function () {
	function WebRTCAddonView() {
		_classCallCheck(this, WebRTCAddonView);

		this.template = _folders2.default.VIEWS + '/webrtcaddon.html';
	}

	_createClass(WebRTCAddonView, [{
		key: 'initView',
		value: function initView(errorReason) {
			var _this = this;
			this.App = (0, _jquery2.default)('#app');
			this.App.html("");

			this.errorReason = errorReason;

			_Utils2.default.getLocaleInStorage().then(_this.loadTemplate.bind(this), _this.loadLocaleFromServer.bind(this));
		}
	}, {
		key: 'loadTemplate',
		value: function loadTemplate(locale) {
			var _this = this;

			_jquery2.default.get(_this.template, function (template) {
				var loadedTemplate = _Utils2.default.loadTemplate(template, locale);

				_this.App.append(loadedTemplate);

				_this.selectElements();
				_this.setEvents();

				_this.setServiceElements();
			}, "html");
		}
	}, {
		key: 'setServiceElements',
		value: function setServiceElements() {
			var _this = this;

			_this.serviceName.text(_ServiceMeta2.default.SERVICE);
			_this.serviceName2.text(_ServiceMeta2.default.SERVICE);

			var notEnabled = _this.errorReason == 'not_active' ? true : false;

			if (notEnabled) {
				_this.notEnabledView.show();
			} else {
				_this.notInstalledView.show();
			}
		}
	}, {
		key: 'selectElements',
		value: function selectElements() {
			var _this = this;

			_this.addonBigButton = (0, _jquery2.default)('#addon-big-button');
			_this.addonDownloadButton = (0, _jquery2.default)('#addon-download-button');
			_this.closeAddonViewButton = (0, _jquery2.default)('#close-addon-view');

			_this.serviceName = (0, _jquery2.default)('#service-name');
			_this.serviceName2 = (0, _jquery2.default)('#service-name-2');

			_this.notInstalledView = (0, _jquery2.default)('#not-installed-view');
			_this.notEnabledView = (0, _jquery2.default)('#not-enabled-view');

			_this.enableBigButton = (0, _jquery2.default)('#enable-big-button');
			_this.enableButton = (0, _jquery2.default)('#addon-enable-button');
		}
	}, {
		key: 'setEvents',
		value: function setEvents() {
			var _this = this;

			_this.addonBigButton.click(_this.openAddonPage.bind(_this));
			_this.addonDownloadButton.click(_this.openAddonPage.bind(_this));
			_this.closeAddonViewButton.click(_this.onCloseAddonViewClicked.bind(_this));

			_this.enableButton.click(_this.openAddonManager.bind(_this));
			_this.enableBigButton.click(_this.openAddonManager.bind(_this));
		}
	}, {
		key: 'openAddonPage',
		value: function openAddonPage() {
			var _this = this;

			_Utils2.default.openNewTab(_ServiceMeta2.default.WEBRTCADDON.URL);
		}
	}, {
		key: 'openAddonManager',
		value: function openAddonManager() {
			var _this = this;

			//Utils.openNewTab('about:addons');
		}
	}, {
		key: 'onCloseAddonViewClicked',
		value: function onCloseAddonViewClicked() {
			var _this = this;

			location.reload();
		}
	}, {
		key: 'loadLocaleFromServer',
		value: function loadLocaleFromServer() {
			var _this = this;
			_Utils2.default.loadLocaleFromServer(_this.App, _this.App, _this.showMaintenanceMessage, _BackgroundRequester2.default, "UpgradeView", _jquery2.default);
		}
	}]);

	return WebRTCAddonView;
}();

exports.default = new WebRTCAddonView();

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  tools: [{
    title: "MyScreenshot.io - Screenshot Capture Tool",
    description: "The easiest way to capture, customize and share your screenshots without leaving your browser.",
    icon: "images/msio-icon.png",
    download: {
      chrome: "https://chrome.google.com/webstore/detail/myscreenshotio-screenshot/gamnmcdlkomidhcomfjnheppjojkmdii",
      firefox: "https://addons.mozilla.org/de/firefox/addon/myscreenshotio-screenshot-tool"
    }
  }]
};

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.15.0
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["a"] = (Popper);
//# sourceMappingURL=popper.js.map

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(22)))

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(3);

var _jquery2 = _interopRequireDefault(_jquery);

var _folders = __webpack_require__(1);

var _folders2 = _interopRequireDefault(_folders);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _UpgradeView = __webpack_require__(13);

var _UpgradeView2 = _interopRequireDefault(_UpgradeView);

var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _DOMPurify = __webpack_require__(8);

var _DOMPurify2 = _interopRequireDefault(_DOMPurify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GifView = function () {
	function GifView(title, desc, gif) {
		_classCallCheck(this, GifView);

		this.title = title;
		this.desc = desc;
		this.gif = gif;

		this.template = _folders2.default.VIEWS + '/gif.html';
	}

	_createClass(GifView, [{
		key: 'show',
		value: function show() {
			var _this = this;

			this.App = (0, _jquery2.default)('#app');
			this.App.html("");

			_Utils2.default.getLocaleInStorage().then(function (locale) {
				_jquery2.default.get(_this.template, function (template) {
					var loadedTemplate = _Utils2.default.loadTemplate(template, locale);

					_this.App.append(loadedTemplate);
					_this.selectElements();
					_this.setValues();
					_this.setEvents();
				}, "html");
			});
		}
	}, {
		key: 'setValues',
		value: function setValues() {
			var _this = this;

			_this.titleEl.text(_this.title);
			_this.descEl.text(_this.desc);

			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.BASELINK], function (storage) {

				var baselink = storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK];

				_this.gifEl.html(_DOMPurify2.default.sanitize('<img src="' + baselink + _this.gif + '">', { SAFE_FOR_JQUERY: true }));
			});
		}
	}, {
		key: 'setEvents',
		value: function setEvents() {
			var _this = this;

			_this.closeGifButton.click(_this.onCloseButtonClicked.bind(_this));
			_this.upgradeButton.click(_this.onUpgradeButtonClicked.bind(_this));
		}
	}, {
		key: 'selectElements',
		value: function selectElements() {
			var _this = this;

			_this.titleEl = (0, _jquery2.default)('#gif-title');
			_this.descEl = (0, _jquery2.default)('#gif-desc');
			_this.gifEl = (0, _jquery2.default)('#gif-gif');

			_this.closeGifButton = (0, _jquery2.default)('#close-gif');
			_this.upgradeButton = (0, _jquery2.default)('#gif-upgrade-button');
		}

		/* Events */

	}, {
		key: 'onCloseButtonClicked',
		value: function onCloseButtonClicked() {
			location.reload();
		}
	}, {
		key: 'onUpgradeButtonClicked',
		value: function onUpgradeButtonClicked() {
			_UpgradeView2.default.initView();
		}
	}]);

	return GifView;
}();

exports.default = GifView;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(3);

var _jquery2 = _interopRequireDefault(_jquery);

var _folders = __webpack_require__(1);

var _folders2 = _interopRequireDefault(_folders);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _localeFallback = __webpack_require__(5);

var _localeFallback2 = _interopRequireDefault(_localeFallback);

var _BackgroundRequester = __webpack_require__(4);

var _BackgroundRequester2 = _interopRequireDefault(_BackgroundRequester);

var _UpgradeView = __webpack_require__(13);

var _UpgradeView2 = _interopRequireDefault(_UpgradeView);

var _GetPremiumView = __webpack_require__(27);

var _GetPremiumView2 = _interopRequireDefault(_GetPremiumView);

var _TrialView = __webpack_require__(28);

var _TrialView2 = _interopRequireDefault(_TrialView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TeaserView = function () {
  function TeaserView() {
    _classCallCheck(this, TeaserView);

    this.template = _folders2.default.VIEWS + '/teaser.html';
  }

  _createClass(TeaserView, [{
    key: 'show',
    value: function show(trialDays, userData) {
      var _this2 = this;

      var _this = this;
      this.trialDays = trialDays;
      this.userData = userData;

      _Utils2.default.getLocaleInStorage().then(function (locale) {
        _this2.App = (0, _jquery2.default)('#app');
        _this2.App.html("");

        _jquery2.default.get(_this.template, function (template) {
          var loadedTemplate = _Utils2.default.loadTemplateWithFallback(template, locale, _localeFallback2.default);

          _this.App.append(loadedTemplate);
          _this.selectElements();

          _this.setTrialButton(trialDays, userData);
        }, "html");
      });
    }
  }, {
    key: 'selectElements',
    value: function selectElements() {
      var _this = this;
      _this.closeButton = (0, _jquery2.default)('#getprem-close');
      _this.upgradeButton = (0, _jquery2.default)('#getprem-upgrade-btn');
      _this.moreFeatures = (0, _jquery2.default)('#more-feature');
      _this.continueButton = (0, _jquery2.default)('#continue-button');

      _this.getTrialButton = (0, _jquery2.default)('#gettrial-btn');
      _this.setEvents();
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {
      var _this = this;

      _this.closeButton.click(_this.onCloseButtonClicked.bind(this));
      _this.upgradeButton.click(_this.onUpgradeButtonClicked.bind(this));

      _this.moreFeatures.click(function () {
        _GetPremiumView2.default.show();
      });

      _this.continueButton.click(function () {
        location.reload();
      });
    }
  }, {
    key: 'setTrialButton',
    value: function setTrialButton(trialDays, userData) {
      var _this = this;
      if (trialDays > 0) {
        _this.getTrialButton.text("Start " + trialDays + "-days free Premium");
        _this.getTrialButton.click(function () {
          _TrialView2.default.show(trialDays, userData);
        });
        _this.getTrialButton.css('display', 'block');
      }
    }
  }, {
    key: 'onCloseButtonClicked',
    value: function onCloseButtonClicked() {
      location.reload();
    }
  }, {
    key: 'onUpgradeButtonClicked',
    value: function onUpgradeButtonClicked() {
      _UpgradeView2.default.initView();
    }
  }]);

  return TeaserView;
}();

exports.default = new TeaserView();

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(3);

var _jquery2 = _interopRequireDefault(_jquery);

var _folders = __webpack_require__(1);

var _folders2 = _interopRequireDefault(_folders);

var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _BackgroundRequester = __webpack_require__(4);

var _BackgroundRequester2 = _interopRequireDefault(_BackgroundRequester);

var _LoginView = __webpack_require__(6);

var _LoginView2 = _interopRequireDefault(_LoginView);

var _DOMPurify = __webpack_require__(8);

var _DOMPurify2 = _interopRequireDefault(_DOMPurify);

var _Sanitize = __webpack_require__(7);

var _Sanitize2 = _interopRequireDefault(_Sanitize);

var _Register3SuccessView = __webpack_require__(58);

var _Register3SuccessView2 = _interopRequireDefault(_Register3SuccessView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var shajs = __webpack_require__(15);

var Register3View = function () {
	function Register3View() {
		_classCallCheck(this, Register3View);

		this.template = _folders2.default.VIEWS + '/register3.html';
		this.header = _folders2.default.VIEWS + '/header.html';
	}

	_createClass(Register3View, [{
		key: 'initView',
		value: function initView() {
			var _this = this;

			_Utils2.default.getLocaleInStorage().then(_this.loadTemplate.bind(this), _this.loadLocaleFromServer.bind(this));
		}
	}, {
		key: 'loadTemplate',
		value: function loadTemplate(locale) {
			var _this = this;

			this.App = (0, _jquery2.default)('#app');
			this.App.html("");

			_jquery2.default.get(_this.header, function (header) {
				_this.App.append(header);
				_jquery2.default.get(_this.template, function (template) {
					var loadedTemplate = _Utils2.default.loadTemplate(template, locale);

					_this.App.append(loadedTemplate);
					_this.selectElements(locale);
					_this.setErrorMessages(locale);
					_this.setAgreement(locale);
					_this.setPolicyEvents(locale);
					_this.setHeaderBackButton();
				}, "html");
			}, "html");
		}
	}, {
		key: 'selectElements',
		value: function selectElements(locale) {
			var _this = this;

			_this.headerLogo = (0, _jquery2.default)('#header-logo');
			_this.headerVersion = (0, _jquery2.default)('#header-version');

			_this.registerSuccessView = (0, _jquery2.default)('#register-success');
			_this.registerFormView = (0, _jquery2.default)('#register-form');

			_this.registerSuccessMessage = (0, _jquery2.default)('#register-success-message');
			_this.registerBackButton = (0, _jquery2.default)('#register-back-button');

			_this.emailField = (0, _jquery2.default)('#register3-email');
			_this.passwordField = (0, _jquery2.default)('#register3-password');
			_this.passwordConfirmField = (0, _jquery2.default)('#register3-password-confirm');

			_this.showPassword = (0, _jquery2.default)('#show-password');
			_this.showPasswordImg = (0, _jquery2.default)('#show-password-img');

			_this.agreementTxt = (0, _jquery2.default)('#register3-agreemnet-txt');

			_this.registerButton = (0, _jquery2.default)('#register-button');

			_this.errorMessage = (0, _jquery2.default)('#error_message');

			_this.setServiceElements(locale);
			_this.setEvents();
		}
	}, {
		key: 'setAgreement',
		value: function setAgreement(locale) {
			var _this = this;

			var fallbackTxt = _this.getLegalText(locale);

			_this.agreementTxt.html(fallbackTxt);
		}
	}, {
		key: 'getLegalText',
		value: function getLegalText(locale) {
			var _this = this;

			if (locale.RegisterLegalAgreement && locale.TermsAndConditions && locale.PrivacyPolicy && locale.LicenseAgreement && locale.RegisterButton) {
				var legalText = locale.RegisterLegalAgreement;
				legalText = legalText.replace('{0}', '"' + locale.RegisterButton + '"');
				legalText = legalText.replace('{1}', '<a id="tos-link" href="#" data="/html/tos.php">' + locale.TermsAndConditions + '</a>');
				legalText = legalText.replace('{2}', '<a id="pp-link" href="#" data="/html/pp.php">' + locale.PrivacyPolicy + '</a>');
				legalText = legalText.replace('{3}', '<a id="eula-link" href="#" data="/html/eula.php">' + locale.LicenseAgreement + '</a>');

				return legalText;
			} else {
				return 'By clicking "Register", you confirm that you accept our Terms of Conditions and you have read our Privacy Policy and EULA.';
			}
		}
	}, {
		key: 'setPolicyEvents',
		value: function setPolicyEvents() {

			(0, _jquery2.default)('#tos-link').click(this.openPolicyPage);
			(0, _jquery2.default)('#pp-link').click(this.openPolicyPage);
			(0, _jquery2.default)('#eula-link').click(this.openPolicyPage);
		}
	}, {
		key: 'openPolicyPage',
		value: function openPolicyPage() {
			var _this = this;

			chrome.storage.local.get(_ServiceMeta2.default.STORAGEKEYS.BASELINK, function (storage) {
				if (storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK] && (0, _jquery2.default)(_this).attr('data')) {
					var policyLink = storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK] + (0, _jquery2.default)(_this).attr('data');
					chrome.tabs.create({ url: policyLink });
				}
			});
		}
	}, {
		key: 'setServiceElements',
		value: function setServiceElements(locale) {
			var _this = this;
			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.BASELINK, _ServiceMeta2.default.STORAGEKEYS.INSTALLID], function (storage) {

				_this.headerLogo.attr('src', _ServiceMeta2.default.IMAGES.HEADERLOGO);
			});
			_this.headerVersion.text('v. ' + _ServiceMeta2.default.VERSION);

			//Linux/Ubuntu password field focus bug fix
			chrome.runtime.getPlatformInfo(function (platformInfo) {
				if (platformInfo && platformInfo.os && platformInfo.os === 'linux' && _ServiceMeta2.default.PLATFORM.toLowerCase() === 'firefox') {
					_this.passwordField.attr('type', 'text');
					_this.passwordField.focus(function () {
						var passwordShowState = _this.showPassword.attr('data');
						if (passwordShowState == 'off') {
							_this.passwordField.css('font-family', 'dotfont');
							_this.passwordField.css('font-size', '8px');
						}
						if (_this.passwordField.val() === '') {
							_this.passwordField.attr('placeholder', '');
						}
					});
					_this.passwordField.focusout(function () {
						var passwordShowState = _this.showPassword.attr('data');
						if (_this.passwordField.val() === '') {
							if (passwordShowState == 'off') {
								_this.passwordField.css('font-family', '');
								_this.passwordField.css('font-size', '');
							}
							_this.passwordField.attr('placeholder', locale.RegisterPassword);
						}
					});

					_this.passwordConfirmField.attr('type', 'text');
					_this.passwordConfirmField.focus(function () {
						var passwordShowState = _this.showPassword.attr('data');
						if (passwordShowState == 'off') {
							_this.passwordConfirmField.css('font-family', 'dotfont');
							_this.passwordConfirmField.css('font-size', '8px');
						}
						if (_this.passwordConfirmField.val() === '') {
							_this.passwordConfirmField.attr('placeholder', '');
						}
					});
					_this.passwordConfirmField.focusout(function () {
						var passwordShowState = _this.showPassword.attr('data');
						if (_this.passwordConfirmField.val() === '') {
							if (passwordShowState == 'off') {
								_this.passwordConfirmField.css('font-family', '');
								_this.passwordConfirmField.css('font-size', '');
							}
							_this.passwordConfirmField.attr('placeholder', locale.RegisterPasswordConfirm);
						}
					});
				}
			});
		}
	}, {
		key: 'setHeaderBackButton',
		value: function setHeaderBackButton() {
			var _this = this;
			_this.headerBackButton = (0, _jquery2.default)('#header-back-button');
			_this.headerBackButton.css('display', 'block');
			_this.headerBackButton.click(_this.onHeaderBackButtonClicked.bind(this));
		}
	}, {
		key: 'setErrorMessages',
		value: function setErrorMessages(locale) {
			var _this = this;

			_this.RegisterErrorEmail = locale.RegisterErrorEmail;
			_this.enterValidEmailConfirmError = locale.enterValidEmailConfirmError;
			_this.RegisterErrorPasswordNotMatch = locale.RegisterErrorPasswordNotMatch;
			_this.RegisterPasswordToShort = locale.RegisterPasswordToShort ? locale.RegisterPasswordToShort : "Please type at least 6 characters as password for your own security. Typed password is too short";
			_this.RegisterPasswordWhiteSpaceError = locale.RegisterPasswordWhiteSpaceError ? locale.RegisterPasswordWhiteSpaceError : "Please do not use whitespace/space/empty at the beginning or end of your password";
		}
	}, {
		key: 'setEvents',
		value: function setEvents() {
			var _this = this;
			_this.registerButton.click(_this.onRegisterButtonClicked.bind(this));
			_this.registerBackButton.click(_this.onBackToLoginClicked.bind(this));

			_this.emailField.focus(_this.onInputFocus.bind(this));
			_this.emailField.focusout(_this.onInputFocusOut.bind(this));

			_this.passwordField.focus(_this.onInputFocus.bind(this));
			_this.passwordField.focusout(_this.onInputFocusOut.bind(this));

			_this.passwordConfirmField.focus(_this.onInputFocus.bind(this));
			_this.passwordConfirmField.focusout(_this.onInputFocusOut.bind(this));

			_this.showPassword.click(_this.onShowPasswordClicked.bind(this));
		}
	}, {
		key: 'onShowPasswordClicked',
		value: function onShowPasswordClicked(e) {
			var _this = this;
			var current = _this.showPassword.attr('data');

			chrome.runtime.getPlatformInfo(function (platformInfo) {
				if (platformInfo && platformInfo.os && platformInfo.os === 'linux' && _ServiceMeta2.default.PLATFORM.toLowerCase() === 'firefox') {
					_this.passwordField.attr('type', 'text');
					_this.passwordConfirmField.attr('type', 'text');

					if (current == 'off') {
						_this.showPasswordImg.attr('src', './images/red-eye.png');
						_this.showPassword.attr('data', 'on');
						_this.passwordField.css('font-family', '');
						_this.passwordField.css('font-size', '');
						_this.passwordConfirmField.css('font-family', '');
						_this.passwordConfirmField.css('font-size', '');
					} else {
						_this.showPassword.attr('data', 'off');
						_this.showPasswordImg.attr('src', './images/red-eye-off.png');
						if (_this.passwordField.val() != "") {
							_this.passwordField.css('font-family', 'dotfont');
							_this.passwordField.css('font-size', '8px');
						}
						if (_this.passwordConfirmField.val() != "") {
							_this.passwordConfirmField.css('font-family', 'dotfont');
							_this.passwordConfirmField.css('font-size', '8px');
						}
					}
				} else {
					if (current == 'off') {
						_this.showPasswordImg.attr('src', './images/red-eye.png');
						_this.showPassword.attr('data', 'on');
						_this.passwordField.attr('type', 'text');
						_this.passwordConfirmField.attr('type', 'text');
					} else {
						_this.showPassword.attr('data', 'off');
						_this.showPasswordImg.attr('src', './images/red-eye-off.png');
						_this.passwordField.attr('type', 'password');
						_this.passwordConfirmField.attr('type', 'password');
					}
				}
			});
		}
	}, {
		key: 'onInputFocus',
		value: function onInputFocus(e) {
			var _this = this;
			(0, _jquery2.default)(e.target).css('border-color', '#0074b3');
		}
	}, {
		key: 'onInputFocusOut',
		value: function onInputFocusOut(e) {
			var _this = this;
			(0, _jquery2.default)(e.target).css('border-color', 'rgba(0,0,0,0.12)');
		}
	}, {
		key: 'openPolicyPage',
		value: function openPolicyPage() {
			var _this = this;

			chrome.storage.local.get(_ServiceMeta2.default.STORAGEKEYS.BASELINK, function (storage) {
				if (storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK] && (0, _jquery2.default)(_this).attr('data')) {
					var policyLink = storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK] + (0, _jquery2.default)(_this).attr('data');
					chrome.tabs.create({ url: policyLink });
				}
			});
		}
	}, {
		key: 'loadLocaleFromServer',
		value: function loadLocaleFromServer() {

			//todo what happen if it take to long? loading screen is showed?
			_BackgroundRequester2.default.request("api", "getLocale", {}).then(function (resp) {
				if (resp != undefined && resp != "" && resp.Retcode === 200) {

					chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.LOCALE, resp.locale), function () {
						window.location.reload(true);
					});
				} else {
					//todo can't get locale
				}
			});
		}

		/* Modifier */

	}, {
		key: 'setLoading',
		value: function setLoading() {
			var _this = this;

			_this.errorMessage.html(_ServiceMeta2.default.LOADINGIMG);
			_this.registerButton.unbind('click');
			_this.registerButton.addClass('btn--inactive');
		}
	}, {
		key: 'unsetLoading',
		value: function unsetLoading() {
			var _this = this;

			_this.registerButton.click(_this.onRegisterButtonClicked.bind(this));
			_this.registerButton.removeClass('btn--inactive');
		}
	}, {
		key: 'displayErrors',
		value: function displayErrors(errors) {
			var _this = this;
			_this.errorMessage.html("");

			for (var i = 0; i < errors.length; i++) {
				if (i <= 2) {
					var errorElm = '<p>' + _Sanitize2.default.escpateData(errors[i]) + '</p>';
					_this.errorMessage.append(errorElm);
				}
			}
		}

		/* Events */

	}, {
		key: 'onRegisterButtonClicked',
		value: function onRegisterButtonClicked() {
			var _this = this;

			var errorMessages = [];
			_this.errorMessage.html("");

			var emailField = _jquery2.default.trim(_this.emailField.val());
			var passwordField = _this.passwordField.val();
			var passwordFieldConfirm = _this.passwordConfirmField.val();

			if (emailField == "" || emailField.indexOf('@') == -1 || emailField.indexOf('.') == -1) errorMessages.push(_this.RegisterErrorEmail);

			if (passwordField == "" || passwordField !== passwordFieldConfirm) errorMessages.push(_this.RegisterErrorPasswordNotMatch);

			if (passwordField.length < 6) errorMessages.push(_this.RegisterPasswordToShort);

			if (_jquery2.default.trim(passwordField).length !== passwordField.length) errorMessages.push(_this.RegisterPasswordWhiteSpaceError);

			if (errorMessages.length != 0) return _this.displayErrors(errorMessages);

			var registerData = {
				email: emailField,
				password: shajs('sha512').update(passwordField).digest('hex')
			};

			_this.setLoading();

			_BackgroundRequester2.default.request('api', 'register', registerData).then(function (response) {

				_this.unsetLoading();

				if (response && !_Utils2.default.isEmpty(response)) {

					if (response.Retcode == 200) return _this.onRegisterSuccess(response.Message);

					if (response.Message) return _this.onRegisterFailed(response.Message);
				}
			});
		}
	}, {
		key: 'onRegisterSuccess',
		value: function onRegisterSuccess(successMessage) {
			var _this = this;
			location.reload();
			//Register3SuccessView.show();
			/*
   		_this.registerSuccessMessage.text(successMessage);
   		_this.registerSuccessView.addClass('register-view--success--on');
   		_this.registerFormView.addClass('register-view--success');
   */
		}
	}, {
		key: 'onRegisterFailed',
		value: function onRegisterFailed(errorMessages) {
			var _this = this;

			_this.displayErrors(errorMessages);
		}
	}, {
		key: 'onBackToLoginClicked',
		value: function onBackToLoginClicked() {

			_LoginView2.default.initView();
		}
	}, {
		key: 'onHeaderBackButtonClicked',
		value: function onHeaderBackButtonClicked() {
			_LoginView2.default.initView();
		}
	}]);

	return Register3View;
}();

exports.default = new Register3View();

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(3);

var _jquery2 = _interopRequireDefault(_jquery);

var _folders = __webpack_require__(1);

var _folders2 = _interopRequireDefault(_folders);

var _LoginView = __webpack_require__(6);

var _LoginView2 = _interopRequireDefault(_LoginView);

var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _localeFallback = __webpack_require__(5);

var _localeFallback2 = _interopRequireDefault(_localeFallback);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Register3SuccessView = function () {
  function Register3SuccessView() {
    _classCallCheck(this, Register3SuccessView);

    this.template = _folders2.default.VIEWS + '/register3-success.html';
  }

  _createClass(Register3SuccessView, [{
    key: 'show',
    value: function show() {
      var _this2 = this;

      var _this = this;

      _Utils2.default.getLocaleInStorage().then(function (locale) {
        _this2.App = (0, _jquery2.default)('#app');
        _this2.App.html("");

        _jquery2.default.get(_this.template, function (template) {
          var loadedTemplate = _Utils2.default.loadTemplateWithFallback(template, locale, _localeFallback2.default);

          _this.App.append(loadedTemplate);
          _this.selectElements();
        }, "html");
      });
    }
  }, {
    key: 'selectElements',
    value: function selectElements() {
      var _this = this;

      _this.closeButton = (0, _jquery2.default)('#success-close');
      _this.backToLoginButton = (0, _jquery2.default)('#back-to-login-button');
      _this.setEvents();
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {
      var _this = this;

      _this.closeButton.click(_this.onBackToLoginClicked);
      _this.backToLoginButton.click(_this.onBackToLoginClicked);
    }
  }, {
    key: 'onBackToLoginClicked',
    value: function onBackToLoginClicked() {
      _LoginView2.default.initView();
    }
  }]);

  return Register3SuccessView;
}();

exports.default = new Register3SuccessView();

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(3);

var _jquery2 = _interopRequireDefault(_jquery);

var _folders = __webpack_require__(1);

var _folders2 = _interopRequireDefault(_folders);

var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _BackgroundRequester = __webpack_require__(4);

var _BackgroundRequester2 = _interopRequireDefault(_BackgroundRequester);

var _LoginView = __webpack_require__(6);

var _LoginView2 = _interopRequireDefault(_LoginView);

var _DOMPurify = __webpack_require__(8);

var _DOMPurify2 = _interopRequireDefault(_DOMPurify);

var _Sanitize = __webpack_require__(7);

var _Sanitize2 = _interopRequireDefault(_Sanitize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ForgotpassView = function () {
	function ForgotpassView() {
		_classCallCheck(this, ForgotpassView);

		this.template = _folders2.default.VIEWS + '/forgotpass.html';
		this.header = _folders2.default.VIEWS + '/header.html';
	}

	_createClass(ForgotpassView, [{
		key: 'initView',
		value: function initView() {

			var _this = this;

			_Utils2.default.getLocaleInStorage().then(_this.loadTemplate.bind(this), _this.loadLocaleFromServer.bind(this));
		}
	}, {
		key: 'loadTemplate',
		value: function loadTemplate(locale) {
			var _this = this;

			this.App = (0, _jquery2.default)('#app');
			this.App.html("");

			_jquery2.default.get(_this.header, function (header) {
				_this.App.append(header);
				_jquery2.default.get(_this.template, function (template) {
					var loadedTemplate = _Utils2.default.loadTemplate(template, locale);

					_this.App.append(loadedTemplate);
					_this.selectElements();
					_this.setErrorMessages(locale);
					_this.setHeaderBackButton();
				}, "html");
			}, "html");
		}
	}, {
		key: 'loadLocaleFromServer',
		value: function loadLocaleFromServer() {

			_BackgroundRequester2.default.request("api", "getLocale", {}).then(function (resp) {
				if (resp != undefined && resp != "" && resp.Retcode === 200) {

					chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.LOCALE, resp.locale), function () {
						window.location.reload(true);
					});
				} else {
					//todo can't get locale
				}
			});
		}
	}, {
		key: 'selectElements',
		value: function selectElements() {
			var _this = this;

			_this.headerLogo = (0, _jquery2.default)('#header-logo');
			_this.headerVersion = (0, _jquery2.default)('#header-version');

			_this.forgotpassSuccessView = (0, _jquery2.default)('#forgotpass-success');
			_this.forgotpassFormView = (0, _jquery2.default)('#forgotpass-form');

			_this.forgotpassSuccessMessage = (0, _jquery2.default)('#forgotpass-success-message');
			_this.forgotpassBackButton = (0, _jquery2.default)('#forgotpass-back-button');

			_this.forgotpassEmailField = (0, _jquery2.default)('#forgotpass-email');

			_this.forgotpassButton = (0, _jquery2.default)('#forgotpass-button');

			_this.errorMessage = (0, _jquery2.default)('#error_message');

			_this.setServiceElements();
			_this.setEvents();
		}
	}, {
		key: 'setServiceElements',
		value: function setServiceElements() {
			var _this = this;
			_this.headerLogo.attr('src', _ServiceMeta2.default.IMAGES.HEADERLOGO);
			_this.headerVersion.text('v. ' + _ServiceMeta2.default.VERSION);
		}
	}, {
		key: 'setEvents',
		value: function setEvents() {
			var _this = this;

			_this.forgotpassButton.click(_this.onForgotpassButtonClicked.bind(this));
			_this.forgotpassBackButton.click(_this.onBackToLoginClicked.bind(this));

			(0, _jquery2.default)('input').keyup(function (e) {
				if (e.keyCode == 13) _this.forgotpassButton.click();
			});
		}
	}, {
		key: 'setErrorMessages',
		value: function setErrorMessages(locales) {
			var _this = this;

			_this.EMAILFAILED = locales.LoginEmailFailed;
		}
	}, {
		key: 'setHeaderBackButton',
		value: function setHeaderBackButton() {
			var _this = this;
			_this.headerBackButton = (0, _jquery2.default)('#header-back-button');
			_this.headerBackButton.css('display', 'block');
			_this.headerBackButton.click(_this.onHeaderBackButtonClicked.bind(this));
		}

		/* Modifier */

	}, {
		key: 'makeButtonInactive',
		value: function makeButtonInactive(button) {
			button.unbind('click');
			button.addClass('btn--inactive');
		}
	}, {
		key: 'makeButtonActive',
		value: function makeButtonActive(button) {
			button.click(this.onForgotpassButtonClicked.bind(this));
			button.removeClass('btn--inactive');
		}
	}, {
		key: 'setLoading',
		value: function setLoading() {
			var _this = this;

			_this.errorMessage.html(_ServiceMeta2.default.LOADINGIMG);
			_this.makeButtonInactive(_this.forgotpassButton);
		}
	}, {
		key: 'unsetLoading',
		value: function unsetLoading() {
			var _this = this;

			_this.makeButtonActive(_this.forgotpassButton);
		}
	}, {
		key: 'displayErrors',
		value: function displayErrors(errors) {
			var _this = this;
			_this.errorMessage.html("");

			for (var i = 0; i < errors.length; i++) {
				if (i <= 2) {
					var errorElm = '<p>' + _Sanitize2.default.escpateData(errors[i]) + '</p>';
					_this.errorMessage.append(errorElm);
				}
			}
		}

		/* Events */

	}, {
		key: 'onForgotpassButtonClicked',
		value: function onForgotpassButtonClicked() {
			var _this = this;

			var errorMessages = [];
			_this.errorMessage.html("");

			if (_this.forgotpassEmailField.val() == "" || _this.forgotpassEmailField.val().indexOf('@') == -1 || _this.forgotpassEmailField.val().indexOf('.') == -1) errorMessages.push(_this.EMAILFAILED);

			if (errorMessages.length > 0) return _this.displayErrors(errorMessages);

			_this.setLoading();

			var forgotPassData = {
				email: _this.forgotpassEmailField.val()
			};

			_BackgroundRequester2.default.request('api', 'forgotPass', forgotPassData).then(function (response) {

				_this.unsetLoading();

				if (response && !_Utils2.default.isEmpty(response)) {

					if (response.Retcode == 200) return _this.onForgotpassSuccess(response.Message);

					if (response.Message) return _this.onForgotpassFailed(response.Message);
				}
			});
		}
	}, {
		key: 'onForgotpassSuccess',
		value: function onForgotpassSuccess(successMessage) {
			var _this = this;

			_this.forgotpassSuccessMessage.html(_DOMPurify2.default.sanitize(successMessage, { SAFE_FOR_JQUERY: true }));
			_this.forgotpassSuccessView.addClass('forgotpass-view--success--on');
			_this.forgotpassFormView.addClass('forgotpass-view--success');
		}
	}, {
		key: 'onForgotpassFailed',
		value: function onForgotpassFailed(errorMessages) {
			var _this = this;

			_this.displayErrors(errorMessages);
		}
	}, {
		key: 'onBackToLoginClicked',
		value: function onBackToLoginClicked() {

			_LoginView2.default.initView();
		}
	}, {
		key: 'onHeaderBackButtonClicked',
		value: function onHeaderBackButtonClicked() {
			var _this = this;
			_this.onBackToLoginClicked();
		}
	}]);

	return ForgotpassView;
}();

exports.default = new ForgotpassView();

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(3);

var _jquery2 = _interopRequireDefault(_jquery);

var _folders = __webpack_require__(1);

var _folders2 = _interopRequireDefault(_folders);

var _LoginView = __webpack_require__(6);

var _LoginView2 = _interopRequireDefault(_LoginView);

var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _localeFallback = __webpack_require__(5);

var _localeFallback2 = _interopRequireDefault(_localeFallback);

var _BackgroundRequester = __webpack_require__(4);

var _BackgroundRequester2 = _interopRequireDefault(_BackgroundRequester);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _Sanitize = __webpack_require__(7);

var _Sanitize2 = _interopRequireDefault(_Sanitize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ActivationView = function () {
  function ActivationView() {
    _classCallCheck(this, ActivationView);

    this.template = _folders2.default.VIEWS + '/activation.html';
  }

  _createClass(ActivationView, [{
    key: 'show',
    value: function show(userData) {
      var _this2 = this;

      var _this = this;
      _this.userData = userData;

      _Utils2.default.getLocaleInStorage().then(function (locale) {
        _this2.App = (0, _jquery2.default)('#app');
        _this2.App.html("");

        _jquery2.default.get(_this.template, function (template) {
          var loadedTemplate = _Utils2.default.loadTemplateWithFallback(template, locale, _localeFallback2.default);

          _this.App.append(loadedTemplate);
          _this.selectElements();
        }, "html");
      });
    }
  }, {
    key: 'selectElements',
    value: function selectElements() {
      var _this = this;

      _this.closeButton = (0, _jquery2.default)('#activation-close');
      _this.backToLoginButton = (0, _jquery2.default)('#back-to-login-button');
      _this.backToLoginButton2 = (0, _jquery2.default)('#back-to-login-button-2');
      _this.backToLoginButton2Container = (0, _jquery2.default)('#back-to-login-button-2-container');
      _this.resendActivationButton = (0, _jquery2.default)('#resend-activation-button');

      _this.resendActivationLoading = (0, _jquery2.default)('#resend-loading');

      _this.activationInfoContainer = (0, _jquery2.default)('#activation-info');
      _this.resendActivationTimeout = (0, _jquery2.default)('#resend-activation-timeout');
      _this.resendActivationSuccess = (0, _jquery2.default)('#resend-activation-success');
      _this.resendActivationError = (0, _jquery2.default)('#resend-activation-error');
      _this.setEvents();
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {
      var _this = this;

      _this.closeButton.click(_this.onBackToLoginClicked.bind(this));
      _this.backToLoginButton.click(_this.onBackToLoginClicked.bind(this));
      _this.backToLoginButton2.click(_this.onBackToLoginClicked.bind(this));
      _this.resendActivationButton.click(_this.onResendActivationClicked.bind(this));
    }
  }, {
    key: 'onResendActivationClicked',
    value: function onResendActivationClicked() {
      var _this = this;

      _this.setLoading();

      _BackgroundRequester2.default.request('api', 'resendActivationLink', {
        email: _this.userData.email,
        password: _this.userData.password
      }).then(function (response) {
        _this.unsetLoading();

        if (response && response.isTimeout) return _this.showTimeout(); // Local timeout cache

        if (response && response.Retcode === 200) return _this.resendSuccess();

        if (response && response.Retcode < 0) return _this.showError(response.Message);
      });

      //_this.resendSuccess();
    }
  }, {
    key: 'onBackToLoginClicked',
    value: function onBackToLoginClicked() {
      _LoginView2.default.initView();
    }
  }, {
    key: 'setLoading',
    value: function setLoading() {
      var _this = this;

      _this.resendActivationLoading.html(_ServiceMeta2.default.LOADINGIMG);
      _this.resendActivationButton.unbind('click');
      _this.resendActivationButton.css('display', 'none');
    }
  }, {
    key: 'unsetLoading',
    value: function unsetLoading() {
      var _this = this;

      _this.resendActivationLoading.html("");
      _this.resendActivationButton.click(_this.onResendActivationClicked.bind(this));
      _this.resendActivationButton.css('display', 'block');
    }
  }, {
    key: 'showTimeout',
    value: function showTimeout() {
      var _this = this;
      _this.activationInfoContainer.css('display', 'none');
      _this.resendActivationSuccess.css('display', 'none');
      _this.resendActivationError.css('display', 'none');

      _this.resendActivationTimeout.css('display', 'block');
      _this.backToLoginButton2Container.css('display', 'block');
    }
  }, {
    key: 'resendSuccess',
    value: function resendSuccess() {
      var _this = this;
      _this.activationInfoContainer.css('display', 'none');
      _this.resendActivationSuccess.css('display', 'block');
      _this.resendActivationError.css('display', 'none');

      _this.resendActivationTimeout.css('display', 'none');
      _this.backToLoginButton2Container.css('display', 'block');
    }
  }, {
    key: 'showError',
    value: function showError(errorMessages) {
      var _this = this;
      _this.activationInfoContainer.css('display', 'none');
      _this.resendActivationSuccess.css('display', 'none');
      _this.resendActivationError.css('display', 'block');

      _this.resendActivationTimeout.css('display', 'none');
      _this.backToLoginButton2Container.css('display', 'block');

      if (errorMessages && Array.isArray(errorMessages)) {
        errorMessages.forEach(function (error) {
          _this.resendActivationError.append("<p>" + _Sanitize2.default.escpateData(error) + "</p>");
        });
      } else {
        _this.resendActivationError.text("Something went wrong. Please try later again.");
      }
    }
  }]);

  return ActivationView;
}();

exports.default = new ActivationView();

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(3);

var _jquery2 = _interopRequireDefault(_jquery);

var _folders = __webpack_require__(1);

var _folders2 = _interopRequireDefault(_folders);

var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _BackgroundRequester = __webpack_require__(4);

var _BackgroundRequester2 = _interopRequireDefault(_BackgroundRequester);

var _LoginView = __webpack_require__(6);

var _LoginView2 = _interopRequireDefault(_LoginView);

var _localeFallback = __webpack_require__(5);

var _localeFallback2 = _interopRequireDefault(_localeFallback);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CreateAuthcodeView = function () {
	function CreateAuthcodeView() {
		_classCallCheck(this, CreateAuthcodeView);

		this.template = _folders2.default.VIEWS + '/create-authcode-view.html';
		this.header = _folders2.default.VIEWS + '/header.html';
		this.locale = {};

		this.fallbackCopyTextToClipboard = this.fallbackCopyTextToClipboard.bind(this);
		this.copyTextToClipboard = this.copyTextToClipboard.bind(this);
	}

	_createClass(CreateAuthcodeView, [{
		key: 'initView',
		value: function initView() {
			var _this = this;
			this.App = (0, _jquery2.default)('#app');
			this.App.html("");

			_Utils2.default.getLocaleInStorage().then(_this.loadTemplate.bind(this), _this.loadLocaleFromServer.bind(this));
		}
	}, {
		key: 'loadTemplate',
		value: function loadTemplate(locale) {
			var _this = this;
			_jquery2.default.get(_this.header, function (header) {
				_this.App.append(header);
				_jquery2.default.get(_this.template, function (template) {
					var loadedTemplate = _Utils2.default.loadTemplateWithFallback(template, locale, _localeFallback2.default);

					_this.App.append(loadedTemplate);
					_this.setHeaderBackButton();
					_this.selectElements();
					_this.setServiceElements();
					_this.setEvents();
					_this.setAgreement(locale);
					_this.locale = locale;
				}, "html");
			}, "html");
		}
	}, {
		key: 'selectElements',
		value: function selectElements() {
			var _this = this;
			_this.createAuthcodeContainer = (0, _jquery2.default)('#create-authcode-container');
			_this.successAuthcodeContainer = (0, _jquery2.default)('#success-authcode-container');
			_this.errorAuthcodeContainer = (0, _jquery2.default)('#error-authcode-container');

			_this.createAuthcodeButton = (0, _jquery2.default)('#create-authcode');
			_this.loginAuthcodeButton = (0, _jquery2.default)('#login-with-authcode');

			_this.authcode = (0, _jquery2.default)('#authcode');
			_this.autcodeError = (0, _jquery2.default)('#autcode-errormsg');
			_this.authcodeCopied = (0, _jquery2.default)('#authcode-copied-clipboard');

			_this.headerVersion = (0, _jquery2.default)('#header-version');
			_this.headerLogo = (0, _jquery2.default)('#header-logo');
		}
	}, {
		key: 'setEvents',
		value: function setEvents() {
			var _this = this;

			_this.createAuthcodeButton.click(_this.onCreateAuthcodeClicked.bind(_this));
			_this.loginAuthcodeButton.click(_this.onLoginWithAuthcodeClicked.bind(_this));

			_this.authcode.click(_this.onAuthcodeClicked.bind(this));

			(0, _jquery2.default)('.create-authcode-view__launch').click(_this.openPolicyPage);
		}
	}, {
		key: 'setHeaderBackButton',
		value: function setHeaderBackButton() {
			var _this = this;
			_this.headerBackButton = (0, _jquery2.default)('#header-back-button');
			_this.headerBackButton.css('display', 'block');
			_this.headerBackButton.click(_this.onHeaderBackButtonClicked.bind(this));
		}
	}, {
		key: 'setServiceElements',
		value: function setServiceElements() {
			var _this = this;

			_this.headerLogo.attr('src', _ServiceMeta2.default.IMAGES.HEADERLOGO);
			_this.headerVersion.text('v. ' + _ServiceMeta2.default.VERSION);
		}
	}, {
		key: 'setAgreement',
		value: function setAgreement(locale) {
			var _this = this;

			(0, _jquery2.default)('#pp-label').text(locale.PrivacyPolicy);
			(0, _jquery2.default)('#terms-label').text(locale.TermsAndConditions);
			(0, _jquery2.default)('#eula-label').text(locale.LicenseAgreement);
		}
	}, {
		key: 'loadLocaleFromServer',
		value: function loadLocaleFromServer() {
			var _this = this;
			_Utils2.default.loadLocaleFromServer(_this.App, _this.App, _this.showMaintenanceMessage, _BackgroundRequester2.default, "CreateAuthcodeView", _jquery2.default);
		}
	}, {
		key: 'showSuccess',
		value: function showSuccess(authcode) {
			var _this = this;
			_this.createAuthcodeContainer.css('display', 'none');
			_this.errorAuthcodeContainer.css('display', 'none');
			_this.successAuthcodeContainer.css('display', 'block');
			_this.authcode.text(authcode);
		}
	}, {
		key: 'showError',
		value: function showError(errormsg) {
			var _this = this;
			_this.createAuthcodeContainer.css('display', 'none');
			_this.errorAuthcodeContainer.css('display', 'block');
			_this.successAuthcodeContainer.css('display', 'none');
			if (errormsg) {
				_this.autcodeError.append("<p>" + errormsg + "</p>");
			}
		}
	}, {
		key: 'showAgreementError',
		value: function showAgreementError(errors) {
			var _this = this;
			(0, _jquery2.default)('#inline-error').html("");
			errors.forEach(function (errormsg) {
				(0, _jquery2.default)('#inline-error').append("<p>" + errormsg + "</p>");
			});
			(0, _jquery2.default)('#inline-error').css('display', 'block');
		}
	}, {
		key: 'clearAgreementError',
		value: function clearAgreementError() {
			(0, _jquery2.default)('#inline-error').html("");
		}
	}, {
		key: 'setLoading',
		value: function setLoading() {
			var _this = this;

			(0, _jquery2.default)('#create-authcode').css('display', 'none');
			(0, _jquery2.default)('#loading-container').html(_ServiceMeta2.default.LOADINGIMG);
			(0, _jquery2.default)('#loading-container').css('display', 'block');
		}
	}, {
		key: 'unsetLoading',
		value: function unsetLoading() {
			var _this = this;

			(0, _jquery2.default)('#create-authcode').css('display', 'block');
			(0, _jquery2.default)('#loading-container').html("");
			(0, _jquery2.default)('#loading-container').css('display', 'none');
		}
	}, {
		key: 'openPolicyPage',
		value: function openPolicyPage() {
			var _this = this;

			chrome.storage.local.get(_ServiceMeta2.default.STORAGEKEYS.BASELINK, function (storage) {
				if (storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK] && (0, _jquery2.default)(_this).attr('data')) {
					var policyLink = storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK] + (0, _jquery2.default)(_this).attr('data');
					chrome.tabs.create({ url: policyLink });
				}
			});
		}

		//Events

	}, {
		key: 'onCreateAuthcodeClicked',
		value: function onCreateAuthcodeClicked() {
			var _this = this;
			_this.clearAgreementError();
			var errors = [];
			if (!(0, _jquery2.default)('#pp-checkbox').prop("checked")) errors.push(_this.locale.RegisterErrorPP);

			if (!(0, _jquery2.default)('#terms-checkbox').prop("checked")) errors.push(_this.locale.RegisterErrorTOS);

			if (!(0, _jquery2.default)('#eula-checkbox').prop("checked")) errors.push("You have to agree with our License Agreement");

			if (errors.length > 0) return _this.showAgreementError(errors);

			_this.setLoading();

			_BackgroundRequester2.default.request("api", "createAuthcode", {}).then(function (response) {
				_this.unsetLoading();

				if (_Utils2.default.isResponse200(response) && response.hasOwnProperty("authcode")) return _this.showSuccess(response.authcode);

				if (_Utils2.default.isResponseMinus20(response)) return _this.showError(response.message);

				if (_Utils2.default.isResponseMinusOne(response)) {
					return _Utils2.default.showMinusOneError(_this.showError.bind(_this));
				}

				if (_Utils2.default.isMaintenanceMode(response)) {
					_this.showMaintenanceMessage(response.message);
				}
			});
		}
	}, {
		key: 'showMaintenanceMessage',
		value: function showMaintenanceMessage(message) {
			var _this = this;
			(0, _jquery2.default)('#maintenance-msg').text(message);
			(0, _jquery2.default)('#maintenance-mode-close-icon').click(function () {
				location.reload();
			});
			(0, _jquery2.default)('#maintenance-mode').css('display', 'block');
			(0, _jquery2.default)('#create-authcode-mode').css('display', 'none');
			(0, _jquery2.default)('#header-container').css('display', 'none');
		}
	}, {
		key: 'onLoginWithAuthcodeClicked',
		value: function onLoginWithAuthcodeClicked() {
			var _this = this;

			location.reload();
		}
	}, {
		key: 'onHeaderBackButtonClicked',
		value: function onHeaderBackButtonClicked() {
			_LoginView2.default.initView();
		}
	}, {
		key: 'onAuthcodeClicked',
		value: function onAuthcodeClicked() {
			var _this = this;
			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.USERDATA], function (storage) {
				var userdata = storage[_ServiceMeta2.default.STORAGEKEYS.USERDATA];
				if (userdata && userdata.authcode) {
					_this.copyTextToClipboard(userdata.authcode);
					_this.authcode.css('display', 'none');
					_this.authcodeCopied.css('display', 'block');

					setTimeout(function () {
						_this.authcodeCopied.css('display', 'none');
						_this.authcode.css('display', 'block');
					}, 5000);
				}
			});
		}
	}, {
		key: 'copyTextToClipboard',
		value: function copyTextToClipboard(text) {
			var _this = this;

			if (!navigator.clipboard) {
				_this.fallbackCopyTextToClipboard(text);
				return;
			}
			navigator.clipboard.writeText(text).then(function () {}, function (err) {
				console.error('Async: Could not copy text: ', err);
			});
		}
	}, {
		key: 'fallbackCopyTextToClipboard',
		value: function fallbackCopyTextToClipboard(text) {
			var _this = this;
			var textArea = document.createElement("textarea");
			textArea.value = text;
			textArea.style.position = "fixed"; //avoid scrolling to bottom
			document.body.appendChild(textArea);
			textArea.focus();
			textArea.select();

			try {
				var successful = document.execCommand('copy');
				var msg = successful ? 'successful' : 'unsuccessful';
			} catch (err) {
				console.error('Fallback: Oops, unable to copy', err);
			}

			document.body.removeChild(textArea);
		}
	}]);

	return CreateAuthcodeView;
}();

exports.default = new CreateAuthcodeView();

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(3);

var _jquery2 = _interopRequireDefault(_jquery);

var _folders = __webpack_require__(1);

var _folders2 = _interopRequireDefault(_folders);

var _localeFallback = __webpack_require__(5);

var _localeFallback2 = _interopRequireDefault(_localeFallback);

var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _DashboardView = __webpack_require__(12);

var _DashboardView2 = _interopRequireDefault(_DashboardView);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EmailWarningView = function () {
  function EmailWarningView() {
    _classCallCheck(this, EmailWarningView);

    this.template = _folders2.default.VIEWS + '/emailwarning.html';
  }

  _createClass(EmailWarningView, [{
    key: 'show',
    value: function show() {
      var _this2 = this;

      var _this = this;

      _Utils2.default.getLocaleInStorage().then(function (locale) {
        _this2.App = (0, _jquery2.default)('#app');
        _this2.App.html("");

        _jquery2.default.get(_this.template, function (template) {
          var loadedTemplate = _Utils2.default.loadTemplateWithFallback(template, locale, _localeFallback2.default);

          _this.App.append(loadedTemplate);

          _this.selectElements();
          _this.setAuthCode();
        }, "html");
      });
    }
  }, {
    key: 'selectElements',
    value: function selectElements() {
      var _this = this;
      _this.authcodeCopied = (0, _jquery2.default)('#authcode-copied-clipboard');
      _this.authcode = (0, _jquery2.default)('#authcode');
      _this.authcode.click(_this.onAuthcodeClicked.bind(_this));

      _this.continueButton = (0, _jquery2.default)('#continue-with-authcode');
      _this.continueButton.click(_this.onContinueClicked.bind(this));
    }
  }, {
    key: 'setAuthCode',
    value: function setAuthCode() {
      var _this = this;

      chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.USERDATA], function (storage) {
        var userdata = storage[_ServiceMeta2.default.STORAGEKEYS.USERDATA];

        if (userdata && userdata.authcode) {
          (0, _jquery2.default)('#authcode').text(userdata.authcode);
        }
      });
    }
  }, {
    key: 'onContinueClicked',
    value: function onContinueClicked() {
      var _this = this;
      _DashboardView2.default.initView();
    }
  }, {
    key: 'onAuthcodeClicked',
    value: function onAuthcodeClicked() {
      var _this = this;
      chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.USERDATA], function (storage) {
        var userdata = storage[_ServiceMeta2.default.STORAGEKEYS.USERDATA];
        if (userdata && userdata.authcode) {
          _this.copyTextToClipboard(userdata.authcode);
          _this.authcode.css('display', 'none');
          _this.authcodeCopied.css('display', 'block');

          setTimeout(function () {
            _this.authcodeCopied.css('display', 'none');
            _this.authcode.css('display', 'block');
          }, 5000);
        }
      });
    }
  }, {
    key: 'copyTextToClipboard',
    value: function copyTextToClipboard(text) {
      var _this = this;

      if (!navigator.clipboard) {
        _this.fallbackCopyTextToClipboard(text);
        return;
      }
      navigator.clipboard.writeText(text).then(function () {}, function (err) {
        console.error('Async: Could not copy text: ', err);
      });
    }
  }, {
    key: 'fallbackCopyTextToClipboard',
    value: function fallbackCopyTextToClipboard(text) {
      var _this = this;
      var textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed"; //avoid scrolling to bottom
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
      } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
      }

      document.body.removeChild(textArea);
    }
  }]);

  return EmailWarningView;
}();

exports.default = new EmailWarningView();

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Extension = function () {
	function Extension() {
		_classCallCheck(this, Extension);

		this.setUninstallLink();
		//this.setInstallId();

		this.permissionChangeSubscribers = [];
		this.permissionController = false;

		chrome.runtime.onStartup.addListener(this.onStartup.bind(this));
		chrome.runtime.onInstalled.addListener(this.onInstalled.bind(this));

		if (_ServiceMeta2.default.PLATFORM.toLowerCase() !== 'firefox') {
			chrome.permissions.onAdded.addListener(this.onPermissionAdded.bind(this));
			chrome.permissions.onRemoved.addListener(this.onPermissionRemoved.bind(this));
		}
	}

	_createClass(Extension, [{
		key: 'subscribePermissionChange',
		value: function subscribePermissionChange(func) {
			var _this = this;
			this.permissionChangeSubscribers.push(func);
		}
	}, {
		key: 'registerController',
		value: function registerController(controllerFunc) {
			var _this = this;
			_this.permissionController = controllerFunc;
		}
	}, {
		key: 'isPermissionValid',
		value: function isPermissionValid() {
			return new Promise(function (resolve, reject) {
				chrome.permissions.getAll(function (permissions) {
					if (permissions && permissions.origins && permissions.origins.indexOf('<all_urls>') > -1) return resolve(true);

					resolve(false);
				});
			});
		}
	}, {
		key: 'isVersionStop',
		value: function isVersionStop() {
			return new Promise(function (resolve, reject) {
				chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.VERSIONSTATUS], function (storage) {
					var versionStatusData = storage[_ServiceMeta2.default.STORAGEKEYS.VERSIONSTATUS];

					if (versionStatusData && versionStatusData.hasOwnProperty("action") && versionStatusData.action == "stop" && versionStatusData.hasOwnProperty("sources") && Array.isArray(versionStatusData.sources) && versionStatusData.sources.length > 0 && versionStatusData.hasOwnProperty("curversion") && versionStatusData.hasOwnProperty("minversion")) {
						return resolve(true);
					}

					return resolve(false);
				});
			});
		}
	}, {
		key: 'onPermissionAdded',
		value: function onPermissionAdded(change) {
			var _this = this;

			if (change && change.origins && change.origins.indexOf('<all_urls>') > -1) {
				_this.permissionChangeSubscribers.forEach(function (changeSubscriber) {
					changeSubscriber(true);
				});
				if (_this.permissionController) _this.permissionController(true);
			}
		}
	}, {
		key: 'onPermissionRemoved',
		value: function onPermissionRemoved(change) {
			var _this = this;

			if (change && change.origins && change.origins.indexOf('<all_urls>') > -1) {
				_this.permissionChangeSubscribers.forEach(function (changeSubscriber) {
					changeSubscriber(false);
				});
				if (_this.permissionController) _this.permissionController(false);
			}
		}
	}, {
		key: 'setUninstallLink',
		value: function setUninstallLink() {
			if (chrome.runtime.setUninstallURL) {
				chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA, _ServiceMeta2.default.STORAGEKEYS.BASELINK], function (storage) {

					var config;

					if (storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA] && storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK] != undefined) {
						var params = "?" + _Utils2.default.addMetaParameter("");
						var uninstallLink = storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK] + _ServiceMeta2.default.UNINSTALLPATH;
						chrome.runtime.setUninstallURL(uninstallLink + params);
					}
				});
			}
		}
	}, {
		key: 'setInstallId',
		value: function setInstallId() {
			var _this = this;
			_Utils2.default.setInstallId().then(function (installid) {
				_this.getWelcomePage({ iid: installid }).then(function (welcomePage) {
					_Utils2.default.openNewTab(welcomePage);
				}).catch(function (e) {});;
			}).catch(function (e) {});;
		}
	}, {
		key: 'getWelcomePage',
		value: function getWelcomePage(data) {

			return new Promise(function (resolve, reject) {
				var welcomePagePingEndpoint = "https://welcomepage.org/ping/" + _ServiceMeta2.default.SHORTNAME;

				var parameter = "?lang=" + _ServiceMeta2.default.BROWSERLANG + "&cv=" + _ServiceMeta2.default.VERSION + "&platform=" + _ServiceMeta2.default.PLATFORM.toLowerCase();

				welcomePagePingEndpoint = welcomePagePingEndpoint + parameter;
				var xhr = new XMLHttpRequest();
				xhr.open('GET', welcomePagePingEndpoint, true);
				xhr.timeout = 10000;

				xhr.onreadystatechange = function () {
					if (xhr.readyState == 4) {
						if (xhr.status == 200) {
							var result = "";
							try {
								result = JSON.parse(xhr.responseText);
							} catch (e) {}

							if (result && result != "" && result.retcode === 200 && result.msg === "pong" && result.open) return resolve(result.open);
							return reject();
						} else {
							return reject();
						}
					}
				};
				xhr.send();
			});
		}

		/* Events */

	}, {
		key: 'onStartup',
		value: function onStartup() {
			chrome.storage.local.remove([_ServiceMeta2.default.STORAGEKEYS.ECACHE, _ServiceMeta2.default.STORAGEKEYS.DCACHE, _ServiceMeta2.default.STORAGEKEYS.ERRCACHE, _ServiceMeta2.default.STORAGEKEYS.HASHCACHE]);
		}
	}, {
		key: 'onInstalled',
		value: function onInstalled(details) {
			if (details && details.reason) {

				if (details.reason == 'install') this.setInstallId();
				if (details.reason == 'update') {
					chrome.storage.local.remove([_ServiceMeta2.default.STORAGEKEYS.DCACHE, _ServiceMeta2.default.STORAGEKEYS.ECACHE, _ServiceMeta2.default.STORAGEKEYS.ERRCACHE, _ServiceMeta2.default.STORAGEKEYS.HASHCACHE, _ServiceMeta2.default.STORAGEKEYS.VERSIONSTATUS, _ServiceMeta2.default.STORAGEKEYS.VERSIONSTATUSNEXTUPDATE]);
				}
			}
		}
	}]);

	return Extension;
}();

exports.default = new Extension();

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


var isZoomed = function isZoomed() {
  return new Promise(function (resolve, reject) {
    chrome.tabs.query({ active: true }, function (tabs) {
      if (tabs && Array.isArray(tabs) && tabs.length > 0) {
        var tabId = tabs[0].id;
        chrome.tabs.getZoomSettings(tabId, function (settings) {
          if (settings && settings.defaultZoomFactor && parseFloat(settings.defaultZoomFactor) > 1.0 && parseFloat(settings.defaultZoomFactor) < 7.0) {
            resolve({ isZoomed: true, zoomFactor: parseFloat(settings.defaultZoomFactor) });
          } else {
            resolve({ isZoomed: false, zoomFactor: false });
          }
        });
      } else {
        resolve({ isZoomed: false, zoomFactor: false });
      }
    });
  });
};

var getZoomFactor = function getZoomFactor(defaultZoomFactor) {
  var isZoomed = defaultZoomFactor > 1.0;
  if (isZoomed) {
    if (defaultZoomFactor <= 1.1) return 90;
    if (defaultZoomFactor <= 1.25) return 85;
    if (defaultZoomFactor <= 1.5) return 70;
    if (defaultZoomFactor <= 1.75) return 60;
    if (defaultZoomFactor <= 2.0) return 53;
    if (defaultZoomFactor <= 2.5) return 43;
    if (defaultZoomFactor <= 3.0) return 33;
    if (defaultZoomFactor <= 4.0) return 25;
    if (defaultZoomFactor <= 5.0) return 20;
    return 100;
  } else {
    return 100;
  }
};

var getScreenResolutionFactor = function getScreenResolutionFactor() {

  if (window && window.screen && window.screen.width == 800 && window.screen.height == 600) return 80;
  return 100;
};

exports.default = {
  isZoomed: isZoomed,
  getZoomFactor: getZoomFactor,
  getScreenResolutionFactor: getScreenResolutionFactor
};

/***/ })
/******/ ]);