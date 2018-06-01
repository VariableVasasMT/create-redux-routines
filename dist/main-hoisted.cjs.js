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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_createReducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/createReducers */ "./src/createReducers.js");
/* harmony import */ var _src_createReducers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_createReducers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_createActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/createActions */ "./src/createActions.js");
/* harmony import */ var _src_createActions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_createActions__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _src_createActions__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _src_createActions__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _src_createReducers__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _src_createReducers__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));



class ReduxObject extends _src_createReducers__WEBPACK_IMPORTED_MODULE_0___default.a {
  constructor( actionTypes, options, customError ){
    super( actionTypes, options, customError );
    this.actions = Object(_src_createActions__WEBPACK_IMPORTED_MODULE_1__["getActionObjects"])( actionTypes ); 
  }
}

window.ReduxObject = ReduxObject;



/* harmony default export */ __webpack_exports__["default"] = (ReduxObject);

/***/ }),

/***/ "./node_modules/is-plain-object/index.js":
/*!***********************************************!*\
  !*** ./node_modules/is-plain-object/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var isObject = __webpack_require__(/*! isobject */ "./node_modules/isobject/index.js");

function isObjectObject(o) {
  return isObject(o) === true
    && Object.prototype.toString.call(o) === '[object Object]';
}

module.exports = function isPlainObject(o) {
  var ctor,prot;

  if (isObjectObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (typeof ctor !== 'function') return false;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObjectObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
};


/***/ }),

/***/ "./node_modules/isobject/index.js":
/*!****************************************!*\
  !*** ./node_modules/isobject/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
};


/***/ }),

/***/ "./src/createActions.js":
/*!******************************!*\
  !*** ./src/createActions.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getActionObjects = exports.getActions = exports.generateActionsAndFunctions = exports.createFailAction = exports.createSuccessAction = exports.createSyncActionFunctions = exports.getLoadingActions = exports.createSyncActions = exports.LodingActionSuffix = exports.SyncActionsSuffix = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = __webpack_require__(/*! ./utils */ "./src/utils/index.js");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var SyncActionsSuffix = exports.SyncActionsSuffix = {
  TRIGGER: "_TRIGGER",
  FULLFILL: "_FULLFILL"
};

var LodingActionSuffix = exports.LodingActionSuffix = _extends({
  SUCCESS: "_SUCCESS",
  FAIL: "_FAIL"
}, SyncActionsSuffix);

var createSyncActions = exports.createSyncActions = function createSyncActions(actionType) {
  var TRIGGER = SyncActionsSuffix.TRIGGER,
      FULLFILL = SyncActionsSuffix.FULLFILL;

  return {
    TRIGGER: "" + actionType + TRIGGER,
    FULLFILL: "" + actionType + FULLFILL
  };
};

var getLoadingActions = exports.getLoadingActions = function getLoadingActions(actionType) {
  var SUCCESS = LodingActionSuffix.SUCCESS,
      FAIL = LodingActionSuffix.FAIL,
      TRIGGER = LodingActionSuffix.TRIGGER,
      FULLFILL = LodingActionSuffix.FULLFILL;

  return _extends({
    SUCCESS: "" + actionType + SUCCESS,
    FAIL: "" + actionType + FAIL,
    LOADING: actionType
  }, createSyncActions(actionType));
};

var createSyncActionFunctions = exports.createSyncActionFunctions = function createSyncActionFunctions(actionType) {
  var _createSyncActions = createSyncActions(actionType),
      TRIGGER = _createSyncActions.TRIGGER,
      FULLFILL = _createSyncActions.FULLFILL;

  return {
    trigger: function trigger() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var meta = arguments[1];

      return {
        type: TRIGGER,
        meta: meta
      };
    },
    fullfill: function fullfill() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var meta = arguments[1];

      return {
        type: FULLFILL,
        meta: meta
      };
    }
  };
};
var createSuccessAction = exports.createSuccessAction = function createSuccessAction(actionType) {
  return function () {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var meta = arguments[1];

    var _getLoadingActions = getLoadingActions(actionType),
        SUCCESS = _getLoadingActions.SUCCESS;

    return {
      type: SUCCESS,
      payload: _extends({}, data),
      meta: meta
    };
  };
};

var createFailAction = exports.createFailAction = function createFailAction(actionType) {
  return function () {
    var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var meta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _getLoadingActions2 = getLoadingActions(actionType),
        FAIL = _getLoadingActions2.FAIL;

    return {
      type: FAIL,
      payload: error.error ? error : { error: error },
      meta: meta
    };
  };
};

var generateAction = function generateAction(actionType) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$async = _ref.async,
      async = _ref$async === undefined ? false : _ref$async;

  var defaultAction = function defaultAction(payload, meta) {
    return {
      type: actionType,
      payload: payload,
      meta: meta
    };
  };

  var syncActions = {};

  if (async) {
    var successAction = createSuccessAction(actionType);
    var failAction = createFailAction(actionType);
    return {
      LOADING: defaultAction,
      SUCCESS: successAction,
      FAIL: failAction
    };
  }
  return defaultAction;
};

var generateActionsAndFunctions = exports.generateActionsAndFunctions = function generateActionsAndFunctions(actionType) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref2$async = _ref2.async,
      async = _ref2$async === undefined ? false : _ref2$async;

  var _getLoadingActions3 = getLoadingActions(actionType),
      SUCCESS = _getLoadingActions3.SUCCESS,
      FAIL = _getLoadingActions3.FAIL,
      LOADING = _getLoadingActions3.LOADING,
      TRIGGER = _getLoadingActions3.TRIGGER,
      FULLFILL = _getLoadingActions3.FULLFILL;

  var syncActions = _extends({
    TRIGGER: TRIGGER,
    FULLFILL: FULLFILL
  }, createSyncActionFunctions(actionType));

  if (async) {
    var _generateAction = generateAction(actionType, { async: async }),
        loading = _generateAction.LOADING,
        success = _generateAction.SUCCESS,
        fail = _generateAction.FAIL;

    syncActions = _extends({}, syncActions, {
      SUCCESS: SUCCESS,
      FAIL: FAIL,
      LOADING: LOADING,
      success: success,
      fail: fail,
      loading: loading
    });
  }

  return syncActions;
};

var handleActionType = function handleActionType(actionType) {
  if ((0, _utils.isObject)(actionType)) {
    var name = actionType.name,
        _actionType$options = actionType.options;
    _actionType$options = _actionType$options === undefined ? {} : _actionType$options;
    var _actionType$options$a = _actionType$options.async,
        async = _actionType$options$a === undefined ? false : _actionType$options$a;

    return generateAction(name, { async: async });
  } else if ((0, _utils.isString)(actionType)) {
    return generateAction(actionType);
  }
};

var getActions = exports.getActions = function getActions(actionTypes) {
  if (Array.isArray(actionTypes)) {
    return actionTypes.reduce(function (actions, actionType) {
      actions.push(handleActionType(actionType));
      return actions;
    }, []);
  }
  return handleActionType(actionTypes);
};

var getActionName = function getActionName(actionType) {
  if ((0, _utils.isObject)(actionType)) {
    var name = actionType.name,
        _actionType$options2 = actionType.options;
    _actionType$options2 = _actionType$options2 === undefined ? {} : _actionType$options2;
    var _actionType$options2$ = _actionType$options2.async,
        async = _actionType$options2$ === undefined ? false : _actionType$options2$;

    return [name, { async: async }];
  } else if ((0, _utils.isString)(actionType)) {
    return [actionType];
  }
};

var getActionObjects = exports.getActionObjects = function getActionObjects(actionTypes) {
  if (Array.isArray(actionTypes)) {
    var actionObjects = {};
    actionTypes.reduce(function (object, action) {
      var actionArray = getActionName(action);
      return actionObjects[actionArray[0]] = generateActionsAndFunctions.apply(undefined, _toConsumableArray(actionArray));
    }, {});

    return actionObjects;
  }
};

exports.default = getActions;

/***/ }),

/***/ "./src/createReducers.js":
/*!*******************************!*\
  !*** ./src/createReducers.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = __webpack_require__(/*! ./utils */ "./src/utils/index.js");

var _createActions = __webpack_require__(/*! ./createActions */ "./src/createActions.js");

var _flatCombineReducer = __webpack_require__(/*! ./helpers/flatCombineReducer */ "./src/helpers/flatCombineReducer.js");

var _flatCombineReducer2 = _interopRequireDefault(_flatCombineReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var attachReducerToKey = function attachReducerToKey(reducer, key) {
  var actionTypes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  if (!(0, _utils.isString)(key)) {
    var e = new Error("Expected key to be a string.");
    throw e;
  }
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (actionTypes.includes(action.type)) {
      return _extends({}, state, _defineProperty({}, key, reducer(state[key], action)));
    } else {
      return state;
    }
  };
};

var getReducer = function getReducer(actionType) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      key = _ref.key,
      _ref$initialState = _ref.initialState,
      initialState = _ref$initialState === undefined ? {} : _ref$initialState,
      processor = _ref.processor;

  var _createSyncActions = (0, _createActions.createSyncActions)(actionType),
      FULLFILL = _createSyncActions.FULLFILL;

  var defaultReducer = function defaultReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
      case FULLFILL:
      case "" + actionType(action):
        return processor ? processor(state, action) : !(0, _utils.isUndefined)(action.payload) ? _extends({}, state, action.payload) : {};
      default:
        return state;
    }
  };
  if (key) {
    var strActionType = actionType();
    return attachReducerToKey(defaultReducer, key, [strActionType]);
  }
  return defaultReducer;
};

var processAsyncData = function processAsyncData(_ref2) {
  var stateData = _ref2.stateData,
      data = _ref2.data;

  if ((0, _utils.isUndefined)(stateData)) {
    return data;
  } else if ((0, _utils.isObject)(stateData) && (0, _utils.isObject)(data)) {
    return _extends({}, stateData, data);
  } else if (Array.isArray(stateData) && Array.isArray(data)) {
    return [].concat(_toConsumableArray(stateData), _toConsumableArray(data));
  }
  return data;
};

var CreateReducer = function CreateReducer(actionTypes) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var customError = arguments[2];

  _classCallCheck(this, CreateReducer);

  _initialiseProps.call(this);

  this.reducers = this.createReducers(actionTypes, options);
  this.customError = customError || this.customError;
};

var _initialiseProps = function _initialiseProps() {
  var _this = this;

  this.customError = function (error) {
    return error;
  };

  this.getAsyncReducer = function (actionType, _ref3) {
    var key = _ref3.key,
        _ref3$initialState = _ref3.initialState,
        initialState = _ref3$initialState === undefined ? {} : _ref3$initialState,
        processor = _ref3.processor,
        _ref3$merge = _ref3.merge,
        merge = _ref3$merge === undefined ? true : _ref3$merge;

    initialState = _extends({
      isLoading: false,
      loaded: false,
      hasError: false
    }, initialState);
    if (processor) throw new Error("processor option will not work with async option");
    if ((0, _utils.isFunction)(actionType)) throw new Error("actionType must be a string when using async option");

    var _getLoadingActions = (0, _createActions.getLoadingActions)(actionType),
        LOADING = _getLoadingActions.LOADING,
        SUCCESS = _getLoadingActions.SUCCESS,
        FAIL = _getLoadingActions.FAIL,
        RESET = _getLoadingActions.RESET,
        FULLFILL = _getLoadingActions.FULLFILL;

    var defaultAsyncReducer = function defaultAsyncReducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
      var action = arguments[1];

      var _ref4 = action.payload || {},
          data = _ref4.data,
          error = _ref4.error,
          rest = _objectWithoutProperties(_ref4, ["data", "error"]);

      var _ref5 = action.meta || {},
          _ref5$payload = _ref5.payload,
          userData = _ref5$payload === undefined ? {} : _ref5$payload,
          loadingData = _ref5.loadingData;

      switch (action.type) {
        case LOADING:
          return _extends({}, state, {
            isLoading: true,
            loaded: false,
            hasError: false,
            loadingData: loadingData,
            error: undefined
          });
        case SUCCESS:
          return _extends({}, state, {
            isLoading: false,
            loaded: true,
            loadingData: undefined,
            data: merge ? processAsyncData({ stateData: state.data, data: data }) : data,
            hasError: false,
            error: undefined
          }, rest);
        case FAIL:
          return _extends({}, state, {
            isLoading: false,
            loaded: true,
            data: undefined,
            loadingData: undefined,
            hasError: true,
            error: _extends({}, _this.customError(error), {
              payload: userData
            })
          }, rest);
        case FULLFILL:
          return _extends({}, state, {
            isLoading: false,
            loaded: true
          });
        case RESET:
          return {
            isLoading: false,
            loaded: false,
            data: undefined,
            hasError: false,
            error: undefined,
            loadingData: undefined
          };
        default:
          return state;
      }
    };

    return key ? attachReducerToKey(defaultAsyncReducer, key, [LOADING, SUCCESS, FAIL, FULLFILL]) : defaultAsyncReducer;
  };

  this.handleActionType = function (actionType, initialState) {
    if ((0, _utils.isObject)(actionType)) {
      var _actionType = actionType,
          name = _actionType.name,
          _actionType$options = _actionType.options;
      _actionType$options = _actionType$options === undefined ? {} : _actionType$options;
      var _actionType$options$k = _actionType$options.key,
          key = _actionType$options$k === undefined ? null : _actionType$options$k,
          _actionType$options$a = _actionType$options.async,
          async = _actionType$options$a === undefined ? false : _actionType$options$a,
          processor = _actionType$options.processor,
          merge = _actionType$options.merge;

      actionType = (0, _utils.isString)(name) ? function () {
        return name;
      } : name;
      return async ? _this.getAsyncReducer(name, { key: key, initialState: initialState, processor: processor, merge: merge }) : getReducer(actionType, { key: key, initialState: initialState, processor: processor });
    } else if ((0, _utils.isString)(actionType)) {
      return getReducer(function () {
        return actionType;
      }, initialState);
    } else if ((0, _utils.isFunction)(actionType)) {
      return getReducer(actionType, initialState);
    }
  };

  this.createReducers = function (actionTypes) {
    var _ref6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref6$initialState = _ref6.initialState,
        initialState = _ref6$initialState === undefined ? {} : _ref6$initialState,
        resetActionType = _ref6.resetActionType;

    if (Array.isArray(actionTypes)) {
      var allReducers = actionTypes.reduce(function (reducers, actionType) {
        reducers.push(_this.handleActionType(actionType, initialState));
        return reducers;
      }, []);
      return (0, _flatCombineReducer2.default)(allReducers, { resetActionType: resetActionType, initialState: initialState });
    }
    if (resetActionType) throw new Error("Reset functionality will only work with multiple reducers.");
    return _this.handleActionType(actionTypes, initialState);
  };
};

exports.default = CreateReducer;

/***/ }),

/***/ "./src/helpers/flatCombineReducer.js":
/*!*******************************************!*\
  !*** ./src/helpers/flatCombineReducer.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = flatCombineReducers;
function flatCombineReducers(reducers, _ref) {
  var resetActionType = _ref.resetActionType,
      _ref$initialState = _ref.initialState,
      initialState = _ref$initialState === undefined ? {} : _ref$initialState;

  return function (prevState, action) {
    if (action.type == resetActionType) {
      return initialState;
    }
    return reducers.reduce(function (state, reducer) {
      var newState = _extends({}, prevState, reducer(Object.keys(state).length ? state : prevState, action));

      return newState;
    }, {});
  };
}

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isString = exports.isFunction = exports.isUndefined = undefined;
exports.isObject = isObject;

var _isPlainObject = __webpack_require__(/*! is-plain-object */ "./node_modules/is-plain-object/index.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isUndefined = exports.isUndefined = function isUndefined(value) {
  return typeof value === "undefined";
};

var isFunction = exports.isFunction = function isFunction(fn) {
  return typeof fn === "function";
};

var isString = exports.isString = function isString(value) {
  return typeof value === "string";
};

function isObject(x) {
  return (0, _isPlainObject2.default)(x);
}

/***/ })

/******/ });
//# sourceMappingURL=main-hoisted.cjs.js.map