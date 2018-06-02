'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createActions = require('./src/createActions');

Object.keys(_createActions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _createActions[key];
    }
  });
});

var _createReducers = require('./src/createReducers');

Object.keys(_createReducers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _createReducers[key];
    }
  });
});

var _createReducers2 = _interopRequireDefault(_createReducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReduxObject = function (_CreateReducers) {
  _inherits(ReduxObject, _CreateReducers);

  function ReduxObject(actionTypes, options, customError) {
    _classCallCheck(this, ReduxObject);

    var _this = _possibleConstructorReturn(this, (ReduxObject.__proto__ || Object.getPrototypeOf(ReduxObject)).call(this, actionTypes, options, customError));

    _this.actions = (0, _createActions.getActionObjects)(actionTypes);
    return _this;
  }

  return ReduxObject;
}(_createReducers2.default);

// window.ReduxObject = ReduxObject;

exports.default = ReduxObject;
