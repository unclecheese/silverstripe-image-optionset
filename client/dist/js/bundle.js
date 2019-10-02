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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/boot/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/boot/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _registerComponents = __webpack_require__("./client/src/boot/registerComponents.js");

var _registerComponents2 = _interopRequireDefault(_registerComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.document.addEventListener('DOMContentLoaded', function () {
    (0, _registerComponents2.default)();
});

/***/ }),

/***/ "./client/src/boot/registerComponents.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Injector = __webpack_require__(3);

var _Injector2 = _interopRequireDefault(_Injector);

var _ImageOptionsetField = __webpack_require__("./client/src/components/ImageOptionsetField.js");

var _ImageOptionsetField2 = _interopRequireDefault(_ImageOptionsetField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    _Injector2.default.component.registerMany({
        ImageOptionsetField: _ImageOptionsetField2.default
    });
};

/***/ }),

/***/ "./client/src/components/ImageOptionField.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Component = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(4);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageOptionField = function (_Component) {
    _inherits(ImageOptionField, _Component);

    function ImageOptionField(props) {
        _classCallCheck(this, ImageOptionField);

        var _this = _possibleConstructorReturn(this, (ImageOptionField.__proto__ || Object.getPrototypeOf(ImageOptionField)).call(this, props));

        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    _createClass(ImageOptionField, [{
        key: 'getInputProps',
        value: function getInputProps() {
            var _classnames;

            var classes = classnames((_classnames = {}, _defineProperty(_classnames, this.props.className, true), _defineProperty(_classnames, this.props.extraClass, true), _defineProperty(_classnames, 'form-check', true), _defineProperty(_classnames, 'checked', this.props.value), _defineProperty(_classnames, 'disabled', this.props.readOnly), _defineProperty(_classnames, 'option-field--disabled', this.props.readOnly || this.props.disabled), _classnames));

            return {
                id: this.props.id,
                type: this.props.type,
                name: this.props.name,
                disabled: this.props.disabled || this.props.readOnly,
                readOnly: this.props.readOnly,
                className: classes,
                onChange: this.handleChange,
                checked: !!this.props.value,
                value: 1
            };
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            if (this.props.readOnly || this.props.disabled) {
                event.preventDefault();
                return;
            }

            var callback = null;
            if (typeof this.props.onChange === 'function') {
                callback = this.props.onChange;
            } else if (typeof this.props.onClick === 'function') {
                callback = this.props.onClick;
            }

            if (callback) {
                callback(event, {
                    id: this.props.id,
                    value: event.target.checked ? 1 : 0
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var leftTitle = this.props.leftTitle !== null ? this.props.leftTitle : this.props.title;

            var labelText = this.props.rightTitle !== null ? leftTitle + ' ' + this.props.rightTitle : leftTitle;

            return _react2.default.createElement(
                _reactstrap.FormGroup,
                { check: true },
                _react2.default.createElement(_reactstrap.Input, this.getInputProps()),
                _react2.default.createElement(
                    _reactstrap.Label,
                    { check: true, 'for': this.props.id },
                    _react2.default.createElement(
                        'div',
                        { className: 'imageoptionsetfield-image' },
                        _react2.default.createElement('div', { style: {
                                backgroundImage: 'url(' + this.props.image + ')',
                                width: this.props.imageWidth + 'px',
                                height: this.props.imageHeight + 'px',
                                backgroundSize: 'cover'
                            } })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'imageoptionsetfield-title' },
                        labelText
                    )
                )
            );
        }
    }]);

    return ImageOptionField;
}(_react.Component);

ImageOptionField.propTypes = {
    type: _propTypes2.default.oneOf(['checkbox', 'radio']),
    leftTitle: _propTypes2.default.any,
    rightTitle: _propTypes2.default.any,
    title: _propTypes2.default.any,
    extraClass: _propTypes2.default.string,
    id: _propTypes2.default.string,
    name: _propTypes2.default.string,
    onChange: _propTypes2.default.func,

    value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.bool]),
    readOnly: _propTypes2.default.bool,
    disabled: _propTypes2.default.bool,
    image: _propTypes2.default.string,
    imageWidth: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    imageHeight: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

ImageOptionField.defaultProps = {
    extraClass: '',
    className: '',
    type: 'radio',
    leftTitle: null,
    rightTitle: null
};

exports.Component = ImageOptionField;
exports.default = ImageOptionField;

/***/ }),

/***/ "./client/src/components/ImageOptionsetField.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Component = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _FieldHolder = __webpack_require__(2);

var _FieldHolder2 = _interopRequireDefault(_FieldHolder);

var _ImageOptionField = __webpack_require__("./client/src/components/ImageOptionField.js");

var _ImageOptionField2 = _interopRequireDefault(_ImageOptionField);

var _i18n = __webpack_require__(5);

var _i18n2 = _interopRequireDefault(_i18n);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageOptionsetField = function (_Component) {
    _inherits(ImageOptionsetField, _Component);

    function ImageOptionsetField(props) {
        _classCallCheck(this, ImageOptionsetField);

        var _this = _possibleConstructorReturn(this, (ImageOptionsetField.__proto__ || Object.getPrototypeOf(ImageOptionsetField)).call(this, props));

        _this.getItemKey = _this.getItemKey.bind(_this);
        _this.getOptionProps = _this.getOptionProps.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    _createClass(ImageOptionsetField, [{
        key: 'getItemKey',
        value: function getItemKey(item, index) {
            var value = item.value || 'empty' + index;
            return this.props.id + '-' + value;
        }
    }, {
        key: 'getOptionProps',
        value: function getOptionProps(item, index) {
            var key = this.getItemKey(item, index);

            return {
                key: key,
                id: key,
                name: this.props.name,
                className: this.props.itemClass + ' option-val--' + item.value,
                disabled: item.disabled || this.props.disabled,
                readOnly: this.props.readOnly,
                onChange: this.handleChange,
                value: '' + this.props.value === '' + item.value,
                title: item.title,
                type: 'radio',
                image: item.image,
                imageWidth: this.props.imageWidth,
                imageHeight: this.props.imageHeight
            };
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event, field) {
            var _this2 = this;

            if (typeof this.props.onChange === 'function') {
                if (field.value === 1) {
                    var sourceItem = this.props.source.find(function (item, index) {
                        return _this2.getItemKey(item, index) === field.id;
                    });

                    this.props.onChange(event, { id: this.props.id, value: sourceItem.value });
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            if (!this.props.source) {
                return null;
            }
            return _react2.default.createElement(
                'ul',
                null,
                this.props.source.map(function (item, index) {
                    return _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(_ImageOptionField2.default, _extends({}, _this3.getOptionProps(item, index), { hideLabels: true }))
                    );
                })
            );
        }
    }]);

    return ImageOptionsetField;
}(_react.Component);

ImageOptionsetField.propTypes = {
    extraClass: _propTypes2.default.string,
    itemClass: _propTypes2.default.string,
    id: _propTypes2.default.string,
    name: _propTypes2.default.string.isRequired,
    source: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
        title: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
        disabled: _propTypes2.default.bool
    })),
    onChange: _propTypes2.default.func,
    value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    readOnly: _propTypes2.default.bool,
    disabled: _propTypes2.default.bool
};

ImageOptionsetField.defaultProps = {
    extraClass: '',
    className: '',
    itemClass: ''
};

exports.Component = ImageOptionsetField;
exports.default = (0, _FieldHolder2.default)(ImageOptionsetField);

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

module.exports = PropTypes;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = FieldHolder;

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = Injector;

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = Reactstrap;

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = i18n;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map