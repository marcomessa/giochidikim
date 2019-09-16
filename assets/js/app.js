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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@fortawesome/fontawesome-free-brands/faFacebook.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free-brands/faFacebook.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = { prefix: 'fab', iconName: 'facebook', icon: [448, 512, [], "f09a", "M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z"] };

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free-brands/faInstagram.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free-brands/faInstagram.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = { prefix: 'fab', iconName: 'instagram', icon: [448, 512, [], "f16d", "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"] };

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free-brands/faLinkedin.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free-brands/faLinkedin.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = { prefix: 'fab', iconName: 'linkedin', icon: [448, 512, [], "f08c", "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"] };

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome/index.es.js":
/*!***********************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome/index.es.js ***!
  \***********************************************************/
/*! exports provided: config, icon, noAuto, layer, text, library, dom, parse, findIconDefinition, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icon", function() { return icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noAuto", function() { return noAuto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layer", function() { return layer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "library", function() { return library; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dom", function() { return dom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIconDefinition", function() { return findIconDefinition; });
/*!
 * Font Awesome Free 5.0.13 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
var noop = function noop() {};

var _WINDOW = {};
var _DOCUMENT = {};
var _MUTATION_OBSERVER$1 = null;
var _PERFORMANCE = { mark: noop, measure: noop };

try {
  if (typeof window !== 'undefined') _WINDOW = window;
  if (typeof document !== 'undefined') _DOCUMENT = document;
  if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER$1 = MutationObserver;
  if (typeof performance !== 'undefined') _PERFORMANCE = performance;
} catch (e) {}

var _ref = _WINDOW.navigator || {};
var _ref$userAgent = _ref.userAgent;
var userAgent = _ref$userAgent === undefined ? '' : _ref$userAgent;

var WINDOW = _WINDOW;
var DOCUMENT = _DOCUMENT;
var MUTATION_OBSERVER = _MUTATION_OBSERVER$1;
var PERFORMANCE = _PERFORMANCE;
var IS_BROWSER = !!WINDOW.document;
var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
var UNITS_IN_GRID = 16;
var DEFAULT_FAMILY_PREFIX = 'fa';
var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
var DATA_FA_I2SVG = 'data-fa-i2svg';
var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';

var PRODUCTION = function () {
  try {
    return "development" === 'production';
  } catch (e) {
    return false;
  }
}();

var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

var ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];

var RESERVED_CLASSES = ['xs', 'sm', 'lg', 'fw', 'ul', 'li', 'border', 'pull-left', 'pull-right', 'spin', 'pulse', 'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical', 'stack', 'stack-1x', 'stack-2x', 'inverse', 'layers', 'layers-text', 'layers-counter'].concat(oneToTen.map(function (n) {
  return n + 'x';
})).concat(oneToTwenty.map(function (n) {
  return 'w-' + n;
}));

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



var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var initial = WINDOW.FontAwesomeConfig || {};
var initialKeys = Object.keys(initial);

var _default = _extends({
  familyPrefix: DEFAULT_FAMILY_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
}, initial);

if (!_default.autoReplaceSvg) _default.observeMutations = false;

var config$1 = _extends({}, _default);

WINDOW.FontAwesomeConfig = config$1;

function update(newConfig) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$asNewDefault = params.asNewDefault,
      asNewDefault = _params$asNewDefault === undefined ? false : _params$asNewDefault;

  var validKeys = Object.keys(config$1);
  var ok = asNewDefault ? function (k) {
    return ~validKeys.indexOf(k) && !~initialKeys.indexOf(k);
  } : function (k) {
    return ~validKeys.indexOf(k);
  };

  Object.keys(newConfig).forEach(function (configKey) {
    if (ok(configKey)) config$1[configKey] = newConfig[configKey];
  });
}

function auto(value) {
  update({
    autoReplaceSvg: value,
    observeMutations: value
  });
}

var w = WINDOW || {};

if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];

var namespace = w[NAMESPACE_IDENTIFIER];

var functions = [];
var listener = function listener() {
  DOCUMENT.removeEventListener('DOMContentLoaded', listener);
  loaded = 1;
  functions.map(function (fn) {
    return fn();
  });
};

var loaded = false;

if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);

  if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
}

var domready = function (fn) {
  if (!IS_DOM) return;
  loaded ? setTimeout(fn, 0) : functions.push(fn);
};

var d = UNITS_IN_GRID;

var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};

function isReserved(name) {
  return ~RESERVED_CLASSES.indexOf(name);
}

function bunker(fn) {
  try {
    fn();
  } catch (e) {
    if (!PRODUCTION) {
      throw e;
    }
  }
}

function insertCss(css) {
  if (!css || !IS_DOM) {
    return;
  }

  var style = DOCUMENT.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = css;

  var headChildren = DOCUMENT.head.childNodes;
  var beforeChild = null;

  for (var i = headChildren.length - 1; i > -1; i--) {
    var child = headChildren[i];
    var tagName = (child.tagName || '').toUpperCase();
    if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }

  DOCUMENT.head.insertBefore(style, beforeChild);

  return css;
}

var _uniqueId = 0;

function nextUniqueId() {
  _uniqueId++;

  return _uniqueId;
}

function toArray(obj) {
  var array = [];

  for (var i = (obj || []).length >>> 0; i--;) {
    array[i] = obj[i];
  }

  return array;
}

function classArray(node) {
  if (node.classList) {
    return toArray(node.classList);
  } else {
    return (node.getAttribute('class') || '').split(' ').filter(function (i) {
      return i;
    });
  }
}

function getIconName(familyPrefix, cls) {
  var parts = cls.split('-');
  var prefix = parts[0];
  var iconName = parts.slice(1).join('-');

  if (prefix === familyPrefix && iconName !== '' && !isReserved(iconName)) {
    return iconName;
  } else {
    return null;
  }
}

function htmlEscape(str) {
  return ('' + str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
    return acc + (attributeName + '="' + htmlEscape(attributes[attributeName]) + '" ');
  }, '').trim();
}

function joinStyles(styles) {
  return Object.keys(styles || {}).reduce(function (acc, styleName) {
    return acc + (styleName + ': ' + styles[styleName] + ';');
  }, '');
}

function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}

function transformForSvg(_ref) {
  var transform = _ref.transform,
      containerWidth = _ref.containerWidth,
      iconWidth = _ref.iconWidth;

  var outer = {
    transform: 'translate(' + containerWidth / 2 + ' 256)'
  };
  var innerTranslate = 'translate(' + transform.x * 32 + ', ' + transform.y * 32 + ') ';
  var innerScale = 'scale(' + transform.size / 16 * (transform.flipX ? -1 : 1) + ', ' + transform.size / 16 * (transform.flipY ? -1 : 1) + ') ';
  var innerRotate = 'rotate(' + transform.rotate + ' 0 0)';
  var inner = {
    transform: innerTranslate + ' ' + innerScale + ' ' + innerRotate
  };
  var path = {
    transform: 'translate(' + iconWidth / 2 * -1 + ' -256)'
  };
  return {
    outer: outer,
    inner: inner,
    path: path
  };
}

function transformForCss(_ref2) {
  var transform = _ref2.transform,
      _ref2$width = _ref2.width,
      width = _ref2$width === undefined ? UNITS_IN_GRID : _ref2$width,
      _ref2$height = _ref2.height,
      height = _ref2$height === undefined ? UNITS_IN_GRID : _ref2$height,
      _ref2$startCentered = _ref2.startCentered,
      startCentered = _ref2$startCentered === undefined ? false : _ref2$startCentered;

  var val = '';

  if (startCentered && IS_IE) {
    val += 'translate(' + (transform.x / d - width / 2) + 'em, ' + (transform.y / d - height / 2) + 'em) ';
  } else if (startCentered) {
    val += 'translate(calc(-50% + ' + transform.x / d + 'em), calc(-50% + ' + transform.y / d + 'em)) ';
  } else {
    val += 'translate(' + transform.x / d + 'em, ' + transform.y / d + 'em) ';
  }

  val += 'scale(' + transform.size / d * (transform.flipX ? -1 : 1) + ', ' + transform.size / d * (transform.flipY ? -1 : 1) + ') ';
  val += 'rotate(' + transform.rotate + 'deg) ';

  return val;
}

var ALL_SPACE = {
  x: 0,
  y: 0,
  width: '100%',
  height: '100%'
};

var makeIconMasking = function (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      mask = _ref.mask,
      transform = _ref.transform;
  var mainWidth = main.width,
      mainPath = main.icon;
  var maskWidth = mask.width,
      maskPath = mask.icon;


  var trans = transformForSvg({ transform: transform, containerWidth: maskWidth, iconWidth: mainWidth });

  var maskRect = {
    tag: 'rect',
    attributes: _extends({}, ALL_SPACE, {
      fill: 'white'
    })
  };
  var maskInnerGroup = {
    tag: 'g',
    attributes: _extends({}, trans.inner),
    children: [{ tag: 'path', attributes: _extends({}, mainPath.attributes, trans.path, { fill: 'black' }) }]
  };
  var maskOuterGroup = {
    tag: 'g',
    attributes: _extends({}, trans.outer),
    children: [maskInnerGroup]
  };
  var maskId = 'mask-' + nextUniqueId();
  var clipId = 'clip-' + nextUniqueId();
  var maskTag = {
    tag: 'mask',
    attributes: _extends({}, ALL_SPACE, {
      id: maskId,
      maskUnits: 'userSpaceOnUse',
      maskContentUnits: 'userSpaceOnUse'
    }),
    children: [maskRect, maskOuterGroup]
  };
  var defs = {
    tag: 'defs',
    children: [{ tag: 'clipPath', attributes: { id: clipId }, children: [maskPath] }, maskTag]
  };

  children.push(defs, { tag: 'rect', attributes: _extends({ fill: 'currentColor', 'clip-path': 'url(#' + clipId + ')', mask: 'url(#' + maskId + ')' }, ALL_SPACE) });

  return {
    children: children,
    attributes: attributes
  };
};

var makeIconStandard = function (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      transform = _ref.transform,
      styles = _ref.styles;

  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  if (transformIsMeaningful(transform)) {
    var trans = transformForSvg({ transform: transform, containerWidth: main.width, iconWidth: main.width });
    children.push({
      tag: 'g',
      attributes: _extends({}, trans.outer),
      children: [{
        tag: 'g',
        attributes: _extends({}, trans.inner),
        children: [{
          tag: main.icon.tag,
          children: main.icon.children,
          attributes: _extends({}, main.icon.attributes, trans.path)
        }]
      }]
    });
  } else {
    children.push(main.icon);
  }

  return {
    children: children,
    attributes: attributes
  };
};

var asIcon = function (_ref) {
  var children = _ref.children,
      main = _ref.main,
      mask = _ref.mask,
      attributes = _ref.attributes,
      styles = _ref.styles,
      transform = _ref.transform;

  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    var width = main.width,
        height = main.height;

    var offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes['style'] = joinStyles(_extends({}, styles, {
      'transform-origin': offset.x + transform.x / 16 + 'em ' + (offset.y + transform.y / 16) + 'em'
    }));
  }

  return [{
    tag: 'svg',
    attributes: attributes,
    children: children
  }];
};

var asSymbol = function (_ref) {
  var prefix = _ref.prefix,
      iconName = _ref.iconName,
      children = _ref.children,
      attributes = _ref.attributes,
      symbol = _ref.symbol;

  var id = symbol === true ? prefix + '-' + config$1.familyPrefix + '-' + iconName : symbol;

  return [{
    tag: 'svg',
    attributes: {
      style: 'display: none;'
    },
    children: [{
      tag: 'symbol',
      attributes: _extends({}, attributes, { id: id }),
      children: children
    }]
  }];
};

function makeInlineSvgAbstract(params) {
  var _params$icons = params.icons,
      main = _params$icons.main,
      mask = _params$icons.mask,
      prefix = params.prefix,
      iconName = params.iconName,
      transform = params.transform,
      symbol = params.symbol,
      title = params.title,
      extra = params.extra,
      _params$watchable = params.watchable,
      watchable = _params$watchable === undefined ? false : _params$watchable;

  var _ref = mask.found ? mask : main,
      width = _ref.width,
      height = _ref.height;

  var widthClass = 'fa-w-' + Math.ceil(width / height * 16);
  var attrClass = [config$1.replacementClass, iconName ? config$1.familyPrefix + '-' + iconName : '', widthClass].concat(extra.classes).join(' ');

  var content = {
    children: [],
    attributes: _extends({}, extra.attributes, {
      'data-prefix': prefix,
      'data-icon': iconName,
      'class': attrClass,
      'role': 'img',
      'xmlns': 'http://www.w3.org/2000/svg',
      'viewBox': '0 0 ' + width + ' ' + height
    })
  };

  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = '';
  }

  if (title) content.children.push({ tag: 'title', attributes: { id: content.attributes['aria-labelledby'] || 'title-' + nextUniqueId() }, children: [title] });

  var args = _extends({}, content, {
    prefix: prefix,
    iconName: iconName,
    main: main,
    mask: mask,
    transform: transform,
    symbol: symbol,
    styles: extra.styles
  });

  var _ref2 = mask.found && main.found ? makeIconMasking(args) : makeIconStandard(args),
      children = _ref2.children,
      attributes = _ref2.attributes;

  args.children = children;
  args.attributes = attributes;

  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}

function makeLayersTextAbstract(params) {
  var content = params.content,
      width = params.width,
      height = params.height,
      transform = params.transform,
      title = params.title,
      extra = params.extra,
      _params$watchable2 = params.watchable,
      watchable = _params$watchable2 === undefined ? false : _params$watchable2;


  var attributes = _extends({}, extra.attributes, title ? { 'title': title } : {}, {
    'class': extra.classes.join(' ')
  });

  if (watchable) {
    attributes[DATA_FA_I2SVG] = '';
  }

  var styles = _extends({}, extra.styles);

  if (transformIsMeaningful(transform)) {
    styles['transform'] = transformForCss({ transform: transform, startCentered: true, width: width, height: height });
    styles['-webkit-transform'] = styles['transform'];
  }

  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];

  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [title] });
  }

  return val;
}

var noop$2 = function noop() {};
var p = config$1.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : { mark: noop$2, measure: noop$2 };
var preamble = 'FA "5.0.13"';

var begin = function begin(name) {
  p.mark(preamble + ' ' + name + ' begins');
  return function () {
    return end(name);
  };
};

var end = function end(name) {
  p.mark(preamble + ' ' + name + ' ends');
  p.measure(preamble + ' ' + name, preamble + ' ' + name + ' begins', preamble + ' ' + name + ' ends');
};

var perf = { begin: begin, end: end };

'use strict';

/**
 * Internal helper to bind a function known to have 4 arguments
 * to a given context.
 */
var bindInternal4 = function bindInternal4 (func, thisContext) {
  return function (a, b, c, d) {
    return func.call(thisContext, a, b, c, d);
  };
};

'use strict';



/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */
var reduce = function fastReduceObject (subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject),
      length = keys.length,
      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
      i, key, result;

  if (initialValue === undefined) {
    i = 1;
    result = subject[keys[0]];
  }
  else {
    i = 0;
    result = initialValue;
  }

  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }

  return result;
};

var styles$2 = namespace.styles;
var shims = namespace.shims;


var _byUnicode = {};
var _byLigature = {};
var _byOldName = {};

var build = function build() {
  var lookup = function lookup(reducer) {
    return reduce(styles$2, function (o, style, prefix) {
      o[prefix] = reduce(style, reducer, {});
      return o;
    }, {});
  };

  _byUnicode = lookup(function (acc, icon, iconName) {
    acc[icon[3]] = iconName;

    return acc;
  });

  _byLigature = lookup(function (acc, icon, iconName) {
    var ligatures = icon[2];

    acc[iconName] = iconName;

    ligatures.forEach(function (ligature) {
      acc[ligature] = iconName;
    });

    return acc;
  });

  var hasRegular = 'far' in styles$2;

  _byOldName = reduce(shims, function (acc, shim) {
    var oldName = shim[0];
    var prefix = shim[1];
    var iconName = shim[2];

    if (prefix === 'far' && !hasRegular) {
      prefix = 'fas';
    }

    acc[oldName] = { prefix: prefix, iconName: iconName };

    return acc;
  }, {});
};

build();

function byUnicode(prefix, unicode) {
  return _byUnicode[prefix][unicode];
}

function byLigature(prefix, ligature) {
  return _byLigature[prefix][ligature];
}

function byOldName(name) {
  return _byOldName[name] || { prefix: null, iconName: null };
}

var styles$1 = namespace.styles;


var emptyCanonicalIcon = function emptyCanonicalIcon() {
  return { prefix: null, iconName: null, rest: [] };
};

function getCanonicalIcon(values) {
  return values.reduce(function (acc, cls) {
    var iconName = getIconName(config$1.familyPrefix, cls);

    if (styles$1[cls]) {
      acc.prefix = cls;
    } else if (iconName) {
      var shim = acc.prefix === 'fa' ? byOldName(iconName) : {};

      acc.iconName = shim.iconName || iconName;
      acc.prefix = shim.prefix || acc.prefix;
    } else if (cls !== config$1.replacementClass && cls.indexOf('fa-w-') !== 0) {
      acc.rest.push(cls);
    }

    return acc;
  }, emptyCanonicalIcon());
}

function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix: prefix,
      iconName: iconName,
      icon: mapping[prefix][iconName]
    };
  }
}

function toHtml(abstractNodes) {
  var tag = abstractNodes.tag,
      _abstractNodes$attrib = abstractNodes.attributes,
      attributes = _abstractNodes$attrib === undefined ? {} : _abstractNodes$attrib,
      _abstractNodes$childr = abstractNodes.children,
      children = _abstractNodes$childr === undefined ? [] : _abstractNodes$childr;


  if (typeof abstractNodes === 'string') {
    return htmlEscape(abstractNodes);
  } else {
    return '<' + tag + ' ' + joinAttributes(attributes) + '>' + children.map(toHtml).join('') + '</' + tag + '>';
  }
}

var noop$1 = function noop() {};

function isWatched(node) {
  var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;

  return typeof i2svg === 'string';
}

function getMutator() {
  if (config$1.autoReplaceSvg === true) {
    return mutators.replace;
  }

  var mutator = mutators[config$1.autoReplaceSvg];

  return mutator || mutators.replace;
}

var mutators = {
  replace: function replace(mutation) {
    var node = mutation[0];
    var abstract = mutation[1];
    var newOuterHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');

    if (node.parentNode && node.outerHTML) {
      node.outerHTML = newOuterHTML + (config$1.keepOriginalSource && node.tagName.toLowerCase() !== 'svg' ? '<!-- ' + node.outerHTML + ' -->' : '');
    } else if (node.parentNode) {
      var newNode = document.createElement('span');
      node.parentNode.replaceChild(newNode, node);
      newNode.outerHTML = newOuterHTML;
    }
  },
  nest: function nest(mutation) {
    var node = mutation[0];
    var abstract = mutation[1];

    // If we already have a replaced node we do not want to continue nesting within it.
    // Short-circuit to the standard replacement
    if (~classArray(node).indexOf(config$1.replacementClass)) {
      return mutators.replace(mutation);
    }

    var forSvg = new RegExp(config$1.familyPrefix + '-.*');

    delete abstract[0].attributes.style;

    var splitClasses = abstract[0].attributes.class.split(' ').reduce(function (acc, cls) {
      if (cls === config$1.replacementClass || cls.match(forSvg)) {
        acc.toSvg.push(cls);
      } else {
        acc.toNode.push(cls);
      }

      return acc;
    }, { toNode: [], toSvg: [] });

    abstract[0].attributes.class = splitClasses.toSvg.join(' ');

    var newInnerHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');
    node.setAttribute('class', splitClasses.toNode.join(' '));
    node.setAttribute(DATA_FA_I2SVG, '');
    node.innerHTML = newInnerHTML;
  }
};

function perform(mutations, callback) {
  var callbackFunction = typeof callback === 'function' ? callback : noop$1;

  if (mutations.length === 0) {
    callbackFunction();
  } else {
    var frame = WINDOW.requestAnimationFrame || function (op) {
      return op();
    };

    frame(function () {
      var mutator = getMutator();
      var mark = perf.begin('mutate');

      mutations.map(mutator);

      mark();

      callbackFunction();
    });
  }
}

var disabled = false;

function disableObservation(operation) {
  disabled = true;
  operation();
  disabled = false;
}

var mo = null;

function observe(options) {
  if (!MUTATION_OBSERVER) return;

  var treeCallback = options.treeCallback,
      nodeCallback = options.nodeCallback,
      pseudoElementsCallback = options.pseudoElementsCallback;


  mo = new MUTATION_OBSERVER(function (objects) {
    if (disabled) return;

    toArray(objects).forEach(function (mutationRecord) {
      if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
        if (config$1.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target);
        }

        treeCallback(mutationRecord.target);
      }

      if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config$1.searchPseudoElements) {
        pseudoElementsCallback(mutationRecord.target.parentNode);
      }

      if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
        if (mutationRecord.attributeName === 'class') {
          var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)),
              prefix = _getCanonicalIcon.prefix,
              iconName = _getCanonicalIcon.iconName;

          if (prefix) mutationRecord.target.setAttribute('data-prefix', prefix);
          if (iconName) mutationRecord.target.setAttribute('data-icon', iconName);
        } else {
          nodeCallback(mutationRecord.target);
        }
      }
    });
  });

  if (!IS_DOM) return;

  mo.observe(DOCUMENT.getElementsByTagName('body')[0], {
    childList: true, attributes: true, characterData: true, subtree: true
  });
}

function disconnect() {
  if (!mo) return;

  mo.disconnect();
}

var styleParser = function (node) {
  var style = node.getAttribute('style');

  var val = [];

  if (style) {
    val = style.split(';').reduce(function (acc, style) {
      var styles = style.split(':');
      var prop = styles[0];
      var value = styles.slice(1);

      if (prop && value.length > 0) {
        acc[prop] = value.join(':').trim();
      }

      return acc;
    }, {});
  }

  return val;
};

function toHex(unicode) {
  var result = '';

  for (var i = 0; i < unicode.length; i++) {
    var hex = unicode.charCodeAt(i).toString(16);
    result += ('000' + hex).slice(-4);
  }

  return result;
}

var classParser = function (node) {
  var existingPrefix = node.getAttribute('data-prefix');
  var existingIconName = node.getAttribute('data-icon');
  var innerText = node.innerText !== undefined ? node.innerText.trim() : '';

  var val = getCanonicalIcon(classArray(node));

  if (existingPrefix && existingIconName) {
    val.prefix = existingPrefix;
    val.iconName = existingIconName;
  }

  if (val.prefix && innerText.length > 1) {
    val.iconName = byLigature(val.prefix, node.innerText);
  } else if (val.prefix && innerText.length === 1) {
    val.iconName = byUnicode(val.prefix, toHex(node.innerText));
  }

  return val;
};

var parseTransformString = function parseTransformString(transformString) {
  var transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };

  if (!transformString) {
    return transform;
  } else {
    return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
      var parts = n.toLowerCase().split('-');
      var first = parts[0];
      var rest = parts.slice(1).join('-');

      if (first && rest === 'h') {
        acc.flipX = true;
        return acc;
      }

      if (first && rest === 'v') {
        acc.flipY = true;
        return acc;
      }

      rest = parseFloat(rest);

      if (isNaN(rest)) {
        return acc;
      }

      switch (first) {
        case 'grow':
          acc.size = acc.size + rest;
          break;
        case 'shrink':
          acc.size = acc.size - rest;
          break;
        case 'left':
          acc.x = acc.x - rest;
          break;
        case 'right':
          acc.x = acc.x + rest;
          break;
        case 'up':
          acc.y = acc.y - rest;
          break;
        case 'down':
          acc.y = acc.y + rest;
          break;
        case 'rotate':
          acc.rotate = acc.rotate + rest;
          break;
      }

      return acc;
    }, transform);
  }
};

var transformParser = function (node) {
  return parseTransformString(node.getAttribute('data-fa-transform'));
};

var symbolParser = function (node) {
  var symbol = node.getAttribute('data-fa-symbol');

  return symbol === null ? false : symbol === '' ? true : symbol;
};

var attributesParser = function (node) {
  var extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
    if (acc.name !== 'class' && acc.name !== 'style') {
      acc[attr.name] = attr.value;
    }
    return acc;
  }, {});

  var title = node.getAttribute('title');

  if (config$1.autoA11y) {
    if (title) {
      extraAttributes['aria-labelledby'] = config$1.replacementClass + '-title-' + nextUniqueId();
    } else {
      extraAttributes['aria-hidden'] = 'true';
    }
  }

  return extraAttributes;
};

var maskParser = function (node) {
  var mask = node.getAttribute('data-fa-mask');

  if (!mask) {
    return emptyCanonicalIcon();
  } else {
    return getCanonicalIcon(mask.split(' ').map(function (i) {
      return i.trim();
    }));
  }
};

function parseMeta(node) {
  var _classParser = classParser(node),
      iconName = _classParser.iconName,
      prefix = _classParser.prefix,
      extraClasses = _classParser.rest;

  var extraStyles = styleParser(node);
  var transform = transformParser(node);
  var symbol = symbolParser(node);
  var extraAttributes = attributesParser(node);
  var mask = maskParser(node);

  return {
    iconName: iconName,
    title: node.getAttribute('title'),
    prefix: prefix,
    transform: transform,
    symbol: symbol,
    mask: mask,
    extra: {
      classes: extraClasses,
      styles: extraStyles,
      attributes: extraAttributes
    }
  };
}

function MissingIcon(error) {
  this.name = 'MissingIcon';
  this.message = error || 'Icon unavailable';
  this.stack = new Error().stack;
}

MissingIcon.prototype = Object.create(Error.prototype);
MissingIcon.prototype.constructor = MissingIcon;

var FILL = { fill: 'currentColor' };
var ANIMATION_BASE = {
  attributeType: 'XML',
  repeatCount: 'indefinite',
  dur: '2s'
};
var RING = {
  tag: 'path',
  attributes: _extends({}, FILL, {
    d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
  })
};
var OPACITY_ANIMATE = _extends({}, ANIMATION_BASE, {
  attributeName: 'opacity'
});
var DOT = {
  tag: 'circle',
  attributes: _extends({}, FILL, {
    cx: '256',
    cy: '364',
    r: '28'
  }),
  children: [{ tag: 'animate', attributes: _extends({}, ANIMATION_BASE, { attributeName: 'r', values: '28;14;28;28;14;28;' }) }, { tag: 'animate', attributes: _extends({}, OPACITY_ANIMATE, { values: '1;0;1;1;0;1;' }) }]
};
var QUESTION = {
  tag: 'path',
  attributes: _extends({}, FILL, {
    opacity: '1',
    d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
  }),
  children: [{ tag: 'animate', attributes: _extends({}, OPACITY_ANIMATE, { values: '1;0;0;0;0;1;' }) }]
};
var EXCLAMATION = {
  tag: 'path',
  attributes: _extends({}, FILL, {
    opacity: '0',
    d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
  }),
  children: [{ tag: 'animate', attributes: _extends({}, OPACITY_ANIMATE, { values: '0;0;1;1;0;0;' }) }]
};

var missing = { tag: 'g', children: [RING, DOT, QUESTION, EXCLAMATION] };

var styles = namespace.styles;

var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
var FONT_FAMILY_PATTERN = /Font Awesome 5 (Solid|Regular|Light|Brands)/;
var STYLE_TO_PREFIX = {
  'Solid': 'fas',
  'Regular': 'far',
  'Light': 'fal',
  'Brands': 'fab'
};

function findIcon(iconName, prefix) {
  var val = {
    found: false,
    width: 512,
    height: 512,
    icon: missing
  };

  if (iconName && prefix && styles[prefix] && styles[prefix][iconName]) {
    var icon = styles[prefix][iconName];
    var width = icon[0];
    var height = icon[1];
    var vectorData = icon.slice(4);

    val = {
      found: true,
      width: width,
      height: height,
      icon: { tag: 'path', attributes: { fill: 'currentColor', d: vectorData[0] } }
    };
  } else if (iconName && prefix && !config$1.showMissingIcons) {
    throw new MissingIcon('Icon is missing for prefix ' + prefix + ' with icon name ' + iconName);
  }

  return val;
}

function generateSvgReplacementMutation(node, nodeMeta) {
  var iconName = nodeMeta.iconName,
      title = nodeMeta.title,
      prefix = nodeMeta.prefix,
      transform = nodeMeta.transform,
      symbol = nodeMeta.symbol,
      mask = nodeMeta.mask,
      extra = nodeMeta.extra;


  return [node, makeInlineSvgAbstract({
    icons: {
      main: findIcon(iconName, prefix),
      mask: findIcon(mask.iconName, mask.prefix)
    },
    prefix: prefix,
    iconName: iconName,
    transform: transform,
    symbol: symbol,
    mask: mask,
    title: title,
    extra: extra,
    watchable: true
  })];
}

function generateLayersText(node, nodeMeta) {
  var title = nodeMeta.title,
      transform = nodeMeta.transform,
      extra = nodeMeta.extra;


  var width = null;
  var height = null;

  if (IS_IE) {
    var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
    var boundingClientRect = node.getBoundingClientRect();
    width = boundingClientRect.width / computedFontSize;
    height = boundingClientRect.height / computedFontSize;
  }

  if (config$1.autoA11y && !title) {
    extra.attributes['aria-hidden'] = 'true';
  }

  return [node, makeLayersTextAbstract({
    content: node.innerHTML,
    width: width,
    height: height,
    transform: transform,
    title: title,
    extra: extra,
    watchable: true
  })];
}

function generateMutation(node) {
  var nodeMeta = parseMeta(node);

  if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
    return generateLayersText(node, nodeMeta);
  } else {
    return generateSvgReplacementMutation(node, nodeMeta);
  }
}

function remove(node) {
  if (typeof node.remove === 'function') {
    node.remove();
  } else if (node && node.parentNode) {
    node.parentNode.removeChild(node);
  }
}

function searchPseudoElements(root) {
  if (!IS_DOM) return;

  var end = perf.begin('searchPseudoElements');

  disableObservation(function () {
    toArray(root.querySelectorAll('*')).forEach(function (node) {
      [':before', ':after'].forEach(function (pos) {
        var styles = WINDOW.getComputedStyle(node, pos);
        var fontFamily = styles.getPropertyValue('font-family').match(FONT_FAMILY_PATTERN);
        var children = toArray(node.children);
        var pseudoElement = children.filter(function (c) {
          return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === pos;
        })[0];

        if (pseudoElement) {
          if (pseudoElement.nextSibling && pseudoElement.nextSibling.textContent.indexOf(DATA_FA_PSEUDO_ELEMENT) > -1) {
            remove(pseudoElement.nextSibling);
          }
          remove(pseudoElement);
          pseudoElement = null;
        }

        if (fontFamily && !pseudoElement) {
          var content = styles.getPropertyValue('content');
          var i = DOCUMENT.createElement('i');
          i.setAttribute('class', '' + STYLE_TO_PREFIX[fontFamily[1]]);
          i.setAttribute(DATA_FA_PSEUDO_ELEMENT, pos);
          i.innerText = content.length === 3 ? content.substr(1, 1) : content;
          if (pos === ':before') {
            node.insertBefore(i, node.firstChild);
          } else {
            node.appendChild(i);
          }
        }
      });
    });
  });

  end();
}

function onTree(root) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (!IS_DOM) return;

  var htmlClassList = DOCUMENT.documentElement.classList;
  var hclAdd = function hclAdd(suffix) {
    return htmlClassList.add(HTML_CLASS_I2SVG_BASE_CLASS + '-' + suffix);
  };
  var hclRemove = function hclRemove(suffix) {
    return htmlClassList.remove(HTML_CLASS_I2SVG_BASE_CLASS + '-' + suffix);
  };
  var prefixes = Object.keys(styles);
  var prefixesDomQuery = ['.' + LAYERS_TEXT_CLASSNAME + ':not([' + DATA_FA_I2SVG + '])'].concat(prefixes.map(function (p) {
    return '.' + p + ':not([' + DATA_FA_I2SVG + '])';
  })).join(', ');

  if (prefixesDomQuery.length === 0) {
    return;
  }

  var candidates = toArray(root.querySelectorAll(prefixesDomQuery));

  if (candidates.length > 0) {
    hclAdd('pending');
    hclRemove('complete');
  } else {
    return;
  }

  var mark = perf.begin('onTree');

  var mutations = candidates.reduce(function (acc, node) {
    try {
      var mutation = generateMutation(node);

      if (mutation) {
        acc.push(mutation);
      }
    } catch (e) {
      if (!PRODUCTION) {
        if (e instanceof MissingIcon) {
          console.error(e);
        }
      }
    }

    return acc;
  }, []);

  mark();

  perform(mutations, function () {
    hclAdd('active');
    hclAdd('complete');
    hclRemove('pending');

    if (typeof callback === 'function') callback();
  });
}

function onNode(node) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  var mutation = generateMutation(node);

  if (mutation) {
    perform([mutation], callback);
  }
}

var baseStyles = "svg:not(:root).svg-inline--fa {\n  overflow: visible; }\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -.125em; }\n  .svg-inline--fa.fa-lg {\n    vertical-align: -.225em; }\n  .svg-inline--fa.fa-w-1 {\n    width: 0.0625em; }\n  .svg-inline--fa.fa-w-2 {\n    width: 0.125em; }\n  .svg-inline--fa.fa-w-3 {\n    width: 0.1875em; }\n  .svg-inline--fa.fa-w-4 {\n    width: 0.25em; }\n  .svg-inline--fa.fa-w-5 {\n    width: 0.3125em; }\n  .svg-inline--fa.fa-w-6 {\n    width: 0.375em; }\n  .svg-inline--fa.fa-w-7 {\n    width: 0.4375em; }\n  .svg-inline--fa.fa-w-8 {\n    width: 0.5em; }\n  .svg-inline--fa.fa-w-9 {\n    width: 0.5625em; }\n  .svg-inline--fa.fa-w-10 {\n    width: 0.625em; }\n  .svg-inline--fa.fa-w-11 {\n    width: 0.6875em; }\n  .svg-inline--fa.fa-w-12 {\n    width: 0.75em; }\n  .svg-inline--fa.fa-w-13 {\n    width: 0.8125em; }\n  .svg-inline--fa.fa-w-14 {\n    width: 0.875em; }\n  .svg-inline--fa.fa-w-15 {\n    width: 0.9375em; }\n  .svg-inline--fa.fa-w-16 {\n    width: 1em; }\n  .svg-inline--fa.fa-w-17 {\n    width: 1.0625em; }\n  .svg-inline--fa.fa-w-18 {\n    width: 1.125em; }\n  .svg-inline--fa.fa-w-19 {\n    width: 1.1875em; }\n  .svg-inline--fa.fa-w-20 {\n    width: 1.25em; }\n  .svg-inline--fa.fa-pull-left {\n    margin-right: .3em;\n    width: auto; }\n  .svg-inline--fa.fa-pull-right {\n    margin-left: .3em;\n    width: auto; }\n  .svg-inline--fa.fa-border {\n    height: 1.5em; }\n  .svg-inline--fa.fa-li {\n    width: 2em; }\n  .svg-inline--fa.fa-fw {\n    width: 1.25em; }\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -.125em;\n  width: 1em; }\n  .fa-layers svg.svg-inline--fa {\n    -webkit-transform-origin: center center;\n            transform-origin: center center; }\n\n.fa-layers-text, .fa-layers-counter {\n  display: inline-block;\n  position: absolute;\n  text-align: center; }\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center; }\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: .25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right; }\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right; }\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left; }\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right; }\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left; }\n\n.fa-lg {\n  font-size: 1.33333em;\n  line-height: 0.75em;\n  vertical-align: -.0667em; }\n\n.fa-xs {\n  font-size: .75em; }\n\n.fa-sm {\n  font-size: .875em; }\n\n.fa-1x {\n  font-size: 1em; }\n\n.fa-2x {\n  font-size: 2em; }\n\n.fa-3x {\n  font-size: 3em; }\n\n.fa-4x {\n  font-size: 4em; }\n\n.fa-5x {\n  font-size: 5em; }\n\n.fa-6x {\n  font-size: 6em; }\n\n.fa-7x {\n  font-size: 7em; }\n\n.fa-8x {\n  font-size: 8em; }\n\n.fa-9x {\n  font-size: 9em; }\n\n.fa-10x {\n  font-size: 10em; }\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em; }\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0; }\n  .fa-ul > li {\n    position: relative; }\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit; }\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: .1em;\n  padding: .2em .25em .15em; }\n\n.fa-pull-left {\n  float: left; }\n\n.fa-pull-right {\n  float: right; }\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: .3em; }\n\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: .3em; }\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear; }\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8); }\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg); }\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1); }\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1); }\n\n.fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1); }\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  -webkit-filter: none;\n          filter: none; }\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2em; }\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1em; }\n\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2em; }\n\n.fa-inverse {\n  color: #fff; }\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto; }\n";

var css = function () {
  var dfp = DEFAULT_FAMILY_PREFIX;
  var drc = DEFAULT_REPLACEMENT_CLASS;
  var fp = config$1.familyPrefix;
  var rc = config$1.replacementClass;
  var s = baseStyles;

  if (fp !== dfp || rc !== drc) {
    var dPatt = new RegExp('\\.' + dfp + '\\-', 'g');
    var rPatt = new RegExp('\\.' + drc, 'g');

    s = s.replace(dPatt, '.' + fp + '-').replace(rPatt, '.' + rc);
  }

  return s;
};

function define(prefix, icons) {
  var normalized = Object.keys(icons).reduce(function (acc, iconName) {
    var icon = icons[iconName];
    var expanded = !!icon.icon;

    if (expanded) {
      acc[icon.iconName] = icon.icon;
    } else {
      acc[iconName] = icon;
    }
    return acc;
  }, {});

  if (typeof namespace.hooks.addPack === 'function') {
    namespace.hooks.addPack(prefix, normalized);
  } else {
    namespace.styles[prefix] = _extends({}, namespace.styles[prefix] || {}, normalized);
  }

  /**
   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
   * for `fas` so we'll easy the upgrade process for our users by automatically defining
   * this as well.
   */
  if (prefix === 'fas') {
    define('fa', icons);
  }
}

var Library = function () {
  function Library() {
    classCallCheck(this, Library);

    this.definitions = {};
  }

  createClass(Library, [{
    key: 'add',
    value: function add() {
      var _this = this;

      for (var _len = arguments.length, definitions = Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }

      var additions = definitions.reduce(this._pullDefinitions, {});

      Object.keys(additions).forEach(function (key) {
        _this.definitions[key] = _extends({}, _this.definitions[key] || {}, additions[key]);
        define(key, additions[key]);
      });
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.definitions = {};
    }
  }, {
    key: '_pullDefinitions',
    value: function _pullDefinitions(additions, definition) {
      var normalized = definition.prefix && definition.iconName && definition.icon ? { 0: definition } : definition;

      Object.keys(normalized).map(function (key) {
        var _normalized$key = normalized[key],
            prefix = _normalized$key.prefix,
            iconName = _normalized$key.iconName,
            icon = _normalized$key.icon;


        if (!additions[prefix]) additions[prefix] = {};

        additions[prefix][iconName] = icon;
      });

      return additions;
    }
  }]);
  return Library;
}();

function prepIcon(icon) {
  var width = icon[0];
  var height = icon[1];
  var vectorData = icon.slice(4);

  return {
    found: true,
    width: width,
    height: height,
    icon: { tag: 'path', attributes: { fill: 'currentColor', d: vectorData[0] } }
  };
}

var _cssInserted = false;

function ensureCss() {
  if (!config$1.autoAddCss) {
    return;
  }

  if (!_cssInserted) {
    insertCss(css());
  }

  _cssInserted = true;
}

function apiObject(val, abstractCreator) {
  Object.defineProperty(val, 'abstract', {
    get: abstractCreator
  });

  Object.defineProperty(val, 'html', {
    get: function get() {
      return val.abstract.map(function (a) {
        return toHtml(a);
      });
    }
  });

  Object.defineProperty(val, 'node', {
    get: function get() {
      if (!IS_DOM) return;

      var container = DOCUMENT.createElement('div');
      container.innerHTML = val.html;
      return container.children;
    }
  });

  return val;
}

function findIconDefinition(params) {
  var _params$prefix = params.prefix,
      prefix = _params$prefix === undefined ? 'fa' : _params$prefix,
      iconName = params.iconName;


  if (!iconName) return;

  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}

function resolveIcons(next) {
  return function (maybeIconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});

    var mask = params.mask;


    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }

    return next(iconDefinition, _extends({}, params, { mask: mask }));
  };
}

var library = new Library();

var noAuto = function noAuto() {
  auto(false);
  disconnect();
};

var dom = {
  i2svg: function i2svg() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (IS_DOM) {
      ensureCss();

      var _params$node = params.node,
          node = _params$node === undefined ? DOCUMENT : _params$node,
          _params$callback = params.callback,
          callback = _params$callback === undefined ? function () {} : _params$callback;


      if (config$1.searchPseudoElements) {
        searchPseudoElements(node);
      }

      onTree(node, callback);
    }
  },

  css: css,

  insertCss: function insertCss$$1() {
    insertCss(css());
  }
};

var parse = {
  transform: function transform(transformString) {
    return parseTransformString(transformString);
  }
};

var icon = resolveIcons(function (iconDefinition) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform = params.transform,
      transform = _params$transform === undefined ? meaninglessTransform : _params$transform,
      _params$symbol = params.symbol,
      symbol = _params$symbol === undefined ? false : _params$symbol,
      _params$mask = params.mask,
      mask = _params$mask === undefined ? null : _params$mask,
      _params$title = params.title,
      title = _params$title === undefined ? null : _params$title,
      _params$classes = params.classes,
      classes = _params$classes === undefined ? [] : _params$classes,
      _params$attributes = params.attributes,
      attributes = _params$attributes === undefined ? {} : _params$attributes,
      _params$styles = params.styles,
      styles = _params$styles === undefined ? {} : _params$styles;


  if (!iconDefinition) return;

  var prefix = iconDefinition.prefix,
      iconName = iconDefinition.iconName,
      icon = iconDefinition.icon;


  return apiObject(_extends({ type: 'icon' }, iconDefinition), function () {
    ensureCss();

    if (config$1.autoA11y) {
      if (title) {
        attributes['aria-labelledby'] = config$1.replacementClass + '-title-' + nextUniqueId();
      } else {
        attributes['aria-hidden'] = 'true';
      }
    }

    return makeInlineSvgAbstract({
      icons: {
        main: prepIcon(icon),
        mask: mask ? prepIcon(mask.icon) : { found: false, width: null, height: null, icon: {} }
      },
      prefix: prefix,
      iconName: iconName,
      transform: _extends({}, meaninglessTransform, transform),
      symbol: symbol,
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: classes
      }
    });
  });
});

var text = function text(content) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform2 = params.transform,
      transform = _params$transform2 === undefined ? meaninglessTransform : _params$transform2,
      _params$title2 = params.title,
      title = _params$title2 === undefined ? null : _params$title2,
      _params$classes2 = params.classes,
      classes = _params$classes2 === undefined ? [] : _params$classes2,
      _params$attributes2 = params.attributes,
      attributes = _params$attributes2 === undefined ? {} : _params$attributes2,
      _params$styles2 = params.styles,
      styles = _params$styles2 === undefined ? {} : _params$styles2;


  return apiObject({ type: 'text', content: content }, function () {
    ensureCss();

    return makeLayersTextAbstract({
      content: content,
      transform: _extends({}, meaninglessTransform, transform),
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: [config$1.familyPrefix + '-layers-text'].concat(toConsumableArray(classes))
      }
    });
  });
};

var layer = function layer(assembler) {
  return apiObject({ type: 'layer' }, function () {
    ensureCss();

    var children = [];

    assembler(function (args) {
      Array.isArray(args) ? args.map(function (a) {
        children = children.concat(a.abstract);
      }) : children = children.concat(args.abstract);
    });

    return [{
      tag: 'span',
      attributes: { class: config$1.familyPrefix + '-layers' },
      children: children
    }];
  });
};

var api$1 = {
  noAuto: noAuto,
  dom: dom,
  library: library,
  parse: parse,
  findIconDefinition: findIconDefinition,
  icon: icon,
  text: text,
  layer: layer
};

var autoReplace = function autoReplace() {
  if (IS_DOM && config$1.autoReplaceSvg) api$1.dom.i2svg({ node: DOCUMENT });
};

function bootstrap() {
  if (IS_BROWSER) {
    if (!WINDOW.FontAwesome) {
      WINDOW.FontAwesome = api$1;
    }

    domready(function () {
      if (Object.keys(namespace.styles).length > 0) {
        autoReplace();
      }

      if (config$1.observeMutations && typeof MutationObserver === 'function') {
        observe({
          treeCallback: onTree,
          nodeCallback: onNode,
          pseudoElementsCallback: searchPseudoElements
        });
      }
    });
  }

  namespace.hooks = _extends({}, namespace.hooks, {

    addPack: function addPack(prefix, icons) {
      namespace.styles[prefix] = _extends({}, namespace.styles[prefix] || {}, icons);

      build();
      autoReplace();
    },

    addShims: function addShims(shims) {
      var _namespace$shims;

      (_namespace$shims = namespace.shims).push.apply(_namespace$shims, toConsumableArray(shims));

      build();
      autoReplace();
    }
  });
}

Object.defineProperty(api$1, 'config', {
  get: function get() {
    return config$1;
  },

  set: function set(newConfig) {
    update(newConfig);
  }
});

if (IS_DOM) bunker(bootstrap);

var config = api$1.config;


/* harmony default export */ __webpack_exports__["default"] = (api$1);


/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fortawesome_fontawesome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome */ "./node_modules/@fortawesome/fontawesome/index.es.js");
/* harmony import */ var _fortawesome_fontawesome_free_brands_faFacebook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-free-brands/faFacebook */ "./node_modules/@fortawesome/fontawesome-free-brands/faFacebook.js");
/* harmony import */ var _fortawesome_fontawesome_free_brands_faFacebook__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_brands_faFacebook__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_fontawesome_free_brands_faInstagram__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-free-brands/faInstagram */ "./node_modules/@fortawesome/fontawesome-free-brands/faInstagram.js");
/* harmony import */ var _fortawesome_fontawesome_free_brands_faInstagram__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_brands_faInstagram__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_fontawesome_free_brands_faLinkedin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-free-brands/faLinkedin */ "./node_modules/@fortawesome/fontawesome-free-brands/faLinkedin.js");
/* harmony import */ var _fortawesome_fontawesome_free_brands_faLinkedin__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_brands_faLinkedin__WEBPACK_IMPORTED_MODULE_3__);




_fortawesome_fontawesome__WEBPACK_IMPORTED_MODULE_0__["default"].library.add([_fortawesome_fontawesome_free_brands_faFacebook__WEBPACK_IMPORTED_MODULE_1___default.a, _fortawesome_fontawesome_free_brands_faInstagram__WEBPACK_IMPORTED_MODULE_2___default.a, _fortawesome_fontawesome_free_brands_faLinkedin__WEBPACK_IMPORTED_MODULE_3___default.a]);

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi ./src/js/app.js ./src/scss/app.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/marcomessa/dev/giochidikim/themes/kim/src/js/app.js */"./src/js/app.js");
module.exports = __webpack_require__(/*! /Users/marcomessa/dev/giochidikim/themes/kim/src/scss/app.scss */"./src/scss/app.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlLWJyYW5kcy9mYUZhY2Vib29rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS1icmFuZHMvZmFJbnN0YWdyYW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlLWJyYW5kcy9mYUxpbmtlZGluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUvaW5kZXguZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9hcHAuc2Nzcz8xMzBhIl0sIm5hbWVzIjpbImZvbnRhd2Vzb21lIiwibGlicmFyeSIsImFkZCIsImZhRmFjZWJvb2siLCJmYUluc3RhZ3JhbSIsImZhTGlua2VkaW4iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJC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QSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLLEdBQUcsd0JBQXdCOztBQUVoQzs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUssSUFBSTtBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsb0JBQW9CO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtB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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDs7QUFFQSwrQkFBK0I7O0FBRS9CO0FBQ0EsNENBQTRDLGdDQUFnQzs7QUFFNUU7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVzRjtBQUN2RSxvRUFBSyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDNXdEckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLGdFQUFXLENBQUNDLE9BQVosQ0FBb0JDLEdBQXBCLENBQXdCLENBQUNDLHNGQUFELEVBQWFDLHVGQUFiLEVBQTBCQyxzRkFBMUIsQ0FBeEIsRTs7Ozs7Ozs7Ozs7QUNMQSx5QyIsImZpbGUiOiIvanMvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0geyBwcmVmaXg6ICdmYWInLCBpY29uTmFtZTogJ2ZhY2Vib29rJywgaWNvbjogWzQ0OCwgNTEyLCBbXSwgXCJmMDlhXCIsIFwiTTQ0OCA1Ni43djM5OC41YzAgMTMuNy0xMS4xIDI0LjctMjQuNyAyNC43SDMwOS4xVjMwNi41aDU4LjJsOC43LTY3LjZoLTY3di00My4yYzAtMTkuNiA1LjQtMzIuOSAzMy41LTMyLjloMzUuOHYtNjAuNWMtNi4yLS44LTI3LjQtMi43LTUyLjItMi43LTUxLjYgMC04NyAzMS41LTg3IDg5LjR2NDkuOWgtNTguNHY2Ny42aDU4LjRWNDgwSDI0LjdDMTEuMSA0ODAgMCA0NjguOSAwIDQ1NS4zVjU2LjdDMCA0My4xIDExLjEgMzIgMjQuNyAzMmgzOTguNWMxMy43IDAgMjQuOCAxMS4xIDI0LjggMjQuN3pcIl0gfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgcHJlZml4OiAnZmFiJywgaWNvbk5hbWU6ICdpbnN0YWdyYW0nLCBpY29uOiBbNDQ4LCA1MTIsIFtdLCBcImYxNmRcIiwgXCJNMjI0LjEgMTQxYy02My42IDAtMTE0LjkgNTEuMy0xMTQuOSAxMTQuOXM1MS4zIDExNC45IDExNC45IDExNC45UzMzOSAzMTkuNSAzMzkgMjU1LjkgMjg3LjcgMTQxIDIyNC4xIDE0MXptMCAxODkuNmMtNDEuMSAwLTc0LjctMzMuNS03NC43LTc0LjdzMzMuNS03NC43IDc0LjctNzQuNyA3NC43IDMzLjUgNzQuNyA3NC43LTMzLjYgNzQuNy03NC43IDc0Ljd6bTE0Ni40LTE5NC4zYzAgMTQuOS0xMiAyNi44LTI2LjggMjYuOC0xNC45IDAtMjYuOC0xMi0yNi44LTI2LjhzMTItMjYuOCAyNi44LTI2LjggMjYuOCAxMiAyNi44IDI2Ljh6bTc2LjEgMjcuMmMtMS43LTM1LjktOS45LTY3LjctMzYuMi05My45LTI2LjItMjYuMi01OC0zNC40LTkzLjktMzYuMi0zNy0yLjEtMTQ3LjktMi4xLTE4NC45IDAtMzUuOCAxLjctNjcuNiA5LjktOTMuOSAzNi4xcy0zNC40IDU4LTM2LjIgOTMuOWMtMi4xIDM3LTIuMSAxNDcuOSAwIDE4NC45IDEuNyAzNS45IDkuOSA2Ny43IDM2LjIgOTMuOXM1OCAzNC40IDkzLjkgMzYuMmMzNyAyLjEgMTQ3LjkgMi4xIDE4NC45IDAgMzUuOS0xLjcgNjcuNy05LjkgOTMuOS0zNi4yIDI2LjItMjYuMiAzNC40LTU4IDM2LjItOTMuOSAyLjEtMzcgMi4xLTE0Ny44IDAtMTg0Ljh6TTM5OC44IDM4OGMtNy44IDE5LjYtMjIuOSAzNC43LTQyLjYgNDIuNi0yOS41IDExLjctOTkuNSA5LTEzMi4xIDlzLTEwMi43IDIuNi0xMzIuMS05Yy0xOS42LTcuOC0zNC43LTIyLjktNDIuNi00Mi42LTExLjctMjkuNS05LTk5LjUtOS0xMzIuMXMtMi42LTEwMi43IDktMTMyLjFjNy44LTE5LjYgMjIuOS0zNC43IDQyLjYtNDIuNiAyOS41LTExLjcgOTkuNS05IDEzMi4xLTlzMTAyLjctMi42IDEzMi4xIDljMTkuNiA3LjggMzQuNyAyMi45IDQyLjYgNDIuNiAxMS43IDI5LjUgOSA5OS41IDkgMTMyLjFzMi43IDEwMi43LTkgMTMyLjF6XCJdIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IHByZWZpeDogJ2ZhYicsIGljb25OYW1lOiAnbGlua2VkaW4nLCBpY29uOiBbNDQ4LCA1MTIsIFtdLCBcImYwOGNcIiwgXCJNNDE2IDMySDMxLjlDMTQuMyAzMiAwIDQ2LjUgMCA2NC4zdjM4My40QzAgNDY1LjUgMTQuMyA0ODAgMzEuOSA0ODBINDE2YzE3LjYgMCAzMi0xNC41IDMyLTMyLjNWNjQuM2MwLTE3LjgtMTQuNC0zMi4zLTMyLTMyLjN6TTEzNS40IDQxNkg2OVYyMDIuMmg2Ni41VjQxNnptLTMzLjItMjQzYy0yMS4zIDAtMzguNS0xNy4zLTM4LjUtMzguNVM4MC45IDk2IDEwMi4yIDk2YzIxLjIgMCAzOC41IDE3LjMgMzguNSAzOC41IDAgMjEuMy0xNy4yIDM4LjUtMzguNSAzOC41em0yODIuMSAyNDNoLTY2LjRWMzEyYzAtMjQuOC0uNS01Ni43LTM0LjUtNTYuNy0zNC42IDAtMzkuOSAyNy0zOS45IDU0LjlWNDE2aC02Ni40VjIwMi4yaDYzLjd2MjkuMmguOWM4LjktMTYuOCAzMC42LTM0LjUgNjIuOS0zNC41IDY3LjIgMCA3OS43IDQ0LjMgNzkuNyAxMDEuOVY0MTZ6XCJdIH07IiwiLyohXG4gKiBGb250IEF3ZXNvbWUgRnJlZSA1LjAuMTMgYnkgQGZvbnRhd2Vzb21lIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb21cbiAqIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKVxuICovXG52YXIgbm9vcCA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcblxudmFyIF9XSU5ET1cgPSB7fTtcbnZhciBfRE9DVU1FTlQgPSB7fTtcbnZhciBfTVVUQVRJT05fT0JTRVJWRVIkMSA9IG51bGw7XG52YXIgX1BFUkZPUk1BTkNFID0geyBtYXJrOiBub29wLCBtZWFzdXJlOiBub29wIH07XG5cbnRyeSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgX1dJTkRPVyA9IHdpbmRvdztcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIF9ET0NVTUVOVCA9IGRvY3VtZW50O1xuICBpZiAodHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnKSBfTVVUQVRJT05fT0JTRVJWRVIkMSA9IE11dGF0aW9uT2JzZXJ2ZXI7XG4gIGlmICh0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnKSBfUEVSRk9STUFOQ0UgPSBwZXJmb3JtYW5jZTtcbn0gY2F0Y2ggKGUpIHt9XG5cbnZhciBfcmVmID0gX1dJTkRPVy5uYXZpZ2F0b3IgfHwge307XG52YXIgX3JlZiR1c2VyQWdlbnQgPSBfcmVmLnVzZXJBZ2VudDtcbnZhciB1c2VyQWdlbnQgPSBfcmVmJHVzZXJBZ2VudCA9PT0gdW5kZWZpbmVkID8gJycgOiBfcmVmJHVzZXJBZ2VudDtcblxudmFyIFdJTkRPVyA9IF9XSU5ET1c7XG52YXIgRE9DVU1FTlQgPSBfRE9DVU1FTlQ7XG52YXIgTVVUQVRJT05fT0JTRVJWRVIgPSBfTVVUQVRJT05fT0JTRVJWRVIkMTtcbnZhciBQRVJGT1JNQU5DRSA9IF9QRVJGT1JNQU5DRTtcbnZhciBJU19CUk9XU0VSID0gISFXSU5ET1cuZG9jdW1lbnQ7XG52YXIgSVNfRE9NID0gISFET0NVTUVOVC5kb2N1bWVudEVsZW1lbnQgJiYgISFET0NVTUVOVC5oZWFkICYmIHR5cGVvZiBET0NVTUVOVC5hZGRFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBET0NVTUVOVC5jcmVhdGVFbGVtZW50ID09PSAnZnVuY3Rpb24nO1xudmFyIElTX0lFID0gfnVzZXJBZ2VudC5pbmRleE9mKCdNU0lFJykgfHwgfnVzZXJBZ2VudC5pbmRleE9mKCdUcmlkZW50LycpO1xuXG52YXIgTkFNRVNQQUNFX0lERU5USUZJRVIgPSAnX19fRk9OVF9BV0VTT01FX19fJztcbnZhciBVTklUU19JTl9HUklEID0gMTY7XG52YXIgREVGQVVMVF9GQU1JTFlfUFJFRklYID0gJ2ZhJztcbnZhciBERUZBVUxUX1JFUExBQ0VNRU5UX0NMQVNTID0gJ3N2Zy1pbmxpbmUtLWZhJztcbnZhciBEQVRBX0ZBX0kyU1ZHID0gJ2RhdGEtZmEtaTJzdmcnO1xudmFyIERBVEFfRkFfUFNFVURPX0VMRU1FTlQgPSAnZGF0YS1mYS1wc2V1ZG8tZWxlbWVudCc7XG52YXIgSFRNTF9DTEFTU19JMlNWR19CQVNFX0NMQVNTID0gJ2ZvbnRhd2Vzb21lLWkyc3ZnJztcblxudmFyIFBST0RVQ1RJT04gPSBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbic7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0oKTtcblxudmFyIG9uZVRvVGVuID0gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwXTtcbnZhciBvbmVUb1R3ZW50eSA9IG9uZVRvVGVuLmNvbmNhdChbMTEsIDEyLCAxMywgMTQsIDE1LCAxNiwgMTcsIDE4LCAxOSwgMjBdKTtcblxudmFyIEFUVFJJQlVURVNfV0FUQ0hFRF9GT1JfTVVUQVRJT04gPSBbJ2NsYXNzJywgJ2RhdGEtcHJlZml4JywgJ2RhdGEtaWNvbicsICdkYXRhLWZhLXRyYW5zZm9ybScsICdkYXRhLWZhLW1hc2snXTtcblxudmFyIFJFU0VSVkVEX0NMQVNTRVMgPSBbJ3hzJywgJ3NtJywgJ2xnJywgJ2Z3JywgJ3VsJywgJ2xpJywgJ2JvcmRlcicsICdwdWxsLWxlZnQnLCAncHVsbC1yaWdodCcsICdzcGluJywgJ3B1bHNlJywgJ3JvdGF0ZS05MCcsICdyb3RhdGUtMTgwJywgJ3JvdGF0ZS0yNzAnLCAnZmxpcC1ob3Jpem9udGFsJywgJ2ZsaXAtdmVydGljYWwnLCAnc3RhY2snLCAnc3RhY2stMXgnLCAnc3RhY2stMngnLCAnaW52ZXJzZScsICdsYXllcnMnLCAnbGF5ZXJzLXRleHQnLCAnbGF5ZXJzLWNvdW50ZXInXS5jb25jYXQob25lVG9UZW4ubWFwKGZ1bmN0aW9uIChuKSB7XG4gIHJldHVybiBuICsgJ3gnO1xufSkpLmNvbmNhdChvbmVUb1R3ZW50eS5tYXAoZnVuY3Rpb24gKG4pIHtcbiAgcmV0dXJuICd3LScgKyBuO1xufSkpO1xuXG52YXIgY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxudmFyIGNyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG5cblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cblxuXG52YXIgdG9Db25zdW1hYmxlQXJyYXkgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuXG4gICAgcmV0dXJuIGFycjI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oYXJyKTtcbiAgfVxufTtcblxudmFyIGluaXRpYWwgPSBXSU5ET1cuRm9udEF3ZXNvbWVDb25maWcgfHwge307XG52YXIgaW5pdGlhbEtleXMgPSBPYmplY3Qua2V5cyhpbml0aWFsKTtcblxudmFyIF9kZWZhdWx0ID0gX2V4dGVuZHMoe1xuICBmYW1pbHlQcmVmaXg6IERFRkFVTFRfRkFNSUxZX1BSRUZJWCxcbiAgcmVwbGFjZW1lbnRDbGFzczogREVGQVVMVF9SRVBMQUNFTUVOVF9DTEFTUyxcbiAgYXV0b1JlcGxhY2VTdmc6IHRydWUsXG4gIGF1dG9BZGRDc3M6IHRydWUsXG4gIGF1dG9BMTF5OiB0cnVlLFxuICBzZWFyY2hQc2V1ZG9FbGVtZW50czogZmFsc2UsXG4gIG9ic2VydmVNdXRhdGlvbnM6IHRydWUsXG4gIGtlZXBPcmlnaW5hbFNvdXJjZTogdHJ1ZSxcbiAgbWVhc3VyZVBlcmZvcm1hbmNlOiBmYWxzZSxcbiAgc2hvd01pc3NpbmdJY29uczogdHJ1ZVxufSwgaW5pdGlhbCk7XG5cbmlmICghX2RlZmF1bHQuYXV0b1JlcGxhY2VTdmcpIF9kZWZhdWx0Lm9ic2VydmVNdXRhdGlvbnMgPSBmYWxzZTtcblxudmFyIGNvbmZpZyQxID0gX2V4dGVuZHMoe30sIF9kZWZhdWx0KTtcblxuV0lORE9XLkZvbnRBd2Vzb21lQ29uZmlnID0gY29uZmlnJDE7XG5cbmZ1bmN0aW9uIHVwZGF0ZShuZXdDb25maWcpIHtcbiAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHZhciBfcGFyYW1zJGFzTmV3RGVmYXVsdCA9IHBhcmFtcy5hc05ld0RlZmF1bHQsXG4gICAgICBhc05ld0RlZmF1bHQgPSBfcGFyYW1zJGFzTmV3RGVmYXVsdCA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfcGFyYW1zJGFzTmV3RGVmYXVsdDtcblxuICB2YXIgdmFsaWRLZXlzID0gT2JqZWN0LmtleXMoY29uZmlnJDEpO1xuICB2YXIgb2sgPSBhc05ld0RlZmF1bHQgPyBmdW5jdGlvbiAoaykge1xuICAgIHJldHVybiB+dmFsaWRLZXlzLmluZGV4T2YoaykgJiYgIX5pbml0aWFsS2V5cy5pbmRleE9mKGspO1xuICB9IDogZnVuY3Rpb24gKGspIHtcbiAgICByZXR1cm4gfnZhbGlkS2V5cy5pbmRleE9mKGspO1xuICB9O1xuXG4gIE9iamVjdC5rZXlzKG5ld0NvbmZpZykuZm9yRWFjaChmdW5jdGlvbiAoY29uZmlnS2V5KSB7XG4gICAgaWYgKG9rKGNvbmZpZ0tleSkpIGNvbmZpZyQxW2NvbmZpZ0tleV0gPSBuZXdDb25maWdbY29uZmlnS2V5XTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGF1dG8odmFsdWUpIHtcbiAgdXBkYXRlKHtcbiAgICBhdXRvUmVwbGFjZVN2ZzogdmFsdWUsXG4gICAgb2JzZXJ2ZU11dGF0aW9uczogdmFsdWVcbiAgfSk7XG59XG5cbnZhciB3ID0gV0lORE9XIHx8IHt9O1xuXG5pZiAoIXdbTkFNRVNQQUNFX0lERU5USUZJRVJdKSB3W05BTUVTUEFDRV9JREVOVElGSUVSXSA9IHt9O1xuaWYgKCF3W05BTUVTUEFDRV9JREVOVElGSUVSXS5zdHlsZXMpIHdbTkFNRVNQQUNFX0lERU5USUZJRVJdLnN0eWxlcyA9IHt9O1xuaWYgKCF3W05BTUVTUEFDRV9JREVOVElGSUVSXS5ob29rcykgd1tOQU1FU1BBQ0VfSURFTlRJRklFUl0uaG9va3MgPSB7fTtcbmlmICghd1tOQU1FU1BBQ0VfSURFTlRJRklFUl0uc2hpbXMpIHdbTkFNRVNQQUNFX0lERU5USUZJRVJdLnNoaW1zID0gW107XG5cbnZhciBuYW1lc3BhY2UgPSB3W05BTUVTUEFDRV9JREVOVElGSUVSXTtcblxudmFyIGZ1bmN0aW9ucyA9IFtdO1xudmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gbGlzdGVuZXIoKSB7XG4gIERPQ1VNRU5ULnJlbW92ZUV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBsaXN0ZW5lcik7XG4gIGxvYWRlZCA9IDE7XG4gIGZ1bmN0aW9ucy5tYXAoZnVuY3Rpb24gKGZuKSB7XG4gICAgcmV0dXJuIGZuKCk7XG4gIH0pO1xufTtcblxudmFyIGxvYWRlZCA9IGZhbHNlO1xuXG5pZiAoSVNfRE9NKSB7XG4gIGxvYWRlZCA9IChET0NVTUVOVC5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGwgPyAvXmxvYWRlZHxeYy8gOiAvXmxvYWRlZHxeaXxeYy8pLnRlc3QoRE9DVU1FTlQucmVhZHlTdGF0ZSk7XG5cbiAgaWYgKCFsb2FkZWQpIERPQ1VNRU5ULmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBsaXN0ZW5lcik7XG59XG5cbnZhciBkb21yZWFkeSA9IGZ1bmN0aW9uIChmbikge1xuICBpZiAoIUlTX0RPTSkgcmV0dXJuO1xuICBsb2FkZWQgPyBzZXRUaW1lb3V0KGZuLCAwKSA6IGZ1bmN0aW9ucy5wdXNoKGZuKTtcbn07XG5cbnZhciBkID0gVU5JVFNfSU5fR1JJRDtcblxudmFyIG1lYW5pbmdsZXNzVHJhbnNmb3JtID0ge1xuICBzaXplOiAxNixcbiAgeDogMCxcbiAgeTogMCxcbiAgcm90YXRlOiAwLFxuICBmbGlwWDogZmFsc2UsXG4gIGZsaXBZOiBmYWxzZVxufTtcblxuZnVuY3Rpb24gaXNSZXNlcnZlZChuYW1lKSB7XG4gIHJldHVybiB+UkVTRVJWRURfQ0xBU1NFUy5pbmRleE9mKG5hbWUpO1xufVxuXG5mdW5jdGlvbiBidW5rZXIoZm4pIHtcbiAgdHJ5IHtcbiAgICBmbigpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKCFQUk9EVUNUSU9OKSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbnNlcnRDc3MoY3NzKSB7XG4gIGlmICghY3NzIHx8ICFJU19ET00pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgc3R5bGUgPSBET0NVTUVOVC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9jc3MnKTtcbiAgc3R5bGUuaW5uZXJIVE1MID0gY3NzO1xuXG4gIHZhciBoZWFkQ2hpbGRyZW4gPSBET0NVTUVOVC5oZWFkLmNoaWxkTm9kZXM7XG4gIHZhciBiZWZvcmVDaGlsZCA9IG51bGw7XG5cbiAgZm9yICh2YXIgaSA9IGhlYWRDaGlsZHJlbi5sZW5ndGggLSAxOyBpID4gLTE7IGktLSkge1xuICAgIHZhciBjaGlsZCA9IGhlYWRDaGlsZHJlbltpXTtcbiAgICB2YXIgdGFnTmFtZSA9IChjaGlsZC50YWdOYW1lIHx8ICcnKS50b1VwcGVyQ2FzZSgpO1xuICAgIGlmIChbJ1NUWUxFJywgJ0xJTksnXS5pbmRleE9mKHRhZ05hbWUpID4gLTEpIHtcbiAgICAgIGJlZm9yZUNoaWxkID0gY2hpbGQ7XG4gICAgfVxuICB9XG5cbiAgRE9DVU1FTlQuaGVhZC5pbnNlcnRCZWZvcmUoc3R5bGUsIGJlZm9yZUNoaWxkKTtcblxuICByZXR1cm4gY3NzO1xufVxuXG52YXIgX3VuaXF1ZUlkID0gMDtcblxuZnVuY3Rpb24gbmV4dFVuaXF1ZUlkKCkge1xuICBfdW5pcXVlSWQrKztcblxuICByZXR1cm4gX3VuaXF1ZUlkO1xufVxuXG5mdW5jdGlvbiB0b0FycmF5KG9iaikge1xuICB2YXIgYXJyYXkgPSBbXTtcblxuICBmb3IgKHZhciBpID0gKG9iaiB8fCBbXSkubGVuZ3RoID4+PiAwOyBpLS07KSB7XG4gICAgYXJyYXlbaV0gPSBvYmpbaV07XG4gIH1cblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmZ1bmN0aW9uIGNsYXNzQXJyYXkobm9kZSkge1xuICBpZiAobm9kZS5jbGFzc0xpc3QpIHtcbiAgICByZXR1cm4gdG9BcnJheShub2RlLmNsYXNzTGlzdCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChub2RlLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJykuc3BsaXQoJyAnKS5maWx0ZXIoZnVuY3Rpb24gKGkpIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEljb25OYW1lKGZhbWlseVByZWZpeCwgY2xzKSB7XG4gIHZhciBwYXJ0cyA9IGNscy5zcGxpdCgnLScpO1xuICB2YXIgcHJlZml4ID0gcGFydHNbMF07XG4gIHZhciBpY29uTmFtZSA9IHBhcnRzLnNsaWNlKDEpLmpvaW4oJy0nKTtcblxuICBpZiAocHJlZml4ID09PSBmYW1pbHlQcmVmaXggJiYgaWNvbk5hbWUgIT09ICcnICYmICFpc1Jlc2VydmVkKGljb25OYW1lKSkge1xuICAgIHJldHVybiBpY29uTmFtZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5mdW5jdGlvbiBodG1sRXNjYXBlKHN0cikge1xuICByZXR1cm4gKCcnICsgc3RyKS5yZXBsYWNlKC8mL2csICcmYW1wOycpLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKS5yZXBsYWNlKC8nL2csICcmIzM5OycpLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG59XG5cbmZ1bmN0aW9uIGpvaW5BdHRyaWJ1dGVzKGF0dHJpYnV0ZXMpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMgfHwge30pLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBhdHRyaWJ1dGVOYW1lKSB7XG4gICAgcmV0dXJuIGFjYyArIChhdHRyaWJ1dGVOYW1lICsgJz1cIicgKyBodG1sRXNjYXBlKGF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0pICsgJ1wiICcpO1xuICB9LCAnJykudHJpbSgpO1xufVxuXG5mdW5jdGlvbiBqb2luU3R5bGVzKHN0eWxlcykge1xuICByZXR1cm4gT2JqZWN0LmtleXMoc3R5bGVzIHx8IHt9KS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgc3R5bGVOYW1lKSB7XG4gICAgcmV0dXJuIGFjYyArIChzdHlsZU5hbWUgKyAnOiAnICsgc3R5bGVzW3N0eWxlTmFtZV0gKyAnOycpO1xuICB9LCAnJyk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybUlzTWVhbmluZ2Z1bCh0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIHRyYW5zZm9ybS5zaXplICE9PSBtZWFuaW5nbGVzc1RyYW5zZm9ybS5zaXplIHx8IHRyYW5zZm9ybS54ICE9PSBtZWFuaW5nbGVzc1RyYW5zZm9ybS54IHx8IHRyYW5zZm9ybS55ICE9PSBtZWFuaW5nbGVzc1RyYW5zZm9ybS55IHx8IHRyYW5zZm9ybS5yb3RhdGUgIT09IG1lYW5pbmdsZXNzVHJhbnNmb3JtLnJvdGF0ZSB8fCB0cmFuc2Zvcm0uZmxpcFggfHwgdHJhbnNmb3JtLmZsaXBZO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1Gb3JTdmcoX3JlZikge1xuICB2YXIgdHJhbnNmb3JtID0gX3JlZi50cmFuc2Zvcm0sXG4gICAgICBjb250YWluZXJXaWR0aCA9IF9yZWYuY29udGFpbmVyV2lkdGgsXG4gICAgICBpY29uV2lkdGggPSBfcmVmLmljb25XaWR0aDtcblxuICB2YXIgb3V0ZXIgPSB7XG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKCcgKyBjb250YWluZXJXaWR0aCAvIDIgKyAnIDI1NiknXG4gIH07XG4gIHZhciBpbm5lclRyYW5zbGF0ZSA9ICd0cmFuc2xhdGUoJyArIHRyYW5zZm9ybS54ICogMzIgKyAnLCAnICsgdHJhbnNmb3JtLnkgKiAzMiArICcpICc7XG4gIHZhciBpbm5lclNjYWxlID0gJ3NjYWxlKCcgKyB0cmFuc2Zvcm0uc2l6ZSAvIDE2ICogKHRyYW5zZm9ybS5mbGlwWCA/IC0xIDogMSkgKyAnLCAnICsgdHJhbnNmb3JtLnNpemUgLyAxNiAqICh0cmFuc2Zvcm0uZmxpcFkgPyAtMSA6IDEpICsgJykgJztcbiAgdmFyIGlubmVyUm90YXRlID0gJ3JvdGF0ZSgnICsgdHJhbnNmb3JtLnJvdGF0ZSArICcgMCAwKSc7XG4gIHZhciBpbm5lciA9IHtcbiAgICB0cmFuc2Zvcm06IGlubmVyVHJhbnNsYXRlICsgJyAnICsgaW5uZXJTY2FsZSArICcgJyArIGlubmVyUm90YXRlXG4gIH07XG4gIHZhciBwYXRoID0ge1xuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgnICsgaWNvbldpZHRoIC8gMiAqIC0xICsgJyAtMjU2KSdcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBvdXRlcjogb3V0ZXIsXG4gICAgaW5uZXI6IGlubmVyLFxuICAgIHBhdGg6IHBhdGhcbiAgfTtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtRm9yQ3NzKF9yZWYyKSB7XG4gIHZhciB0cmFuc2Zvcm0gPSBfcmVmMi50cmFuc2Zvcm0sXG4gICAgICBfcmVmMiR3aWR0aCA9IF9yZWYyLndpZHRoLFxuICAgICAgd2lkdGggPSBfcmVmMiR3aWR0aCA9PT0gdW5kZWZpbmVkID8gVU5JVFNfSU5fR1JJRCA6IF9yZWYyJHdpZHRoLFxuICAgICAgX3JlZjIkaGVpZ2h0ID0gX3JlZjIuaGVpZ2h0LFxuICAgICAgaGVpZ2h0ID0gX3JlZjIkaGVpZ2h0ID09PSB1bmRlZmluZWQgPyBVTklUU19JTl9HUklEIDogX3JlZjIkaGVpZ2h0LFxuICAgICAgX3JlZjIkc3RhcnRDZW50ZXJlZCA9IF9yZWYyLnN0YXJ0Q2VudGVyZWQsXG4gICAgICBzdGFydENlbnRlcmVkID0gX3JlZjIkc3RhcnRDZW50ZXJlZCA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfcmVmMiRzdGFydENlbnRlcmVkO1xuXG4gIHZhciB2YWwgPSAnJztcblxuICBpZiAoc3RhcnRDZW50ZXJlZCAmJiBJU19JRSkge1xuICAgIHZhbCArPSAndHJhbnNsYXRlKCcgKyAodHJhbnNmb3JtLnggLyBkIC0gd2lkdGggLyAyKSArICdlbSwgJyArICh0cmFuc2Zvcm0ueSAvIGQgLSBoZWlnaHQgLyAyKSArICdlbSkgJztcbiAgfSBlbHNlIGlmIChzdGFydENlbnRlcmVkKSB7XG4gICAgdmFsICs9ICd0cmFuc2xhdGUoY2FsYygtNTAlICsgJyArIHRyYW5zZm9ybS54IC8gZCArICdlbSksIGNhbGMoLTUwJSArICcgKyB0cmFuc2Zvcm0ueSAvIGQgKyAnZW0pKSAnO1xuICB9IGVsc2Uge1xuICAgIHZhbCArPSAndHJhbnNsYXRlKCcgKyB0cmFuc2Zvcm0ueCAvIGQgKyAnZW0sICcgKyB0cmFuc2Zvcm0ueSAvIGQgKyAnZW0pICc7XG4gIH1cblxuICB2YWwgKz0gJ3NjYWxlKCcgKyB0cmFuc2Zvcm0uc2l6ZSAvIGQgKiAodHJhbnNmb3JtLmZsaXBYID8gLTEgOiAxKSArICcsICcgKyB0cmFuc2Zvcm0uc2l6ZSAvIGQgKiAodHJhbnNmb3JtLmZsaXBZID8gLTEgOiAxKSArICcpICc7XG4gIHZhbCArPSAncm90YXRlKCcgKyB0cmFuc2Zvcm0ucm90YXRlICsgJ2RlZykgJztcblxuICByZXR1cm4gdmFsO1xufVxuXG52YXIgQUxMX1NQQUNFID0ge1xuICB4OiAwLFxuICB5OiAwLFxuICB3aWR0aDogJzEwMCUnLFxuICBoZWlnaHQ6ICcxMDAlJ1xufTtcblxudmFyIG1ha2VJY29uTWFza2luZyA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBhdHRyaWJ1dGVzID0gX3JlZi5hdHRyaWJ1dGVzLFxuICAgICAgbWFpbiA9IF9yZWYubWFpbixcbiAgICAgIG1hc2sgPSBfcmVmLm1hc2ssXG4gICAgICB0cmFuc2Zvcm0gPSBfcmVmLnRyYW5zZm9ybTtcbiAgdmFyIG1haW5XaWR0aCA9IG1haW4ud2lkdGgsXG4gICAgICBtYWluUGF0aCA9IG1haW4uaWNvbjtcbiAgdmFyIG1hc2tXaWR0aCA9IG1hc2sud2lkdGgsXG4gICAgICBtYXNrUGF0aCA9IG1hc2suaWNvbjtcblxuXG4gIHZhciB0cmFucyA9IHRyYW5zZm9ybUZvclN2Zyh7IHRyYW5zZm9ybTogdHJhbnNmb3JtLCBjb250YWluZXJXaWR0aDogbWFza1dpZHRoLCBpY29uV2lkdGg6IG1haW5XaWR0aCB9KTtcblxuICB2YXIgbWFza1JlY3QgPSB7XG4gICAgdGFnOiAncmVjdCcsXG4gICAgYXR0cmlidXRlczogX2V4dGVuZHMoe30sIEFMTF9TUEFDRSwge1xuICAgICAgZmlsbDogJ3doaXRlJ1xuICAgIH0pXG4gIH07XG4gIHZhciBtYXNrSW5uZXJHcm91cCA9IHtcbiAgICB0YWc6ICdnJyxcbiAgICBhdHRyaWJ1dGVzOiBfZXh0ZW5kcyh7fSwgdHJhbnMuaW5uZXIpLFxuICAgIGNoaWxkcmVuOiBbeyB0YWc6ICdwYXRoJywgYXR0cmlidXRlczogX2V4dGVuZHMoe30sIG1haW5QYXRoLmF0dHJpYnV0ZXMsIHRyYW5zLnBhdGgsIHsgZmlsbDogJ2JsYWNrJyB9KSB9XVxuICB9O1xuICB2YXIgbWFza091dGVyR3JvdXAgPSB7XG4gICAgdGFnOiAnZycsXG4gICAgYXR0cmlidXRlczogX2V4dGVuZHMoe30sIHRyYW5zLm91dGVyKSxcbiAgICBjaGlsZHJlbjogW21hc2tJbm5lckdyb3VwXVxuICB9O1xuICB2YXIgbWFza0lkID0gJ21hc2stJyArIG5leHRVbmlxdWVJZCgpO1xuICB2YXIgY2xpcElkID0gJ2NsaXAtJyArIG5leHRVbmlxdWVJZCgpO1xuICB2YXIgbWFza1RhZyA9IHtcbiAgICB0YWc6ICdtYXNrJyxcbiAgICBhdHRyaWJ1dGVzOiBfZXh0ZW5kcyh7fSwgQUxMX1NQQUNFLCB7XG4gICAgICBpZDogbWFza0lkLFxuICAgICAgbWFza1VuaXRzOiAndXNlclNwYWNlT25Vc2UnLFxuICAgICAgbWFza0NvbnRlbnRVbml0czogJ3VzZXJTcGFjZU9uVXNlJ1xuICAgIH0pLFxuICAgIGNoaWxkcmVuOiBbbWFza1JlY3QsIG1hc2tPdXRlckdyb3VwXVxuICB9O1xuICB2YXIgZGVmcyA9IHtcbiAgICB0YWc6ICdkZWZzJyxcbiAgICBjaGlsZHJlbjogW3sgdGFnOiAnY2xpcFBhdGgnLCBhdHRyaWJ1dGVzOiB7IGlkOiBjbGlwSWQgfSwgY2hpbGRyZW46IFttYXNrUGF0aF0gfSwgbWFza1RhZ11cbiAgfTtcblxuICBjaGlsZHJlbi5wdXNoKGRlZnMsIHsgdGFnOiAncmVjdCcsIGF0dHJpYnV0ZXM6IF9leHRlbmRzKHsgZmlsbDogJ2N1cnJlbnRDb2xvcicsICdjbGlwLXBhdGgnOiAndXJsKCMnICsgY2xpcElkICsgJyknLCBtYXNrOiAndXJsKCMnICsgbWFza0lkICsgJyknIH0sIEFMTF9TUEFDRSkgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgYXR0cmlidXRlczogYXR0cmlidXRlc1xuICB9O1xufTtcblxudmFyIG1ha2VJY29uU3RhbmRhcmQgPSBmdW5jdGlvbiAoX3JlZikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcbiAgICAgIG1haW4gPSBfcmVmLm1haW4sXG4gICAgICB0cmFuc2Zvcm0gPSBfcmVmLnRyYW5zZm9ybSxcbiAgICAgIHN0eWxlcyA9IF9yZWYuc3R5bGVzO1xuXG4gIHZhciBzdHlsZVN0cmluZyA9IGpvaW5TdHlsZXMoc3R5bGVzKTtcblxuICBpZiAoc3R5bGVTdHJpbmcubGVuZ3RoID4gMCkge1xuICAgIGF0dHJpYnV0ZXNbJ3N0eWxlJ10gPSBzdHlsZVN0cmluZztcbiAgfVxuXG4gIGlmICh0cmFuc2Zvcm1Jc01lYW5pbmdmdWwodHJhbnNmb3JtKSkge1xuICAgIHZhciB0cmFucyA9IHRyYW5zZm9ybUZvclN2Zyh7IHRyYW5zZm9ybTogdHJhbnNmb3JtLCBjb250YWluZXJXaWR0aDogbWFpbi53aWR0aCwgaWNvbldpZHRoOiBtYWluLndpZHRoIH0pO1xuICAgIGNoaWxkcmVuLnB1c2goe1xuICAgICAgdGFnOiAnZycsXG4gICAgICBhdHRyaWJ1dGVzOiBfZXh0ZW5kcyh7fSwgdHJhbnMub3V0ZXIpLFxuICAgICAgY2hpbGRyZW46IFt7XG4gICAgICAgIHRhZzogJ2cnLFxuICAgICAgICBhdHRyaWJ1dGVzOiBfZXh0ZW5kcyh7fSwgdHJhbnMuaW5uZXIpLFxuICAgICAgICBjaGlsZHJlbjogW3tcbiAgICAgICAgICB0YWc6IG1haW4uaWNvbi50YWcsXG4gICAgICAgICAgY2hpbGRyZW46IG1haW4uaWNvbi5jaGlsZHJlbixcbiAgICAgICAgICBhdHRyaWJ1dGVzOiBfZXh0ZW5kcyh7fSwgbWFpbi5pY29uLmF0dHJpYnV0ZXMsIHRyYW5zLnBhdGgpXG4gICAgICAgIH1dXG4gICAgICB9XVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNoaWxkcmVuLnB1c2gobWFpbi5pY29uKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXNcbiAgfTtcbn07XG5cbnZhciBhc0ljb24gPSBmdW5jdGlvbiAoX3JlZikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgbWFpbiA9IF9yZWYubWFpbixcbiAgICAgIG1hc2sgPSBfcmVmLm1hc2ssXG4gICAgICBhdHRyaWJ1dGVzID0gX3JlZi5hdHRyaWJ1dGVzLFxuICAgICAgc3R5bGVzID0gX3JlZi5zdHlsZXMsXG4gICAgICB0cmFuc2Zvcm0gPSBfcmVmLnRyYW5zZm9ybTtcblxuICBpZiAodHJhbnNmb3JtSXNNZWFuaW5nZnVsKHRyYW5zZm9ybSkgJiYgbWFpbi5mb3VuZCAmJiAhbWFzay5mb3VuZCkge1xuICAgIHZhciB3aWR0aCA9IG1haW4ud2lkdGgsXG4gICAgICAgIGhlaWdodCA9IG1haW4uaGVpZ2h0O1xuXG4gICAgdmFyIG9mZnNldCA9IHtcbiAgICAgIHg6IHdpZHRoIC8gaGVpZ2h0IC8gMixcbiAgICAgIHk6IDAuNVxuICAgIH07XG4gICAgYXR0cmlidXRlc1snc3R5bGUnXSA9IGpvaW5TdHlsZXMoX2V4dGVuZHMoe30sIHN0eWxlcywge1xuICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOiBvZmZzZXQueCArIHRyYW5zZm9ybS54IC8gMTYgKyAnZW0gJyArIChvZmZzZXQueSArIHRyYW5zZm9ybS55IC8gMTYpICsgJ2VtJ1xuICAgIH0pKTtcbiAgfVxuXG4gIHJldHVybiBbe1xuICAgIHRhZzogJ3N2ZycsXG4gICAgYXR0cmlidXRlczogYXR0cmlidXRlcyxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgfV07XG59O1xuXG52YXIgYXNTeW1ib2wgPSBmdW5jdGlvbiAoX3JlZikge1xuICB2YXIgcHJlZml4ID0gX3JlZi5wcmVmaXgsXG4gICAgICBpY29uTmFtZSA9IF9yZWYuaWNvbk5hbWUsXG4gICAgICBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBhdHRyaWJ1dGVzID0gX3JlZi5hdHRyaWJ1dGVzLFxuICAgICAgc3ltYm9sID0gX3JlZi5zeW1ib2w7XG5cbiAgdmFyIGlkID0gc3ltYm9sID09PSB0cnVlID8gcHJlZml4ICsgJy0nICsgY29uZmlnJDEuZmFtaWx5UHJlZml4ICsgJy0nICsgaWNvbk5hbWUgOiBzeW1ib2w7XG5cbiAgcmV0dXJuIFt7XG4gICAgdGFnOiAnc3ZnJyxcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICBzdHlsZTogJ2Rpc3BsYXk6IG5vbmU7J1xuICAgIH0sXG4gICAgY2hpbGRyZW46IFt7XG4gICAgICB0YWc6ICdzeW1ib2wnLFxuICAgICAgYXR0cmlidXRlczogX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHsgaWQ6IGlkIH0pLFxuICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gICAgfV1cbiAgfV07XG59O1xuXG5mdW5jdGlvbiBtYWtlSW5saW5lU3ZnQWJzdHJhY3QocGFyYW1zKSB7XG4gIHZhciBfcGFyYW1zJGljb25zID0gcGFyYW1zLmljb25zLFxuICAgICAgbWFpbiA9IF9wYXJhbXMkaWNvbnMubWFpbixcbiAgICAgIG1hc2sgPSBfcGFyYW1zJGljb25zLm1hc2ssXG4gICAgICBwcmVmaXggPSBwYXJhbXMucHJlZml4LFxuICAgICAgaWNvbk5hbWUgPSBwYXJhbXMuaWNvbk5hbWUsXG4gICAgICB0cmFuc2Zvcm0gPSBwYXJhbXMudHJhbnNmb3JtLFxuICAgICAgc3ltYm9sID0gcGFyYW1zLnN5bWJvbCxcbiAgICAgIHRpdGxlID0gcGFyYW1zLnRpdGxlLFxuICAgICAgZXh0cmEgPSBwYXJhbXMuZXh0cmEsXG4gICAgICBfcGFyYW1zJHdhdGNoYWJsZSA9IHBhcmFtcy53YXRjaGFibGUsXG4gICAgICB3YXRjaGFibGUgPSBfcGFyYW1zJHdhdGNoYWJsZSA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfcGFyYW1zJHdhdGNoYWJsZTtcblxuICB2YXIgX3JlZiA9IG1hc2suZm91bmQgPyBtYXNrIDogbWFpbixcbiAgICAgIHdpZHRoID0gX3JlZi53aWR0aCxcbiAgICAgIGhlaWdodCA9IF9yZWYuaGVpZ2h0O1xuXG4gIHZhciB3aWR0aENsYXNzID0gJ2ZhLXctJyArIE1hdGguY2VpbCh3aWR0aCAvIGhlaWdodCAqIDE2KTtcbiAgdmFyIGF0dHJDbGFzcyA9IFtjb25maWckMS5yZXBsYWNlbWVudENsYXNzLCBpY29uTmFtZSA/IGNvbmZpZyQxLmZhbWlseVByZWZpeCArICctJyArIGljb25OYW1lIDogJycsIHdpZHRoQ2xhc3NdLmNvbmNhdChleHRyYS5jbGFzc2VzKS5qb2luKCcgJyk7XG5cbiAgdmFyIGNvbnRlbnQgPSB7XG4gICAgY2hpbGRyZW46IFtdLFxuICAgIGF0dHJpYnV0ZXM6IF9leHRlbmRzKHt9LCBleHRyYS5hdHRyaWJ1dGVzLCB7XG4gICAgICAnZGF0YS1wcmVmaXgnOiBwcmVmaXgsXG4gICAgICAnZGF0YS1pY29uJzogaWNvbk5hbWUsXG4gICAgICAnY2xhc3MnOiBhdHRyQ2xhc3MsXG4gICAgICAncm9sZSc6ICdpbWcnLFxuICAgICAgJ3htbG5zJzogJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcbiAgICAgICd2aWV3Qm94JzogJzAgMCAnICsgd2lkdGggKyAnICcgKyBoZWlnaHRcbiAgICB9KVxuICB9O1xuXG4gIGlmICh3YXRjaGFibGUpIHtcbiAgICBjb250ZW50LmF0dHJpYnV0ZXNbREFUQV9GQV9JMlNWR10gPSAnJztcbiAgfVxuXG4gIGlmICh0aXRsZSkgY29udGVudC5jaGlsZHJlbi5wdXNoKHsgdGFnOiAndGl0bGUnLCBhdHRyaWJ1dGVzOiB7IGlkOiBjb250ZW50LmF0dHJpYnV0ZXNbJ2FyaWEtbGFiZWxsZWRieSddIHx8ICd0aXRsZS0nICsgbmV4dFVuaXF1ZUlkKCkgfSwgY2hpbGRyZW46IFt0aXRsZV0gfSk7XG5cbiAgdmFyIGFyZ3MgPSBfZXh0ZW5kcyh7fSwgY29udGVudCwge1xuICAgIHByZWZpeDogcHJlZml4LFxuICAgIGljb25OYW1lOiBpY29uTmFtZSxcbiAgICBtYWluOiBtYWluLFxuICAgIG1hc2s6IG1hc2ssXG4gICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgc3ltYm9sOiBzeW1ib2wsXG4gICAgc3R5bGVzOiBleHRyYS5zdHlsZXNcbiAgfSk7XG5cbiAgdmFyIF9yZWYyID0gbWFzay5mb3VuZCAmJiBtYWluLmZvdW5kID8gbWFrZUljb25NYXNraW5nKGFyZ3MpIDogbWFrZUljb25TdGFuZGFyZChhcmdzKSxcbiAgICAgIGNoaWxkcmVuID0gX3JlZjIuY2hpbGRyZW4sXG4gICAgICBhdHRyaWJ1dGVzID0gX3JlZjIuYXR0cmlidXRlcztcblxuICBhcmdzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIGFyZ3MuYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXM7XG5cbiAgaWYgKHN5bWJvbCkge1xuICAgIHJldHVybiBhc1N5bWJvbChhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYXNJY29uKGFyZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1ha2VMYXllcnNUZXh0QWJzdHJhY3QocGFyYW1zKSB7XG4gIHZhciBjb250ZW50ID0gcGFyYW1zLmNvbnRlbnQsXG4gICAgICB3aWR0aCA9IHBhcmFtcy53aWR0aCxcbiAgICAgIGhlaWdodCA9IHBhcmFtcy5oZWlnaHQsXG4gICAgICB0cmFuc2Zvcm0gPSBwYXJhbXMudHJhbnNmb3JtLFxuICAgICAgdGl0bGUgPSBwYXJhbXMudGl0bGUsXG4gICAgICBleHRyYSA9IHBhcmFtcy5leHRyYSxcbiAgICAgIF9wYXJhbXMkd2F0Y2hhYmxlMiA9IHBhcmFtcy53YXRjaGFibGUsXG4gICAgICB3YXRjaGFibGUgPSBfcGFyYW1zJHdhdGNoYWJsZTIgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3BhcmFtcyR3YXRjaGFibGUyO1xuXG5cbiAgdmFyIGF0dHJpYnV0ZXMgPSBfZXh0ZW5kcyh7fSwgZXh0cmEuYXR0cmlidXRlcywgdGl0bGUgPyB7ICd0aXRsZSc6IHRpdGxlIH0gOiB7fSwge1xuICAgICdjbGFzcyc6IGV4dHJhLmNsYXNzZXMuam9pbignICcpXG4gIH0pO1xuXG4gIGlmICh3YXRjaGFibGUpIHtcbiAgICBhdHRyaWJ1dGVzW0RBVEFfRkFfSTJTVkddID0gJyc7XG4gIH1cblxuICB2YXIgc3R5bGVzID0gX2V4dGVuZHMoe30sIGV4dHJhLnN0eWxlcyk7XG5cbiAgaWYgKHRyYW5zZm9ybUlzTWVhbmluZ2Z1bCh0cmFuc2Zvcm0pKSB7XG4gICAgc3R5bGVzWyd0cmFuc2Zvcm0nXSA9IHRyYW5zZm9ybUZvckNzcyh7IHRyYW5zZm9ybTogdHJhbnNmb3JtLCBzdGFydENlbnRlcmVkOiB0cnVlLCB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH0pO1xuICAgIHN0eWxlc1snLXdlYmtpdC10cmFuc2Zvcm0nXSA9IHN0eWxlc1sndHJhbnNmb3JtJ107XG4gIH1cblxuICB2YXIgc3R5bGVTdHJpbmcgPSBqb2luU3R5bGVzKHN0eWxlcyk7XG5cbiAgaWYgKHN0eWxlU3RyaW5nLmxlbmd0aCA+IDApIHtcbiAgICBhdHRyaWJ1dGVzWydzdHlsZSddID0gc3R5bGVTdHJpbmc7XG4gIH1cblxuICB2YXIgdmFsID0gW107XG5cbiAgdmFsLnB1c2goe1xuICAgIHRhZzogJ3NwYW4nLFxuICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXMsXG4gICAgY2hpbGRyZW46IFtjb250ZW50XVxuICB9KTtcblxuICBpZiAodGl0bGUpIHtcbiAgICB2YWwucHVzaCh7IHRhZzogJ3NwYW4nLCBhdHRyaWJ1dGVzOiB7IGNsYXNzOiAnc3Itb25seScgfSwgY2hpbGRyZW46IFt0aXRsZV0gfSk7XG4gIH1cblxuICByZXR1cm4gdmFsO1xufVxuXG52YXIgbm9vcCQyID0gZnVuY3Rpb24gbm9vcCgpIHt9O1xudmFyIHAgPSBjb25maWckMS5tZWFzdXJlUGVyZm9ybWFuY2UgJiYgUEVSRk9STUFOQ0UgJiYgUEVSRk9STUFOQ0UubWFyayAmJiBQRVJGT1JNQU5DRS5tZWFzdXJlID8gUEVSRk9STUFOQ0UgOiB7IG1hcms6IG5vb3AkMiwgbWVhc3VyZTogbm9vcCQyIH07XG52YXIgcHJlYW1ibGUgPSAnRkEgXCI1LjAuMTNcIic7XG5cbnZhciBiZWdpbiA9IGZ1bmN0aW9uIGJlZ2luKG5hbWUpIHtcbiAgcC5tYXJrKHByZWFtYmxlICsgJyAnICsgbmFtZSArICcgYmVnaW5zJyk7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGVuZChuYW1lKTtcbiAgfTtcbn07XG5cbnZhciBlbmQgPSBmdW5jdGlvbiBlbmQobmFtZSkge1xuICBwLm1hcmsocHJlYW1ibGUgKyAnICcgKyBuYW1lICsgJyBlbmRzJyk7XG4gIHAubWVhc3VyZShwcmVhbWJsZSArICcgJyArIG5hbWUsIHByZWFtYmxlICsgJyAnICsgbmFtZSArICcgYmVnaW5zJywgcHJlYW1ibGUgKyAnICcgKyBuYW1lICsgJyBlbmRzJyk7XG59O1xuXG52YXIgcGVyZiA9IHsgYmVnaW46IGJlZ2luLCBlbmQ6IGVuZCB9O1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogSW50ZXJuYWwgaGVscGVyIHRvIGJpbmQgYSBmdW5jdGlvbiBrbm93biB0byBoYXZlIDQgYXJndW1lbnRzXG4gKiB0byBhIGdpdmVuIGNvbnRleHQuXG4gKi9cbnZhciBiaW5kSW50ZXJuYWw0ID0gZnVuY3Rpb24gYmluZEludGVybmFsNCAoZnVuYywgdGhpc0NvbnRleHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7XG4gICAgcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQ29udGV4dCwgYSwgYiwgYywgZCk7XG4gIH07XG59O1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG4vKipcbiAqICMgUmVkdWNlXG4gKlxuICogQSBmYXN0IG9iamVjdCBgLnJlZHVjZSgpYCBpbXBsZW1lbnRhdGlvbi5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgc3ViamVjdCAgICAgIFRoZSBvYmplY3QgdG8gcmVkdWNlIG92ZXIuXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm4gICAgICAgICAgIFRoZSByZWR1Y2VyIGZ1bmN0aW9uLlxuICogQHBhcmFtICB7bWl4ZWR9ICAgIGluaXRpYWxWYWx1ZSBUaGUgaW5pdGlhbCB2YWx1ZSBmb3IgdGhlIHJlZHVjZXIsIGRlZmF1bHRzIHRvIHN1YmplY3RbMF0uXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgdGhpc0NvbnRleHQgIFRoZSBjb250ZXh0IGZvciB0aGUgcmVkdWNlci5cbiAqIEByZXR1cm4ge21peGVkfSAgICAgICAgICAgICAgICAgVGhlIGZpbmFsIHJlc3VsdC5cbiAqL1xudmFyIHJlZHVjZSA9IGZ1bmN0aW9uIGZhc3RSZWR1Y2VPYmplY3QgKHN1YmplY3QsIGZuLCBpbml0aWFsVmFsdWUsIHRoaXNDb250ZXh0KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoc3ViamVjdCksXG4gICAgICBsZW5ndGggPSBrZXlzLmxlbmd0aCxcbiAgICAgIGl0ZXJhdG9yID0gdGhpc0NvbnRleHQgIT09IHVuZGVmaW5lZCA/IGJpbmRJbnRlcm5hbDQoZm4sIHRoaXNDb250ZXh0KSA6IGZuLFxuICAgICAgaSwga2V5LCByZXN1bHQ7XG5cbiAgaWYgKGluaXRpYWxWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgaSA9IDE7XG4gICAgcmVzdWx0ID0gc3ViamVjdFtrZXlzWzBdXTtcbiAgfVxuICBlbHNlIHtcbiAgICBpID0gMDtcbiAgICByZXN1bHQgPSBpbml0aWFsVmFsdWU7XG4gIH1cblxuICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0ga2V5c1tpXTtcbiAgICByZXN1bHQgPSBpdGVyYXRvcihyZXN1bHQsIHN1YmplY3Rba2V5XSwga2V5LCBzdWJqZWN0KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG52YXIgc3R5bGVzJDIgPSBuYW1lc3BhY2Uuc3R5bGVzO1xudmFyIHNoaW1zID0gbmFtZXNwYWNlLnNoaW1zO1xuXG5cbnZhciBfYnlVbmljb2RlID0ge307XG52YXIgX2J5TGlnYXR1cmUgPSB7fTtcbnZhciBfYnlPbGROYW1lID0ge307XG5cbnZhciBidWlsZCA9IGZ1bmN0aW9uIGJ1aWxkKCkge1xuICB2YXIgbG9va3VwID0gZnVuY3Rpb24gbG9va3VwKHJlZHVjZXIpIHtcbiAgICByZXR1cm4gcmVkdWNlKHN0eWxlcyQyLCBmdW5jdGlvbiAobywgc3R5bGUsIHByZWZpeCkge1xuICAgICAgb1twcmVmaXhdID0gcmVkdWNlKHN0eWxlLCByZWR1Y2VyLCB7fSk7XG4gICAgICByZXR1cm4gbztcbiAgICB9LCB7fSk7XG4gIH07XG5cbiAgX2J5VW5pY29kZSA9IGxvb2t1cChmdW5jdGlvbiAoYWNjLCBpY29uLCBpY29uTmFtZSkge1xuICAgIGFjY1tpY29uWzNdXSA9IGljb25OYW1lO1xuXG4gICAgcmV0dXJuIGFjYztcbiAgfSk7XG5cbiAgX2J5TGlnYXR1cmUgPSBsb29rdXAoZnVuY3Rpb24gKGFjYywgaWNvbiwgaWNvbk5hbWUpIHtcbiAgICB2YXIgbGlnYXR1cmVzID0gaWNvblsyXTtcblxuICAgIGFjY1tpY29uTmFtZV0gPSBpY29uTmFtZTtcblxuICAgIGxpZ2F0dXJlcy5mb3JFYWNoKGZ1bmN0aW9uIChsaWdhdHVyZSkge1xuICAgICAgYWNjW2xpZ2F0dXJlXSA9IGljb25OYW1lO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGFjYztcbiAgfSk7XG5cbiAgdmFyIGhhc1JlZ3VsYXIgPSAnZmFyJyBpbiBzdHlsZXMkMjtcblxuICBfYnlPbGROYW1lID0gcmVkdWNlKHNoaW1zLCBmdW5jdGlvbiAoYWNjLCBzaGltKSB7XG4gICAgdmFyIG9sZE5hbWUgPSBzaGltWzBdO1xuICAgIHZhciBwcmVmaXggPSBzaGltWzFdO1xuICAgIHZhciBpY29uTmFtZSA9IHNoaW1bMl07XG5cbiAgICBpZiAocHJlZml4ID09PSAnZmFyJyAmJiAhaGFzUmVndWxhcikge1xuICAgICAgcHJlZml4ID0gJ2Zhcyc7XG4gICAgfVxuXG4gICAgYWNjW29sZE5hbWVdID0geyBwcmVmaXg6IHByZWZpeCwgaWNvbk5hbWU6IGljb25OYW1lIH07XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG59O1xuXG5idWlsZCgpO1xuXG5mdW5jdGlvbiBieVVuaWNvZGUocHJlZml4LCB1bmljb2RlKSB7XG4gIHJldHVybiBfYnlVbmljb2RlW3ByZWZpeF1bdW5pY29kZV07XG59XG5cbmZ1bmN0aW9uIGJ5TGlnYXR1cmUocHJlZml4LCBsaWdhdHVyZSkge1xuICByZXR1cm4gX2J5TGlnYXR1cmVbcHJlZml4XVtsaWdhdHVyZV07XG59XG5cbmZ1bmN0aW9uIGJ5T2xkTmFtZShuYW1lKSB7XG4gIHJldHVybiBfYnlPbGROYW1lW25hbWVdIHx8IHsgcHJlZml4OiBudWxsLCBpY29uTmFtZTogbnVsbCB9O1xufVxuXG52YXIgc3R5bGVzJDEgPSBuYW1lc3BhY2Uuc3R5bGVzO1xuXG5cbnZhciBlbXB0eUNhbm9uaWNhbEljb24gPSBmdW5jdGlvbiBlbXB0eUNhbm9uaWNhbEljb24oKSB7XG4gIHJldHVybiB7IHByZWZpeDogbnVsbCwgaWNvbk5hbWU6IG51bGwsIHJlc3Q6IFtdIH07XG59O1xuXG5mdW5jdGlvbiBnZXRDYW5vbmljYWxJY29uKHZhbHVlcykge1xuICByZXR1cm4gdmFsdWVzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBjbHMpIHtcbiAgICB2YXIgaWNvbk5hbWUgPSBnZXRJY29uTmFtZShjb25maWckMS5mYW1pbHlQcmVmaXgsIGNscyk7XG5cbiAgICBpZiAoc3R5bGVzJDFbY2xzXSkge1xuICAgICAgYWNjLnByZWZpeCA9IGNscztcbiAgICB9IGVsc2UgaWYgKGljb25OYW1lKSB7XG4gICAgICB2YXIgc2hpbSA9IGFjYy5wcmVmaXggPT09ICdmYScgPyBieU9sZE5hbWUoaWNvbk5hbWUpIDoge307XG5cbiAgICAgIGFjYy5pY29uTmFtZSA9IHNoaW0uaWNvbk5hbWUgfHwgaWNvbk5hbWU7XG4gICAgICBhY2MucHJlZml4ID0gc2hpbS5wcmVmaXggfHwgYWNjLnByZWZpeDtcbiAgICB9IGVsc2UgaWYgKGNscyAhPT0gY29uZmlnJDEucmVwbGFjZW1lbnRDbGFzcyAmJiBjbHMuaW5kZXhPZignZmEtdy0nKSAhPT0gMCkge1xuICAgICAgYWNjLnJlc3QucHVzaChjbHMpO1xuICAgIH1cblxuICAgIHJldHVybiBhY2M7XG4gIH0sIGVtcHR5Q2Fub25pY2FsSWNvbigpKTtcbn1cblxuZnVuY3Rpb24gaWNvbkZyb21NYXBwaW5nKG1hcHBpbmcsIHByZWZpeCwgaWNvbk5hbWUpIHtcbiAgaWYgKG1hcHBpbmcgJiYgbWFwcGluZ1twcmVmaXhdICYmIG1hcHBpbmdbcHJlZml4XVtpY29uTmFtZV0pIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICBpY29uTmFtZTogaWNvbk5hbWUsXG4gICAgICBpY29uOiBtYXBwaW5nW3ByZWZpeF1baWNvbk5hbWVdXG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0b0h0bWwoYWJzdHJhY3ROb2Rlcykge1xuICB2YXIgdGFnID0gYWJzdHJhY3ROb2Rlcy50YWcsXG4gICAgICBfYWJzdHJhY3ROb2RlcyRhdHRyaWIgPSBhYnN0cmFjdE5vZGVzLmF0dHJpYnV0ZXMsXG4gICAgICBhdHRyaWJ1dGVzID0gX2Fic3RyYWN0Tm9kZXMkYXR0cmliID09PSB1bmRlZmluZWQgPyB7fSA6IF9hYnN0cmFjdE5vZGVzJGF0dHJpYixcbiAgICAgIF9hYnN0cmFjdE5vZGVzJGNoaWxkciA9IGFic3RyYWN0Tm9kZXMuY2hpbGRyZW4sXG4gICAgICBjaGlsZHJlbiA9IF9hYnN0cmFjdE5vZGVzJGNoaWxkciA9PT0gdW5kZWZpbmVkID8gW10gOiBfYWJzdHJhY3ROb2RlcyRjaGlsZHI7XG5cblxuICBpZiAodHlwZW9mIGFic3RyYWN0Tm9kZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGh0bWxFc2NhcGUoYWJzdHJhY3ROb2Rlcyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICc8JyArIHRhZyArICcgJyArIGpvaW5BdHRyaWJ1dGVzKGF0dHJpYnV0ZXMpICsgJz4nICsgY2hpbGRyZW4ubWFwKHRvSHRtbCkuam9pbignJykgKyAnPC8nICsgdGFnICsgJz4nO1xuICB9XG59XG5cbnZhciBub29wJDEgPSBmdW5jdGlvbiBub29wKCkge307XG5cbmZ1bmN0aW9uIGlzV2F0Y2hlZChub2RlKSB7XG4gIHZhciBpMnN2ZyA9IG5vZGUuZ2V0QXR0cmlidXRlID8gbm9kZS5nZXRBdHRyaWJ1dGUoREFUQV9GQV9JMlNWRykgOiBudWxsO1xuXG4gIHJldHVybiB0eXBlb2YgaTJzdmcgPT09ICdzdHJpbmcnO1xufVxuXG5mdW5jdGlvbiBnZXRNdXRhdG9yKCkge1xuICBpZiAoY29uZmlnJDEuYXV0b1JlcGxhY2VTdmcgPT09IHRydWUpIHtcbiAgICByZXR1cm4gbXV0YXRvcnMucmVwbGFjZTtcbiAgfVxuXG4gIHZhciBtdXRhdG9yID0gbXV0YXRvcnNbY29uZmlnJDEuYXV0b1JlcGxhY2VTdmddO1xuXG4gIHJldHVybiBtdXRhdG9yIHx8IG11dGF0b3JzLnJlcGxhY2U7XG59XG5cbnZhciBtdXRhdG9ycyA9IHtcbiAgcmVwbGFjZTogZnVuY3Rpb24gcmVwbGFjZShtdXRhdGlvbikge1xuICAgIHZhciBub2RlID0gbXV0YXRpb25bMF07XG4gICAgdmFyIGFic3RyYWN0ID0gbXV0YXRpb25bMV07XG4gICAgdmFyIG5ld091dGVySFRNTCA9IGFic3RyYWN0Lm1hcChmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIHRvSHRtbChhKTtcbiAgICB9KS5qb2luKCdcXG4nKTtcblxuICAgIGlmIChub2RlLnBhcmVudE5vZGUgJiYgbm9kZS5vdXRlckhUTUwpIHtcbiAgICAgIG5vZGUub3V0ZXJIVE1MID0gbmV3T3V0ZXJIVE1MICsgKGNvbmZpZyQxLmtlZXBPcmlnaW5hbFNvdXJjZSAmJiBub2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gJ3N2ZycgPyAnPCEtLSAnICsgbm9kZS5vdXRlckhUTUwgKyAnIC0tPicgOiAnJyk7XG4gICAgfSBlbHNlIGlmIChub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgIHZhciBuZXdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgbm9kZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdOb2RlLCBub2RlKTtcbiAgICAgIG5ld05vZGUub3V0ZXJIVE1MID0gbmV3T3V0ZXJIVE1MO1xuICAgIH1cbiAgfSxcbiAgbmVzdDogZnVuY3Rpb24gbmVzdChtdXRhdGlvbikge1xuICAgIHZhciBub2RlID0gbXV0YXRpb25bMF07XG4gICAgdmFyIGFic3RyYWN0ID0gbXV0YXRpb25bMV07XG5cbiAgICAvLyBJZiB3ZSBhbHJlYWR5IGhhdmUgYSByZXBsYWNlZCBub2RlIHdlIGRvIG5vdCB3YW50IHRvIGNvbnRpbnVlIG5lc3Rpbmcgd2l0aGluIGl0LlxuICAgIC8vIFNob3J0LWNpcmN1aXQgdG8gdGhlIHN0YW5kYXJkIHJlcGxhY2VtZW50XG4gICAgaWYgKH5jbGFzc0FycmF5KG5vZGUpLmluZGV4T2YoY29uZmlnJDEucmVwbGFjZW1lbnRDbGFzcykpIHtcbiAgICAgIHJldHVybiBtdXRhdG9ycy5yZXBsYWNlKG11dGF0aW9uKTtcbiAgICB9XG5cbiAgICB2YXIgZm9yU3ZnID0gbmV3IFJlZ0V4cChjb25maWckMS5mYW1pbHlQcmVmaXggKyAnLS4qJyk7XG5cbiAgICBkZWxldGUgYWJzdHJhY3RbMF0uYXR0cmlidXRlcy5zdHlsZTtcblxuICAgIHZhciBzcGxpdENsYXNzZXMgPSBhYnN0cmFjdFswXS5hdHRyaWJ1dGVzLmNsYXNzLnNwbGl0KCcgJykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGNscykge1xuICAgICAgaWYgKGNscyA9PT0gY29uZmlnJDEucmVwbGFjZW1lbnRDbGFzcyB8fCBjbHMubWF0Y2goZm9yU3ZnKSkge1xuICAgICAgICBhY2MudG9TdmcucHVzaChjbHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWNjLnRvTm9kZS5wdXNoKGNscyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgeyB0b05vZGU6IFtdLCB0b1N2ZzogW10gfSk7XG5cbiAgICBhYnN0cmFjdFswXS5hdHRyaWJ1dGVzLmNsYXNzID0gc3BsaXRDbGFzc2VzLnRvU3ZnLmpvaW4oJyAnKTtcblxuICAgIHZhciBuZXdJbm5lckhUTUwgPSBhYnN0cmFjdC5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiB0b0h0bWwoYSk7XG4gICAgfSkuam9pbignXFxuJyk7XG4gICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgc3BsaXRDbGFzc2VzLnRvTm9kZS5qb2luKCcgJykpO1xuICAgIG5vZGUuc2V0QXR0cmlidXRlKERBVEFfRkFfSTJTVkcsICcnKTtcbiAgICBub2RlLmlubmVySFRNTCA9IG5ld0lubmVySFRNTDtcbiAgfVxufTtcblxuZnVuY3Rpb24gcGVyZm9ybShtdXRhdGlvbnMsIGNhbGxiYWNrKSB7XG4gIHZhciBjYWxsYmFja0Z1bmN0aW9uID0gdHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nID8gY2FsbGJhY2sgOiBub29wJDE7XG5cbiAgaWYgKG11dGF0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICBjYWxsYmFja0Z1bmN0aW9uKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGZyYW1lID0gV0lORE9XLnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBmdW5jdGlvbiAob3ApIHtcbiAgICAgIHJldHVybiBvcCgpO1xuICAgIH07XG5cbiAgICBmcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbXV0YXRvciA9IGdldE11dGF0b3IoKTtcbiAgICAgIHZhciBtYXJrID0gcGVyZi5iZWdpbignbXV0YXRlJyk7XG5cbiAgICAgIG11dGF0aW9ucy5tYXAobXV0YXRvcik7XG5cbiAgICAgIG1hcmsoKTtcblxuICAgICAgY2FsbGJhY2tGdW5jdGlvbigpO1xuICAgIH0pO1xuICB9XG59XG5cbnZhciBkaXNhYmxlZCA9IGZhbHNlO1xuXG5mdW5jdGlvbiBkaXNhYmxlT2JzZXJ2YXRpb24ob3BlcmF0aW9uKSB7XG4gIGRpc2FibGVkID0gdHJ1ZTtcbiAgb3BlcmF0aW9uKCk7XG4gIGRpc2FibGVkID0gZmFsc2U7XG59XG5cbnZhciBtbyA9IG51bGw7XG5cbmZ1bmN0aW9uIG9ic2VydmUob3B0aW9ucykge1xuICBpZiAoIU1VVEFUSU9OX09CU0VSVkVSKSByZXR1cm47XG5cbiAgdmFyIHRyZWVDYWxsYmFjayA9IG9wdGlvbnMudHJlZUNhbGxiYWNrLFxuICAgICAgbm9kZUNhbGxiYWNrID0gb3B0aW9ucy5ub2RlQ2FsbGJhY2ssXG4gICAgICBwc2V1ZG9FbGVtZW50c0NhbGxiYWNrID0gb3B0aW9ucy5wc2V1ZG9FbGVtZW50c0NhbGxiYWNrO1xuXG5cbiAgbW8gPSBuZXcgTVVUQVRJT05fT0JTRVJWRVIoZnVuY3Rpb24gKG9iamVjdHMpIHtcbiAgICBpZiAoZGlzYWJsZWQpIHJldHVybjtcblxuICAgIHRvQXJyYXkob2JqZWN0cykuZm9yRWFjaChmdW5jdGlvbiAobXV0YXRpb25SZWNvcmQpIHtcbiAgICAgIGlmIChtdXRhdGlvblJlY29yZC50eXBlID09PSAnY2hpbGRMaXN0JyAmJiBtdXRhdGlvblJlY29yZC5hZGRlZE5vZGVzLmxlbmd0aCA+IDAgJiYgIWlzV2F0Y2hlZChtdXRhdGlvblJlY29yZC5hZGRlZE5vZGVzWzBdKSkge1xuICAgICAgICBpZiAoY29uZmlnJDEuc2VhcmNoUHNldWRvRWxlbWVudHMpIHtcbiAgICAgICAgICBwc2V1ZG9FbGVtZW50c0NhbGxiYWNrKG11dGF0aW9uUmVjb3JkLnRhcmdldCk7XG4gICAgICAgIH1cblxuICAgICAgICB0cmVlQ2FsbGJhY2sobXV0YXRpb25SZWNvcmQudGFyZ2V0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKG11dGF0aW9uUmVjb3JkLnR5cGUgPT09ICdhdHRyaWJ1dGVzJyAmJiBtdXRhdGlvblJlY29yZC50YXJnZXQucGFyZW50Tm9kZSAmJiBjb25maWckMS5zZWFyY2hQc2V1ZG9FbGVtZW50cykge1xuICAgICAgICBwc2V1ZG9FbGVtZW50c0NhbGxiYWNrKG11dGF0aW9uUmVjb3JkLnRhcmdldC5wYXJlbnROb2RlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG11dGF0aW9uUmVjb3JkLnR5cGUgPT09ICdhdHRyaWJ1dGVzJyAmJiBpc1dhdGNoZWQobXV0YXRpb25SZWNvcmQudGFyZ2V0KSAmJiB+QVRUUklCVVRFU19XQVRDSEVEX0ZPUl9NVVRBVElPTi5pbmRleE9mKG11dGF0aW9uUmVjb3JkLmF0dHJpYnV0ZU5hbWUpKSB7XG4gICAgICAgIGlmIChtdXRhdGlvblJlY29yZC5hdHRyaWJ1dGVOYW1lID09PSAnY2xhc3MnKSB7XG4gICAgICAgICAgdmFyIF9nZXRDYW5vbmljYWxJY29uID0gZ2V0Q2Fub25pY2FsSWNvbihjbGFzc0FycmF5KG11dGF0aW9uUmVjb3JkLnRhcmdldCkpLFxuICAgICAgICAgICAgICBwcmVmaXggPSBfZ2V0Q2Fub25pY2FsSWNvbi5wcmVmaXgsXG4gICAgICAgICAgICAgIGljb25OYW1lID0gX2dldENhbm9uaWNhbEljb24uaWNvbk5hbWU7XG5cbiAgICAgICAgICBpZiAocHJlZml4KSBtdXRhdGlvblJlY29yZC50YXJnZXQuc2V0QXR0cmlidXRlKCdkYXRhLXByZWZpeCcsIHByZWZpeCk7XG4gICAgICAgICAgaWYgKGljb25OYW1lKSBtdXRhdGlvblJlY29yZC50YXJnZXQuc2V0QXR0cmlidXRlKCdkYXRhLWljb24nLCBpY29uTmFtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9kZUNhbGxiYWNrKG11dGF0aW9uUmVjb3JkLnRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgaWYgKCFJU19ET00pIHJldHVybjtcblxuICBtby5vYnNlcnZlKERPQ1VNRU5ULmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0sIHtcbiAgICBjaGlsZExpc3Q6IHRydWUsIGF0dHJpYnV0ZXM6IHRydWUsIGNoYXJhY3RlckRhdGE6IHRydWUsIHN1YnRyZWU6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRpc2Nvbm5lY3QoKSB7XG4gIGlmICghbW8pIHJldHVybjtcblxuICBtby5kaXNjb25uZWN0KCk7XG59XG5cbnZhciBzdHlsZVBhcnNlciA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIHZhciBzdHlsZSA9IG5vZGUuZ2V0QXR0cmlidXRlKCdzdHlsZScpO1xuXG4gIHZhciB2YWwgPSBbXTtcblxuICBpZiAoc3R5bGUpIHtcbiAgICB2YWwgPSBzdHlsZS5zcGxpdCgnOycpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBzdHlsZSkge1xuICAgICAgdmFyIHN0eWxlcyA9IHN0eWxlLnNwbGl0KCc6Jyk7XG4gICAgICB2YXIgcHJvcCA9IHN0eWxlc1swXTtcbiAgICAgIHZhciB2YWx1ZSA9IHN0eWxlcy5zbGljZSgxKTtcblxuICAgICAgaWYgKHByb3AgJiYgdmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICBhY2NbcHJvcF0gPSB2YWx1ZS5qb2luKCc6JykudHJpbSgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbiAgfVxuXG4gIHJldHVybiB2YWw7XG59O1xuXG5mdW5jdGlvbiB0b0hleCh1bmljb2RlKSB7XG4gIHZhciByZXN1bHQgPSAnJztcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHVuaWNvZGUubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaGV4ID0gdW5pY29kZS5jaGFyQ29kZUF0KGkpLnRvU3RyaW5nKDE2KTtcbiAgICByZXN1bHQgKz0gKCcwMDAnICsgaGV4KS5zbGljZSgtNCk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG52YXIgY2xhc3NQYXJzZXIgPSBmdW5jdGlvbiAobm9kZSkge1xuICB2YXIgZXhpc3RpbmdQcmVmaXggPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1wcmVmaXgnKTtcbiAgdmFyIGV4aXN0aW5nSWNvbk5hbWUgPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1pY29uJyk7XG4gIHZhciBpbm5lclRleHQgPSBub2RlLmlubmVyVGV4dCAhPT0gdW5kZWZpbmVkID8gbm9kZS5pbm5lclRleHQudHJpbSgpIDogJyc7XG5cbiAgdmFyIHZhbCA9IGdldENhbm9uaWNhbEljb24oY2xhc3NBcnJheShub2RlKSk7XG5cbiAgaWYgKGV4aXN0aW5nUHJlZml4ICYmIGV4aXN0aW5nSWNvbk5hbWUpIHtcbiAgICB2YWwucHJlZml4ID0gZXhpc3RpbmdQcmVmaXg7XG4gICAgdmFsLmljb25OYW1lID0gZXhpc3RpbmdJY29uTmFtZTtcbiAgfVxuXG4gIGlmICh2YWwucHJlZml4ICYmIGlubmVyVGV4dC5sZW5ndGggPiAxKSB7XG4gICAgdmFsLmljb25OYW1lID0gYnlMaWdhdHVyZSh2YWwucHJlZml4LCBub2RlLmlubmVyVGV4dCk7XG4gIH0gZWxzZSBpZiAodmFsLnByZWZpeCAmJiBpbm5lclRleHQubGVuZ3RoID09PSAxKSB7XG4gICAgdmFsLmljb25OYW1lID0gYnlVbmljb2RlKHZhbC5wcmVmaXgsIHRvSGV4KG5vZGUuaW5uZXJUZXh0KSk7XG4gIH1cblxuICByZXR1cm4gdmFsO1xufTtcblxudmFyIHBhcnNlVHJhbnNmb3JtU3RyaW5nID0gZnVuY3Rpb24gcGFyc2VUcmFuc2Zvcm1TdHJpbmcodHJhbnNmb3JtU3RyaW5nKSB7XG4gIHZhciB0cmFuc2Zvcm0gPSB7XG4gICAgc2l6ZTogMTYsXG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIGZsaXBYOiBmYWxzZSxcbiAgICBmbGlwWTogZmFsc2UsXG4gICAgcm90YXRlOiAwXG4gIH07XG5cbiAgaWYgKCF0cmFuc2Zvcm1TdHJpbmcpIHtcbiAgICByZXR1cm4gdHJhbnNmb3JtO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0cmFuc2Zvcm1TdHJpbmcudG9Mb3dlckNhc2UoKS5zcGxpdCgnICcpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBuKSB7XG4gICAgICB2YXIgcGFydHMgPSBuLnRvTG93ZXJDYXNlKCkuc3BsaXQoJy0nKTtcbiAgICAgIHZhciBmaXJzdCA9IHBhcnRzWzBdO1xuICAgICAgdmFyIHJlc3QgPSBwYXJ0cy5zbGljZSgxKS5qb2luKCctJyk7XG5cbiAgICAgIGlmIChmaXJzdCAmJiByZXN0ID09PSAnaCcpIHtcbiAgICAgICAgYWNjLmZsaXBYID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH1cblxuICAgICAgaWYgKGZpcnN0ICYmIHJlc3QgPT09ICd2Jykge1xuICAgICAgICBhY2MuZmxpcFkgPSB0cnVlO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfVxuXG4gICAgICByZXN0ID0gcGFyc2VGbG9hdChyZXN0KTtcblxuICAgICAgaWYgKGlzTmFOKHJlc3QpKSB7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAoZmlyc3QpIHtcbiAgICAgICAgY2FzZSAnZ3Jvdyc6XG4gICAgICAgICAgYWNjLnNpemUgPSBhY2Muc2l6ZSArIHJlc3Q7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3Nocmluayc6XG4gICAgICAgICAgYWNjLnNpemUgPSBhY2Muc2l6ZSAtIHJlc3Q7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgIGFjYy54ID0gYWNjLnggLSByZXN0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgYWNjLnggPSBhY2MueCArIHJlc3Q7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3VwJzpcbiAgICAgICAgICBhY2MueSA9IGFjYy55IC0gcmVzdDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZG93bic6XG4gICAgICAgICAgYWNjLnkgPSBhY2MueSArIHJlc3Q7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3JvdGF0ZSc6XG4gICAgICAgICAgYWNjLnJvdGF0ZSA9IGFjYy5yb3RhdGUgKyByZXN0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHRyYW5zZm9ybSk7XG4gIH1cbn07XG5cbnZhciB0cmFuc2Zvcm1QYXJzZXIgPSBmdW5jdGlvbiAobm9kZSkge1xuICByZXR1cm4gcGFyc2VUcmFuc2Zvcm1TdHJpbmcobm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmEtdHJhbnNmb3JtJykpO1xufTtcblxudmFyIHN5bWJvbFBhcnNlciA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIHZhciBzeW1ib2wgPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1mYS1zeW1ib2wnKTtcblxuICByZXR1cm4gc3ltYm9sID09PSBudWxsID8gZmFsc2UgOiBzeW1ib2wgPT09ICcnID8gdHJ1ZSA6IHN5bWJvbDtcbn07XG5cbnZhciBhdHRyaWJ1dGVzUGFyc2VyID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgdmFyIGV4dHJhQXR0cmlidXRlcyA9IHRvQXJyYXkobm9kZS5hdHRyaWJ1dGVzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgYXR0cikge1xuICAgIGlmIChhY2MubmFtZSAhPT0gJ2NsYXNzJyAmJiBhY2MubmFtZSAhPT0gJ3N0eWxlJykge1xuICAgICAgYWNjW2F0dHIubmFtZV0gPSBhdHRyLnZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG5cbiAgdmFyIHRpdGxlID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ3RpdGxlJyk7XG5cbiAgaWYgKGNvbmZpZyQxLmF1dG9BMTF5KSB7XG4gICAgaWYgKHRpdGxlKSB7XG4gICAgICBleHRyYUF0dHJpYnV0ZXNbJ2FyaWEtbGFiZWxsZWRieSddID0gY29uZmlnJDEucmVwbGFjZW1lbnRDbGFzcyArICctdGl0bGUtJyArIG5leHRVbmlxdWVJZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHRyYUF0dHJpYnV0ZXNbJ2FyaWEtaGlkZGVuJ10gPSAndHJ1ZSc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGV4dHJhQXR0cmlidXRlcztcbn07XG5cbnZhciBtYXNrUGFyc2VyID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgdmFyIG1hc2sgPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1mYS1tYXNrJyk7XG5cbiAgaWYgKCFtYXNrKSB7XG4gICAgcmV0dXJuIGVtcHR5Q2Fub25pY2FsSWNvbigpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBnZXRDYW5vbmljYWxJY29uKG1hc2suc3BsaXQoJyAnKS5tYXAoZnVuY3Rpb24gKGkpIHtcbiAgICAgIHJldHVybiBpLnRyaW0oKTtcbiAgICB9KSk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHBhcnNlTWV0YShub2RlKSB7XG4gIHZhciBfY2xhc3NQYXJzZXIgPSBjbGFzc1BhcnNlcihub2RlKSxcbiAgICAgIGljb25OYW1lID0gX2NsYXNzUGFyc2VyLmljb25OYW1lLFxuICAgICAgcHJlZml4ID0gX2NsYXNzUGFyc2VyLnByZWZpeCxcbiAgICAgIGV4dHJhQ2xhc3NlcyA9IF9jbGFzc1BhcnNlci5yZXN0O1xuXG4gIHZhciBleHRyYVN0eWxlcyA9IHN0eWxlUGFyc2VyKG5vZGUpO1xuICB2YXIgdHJhbnNmb3JtID0gdHJhbnNmb3JtUGFyc2VyKG5vZGUpO1xuICB2YXIgc3ltYm9sID0gc3ltYm9sUGFyc2VyKG5vZGUpO1xuICB2YXIgZXh0cmFBdHRyaWJ1dGVzID0gYXR0cmlidXRlc1BhcnNlcihub2RlKTtcbiAgdmFyIG1hc2sgPSBtYXNrUGFyc2VyKG5vZGUpO1xuXG4gIHJldHVybiB7XG4gICAgaWNvbk5hbWU6IGljb25OYW1lLFxuICAgIHRpdGxlOiBub2RlLmdldEF0dHJpYnV0ZSgndGl0bGUnKSxcbiAgICBwcmVmaXg6IHByZWZpeCxcbiAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICBzeW1ib2w6IHN5bWJvbCxcbiAgICBtYXNrOiBtYXNrLFxuICAgIGV4dHJhOiB7XG4gICAgICBjbGFzc2VzOiBleHRyYUNsYXNzZXMsXG4gICAgICBzdHlsZXM6IGV4dHJhU3R5bGVzLFxuICAgICAgYXR0cmlidXRlczogZXh0cmFBdHRyaWJ1dGVzXG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBNaXNzaW5nSWNvbihlcnJvcikge1xuICB0aGlzLm5hbWUgPSAnTWlzc2luZ0ljb24nO1xuICB0aGlzLm1lc3NhZ2UgPSBlcnJvciB8fCAnSWNvbiB1bmF2YWlsYWJsZSc7XG4gIHRoaXMuc3RhY2sgPSBuZXcgRXJyb3IoKS5zdGFjaztcbn1cblxuTWlzc2luZ0ljb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuTWlzc2luZ0ljb24ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTWlzc2luZ0ljb247XG5cbnZhciBGSUxMID0geyBmaWxsOiAnY3VycmVudENvbG9yJyB9O1xudmFyIEFOSU1BVElPTl9CQVNFID0ge1xuICBhdHRyaWJ1dGVUeXBlOiAnWE1MJyxcbiAgcmVwZWF0Q291bnQ6ICdpbmRlZmluaXRlJyxcbiAgZHVyOiAnMnMnXG59O1xudmFyIFJJTkcgPSB7XG4gIHRhZzogJ3BhdGgnLFxuICBhdHRyaWJ1dGVzOiBfZXh0ZW5kcyh7fSwgRklMTCwge1xuICAgIGQ6ICdNMTU2LjUsNDQ3LjdsLTEyLjYsMjkuNWMtMTguNy05LjUtMzUuOS0yMS4yLTUxLjUtMzQuOWwyMi43LTIyLjdDMTI3LjYsNDMwLjUsMTQxLjUsNDQwLDE1Ni41LDQ0Ny43eiBNNDAuNiwyNzJIOC41IGMxLjQsMjEuMiw1LjQsNDEuNywxMS43LDYxLjFMNTAsMzIxLjJDNDUuMSwzMDUuNSw0MS44LDI4OSw0MC42LDI3MnogTTQwLjYsMjQwYzEuNC0xOC44LDUuMi0zNywxMS4xLTU0LjFsLTI5LjUtMTIuNiBDMTQuNywxOTQuMywxMCwyMTYuNyw4LjUsMjQwSDQwLjZ6IE02NC4zLDE1Ni41YzcuOC0xNC45LDE3LjItMjguOCwyOC4xLTQxLjVMNjkuNyw5Mi4zYy0xMy43LDE1LjYtMjUuNSwzMi44LTM0LjksNTEuNSBMNjQuMywxNTYuNXogTTM5Nyw0MTkuNmMtMTMuOSwxMi0yOS40LDIyLjMtNDYuMSwzMC40bDExLjksMjkuOGMyMC43LTkuOSwzOS44LTIyLjYsNTYuOS0zNy42TDM5Nyw0MTkuNnogTTExNSw5Mi40IGMxMy45LTEyLDI5LjQtMjIuMyw0Ni4xLTMwLjRsLTExLjktMjkuOGMtMjAuNyw5LjktMzkuOCwyMi42LTU2LjgsMzcuNkwxMTUsOTIuNHogTTQ0Ny43LDM1NS41Yy03LjgsMTQuOS0xNy4yLDI4LjgtMjguMSw0MS41IGwyMi43LDIyLjdjMTMuNy0xNS42LDI1LjUtMzIuOSwzNC45LTUxLjVMNDQ3LjcsMzU1LjV6IE00NzEuNCwyNzJjLTEuNCwxOC44LTUuMiwzNy0xMS4xLDU0LjFsMjkuNSwxMi42IGM3LjUtMjEuMSwxMi4yLTQzLjUsMTMuNi02Ni44SDQ3MS40eiBNMzIxLjIsNDYyYy0xNS43LDUtMzIuMiw4LjItNDkuMiw5LjR2MzIuMWMyMS4yLTEuNCw0MS43LTUuNCw2MS4xLTExLjdMMzIxLjIsNDYyeiBNMjQwLDQ3MS40Yy0xOC44LTEuNC0zNy01LjItNTQuMS0xMS4xbC0xMi42LDI5LjVjMjEuMSw3LjUsNDMuNSwxMi4yLDY2LjgsMTMuNlY0NzEuNHogTTQ2MiwxOTAuOGM1LDE1LjcsOC4yLDMyLjIsOS40LDQ5LjJoMzIuMSBjLTEuNC0yMS4yLTUuNC00MS43LTExLjctNjEuMUw0NjIsMTkwLjh6IE05Mi40LDM5N2MtMTItMTMuOS0yMi4zLTI5LjQtMzAuNC00Ni4xbC0yOS44LDExLjljOS45LDIwLjcsMjIuNiwzOS44LDM3LjYsNTYuOSBMOTIuNCwzOTd6IE0yNzIsNDAuNmMxOC44LDEuNCwzNi45LDUuMiw1NC4xLDExLjFsMTIuNi0yOS41QzMxNy43LDE0LjcsMjk1LjMsMTAsMjcyLDguNVY0MC42eiBNMTkwLjgsNTAgYzE1LjctNSwzMi4yLTguMiw0OS4yLTkuNFY4LjVjLTIxLjIsMS40LTQxLjcsNS40LTYxLjEsMTEuN0wxOTAuOCw1MHogTTQ0Mi4zLDkyLjNMNDE5LjYsMTE1YzEyLDEzLjksMjIuMywyOS40LDMwLjUsNDYuMSBsMjkuOC0xMS45QzQ3MCwxMjguNSw0NTcuMywxMDkuNCw0NDIuMyw5Mi4zeiBNMzk3LDkyLjRsMjIuNy0yMi43Yy0xNS42LTEzLjctMzIuOC0yNS41LTUxLjUtMzQuOWwtMTIuNiwyOS41IEMzNzAuNCw3Mi4xLDM4NC40LDgxLjUsMzk3LDkyLjR6J1xuICB9KVxufTtcbnZhciBPUEFDSVRZX0FOSU1BVEUgPSBfZXh0ZW5kcyh7fSwgQU5JTUFUSU9OX0JBU0UsIHtcbiAgYXR0cmlidXRlTmFtZTogJ29wYWNpdHknXG59KTtcbnZhciBET1QgPSB7XG4gIHRhZzogJ2NpcmNsZScsXG4gIGF0dHJpYnV0ZXM6IF9leHRlbmRzKHt9LCBGSUxMLCB7XG4gICAgY3g6ICcyNTYnLFxuICAgIGN5OiAnMzY0JyxcbiAgICByOiAnMjgnXG4gIH0pLFxuICBjaGlsZHJlbjogW3sgdGFnOiAnYW5pbWF0ZScsIGF0dHJpYnV0ZXM6IF9leHRlbmRzKHt9LCBBTklNQVRJT05fQkFTRSwgeyBhdHRyaWJ1dGVOYW1lOiAncicsIHZhbHVlczogJzI4OzE0OzI4OzI4OzE0OzI4OycgfSkgfSwgeyB0YWc6ICdhbmltYXRlJywgYXR0cmlidXRlczogX2V4dGVuZHMoe30sIE9QQUNJVFlfQU5JTUFURSwgeyB2YWx1ZXM6ICcxOzA7MTsxOzA7MTsnIH0pIH1dXG59O1xudmFyIFFVRVNUSU9OID0ge1xuICB0YWc6ICdwYXRoJyxcbiAgYXR0cmlidXRlczogX2V4dGVuZHMoe30sIEZJTEwsIHtcbiAgICBvcGFjaXR5OiAnMScsXG4gICAgZDogJ00yNjMuNywzMTJoLTE2Yy02LjYsMC0xMi01LjQtMTItMTJjMC03MSw3Ny40LTYzLjksNzcuNC0xMDcuOGMwLTIwLTE3LjgtNDAuMi01Ny40LTQwLjJjLTI5LjEsMC00NC4zLDkuNi01OS4yLDI4LjcgYy0zLjksNS0xMS4xLDYtMTYuMiwyLjRsLTEzLjEtOS4yYy01LjYtMy45LTYuOS0xMS44LTIuNi0xNy4yYzIxLjItMjcuMiw0Ni40LTQ0LjcsOTEuMi00NC43YzUyLjMsMCw5Ny40LDI5LjgsOTcuNCw4MC4yIGMwLDY3LjYtNzcuNCw2My41LTc3LjQsMTA3LjhDMjc1LjcsMzA2LjYsMjcwLjMsMzEyLDI2My43LDMxMnonXG4gIH0pLFxuICBjaGlsZHJlbjogW3sgdGFnOiAnYW5pbWF0ZScsIGF0dHJpYnV0ZXM6IF9leHRlbmRzKHt9LCBPUEFDSVRZX0FOSU1BVEUsIHsgdmFsdWVzOiAnMTswOzA7MDswOzE7JyB9KSB9XVxufTtcbnZhciBFWENMQU1BVElPTiA9IHtcbiAgdGFnOiAncGF0aCcsXG4gIGF0dHJpYnV0ZXM6IF9leHRlbmRzKHt9LCBGSUxMLCB7XG4gICAgb3BhY2l0eTogJzAnLFxuICAgIGQ6ICdNMjMyLjUsMTM0LjVsNywxNjhjMC4zLDYuNCw1LjYsMTEuNSwxMiwxMS41aDljNi40LDAsMTEuNy01LjEsMTItMTEuNWw3LTE2OGMwLjMtNi44LTUuMi0xMi41LTEyLTEyLjVoLTIzIEMyMzcuNywxMjIsMjMyLjIsMTI3LjcsMjMyLjUsMTM0LjV6J1xuICB9KSxcbiAgY2hpbGRyZW46IFt7IHRhZzogJ2FuaW1hdGUnLCBhdHRyaWJ1dGVzOiBfZXh0ZW5kcyh7fSwgT1BBQ0lUWV9BTklNQVRFLCB7IHZhbHVlczogJzA7MDsxOzE7MDswOycgfSkgfV1cbn07XG5cbnZhciBtaXNzaW5nID0geyB0YWc6ICdnJywgY2hpbGRyZW46IFtSSU5HLCBET1QsIFFVRVNUSU9OLCBFWENMQU1BVElPTl0gfTtcblxudmFyIHN0eWxlcyA9IG5hbWVzcGFjZS5zdHlsZXM7XG5cbnZhciBMQVlFUlNfVEVYVF9DTEFTU05BTUUgPSAnZmEtbGF5ZXJzLXRleHQnO1xudmFyIEZPTlRfRkFNSUxZX1BBVFRFUk4gPSAvRm9udCBBd2Vzb21lIDUgKFNvbGlkfFJlZ3VsYXJ8TGlnaHR8QnJhbmRzKS87XG52YXIgU1RZTEVfVE9fUFJFRklYID0ge1xuICAnU29saWQnOiAnZmFzJyxcbiAgJ1JlZ3VsYXInOiAnZmFyJyxcbiAgJ0xpZ2h0JzogJ2ZhbCcsXG4gICdCcmFuZHMnOiAnZmFiJ1xufTtcblxuZnVuY3Rpb24gZmluZEljb24oaWNvbk5hbWUsIHByZWZpeCkge1xuICB2YXIgdmFsID0ge1xuICAgIGZvdW5kOiBmYWxzZSxcbiAgICB3aWR0aDogNTEyLFxuICAgIGhlaWdodDogNTEyLFxuICAgIGljb246IG1pc3NpbmdcbiAgfTtcblxuICBpZiAoaWNvbk5hbWUgJiYgcHJlZml4ICYmIHN0eWxlc1twcmVmaXhdICYmIHN0eWxlc1twcmVmaXhdW2ljb25OYW1lXSkge1xuICAgIHZhciBpY29uID0gc3R5bGVzW3ByZWZpeF1baWNvbk5hbWVdO1xuICAgIHZhciB3aWR0aCA9IGljb25bMF07XG4gICAgdmFyIGhlaWdodCA9IGljb25bMV07XG4gICAgdmFyIHZlY3RvckRhdGEgPSBpY29uLnNsaWNlKDQpO1xuXG4gICAgdmFsID0ge1xuICAgICAgZm91bmQ6IHRydWUsXG4gICAgICB3aWR0aDogd2lkdGgsXG4gICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgIGljb246IHsgdGFnOiAncGF0aCcsIGF0dHJpYnV0ZXM6IHsgZmlsbDogJ2N1cnJlbnRDb2xvcicsIGQ6IHZlY3RvckRhdGFbMF0gfSB9XG4gICAgfTtcbiAgfSBlbHNlIGlmIChpY29uTmFtZSAmJiBwcmVmaXggJiYgIWNvbmZpZyQxLnNob3dNaXNzaW5nSWNvbnMpIHtcbiAgICB0aHJvdyBuZXcgTWlzc2luZ0ljb24oJ0ljb24gaXMgbWlzc2luZyBmb3IgcHJlZml4ICcgKyBwcmVmaXggKyAnIHdpdGggaWNvbiBuYW1lICcgKyBpY29uTmFtZSk7XG4gIH1cblxuICByZXR1cm4gdmFsO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVN2Z1JlcGxhY2VtZW50TXV0YXRpb24obm9kZSwgbm9kZU1ldGEpIHtcbiAgdmFyIGljb25OYW1lID0gbm9kZU1ldGEuaWNvbk5hbWUsXG4gICAgICB0aXRsZSA9IG5vZGVNZXRhLnRpdGxlLFxuICAgICAgcHJlZml4ID0gbm9kZU1ldGEucHJlZml4LFxuICAgICAgdHJhbnNmb3JtID0gbm9kZU1ldGEudHJhbnNmb3JtLFxuICAgICAgc3ltYm9sID0gbm9kZU1ldGEuc3ltYm9sLFxuICAgICAgbWFzayA9IG5vZGVNZXRhLm1hc2ssXG4gICAgICBleHRyYSA9IG5vZGVNZXRhLmV4dHJhO1xuXG5cbiAgcmV0dXJuIFtub2RlLCBtYWtlSW5saW5lU3ZnQWJzdHJhY3Qoe1xuICAgIGljb25zOiB7XG4gICAgICBtYWluOiBmaW5kSWNvbihpY29uTmFtZSwgcHJlZml4KSxcbiAgICAgIG1hc2s6IGZpbmRJY29uKG1hc2suaWNvbk5hbWUsIG1hc2sucHJlZml4KVxuICAgIH0sXG4gICAgcHJlZml4OiBwcmVmaXgsXG4gICAgaWNvbk5hbWU6IGljb25OYW1lLFxuICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgIHN5bWJvbDogc3ltYm9sLFxuICAgIG1hc2s6IG1hc2ssXG4gICAgdGl0bGU6IHRpdGxlLFxuICAgIGV4dHJhOiBleHRyYSxcbiAgICB3YXRjaGFibGU6IHRydWVcbiAgfSldO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUxheWVyc1RleHQobm9kZSwgbm9kZU1ldGEpIHtcbiAgdmFyIHRpdGxlID0gbm9kZU1ldGEudGl0bGUsXG4gICAgICB0cmFuc2Zvcm0gPSBub2RlTWV0YS50cmFuc2Zvcm0sXG4gICAgICBleHRyYSA9IG5vZGVNZXRhLmV4dHJhO1xuXG5cbiAgdmFyIHdpZHRoID0gbnVsbDtcbiAgdmFyIGhlaWdodCA9IG51bGw7XG5cbiAgaWYgKElTX0lFKSB7XG4gICAgdmFyIGNvbXB1dGVkRm9udFNpemUgPSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKG5vZGUpLmZvbnRTaXplLCAxMCk7XG4gICAgdmFyIGJvdW5kaW5nQ2xpZW50UmVjdCA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgd2lkdGggPSBib3VuZGluZ0NsaWVudFJlY3Qud2lkdGggLyBjb21wdXRlZEZvbnRTaXplO1xuICAgIGhlaWdodCA9IGJvdW5kaW5nQ2xpZW50UmVjdC5oZWlnaHQgLyBjb21wdXRlZEZvbnRTaXplO1xuICB9XG5cbiAgaWYgKGNvbmZpZyQxLmF1dG9BMTF5ICYmICF0aXRsZSkge1xuICAgIGV4dHJhLmF0dHJpYnV0ZXNbJ2FyaWEtaGlkZGVuJ10gPSAndHJ1ZSc7XG4gIH1cblxuICByZXR1cm4gW25vZGUsIG1ha2VMYXllcnNUZXh0QWJzdHJhY3Qoe1xuICAgIGNvbnRlbnQ6IG5vZGUuaW5uZXJIVE1MLFxuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICB0aXRsZTogdGl0bGUsXG4gICAgZXh0cmE6IGV4dHJhLFxuICAgIHdhdGNoYWJsZTogdHJ1ZVxuICB9KV07XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlTXV0YXRpb24obm9kZSkge1xuICB2YXIgbm9kZU1ldGEgPSBwYXJzZU1ldGEobm9kZSk7XG5cbiAgaWYgKH5ub2RlTWV0YS5leHRyYS5jbGFzc2VzLmluZGV4T2YoTEFZRVJTX1RFWFRfQ0xBU1NOQU1FKSkge1xuICAgIHJldHVybiBnZW5lcmF0ZUxheWVyc1RleHQobm9kZSwgbm9kZU1ldGEpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBnZW5lcmF0ZVN2Z1JlcGxhY2VtZW50TXV0YXRpb24obm9kZSwgbm9kZU1ldGEpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZShub2RlKSB7XG4gIGlmICh0eXBlb2Ygbm9kZS5yZW1vdmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBub2RlLnJlbW92ZSgpO1xuICB9IGVsc2UgaWYgKG5vZGUgJiYgbm9kZS5wYXJlbnROb2RlKSB7XG4gICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNlYXJjaFBzZXVkb0VsZW1lbnRzKHJvb3QpIHtcbiAgaWYgKCFJU19ET00pIHJldHVybjtcblxuICB2YXIgZW5kID0gcGVyZi5iZWdpbignc2VhcmNoUHNldWRvRWxlbWVudHMnKTtcblxuICBkaXNhYmxlT2JzZXJ2YXRpb24oZnVuY3Rpb24gKCkge1xuICAgIHRvQXJyYXkocm9vdC5xdWVyeVNlbGVjdG9yQWxsKCcqJykpLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIFsnOmJlZm9yZScsICc6YWZ0ZXInXS5mb3JFYWNoKGZ1bmN0aW9uIChwb3MpIHtcbiAgICAgICAgdmFyIHN0eWxlcyA9IFdJTkRPVy5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIHBvcyk7XG4gICAgICAgIHZhciBmb250RmFtaWx5ID0gc3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ2ZvbnQtZmFtaWx5JykubWF0Y2goRk9OVF9GQU1JTFlfUEFUVEVSTik7XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IHRvQXJyYXkobm9kZS5jaGlsZHJlbik7XG4gICAgICAgIHZhciBwc2V1ZG9FbGVtZW50ID0gY2hpbGRyZW4uZmlsdGVyKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgcmV0dXJuIGMuZ2V0QXR0cmlidXRlKERBVEFfRkFfUFNFVURPX0VMRU1FTlQpID09PSBwb3M7XG4gICAgICAgIH0pWzBdO1xuXG4gICAgICAgIGlmIChwc2V1ZG9FbGVtZW50KSB7XG4gICAgICAgICAgaWYgKHBzZXVkb0VsZW1lbnQubmV4dFNpYmxpbmcgJiYgcHNldWRvRWxlbWVudC5uZXh0U2libGluZy50ZXh0Q29udGVudC5pbmRleE9mKERBVEFfRkFfUFNFVURPX0VMRU1FTlQpID4gLTEpIHtcbiAgICAgICAgICAgIHJlbW92ZShwc2V1ZG9FbGVtZW50Lm5leHRTaWJsaW5nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVtb3ZlKHBzZXVkb0VsZW1lbnQpO1xuICAgICAgICAgIHBzZXVkb0VsZW1lbnQgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZvbnRGYW1pbHkgJiYgIXBzZXVkb0VsZW1lbnQpIHtcbiAgICAgICAgICB2YXIgY29udGVudCA9IHN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdjb250ZW50Jyk7XG4gICAgICAgICAgdmFyIGkgPSBET0NVTUVOVC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgICAgaS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJycgKyBTVFlMRV9UT19QUkVGSVhbZm9udEZhbWlseVsxXV0pO1xuICAgICAgICAgIGkuc2V0QXR0cmlidXRlKERBVEFfRkFfUFNFVURPX0VMRU1FTlQsIHBvcyk7XG4gICAgICAgICAgaS5pbm5lclRleHQgPSBjb250ZW50Lmxlbmd0aCA9PT0gMyA/IGNvbnRlbnQuc3Vic3RyKDEsIDEpIDogY29udGVudDtcbiAgICAgICAgICBpZiAocG9zID09PSAnOmJlZm9yZScpIHtcbiAgICAgICAgICAgIG5vZGUuaW5zZXJ0QmVmb3JlKGksIG5vZGUuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZW5kKCk7XG59XG5cbmZ1bmN0aW9uIG9uVHJlZShyb290KSB7XG4gIHZhciBjYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbnVsbDtcblxuICBpZiAoIUlTX0RPTSkgcmV0dXJuO1xuXG4gIHZhciBodG1sQ2xhc3NMaXN0ID0gRE9DVU1FTlQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdDtcbiAgdmFyIGhjbEFkZCA9IGZ1bmN0aW9uIGhjbEFkZChzdWZmaXgpIHtcbiAgICByZXR1cm4gaHRtbENsYXNzTGlzdC5hZGQoSFRNTF9DTEFTU19JMlNWR19CQVNFX0NMQVNTICsgJy0nICsgc3VmZml4KTtcbiAgfTtcbiAgdmFyIGhjbFJlbW92ZSA9IGZ1bmN0aW9uIGhjbFJlbW92ZShzdWZmaXgpIHtcbiAgICByZXR1cm4gaHRtbENsYXNzTGlzdC5yZW1vdmUoSFRNTF9DTEFTU19JMlNWR19CQVNFX0NMQVNTICsgJy0nICsgc3VmZml4KTtcbiAgfTtcbiAgdmFyIHByZWZpeGVzID0gT2JqZWN0LmtleXMoc3R5bGVzKTtcbiAgdmFyIHByZWZpeGVzRG9tUXVlcnkgPSBbJy4nICsgTEFZRVJTX1RFWFRfQ0xBU1NOQU1FICsgJzpub3QoWycgKyBEQVRBX0ZBX0kyU1ZHICsgJ10pJ10uY29uY2F0KHByZWZpeGVzLm1hcChmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiAnLicgKyBwICsgJzpub3QoWycgKyBEQVRBX0ZBX0kyU1ZHICsgJ10pJztcbiAgfSkpLmpvaW4oJywgJyk7XG5cbiAgaWYgKHByZWZpeGVzRG9tUXVlcnkubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGNhbmRpZGF0ZXMgPSB0b0FycmF5KHJvb3QucXVlcnlTZWxlY3RvckFsbChwcmVmaXhlc0RvbVF1ZXJ5KSk7XG5cbiAgaWYgKGNhbmRpZGF0ZXMubGVuZ3RoID4gMCkge1xuICAgIGhjbEFkZCgncGVuZGluZycpO1xuICAgIGhjbFJlbW92ZSgnY29tcGxldGUnKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgbWFyayA9IHBlcmYuYmVnaW4oJ29uVHJlZScpO1xuXG4gIHZhciBtdXRhdGlvbnMgPSBjYW5kaWRhdGVzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBub2RlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBtdXRhdGlvbiA9IGdlbmVyYXRlTXV0YXRpb24obm9kZSk7XG5cbiAgICAgIGlmIChtdXRhdGlvbikge1xuICAgICAgICBhY2MucHVzaChtdXRhdGlvbik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCFQUk9EVUNUSU9OKSB7XG4gICAgICAgIGlmIChlIGluc3RhbmNlb2YgTWlzc2luZ0ljb24pIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwgW10pO1xuXG4gIG1hcmsoKTtcblxuICBwZXJmb3JtKG11dGF0aW9ucywgZnVuY3Rpb24gKCkge1xuICAgIGhjbEFkZCgnYWN0aXZlJyk7XG4gICAgaGNsQWRkKCdjb21wbGV0ZScpO1xuICAgIGhjbFJlbW92ZSgncGVuZGluZycpO1xuXG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2soKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9uTm9kZShub2RlKSB7XG4gIHZhciBjYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbnVsbDtcblxuICB2YXIgbXV0YXRpb24gPSBnZW5lcmF0ZU11dGF0aW9uKG5vZGUpO1xuXG4gIGlmIChtdXRhdGlvbikge1xuICAgIHBlcmZvcm0oW211dGF0aW9uXSwgY2FsbGJhY2spO1xuICB9XG59XG5cbnZhciBiYXNlU3R5bGVzID0gXCJzdmc6bm90KDpyb290KS5zdmctaW5saW5lLS1mYSB7XFxuICBvdmVyZmxvdzogdmlzaWJsZTsgfVxcblxcbi5zdmctaW5saW5lLS1mYSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBoZWlnaHQ6IDFlbTtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgdmVydGljYWwtYWxpZ246IC0uMTI1ZW07IH1cXG4gIC5zdmctaW5saW5lLS1mYS5mYS1sZyB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiAtLjIyNWVtOyB9XFxuICAuc3ZnLWlubGluZS0tZmEuZmEtdy0xIHtcXG4gICAgd2lkdGg6IDAuMDYyNWVtOyB9XFxuICAuc3ZnLWlubGluZS0tZmEuZmEtdy0yIHtcXG4gICAgd2lkdGg6IDAuMTI1ZW07IH1cXG4gIC5zdmctaW5saW5lLS1mYS5mYS13LTMge1xcbiAgICB3aWR0aDogMC4xODc1ZW07IH1cXG4gIC5zdmctaW5saW5lLS1mYS5mYS13LTQge1xcbiAgICB3aWR0aDogMC4yNWVtOyB9XFxuICAuc3ZnLWlubGluZS0tZmEuZmEtdy01IHtcXG4gICAgd2lkdGg6IDAuMzEyNWVtOyB9XFxuICAuc3ZnLWlubGluZS0tZmEuZmEtdy02IHtcXG4gICAgd2lkdGg6IDAuMzc1ZW07IH1cXG4gIC5zdmctaW5saW5lLS1mYS5mYS13LTcge1xcbiAgICB3aWR0aDogMC40Mzc1ZW07IH1cXG4gIC5zdmctaW5saW5lLS1mYS5mYS13LTgge1xcbiAgICB3aWR0aDogMC41ZW07IH1cXG4gIC5zdmctaW5saW5lLS1mYS5mYS13LTkge1xcbiAgICB3aWR0aDogMC41NjI1ZW07IH1cXG4gIC5zdmctaW5saW5lLS1mYS5mYS13LTEwIHtcXG4gICAgd2lkdGg6IDAuNjI1ZW07IH1cXG4gIC5zdmctaW5saW5lLS1mYS5mYS13LTExIHtcXG4gICAgd2lkdGg6IDAuNjg3NWVtOyB9XFxuICAuc3ZnLWlubGluZS0tZmEuZmEtdy0xMiB7XFxuICAgIHdpZHRoOiAwLjc1ZW07IH1cXG4gIC5zdmctaW5saW5lLS1mYS5mYS13LTEzIHtcXG4gICAgd2lkdGg6IDAuODEyNWVtOyB9XFxuICAuc3ZnLWlubGluZS0tZmEuZmEtdy0xNCB7XFxuICAgIHdpZHRoOiAwLjg3NWVtOyB9XFxuICAuc3ZnLWlubGluZS0tZmEuZmEtdy0xNSB7XFxuICAgIHdpZHRoOiAwLjkzNzVlbTsgfVxcbiAgLnN2Zy1pbmxpbmUtLWZhLmZhLXctMTYge1xcbiAgICB3aWR0aDogMWVtOyB9XFxuICAuc3ZnLWlubGluZS0tZmEuZmEtdy0xNyB7XFxuICAgIHdpZHRoOiAxLjA2MjVlbTsgfVxcbiAgLnN2Zy1pbmxpbmUtLWZhLmZhLXctMTgge1xcbiAgICB3aWR0aDogMS4xMjVlbTsgfVxcbiAgLnN2Zy1pbmxpbmUtLWZhLmZhLXctMTkge1xcbiAgICB3aWR0aDogMS4xODc1ZW07IH1cXG4gIC5zdmctaW5saW5lLS1mYS5mYS13LTIwIHtcXG4gICAgd2lkdGg6IDEuMjVlbTsgfVxcbiAgLnN2Zy1pbmxpbmUtLWZhLmZhLXB1bGwtbGVmdCB7XFxuICAgIG1hcmdpbi1yaWdodDogLjNlbTtcXG4gICAgd2lkdGg6IGF1dG87IH1cXG4gIC5zdmctaW5saW5lLS1mYS5mYS1wdWxsLXJpZ2h0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IC4zZW07XFxuICAgIHdpZHRoOiBhdXRvOyB9XFxuICAuc3ZnLWlubGluZS0tZmEuZmEtYm9yZGVyIHtcXG4gICAgaGVpZ2h0OiAxLjVlbTsgfVxcbiAgLnN2Zy1pbmxpbmUtLWZhLmZhLWxpIHtcXG4gICAgd2lkdGg6IDJlbTsgfVxcbiAgLnN2Zy1pbmxpbmUtLWZhLmZhLWZ3IHtcXG4gICAgd2lkdGg6IDEuMjVlbTsgfVxcblxcbi5mYS1sYXllcnMgc3ZnLnN2Zy1pbmxpbmUtLWZhIHtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBtYXJnaW46IGF1dG87XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDsgfVxcblxcbi5mYS1sYXllcnMge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgaGVpZ2h0OiAxZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB2ZXJ0aWNhbC1hbGlnbjogLS4xMjVlbTtcXG4gIHdpZHRoOiAxZW07IH1cXG4gIC5mYS1sYXllcnMgc3ZnLnN2Zy1pbmxpbmUtLWZhIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7IH1cXG5cXG4uZmEtbGF5ZXJzLXRleHQsIC5mYS1sYXllcnMtY291bnRlciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4uZmEtbGF5ZXJzLXRleHQge1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjsgfVxcblxcbi5mYS1sYXllcnMtY291bnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYyNTNhO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6ICNmZmY7XFxuICBoZWlnaHQ6IDEuNWVtO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBtYXgtd2lkdGg6IDVlbTtcXG4gIG1pbi13aWR0aDogMS41ZW07XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcGFkZGluZzogLjI1ZW07XFxuICByaWdodDogMDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgdG9wOiAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMjUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMjUpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3AgcmlnaHQ7XFxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCByaWdodDsgfVxcblxcbi5mYS1sYXllcnMtYm90dG9tLXJpZ2h0IHtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiBhdXRvO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMjUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMjUpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gcmlnaHQ7XFxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSByaWdodDsgfVxcblxcbi5mYS1sYXllcnMtYm90dG9tLWxlZnQge1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiBhdXRvO1xcbiAgdG9wOiBhdXRvO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMjUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMjUpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7IH1cXG5cXG4uZmEtbGF5ZXJzLXRvcC1yaWdodCB7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wIHJpZ2h0O1xcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgcmlnaHQ7IH1cXG5cXG4uZmEtbGF5ZXJzLXRvcC1sZWZ0IHtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogYXV0bztcXG4gIHRvcDogMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XFxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0OyB9XFxuXFxuLmZhLWxnIHtcXG4gIGZvbnQtc2l6ZTogMS4zMzMzM2VtO1xcbiAgbGluZS1oZWlnaHQ6IDAuNzVlbTtcXG4gIHZlcnRpY2FsLWFsaWduOiAtLjA2NjdlbTsgfVxcblxcbi5mYS14cyB7XFxuICBmb250LXNpemU6IC43NWVtOyB9XFxuXFxuLmZhLXNtIHtcXG4gIGZvbnQtc2l6ZTogLjg3NWVtOyB9XFxuXFxuLmZhLTF4IHtcXG4gIGZvbnQtc2l6ZTogMWVtOyB9XFxuXFxuLmZhLTJ4IHtcXG4gIGZvbnQtc2l6ZTogMmVtOyB9XFxuXFxuLmZhLTN4IHtcXG4gIGZvbnQtc2l6ZTogM2VtOyB9XFxuXFxuLmZhLTR4IHtcXG4gIGZvbnQtc2l6ZTogNGVtOyB9XFxuXFxuLmZhLTV4IHtcXG4gIGZvbnQtc2l6ZTogNWVtOyB9XFxuXFxuLmZhLTZ4IHtcXG4gIGZvbnQtc2l6ZTogNmVtOyB9XFxuXFxuLmZhLTd4IHtcXG4gIGZvbnQtc2l6ZTogN2VtOyB9XFxuXFxuLmZhLTh4IHtcXG4gIGZvbnQtc2l6ZTogOGVtOyB9XFxuXFxuLmZhLTl4IHtcXG4gIGZvbnQtc2l6ZTogOWVtOyB9XFxuXFxuLmZhLTEweCB7XFxuICBmb250LXNpemU6IDEwZW07IH1cXG5cXG4uZmEtZncge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEuMjVlbTsgfVxcblxcbi5mYS11bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBtYXJnaW4tbGVmdDogMi41ZW07XFxuICBwYWRkaW5nLWxlZnQ6IDA7IH1cXG4gIC5mYS11bCA+IGxpIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLmZhLWxpIHtcXG4gIGxlZnQ6IC0yZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMmVtO1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cXG5cXG4uZmEtYm9yZGVyIHtcXG4gIGJvcmRlcjogc29saWQgMC4wOGVtICNlZWU7XFxuICBib3JkZXItcmFkaXVzOiAuMWVtO1xcbiAgcGFkZGluZzogLjJlbSAuMjVlbSAuMTVlbTsgfVxcblxcbi5mYS1wdWxsLWxlZnQge1xcbiAgZmxvYXQ6IGxlZnQ7IH1cXG5cXG4uZmEtcHVsbC1yaWdodCB7XFxuICBmbG9hdDogcmlnaHQ7IH1cXG5cXG4uZmEuZmEtcHVsbC1sZWZ0LFxcbi5mYXMuZmEtcHVsbC1sZWZ0LFxcbi5mYXIuZmEtcHVsbC1sZWZ0LFxcbi5mYWwuZmEtcHVsbC1sZWZ0LFxcbi5mYWIuZmEtcHVsbC1sZWZ0IHtcXG4gIG1hcmdpbi1yaWdodDogLjNlbTsgfVxcblxcbi5mYS5mYS1wdWxsLXJpZ2h0LFxcbi5mYXMuZmEtcHVsbC1yaWdodCxcXG4uZmFyLmZhLXB1bGwtcmlnaHQsXFxuLmZhbC5mYS1wdWxsLXJpZ2h0LFxcbi5mYWIuZmEtcHVsbC1yaWdodCB7XFxuICBtYXJnaW4tbGVmdDogLjNlbTsgfVxcblxcbi5mYS1zcGluIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYS1zcGluIDJzIGluZmluaXRlIGxpbmVhcjtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBmYS1zcGluIDJzIGluZmluaXRlIGxpbmVhcjsgfVxcblxcbi5mYS1wdWxzZSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZmEtc3BpbiAxcyBpbmZpbml0ZSBzdGVwcyg4KTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBmYS1zcGluIDFzIGluZmluaXRlIHN0ZXBzKDgpOyB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhLXNwaW4ge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gfVxcblxcbkBrZXlmcmFtZXMgZmEtc3BpbiB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XFxuXFxuLmZhLXJvdGF0ZS05MCB7XFxuICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MSlcXFwiO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTsgfVxcblxcbi5mYS1yb3RhdGUtMTgwIHtcXG4gIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0yKVxcXCI7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7IH1cXG5cXG4uZmEtcm90YXRlLTI3MCB7XFxuICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MylcXFwiO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpOyB9XFxuXFxuLmZhLWZsaXAtaG9yaXpvbnRhbCB7XFxuICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MCwgbWlycm9yPTEpXFxcIjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLTEsIDEpOyB9XFxuXFxuLmZhLWZsaXAtdmVydGljYWwge1xcbiAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTIsIG1pcnJvcj0xKVxcXCI7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgLTEpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIC0xKTsgfVxcblxcbi5mYS1mbGlwLWhvcml6b250YWwuZmEtZmxpcC12ZXJ0aWNhbCB7XFxuICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MiwgbWlycm9yPTEpXFxcIjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgtMSwgLTEpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC0xLCAtMSk7IH1cXG5cXG46cm9vdCAuZmEtcm90YXRlLTkwLFxcbjpyb290IC5mYS1yb3RhdGUtMTgwLFxcbjpyb290IC5mYS1yb3RhdGUtMjcwLFxcbjpyb290IC5mYS1mbGlwLWhvcml6b250YWwsXFxuOnJvb3QgLmZhLWZsaXAtdmVydGljYWwge1xcbiAgLXdlYmtpdC1maWx0ZXI6IG5vbmU7XFxuICAgICAgICAgIGZpbHRlcjogbm9uZTsgfVxcblxcbi5mYS1zdGFjayB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAyZW07IH1cXG5cXG4uZmEtc3RhY2stMXgsXFxuLmZhLXN0YWNrLTJ4IHtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBtYXJnaW46IGF1dG87XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDsgfVxcblxcbi5zdmctaW5saW5lLS1mYS5mYS1zdGFjay0xeCB7XFxuICBoZWlnaHQ6IDFlbTtcXG4gIHdpZHRoOiAxZW07IH1cXG5cXG4uc3ZnLWlubGluZS0tZmEuZmEtc3RhY2stMngge1xcbiAgaGVpZ2h0OiAyZW07XFxuICB3aWR0aDogMmVtOyB9XFxuXFxuLmZhLWludmVyc2Uge1xcbiAgY29sb3I6ICNmZmY7IH1cXG5cXG4uc3Itb25seSB7XFxuICBib3JkZXI6IDA7XFxuICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBtYXJnaW46IC0xcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcGFkZGluZzogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxcHg7IH1cXG5cXG4uc3Itb25seS1mb2N1c2FibGU6YWN0aXZlLCAuc3Itb25seS1mb2N1c2FibGU6Zm9jdXMge1xcbiAgY2xpcDogYXV0bztcXG4gIGhlaWdodDogYXV0bztcXG4gIG1hcmdpbjogMDtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgcG9zaXRpb246IHN0YXRpYztcXG4gIHdpZHRoOiBhdXRvOyB9XFxuXCI7XG5cbnZhciBjc3MgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBkZnAgPSBERUZBVUxUX0ZBTUlMWV9QUkVGSVg7XG4gIHZhciBkcmMgPSBERUZBVUxUX1JFUExBQ0VNRU5UX0NMQVNTO1xuICB2YXIgZnAgPSBjb25maWckMS5mYW1pbHlQcmVmaXg7XG4gIHZhciByYyA9IGNvbmZpZyQxLnJlcGxhY2VtZW50Q2xhc3M7XG4gIHZhciBzID0gYmFzZVN0eWxlcztcblxuICBpZiAoZnAgIT09IGRmcCB8fCByYyAhPT0gZHJjKSB7XG4gICAgdmFyIGRQYXR0ID0gbmV3IFJlZ0V4cCgnXFxcXC4nICsgZGZwICsgJ1xcXFwtJywgJ2cnKTtcbiAgICB2YXIgclBhdHQgPSBuZXcgUmVnRXhwKCdcXFxcLicgKyBkcmMsICdnJyk7XG5cbiAgICBzID0gcy5yZXBsYWNlKGRQYXR0LCAnLicgKyBmcCArICctJykucmVwbGFjZShyUGF0dCwgJy4nICsgcmMpO1xuICB9XG5cbiAgcmV0dXJuIHM7XG59O1xuXG5mdW5jdGlvbiBkZWZpbmUocHJlZml4LCBpY29ucykge1xuICB2YXIgbm9ybWFsaXplZCA9IE9iamVjdC5rZXlzKGljb25zKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgaWNvbk5hbWUpIHtcbiAgICB2YXIgaWNvbiA9IGljb25zW2ljb25OYW1lXTtcbiAgICB2YXIgZXhwYW5kZWQgPSAhIWljb24uaWNvbjtcblxuICAgIGlmIChleHBhbmRlZCkge1xuICAgICAgYWNjW2ljb24uaWNvbk5hbWVdID0gaWNvbi5pY29uO1xuICAgIH0gZWxzZSB7XG4gICAgICBhY2NbaWNvbk5hbWVdID0gaWNvbjtcbiAgICB9XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuXG4gIGlmICh0eXBlb2YgbmFtZXNwYWNlLmhvb2tzLmFkZFBhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICBuYW1lc3BhY2UuaG9va3MuYWRkUGFjayhwcmVmaXgsIG5vcm1hbGl6ZWQpO1xuICB9IGVsc2Uge1xuICAgIG5hbWVzcGFjZS5zdHlsZXNbcHJlZml4XSA9IF9leHRlbmRzKHt9LCBuYW1lc3BhY2Uuc3R5bGVzW3ByZWZpeF0gfHwge30sIG5vcm1hbGl6ZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvbnQgQXdlc29tZSA0IHVzZWQgdGhlIHByZWZpeCBvZiBgZmFgIGZvciBhbGwgaWNvbnMuIFdpdGggdGhlIGludHJvZHVjdGlvblxuICAgKiBvZiBuZXcgc3R5bGVzIHdlIG5lZWRlZCB0byBkaWZmZXJlbnRpYXRlIGJldHdlZW4gdGhlbS4gUHJlZml4IGBmYWAgaXMgbm93IGFuIGFsaWFzXG4gICAqIGZvciBgZmFzYCBzbyB3ZSdsbCBlYXN5IHRoZSB1cGdyYWRlIHByb2Nlc3MgZm9yIG91ciB1c2VycyBieSBhdXRvbWF0aWNhbGx5IGRlZmluaW5nXG4gICAqIHRoaXMgYXMgd2VsbC5cbiAgICovXG4gIGlmIChwcmVmaXggPT09ICdmYXMnKSB7XG4gICAgZGVmaW5lKCdmYScsIGljb25zKTtcbiAgfVxufVxuXG52YXIgTGlicmFyeSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTGlicmFyeSgpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBMaWJyYXJ5KTtcblxuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGNyZWF0ZUNsYXNzKExpYnJhcnksIFt7XG4gICAga2V5OiAnYWRkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGRlZmluaXRpb25zID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGRlZmluaXRpb25zW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICB2YXIgYWRkaXRpb25zID0gZGVmaW5pdGlvbnMucmVkdWNlKHRoaXMuX3B1bGxEZWZpbml0aW9ucywge30pO1xuXG4gICAgICBPYmplY3Qua2V5cyhhZGRpdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBfdGhpcy5kZWZpbml0aW9uc1trZXldID0gX2V4dGVuZHMoe30sIF90aGlzLmRlZmluaXRpb25zW2tleV0gfHwge30sIGFkZGl0aW9uc1trZXldKTtcbiAgICAgICAgZGVmaW5lKGtleSwgYWRkaXRpb25zW2tleV0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVzZXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgIHRoaXMuZGVmaW5pdGlvbnMgPSB7fTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfcHVsbERlZmluaXRpb25zJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3B1bGxEZWZpbml0aW9ucyhhZGRpdGlvbnMsIGRlZmluaXRpb24pIHtcbiAgICAgIHZhciBub3JtYWxpemVkID0gZGVmaW5pdGlvbi5wcmVmaXggJiYgZGVmaW5pdGlvbi5pY29uTmFtZSAmJiBkZWZpbml0aW9uLmljb24gPyB7IDA6IGRlZmluaXRpb24gfSA6IGRlZmluaXRpb247XG5cbiAgICAgIE9iamVjdC5rZXlzKG5vcm1hbGl6ZWQpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBfbm9ybWFsaXplZCRrZXkgPSBub3JtYWxpemVkW2tleV0sXG4gICAgICAgICAgICBwcmVmaXggPSBfbm9ybWFsaXplZCRrZXkucHJlZml4LFxuICAgICAgICAgICAgaWNvbk5hbWUgPSBfbm9ybWFsaXplZCRrZXkuaWNvbk5hbWUsXG4gICAgICAgICAgICBpY29uID0gX25vcm1hbGl6ZWQka2V5Lmljb247XG5cblxuICAgICAgICBpZiAoIWFkZGl0aW9uc1twcmVmaXhdKSBhZGRpdGlvbnNbcHJlZml4XSA9IHt9O1xuXG4gICAgICAgIGFkZGl0aW9uc1twcmVmaXhdW2ljb25OYW1lXSA9IGljb247XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGFkZGl0aW9ucztcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIExpYnJhcnk7XG59KCk7XG5cbmZ1bmN0aW9uIHByZXBJY29uKGljb24pIHtcbiAgdmFyIHdpZHRoID0gaWNvblswXTtcbiAgdmFyIGhlaWdodCA9IGljb25bMV07XG4gIHZhciB2ZWN0b3JEYXRhID0gaWNvbi5zbGljZSg0KTtcblxuICByZXR1cm4ge1xuICAgIGZvdW5kOiB0cnVlLFxuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICBpY29uOiB7IHRhZzogJ3BhdGgnLCBhdHRyaWJ1dGVzOiB7IGZpbGw6ICdjdXJyZW50Q29sb3InLCBkOiB2ZWN0b3JEYXRhWzBdIH0gfVxuICB9O1xufVxuXG52YXIgX2Nzc0luc2VydGVkID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGVuc3VyZUNzcygpIHtcbiAgaWYgKCFjb25maWckMS5hdXRvQWRkQ3NzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFfY3NzSW5zZXJ0ZWQpIHtcbiAgICBpbnNlcnRDc3MoY3NzKCkpO1xuICB9XG5cbiAgX2Nzc0luc2VydGVkID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gYXBpT2JqZWN0KHZhbCwgYWJzdHJhY3RDcmVhdG9yKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWwsICdhYnN0cmFjdCcsIHtcbiAgICBnZXQ6IGFic3RyYWN0Q3JlYXRvclxuICB9KTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsLCAnaHRtbCcsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB2YWwuYWJzdHJhY3QubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHJldHVybiB0b0h0bWwoYSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWwsICdub2RlJywge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgaWYgKCFJU19ET00pIHJldHVybjtcblxuICAgICAgdmFyIGNvbnRhaW5lciA9IERPQ1VNRU5ULmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IHZhbC5odG1sO1xuICAgICAgcmV0dXJuIGNvbnRhaW5lci5jaGlsZHJlbjtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB2YWw7XG59XG5cbmZ1bmN0aW9uIGZpbmRJY29uRGVmaW5pdGlvbihwYXJhbXMpIHtcbiAgdmFyIF9wYXJhbXMkcHJlZml4ID0gcGFyYW1zLnByZWZpeCxcbiAgICAgIHByZWZpeCA9IF9wYXJhbXMkcHJlZml4ID09PSB1bmRlZmluZWQgPyAnZmEnIDogX3BhcmFtcyRwcmVmaXgsXG4gICAgICBpY29uTmFtZSA9IHBhcmFtcy5pY29uTmFtZTtcblxuXG4gIGlmICghaWNvbk5hbWUpIHJldHVybjtcblxuICByZXR1cm4gaWNvbkZyb21NYXBwaW5nKGxpYnJhcnkuZGVmaW5pdGlvbnMsIHByZWZpeCwgaWNvbk5hbWUpIHx8IGljb25Gcm9tTWFwcGluZyhuYW1lc3BhY2Uuc3R5bGVzLCBwcmVmaXgsIGljb25OYW1lKTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUljb25zKG5leHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChtYXliZUljb25EZWZpbml0aW9uKSB7XG4gICAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICB2YXIgaWNvbkRlZmluaXRpb24gPSAobWF5YmVJY29uRGVmaW5pdGlvbiB8fCB7fSkuaWNvbiA/IG1heWJlSWNvbkRlZmluaXRpb24gOiBmaW5kSWNvbkRlZmluaXRpb24obWF5YmVJY29uRGVmaW5pdGlvbiB8fCB7fSk7XG5cbiAgICB2YXIgbWFzayA9IHBhcmFtcy5tYXNrO1xuXG5cbiAgICBpZiAobWFzaykge1xuICAgICAgbWFzayA9IChtYXNrIHx8IHt9KS5pY29uID8gbWFzayA6IGZpbmRJY29uRGVmaW5pdGlvbihtYXNrIHx8IHt9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dChpY29uRGVmaW5pdGlvbiwgX2V4dGVuZHMoe30sIHBhcmFtcywgeyBtYXNrOiBtYXNrIH0pKTtcbiAgfTtcbn1cblxudmFyIGxpYnJhcnkgPSBuZXcgTGlicmFyeSgpO1xuXG52YXIgbm9BdXRvID0gZnVuY3Rpb24gbm9BdXRvKCkge1xuICBhdXRvKGZhbHNlKTtcbiAgZGlzY29ubmVjdCgpO1xufTtcblxudmFyIGRvbSA9IHtcbiAgaTJzdmc6IGZ1bmN0aW9uIGkyc3ZnKCkge1xuICAgIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgaWYgKElTX0RPTSkge1xuICAgICAgZW5zdXJlQ3NzKCk7XG5cbiAgICAgIHZhciBfcGFyYW1zJG5vZGUgPSBwYXJhbXMubm9kZSxcbiAgICAgICAgICBub2RlID0gX3BhcmFtcyRub2RlID09PSB1bmRlZmluZWQgPyBET0NVTUVOVCA6IF9wYXJhbXMkbm9kZSxcbiAgICAgICAgICBfcGFyYW1zJGNhbGxiYWNrID0gcGFyYW1zLmNhbGxiYWNrLFxuICAgICAgICAgIGNhbGxiYWNrID0gX3BhcmFtcyRjYWxsYmFjayA9PT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKCkge30gOiBfcGFyYW1zJGNhbGxiYWNrO1xuXG5cbiAgICAgIGlmIChjb25maWckMS5zZWFyY2hQc2V1ZG9FbGVtZW50cykge1xuICAgICAgICBzZWFyY2hQc2V1ZG9FbGVtZW50cyhub2RlKTtcbiAgICAgIH1cblxuICAgICAgb25UcmVlKG5vZGUsIGNhbGxiYWNrKTtcbiAgICB9XG4gIH0sXG5cbiAgY3NzOiBjc3MsXG5cbiAgaW5zZXJ0Q3NzOiBmdW5jdGlvbiBpbnNlcnRDc3MkJDEoKSB7XG4gICAgaW5zZXJ0Q3NzKGNzcygpKTtcbiAgfVxufTtcblxudmFyIHBhcnNlID0ge1xuICB0cmFuc2Zvcm06IGZ1bmN0aW9uIHRyYW5zZm9ybSh0cmFuc2Zvcm1TdHJpbmcpIHtcbiAgICByZXR1cm4gcGFyc2VUcmFuc2Zvcm1TdHJpbmcodHJhbnNmb3JtU3RyaW5nKTtcbiAgfVxufTtcblxudmFyIGljb24gPSByZXNvbHZlSWNvbnMoZnVuY3Rpb24gKGljb25EZWZpbml0aW9uKSB7XG4gIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICB2YXIgX3BhcmFtcyR0cmFuc2Zvcm0gPSBwYXJhbXMudHJhbnNmb3JtLFxuICAgICAgdHJhbnNmb3JtID0gX3BhcmFtcyR0cmFuc2Zvcm0gPT09IHVuZGVmaW5lZCA/IG1lYW5pbmdsZXNzVHJhbnNmb3JtIDogX3BhcmFtcyR0cmFuc2Zvcm0sXG4gICAgICBfcGFyYW1zJHN5bWJvbCA9IHBhcmFtcy5zeW1ib2wsXG4gICAgICBzeW1ib2wgPSBfcGFyYW1zJHN5bWJvbCA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfcGFyYW1zJHN5bWJvbCxcbiAgICAgIF9wYXJhbXMkbWFzayA9IHBhcmFtcy5tYXNrLFxuICAgICAgbWFzayA9IF9wYXJhbXMkbWFzayA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IF9wYXJhbXMkbWFzayxcbiAgICAgIF9wYXJhbXMkdGl0bGUgPSBwYXJhbXMudGl0bGUsXG4gICAgICB0aXRsZSA9IF9wYXJhbXMkdGl0bGUgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBfcGFyYW1zJHRpdGxlLFxuICAgICAgX3BhcmFtcyRjbGFzc2VzID0gcGFyYW1zLmNsYXNzZXMsXG4gICAgICBjbGFzc2VzID0gX3BhcmFtcyRjbGFzc2VzID09PSB1bmRlZmluZWQgPyBbXSA6IF9wYXJhbXMkY2xhc3NlcyxcbiAgICAgIF9wYXJhbXMkYXR0cmlidXRlcyA9IHBhcmFtcy5hdHRyaWJ1dGVzLFxuICAgICAgYXR0cmlidXRlcyA9IF9wYXJhbXMkYXR0cmlidXRlcyA9PT0gdW5kZWZpbmVkID8ge30gOiBfcGFyYW1zJGF0dHJpYnV0ZXMsXG4gICAgICBfcGFyYW1zJHN0eWxlcyA9IHBhcmFtcy5zdHlsZXMsXG4gICAgICBzdHlsZXMgPSBfcGFyYW1zJHN0eWxlcyA9PT0gdW5kZWZpbmVkID8ge30gOiBfcGFyYW1zJHN0eWxlcztcblxuXG4gIGlmICghaWNvbkRlZmluaXRpb24pIHJldHVybjtcblxuICB2YXIgcHJlZml4ID0gaWNvbkRlZmluaXRpb24ucHJlZml4LFxuICAgICAgaWNvbk5hbWUgPSBpY29uRGVmaW5pdGlvbi5pY29uTmFtZSxcbiAgICAgIGljb24gPSBpY29uRGVmaW5pdGlvbi5pY29uO1xuXG5cbiAgcmV0dXJuIGFwaU9iamVjdChfZXh0ZW5kcyh7IHR5cGU6ICdpY29uJyB9LCBpY29uRGVmaW5pdGlvbiksIGZ1bmN0aW9uICgpIHtcbiAgICBlbnN1cmVDc3MoKTtcblxuICAgIGlmIChjb25maWckMS5hdXRvQTExeSkge1xuICAgICAgaWYgKHRpdGxlKSB7XG4gICAgICAgIGF0dHJpYnV0ZXNbJ2FyaWEtbGFiZWxsZWRieSddID0gY29uZmlnJDEucmVwbGFjZW1lbnRDbGFzcyArICctdGl0bGUtJyArIG5leHRVbmlxdWVJZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXR0cmlidXRlc1snYXJpYS1oaWRkZW4nXSA9ICd0cnVlJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWFrZUlubGluZVN2Z0Fic3RyYWN0KHtcbiAgICAgIGljb25zOiB7XG4gICAgICAgIG1haW46IHByZXBJY29uKGljb24pLFxuICAgICAgICBtYXNrOiBtYXNrID8gcHJlcEljb24obWFzay5pY29uKSA6IHsgZm91bmQ6IGZhbHNlLCB3aWR0aDogbnVsbCwgaGVpZ2h0OiBudWxsLCBpY29uOiB7fSB9XG4gICAgICB9LFxuICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICBpY29uTmFtZTogaWNvbk5hbWUsXG4gICAgICB0cmFuc2Zvcm06IF9leHRlbmRzKHt9LCBtZWFuaW5nbGVzc1RyYW5zZm9ybSwgdHJhbnNmb3JtKSxcbiAgICAgIHN5bWJvbDogc3ltYm9sLFxuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgZXh0cmE6IHtcbiAgICAgICAgYXR0cmlidXRlczogYXR0cmlidXRlcyxcbiAgICAgICAgc3R5bGVzOiBzdHlsZXMsXG4gICAgICAgIGNsYXNzZXM6IGNsYXNzZXNcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59KTtcblxudmFyIHRleHQgPSBmdW5jdGlvbiB0ZXh0KGNvbnRlbnQpIHtcbiAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHZhciBfcGFyYW1zJHRyYW5zZm9ybTIgPSBwYXJhbXMudHJhbnNmb3JtLFxuICAgICAgdHJhbnNmb3JtID0gX3BhcmFtcyR0cmFuc2Zvcm0yID09PSB1bmRlZmluZWQgPyBtZWFuaW5nbGVzc1RyYW5zZm9ybSA6IF9wYXJhbXMkdHJhbnNmb3JtMixcbiAgICAgIF9wYXJhbXMkdGl0bGUyID0gcGFyYW1zLnRpdGxlLFxuICAgICAgdGl0bGUgPSBfcGFyYW1zJHRpdGxlMiA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IF9wYXJhbXMkdGl0bGUyLFxuICAgICAgX3BhcmFtcyRjbGFzc2VzMiA9IHBhcmFtcy5jbGFzc2VzLFxuICAgICAgY2xhc3NlcyA9IF9wYXJhbXMkY2xhc3NlczIgPT09IHVuZGVmaW5lZCA/IFtdIDogX3BhcmFtcyRjbGFzc2VzMixcbiAgICAgIF9wYXJhbXMkYXR0cmlidXRlczIgPSBwYXJhbXMuYXR0cmlidXRlcyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfcGFyYW1zJGF0dHJpYnV0ZXMyID09PSB1bmRlZmluZWQgPyB7fSA6IF9wYXJhbXMkYXR0cmlidXRlczIsXG4gICAgICBfcGFyYW1zJHN0eWxlczIgPSBwYXJhbXMuc3R5bGVzLFxuICAgICAgc3R5bGVzID0gX3BhcmFtcyRzdHlsZXMyID09PSB1bmRlZmluZWQgPyB7fSA6IF9wYXJhbXMkc3R5bGVzMjtcblxuXG4gIHJldHVybiBhcGlPYmplY3QoeyB0eXBlOiAndGV4dCcsIGNvbnRlbnQ6IGNvbnRlbnQgfSwgZnVuY3Rpb24gKCkge1xuICAgIGVuc3VyZUNzcygpO1xuXG4gICAgcmV0dXJuIG1ha2VMYXllcnNUZXh0QWJzdHJhY3Qoe1xuICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgIHRyYW5zZm9ybTogX2V4dGVuZHMoe30sIG1lYW5pbmdsZXNzVHJhbnNmb3JtLCB0cmFuc2Zvcm0pLFxuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgZXh0cmE6IHtcbiAgICAgICAgYXR0cmlidXRlczogYXR0cmlidXRlcyxcbiAgICAgICAgc3R5bGVzOiBzdHlsZXMsXG4gICAgICAgIGNsYXNzZXM6IFtjb25maWckMS5mYW1pbHlQcmVmaXggKyAnLWxheWVycy10ZXh0J10uY29uY2F0KHRvQ29uc3VtYWJsZUFycmF5KGNsYXNzZXMpKVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbnZhciBsYXllciA9IGZ1bmN0aW9uIGxheWVyKGFzc2VtYmxlcikge1xuICByZXR1cm4gYXBpT2JqZWN0KHsgdHlwZTogJ2xheWVyJyB9LCBmdW5jdGlvbiAoKSB7XG4gICAgZW5zdXJlQ3NzKCk7XG5cbiAgICB2YXIgY2hpbGRyZW4gPSBbXTtcblxuICAgIGFzc2VtYmxlcihmdW5jdGlvbiAoYXJncykge1xuICAgICAgQXJyYXkuaXNBcnJheShhcmdzKSA/IGFyZ3MubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIGNoaWxkcmVuID0gY2hpbGRyZW4uY29uY2F0KGEuYWJzdHJhY3QpO1xuICAgICAgfSkgOiBjaGlsZHJlbiA9IGNoaWxkcmVuLmNvbmNhdChhcmdzLmFic3RyYWN0KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBbe1xuICAgICAgdGFnOiAnc3BhbicsXG4gICAgICBhdHRyaWJ1dGVzOiB7IGNsYXNzOiBjb25maWckMS5mYW1pbHlQcmVmaXggKyAnLWxheWVycycgfSxcbiAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgIH1dO1xuICB9KTtcbn07XG5cbnZhciBhcGkkMSA9IHtcbiAgbm9BdXRvOiBub0F1dG8sXG4gIGRvbTogZG9tLFxuICBsaWJyYXJ5OiBsaWJyYXJ5LFxuICBwYXJzZTogcGFyc2UsXG4gIGZpbmRJY29uRGVmaW5pdGlvbjogZmluZEljb25EZWZpbml0aW9uLFxuICBpY29uOiBpY29uLFxuICB0ZXh0OiB0ZXh0LFxuICBsYXllcjogbGF5ZXJcbn07XG5cbnZhciBhdXRvUmVwbGFjZSA9IGZ1bmN0aW9uIGF1dG9SZXBsYWNlKCkge1xuICBpZiAoSVNfRE9NICYmIGNvbmZpZyQxLmF1dG9SZXBsYWNlU3ZnKSBhcGkkMS5kb20uaTJzdmcoeyBub2RlOiBET0NVTUVOVCB9KTtcbn07XG5cbmZ1bmN0aW9uIGJvb3RzdHJhcCgpIHtcbiAgaWYgKElTX0JST1dTRVIpIHtcbiAgICBpZiAoIVdJTkRPVy5Gb250QXdlc29tZSkge1xuICAgICAgV0lORE9XLkZvbnRBd2Vzb21lID0gYXBpJDE7XG4gICAgfVxuXG4gICAgZG9tcmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKG5hbWVzcGFjZS5zdHlsZXMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgYXV0b1JlcGxhY2UoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZyQxLm9ic2VydmVNdXRhdGlvbnMgJiYgdHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgb2JzZXJ2ZSh7XG4gICAgICAgICAgdHJlZUNhbGxiYWNrOiBvblRyZWUsXG4gICAgICAgICAgbm9kZUNhbGxiYWNrOiBvbk5vZGUsXG4gICAgICAgICAgcHNldWRvRWxlbWVudHNDYWxsYmFjazogc2VhcmNoUHNldWRvRWxlbWVudHNcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuYW1lc3BhY2UuaG9va3MgPSBfZXh0ZW5kcyh7fSwgbmFtZXNwYWNlLmhvb2tzLCB7XG5cbiAgICBhZGRQYWNrOiBmdW5jdGlvbiBhZGRQYWNrKHByZWZpeCwgaWNvbnMpIHtcbiAgICAgIG5hbWVzcGFjZS5zdHlsZXNbcHJlZml4XSA9IF9leHRlbmRzKHt9LCBuYW1lc3BhY2Uuc3R5bGVzW3ByZWZpeF0gfHwge30sIGljb25zKTtcblxuICAgICAgYnVpbGQoKTtcbiAgICAgIGF1dG9SZXBsYWNlKCk7XG4gICAgfSxcblxuICAgIGFkZFNoaW1zOiBmdW5jdGlvbiBhZGRTaGltcyhzaGltcykge1xuICAgICAgdmFyIF9uYW1lc3BhY2Ukc2hpbXM7XG5cbiAgICAgIChfbmFtZXNwYWNlJHNoaW1zID0gbmFtZXNwYWNlLnNoaW1zKS5wdXNoLmFwcGx5KF9uYW1lc3BhY2Ukc2hpbXMsIHRvQ29uc3VtYWJsZUFycmF5KHNoaW1zKSk7XG5cbiAgICAgIGJ1aWxkKCk7XG4gICAgICBhdXRvUmVwbGFjZSgpO1xuICAgIH1cbiAgfSk7XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShhcGkkMSwgJ2NvbmZpZycsIHtcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIGNvbmZpZyQxO1xuICB9LFxuXG4gIHNldDogZnVuY3Rpb24gc2V0KG5ld0NvbmZpZykge1xuICAgIHVwZGF0ZShuZXdDb25maWcpO1xuICB9XG59KTtcblxuaWYgKElTX0RPTSkgYnVua2VyKGJvb3RzdHJhcCk7XG5cbnZhciBjb25maWcgPSBhcGkkMS5jb25maWc7XG5cbmV4cG9ydCB7IGNvbmZpZywgaWNvbiwgbm9BdXRvLCBsYXllciwgdGV4dCwgbGlicmFyeSwgZG9tLCBwYXJzZSwgZmluZEljb25EZWZpbml0aW9uIH07XG5leHBvcnQgZGVmYXVsdCBhcGkkMTtcbiIsImltcG9ydCBmb250YXdlc29tZSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUnXG5pbXBvcnQgZmFGYWNlYm9vayBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS1icmFuZHMvZmFGYWNlYm9vayc7XG5pbXBvcnQgZmFJbnN0YWdyYW0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUtYnJhbmRzL2ZhSW5zdGFncmFtJztcbmltcG9ydCBmYUxpbmtlZGluIGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlLWJyYW5kcy9mYUxpbmtlZGluJztcblxuZm9udGF3ZXNvbWUubGlicmFyeS5hZGQoW2ZhRmFjZWJvb2ssIGZhSW5zdGFncmFtLCBmYUxpbmtlZGluXSk7XG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=