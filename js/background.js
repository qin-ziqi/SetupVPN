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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _folders = __webpack_require__(14);

var _folders2 = _interopRequireDefault(_folders);

var _errorcodes = __webpack_require__(23);

var _errorcodes2 = _interopRequireDefault(_errorcodes);

var _platform = __webpack_require__(24);

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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(9);

var _constants2 = _interopRequireDefault(_constants);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _folders = __webpack_require__(14);

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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _endpoints = __webpack_require__(8);

var _endpoints2 = _interopRequireDefault(_endpoints);

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

var _BaseFinder = __webpack_require__(15);

var _BaseFinder2 = _interopRequireDefault(_BaseFinder);

var _TokenWatcher = __webpack_require__(5);

var _TokenWatcher2 = _interopRequireDefault(_TokenWatcher);

var _constants = __webpack_require__(9);

var _constants2 = _interopRequireDefault(_constants);

var _folders = __webpack_require__(14);

var _folders2 = _interopRequireDefault(_folders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var shajs = __webpack_require__(28);

var Api = function () {
	function Api() {
		_classCallCheck(this, Api);
	}

	// Responses: 200, -1, -500, -20


	_createClass(Api, [{
		key: 'getLanguage',
		value: function getLanguage(callback) {
			var _this = this;

			chrome.runtime.getPlatformInfo(function (platformInfo) {

				var parameter = Object.assign({
					os: platformInfo && platformInfo.os ? platformInfo.os : "-"
				}, _this.metaData());

				_this.request(_endpoints2.default.LANGUAGELIST, 'POST', parameter, function (response) {
					if (_Utils2.default.isResponse200(response)) {
						callback(response);
					} else {
						if (_Utils2.default.isResponse200(response) || _Utils2.default.isResponseMinusOne(response) || _Utils2.default.isMaintenanceMode(response) || _Utils2.default.isResponseMinus20(response)) {
							if (callback) callback(response);
						} else {

							chrome.storage.local.get(function (storage) {
								var Baselink = storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK];
								_this.findNewBase(Baselink);
							});
						}
					}
				}, false, true);
			});
		}
		// Responses: 200, -1, -500, -20

	}, {
		key: 'getLocale',
		value: function getLocale(callback, data) {
			var _this = this;
			chrome.storage.local.get(_ServiceMeta2.default.STORAGEKEYS.LANGUAGE, function (storage) {
				chrome.runtime.getPlatformInfo(function (platformInfo) {
					var lang = storage[_ServiceMeta2.default.STORAGEKEYS.LANGUAGE];
					var parameter = Object.assign({
						os: platformInfo && platformInfo.os ? platformInfo.os : "-",
						lang: lang
					}, _this.metaData());

					_this.request(_endpoints2.default.GETLOCALE, 'POST', parameter, function (response) {
						// We do check here also type of translation since we need to make sure we store a valid
						if (_Utils2.default.isResponse200(response) && _typeof(response.translation) === 'object' && response.translation !== null) {
							var _chrome$storage$local;

							chrome.storage.local.set((_chrome$storage$local = {}, _defineProperty(_chrome$storage$local, _ServiceMeta2.default.STORAGEKEYS.LOCALE, response.translation), _defineProperty(_chrome$storage$local, _ServiceMeta2.default.STORAGEKEYS.LSER, Number.isInteger(response.serial) ? response.serial : 0), _chrome$storage$local), function () {});
							_this.getCountryLocale({ langCode: lang }, function () {
								callback(response);
							});
						} else {
							if (_Utils2.default.isResponseMinusOne(response) || _Utils2.default.isMaintenanceMode(response) || _Utils2.default.isResponseMinus20(response)) {
								if (callback) callback(response);
							} else {

								if (data && data.ignoreFail === true) return callback();

								chrome.storage.local.get(function (storage) {
									var Baselink = storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK];
									_this.findNewBase(Baselink);
								});
							}
						}
					}, false, true);
				});
			});
		}
	}, {
		key: 'getCountryLocale',
		value: function getCountryLocale(data, callback) {
			var _this = this;

			_this.loadCountryLocaleJsonFile(data.langCode).then(function (countryLocale) {

				if (countryLocale) {
					chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.COUNTRYLOCALE, countryLocale), function () {
						if (callback) callback(countryLocale);
					});
				} else {
					// Fallback to english if there is no locale for selected language code
					_this.loadCountryLocaleJsonFile("en").then(function (countryLocale) {
						chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.COUNTRYLOCALE, countryLocale), function () {
							if (callback) callback(countryLocale);
						});
					});
				}
			});
		}
	}, {
		key: 'loadCountryLocaleJsonFile',
		value: function loadCountryLocaleJsonFile(langCode) {
			return new Promise(function (resolve, reject) {
				var xhr = new XMLHttpRequest();
				var localeFile = _folders2.default.LOCALE + "/" + langCode + ".json";
				xhr.open("GET", localeFile, true);
				xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
				xhr.timeout = 5000;
				xhr.onreadystatechange = function () {
					if (xhr.readyState == 4) {
						if (xhr.status == 200) {
							var response = xhr.responseText;
							var localeJson = false;
							try {
								localeJson = JSON.parse(response);
							} catch (e) {
								//_this.notFound();
							}

							resolve(localeJson);
						} else {
							resolve(false);
						}
					}
				};
				xhr.send();
			});
		}

		// 200, -1, -50, -20, -4 ==> Supports: Authcode / email&hpassword

	}, {
		key: 'login',
		value: function login(callback, data) {
			var _this = this;

			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.LANGUAGE, _ServiceMeta2.default.STORAGEKEYS.USERDATA, _ServiceMeta2.default.STORAGEKEYS.LSER], function (storage) {
				var isIgnoreFail = data && data.isIgnoreFail === true ? true : false;

				var userdata = storage[_ServiceMeta2.default.STORAGEKEYS.USERDATA];
				var lang = storage[_ServiceMeta2.default.STORAGEKEYS.LANGUAGE];
				var authcode;
				var email;
				var hpassword;

				if (data && data.userData && data.userData.authcode) {
					authcode = data.userData.authcode;
				}

				if (data && data.userData && data.userData.email && data.userData.password) {
					email = data.userData.email;
					hpassword = data.userData.password;
				}

				if (!authcode && (!email || !hpassword)) {
					return callback({
						retcode: -4
					});
				}

				_this.getOS().then(function (os) {
					var parameter = Object.assign({
						lang: lang,
						os: os
					}, _this.metaData());

					if (authcode) {
						parameter["authcode"] = authcode.toLowerCase();
					} else {
						parameter["login"] = email.toLowerCase();
						parameter["hpassword"] = hpassword.toLowerCase();
					}

					_this.request(_endpoints2.default.LOGINAUTHCODE, 'POST', parameter, function (response) {
						if (_Utils2.default.isResponse200(response) && response.config) {
							var _dataToUpdate;

							var soft = _Utils2.default.isObject(response.config.config_intervals) ? response.config.config_intervals.soft : false;
							var hard = _Utils2.default.isObject(response.config.config_intervals) ? response.config.config_intervals.hard : false;
							var configDataTTL = _Utils2.default.getConfigTTL(soft, 5);
							var configHardTTL = _Utils2.default.getConfigTTL(hard, 60);

							var userdata = {};

							if (email && hpassword) {
								userdata.authcode = response.config.authcode;
							}

							if (authcode) {
								userdata.authcode = parameter["authcode"];
							}

							if (response.config.uid) userdata.uid = response.config.uid;

							var dataToUpdate = (_dataToUpdate = {}, _defineProperty(_dataToUpdate, _ServiceMeta2.default.STORAGEKEYS.USERDATA, userdata), _defineProperty(_dataToUpdate, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA, response.config), _defineProperty(_dataToUpdate, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATATTL, configDataTTL), _defineProperty(_dataToUpdate, _ServiceMeta2.default.STORAGEKEYS.CONFIGHARDTTL, configHardTTL), _defineProperty(_dataToUpdate, _ServiceMeta2.default.STORAGEKEYS.LOGINTYPE, data.loginType), _dataToUpdate);

							//Update IPLookupURL
							if (response.config.ipcheck_url) dataToUpdate[_ServiceMeta2.default.STORAGEKEYS.IPLOOKUPURL] = response.config.ipcheck_url;

							chrome.storage.local.set(dataToUpdate, function () {
								return callback(response);
							});
						} else {

							if (!isIgnoreFail) _TokenWatcher2.default.closeAllCallbacks();

							if (_Utils2.default.isResponseAuthError(response) || _Utils2.default.isResponseMinusOne(response) || _Utils2.default.isMaintenanceMode(response) || _Utils2.default.isResponseMinus20(response)) {
								if (callback) callback(response);
								return;
							} else {

								if (!isIgnoreFail) {
									chrome.storage.local.get(function (storage) {
										var Baselink = storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK];
										_this.findNewBase(Baselink);
									});
								}
							}

							return callback(response);
						}
					}, isIgnoreFail, true);
				});
			});
		}
		// Responses: 200, -20, -1, -500

	}, {
		key: 'createAuthcode',
		value: function createAuthcode(callback) {
			var _this = this;

			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.BASELINK, _ServiceMeta2.default.STORAGEKEYS.LANGUAGE, _ServiceMeta2.default.STORAGEKEYS.LOCALE], function (storage) {
				var baselink = storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK];
				var language = storage[_ServiceMeta2.default.STORAGEKEYS.LANGUAGE];

				if (!baselink) {
					if (callback) callback(false);
					return;
				}

				_this.getOS().then(function (os) {
					var parameter = Object.assign({
						os: os,
						lang: language
					}, _this.metaData());

					_this.request(_endpoints2.default.CREATEAUTHCODE, 'POST', parameter, function (response) {
						if (_Utils2.default.isResponse200(response) && response.hasOwnProperty("authcode")) {
							var userdata = {
								authcode: response.authcode
							};

							chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.USERDATA, userdata), function () {
								if (callback) callback(response);
							});
						} else {
							if (_Utils2.default.isResponse200(response) || _Utils2.default.isResponseMinus20(response) || _Utils2.default.isResponseMinusOne(response) || _Utils2.default.isMaintenanceMode(response)) {
								if (callback) callback(response);
							} else {

								chrome.storage.local.get(function (storage) {
									var Baselink = storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK];
									_this.findNewBase(Baselink);
								});
							}
						}
					}, false, true);
				});
			});
		}
	}, {
		key: 'forgotPass',
		value: function forgotPass(callback, data) {
			var _this = this;

			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.BASELINK, _ServiceMeta2.default.STORAGEKEYS.LANGUAGE], function (storage) {
				chrome.runtime.getPlatformInfo(function (platformInfo) {
					var parameter = Object.assign({
						email: data.email,
						lang: storage[_ServiceMeta2.default.STORAGEKEYS.LANGUAGE],
						os: platformInfo && platformInfo.os ? platformInfo.os : "-"
					}, _this.metaData());

					_this.request(_endpoints2.default.FORGOTPASS, 'POST', parameter, callback);
				});
			});
		}

		// Responses: 200, -1, -500, -4, -20

	}, {
		key: 'getProducts',
		value: function getProducts(callback, data) {
			var _this = this;
			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.LANGUAGE], function (storage) {
				var lang = storage[_ServiceMeta2.default.STORAGEKEYS.LANGUAGE];
				chrome.runtime.getPlatformInfo(function (platformInfo) {

					var parameter = Object.assign({
						os: platformInfo && platformInfo.os ? platformInfo.os : "-",
						lang: lang ? lang : '-'
					}, _this.metaData(), data);

					_this.request(_endpoints2.default.PRODUCTS, 'POST', parameter, function (response) {

						if (_Utils2.default.isResponse200(response)) {
							callback(response);
						} else {
							if (_Utils2.default.isResponse200(response) || _Utils2.default.isResponseMinusOne(response) || _Utils2.default.isResponseAuthError(response) || _Utils2.default.isMaintenanceMode(response) || _Utils2.default.isResponseMinus20(response)) {
								if (callback) callback(response);
							} else {

								chrome.storage.local.get(function (storage) {
									var Baselink = storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK];
									_this.findNewBase(Baselink);
								});
							}
						}
					}, false, true);
				});
			});
		}

		// Responses: 200, -1, -500, -4, -20

	}, {
		key: 'getPaymentLink',
		value: function getPaymentLink(callback, data) {
			var _this = this;

			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.BASELINK, _ServiceMeta2.default.STORAGEKEYS.LANGUAGE, _ServiceMeta2.default.STORAGEKEYS.USERDATA], function (storage) {
				chrome.runtime.getPlatformInfo(function (platformInfo) {
					var lang = storage[_ServiceMeta2.default.STORAGEKEYS.LANGUAGE];
					var userdata = storage[_ServiceMeta2.default.STORAGEKEYS.USERDATA];

					var parameter = Object.assign({
						productid: data.productid,
						authcode: data.authcode,
						os: platformInfo && platformInfo.os ? platformInfo.os : "-",
						lang: lang ? lang : '-'
					}, _this.metaData());

					var paymentEndpoint = _endpoints2.default.REST2 + data.endpoint;

					_this.request(paymentEndpoint, 'POST', parameter, function (response) {
						if (_Utils2.default.isResponse200(response)) {
							callback(response);
						} else {
							if (_Utils2.default.isResponse200(response) || _Utils2.default.isResponseMinusOne(response) || _Utils2.default.isResponseAuthError(response) || _Utils2.default.isMaintenanceMode(response) || _Utils2.default.isResponseMinus20(response)) {
								if (callback) callback(response);
							} else {

								chrome.storage.local.get(function (storage) {
									var Baselink = storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK];
									_this.findNewBase(Baselink);
								});
							}
						}
					}, false, true);
				});
			});
		}
	}, {
		key: 'changeProfile',
		value: function changeProfile(callback, data) {
			var _this = this;

			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.BASELINK, _ServiceMeta2.default.STORAGEKEYS.LANGUAGE, _ServiceMeta2.default.STORAGEKEYS.USERDATA], function (storage) {
				chrome.runtime.getPlatformInfo(function (platformInfo) {

					var userdata = storage[_ServiceMeta2.default.STORAGEKEYS.USERDATA];

					var newpassword = data.newhpassword;

					var parameter = Object.assign({
						email: storage[_ServiceMeta2.default.STORAGEKEYS.USERDATA].email,
						hpassword: storage[_ServiceMeta2.default.STORAGEKEYS.USERDATA].password,
						newhpassword: newpassword,
						uid: userdata && userdata.uid ? userdata.uid : "",
						lang: storage[_ServiceMeta2.default.STORAGEKEYS.LANGUAGE],
						os: platformInfo && platformInfo.os ? platformInfo.os : "-"
					}, _this.metaData());

					_this.request(_endpoints2.default.PROFILE, 'POST', parameter, function (response) {

						// Password has changed. We need to update local storage here if response is positive from server.
						if (newpassword && response && response.Retcode == 200) {

							var updatedUserData = {
								email: storage[_ServiceMeta2.default.STORAGEKEYS.USERDATA].email,
								password: newpassword
							};

							chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.USERDATA, updatedUserData), function () {
								return callback(response);
							});
						}

						return callback(response);
					});
				});
			});
		}
	}, {
		key: 'setNotificationState',
		value: function setNotificationState(callback, data) {
			var _this = this;

			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.BASELINK, _ServiceMeta2.default.STORAGEKEYS.LANGUAGE, _ServiceMeta2.default.STORAGEKEYS.USERDATA], function (storage) {

				chrome.runtime.getPlatformInfo(function (platformInfo) {

					var userdata = storage[_ServiceMeta2.default.STORAGEKEYS.USERDATA];

					var parameter = Object.assign({
						email: storage[_ServiceMeta2.default.STORAGEKEYS.USERDATA].email,
						hpassword: storage[_ServiceMeta2.default.STORAGEKEYS.USERDATA].password,
						uid: userdata && userdata.uid ? userdata.uid : "",
						state: data.state,
						lang: storage[_ServiceMeta2.default.STORAGEKEYS.LANGUAGE],
						os: platformInfo && platformInfo.os ? platformInfo.os : "-"
					}, _this.metaData());

					_this.request(_endpoints2.default.NOTIFICATION, 'POST', parameter, callback);
				});
			});
		}
	}, {
		key: 'getTicketToken',
		value: function getTicketToken(callback, data) {
			var _this = this;

			chrome.runtime.getPlatformInfo(function (platformInfo) {

				var parameter = Object.assign({
					data: data,
					os: platformInfo && platformInfo.os ? platformInfo.os : "-"
				}, _this.metaData());

				_this.request(_endpoints2.default.TICKETTOKEN, 'POST', parameter, callback);
			});
		}
	}, {
		key: 'resendActivationLink',
		value: function resendActivationLink(callback, data) {
			var _this = this;

			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.LASTRESENDACTIVATION, _ServiceMeta2.default.STORAGEKEYS.BASELINK], function (storage) {
				var lastResendActivation = storage[_ServiceMeta2.default.STORAGEKEYS.LASTRESENDACTIVATION];
				var isTimeout = lastResendActivation && lastResendActivation + 300 > _Utils2.default.getDateNow() ? true : false;

				if (!isTimeout) {
					chrome.runtime.getPlatformInfo(function (platformInfo) {
						var parameter = Object.assign({
							email: data.email,
							hpassword: data.password,
							os: platformInfo && platformInfo.os ? platformInfo.os : "-"
						}, _this.metaData());

						_this.request(_endpoints2.default.RESENDACTIVATION, 'POST', parameter, function (response) {
							chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.LASTRESENDACTIVATION, _Utils2.default.getDateNow()), function () {
								callback(response);
							});
						});
					});
				} else {
					callback({ isTimeout: true });
				}
			});
		}
	}, {
		key: 'getTier',
		value: function getTier(callback) {
			var _this = this;

			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.SERVERSJSON, _ServiceMeta2.default.STORAGEKEYS.BASELINK, _ServiceMeta2.default.STORAGEKEYS.TIERNEXTUPDATE], function (storage) {
				var baselink = storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK];
				var storageServersJson = storage[_ServiceMeta2.default.STORAGEKEYS.SERVERSJSON];
				var tierNextUpdate = storage[_ServiceMeta2.default.STORAGEKEYS.TIERNEXTUPDATE] ? storage[_ServiceMeta2.default.STORAGEKEYS.TIERNEXTUPDATE] : 0;
				if (!baselink) {

					if (callback) callback(false);
					return;
				}

				if (tierNextUpdate < _Utils2.default.getDateNow()) {
					_this.getOS().then(function (os) {
						var parameter = Object.assign({
							os: os
						}, _this.metaData());

						_this.request(_endpoints2.default.TIER, 'POST', parameter, function (response) {
							var intervalInSeconds = _ServiceMeta2.default.TIERUPDATETTL;
							if (response && response != "" && response.retcode === 200 && response.data && response.data.hasOwnProperty("mainbase") && Array.isArray(response.data.mainbase) && response.data.mainbase.length > 2 && response.data.hasOwnProperty("tierbase") && Array.isArray(response.data.tierbase) && response.data.tierbase.length > 2) {
								var _chrome$storage$local7;

								if (response.hasOwnProperty("update_interval_hours") && Number.isInteger(response["update_interval_hours"]) && response["update_interval_hours"] > 1 && response["update_interval_hours"] < 168) {
									intervalInSeconds = response["update_interval_hours"] * 60 * 60;
								}
								var nextUpdate = _Utils2.default.getDateNow() + intervalInSeconds;
								response.data.mainbase.push('https://' + _ServiceMeta2.default.BACKUPBASEDOMAIN);
								chrome.storage.local.set((_chrome$storage$local7 = {}, _defineProperty(_chrome$storage$local7, _ServiceMeta2.default.STORAGEKEYS.SERVERSJSON, response.data), _defineProperty(_chrome$storage$local7, _ServiceMeta2.default.STORAGEKEYS.TIERNEXTUPDATE, nextUpdate), _chrome$storage$local7));
								var timeOutSettings = _Utils2.default.getTimeoutSettings(response.data);
								chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.TIMEOUTSETTINGS, timeOutSettings));
							} else {
								var nextUpdate = _Utils2.default.getDateNow() + intervalInSeconds;
								chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.TIERNEXTUPDATE, nextUpdate));
							}
							if (callback) callback(response);
						}, true);
					});
				} else {
					if (callback) callback(false);
				}
			});
		}
	}, {
		key: 'getClientVersionStatus',
		value: function getClientVersionStatus(callback, data) {
			var _this = this;

			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.BASELINK, _ServiceMeta2.default.STORAGEKEYS.VERSIONSTATUSNEXTUPDATE], function (storage) {
				var baselink = storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK];
				if (!baselink) {
					if (callback) callback(false);
					return;
				}
				var statusNextTime = storage[_ServiceMeta2.default.STORAGEKEYS.VERSIONSTATUSNEXTUPDATE] ? storage[_ServiceMeta2.default.STORAGEKEYS.VERSIONSTATUSNEXTUPDATE] : 0;

				if (statusNextTime < _Utils2.default.getDateNow() || data && data.ignoreTTL === true) {
					_this.getOS().then(function (os) {
						var parameter = Object.assign({
							os: os
						}, _this.metaData());

						_this.request(_endpoints2.default.CLIENTUPDATES, 'POST', parameter, function (response) {
							var intervalInSeconds = _ServiceMeta2.default.VERSIONSTATUSTTL;

							if (response && response != "" && response.retcode === 200 && response.data && response.data.hasOwnProperty("action") && (response.data.action === "update" || response.data.action === "stop") && response.data.hasOwnProperty("curversion") && response.data.hasOwnProperty("minversion") && response.data.hasOwnProperty("sources") && Array.isArray(response.data.sources) && response.data.sources.length > 0) {
								var _chrome$storage$local10;

								if (response.hasOwnProperty("update_interval_hours") && Number.isInteger(response["update_interval_hours"]) && response["update_interval_hours"] > 6 && response["update_interval_hours"] < 720) {
									intervalInSeconds = response["update_interval_hours"] * 60 * 60;
								}

								var nextUpdate = _Utils2.default.getDateNow() + intervalInSeconds;

								chrome.storage.local.set((_chrome$storage$local10 = {}, _defineProperty(_chrome$storage$local10, _ServiceMeta2.default.STORAGEKEYS.VERSIONSTATUS, response.data), _defineProperty(_chrome$storage$local10, _ServiceMeta2.default.STORAGEKEYS.VERSIONSTATUSNEXTUPDATE, nextUpdate), _chrome$storage$local10));
							} else {
								chrome.storage.local.remove([_ServiceMeta2.default.STORAGEKEYS.VERSIONSTATUS, _ServiceMeta2.default.STORAGEKEYS.VERSIONSTATUSNEXTUPDATE], function () {
									var nextUpdate = _Utils2.default.getDateNow() + intervalInSeconds;
									chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.VERSIONSTATUSNEXTUPDATE, nextUpdate));
								});
							}
							if (callback) callback(response);
						}, true);
					});
				} else {
					if (callback) callback(false);
				}
			});
		}
	}, {
		key: 'sendFeedback',
		value: function sendFeedback(callback, data) {
			var _this = this;
			chrome.runtime.getPlatformInfo(function (platformInfo) {

				var parameter = Object.assign({
					os: platformInfo && platformInfo.os ? platformInfo.os : "-"
				}, _this.metaData(), data);

				_this.request(_endpoints2.default.FEEDBACK, 'POST', parameter, function (response) {
					callback(response);
				}, true, true);
			});
		}
	}, {
		key: 'sendDisconnect',
		value: function sendDisconnect(callback, data) {
			var _this = this;

			chrome.runtime.getPlatformInfo(function (platformInfo) {

				var parameter = Object.assign({
					os: platformInfo && platformInfo.os ? platformInfo.os : "-"
				}, _this.metaData(), data);

				_this.request(_endpoints2.default.DISCONNECTS, 'POST', parameter, function (response) {
					callback(response);
				}, true);
			});
		}
		//Responses: 200, -20, -1, -4, -500

	}, {
		key: 'closeAccount',
		value: function closeAccount(callback, data) {
			var _this = this;
			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.LANGUAGE], function (storage) {
				var lang = storage[_ServiceMeta2.default.STORAGEKEYS.LANGUAGE];
				chrome.runtime.getPlatformInfo(function (platformInfo) {

					var parameter = Object.assign({
						os: platformInfo && platformInfo.os ? platformInfo.os : "-",
						lang: lang ? lang : '-'
					}, _this.metaData(), data);

					_this.request(_endpoints2.default.CLOSEACCOUNT, 'POST', parameter, function (response) {
						if (_Utils2.default.isResponse200(response)) {
							chrome.storage.local.remove([_ServiceMeta2.default.STORAGEKEYS.USERDATA, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATATTL], function () {
								callback(response);
							});
						} else {
							if (_Utils2.default.isResponse200(response) || _Utils2.default.isResponseMinus20(response) || _Utils2.default.isResponseMinusOne(response) || _Utils2.default.isResponseAuthError(response) || _Utils2.default.isMaintenanceMode(response)) {
								if (callback) callback(response);
							} else {

								chrome.storage.local.get(function (storage) {
									var Baselink = storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK];
									_this.findNewBase(Baselink);
								});
							}
						}
					}, false, true);
				});
			});
		}
		// Responses: 200, -20, -1, -4, -500

	}, {
		key: 'getTrial',
		value: function getTrial(callback, data) {
			var _this = this;
			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.LANGUAGE], function (storage) {
				var lang = storage[_ServiceMeta2.default.STORAGEKEYS.LANGUAGE];
				chrome.runtime.getPlatformInfo(function (platformInfo) {

					var parameter = Object.assign({
						os: platformInfo && platformInfo.os ? platformInfo.os : "-",
						lang: lang ? lang : '-'
					}, _this.metaData(), data);

					_this.request(_endpoints2.default.TRIAL, 'POST', parameter, function (response) {
						if (_Utils2.default.isResponse200(response)) {
							chrome.storage.local.remove(_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA, function () {
								callback(response);
							});
						} else {
							if (_Utils2.default.isResponse200(response) || _Utils2.default.isResponseMinus20(response) || _Utils2.default.isResponseMinusOne(response) || _Utils2.default.isResponseAuthError(response) || _Utils2.default.isMaintenanceMode(response)) {
								if (callback) callback(response);
							} else {

								chrome.storage.local.get(function (storage) {
									var Baselink = storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK];
									_this.findNewBase(Baselink);
								});
							}
						}
					}, false, true);
				});
			});
		}
	}, {
		key: 'request',
		value: function request(endpoint, method, parameter, callback, ignoreFail, isApi2) {
			var _this = this;

			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.BASELINK, _ServiceMeta2.default.STORAGEKEYS.BASELINKTYPE, _ServiceMeta2.default.STORAGEKEYS.TIMEOUTSETTINGS], function (storage) {

				var isTier = storage[_ServiceMeta2.default.STORAGEKEYS.BASELINKTYPE] === "tier" ? true : false;
				var timeOutSettings = storage[_ServiceMeta2.default.STORAGEKEYS.TIMEOUTSETTINGS];
				var timeout = _constants2.default["mainbase_api_timeout"];

				if (isTier) {
					timeout = timeOutSettings && _Utils2.default.isTimeoutSettingValid(timeOutSettings["tierbase_api_timeout"]) ? timeOutSettings["tierbase_api_timeout"] : _constants2.default["tierbase_api_timeout"];
				} else {
					timeout = timeOutSettings && _Utils2.default.isTimeoutSettingValid(timeOutSettings["mainbase_api_timeout"]) ? timeOutSettings["mainbase_api_timeout"] : _constants2.default["mainbase_api_timeout"];
				}
				//todo what happens when baselink does not exists?

				var Baselink = storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK];
				var xhr = new XMLHttpRequest();

				var requestUrl = Baselink + endpoint;

				if (method == "GET") requestUrl = requestUrl + "?" + parameter;

				if (method == "POST" && parameter && !isApi2) parameter.base = Baselink;

				var secretKey = _Utils2.default.randomString(Math.round(3 + Math.random() * 61));

				xhr.open(method, requestUrl, true);
				xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
				xhr.setRequestHeader('Authorization', 'Basic ' + btoa(secretKey + ':' + _Utils2.default.randomString(Math.round(3 + Math.random() * 5))));

				xhr.timeout = timeout;

				var epost = btoa(_Utils2.default.xor_string(_Utils2.default.toqs(parameter), secretKey));

				xhr.onreadystatechange = function () {
					if (xhr.readyState == 4) {
						if (xhr.status == 200) {
							var result = "";
							try {
								var decrypted = _Utils2.default.xor_string(_Utils2.default.b64_to_utf8(xhr.responseText), secretKey);

								result = JSON.parse(decrypted);
							} catch (e) {

								result = "";
							}

							if (!ignoreFail && endpoint != _endpoints2.default.CONFIG) {
								if (result == "" || _Utils2.default.isEmpty(result) || isApi2 && !result.hasOwnProperty('retcode') || !isApi2 && !result.hasOwnProperty('Retcode')) {
									_this.findNewBase(Baselink);
								}
							}

							if (!ignoreFail && endpoint == _endpoints2.default.CONFIG && (result == "" || !result.hasOwnProperty('errorcode') || _Utils2.default.isEmpty(result))) _this.findNewBase(Baselink);

							return callback(result);
						} else {
							if (!ignoreFail) _this.findNewBase(Baselink);
							return callback(0);
						}
					}
				};

				xhr.send(epost);
			});
		}
	}, {
		key: 'findNewBase',
		value: function findNewBase(failedBaselink) {
			chrome.storage.local.get(_ServiceMeta2.default.STORAGEKEYS.BASELINK, function (storage) {

				if (storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK] != undefined && failedBaselink == storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK]) {

					//console.log("BU");
					chrome.storage.local.remove(_ServiceMeta2.default.STORAGEKEYS.BASELINK, function () {
						_BaseFinder2.default.init();
					});
				}
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

			switch (method) {
				case "getLanguage":
					this.getLanguage(this.popupCallback(port, requestId, method));
					break;
				case "getLocale":
					this.getLocale(this.popupCallback(port, requestId, method));
					break;
				case "getCountryLocale":
					this.getCountryLocale(data, this.popupCallback(port, requestId, method));
					break;
				case "login":
					this.login(this.popupCallback(port, requestId, method), data);
					break;
				case "forgotPass":
					this.forgotPass(this.popupCallback(port, requestId, method), data);
					break;
				case "contactSupport":
					this.contactSupport(this.popupCallback(port, requestId, method), data);
					break;
				case "getProducts":
					this.getProducts(this.popupCallback(port, requestId, method), data);
					break;
				case "getPaymentLink":
					this.getPaymentLink(this.popupCallback(port, requestId, method), data);
					break;
				case "changeProfile":
					this.changeProfile(this.popupCallback(port, requestId, method), data);
					break;
				case "setNotificationState":
					this.setNotificationState(this.popupCallback(port, requestId, method), data);
					break;
				case "getTicketToken":
					this.getTicketToken(this.popupCallback(port, requestId, method), data);
					break;
				case "resendActivationLink":
					this.resendActivationLink(this.popupCallback(port, requestId, method), data);
					break;
				case "closeAccount":
					this.closeAccount(this.popupCallback(port, requestId, method), data);
					break;
				case "getTrial":
					this.getTrial(this.popupCallback(port, requestId, method), data);
					break;
				case "getClientVersionStatus":
					this.getClientVersionStatus(this.popupCallback(port, requestId, method), data);
					break;
				case "createAuthcode":
					this.createAuthcode(this.popupCallback(port, requestId, method), data);
					break;
				default:

					this.popupCallback(port, requestId, method)("");
			}
		}
	}, {
		key: 'findBase',
		value: function findBase() {
			//todo: implement findBase();
		}
	}, {
		key: 'getOS',
		value: function getOS(platformInfo) {
			return platformInfo && platformInfo.os ? '&os=' + platformInfo.os : '';
		}
	}, {
		key: 'getUidParam',
		value: function getUidParam(userdata) {
			return userdata && userdata.uid ? "&uid=" + userdata.uid : "";
		}
	}, {
		key: 'getInstallId',
		value: function getInstallId(installid, param) {
			return installid ? "&" + param + "=" + installid : "";
		}
	}, {
		key: 'addMetaData',
		value: function addMetaData(parameter) {
			return parameter = parameter + "&cv=" + _ServiceMeta2.default.VERSION + "&platform=" + _ServiceMeta2.default.PLATFORM.toLowerCase();
		}
	}, {
		key: 'getOS',
		value: function getOS() {
			return new Promise(function (resolve) {
				try {
					if (chrome && chrome.runtime && _Utils2.default.isFunction(chrome.runtime.getPlatformInfo)) {
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
		key: 'metaData',
		value: function metaData() {
			return {
				cv: _ServiceMeta2.default.VERSION,
				platform: _ServiceMeta2.default.PLATFORM.toLowerCase(),
				brand: _ServiceMeta2.default.SHORTNAME.toLowerCase()
			};
		}
	}]);

	return Api;
}();

exports.default = new Api();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _Utils = __webpack_require__(1);

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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable node/no-deprecated-api */
var buffer = __webpack_require__(30)
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _Api = __webpack_require__(2);

var _Api2 = _interopRequireDefault(_Api);

var _Proxy = __webpack_require__(11);

var _Proxy2 = _interopRequireDefault(_Proxy);

var _Extension = __webpack_require__(3);

var _Extension2 = _interopRequireDefault(_Extension);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TokenWatcher = function () {
	function TokenWatcher() {
		_classCallCheck(this, TokenWatcher);

		var _this = this;
		this.init();

		_this.onBeforeSendHeaders = this.onBeforeSendHeaders.bind(this);

		_this.onPermissionChange = this.onPermissionChange.bind(this);

		_Extension2.default.subscribePermissionChange(_this.onPermissionChange);
		_Extension2.default.isPermissionValid().then(function (isValid) {
			if (isValid) _this.registerListeners();
		});
	}

	_createClass(TokenWatcher, [{
		key: 'onPermissionChange',
		value: function onPermissionChange(isValid) {
			var _this = this;

			if (isValid) {
				_this.registerListeners();
			} else {
				_this.removeListeners();
			}
		}
	}, {
		key: 'registerListeners',
		value: function registerListeners() {
			var _this = this;

			if (!chrome.webRequest.onBeforeSendHeaders.hasListener(_this.onBeforeSendHeaders)) {
				chrome.webRequest.onBeforeSendHeaders.addListener(_this.onBeforeSendHeaders, { urls: ["<all_urls>"] });
			}
		}
	}, {
		key: 'removeListeners',
		value: function removeListeners() {
			var _this = this;
			chrome.webRequest.onBeforeSendHeaders.removeListener(_this.onBeforeSendHeaders);
		}
	}, {
		key: 'init',
		value: function init() {
			var _this = this;

			this.pendingRequest = [];
			this.currentRequest = {};
			this.running = false;
			this.cacheUsed = false;
			this.identifyRunning = false;
			this.identifyId = 0;
			this.identifyLink = "";
			this.nextEnteringKill = false;
		}

		/* Actions */

	}, {
		key: 'startIdentifyRequest',
		value: function startIdentifyRequest() {
			var _this = this;

			chrome.storage.local.get([], function (storage) {

				var verifyLink = "http://" + _Utils2.default.generateIdentifierDomain() + "/";

				var xhr = new XMLHttpRequest();
				xhr.open('GET', verifyLink, true);

				xhr.timeout = 10000;

				xhr.onreadystatechange = function () {

					// If the request completed
					if (xhr.readyState == 4) {
						var result = xhr.responseText;

						//console.log(result);
						if (result.indexOf(verifyLink) != -1 && result.indexOf("ERR_DNS_FAIL") != -1) {

							_this.tokenSuccess();
						} else {
							_this.closeAllCallbacks();

							//showDisabledNotification(storage.locale.NotifyVPNDisconnectTitle, storage.locale.NotifyVPNDisconnectMsg);
						}
					}
				};

				// Send the request and set status
				_this.identifyLink = verifyLink;
				_this.identifyRunning = true;
				xhr.send();
			});
		}
	}, {
		key: 'useCache',
		value: function useCache(resolve) {
			var _this = this;

			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.USERDATA, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA], function (storage) {

				_this.setCacheUsed(true);

				resolve({
					authCredentials: {
						username: storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA].p_login ? storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA].p_login : '',
						password: storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA].p_token ? storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA].p_token : ''
					}

				});
			});
		}
	}, {
		key: 'freshToken',
		value: function freshToken(resolve) {
			var _this = this;

			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.USERDATA], function (storage) {

				var loginData = {
					hitReason: "getToken",
					userData: storage[_ServiceMeta2.default.STORAGEKEYS.USERDATA]
				};

				_Api2.default.login(function (response) {

					if (_Utils2.default.isResponse200(response)) {

						resolve({
							authCredentials: {
								username: response.config.p_login ? response.config.p_login : '',
								password: response.config.p_token ? response.config.p_token : ''
							}

						});
					} else {

						if (_Utils2.default.isResponseMinus20(response)) {
							chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.LASTLOGOUTREASON, response.message), function () {
								chrome.storage.local.remove([_ServiceMeta2.default.STORAGEKEYS.USERDATA, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATATTL, _ServiceMeta2.default.STORAGEKEYS.CONFIGHARDTTL], function () {
									resolve({ cancel: true });
									_this.closeAllCallbacks();
								});
							});
						} else {
							resolve({ cancel: true });
							_this.closeAllCallbacks();
						}
					}
				}, loginData);
			});
		}
	}, {
		key: 'tokenSuccess',
		value: function tokenSuccess() {
			var _this = this;

			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.USERDATA, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA], function (storage) {

				for (var i = 0; i < _this.pendingRequest.length; i++) {
					_this.pendingRequest[i]({
						authCredentials: {
							username: storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA].p_login ? storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA].p_login : '',
							password: storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA].p_token ? storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA].p_token : ''
						}
					});
				};

				_this.init();
			});
		}
	}, {
		key: 'closeAllCallbacks',
		value: function closeAllCallbacks() {
			var _this = this;

			//ProxySetting.clearProxySetting();

			for (var i = 0; i < _this.pendingRequest.length; i++) {
				_this.pendingRequest[i]({ cancel: true });
			};

			_this.init();

			_Proxy2.default.unset().then(function (unsetOptions) {

				chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.ISPROXYON, _ServiceMeta2.default.STORAGEKEYS.LOCALE], function (storage) {
					var _proxyDefaultSettings;

					if (storage[_ServiceMeta2.default.STORAGEKEYS.ISPROXYON] && storage[_ServiceMeta2.default.STORAGEKEYS.LOCALE]) _Utils2.default.showConnectionNotification(storage[_ServiceMeta2.default.STORAGEKEYS.LOCALE].NotifyVPNDisconnectTitle, storage[_ServiceMeta2.default.STORAGEKEYS.LOCALE].NotifyVPNDisconnectMsg);

					var proxyDefaultSettings = (_proxyDefaultSettings = {}, _defineProperty(_proxyDefaultSettings, _ServiceMeta2.default.STORAGEKEYS.ISPROXYON, false), _defineProperty(_proxyDefaultSettings, _ServiceMeta2.default.STORAGEKEYS.CURRENTPROXY, false), _proxyDefaultSettings);

					chrome.storage.local.set(proxyDefaultSettings);
				});
			});

			//proxy.setIconOff();
			//proxy.clearProxySetting();
		}
	}, {
		key: 'clearTokenWatcher',
		value: function clearTokenWatcher() {

			var _this = this;
			if (_this.pendingRequest.length > 0) {
				for (var i = 0; i < _this.pendingRequest.length; i++) {
					_this.pendingRequest[i]({ cancel: true });
				};
				_this.init();
			}
		}

		/* Setter and Getter */

	}, {
		key: 'setIdentifyId',
		value: function setIdentifyId(id) {
			var _this = this;

			_this.identifyId = id;
		}
	}, {
		key: 'setCurrentRequest',
		value: function setCurrentRequest(request) {
			var _this = this;

			_this.currentRequest = request;
		}
	}, {
		key: 'setRunning',
		value: function setRunning() {
			var _this = this;
			_this.running = true;
		}
	}, {
		key: 'setPendingRequest',
		value: function setPendingRequest(request) {
			var _this = this;

			_this.pendingRequest.push(request);
		}
	}, {
		key: 'setNextEnteringKill',
		value: function setNextEnteringKill(v) {
			var _this = this;
			_this.nextEnteringKill = v;
		}
	}, {
		key: 'setCacheUsed',
		value: function setCacheUsed(v) {
			var _this = this;

			_this.cacheUsed = v;
		}
	}, {
		key: 'getNextEnteringKill',
		value: function getNextEnteringKill() {
			var _this = this;

			return _this.nextEnteringKill;
		}
	}, {
		key: 'getIdentifyId',
		value: function getIdentifyId() {
			var _this = this;

			return _this.identifyId;
		}
	}, {
		key: 'getIdentifyLink',
		value: function getIdentifyLink() {
			var _this = this;

			return _this.identifyLink;
		}
	}, {
		key: 'getCurrentRequest',
		value: function getCurrentRequest() {
			var _this = this;

			return _this.currentRequest;
		}
	}, {
		key: 'isRunning',
		value: function isRunning() {
			var _this = this;
			return _this.running;
		}
	}, {
		key: 'isIdentifyRunning',
		value: function isIdentifyRunning() {
			var _this = this;

			return _this.identifyRunning;
		}
	}, {
		key: 'isCachedUsed',
		value: function isCachedUsed() {
			var _this = this;
			return _this.cacheUsed;
		}

		/* Events */

	}, {
		key: 'onBeforeSendHeaders',
		value: function onBeforeSendHeaders(details) {
			var _this = this;

			if (_this.isRunning() && details.url.indexOf(_this.getIdentifyLink()) != -1 && _this.isIdentifyRunning()) {

				_this.setIdentifyId(details.requestId);
			}
		}
	}]);

	return TokenWatcher;
}();

exports.default = new TokenWatcher();

/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(4).Buffer

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
/* 8 */
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
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TokenWatcher = __webpack_require__(5);

var _TokenWatcher2 = _interopRequireDefault(_TokenWatcher);

var _Proxy = __webpack_require__(11);

var _Proxy2 = _interopRequireDefault(_Proxy);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

var _ConnectionWatcher = __webpack_require__(38);

var _ConnectionWatcher2 = _interopRequireDefault(_ConnectionWatcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProxySetting = function () {
	function ProxySetting() {
		_classCallCheck(this, ProxySetting);

		chrome.storage.onChanged.addListener(this.onSettingsChanged.bind(this));

		this.clearSettings();
	}

	_createClass(ProxySetting, [{
		key: 'clearSettings',
		value: function clearSettings(callback) {

			_ConnectionWatcher2.default.stopSession();

			_TokenWatcher2.default.clearTokenWatcher();

			_Proxy2.default.unset().then(function () {

				chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.ISPROXYON, _ServiceMeta2.default.STORAGEKEYS.LOCALE], function (storage) {
					var _proxyDefaultSettings;

					if (storage[_ServiceMeta2.default.STORAGEKEYS.ISPROXYON] && storage[_ServiceMeta2.default.STORAGEKEYS.LOCALE]) _Utils2.default.showConnectionNotification(storage[_ServiceMeta2.default.STORAGEKEYS.LOCALE].NotifyVPNDisconnectTitle, storage[_ServiceMeta2.default.STORAGEKEYS.LOCALE].NotifyVPNDisconnectMsg);

					var proxyDefaultSettings = (_proxyDefaultSettings = {}, _defineProperty(_proxyDefaultSettings, _ServiceMeta2.default.STORAGEKEYS.ISPROXYON, false), _defineProperty(_proxyDefaultSettings, _ServiceMeta2.default.STORAGEKEYS.CURRENTPROXY, false), _proxyDefaultSettings);

					chrome.storage.local.set(proxyDefaultSettings, function () {
						if (callback) callback();
					});
				});
			});
		}
	}, {
		key: 'onSettingsChanged',
		value: function onSettingsChanged(changes, namespace) {
			var _this = this;

			var changedItems = Object.keys(changes);

			if (changedItems.indexOf(_ServiceMeta2.default.STORAGEKEYS.ISPROXYON) === -1) return;

			var isProxyOn = changes[_ServiceMeta2.default.STORAGEKEYS.ISPROXYON].newValue;

			_Utils2.default.setProxyStatusIcon(isProxyOn);

			if (isProxyOn) {
				_ConnectionWatcher2.default.startSession();
			} else {
				_ConnectionWatcher2.default.stopSession();
			}
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

			switch (method) {
				case "clearSettings":
					this.clearSettings(this.popupCallback(port, requestId, method));
					break;
				default:

					this.popupCallback(port, requestId, method)("");
			}
		}
	}]);

	return ProxySetting;
}();

exports.default = new ProxySetting();

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _ProxyApi = __webpack_require__(26);

var _ProxyApi2 = _interopRequireDefault(_ProxyApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Proxy = function () {
	function Proxy() {
		_classCallCheck(this, Proxy);
	}

	_createClass(Proxy, [{
		key: 'set',
		value: function set(config) {
			var _this = this;

			return new Promise(function (resolve, reject) {
				_ProxyApi2.default.set(config).then(function (config) {
					resolve(config);
				});
			});
		}
	}, {
		key: 'setTest',
		value: function setTest(config) {
			var _this = this;

			return new Promise(function (resolve, reject) {
				_ProxyApi2.default.setTest(config).then(function (config) {
					resolve(config);
				});
			});
		}
	}, {
		key: 'unset',
		value: function unset() {
			var _this = this;

			return new Promise(function (resolve, reject) {
				_ProxyApi2.default.unset().then(function () {
					resolve();
				});
			});
		}
	}]);

	return Proxy;
}();

exports.default = new Proxy();

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Interval = function () {
	function Interval(func, interval) {
		_classCallCheck(this, Interval);

		this.timer = false;
		this.func = func;
		this.interval = interval;
	}

	_createClass(Interval, [{
		key: 'start',
		value: function start() {
			var _this = this;

			if (!this.isRunning()) this.timer = setInterval(_this.func, _this.interval);
		}
	}, {
		key: 'stop',
		value: function stop() {

			clearInterval(this.timer);
			this.timer = false;
		}
	}, {
		key: 'isRunning',
		value: function isRunning() {

			return this.timer !== false;
		}
	}]);

	return Interval;
}();

exports.default = Interval;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Globals = function () {
  function Globals() {
    _classCallCheck(this, Globals);

    this.values = {};
  }

  _createClass(Globals, [{
    key: 'set',
    value: function set(key, value) {
      this.values[key] = value;
    }
  }, {
    key: 'get',
    value: function get(key) {
      return this.values.hasOwnProperty(key) ? this.values[key] : false;
    }
  }]);

  return Globals;
}();

exports.default = new Globals();

/***/ }),
/* 14 */
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

var _Ping = __webpack_require__(25);

var _Ping2 = _interopRequireDefault(_Ping);

var _Api = __webpack_require__(2);

var _Api2 = _interopRequireDefault(_Api);

var _constants = __webpack_require__(9);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseFinder = function () {
	function BaseFinder() {
		_classCallCheck(this, BaseFinder);

		chrome.runtime.onInstalled.addListener(this.onInstalled.bind(this));

		this.fallbackLink = _ServiceMeta2.default.FALLBACKLINK;

		this.running = 0;
		this.worker = [];
		this.currentFound = "";
		this.lastFound = "";
		this.serversJson = false;

		this.countOfMain = 0;
		this.mainBaseResults = [];

		this.abortFlag = false;

		this.turn = 0;
		this.currentTier = false;

		this.searchPort = false;

		if (!this.searchPort) this.connectPort();
	}

	_createClass(BaseFinder, [{
		key: 'init',
		value: function init() {
			var _this = this;

			/*
   		if(!this.serversJson)
   			return this.loadJsonFile().then(_this.checkStorageForBaselink.bind(this));
   */
			_this.getStorageServersJson().then(_this.validateStorageServersJson.bind(this)).then(function (serversJson) {
				_this.serversJson = serversJson;
				_this.checkStorageForBaselink();
			});

			//		_this.checkStorageForBaselink();
		}
	}, {
		key: 'validateStorageServersJson',
		value: function validateStorageServersJson(storageServersJson) {
			var _this = this;
			if (storageServersJson) {

				return storageServersJson;
			} else {
				//Api.getTier();

				return _this.loadJsonFile();
			}
		}
	}, {
		key: 'getStorageServersJson',
		value: function getStorageServersJson() {
			return new Promise(function (resolve, reject) {
				chrome.storage.local.get(_ServiceMeta2.default.STORAGEKEYS.SERVERSJSON, function (storage) {
					if (storage && storage[_ServiceMeta2.default.STORAGEKEYS.SERVERSJSON]) {
						resolve(storage[_ServiceMeta2.default.STORAGEKEYS.SERVERSJSON]);
					} else {
						resolve(false);
					}
				});
			});
		}
	}, {
		key: 'checkStorageForBaselink',
		value: function checkStorageForBaselink() {
			var _this = this;
			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.BASELINK, _ServiceMeta2.default.STORAGEKEYS.LASTBASELINK, _ServiceMeta2.default.STORAGEKEYS.BASELINKNOTFOUND, _ServiceMeta2.default.STORAGEKEYS.DEBUGVAL], function (storage) {

				if (_this.isSecondRunning) {
					_this.onProgress(_this);
					return 0;
				}

				if (storage[_ServiceMeta2.default.STORAGEKEYS.BASELINKNOTFOUND]) {
					if (_this.searchPort) _this.searchPort.postMessage({ action: 'failed' });
					return 0;
				}

				if (storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK] && storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK] != "") {
					_this.lastFound = storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK];
				}

				_this.currentFound = storage[_ServiceMeta2.default.STORAGEKEYS.LASTBASELINK];

				if (_this.worker.length == 0) {
					var debugVal = storage[_ServiceMeta2.default.STORAGEKEYS.DEBUGVAL];
					if (debugVal && (debugVal.action == "tier" || debugVal.action == "main")) {
						chrome.storage.local.remove(_ServiceMeta2.default.STORAGEKEYS.DEBUGVAL, function () {
							if (debugVal.action == "tier") {
								_this.startTierSearch();
							} else {
								_this.startMainSearch();
							}
						});
						return;
					}
					_this.startMainSearch();
				}
			});
		}
	}, {
		key: 'connectPort',
		value: function connectPort() {
			chrome.runtime.onConnect.addListener(this.onConnect.bind(this));
		}
	}, {
		key: 'onConnect',
		value: function onConnect(port) {
			if (port.name == "basesearch-port") {
				this.searchPort = port;
				this.searchPort.onMessage.addListener(this.onMessage.bind(this));
				this.searchPort.onDisconnect.addListener(this.onDisconnect.bind(this));
			}
		}
	}, {
		key: 'onMessage',
		value: function onMessage() {}
	}, {
		key: 'onDisconnect',
		value: function onDisconnect() {
			this.searchPort = false;
		}
	}, {
		key: 'startMainSearch',
		value: function startMainSearch() {

			var _this = this;
			var n;

			_this.abortFlag = false;

			_this.running = 0;
			_this.mainBaseResults = [];
			_this.baseLinks = _Utils2.default.shuffleArray(_this.serversJson["mainbase"]);

			var timeOutSettings = _Utils2.default.getTimeoutSettings(_this.serversJson);

			_this.isMainRunning = true;

			// First create Ping request for all main baselinks
			for (n = 0; n < _this.baseLinks.length; n++) {
				_this.worker[n] = new _Ping2.default(_this.baseLinks[n], false, timeOutSettings);
				_this.worker[n].setOnDoneEvent(_this.onMainWorkerDone.bind(_this));
			}

			_this.countOfMain = _this.worker.length;

			// Start all Ping request for all main baselinks
			for (n = 0; n < _this.worker.length; n++) {
				_this.worker[n].start();
			}
		}
	}, {
		key: 'startTierSearch',
		value: function startTierSearch() {
			var _this = this,
			    n,
			    done = false;

			_this.tierbase = _this.serversJson['tierbase'].slice();

			_this.isSecondRunning = true;

			_this.progressCurrent = 0;
			_this.progressEnd = _this.tierbase.length;

			_this.nextTierBaselink();
		}
	}, {
		key: 'nextTierBaselink',
		value: function nextTierBaselink() {
			var current = "";
			var _this = this;

			current = _this.tierbase.pop();
			var timeOutSettings = _Utils2.default.getTimeoutSettings(_this.serversJson);
			if (current != undefined) {
				_this.currentTier = new _Ping2.default(current, true, timeOutSettings);
				_this.currentTier.setOnDoneEvent(_this.onTierWorkerDone.bind(_this));

				return _this.currentTier.start();
			}

			if (_this.tierbase.length === 0) return _this.onNotFound(true);

			_this.nextTierBaselink();
		}
	}, {
		key: 'onMainWorkerDone',
		value: function onMainWorkerDone(baselink, isWorking) {

			var _this = this;
			var n;

			++_this.running;
			_this.mainBaseResults.push(isWorking);

			if (isWorking && baselink != _this.currentFound) {
				var workingURLobj = {};
				workingURLobj[_ServiceMeta2.default.STORAGEKEYS.BASELINK] = baselink;
				workingURLobj[_ServiceMeta2.default.STORAGEKEYS.BASELINKTYPE] = "main";
				workingURLobj[_ServiceMeta2.default.STORAGEKEYS.LASTBASELINK] = workingURLobj[_ServiceMeta2.default.STORAGEKEYS.BASELINK];

				chrome.storage.local.set(workingURLobj, function () {
					_this.onFound();
				});

				for (n = 0; n < _this.worker.length; n++) {
					_this.worker[n].terminate();
				}

				return _this.worker = [];
			} else {
				//  if(baselink == _this.currentFound)
				//     console.log("new found: " + baselink + " old found: " + _this.currentFound + " SKIP");
			}

			if (_this.running === _this.countOfMain) {

				_this.worker = [];
				_this.mainBaseResults.sort(function (x, y) {
					return x === y ? 0 : x ? -1 : 1;
				});
				for (var i = 0; i < _this.mainBaseResults.length; i++) {
					if (_this.mainBaseResults[i]) return;

					if (!_this.mainBaseResults[i] && !_this.isSecondRunning) _this.startTierSearch();
				};
			}
		}
	}, {
		key: 'onTierWorkerDone',
		value: function onTierWorkerDone(baselink, isWorking) {
			var _this = this;

			++_this.progressCurrent;
			_this.onProgress(_this);

			if (!isWorking) {

				if (!_this.abortFlag) {
					setTimeout(function () {
						_this.nextTierBaselink(1);
					}, 600);
				}
				return;
			}

			var workingURLobj = {};
			workingURLobj[_ServiceMeta2.default.STORAGEKEYS.BASELINK] = baselink;
			workingURLobj[_ServiceMeta2.default.STORAGEKEYS.BASELINKTYPE] = "tier";
			workingURLobj[_ServiceMeta2.default.STORAGEKEYS.LASTBASELINK] = workingURLobj[_ServiceMeta2.default.STORAGEKEYS.BASELINK];

			chrome.storage.local.set(workingURLobj, function () {
				_this.onFound(true);
			});
		}
	}, {
		key: 'abortAll',
		value: function abortAll() {
			var _this = this;

			_this.abortFlag = true;

			if (_this.currentTier) _this.currentTier.terminate();

			_this.onNotFound(true);
		}
	}, {
		key: 'onFound',
		value: function onFound(isTier) {
			var _this = this;

			// Get new tiers after a tier is baselink is found
			_Api2.default.getTier();
			_Api2.default.getClientVersionStatus();

			if (_this.searchPort) _this.searchPort.postMessage({ action: 'success' });

			if (isTier) {
				_this.isSecondRunning = false;
			}
		}
	}, {
		key: 'onNotFound',
		value: function onNotFound(isTier) {
			var _this = this;

			chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.BASELINKNOTFOUND, true));
			if (_this.searchPort) _this.searchPort.postMessage({ action: 'failed' });

			if (isTier) {
				_this.isSecondRunning = false;
			}
		}
	}, {
		key: 'onProgress',
		value: function onProgress(t) {
			var _this = t;

			var progress = "Progress " + _this.progressCurrent + " / " + _this.progressEnd;

			if (_this.searchPort && _this.isSecondRunning) _this.searchPort.postMessage({ action: "progress", data: progress });
		}
	}, {
		key: 'loadJsonFile',
		value: function loadJsonFile() {
			var _this = this;

			return new Promise(function (resolve, reject) {

				var xhr = new XMLHttpRequest();
				xhr.open("GET", _ServiceMeta2.default.SERVERSJSONFILE, true);
				xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
				xhr.onreadystatechange = function () {
					if (xhr.readyState == 4) {

						var response = xhr.responseText;
						var serversJson = false;
						try {
							serversJson = JSON.parse(response);
						} catch (e) {
							//_this.notFound();
						}

						if (serversJson) {
							chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.SERVERSJSON, serversJson));
							var timeOutSettings = _Utils2.default.getTimeoutSettings(_this.serversJson);
							chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.TIMEOUTSETTINGS, timeOutSettings));
						}

						resolve(serversJson);

						//_this.initSecond(response);
					}
				};
				xhr.send();
			});
		}
	}, {
		key: 'popupMessageHandler',
		value: function popupMessageHandler(port, requestId, method, data) {
			var _this = this;

			switch (method) {
				case "init":
					_this.init();
					port.postMessage({ response: method, requestId: requestId, data: "init" });
					break;
				case "abortAll":
					_this.abortAll();
					port.postMessage({ response: method, requestId: requestId, data: "abortAll" });
					break;
				default:

					break;
			}
		}
	}, {
		key: 'cacheBypass',
		value: function cacheBypass() {
			//todo implement cacheBypass
		}
	}, {
		key: 'isEndpointChangeVersion',
		value: function isEndpointChangeVersion(previousVersion) {
			if (previousVersion && /^(2\.|3\.[0-6]\.|3\.7\.0)/.test(previousVersion)) {
				return true;
			}

			return false;
		}
	}, {
		key: 'validateCurrentBaselink',
		value: function validateCurrentBaselink() {
			var _this = this;
			chrome.storage.local.remove(_ServiceMeta2.default.STORAGEKEYS.SERVERSJSON, function () {
				chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.BASELINK], function (storage) {
					var baselink = storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK];
					if (!baselink) return;

					_this.loadJsonFile().then(function (serversJson) {

						if (serversJson["mainbase"].indexOf(baselink) === -1 && serversJson["tierbase"].indexOf(baselink) === -1) {
							chrome.storage.local.remove(_ServiceMeta2.default.STORAGEKEYS.BASELINK, function () {
								_this.init();
							});
						}
					});
				});
			});
		}
	}, {
		key: 'onInstalled',
		value: function onInstalled(details) {
			var _this = this;

			if (details && details.reason && details.reason == 'update') {
				if (_this.isEndpointChangeVersion(details.previousVersion)) {
					this.validateCurrentBaselink();
				} else {
					chrome.storage.local.remove(_ServiceMeta2.default.STORAGEKEYS.SERVERSJSON);
				}
			}
		}
	}]);

	return BaseFinder;
}();

exports.default = new BaseFinder();

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = ["localhost", "127.0.0.1", "local", "intra", "intranet", "onion"];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-256, as defined
 * in FIPS 180-2
 * Version 2.2-beta Copyright Angel Marin, Paul Johnston 2000 - 2009.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 *
 */

var inherits = __webpack_require__(6)
var Hash = __webpack_require__(7)
var Buffer = __webpack_require__(4).Buffer

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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var inherits = __webpack_require__(6)
var Hash = __webpack_require__(7)
var Buffer = __webpack_require__(4).Buffer

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
/* 19 */
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

var _TokenWatcher = __webpack_require__(5);

var _TokenWatcher2 = _interopRequireDefault(_TokenWatcher);

var _constants = __webpack_require__(9);

var _constants2 = _interopRequireDefault(_constants);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProxyIdentifier = function () {
    function ProxyIdentifier() {
        _classCallCheck(this, ProxyIdentifier);

        this.init();
    }

    _createClass(ProxyIdentifier, [{
        key: 'init',
        value: function init() {
            var _this = this;

            var identifierDomain = _Utils2.default.generateIdentifierDomain();
            _this.identifierLink = "http://" + identifierDomain;
            _this.isRunning = false;
            _this.current = "";
            _this.xhr = undefined;
            _this.aborted = false;
        }
    }, {
        key: 'identify',
        value: function identify(identifierLink, callback) {
            var _this = this;

            chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA, _ServiceMeta2.default.STORAGEKEYS.TIMEOUTSETTINGS], function (storage) {
                var timeOutSettings = storage[_ServiceMeta2.default.STORAGEKEYS.TIMEOUTSETTINGS];
                var config = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA];
                var searchTimeout = timeOutSettings && _Utils2.default.isTimeoutSettingValid(timeOutSettings["proxy_search_timeout"]) ? timeOutSettings["proxy_search_timeout"] : _constants2.default["proxy_search_timeout"];

                if (_this.xhr !== undefined) {

                    _this.xhr.abort();
                }

                _this.init();

                _this.identifierLink = identifierLink;

                _this.xhr = new XMLHttpRequest();
                _this.xhr.open('GET', _this.identifierLink, true);

                _this.xhr.timeout = searchTimeout;

                _this.xhr.onreadystatechange = function () {

                    // If the request completed
                    if (_this.xhr.readyState == 4) {
                        var result = _this.xhr.responseText;
                        //console.log(result);


                        if (result && result.indexOf(_this.identifierLink) != -1 && result.indexOf("ERR_DNS_FAIL") != -1) {
                            _TokenWatcher2.default.tokenSuccess();
                            callback(true);
                        } else {
                            callback(false);
                        }
                    }
                };
                // Send the request and set status
                _this.xhr.send();
            });
        }
    }, {
        key: 'abort',
        value: function abort() {
            var _this = this;

            if (_this.xhr != undefined) _this.xhr.abort();
        }

        /* Getter and Setter */

    }, {
        key: 'getIdentifierLink',
        value: function getIdentifierLink() {
            var _this = this;

            return _this.identifierLink;
        }
    }]);

    return ProxyIdentifier;
}();

exports.default = new ProxyIdentifier();

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Globals = __webpack_require__(13);

var _Globals2 = _interopRequireDefault(_Globals);

var _BackgroundHandler = __webpack_require__(22);

var _BackgroundHandler2 = _interopRequireDefault(_BackgroundHandler);

var _BaseFinder = __webpack_require__(15);

var _BaseFinder2 = _interopRequireDefault(_BaseFinder);

var _ProxyFinder = __webpack_require__(46);

var _ProxyFinder2 = _interopRequireDefault(_ProxyFinder);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _Proxy = __webpack_require__(11);

var _Proxy2 = _interopRequireDefault(_Proxy);

var _ProxyAuth = __webpack_require__(48);

var _ProxyAuth2 = _interopRequireDefault(_ProxyAuth);

var _TokenWatcher = __webpack_require__(5);

var _TokenWatcher2 = _interopRequireDefault(_TokenWatcher);

var _AutoProxy = __webpack_require__(49);

var _AutoProxy2 = _interopRequireDefault(_AutoProxy);

var _Extension = __webpack_require__(3);

var _Extension2 = _interopRequireDefault(_Extension);

var _TierUpdater = __webpack_require__(51);

var _TierUpdater2 = _interopRequireDefault(_TierUpdater);

var _ClientVersionStatus = __webpack_require__(52);

var _ClientVersionStatus2 = _interopRequireDefault(_ClientVersionStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Api = __webpack_require__(2);

var _Api2 = _interopRequireDefault(_Api);

var _BaseFinder = __webpack_require__(15);

var _BaseFinder2 = _interopRequireDefault(_BaseFinder);

var _ProxySetting = __webpack_require__(10);

var _ProxySetting2 = _interopRequireDefault(_ProxySetting);

var _Notification = __webpack_require__(40);

var _Notification2 = _interopRequireDefault(_Notification);

var _Management = __webpack_require__(19);

var _Management2 = _interopRequireDefault(_Management);

var _Bypasslist = __webpack_require__(41);

var _Bypasslist2 = _interopRequireDefault(_Bypasslist);

var _PermissionController = __webpack_require__(43);

var _PermissionController2 = _interopRequireDefault(_PermissionController);

var _ConfigUpdater = __webpack_require__(44);

var _ConfigUpdater2 = _interopRequireDefault(_ConfigUpdater);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BackgroundHandler = function () {
    function BackgroundHandler() {
        _classCallCheck(this, BackgroundHandler);

        this.port = null;
        chrome.runtime.onConnect.addListener(this.onConnect.bind(this));
    }

    _createClass(BackgroundHandler, [{
        key: 'onConnect',
        value: function onConnect(port) {

            if (port.name == "background-page-port") {
                this.port = port;
                this.port.onMessage.addListener(this.onMessage.bind(this));
            }
        }
    }, {
        key: 'onMessage',
        value: function onMessage(message) {
            switch (message.request) {
                case "api":
                    _Api2.default.popupMessageHandler(this.port, message.requestId, message.method, message.data);

                    break;
                case "baseFinder":
                    _BaseFinder2.default.popupMessageHandler(this.port, message.requestId, message.method, message.data);
                    break;
                case "ProxySetting":
                    _ProxySetting2.default.popupMessageHandler(this.port, message.requestId, message.method, message.data);
                    break;
                case "Notification":
                    _Notification2.default.popupMessageHandler(this.port, message.requestId, message.method, message.data);
                    break;
                case "Management":
                    _Management2.default.popupMessageHandler(this.port, message.requestId, message.method, message.data);
                    break;
                case "Bypasslist":
                    _Bypasslist2.default.popupMessageHandler(this.port, message.requestId, message.method, message.data);
                    break;
                case "PermissionController":
                    _PermissionController2.default.popupMessageHandler(this.port, message.requestId, message.method, message.data, message.request, message.isEvent);
                    break;
                case "ConfigUpdater":
                    _ConfigUpdater2.default.popupMessageHandler(this.port, message.requestId, message.method, message.data, message.request, message.isEvent);
                    break;
                default:

            }
        }
    }]);

    return BackgroundHandler;
}();

exports.default = new BackgroundHandler();

/***/ }),
/* 23 */
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
/* 24 */
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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(9);

var _constants2 = _interopRequireDefault(_constants);

var _endpoints = __webpack_require__(8);

var _endpoints2 = _interopRequireDefault(_endpoints);

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ping = function () {
	function Ping(baselink, isTier, timeOutSettings) {
		_classCallCheck(this, Ping);

		this.baselink = baselink;
		this.pingLink = this.baselink + _endpoints2.default.PING;
		this.secretKey = _Utils2.default.randomString(Math.round(3 + Math.random() * 61));

		this.parameter = btoa(_Utils2.default.xor_string(_Utils2.default.toqs(""), this.secretKey));

		this.xhr = new XMLHttpRequest();
		this.xhr.open("POST", this.pingLink, true);

		this.xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		this.xhr.setRequestHeader('Authorization', 'Basic ' + btoa(this.secretKey + ':' + _Utils2.default.randomString(Math.round(3 + Math.random() * 5))));

		this.xhr.timeout = isTier ? timeOutSettings["tierbase_search_timeout"] : timeOutSettings["mainbase_search_timeout"];
		this.xhr.ontimeout = this.onTimeout.bind(this);
		this.xhr.onreadystatechange = this.onXHRStateChanged.bind(this);

		this.start = this.start.bind(this);
	}

	/* */

	_createClass(Ping, [{
		key: 'setOnDoneEvent',
		value: function setOnDoneEvent(eventFunc) {
			this.onDoneEvent = eventFunc;
		}
	}, {
		key: 'onDone',
		value: function onDone(baselink, isSuccess) {
			if (this.onDoneEvent) this.onDoneEvent(baselink, isSuccess);
		}

		/* Events */

	}, {
		key: 'onTimeout',
		value: function onTimeout() {}
	}, {
		key: 'onXHRStateChanged',
		value: function onXHRStateChanged() {
			var _this = this;
			if (_this.xhr.readyState == 4) {

				if (_this.xhr.status != 200) return _this.onDone(_this.baselink, false);

				var result = "";
				try {
					var decrypted = _Utils2.default.xor_string(atob(_this.xhr.responseText), _this.secretKey);
					result = JSON.parse(decrypted);

					if (result && result.retcode === 200) return _this.onDone(_this.baselink, true);

					return _this.onDone(_this.baselink, false);
				} catch (e) {
					return _this.onDone(_this.baselink, false);
				}
			}
		}
	}, {
		key: 'startSync',
		value: function startSync() {
			var _this = this;
			return new Promise(function (resolve, reject) {
				_this.setOnDoneEvent(resolve);
				_this.xhr.send(_this.parameter);
			});
		}
	}, {
		key: 'start',
		value: function start() {
			var _this2 = this;

			var _this = this;
			if (!this.xhr) return;
			_Utils2.default.getOS().then(function (os) {
				var parameter = {
					cv: _ServiceMeta2.default.VERSION,
					platform: _ServiceMeta2.default.PLATFORM.toLowerCase(),
					brand: _ServiceMeta2.default.SHORTNAME.toLowerCase(),
					os: os
				};

				var epost = btoa(_Utils2.default.xor_string(_Utils2.default.toqs(parameter), _this.secretKey));
				_this2.xhr.send(epost);
			});
		}
	}, {
		key: 'terminate',
		value: function terminate() {

			if (!this.xhr) return;

			this.xhr.abort();
		}
	}]);

	return Ping;
}();

exports.default = Ping;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Globals = __webpack_require__(13);

var _Globals2 = _interopRequireDefault(_Globals);

var _bypasslist = __webpack_require__(27);

var _bypasslist2 = _interopRequireDefault(_bypasslist);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* ProxyApi for Chrome */

var ProxyApi = function () {
	function ProxyApi() {
		_classCallCheck(this, ProxyApi);

		chrome.proxy.settings.onChange.addListener(this.onProxySettingChanged.bind(this));
	}

	_createClass(ProxyApi, [{
		key: 'set',
		value: function set(config) {
			var _this = this;

			return new Promise(function (resolve, reject) {
				_this.getRulesForFixedServer(config).then(function (rulesObj) {

					var configData = {
						mode: "fixed_servers",
						rules: rulesObj
					};
					_Globals2.default.set("current_proxy", config);

					chrome.proxy.settings.set({ value: configData, scope: 'regular' }, function () {
						resolve(rulesObj);
					});
				});
			});
		}
	}, {
		key: 'setTest',
		value: function setTest(config) {
			var _this = this;

			return new Promise(function (resolve, reject) {

				var pacScript = _this.getSearchPacScript(config.testHost, config.proxy);

				var pacConfig = {
					mode: "pac_script",
					pacScript: {
						data: pacScript
					}
				};
				_Globals2.default.set("current_proxy", config.proxy);
				chrome.proxy.settings.set({ value: pacConfig, scope: 'regular' }, function () {
					resolve(pacScript);
				});
			});
		}
	}, {
		key: 'unset',
		value: function unset() {
			var _this = this;

			return new Promise(function (resolve, reject) {

				chrome.proxy.settings.clear({ scope: 'regular' }, function () {
					resolve();
				});
			});
		}
	}, {
		key: 'getSearchPacScript',
		value: function getSearchPacScript(host, proxyServer) {
			var scheme = proxyServer.Scheme === "http" ? "PROXY" : "HTTPS";
			var pacUri = "function FindProxyForURL(url, host) {" + "if(host == '" + host + "') return '" + scheme + " " + proxyServer.Host + ":" + proxyServer.Port + "'; \n" + "return 'DIRECT';}";

			return pacUri;
		}
	}, {
		key: 'getPacScript',
		value: function getPacScript(proxy) {

			return new Promise(function (resolve, reject) {

				chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.BASELINK, _ServiceMeta2.default.STORAGEKEYS.BYPASSLIST, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA], function (storage) {

					var configData = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA];
					var uid = configData && configData.uid ? configData.uid : "";
					var customBypassData = storage[_ServiceMeta2.default.STORAGEKEYS.BYPASSLIST];

					var currentBaselink = storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK].replace("http://", "").replace("https://", "").replace("/client/", "").replace("/" + _ServiceMeta2.default.SHORTNAME, "");

					currentBaselink = _Utils2.default.removePort(currentBaselink);
					currentBaselink = currentBaselink.toLowerCase();

					var byPassList = [];
					byPassList.push(currentBaselink);

					// Custom bypasslist
					var customBypassList = [];

					if (_Utils2.default.isUserPremium(configData)) customBypassList = customBypassData && customBypassData[uid] ? customBypassData[uid] : [];

					byPassList = byPassList.concat(_bypasslist2.default, customBypassList);

					var byPassString = "";

					for (var i = 0; i < byPassList.length; i++) {
						byPassString = byPassString + "if(host == '" + byPassList[i] + "') return 'DIRECT'; \n";
					}

					var scheme = proxy.Scheme === "http" ? "PROXY" : "HTTPS";
					var pacUri = "function FindProxyForURL(url, host) {" + "if(isInNet(host, '192.168.0.0', '255.255.0.0')) return 'DIRECT'; \n" + byPassString + "return '" + scheme + " " + proxy.Host + ":" + proxy.Port + "';}";
					resolve(pacUri);
				});
			});
		}
	}, {
		key: 'getRulesForFixedServer',
		value: function getRulesForFixedServer(proxy) {

			return new Promise(function (resolve, reject) {

				chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.BASELINK, _ServiceMeta2.default.STORAGEKEYS.BYPASSLIST, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA], function (storage) {

					var configData = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA];
					var uid = configData && configData.uid ? configData.uid : "";
					var customBypassData = storage[_ServiceMeta2.default.STORAGEKEYS.BYPASSLIST];

					var currentBaselinkProtocolStripped = storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK].replace("http://", "").replace("https://", "");
					var currentBaselink = currentBaselinkProtocolStripped.substr(0, currentBaselinkProtocolStripped.indexOf('/'));
					if (currentBaselink == "") currentBaselink = currentBaselinkProtocolStripped;
					currentBaselink = _Utils2.default.removePort(currentBaselink);
					currentBaselink = currentBaselink.toLowerCase();

					var byPassList = [];
					byPassList.push(currentBaselink);

					// Custom bypasslist
					var customBypassList = [];

					if (_Utils2.default.isUserPremium(configData)) customBypassList = customBypassData && customBypassData[uid] ? customBypassData[uid] : [];

					byPassList = byPassList.concat(_bypasslist2.default, customBypassList);

					resolve({
						singleProxy: {
							scheme: proxy.Scheme ? proxy.Scheme.toLowerCase() : "https",
							host: proxy.Host,
							port: proxy.Port
						},
						bypassList: byPassList
					});
				});
			});
		}

		/* Events */

	}, {
		key: 'onProxySettingChanged',
		value: function onProxySettingChanged(details) {
			var _this = this;

			if (details && details.hasOwnProperty('levelOfControl')) {
				chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.ISPROXYON, _ServiceMeta2.default.STORAGEKEYS.LOCALE], function (storage) {
					if (details.levelOfControl == "controlled_by_other_extensions" && storage[_ServiceMeta2.default.STORAGEKEYS.ISPROXYON]) {
						_this.unset().then(function () {
							var _proxyDefaultSettings;

							if (storage[_ServiceMeta2.default.STORAGEKEYS.ISPROXYON] && storage[_ServiceMeta2.default.STORAGEKEYS.LOCALE]) _Utils2.default.showConnectionNotification(storage[_ServiceMeta2.default.STORAGEKEYS.LOCALE].NotifyVPNDisconnectTitle, storage[_ServiceMeta2.default.STORAGEKEYS.LOCALE].NotifyVPNDisconnectMsg);

							var proxyDefaultSettings = (_proxyDefaultSettings = {}, _defineProperty(_proxyDefaultSettings, _ServiceMeta2.default.STORAGEKEYS.ISPROXYON, false), _defineProperty(_proxyDefaultSettings, _ServiceMeta2.default.STORAGEKEYS.CURRENTPROXY, false), _proxyDefaultSettings);

							chrome.storage.local.set(proxyDefaultSettings);
						});
					}
				});
			}
		}
	}]);

	return ProxyApi;
}();

exports.default = new ProxyApi();

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _localhosts = __webpack_require__(16);

var _localhosts2 = _interopRequireDefault(_localhosts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = ["checkout.stripe.com", _ServiceMeta2.default.BASEDOMAIN, _ServiceMeta2.default.BACKUPBASEDOMAIN].concat(_localhosts2.default);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var exports = module.exports = function SHA (algorithm) {
  algorithm = algorithm.toLowerCase()

  var Algorithm = exports[algorithm]
  if (!Algorithm) throw new Error(algorithm + ' is not supported (we accept pull requests)')

  return new Algorithm()
}

exports.sha = __webpack_require__(29)
exports.sha1 = __webpack_require__(35)
exports.sha224 = __webpack_require__(36)
exports.sha256 = __webpack_require__(17)
exports.sha384 = __webpack_require__(37)
exports.sha512 = __webpack_require__(18)


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-0, as defined
 * in FIPS PUB 180-1
 * This source code is derived from sha1.js of the same repository.
 * The difference between SHA-0 and SHA-1 is just a bitwise rotate left
 * operation was added.
 */

var inherits = __webpack_require__(6)
var Hash = __webpack_require__(7)
var Buffer = __webpack_require__(4).Buffer

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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(32)
var ieee754 = __webpack_require__(33)
var isArray = __webpack_require__(34)

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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(31)))

/***/ }),
/* 31 */
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
/* 32 */
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
/* 33 */
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
/* 34 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined
 * in FIPS PUB 180-1
 * Version 2.1a Copyright Paul Johnston 2000 - 2002.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for details.
 */

var inherits = __webpack_require__(6)
var Hash = __webpack_require__(7)
var Buffer = __webpack_require__(4).Buffer

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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-256, as defined
 * in FIPS 180-2
 * Version 2.2-beta Copyright Angel Marin, Paul Johnston 2000 - 2009.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 *
 */

var inherits = __webpack_require__(6)
var Sha256 = __webpack_require__(17)
var Hash = __webpack_require__(7)
var Buffer = __webpack_require__(4).Buffer

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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var inherits = __webpack_require__(6)
var SHA512 = __webpack_require__(18)
var Hash = __webpack_require__(7)
var Buffer = __webpack_require__(4).Buffer

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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

var _ProxySetting = __webpack_require__(10);

var _ProxySetting2 = _interopRequireDefault(_ProxySetting);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _Disconnect = __webpack_require__(39);

var _Disconnect2 = _interopRequireDefault(_Disconnect);

var _Extension = __webpack_require__(3);

var _Extension2 = _interopRequireDefault(_Extension);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ConnectionWatcher = function () {
	function ConnectionWatcher() {
		_classCallCheck(this, ConnectionWatcher);

		var _this = this;
		this.init();

		_this.onRequestCompleted = this.onRequestCompleted.bind(this);
		_this.onRequestError = this.onRequestError.bind(this);

		_this.onPermissionChange = this.onPermissionChange.bind(this);

		_Extension2.default.subscribePermissionChange(_this.onPermissionChange);
		_Extension2.default.isPermissionValid().then(function (isValid) {
			if (isValid) _this.registerListeners();
		});
	}

	_createClass(ConnectionWatcher, [{
		key: 'onPermissionChange',
		value: function onPermissionChange(isValid) {
			var _this = this;

			if (isValid) {
				_this.registerListeners();
			} else {
				_this.removeListeners();
			}
		}
	}, {
		key: 'registerListeners',
		value: function registerListeners() {
			var _this = this;

			if (!chrome.webRequest.onCompleted.hasListener(_this.onRequestCompleted)) {
				chrome.webRequest.onCompleted.addListener(_this.onRequestCompleted, { urls: ["<all_urls>"] }, ["responseHeaders"]);
			}

			if (!chrome.webRequest.onErrorOccurred.hasListener(_this.onRequestError)) {
				chrome.webRequest.onErrorOccurred.addListener(_this.onRequestError, { urls: ["<all_urls>"] });
			}
		}
	}, {
		key: 'removeListeners',
		value: function removeListeners() {
			var _this = this;

			chrome.webRequest.onCompleted.removeListener(_this.onRequestCompleted);

			chrome.webRequest.onErrorOccurred.removeListener(_this.onRequestError);
		}
	}, {
		key: 'init',
		value: function init() {
			this.isRunning = false;
			this.startTime = 0;
			this.onSuccess = 0;
			this.proxyServer = "";
			this.lastError = 0;
			this.lastSuccess = 0;
			this.isPendingUnset = false;
			this.nRequest = [];
			this.nRequestCount = 0;

			/* Rescue Parameter */
			this.numberOfAllowedFails = 10;
			this.numberOfCurrentFails = 0;

			this.rescueURL = [];
		}
	}, {
		key: 'startSession',
		value: function startSession(proxy) {
			var _this = this;

			_this.init();
			_this.isRunning = true;
			_this.startTime = Date.now();
			_this.proxyServer = proxy;
		}
	}, {
		key: 'stopSession',
		value: function stopSession() {
			var _this = this;

			_this.abortRemainingRequests();
			_this.init();
		}
	}, {
		key: 'addFailedRescueRequest',
		value: function addFailedRescueRequest(currentProxy) {
			var _this = this;

			++_this.numberOfCurrentFails;

			if (_this.numberOfAllowedFails == _this.numberOfCurrentFails) {
				_ProxySetting2.default.clearSettings();

				_Disconnect2.default.onErrorDisconnect(currentProxy);
			}
		}
	}, {
		key: 'generateRescueURL',
		value: function generateRescueURL() {
			var _this = this;

			for (var i = 0; i < _this.numberOfAllowedFails; i++) {
				_this.rescueURL[i] = "http://" + _Utils2.default.generateIdentifierDomain();
			};
		}
	}, {
		key: 'request',
		value: function request(i, intervalListener, currentProxy) {
			var _this = this;

			_this.nRequest[i] = new XMLHttpRequest();
			_this.nRequest[i].open("GET", i, true);
			_this.nRequest[i].onreadystatechange = function (oEvent) {
				if (_this.nRequest[i].readyState === 4) {
					var result = _this.nRequest[i].responseText;

					if (result.indexOf(i) != -1 && result.indexOf("ERR_DNS_FAIL") != -1) {
						window.clearInterval(intervalListener);
						_this.abortRemainingRequests();

						_this.lastError = 0;
						_this.lastSuccess = 0;
						_this.isPendingUnset = false;
					} else {
						_this.addFailedRescueRequest(currentProxy);
					}
				}
			};

			++_this.nRequestCount;
			_this.nRequest[i].send(null);
		}
	}, {
		key: 'startRescueRequest',
		value: function startRescueRequest(currentProxy) {
			var _this = this;

			_this.numberOfCurrentFails = 0;
			_this.rescueURL = [];
			_this.nRequest = [];

			_this.generateRescueURL();

			var intervalListener = setInterval(func.bind(this), 1000);

			function func() {

				var _this = this;
				if (_this.rescueURL.length > 0) {
					var next = _this.rescueURL.pop();
					_this.request(next, intervalListener, currentProxy);
				} else {
					window.clearInterval(intervalListener);
				}
			};
		}
	}, {
		key: 'setPendingUnset',
		value: function setPendingUnset(currentProxy) {
			var _this = this;

			_this.isPendingUnset = true;

			setTimeout(function () {

				var isGood = _this.lastError - _this.lastSuccess < 0 ? "we are good" : "start help requests";

				if (_this.isRunning && _this.lastError > _this.lastSuccess) {

					if (_this.nRequestCount < 100) return _this.startRescueRequest(currentProxy);

					_ProxySetting2.default.clearSettings();
					_Disconnect2.default.onErrorDisconnect(currentProxy);
				} else {

					// Time window is good. Lets make another round
					_this.lastError = 0;
					_this.lastSuccess = 0;
					_this.isPendingUnset = false;
				}
			}, 2000);
		}
	}, {
		key: 'abortRemainingRequests',
		value: function abortRemainingRequests() {
			var _this = this;

			for (var request in _this.nRequest) {
				if (_this.nRequest.hasOwnProperty(request)) {
					_this.nRequest[request].abort();
					//console.log("REALLY ABORT", request);
				}
			}
		}

		/* Events */

	}, {
		key: 'onRequestError',
		value: function onRequestError(details) {
			var _this = this;

			if (details.error == _ServiceMeta2.default.ERRORCODES.CONNECTIONERROR || _ServiceMeta2.default.ERRORCODES.CONNECTIONERROR2 !== undefined && details.error == _ServiceMeta2.default.ERRORCODES.CONNECTIONERROR2) {

				chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.ISPROXYON, _ServiceMeta2.default.STORAGEKEYS.CURRENTPROXY], function (storage) {

					if (storage[_ServiceMeta2.default.STORAGEKEYS.ISPROXYON]) _this.onProxyErrorHappened(storage[_ServiceMeta2.default.STORAGEKEYS.CURRENTPROXY]);
				});
			}
		}
	}, {
		key: 'onRequestCompleted',
		value: function onRequestCompleted(details) {
			var _this = this;

			if (details.hasOwnProperty('ip')) _this.onSuccessfulRequest();
		}
	}, {
		key: 'onSuccessfulRequest',
		value: function onSuccessfulRequest() {
			var _this = this;

			if (_this.isRunning) {
				_this.lastSuccess = Date.now();
			}
		}
	}, {
		key: 'onProxyErrorHappened',
		value: function onProxyErrorHappened(currentProxy) {
			var _this = this;

			if (_this.isRunning && !_this.isPendingUnset) {
				_this.lastError = Date.now();
				_this.setPendingUnset(currentProxy);
			}
		}
	}]);

	return ConnectionWatcher;
}();

exports.default = new ConnectionWatcher();

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _endpoints = __webpack_require__(8);

var _endpoints2 = _interopRequireDefault(_endpoints);

var _Api = __webpack_require__(2);

var _Api2 = _interopRequireDefault(_Api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Disconnect = function () {
	function Disconnect() {
		_classCallCheck(this, Disconnect);

		this.lastDisconnects = [];
		this.isRunning = false;
	}

	_createClass(Disconnect, [{
		key: 'onErrorDisconnect',
		value: function onErrorDisconnect(currentProxy) {
			var _this = this;

			_this.addDisconnect(currentProxy);
		}
	}, {
		key: 'addDisconnect',
		value: function addDisconnect(currentProxy) {
			var _this = this;

			if (!currentProxy) return;

			var disonnectItem = {
				id: currentProxy['Identifier'],
				type: currentProxy['Type'] ? currentProxy['Type'] : "",
				country: currentProxy['CountryCode'],
				pid: currentProxy['PID'] ? currentProxy['PID'] : ""
			};

			_this.lastDisconnects.push(disonnectItem);
			_this.sendItem();
		}
	}, {
		key: 'sendItem',
		value: function sendItem() {
			var _this = this;

			if (_this.lastDisconnects.length <= 0 || _this.isRunning) return;
			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.USERDATA, _ServiceMeta2.default.STORAGEKEYS.BASELINK], function (storage) {
				var Baselink = storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK];

				if (!Baselink) return;

				var udata = storage[_ServiceMeta2.default.STORAGEKEYS.USERDATA];
				var uid = udata && udata.uid ? udata.uid : "";
				var disItem = _this.lastDisconnects.pop();
				if (!disItem) return;
				disItem.uid = uid;

				var data = {
					disconnect: JSON.stringify(disItem)
				};
				_this.isRunning = true;
				_Api2.default.sendDisconnect(function (response) {
					if (_this.lastDisconnects.length > 0) _this.sendDisconnect();
					_this.isRunning = false;
				}, data);
			});
		}
	}]);

	return Disconnect;
}();

exports.default = new Disconnect();

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Notification = function () {
	function Notification() {
		_classCallCheck(this, Notification);
	}

	_createClass(Notification, [{
		key: 'popupMessageHandler',
		value: function popupMessageHandler(port, requestId, method, data) {
			var _this = this;

			switch (method) {
				case "onPopupOpened":
					_this.onPopupOpened();
					port.postMessage({ response: method, requestId: requestId, data: "onPopupOpened" });
					break;
				default:

					break;
			}
		}

		/* Actions */

	}, {
		key: 'showNotification',
		value: function showNotification(notificationToShow, cachedNotifications) {
			var _this = this;

			//First we cache it, then we show the notification.
			_this.cacheNotificationInStorage(notificationToShow, cachedNotifications).then(function () {

				_Utils2.default.openNewTab(notificationToShow.target);
			});
		}
	}, {
		key: 'checkForNotification',
		value: function checkForNotification() {
			var _this = this;

			_this.loadStorageData().then(function (storage) {
				var cachedNotifications = storage[_ServiceMeta2.default.STORAGEKEYS.NOTIFICATIONS];

				var config = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA];

				var isNotificationOn = _this.getNotificationStateFromConfig(config);
				var notifications = _this.getNotificationFromConfig(config);

				if (!isNotificationOn || !notifications) return console.log("Not on or not available");;

				var notificationToShow = _this.getNewNotification(notifications, cachedNotifications);

				if (notificationToShow) _this.showNotification(notificationToShow, cachedNotifications);
			});
		}
	}, {
		key: 'getNotificationStateFromConfig',
		value: function getNotificationStateFromConfig(config) {

			if (config && config.notificationstate && config.notificationstate.toLowerCase() == "y") return true;

			return false;
		}
	}, {
		key: 'getNotificationFromConfig',
		value: function getNotificationFromConfig(config) {

			if (config && config.notifications && config.notifications.length > 0) return config.notifications;

			return false;
		}
	}, {
		key: 'getNewNotification',
		value: function getNewNotification(current, storedNotifications) {

			if (!Array.isArray(current) || current.length == 0) return false;

			if (!storedNotifications) return current[0];

			for (var i = 0; i < current.length; i++) {
				if (current[i].id && current[i].target && !storedNotifications.hasOwnProperty(current[i].id)) return current[i];
			};

			return false;
		}
	}, {
		key: 'cacheNotificationInStorage',
		value: function cacheNotificationInStorage(notification, storedNotifications) {
			return new Promise(function (resolve, reject) {

				if (!storedNotifications) storedNotifications = {};

				storedNotifications[notification.id] = true;

				chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.NOTIFICATIONS, storedNotifications), function () {
					resolve();
				});
			});
		}
	}, {
		key: 'loadStorageData',
		value: function loadStorageData() {
			return new Promise(function (resolve, reject) {

				chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.NOTIFICATIONS, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA], function (storage) {

					resolve(storage);
				});
			});
		}

		/* Events */

	}, {
		key: 'onPopupOpened',
		value: function onPopupOpened() {
			var _this = this;

			_this.checkForNotification();
		}
	}]);

	return Notification;
}();

exports.default = new Notification();

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Network = __webpack_require__(42);

var _Network2 = _interopRequireDefault(_Network);

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _localhosts = __webpack_require__(16);

var _localhosts2 = _interopRequireDefault(_localhosts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bypasslist = function () {
	function Bypasslist() {
		_classCallCheck(this, Bypasslist);
	}

	_createClass(Bypasslist, [{
		key: 'validate',
		value: function validate(callback, validationData) {
			var _this = this;

			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA], function (storage) {
				var configData = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA];
				var ipLookupUrl = configData && configData["ipcheck_url"] ? configData["ipcheck_url"] : "undefined";
				ipLookupUrl = _Utils2.default.stripProtocol(ipLookupUrl);

				var bypasslistString = validationData.newData;
				var currentData = validationData.currentData;

				var bypassList = _this.readByNewLine(bypasslistString);

				var ipToBypass = [];
				var hostnamesAndIpToBypass = [];
				var errorLines = [];

				for (var i = 0; i < bypassList.length; i++) {

					var line = _this.removeUrlComponents(bypassList[i].toLowerCase()).replace(' ', '');

					if ((_Network2.default.isIpv4(line) || _Network2.default.isHostname(line) != null) && ipLookupUrl != line) {
						if (hostnamesAndIpToBypass.indexOf(line) == -1 && _localhosts2.default.indexOf(line) == -1) hostnamesAndIpToBypass.push(line);

						continue;
					}

					if (bypassList[i] != "") errorLines.push(bypassList[i]);
				};

				var bypassData = {
					bypassList: hostnamesAndIpToBypass,
					errorLines: errorLines,
					valid: hostnamesAndIpToBypass.length,
					invalid: errorLines.length
				};

				if (bypassData.bypassList.length > 0) return _this.saveBypassList(bypassData).then(callback);

				return _this.saveBypassList({ bypassList: [] }).then(callback);
			});
		}
	}, {
		key: 'saveBypassList',
		value: function saveBypassList(bypassData) {
			return new Promise(function (resolve, reject) {

				chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.BYPASSLIST, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA], function (storage) {
					var configData = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA];
					var bypassList = storage[_ServiceMeta2.default.STORAGEKEYS.BYPASSLIST];
					var uid = configData && configData.uid ? configData.uid : "";

					if (!bypassList) bypassList = {};

					bypassList[uid] = bypassData.bypassList;

					chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.BYPASSLIST, bypassList), function () {
						resolve(bypassData);
					});
				});
			});
		}
	}, {
		key: 'removeUrlComponents',
		value: function removeUrlComponents(l) {
			var pStripped = _Utils2.default.stripProtocol(l);

			if (!pStripped.includes('/')) return pStripped;

			var parts = pStripped.split('/');

			return parts[0];
		}
	}, {
		key: 'readByNewLine',
		value: function readByNewLine(bypasslistString) {
			return bypasslistString.split('\n');
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
				case "validate":
					_this.validate(_this.popupCallback(port, requestId, method), data);
					break;
				default:

					break;
			}
		}
	}]);

	return Bypasslist;
}();

exports.default = new Bypasslist();

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Network = function () {
	function Network() {
		_classCallCheck(this, Network);
	}

	_createClass(Network, [{
		key: "isIpv4",
		value: function isIpv4(address) {
			var test = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/.exec(address);
			if (test === null) return false;

			var condition = test[1] > 255 || test[2] > 255 || test[3] > 255 || test[4] > 255;
			if (condition) return false; // not an IP address

			return true;
		}
	}, {
		key: "isHostname",
		value: function isHostname(hostname) {
			var regex = "^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$";
			return hostname.match(regex);
		}
	}]);

	return Network;
}();

exports.default = new Network();

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Extension = __webpack_require__(3);

var _Extension2 = _interopRequireDefault(_Extension);

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

var _ProxySetting = __webpack_require__(10);

var _ProxySetting2 = _interopRequireDefault(_ProxySetting);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PermissionController = function () {
  function PermissionController() {
    _classCallCheck(this, PermissionController);

    var _this = this;
    _this.registeredView = false;
    _this.onPermissionChanged = this.onPermissionChanged.bind(this);

    _Extension2.default.isPermissionValid().then(function (isValid) {
      if (!isValid) _Utils2.default.setPermissionIcon(isValid);
    });

    _Extension2.default.registerController(_this.onPermissionChanged);
  }

  _createClass(PermissionController, [{
    key: 'onPermissionChanged',
    value: function onPermissionChanged(isValid) {
      var _this = this;
      if (_this.registeredView) _this.registeredView(isValid);

      _Utils2.default.setPermissionIcon(isValid);

      if (!isValid) {
        _ProxySetting2.default.clearSettings(function () {
          _Utils2.default.setPermissionIcon(isValid);
        });
      }
    }
  }, {
    key: 'registerView',
    value: function registerView(callback, port) {
      var _this = this;
      _this.registeredView = callback;
      port.onDisconnect.addListener(_this.onViewDisconnect.bind(_this));
    }
  }, {
    key: 'onViewDisconnect',
    value: function onViewDisconnect() {
      var _this = this;
      _this.registeredView = false;
    }
  }, {
    key: 'popupCallback',
    value: function popupCallback(port, requestId, method, targetApi, isEvent) {
      // If this is a event return request.targetApi and isEvent
      return function (data) {
        port.postMessage({ response: method, requestId: requestId, data: data, targetMethod: method, targetApi: targetApi, isEvent: isEvent });
      };
    }
  }, {
    key: 'popupMessageHandler',
    value: function popupMessageHandler(port, requestId, method, data, targetApi, isEvent) {

      switch (method) {
        case "registerView":
          this.registerView(this.popupCallback(port, requestId, method, targetApi, isEvent), port);
          break;
        default:

          this.popupCallback(port, requestId, method)("");
      }
    }
  }]);

  return PermissionController;
}();

exports.default = new PermissionController();

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Api = __webpack_require__(2);

var _Api2 = _interopRequireDefault(_Api);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

var _ProxySetting = __webpack_require__(10);

var _ProxySetting2 = _interopRequireDefault(_ProxySetting);

var _localeFallback = __webpack_require__(45);

var _localeFallback2 = _interopRequireDefault(_localeFallback);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ConfigUpdater = function () {
  function ConfigUpdater() {
    _classCallCheck(this, ConfigUpdater);

    var _this = this;
    this.isRefreshing = false;
    this.isLocaleRefreshing = false;

    this.popupMessageHandler = this.popupMessageHandler.bind(this);
    chrome.storage.onChanged.addListener(_this.onSettingsChanged.bind(_this));
  }

  _createClass(ConfigUpdater, [{
    key: 'setRefreshList',
    value: function setRefreshList(callback, data) {
      var _this = this;
      if (_this.isRefreshing && callback) return callback();
      _this.isRefreshing = true;
      setTimeout(function () {
        chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.USERDATA, _ServiceMeta2.default.STORAGEKEYS.LSER], function (storage) {
          var cachedlser = storage[_ServiceMeta2.default.STORAGEKEYS.LSER];
          var loginData = {
            isIgnoreFail: true,
            userData: storage[_ServiceMeta2.default.STORAGEKEYS.USERDATA]
          };
          _Api2.default.login(function (response) {
            _this.isRefreshing = false;
            if (_Utils2.default.isResponseMinus20(response) || _Utils2.default.isResponseAuthError(response)) {
              chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.LOCALE], function (storage) {
                var authFailed = _Utils2.default.getFallbackLocale("AuthFailed", storage[_ServiceMeta2.default.STORAGEKEYS.LOCALE], _localeFallback2.default);
                var lastError = _Utils2.default.isResponseMinus20(response) ? response.message : authFailed;
                chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.LASTLOGOUTREASON, lastError), function () {
                  chrome.storage.local.remove([_ServiceMeta2.default.STORAGEKEYS.USERDATA, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATA, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATATTL, _ServiceMeta2.default.STORAGEKEYS.CONFIGHARDTTL]);
                });
              });
            }

            // Set new TTL for soft since server has problem. This does not affect hard ttl
            if (_Utils2.default.isResponseMinusOne(response) || _Utils2.default.isMaintenanceMode(response) || response === 0) {
              chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA], function (storage) {
                var configData = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA];
                var configIntervals = configData && configData.config_intervals ? configData.config_intervals : false;
                var soft = _Utils2.default.isObject(configIntervals) ? configIntervals.soft : false;
                var configDataTTL = _Utils2.default.getConfigTTL(soft, 5);
                chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.CONFIGDATATTL, configDataTTL));
              });
            }

            if (cachedlser === undefined || _Utils2.default.isResponse200(response) && response.config && response.config.l1ser > cachedlser) {
              _this.setLocaleRefresh();
            }
          }, loginData);
        });
      }, 1000);
      callback();
    }
  }, {
    key: 'setLocaleRefresh',
    value: function setLocaleRefresh() {
      var _this2 = this;

      var _this = this;
      this.isLocaleRefreshing = true;
      _Api2.default.getLocale(function () {
        _this2.isLocaleRefreshing = false;
      }, { ignoreFail: true });
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
      switch (method) {
        case "setRefreshList":
          this.setRefreshList(this.popupCallback(port, requestId, method), data);
          break;
        default:

          this.popupCallback(port, requestId, method)("");
      }
    }
  }, {
    key: 'onSettingsChanged',
    value: function onSettingsChanged(changes, namespace) {
      var _this = this;
      var changedItems = Object.keys(changes);
      if (changedItems.indexOf(_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA) > -1 && changedItems.indexOf(_ServiceMeta2.default.STORAGEKEYS.USERDATA) > -1) {
        var isUserDeleted = changes[_ServiceMeta2.default.STORAGEKEYS.USERDATA].newValue === undefined ? true : false;
        var isConfigDeteled = changes[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA].newValue === undefined ? true : false;

        if (isUserDeleted && isConfigDeteled) {
          _ProxySetting2.default.clearSettings();
          return;
        }
      }

      if (changedItems.indexOf(_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA) > -1) {
        var newConfig = changes[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA].newValue;
        if (newConfig && _Utils2.default.isObject(newConfig) && newConfig.hasOwnProperty("user_status") && newConfig["user_status"] == _ServiceMeta2.default.STATUS.BLOCKED) {
          _ProxySetting2.default.clearSettings();
        }
      }
    }
  }]);

  return ConfigUpdater;
}();

exports.default = new ConfigUpdater();

/***/ }),
/* 45 */
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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _Proxy = __webpack_require__(11);

var _Proxy2 = _interopRequireDefault(_Proxy);

var _ProxyIdentifier = __webpack_require__(20);

var _ProxyIdentifier2 = _interopRequireDefault(_ProxyIdentifier);

var _TokenWatcher = __webpack_require__(5);

var _TokenWatcher2 = _interopRequireDefault(_TokenWatcher);

var _ProxySetting = __webpack_require__(10);

var _ProxySetting2 = _interopRequireDefault(_ProxySetting);

var _Feedback = __webpack_require__(47);

var _Feedback2 = _interopRequireDefault(_Feedback);

var _Management = __webpack_require__(19);

var _Management2 = _interopRequireDefault(_Management);

var _Extension = __webpack_require__(3);

var _Extension2 = _interopRequireDefault(_Extension);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProxyFinder = function () {
	function ProxyFinder() {
		_classCallCheck(this, ProxyFinder);

		var _this = this;

		_this.init();

		chrome.runtime.onConnect.addListener(this.onConnect.bind(this));
		chrome.storage.onChanged.addListener(_this.onSettingsChanged.bind(_this));
	}

	_createClass(ProxyFinder, [{
		key: 'init',
		value: function init() {
			var _this = this;

			_this.isActive = false;
			_this.serverList = [];
			_this.randomSelectedServer = [];
			_this.fallbacks = [];
			_this.activeProxy = {};
			_this.abort = false;
			_this.identifierLink = "";
			_this.identifierDomain = "";

			_this.currentServer = "";

			//_this.Port = false;
		}
	}, {
		key: 'connectPort',
		value: function connectPort(Port) {
			var _this = this;

			_this.Port = Port;
			_this.Port.onMessage.addListener(_this.onPortMessage.bind(this));
			_this.Port.onDisconnect.addListener(_this.onPortDisconnect.bind(this));
		}
	}, {
		key: 'generateIdentifier',
		value: function generateIdentifier() {
			var _this = this;
			_this.identifierDomain = _Utils2.default.generateIdentifierDomain();
			_this.identifierLink = "http://" + _this.identifierDomain + "/";
		}

		/* Actions */

	}, {
		key: 'startSearch',
		value: function startSearch(searchData) {
			var _this = this;
			chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.PROXYSEARCHLOCK, true), function () {

				_this.resetAll();

				_this.randomSelectedServer = searchData.randomSelectedServer ? searchData.randomSelectedServer : [];
				_this.serverList = searchData.serverList ? searchData.serverList : [];
				_this.serverListCount = _this.serverList.length;

				_this.searchNext();
			});
		}
	}, {
		key: 'searchNext',
		value: function searchNext() {
			var _this = this;

			_Extension2.default.isPermissionValid().then(function (isValid) {
				if (isValid === false) {
					chrome.storage.local.remove([_ServiceMeta2.default.STORAGEKEYS.PROXYSEARCHLOCK], function () {

						_this.resetAll();
					});
				} else {

					if (_this.randomSelectedServer.length > 0) {

						_this.currentServer = _this.randomSelectedServer.pop();
					} else {

						if (_this.serverList.length == 0 && _this.fallbacks.length == 0) {
							return _this.searchFailed();
						}

						if (_this.fallbacks.length > 0) {
							_this.currentServer = _this.fallbacks.pop();
						} else {
							_this.currentServer = _this.serverList.pop();
						}
					}

					_this.updateView();

					_this.testProxy(_this.currentServer, function (isSuccess, identifierDomain) {
						if (_this.abort) return _this.resetAll();

						_Feedback2.default.add(_this.currentServer, isSuccess, identifierDomain);

						if (isSuccess) return _this.searchSuccess(_this.currentServer);

						if (_this.serverList.length > 0 || _this.fallbacks.length > 0) {

							_this.searchNext();
						} else {
							_this.searchFailed(_this.currentServer.Country);
						}
					});
				}
			});
		}
	}, {
		key: 'testProxy',
		value: function testProxy(proxy, callback) {
			var _this = this;

			if (!proxy) return callback(false);

			_this.generateIdentifier();

			var testPacData = {
				proxy: proxy,
				testHost: _this.identifierDomain
			};

			_Proxy2.default.setTest(testPacData).then(function (test) {

				_ProxyIdentifier2.default.identify(_this.identifierLink, function (isSuccess) {

					callback(isSuccess, _this.identifierDomain);
				});
			});
		}
	}, {
		key: 'searchSuccess',
		value: function searchSuccess(proxy) {
			var _this = this;

			_Extension2.default.isPermissionValid().then(function (isValid) {
				_this.init();
				if (isValid === false) {
					chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.PROXYSEARCHLOCK, false));
				} else {

					// Setting a working proxy to the browser settings
					_Proxy2.default.set(proxy).then(function (proxySet) {
						var _chrome$storage$local3;

						chrome.storage.local.set((_chrome$storage$local3 = {}, _defineProperty(_chrome$storage$local3, _ServiceMeta2.default.STORAGEKEYS.ISPROXYON, true), _defineProperty(_chrome$storage$local3, _ServiceMeta2.default.STORAGEKEYS.CURRENTPROXY, proxy), _defineProperty(_chrome$storage$local3, _ServiceMeta2.default.STORAGEKEYS.PROXYSEARCHLOCK, false), _chrome$storage$local3), function () {

							chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.LOCALE, _ServiceMeta2.default.STORAGEKEYS.COUNTRYLOCALE], function (storage) {
								var locale = storage[_ServiceMeta2.default.STORAGEKEYS.LOCALE];
								var countryLocale = storage[_ServiceMeta2.default.STORAGEKEYS.COUNTRYLOCALE];
								var countryCode = proxy.CountryCode;

								if (locale && locale.ConnectedTo && countryCode) {
									var countryLabel = countryLocale && countryLocale.hasOwnProperty(countryCode.toUpperCase()) ? countryLocale[countryCode.toUpperCase()] : countryCode;
									var message = locale.ConnectedTo.replace('{0}', countryLabel);
									_Utils2.default.showConnectionNotification(locale.ConnectedTitle, message, true);
								}

								_Management2.default.cacheExtWithProxyPerm();

								if (_this.Port) _this.Port.postMessage({ action: "success" });
							});
						});
					});
				}
			});
		}
	}, {
		key: 'searchFailed',
		value: function searchFailed(country) {
			var _chrome$storage$local4;

			var _this = this;

			chrome.storage.local.set((_chrome$storage$local4 = {}, _defineProperty(_chrome$storage$local4, _ServiceMeta2.default.STORAGEKEYS.PROXYSEARCHFAILED, true), _defineProperty(_chrome$storage$local4, _ServiceMeta2.default.STORAGEKEYS.PROXYSEARCHFAILEDCOUNTRY, country), _defineProperty(_chrome$storage$local4, _ServiceMeta2.default.STORAGEKEYS.PROXYSEARCHLOCK, true), _chrome$storage$local4), function () {

				_ProxySetting2.default.clearSettings();
				_this.init();

				if (_this.Port) _this.Port.postMessage({ action: "failed", data: country });
			});
		}
	}, {
		key: 'updateView',
		value: function updateView() {
			var _this = this;

			var data = {
				server: _this.currentServer,
				count: _this.serverList.length,
				total: _this.serverListCount
			};

			if (_this.Port) _this.Port.postMessage({ action: "update", data: data });
		}
	}, {
		key: 'resetAll',
		value: function resetAll(callback) {
			var _this = this;

			_ProxyIdentifier2.default.abort();
			_ProxySetting2.default.clearSettings(callback);

			_this.init();
		}
	}, {
		key: 'abortSearch',
		value: function abortSearch() {

			var _this = this;

			_this.abort = true;
		}

		/* Events */

	}, {
		key: 'onPortMessage',
		value: function onPortMessage(message) {
			var _this = this;

			switch (message.action) {
				case "search":
					_this.startSearch(message.data);
					break;
				case "cancel":
					_this.abortSearch();
					break;
				case "getUpdate":
					_this.updateView();
			}
		}
	}, {
		key: 'onPortDisconnect',
		value: function onPortDisconnect() {
			var _this = this;

			_this.Port = false;
		}
	}, {
		key: 'onConnect',
		value: function onConnect(Port) {
			var _this = this;

			if (Port.name == "proxysearch-port") _this.connectPort(Port);
		}
	}, {
		key: 'onSettingsChanged',
		value: function onSettingsChanged(changes, namespace) {
			var _this = this;
			var changedItems = Object.keys(changes);

			if (changedItems.indexOf(_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA) > -1 && changedItems.indexOf(_ServiceMeta2.default.STORAGEKEYS.USERDATA) > -1) {
				var isUserDeleted = changes[_ServiceMeta2.default.STORAGEKEYS.USERDATA].newValue === undefined ? true : false;
				var isConfigDeteled = changes[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA].newValue === undefined ? true : false;

				if (isUserDeleted && isConfigDeteled) {
					_this.abortSearch();
				}
			}
		}
	}]);

	return ProxyFinder;
}();

exports.default = new ProxyFinder();

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _Interval = __webpack_require__(12);

var _Interval2 = _interopRequireDefault(_Interval);

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

var _endpoints = __webpack_require__(8);

var _endpoints2 = _interopRequireDefault(_endpoints);

var _Extension = __webpack_require__(3);

var _Extension2 = _interopRequireDefault(_Extension);

var _Api = __webpack_require__(2);

var _Api2 = _interopRequireDefault(_Api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Feedback = function () {
	function Feedback() {
		_classCallCheck(this, Feedback);

		var _this = this;
		this.currentBatch = {};
		this.pendingBatches = [];
		this.sendInterval = 1000 * 60 * 30;
		this.batchInterval = false;

		this.maxQueueSize = 5;

		this.errorMapping = {};

		this.FEEDBACKVERSION = 3;

		this.user = "";
		this.uid = "";

		this.requests = {
			started: {}
		};

		this.isProxyOn = false;

		this.speedBatch = {
			current: {},
			pending: {}
		};

		this.DEFAULTSIZE = 1024 * 1000;

		this.speedFeedback = {
			version: 1,
			isOn: false,
			minSize: this.DEFAULTSIZE
		};

		_this.onErrorOccurred = this.onErrorOccurred.bind(this);
		_this.onSendHeaders = this.onSendHeaders.bind(this);
		_this.onCompleted = this.onCompleted.bind(this);

		_this.onPermissionChange = this.onPermissionChange.bind(this);

		_Extension2.default.subscribePermissionChange(_this.onPermissionChange);
		_Extension2.default.isPermissionValid().then(function (isValid) {
			if (isValid) _this.registerListeners();
		});

		chrome.storage.onChanged.addListener(this.onStorageChanged.bind(this));
	}

	_createClass(Feedback, [{
		key: 'onPermissionChange',
		value: function onPermissionChange(isValid) {
			var _this = this;

			if (isValid) {
				_this.registerListeners();
			} else {
				_this.removeListeners();
			}
		}
	}, {
		key: 'registerListeners',
		value: function registerListeners() {
			var _this = this;

			if (!chrome.webRequest.onErrorOccurred.hasListener(_this.onErrorOccurred)) {
				chrome.webRequest.onErrorOccurred.addListener(_this.onErrorOccurred, { urls: ["<all_urls>"] });
			}

			if (!chrome.webRequest.onSendHeaders.hasListener(_this.onSendHeaders)) {
				chrome.webRequest.onSendHeaders.addListener(_this.onSendHeaders, { urls: ["<all_urls>"] }, ["requestHeaders"]);
			}

			if (!chrome.webRequest.onCompleted.hasListener(_this.onCompleted)) {
				chrome.webRequest.onCompleted.addListener(_this.onCompleted, { urls: ["<all_urls>"] }, ["responseHeaders"]);
			}
		}
	}, {
		key: 'removeListeners',
		value: function removeListeners() {
			var _this = this;
			chrome.webRequest.onErrorOccurred.removeListener(_this.onErrorOccurred);
			chrome.webRequest.onSendHeaders.removeListener(_this.onSendHeaders);

			chrome.webRequest.onCompleted.removeListener(_this.onCompleted);
		}
	}, {
		key: 'onCompleted',
		value: function onCompleted(details) {
			var _this = this;

			if (!_this.isSpeedFeedbackOn()) return;

			if (_this.requests.started.hasOwnProperty(details.requestId)) {
				var requestStart = _this.requests.started[details.requestId];
				var contentLenghtHeader = _this.getContentLenghtFromHeader(details.responseHeaders);

				if (contentLenghtHeader && !details.fromCache) {
					var contentLenght = parseInt(contentLenghtHeader);

					if (!isNaN(contentLenght) && contentLenght >= _this.speedFeedback.minSize) {
						var timeDiff = Math.floor(details.timeStamp) - Math.floor(requestStart.timeStamp);
						var sVal = Math.floor(contentLenght / timeDiff);
						var sSize = Math.floor(contentLenght / 1000);

						_this.addSpeed(sVal, sSize);
					}
				}

				delete _this.requests.started[details.requestId];
			}
		}
	}, {
		key: 'onErrorOccurred',
		value: function onErrorOccurred(details) {
			var _this = this;

			if (!_this.isSpeedFeedbackOn()) return;

			if (_this.requests.started.hasOwnProperty(details.requestId)) delete _this.requests.started[details.requestId];
		}
	}, {
		key: 'onSendHeaders',
		value: function onSendHeaders(details) {
			var _this = this;

			if (!_this.isSpeedFeedbackOn()) return;

			var countKeys = Object.keys(_this.requests.started).length;

			if (countKeys >= 1000) _this.requests.started = {};

			_this.requests.started[details.requestId] = details;
		}
	}, {
		key: 'isSpeedFeedbackOn',
		value: function isSpeedFeedbackOn() {
			var _this = this;

			return _this.isProxyOn && _this.speedFeedback.isOn;
		}
	}, {
		key: 'onStorageChanged',
		value: function onStorageChanged(changes, namespace) {
			var _this = this;
			var changedItems = Object.keys(changes);

			if (changedItems.indexOf(_ServiceMeta2.default.STORAGEKEYS.ISPROXYON) > -1) _this.isProxyOn = changes[_ServiceMeta2.default.STORAGEKEYS.ISPROXYON].newValue;

			if (changedItems.indexOf(_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA) > -1) {

				var configData = changes[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA].newValue;

				if (configData && configData.hasOwnProperty('speedfeedback')) {

					_this.speedFeedback.isOn = true;

					if (configData['speedfeedback'] && configData['speedfeedback'].hasOwnProperty('minsize')) {
						_this.speedFeedback.minSize = configData['speedfeedback']['minsize'];
					} else {
						_this.speedFeedback.minSize = _this.DEFAULTSIZE;
					}
				} else {

					_this.speedFeedback.isOn = false;
				}
			}
		}
	}, {
		key: 'getContentLenghtFromHeader',
		value: function getContentLenghtFromHeader(headers) {

			for (var i = 0; i < headers.length; i++) {

				if (headers[i].name.toLowerCase() === "content-length") return headers[i].value;
			};

			return false;
		}
	}, {
		key: 'onErrorOccurred',
		value: function onErrorOccurred(details) {
			var _this = this;

			if (details && details.url && details.error && details.url.match(_ServiceMeta2.default.TESTREQUESTREGEX) != null) {

				_this.mapError(details);
			}
		}
	}, {
		key: 'mapError',
		value: function mapError(details) {
			var _this = this;
			var testDomain = "";

			var currentCount = Object.keys(_this.errorMapping).length;

			if (currentCount > 100) _this.errorMapping = {};

			if (details.url) testDomain = details.url.replace('http://', '').replace('/', '');

			_this.errorMapping[testDomain] = details.error;
		}
	}, {
		key: 'addSpeed',
		value: function addSpeed(sVal, sSize) {
			var _this = this;

			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA, _ServiceMeta2.default.STORAGEKEYS.CURRENTPROXY], function (storage) {

				var configData = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA];
				var currentProxy = storage[_ServiceMeta2.default.STORAGEKEYS.CURRENTPROXY];

				if (configData && configData.feedback && currentProxy && currentProxy['Identifier']) {
					_this.uid = configData.uid ? configData.uid : "";
					var serverId = currentProxy['Identifier'];

					if (!_this.speedBatch.current.hasOwnProperty(serverId)) _this.createNewSpeedBatch(serverId, currentProxy);

					_this.updateSpeedBatchItem(serverId, sVal, sSize);
				}
			});
		}
	}, {
		key: 'createNewSpeedBatch',
		value: function createNewSpeedBatch(serverId, serverItem) {
			var _this = this;

			var batchItem = {
				id: serverItem['Identifier'],
				type: Number.isInteger(serverItem['Type']) ? serverItem['Type'] : "",
				country: serverItem['CountryCode'],
				pid: serverItem['PID'] ? serverItem['PID'] : "xxx",
				speed: [],
				avgsize: []
			};

			_this.speedBatch.current[serverId] = batchItem;
		}
	}, {
		key: 'updateSpeedBatchItem',
		value: function updateSpeedBatchItem(serverId, sVal, sSize) {
			var _this = this;

			if (!_this.speedBatch.current.hasOwnProperty(serverId)) return;

			if (_this.speedBatch.current[serverId].speed.length < 10) {

				_this.speedBatch.current[serverId].speed.push(sVal);
				_this.speedBatch.current[serverId].avgsize.push(sSize);
			}
		}
	}, {
		key: 'moveCurrentSpeedBatchToPending',
		value: function moveCurrentSpeedBatchToPending() {
			var _this = this;

			if (_this.pendingBatches.length >= _this.maxQueueSize) _this.pendingBatches.pop();

			var batchHeader = {
				v: _this.speedFeedback.version,
				t: Math.floor(Date.now() / 1000),
				service: _ServiceMeta2.default.SERVICESHORT.toLowerCase(),
				uid: _this.uid,
				minsize: _this.speedFeedback.minSize
			};

			var batch = _this.aggregateSpeedBatch(batchHeader);

			_this.pendingBatches.unshift(batch);

			_this.speedBatch.current = {};
		}
	}, {
		key: 'aggregateSpeedBatch',
		value: function aggregateSpeedBatch(batchHeader) {
			var _this = this;

			var batch = batchHeader;
			var aggBatch = [];

			for (var key in _this.speedBatch.current) {
				var speedItem = _this.speedBatch.current[key];

				if (speedItem.speed.length === speedItem.avgsize.length) {
					var aggSpeed = 0;
					var aggSize = 0;
					for (var i = 0; i < speedItem.speed.length; i++) {

						aggSpeed += speedItem.speed[i];
						aggSize += speedItem.avgsize[i];
					};

					speedItem.speed = Math.floor(aggSpeed / speedItem.speed.length);
					speedItem.avgsize = Math.floor(aggSize / speedItem.avgsize.length);

					aggBatch.push(speedItem);
				}
			}

			batch['speed'] = aggBatch;

			return batch;
		}
	}, {
		key: 'add',
		value: function add(serverItem, isSuccess, testDomain) {
			var _this = this;

			chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA, _ServiceMeta2.default.STORAGEKEYS.USERDATA], function (storage) {
				var configData = storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA];
				var userData = storage[_ServiceMeta2.default.STORAGEKEYS.USERDATA];

				if (configData && configData.feedback && serverItem && serverItem['Identifier'] && serverItem["Host"] && serverItem["Port"]) {
					_this.user = userData && userData.email ? userData.email : "";
					_this.uid = configData.uid ? configData.uid : "";

					var errorCode = false;

					if (_this.errorMapping.hasOwnProperty(testDomain)) {

						errorCode = _this.errorMapping[testDomain];
						delete _this.errorMapping[testDomain];
					}

					var serverId = serverItem["Host"] + ":" + serverItem["Port"];

					if (!_this.currentBatch.hasOwnProperty(serverId)) _this.createNewBatchItem(serverId, serverItem);

					_this.updateBatchItem(serverId, serverItem, isSuccess, errorCode);

					if (!_this.batchInterval || _this.batchInterval && !_this.batchInterval.isRunning()) {

						_this.batchInterval = new _Interval2.default(_this.prepareBatch.bind(_this), _this.sendInterval);
						_this.batchInterval.start();
					}
				}
			});
		}
	}, {
		key: 'createNewBatchItem',
		value: function createNewBatchItem(serverId, serverItem) {
			var _this = this;

			var batchItem = {
				id: serverItem['Identifier'],
				type: Number.isInteger(serverItem['Type']) ? serverItem['Type'] : "",
				country: serverItem['CountryCode'],
				stats: {
					s: 0,
					f: 0
				},
				errorcodes: {}
			};

			_this.currentBatch[serverId] = batchItem;
		}
	}, {
		key: 'updateBatchItem',
		value: function updateBatchItem(serverId, serverItem, isSuccess, errorCode) {
			var _this = this;

			if (!_this.currentBatch.hasOwnProperty(serverId)) return;

			if (errorCode) {

				if (!_this.currentBatch[serverId].errorcodes.hasOwnProperty(errorCode)) {
					_this.currentBatch[serverId].errorcodes[errorCode] = 1;
				} else {
					_this.currentBatch[serverId].errorcodes[errorCode] += 1;
				}
			}

			if (isSuccess) return _this.currentBatch[serverId].stats['s'] += 1;

			_this.currentBatch[serverId].stats['f'] += 1;
		}
	}, {
		key: 'prepareBatch',
		value: function prepareBatch() {
			var _this = this;

			if (!_Utils2.default.isEmpty(_this.currentBatch)) _this.moveCurrentBatchToPending();

			if (!_Utils2.default.isEmpty(_this.speedBatch.current)) _this.moveCurrentSpeedBatchToPending();

			if (_this.pendingBatches.length > 0) _this.sendBatch();
		}
	}, {
		key: 'moveCurrentBatchToPending',
		value: function moveCurrentBatchToPending() {
			var _this = this;

			if (_this.pendingBatches.length >= _this.maxQueueSize) _this.pendingBatches.pop();

			var batchHeader = {
				v: _this.FEEDBACKVERSION,
				t: Math.floor(Date.now() / 1000),
				service: _ServiceMeta2.default.SERVICESHORT.toLowerCase(),
				uid: _this.uid
			};

			var batch = _this.createFormartedBatch(batchHeader);

			_this.pendingBatches.unshift(batch);

			_this.currentBatch = {};
		}
	}, {
		key: 'createFormartedBatch',
		value: function createFormartedBatch(batchHeader) {
			var _this = this;

			var batch = batchHeader;
			var formattedStats = [];

			for (var key in _this.currentBatch) {
				formattedStats.push(_this.currentBatch[key]);
			}

			batch['stats'] = formattedStats;

			return batch;
		}
	}, {
		key: 'sendBatch',
		value: function sendBatch() {
			var _this = this;

			if (_this.pendingBatches.length <= 0) return;

			chrome.storage.local.get(_ServiceMeta2.default.STORAGEKEYS.BASELINK, function (storage) {

				var Baselink = storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK];

				if (!Baselink) return;

				var batch = _this.pendingBatches.pop();
				var batchString = JSON.stringify(batch);

				var paramKey = "feedback";

				if (batch && batch.hasOwnProperty('speed')) paramKey = "speedfeedback";

				var data = _defineProperty({}, paramKey, batchString);

				_Api2.default.sendFeedback(function (response) {

					if (_Utils2.default.isResponse200(response)) {

						_this.sendBatch();
						return;
					}

					if (response === 0) {
						_this.pendingBatches.push(batch);
					}
				}, data);
			});
		}
	}]);

	return Feedback;
}();

exports.default = new Feedback();

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Globals = __webpack_require__(13);

var _Globals2 = _interopRequireDefault(_Globals);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _TokenWatcher = __webpack_require__(5);

var _TokenWatcher2 = _interopRequireDefault(_TokenWatcher);

var _ProxyIdentifier = __webpack_require__(20);

var _ProxyIdentifier2 = _interopRequireDefault(_ProxyIdentifier);

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

var _Extension = __webpack_require__(3);

var _Extension2 = _interopRequireDefault(_Extension);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProxyAuth = function () {
	function ProxyAuth() {
		_classCallCheck(this, ProxyAuth);

		var _this = this;

		_this.onAuthFirefoxHandler = this.onAuthFirefoxHandler.bind(this);
		_this.onAuthChromeHandler = this.onAuthChromeHandler.bind(this);

		_this.onPermissionChange = this.onPermissionChange.bind(this);

		_Extension2.default.subscribePermissionChange(_this.onPermissionChange);
		_Extension2.default.isPermissionValid().then(function (isValid) {
			if (isValid) _this.registerListeners();
		});
	}

	_createClass(ProxyAuth, [{
		key: 'onPermissionChange',
		value: function onPermissionChange(isValid) {
			var _this = this;

			if (isValid) {
				_this.registerListeners();
			} else {
				_this.removeListeners();
			}
		}
	}, {
		key: 'registerListeners',
		value: function registerListeners() {
			var _this = this;

			if (_ServiceMeta2.default.PLATFORM.toUpperCase() === "FIREFOX") {
				if (!chrome.webRequest.onAuthRequired.hasListener(_this.onAuthFirefoxHandler)) {
					chrome.webRequest.onAuthRequired.addListener(_this.onAuthFirefoxHandler, { urls: ["<all_urls>"] }, ["blocking"]);
				}
			} else {
				if (!chrome.webRequest.onAuthRequired.hasListener(_this.onAuthChromeHandler)) {
					chrome.webRequest.onAuthRequired.addListener(_this.onAuthChromeHandler, { urls: ["<all_urls>"] }, ["asyncBlocking"]);
				}
			}
		}
	}, {
		key: 'removeListeners',
		value: function removeListeners() {
			var _this = this;

			if (_ServiceMeta2.default.PLATFORM.toUpperCase() === "FIREFOX") {

				chrome.webRequest.onAuthRequired.removeListener(_this.onAuthFirefoxHandler);
			} else {

				chrome.webRequest.onAuthRequired.removeListener(_this.onAuthChromeHandler);
			}
		}
	}, {
		key: 'onAuthChromeHandler',
		value: function onAuthChromeHandler(details, callback) {
			var request = {
				details: details,
				callback: callback
			};

			// onAuth not from proxy
			if (!details.isProxy) return callback();

			if (details.challenger && _Globals2.default.get('current_proxy') && details.challenger.host === _Globals2.default.get('current_proxy').Host && details.challenger.port === _Globals2.default.get('current_proxy').Port) {

				if (!_TokenWatcher2.default.isRunning()) {

					// set request to work with
					_TokenWatcher2.default.setRunning();

					//put trigger request to queue (if the request is not identifyRequest) // what if identifyReques is trigger?
					if (!(request.details.url.indexOf(_ProxyIdentifier2.default.getIdentifierLink()) != -1)) {

						_TokenWatcher2.default.setPendingRequest(request.callback);
						_TokenWatcher2.default.startIdentifyRequest();
					} else {

						_TokenWatcher2.default.setIdentifyId(details.requestId);
						_TokenWatcher2.default.setCurrentRequest(details);

						if (!_TokenWatcher2.default.isCachedUsed()) {
							_TokenWatcher2.default.useCache(request.callback);
						} else {
							_TokenWatcher2.default.freshToken(request.callback);
						}
						return 0;
					}
				} else {

					//console.log("identifierID", tokenWatcher.identifyId);


					//console.log("i am id :", details.requestId);
					//console.log("it is running but i need still ###");
					//tokenWatcher.printState();

					// Case: identifyRequest entering 1st time
					if (_TokenWatcher2.default.getIdentifyId() != 0 && _TokenWatcher2.default.getIdentifyId() === details.requestId && _Utils2.default.isEmpty(_TokenWatcher2.default.getCurrentRequest())) {
						_TokenWatcher2.default.setCurrentRequest(details);

						//console.log("second init round");
						if (!_TokenWatcher2.default.isCachedUsed()) {
							_TokenWatcher2.default.useCache(request.callback);
						} else {
							_TokenWatcher2.default.freshToken(request.callback);
						}
						return 0;
					}

					//Case: identifyRequest entering more than 1 time
					if (!_Utils2.default.isEmpty(_TokenWatcher2.default.getCurrentRequest()) && _TokenWatcher2.default.getCurrentRequest().requestId === details.requestId && !_TokenWatcher2.default.getNextEnteringKill()) {

						_TokenWatcher2.default.setNextEnteringKill(true);
						_TokenWatcher2.default.freshToken(request.callback);
						//console.log("this was last try");
						return 0;
					} else if (!_Utils2.default.isEmpty(_TokenWatcher2.default.getCurrentRequest()) && _TokenWatcher2.default.getCurrentRequest().requestId === details.requestId && _TokenWatcher2.default.getNextEnteringKill()) {
						//console.log("ok cancel all");
						request.callback({ cancel: true });
						_TokenWatcher2.default.closeAllCallbacks();
						return 0;
					}

					_TokenWatcher2.default.setPendingRequest(request.callback);
				}
			}
			return 0;
		}
	}, {
		key: 'onAuthFirefoxHandler',
		value: function onAuthFirefoxHandler(request) {

			var _this = this;

			if (!request.isProxy) return;

			if (request.challenger && _Globals2.default.get('current_proxy') && request.challenger.host === _Globals2.default.get('current_proxy').Host && request.challenger.port === _Globals2.default.get('current_proxy').Port) {

				if (!_TokenWatcher2.default.isRunning()) {

					//Start TokenWatcher
					_TokenWatcher2.default.setRunning();

					var isRequestProxyIdentifier = request.url.indexOf(_ProxyIdentifier2.default.getIdentifierLink()) != -1;

					if (isRequestProxyIdentifier) {

						/*
      	Case: The test request for a proxy triggers authentication. This happens when token
      	is not cached in the browser and we connect for the first time.
      	We init Tokenwatcher with id of this request to make sure that it is handled with
      	either freshToken or cached Token.
      */

						_TokenWatcher2.default.setIdentifyId(request.requestId);
						_TokenWatcher2.default.setCurrentRequest(request);

						/*
      	If we have alreay used cached token, return a auth promise: Which promises that
      	this request will be retried with a fresh token
      */

						if (_TokenWatcher2.default.isCachedUsed()) return _this.authPromise(_TokenWatcher2.default.freshToken.bind(_TokenWatcher2.default), false);

						/*
      	Return promise that this request will be tried with a cached token
      */

						return _this.authPromise(_TokenWatcher2.default.useCache.bind(_TokenWatcher2.default), false);
					} else {

						/*
      	Case: When some other request triggers proxy auth. We will add this request to a waiting
      	list and start a identify request via TokenWatcher. Once That identify request is handled
      	with correct credentials. This request will be answered from waiting list
      */

						return _this.authPromise(_TokenWatcher2.default.setPendingRequest.bind(_TokenWatcher2.default), true);
					}
				} else {

					/* TokenWatcher already running */

					/*
     	Case: Since TokenWatcher is running. We have a identify request, which we are following.
     	There are 4 cases:
     		1. 	We have started identify request because some other request triggered Auth. And this is
     			first enterance of the identify request which we have started via TokenWatcher
     				=> Use cache or fresh token
     		2. 	A identify request triggered the Auth in first place, and this is its second enterance
     				=> Use fresh token
     		3.	Identify request entering third time:
     				=> Cache and fresh Token failed, DISCONNECT
     		4.	Request is not identify request
     				=> Put it in waiting list, until we find a working token
     	 */

					/*
     Case 1: isIdentifyRequestFirstTime
     */

					if (_TokenWatcher2.default.getIdentifyId() != 0 && _TokenWatcher2.default.getIdentifyId() === request.requestId && _Utils2.default.isEmpty(_TokenWatcher2.default.getCurrentRequest())) {

						_TokenWatcher2.default.setCurrentRequest(request);

						if (_TokenWatcher2.default.isCachedUsed()) return _this.authPromise(_TokenWatcher2.default.freshToken, false);

						return _this.authPromise(_TokenWatcher2.default.useCache.bind(_TokenWatcher2.default), false);
					}

					/* Case 2: isIdentifyRequestSecondTime */

					if (!_Utils2.default.isEmpty(_TokenWatcher2.default.getCurrentRequest()) && _TokenWatcher2.default.getCurrentRequest().requestId === request.requestId && !_TokenWatcher2.default.getNextEnteringKill()) {
						_TokenWatcher2.default.setNextEnteringKill(true);

						return _this.authPromise(_TokenWatcher2.default.freshToken.bind(_TokenWatcher2.default), false);
					}

					/* Case 3: isIdentifyRequestThirdTime */

					if (!_Utils2.default.isEmpty(_TokenWatcher2.default.getCurrentRequest()) && _TokenWatcher2.default.getCurrentRequest().requestId === request.requestId && _TokenWatcher2.default.getNextEnteringKill()) {
						_TokenWatcher2.default.closeAllCallbacks();

						return { cancel: true };
					}

					/* Case 4 */

					return _this.authPromise(_TokenWatcher2.default.setPendingRequest.bind(_TokenWatcher2.default), false);
				}
			}
		}
	}, {
		key: 'authPromise',
		value: function authPromise(funct, isIdentify) {
			return new Promise(function (resolve, reject) {

				//tokenWatcher.pendingRequest.push(resolve);

				if (isIdentify) _TokenWatcher2.default.startIdentifyRequest();

				funct(resolve);

				//console.log("pendingRequestPromise", tokenWatcher.pendingRequest);
			});
		}
	}]);

	return ProxyAuth;
}();

exports.default = new ProxyAuth();

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

var _md = __webpack_require__(50);

var _md2 = _interopRequireDefault(_md);

var _endpoints = __webpack_require__(8);

var _endpoints2 = _interopRequireDefault(_endpoints);

var _Extension = __webpack_require__(3);

var _Extension2 = _interopRequireDefault(_Extension);

var _Interval = __webpack_require__(12);

var _Interval2 = _interopRequireDefault(_Interval);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AutoProxy = function () {
	function AutoProxy() {
		_classCallCheck(this, AutoProxy);

		var _this = this;
		this.init();

		this.qSize = 10;
		this.batchSize = 100;
		this.entryMaxLength = 100000;
		this.batchMaxLength = 700000;
		this.qMaxSize = 2000000;

		this.sendInterval = 1000 * 60 * 15;
		this.batchInterval = new _Interval2.default(_this.sendCache.bind(this), this.sendInterval);
		this.batchInterval.start();

		this.autoProxy = [];
		this.returnedBatches = [];

		this.isCaching = false;
		this.isSending = false;

		this.checkProxyTimeout = false;
		this.sendCacheTimeout = false;
		this.recacheBatchesTimeout = false;

		_this.onRequestError = this.onRequestError.bind(this);
		_this.onPermissionChange = this.onPermissionChange.bind(this);

		_this.checkProxy = this.checkProxy.bind(this);

		_Extension2.default.subscribePermissionChange(_this.onPermissionChange);
		_Extension2.default.isPermissionValid().then(function (isValid) {
			if (isValid) _this.registerListeners();
		});
	}

	_createClass(AutoProxy, [{
		key: 'onPermissionChange',
		value: function onPermissionChange(isValid) {
			var _this = this;

			if (isValid) {
				_this.registerListeners();
			} else {
				_this.removeListeners();
			}
		}
	}, {
		key: 'registerListeners',
		value: function registerListeners() {
			var _this = this;

			if (!chrome.webRequest.onErrorOccurred.hasListener(_this.onRequestError)) {
				chrome.webRequest.onErrorOccurred.addListener(_this.onRequestError, { urls: ["<all_urls>"] });
			}
		}
	}, {
		key: 'removeListeners',
		value: function removeListeners() {
			var _this = this;
			chrome.webRequest.onErrorOccurred.removeListener(_this.onRequestError);
		}
	}, {
		key: 'init',
		value: function init() {
			var _this = this;

			_this.autoProxy = [];
			_this.isRunning = false;
			_this.current = "";
		}
	}, {
		key: 'check',
		value: function check(value) {
			var _this = this;

			if (!value) return;

			_this.getOriginUrl(value).then(function (originUrl) {

				_this.getUserTag().then(function (usertag) {

					value.referer = originUrl;
					value.errorSource = usertag;
					value.s = _this.getEntrySize(value);

					if (_this.autoProxy.length > 1000) _this.autoProxy = [];
					if (!_this.isEntrySizeValid(value.s)) {

						return;
					}
					_this.autoProxy.push(value);
					_this.checkProxy();
				});
			});
		}
	}, {
		key: 'getEntrySize',
		value: function getEntrySize(entry) {
			try {
				var s = JSON.stringify(entry).length;
				var l = s ? s : -1;
				return l;
			} catch (e) {
				return -1;
			}
		}
	}, {
		key: 'isEntrySizeValid',
		value: function isEntrySizeValid(esize) {
			var _this = this;
			return esize < _this.entryMaxLength;
		}
	}, {
		key: 'addItemToQ',
		value: function addItemToQ(q, i, s) {
			var _this = this;
			if (!q || !Array.isArray(q)) q = [];

			if (q.length === 0) {
				var b = {
					s: i.s,
					b: [i]
				};
				q.push(b);
			} else {
				if (q.length >= _this.qSize || s > _this.qMaxSize) q.shift(); // Check cache size here;
				var lastEl = q[q.length - 1];
				if (lastEl.b.length >= _this.batchSize || lastEl.s + i.s > _this.batchMaxLength) {
					var b = {
						s: i.s,
						b: [i]
					};
					q.push(b);
				} else {
					lastEl.s += i.s;
					lastEl.b.push(i);
				}
			}
			return q;
		}
	}, {
		key: 'addBatchToQ',
		value: function addBatchToQ(q, b, s) {
			var _this = this;
			if (!b || !Array.isArray(b)) return;

			b.forEach(function (i) {
				q = _this.addItemToQ(q, i, s);
			});

			return q;
		}
	}, {
		key: 'pushToCache',
		value: function pushToCache(i) {
			var _this = this;
			return new Promise(function (resolve, reject) {
				_this.getBytesInUse(_ServiceMeta2.default.STORAGEKEYS.RCACHE).then(function (size) {

					chrome.storage.local.get(_ServiceMeta2.default.STORAGEKEYS.RCACHE, function (storage) {
						try {

							var errcache = storage[_ServiceMeta2.default.STORAGEKEYS.RCACHE];

							if (Array.isArray(i)) {
								errcache = _this.addBatchToQ(errcache, i, size);
							} else {
								var item = Object.assign({}, i);
								item.cv = _ServiceMeta2.default.VERSION;
								errcache = _this.addItemToQ(errcache, item, size);
							}

							chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.RCACHE, errcache), function () {
								resolve(i);
							});
						} catch (e) {
							reject(e);
						}
					});
				});
			});
		}
	}, {
		key: 'getBytesInUse',
		value: function getBytesInUse(keys) {
			var _this = this;
			if (_ServiceMeta2.default.PLATFORM.toLowerCase() == 'firefox') {
				return new Promise(function (resolve, reject) {
					chrome.storage.local.get(keys, function (storage) {
						resolve(_this.getEntrySize(storage[keys]));
					});
				});
			}
			return new Promise(function (resolve, reject) {
				try {
					chrome.storage.local.getBytesInUse(keys, function (size) {
						resolve(size);
					});
				} catch (e) {
					resolve(0);
				}
			});
		}
	}, {
		key: 'getOriginUrl',
		value: function getOriginUrl(details) {
			var _this = this;

			return new Promise(function (resolve, reject) {

				if (!details) return resolve("");

				if (details && details.hasOwnProperty('originUrl') && details.originUrl) {

					return resolve(_Utils2.default.escapeParamsOfUrl(details.originUrl));
				}

				if (chrome && chrome.tabs && chrome.tabs.get && details.hasOwnProperty('tabId') && _this.isInt(details.tabId) && details.tabId > 0) {
					chrome.tabs.get(details.tabId, function (tab) {

						return resolve(_Utils2.default.escapeParamsOfUrl(tab.url));
					});
				} else {

					return resolve("");
				}
			});
		}
	}, {
		key: 'getUserTag',
		value: function getUserTag() {
			return new Promise(function (resolve, reject) {
				chrome.storage.local.get(_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA, function (storage) {

					if (storage && storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA]) return resolve(storage[_ServiceMeta2.default.STORAGEKEYS.CONFIGDATA].uid);

					return resolve("");
				});
			});
		}
	}, {
		key: 'doneCaching',
		value: function doneCaching() {
			var _this = this;
			_this.isCaching = false;
			_this.checkProxy();
		}
	}, {
		key: 'checkProxy',
		value: function checkProxy() {
			var _this = this;
			if (_this.autoProxy.length == 0) return;

			if (!_this.isCaching) {
				// Is storage ocupied?
				var current = _this.autoProxy.pop();

				current.url = _Utils2.default.escapeParamsOfUrl(current.url);
				_this.isCaching = true;

				_this.checkIsCached(current.url).then(function (isCached) {

					if (!isCached) {
						try {
							current.cacheTime = _Utils2.default.getDateNow();

							_this.pushToCache(current).then(function () {
								_this.doneCaching();
							}).catch(function (e) {
								_this.doneCaching();
							});
						} catch (e) {
							_this.doneCaching();
						}
					} else {
						_this.doneCaching();
					}
				}).catch(function (e) {
					_this.doneCaching();
				});
			} else {
				clearTimeout(_this.checkProxyTimeout);
				_this.checkProxyTimeout = setTimeout(_this.checkProxy.bind(_this), 500);
			}
		}
	}, {
		key: 'isInt',
		value: function isInt(value) {
			var x;
			if (isNaN(value)) {
				return false;
			}
			x = parseFloat(value);
			return (x | 0) === x;
		}
	}, {
		key: 'checkIsCached',
		value: function checkIsCached(d) {
			var _this = this;
			return new Promise(function (resolve, reject) {
				chrome.storage.local.get(_ServiceMeta2.default.STORAGEKEYS.HASHCACHE, function (storage) {
					try {
						var encodedD = (0, _md2.default)(d);
						if (d.indexOf(_ServiceMeta2.default.BASEDOMAIN) > -1 || d.indexOf(_ServiceMeta2.default.BACKUPBASEDOMAIN) > -1 || d.match(_ServiceMeta2.default.TESTREQUESTREGEX) != null) {
							return resolve(true);
						}
						var dCache = storage[_ServiceMeta2.default.STORAGEKEYS.HASHCACHE];
						var dMid = _Utils2.default.getDateMid();

						if (dCache != undefined && typeof dCache[dMid] !== 'undefined' && typeof dCache[dMid][encodedD] !== 'undefined' && dCache[dMid][encodedD] >= _Utils2.default.getDateNow()) {
							return resolve(true);
						} else {

							var eCache = dCache != undefined ? dCache : {};
							if (Object.keys(eCache).length >= 10) eCache = {};
							var timeOut = _Utils2.default.getDateNow() - 172800;
							Object.keys(eCache).forEach(function (k, i) {
								if (eCache.hasOwnProperty(k)) {
									var kInt = parseInt(k);
									if (!_Utils2.default.isInt(kInt) || kInt < timeOut) {
										delete eCache[k];
									}
								}
							});

							if (typeof eCache[dMid] === 'undefined') eCache[dMid] = {};
							if (typeof eCache[dMid]["length"] === 'undefined') eCache[dMid]["length"] = 0;
							if (eCache[dMid]["length"] > 1000) eCache[dMid] = {};
							eCache[dMid]["length"] += 1;
							eCache[dMid][encodedD] = _Utils2.default.getDateNow() + 60 * 60;
							chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.HASHCACHE, eCache), function () {
								resolve(false);
							});
						}
					} catch (e) {
						reject(e);
					}
				});
			});
		}
	}, {
		key: 'recacheBatches',
		value: function recacheBatches() {
			var _this = this;
			if (_this.returnedBatches.length === 0) return;

			if (_this.isCaching) {
				clearTimeout(_this.recacheBatchesTimeout);
				_this.recacheBatchesTimeout = setTimeout(_this.recacheBatches.bind(this), 500);
				return;
			}

			_this.isCaching = true;
			var curBatch = _this.returnedBatches.pop();
			_this.pushToCache(curBatch).then(function () {
				_this.isCaching = false;
			}).catch(function (e) {
				_this.isCaching = false;
				_this.recacheBatches();
			});
		}
	}, {
		key: 'isResponseValid',
		value: function isResponseValid(response) {
			if (!response) {
				return false;
			}
			if (!response.hasOwnProperty("Saved") || !response.hasOwnProperty("Received") || !response.hasOwnProperty("Retcode")) {
				return false;
			}
			if (response.Retcode !== 200) {
				return false;
			}
			if (!_Utils2.default.isInt(response.Saved) || !_Utils2.default.isInt(response.Received)) {
				return false;
			}
			return true;
		}
	}, {
		key: 'getAllNotSaved',
		value: function getAllNotSaved(response, curBatch) {
			if (response.Saved === response.Received) return [];
			if (response.Saved < curBatch.length) {
				var batch = curBatch.slice(response.Saved);
				return batch;
			}
			return [];
		}
	}, {
		key: 'sendCache',
		value: function sendCache() {
			var _this = this;
			if (_this.isSending) return;
			if (_this.isCaching) {
				clearTimeout(_this.sendCacheTimeout);
				_this.sendCacheTimeout = setTimeout(_this.sendCache.bind(_this), 500);
			}
			_this.isSending = true;
			_this.isCaching = true; // No new entries while reading from storage
			_this.popCurrentBatch().then(function (curBatch) {
				_this.verifyProxy(curBatch).then(function (response) {

					_this.isCaching = false;
					_this.isSending = false;
					if (_this.isResponseValid(response)) {
						var notSavedItems = _this.getAllNotSaved(response, curBatch);
						if (notSavedItems.length > 0) {
							_this.returnedBatches.push(notSavedItems);
							_this.recacheBatches();
						} else {
							_this.sendCache();
						}
					} else {
						_this.returnedBatches.push(curBatch);
						_this.recacheBatches();
					}
				}).catch(function (e) {
					_this.isSending = false;
					_this.isCaching = false;
				});
			}).catch(function (e) {
				_this.isSending = false;
				_this.isCaching = false;
			});
		}
	}, {
		key: 'popCurrentBatch',
		value: function popCurrentBatch() {
			var _this = this;
			return new Promise(function (resolve, reject) {

				chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.RCACHE, _ServiceMeta2.default.STORAGEKEYS.BASELINK, _ServiceMeta2.default.STORAGEKEYS.BASELINKTYPE], function (storage) {
					try {
						var baselink = storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK];
						var baselinkType = storage[_ServiceMeta2.default.STORAGEKEYS.BASELINKTYPE];
						if (baselink === undefined) return reject();
						if (baselinkType === undefined && baselink.indexOf(_ServiceMeta2.default.SHORTNAME + "/client/") > -1) {
							return reject();
						}
						var errcache = storage[_ServiceMeta2.default.STORAGEKEYS.RCACHE];
						if (!errcache || !Array.isArray(errcache) || Array.isArray(errcache) && errcache.length === 0) {
							return reject();
						}
						var curBatchObj = errcache.pop();
						var curBatch = curBatchObj.b;

						chrome.storage.local.set(_defineProperty({}, _ServiceMeta2.default.STORAGEKEYS.RCACHE, errcache), function () {
							try {
								curBatch.forEach(function (item, i) {
									if (curBatch[i].cacheTime && curBatch[i].cacheTime < _Utils2.default.getDateNow()) {
										curBatch[i].timedelta = _Utils2.default.getDateNow() - curBatch[i].cacheTime;
									} else {
										curBatch[i].timedelta = 0;
									}
								});
								resolve(curBatch);
							} catch (e) {
								reject(e);
							}
						});
					} catch (e) {
						reject(e);
					}
				});
			});
		}
	}, {
		key: 'verifyProxy',
		value: function verifyProxy(checkData) {
			var _this = this;
			return new Promise(function (resolve, reject) {

				chrome.storage.local.get([_ServiceMeta2.default.STORAGEKEYS.BASELINK], function (storage) {
					try {
						var baselink = storage[_ServiceMeta2.default.STORAGEKEYS.BASELINK];
						var autoProxyLink = baselink + _endpoints2.default.AUTOPROXY;

						var xhr = new XMLHttpRequest();
						xhr.open('POST', autoProxyLink, true);

						var data = encodeURIComponent(JSON.stringify(checkData));

						var params = "batch=" + data;
						xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

						xhr.onreadystatechange = function () {
							// If the request completed
							if (xhr.readyState == 4) {

								if (xhr.status == 200) {
									var result = {};
									try {
										result = JSON.parse(xhr.responseText);
										resolve(result);
									} catch (e) {
										resolve(false);
									}
								} else {
									resolve(false);
								}
							}
						};

						// Send the request and set status
						xhr.send(params);
					} catch (e) {
						reject(e);
					}
				});
			});
		}

		/* Events */

	}, {
		key: 'onRequestError',
		value: function onRequestError(details) {
			var _this = this;
			if (details && (details.error == _ServiceMeta2.default.ERRORCODES.VERIFYERROR || _ServiceMeta2.default.ERRORCODES.VERIFYERROR2 !== undefined && details.error == _ServiceMeta2.default.ERRORCODES.VERIFYERROR2)) _this.check(details);
		}
	}]);

	return AutoProxy;
}();

exports.default = new AutoProxy();

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var md5cycle = function md5cycle(x, k) {
  var a = x[0],
      b = x[1],
      c = x[2],
      d = x[3];

  a = ff(a, b, c, d, k[0], 7, -680876936);
  d = ff(d, a, b, c, k[1], 12, -389564586);
  c = ff(c, d, a, b, k[2], 17, 606105819);
  b = ff(b, c, d, a, k[3], 22, -1044525330);
  a = ff(a, b, c, d, k[4], 7, -176418897);
  d = ff(d, a, b, c, k[5], 12, 1200080426);
  c = ff(c, d, a, b, k[6], 17, -1473231341);
  b = ff(b, c, d, a, k[7], 22, -45705983);
  a = ff(a, b, c, d, k[8], 7, 1770035416);
  d = ff(d, a, b, c, k[9], 12, -1958414417);
  c = ff(c, d, a, b, k[10], 17, -42063);
  b = ff(b, c, d, a, k[11], 22, -1990404162);
  a = ff(a, b, c, d, k[12], 7, 1804603682);
  d = ff(d, a, b, c, k[13], 12, -40341101);
  c = ff(c, d, a, b, k[14], 17, -1502002290);
  b = ff(b, c, d, a, k[15], 22, 1236535329);

  a = gg(a, b, c, d, k[1], 5, -165796510);
  d = gg(d, a, b, c, k[6], 9, -1069501632);
  c = gg(c, d, a, b, k[11], 14, 643717713);
  b = gg(b, c, d, a, k[0], 20, -373897302);
  a = gg(a, b, c, d, k[5], 5, -701558691);
  d = gg(d, a, b, c, k[10], 9, 38016083);
  c = gg(c, d, a, b, k[15], 14, -660478335);
  b = gg(b, c, d, a, k[4], 20, -405537848);
  a = gg(a, b, c, d, k[9], 5, 568446438);
  d = gg(d, a, b, c, k[14], 9, -1019803690);
  c = gg(c, d, a, b, k[3], 14, -187363961);
  b = gg(b, c, d, a, k[8], 20, 1163531501);
  a = gg(a, b, c, d, k[13], 5, -1444681467);
  d = gg(d, a, b, c, k[2], 9, -51403784);
  c = gg(c, d, a, b, k[7], 14, 1735328473);
  b = gg(b, c, d, a, k[12], 20, -1926607734);

  a = hh(a, b, c, d, k[5], 4, -378558);
  d = hh(d, a, b, c, k[8], 11, -2022574463);
  c = hh(c, d, a, b, k[11], 16, 1839030562);
  b = hh(b, c, d, a, k[14], 23, -35309556);
  a = hh(a, b, c, d, k[1], 4, -1530992060);
  d = hh(d, a, b, c, k[4], 11, 1272893353);
  c = hh(c, d, a, b, k[7], 16, -155497632);
  b = hh(b, c, d, a, k[10], 23, -1094730640);
  a = hh(a, b, c, d, k[13], 4, 681279174);
  d = hh(d, a, b, c, k[0], 11, -358537222);
  c = hh(c, d, a, b, k[3], 16, -722521979);
  b = hh(b, c, d, a, k[6], 23, 76029189);
  a = hh(a, b, c, d, k[9], 4, -640364487);
  d = hh(d, a, b, c, k[12], 11, -421815835);
  c = hh(c, d, a, b, k[15], 16, 530742520);
  b = hh(b, c, d, a, k[2], 23, -995338651);

  a = ii(a, b, c, d, k[0], 6, -198630844);
  d = ii(d, a, b, c, k[7], 10, 1126891415);
  c = ii(c, d, a, b, k[14], 15, -1416354905);
  b = ii(b, c, d, a, k[5], 21, -57434055);
  a = ii(a, b, c, d, k[12], 6, 1700485571);
  d = ii(d, a, b, c, k[3], 10, -1894986606);
  c = ii(c, d, a, b, k[10], 15, -1051523);
  b = ii(b, c, d, a, k[1], 21, -2054922799);
  a = ii(a, b, c, d, k[8], 6, 1873313359);
  d = ii(d, a, b, c, k[15], 10, -30611744);
  c = ii(c, d, a, b, k[6], 15, -1560198380);
  b = ii(b, c, d, a, k[13], 21, 1309151649);
  a = ii(a, b, c, d, k[4], 6, -145523070);
  d = ii(d, a, b, c, k[11], 10, -1120210379);
  c = ii(c, d, a, b, k[2], 15, 718787259);
  b = ii(b, c, d, a, k[9], 21, -343485551);

  x[0] = add32(a, x[0]);
  x[1] = add32(b, x[1]);
  x[2] = add32(c, x[2]);
  x[3] = add32(d, x[3]);
};

var cmn = function cmn(q, a, b, x, s, t) {
  a = add32(add32(a, q), add32(x, t));
  return add32(a << s | a >>> 32 - s, b);
};

var ff = function ff(a, b, c, d, x, s, t) {
  return cmn(b & c | ~b & d, a, b, x, s, t);
};

var gg = function gg(a, b, c, d, x, s, t) {
  return cmn(b & d | c & ~d, a, b, x, s, t);
};

var hh = function hh(a, b, c, d, x, s, t) {
  return cmn(b ^ c ^ d, a, b, x, s, t);
};

var ii = function ii(a, b, c, d, x, s, t) {
  return cmn(c ^ (b | ~d), a, b, x, s, t);
};

var md51 = function md51(s) {
  var txt = '';
  var n = s.length,
      state = [1732584193, -271733879, -1732584194, 271733878],
      i;
  for (i = 64; i <= s.length; i += 64) {
    md5cycle(state, md5blk(s.substring(i - 64, i)));
  }
  s = s.substring(i - 64);
  var tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (i = 0; i < s.length; i++) {
    tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
  }tail[i >> 2] |= 0x80 << (i % 4 << 3);
  if (i > 55) {
    md5cycle(state, tail);
    for (i = 0; i < 16; i++) {
      tail[i] = 0;
    }
  }
  tail[14] = n * 8;
  md5cycle(state, tail);
  return state;
};

/* there needs to be support for Unicode here,
 * unless we pretend that we can redefine the MD-5
 * algorithm for multi-byte characters (perhaps
 * by adding every four 16-bit characters and
 * shortening the sum to 32 bits). Otherwise
 * I suggest performing MD-5 as if every character
 * was two bytes--e.g., 0040 0025 = @%--but then
 * how will an ordinary MD-5 sum be matched?
 * There is no way to standardize text to something
 * like UTF-8 before transformation; speed cost is
 * utterly prohibitive. The JavaScript standard
 * itself needs to look at this: it should start
 * providing access to strings as preformed UTF-8
 * 8-bit unsigned value arrays.
 */
var md5blk = function md5blk(s) {
  /* I figured global was faster.   */
  var md5blks = [],
      i; /* Andy King said do it this way. */
  for (i = 0; i < 64; i += 4) {
    md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
  }
  return md5blks;
};

var hex_chr = '0123456789abcdef'.split('');

var rhex = function rhex(n) {
  var s = '',
      j = 0;
  for (; j < 4; j++) {
    s += hex_chr[n >> j * 8 + 4 & 0x0F] + hex_chr[n >> j * 8 & 0x0F];
  }return s;
};

var hex = function hex(x) {
  for (var i = 0; i < x.length; i++) {
    x[i] = rhex(x[i]);
  }return x.join('');
};

var md5 = function md5(s) {
  return hex(md51(s));
};

/* this function is much faster,
so if possible we use it. Some IEs
are the only ones I know of that
need the idiotic second function,
generated by an if clause.  */

var add32 = function add32(a, b) {
  return a + b & 0xFFFFFFFF;
};

if (md5('hello') != '5d41402abc4b2a76b9719d911017c592') {
  var add32 = function add32(x, y) {
    var lsw = (x & 0xFFFF) + (y & 0xFFFF),
        msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return msw << 16 | lsw & 0xFFFF;
  };
}

exports.default = md5;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Interval = __webpack_require__(12);

var _Interval2 = _interopRequireDefault(_Interval);

var _Api = __webpack_require__(2);

var _Api2 = _interopRequireDefault(_Api);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TierUpdater = function () {
  function TierUpdater() {
    _classCallCheck(this, TierUpdater);

    var _this = this;

    this.setOriginStripListener();
    this.updateIntervalTime = 1000 * 60 * 60;
    this.updateInterval = false;
    this.updateInterval = new _Interval2.default(this.getTiers.bind(this), this.updateIntervalTime);
    this.updateInterval.start();
    this.getTiers();
  }

  _createClass(TierUpdater, [{
    key: 'getTiers',
    value: function getTiers() {
      _Api2.default.getTier();
    }
  }, {
    key: 'setOriginStripListener',
    value: function setOriginStripListener() {
      var _this = this;

      // This will strip the origin header in case of chrome sends one.
      // This is only needed on chrome
      if (_ServiceMeta2.default.PLATFORM.toLowerCase() !== 'chrome') return;

      if (chrome.webRequest.onBeforeSendHeaders.hasListener(_this.stripOrigin)) chrome.webRequest.onBeforeSendHeaders.removeListener(_this.stripOrigin);

      chrome.webRequest.onBeforeSendHeaders.addListener(_this.stripOrigin, { urls: ["*://*/*"] }, ["blocking", "requestHeaders", "extraHeaders"]);
    }
  }, {
    key: 'stripOrigin',
    value: function stripOrigin(e) {
      var headers = [];
      var origin = "chrome-extension://" + chrome.runtime.id;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = e.requestHeaders[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var header = _step.value;

          if (!(header && header.name && header.name.toLowerCase() === "origin" && header.value && header.value.toLowerCase() === origin)) {
            headers.push(header);
          } else {}
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return { requestHeaders: headers };
    }
  }]);

  return TierUpdater;
}();

exports.default = new TierUpdater();

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Interval = __webpack_require__(12);

var _Interval2 = _interopRequireDefault(_Interval);

var _Api = __webpack_require__(2);

var _Api2 = _interopRequireDefault(_Api);

var _ServiceMeta = __webpack_require__(0);

var _ServiceMeta2 = _interopRequireDefault(_ServiceMeta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ClientVersionStatus = function () {
  function ClientVersionStatus() {
    _classCallCheck(this, ClientVersionStatus);

    var _this = this;

    this.updateIntervalTime = 1000 * 60 * 60;
    this.updateInterval = false;
    this.updateInterval = new _Interval2.default(this.getClientVersionStatus.bind(this), this.updateIntervalTime);
    this.updateInterval.start();
    this.getClientVersionStatus();
  }

  _createClass(ClientVersionStatus, [{
    key: 'getClientVersionStatus',
    value: function getClientVersionStatus() {
      _Api2.default.getClientVersionStatus();
    }
  }]);

  return ClientVersionStatus;
}();

exports.default = new ClientVersionStatus();

/***/ })
/******/ ]);