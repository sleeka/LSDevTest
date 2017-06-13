(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["Autosuggest"] = factory(require("React"));
	else
		root["Autosuggest"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(1).default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _arrays = __webpack_require__(4);

	var _arrays2 = _interopRequireDefault(_arrays);

	var _reactAutowhatever = __webpack_require__(5);

	var _reactAutowhatever2 = _interopRequireDefault(_reactAutowhatever);

	var _theme = __webpack_require__(14);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var alwaysTrue = function alwaysTrue() {
	  return true;
	};
	var defaultShouldRenderSuggestions = function defaultShouldRenderSuggestions(value) {
	  return value.trim().length > 0;
	};
	var defaultRenderSuggestionsContainer = function defaultRenderSuggestionsContainer(_ref) {
	  var containerProps = _ref.containerProps,
	      children = _ref.children;
	  return _react2.default.createElement(
	    'div',
	    containerProps,
	    children
	  );
	};

	var Autosuggest = function (_Component) {
	  _inherits(Autosuggest, _Component);

	  function Autosuggest(_ref2) {
	    var alwaysRenderSuggestions = _ref2.alwaysRenderSuggestions;

	    _classCallCheck(this, Autosuggest);

	    var _this = _possibleConstructorReturn(this, (Autosuggest.__proto__ || Object.getPrototypeOf(Autosuggest)).call(this));

	    _initialiseProps.call(_this);

	    _this.state = {
	      isFocused: false,
	      isCollapsed: !alwaysRenderSuggestions,
	      highlightedSectionIndex: null,
	      highlightedSuggestionIndex: null,
	      valueBeforeUpDown: null
	    };

	    _this.justPressedUpDown = false;
	    return _this;
	  }

	  _createClass(Autosuggest, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      document.addEventListener('mousedown', this.onDocumentMouseDown);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if ((0, _arrays2.default)(nextProps.suggestions, this.props.suggestions)) {
	        if (nextProps.highlightFirstSuggestion && nextProps.suggestions.length > 0 && this.justPressedUpDown === false) {
	          this.highlightFirstSuggestion();
	        }
	      } else {
	        if (this.willRenderSuggestions(nextProps)) {
	          if (nextProps.highlightFirstSuggestion) {
	            this.highlightFirstSuggestion();
	          }

	          if (this.state.isCollapsed && !this.justSelectedSuggestion) {
	            this.revealSuggestions();
	          }
	        } else {
	          this.resetHighlightedSuggestion();
	        }
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      document.removeEventListener('mousedown', this.onDocumentMouseDown);
	    }
	  }, {
	    key: 'inputFocused',
	    value: function inputFocused(shouldRender) {
	      this.setState({
	        isFocused: true,
	        isCollapsed: !shouldRender
	      });
	    }
	  }, {
	    key: 'inputBlurred',
	    value: function inputBlurred(shouldRender) {
	      this.setState({
	        isFocused: false,
	        highlightedSectionIndex: null,
	        highlightedSuggestionIndex: null,
	        valueBeforeUpDown: null,
	        isCollapsed: !shouldRender
	      });
	    }
	  }, {
	    key: 'inputChanged',
	    value: function inputChanged(shouldRender) {
	      this.setState({
	        highlightedSectionIndex: null,
	        highlightedSuggestionIndex: null,
	        valueBeforeUpDown: null,
	        isCollapsed: !shouldRender
	      });
	    }
	  }, {
	    key: 'updateHighlightedSuggestion',
	    value: function updateHighlightedSuggestion(sectionIndex, suggestionIndex, prevValue) {
	      var valueBeforeUpDown = this.state.valueBeforeUpDown;


	      if (suggestionIndex === null) {
	        valueBeforeUpDown = null;
	      } else if (valueBeforeUpDown === null && typeof prevValue !== 'undefined') {
	        valueBeforeUpDown = prevValue;
	      }

	      this.setState({
	        highlightedSectionIndex: sectionIndex,
	        highlightedSuggestionIndex: suggestionIndex,
	        valueBeforeUpDown: valueBeforeUpDown
	      });
	    }
	  }, {
	    key: 'resetHighlightedSuggestion',
	    value: function resetHighlightedSuggestion() {
	      var shouldResetValueBeforeUpDown = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	      var valueBeforeUpDown = this.state.valueBeforeUpDown;


	      this.setState({
	        highlightedSectionIndex: null,
	        highlightedSuggestionIndex: null,
	        valueBeforeUpDown: shouldResetValueBeforeUpDown ? null : valueBeforeUpDown
	      });
	    }
	  }, {
	    key: 'revealSuggestions',
	    value: function revealSuggestions() {
	      this.setState({
	        isCollapsed: false
	      });
	    }
	  }, {
	    key: 'closeSuggestions',
	    value: function closeSuggestions() {
	      this.setState({
	        highlightedSectionIndex: null,
	        highlightedSuggestionIndex: null,
	        valueBeforeUpDown: null,
	        isCollapsed: true
	      });
	    }
	  }, {
	    key: 'getSuggestion',
	    value: function getSuggestion(sectionIndex, suggestionIndex) {
	      var _props = this.props,
	          suggestions = _props.suggestions,
	          multiSection = _props.multiSection,
	          getSectionSuggestions = _props.getSectionSuggestions;


	      if (multiSection) {
	        return getSectionSuggestions(suggestions[sectionIndex])[suggestionIndex];
	      }

	      return suggestions[suggestionIndex];
	    }
	  }, {
	    key: 'getHighlightedSuggestion',
	    value: function getHighlightedSuggestion() {
	      var _state = this.state,
	          highlightedSectionIndex = _state.highlightedSectionIndex,
	          highlightedSuggestionIndex = _state.highlightedSuggestionIndex;


	      if (highlightedSuggestionIndex === null) {
	        return null;
	      }

	      return this.getSuggestion(highlightedSectionIndex, highlightedSuggestionIndex);
	    }
	  }, {
	    key: 'getSuggestionValueByIndex',
	    value: function getSuggestionValueByIndex(sectionIndex, suggestionIndex) {
	      var getSuggestionValue = this.props.getSuggestionValue;


	      return getSuggestionValue(this.getSuggestion(sectionIndex, suggestionIndex));
	    }
	  }, {
	    key: 'getSuggestionIndices',
	    value: function getSuggestionIndices(suggestionElement) {
	      var sectionIndex = suggestionElement.getAttribute('data-section-index');
	      var suggestionIndex = suggestionElement.getAttribute('data-suggestion-index');

	      return {
	        sectionIndex: typeof sectionIndex === 'string' ? parseInt(sectionIndex, 10) : null,
	        suggestionIndex: parseInt(suggestionIndex, 10)
	      };
	    }
	  }, {
	    key: 'findSuggestionElement',
	    value: function findSuggestionElement(startNode) {
	      var node = startNode;

	      do {
	        if (node.getAttribute('data-suggestion-index') !== null) {
	          return node;
	        }

	        node = node.parentNode;
	      } while (node !== null);

	      console.error('Clicked element:', startNode); // eslint-disable-line no-console
	      throw new Error('Couldn\'t find suggestion element');
	    }
	  }, {
	    key: 'maybeCallOnChange',
	    value: function maybeCallOnChange(event, newValue, method) {
	      var _props$inputProps = this.props.inputProps,
	          value = _props$inputProps.value,
	          onChange = _props$inputProps.onChange;


	      if (newValue !== value) {
	        onChange(event, { newValue: newValue, method: method });
	      }
	    }
	  }, {
	    key: 'willRenderSuggestions',
	    value: function willRenderSuggestions(props) {
	      var suggestions = props.suggestions,
	          inputProps = props.inputProps,
	          shouldRenderSuggestions = props.shouldRenderSuggestions;
	      var value = inputProps.value;


	      return suggestions.length > 0 && shouldRenderSuggestions(value);
	    }
	  }, {
	    key: 'getQuery',
	    value: function getQuery() {
	      var inputProps = this.props.inputProps;
	      var value = inputProps.value;
	      var valueBeforeUpDown = this.state.valueBeforeUpDown;


	      return (valueBeforeUpDown || value).trim();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props2 = this.props,
	          suggestions = _props2.suggestions,
	          renderInputComponent = _props2.renderInputComponent,
	          onSuggestionsFetchRequested = _props2.onSuggestionsFetchRequested,
	          renderSuggestion = _props2.renderSuggestion,
	          inputProps = _props2.inputProps,
	          multiSection = _props2.multiSection,
	          renderSectionTitle = _props2.renderSectionTitle,
	          id = _props2.id,
	          getSectionSuggestions = _props2.getSectionSuggestions,
	          theme = _props2.theme,
	          getSuggestionValue = _props2.getSuggestionValue,
	          alwaysRenderSuggestions = _props2.alwaysRenderSuggestions;
	      var _state2 = this.state,
	          isFocused = _state2.isFocused,
	          isCollapsed = _state2.isCollapsed,
	          highlightedSectionIndex = _state2.highlightedSectionIndex,
	          highlightedSuggestionIndex = _state2.highlightedSuggestionIndex,
	          valueBeforeUpDown = _state2.valueBeforeUpDown;

	      var shouldRenderSuggestions = alwaysRenderSuggestions ? alwaysTrue : this.props.shouldRenderSuggestions;
	      var value = inputProps.value,
	          _onFocus = inputProps.onFocus,
	          _onKeyDown = inputProps.onKeyDown;

	      var willRenderSuggestions = this.willRenderSuggestions(this.props);
	      var isOpen = alwaysRenderSuggestions || isFocused && !isCollapsed && willRenderSuggestions;
	      var items = isOpen ? suggestions : [];
	      var autowhateverInputProps = _extends({}, inputProps, {
	        onFocus: function onFocus(event) {
	          if (!_this2.justSelectedSuggestion && !_this2.justClickedOnSuggestionsContainer) {
	            var shouldRender = shouldRenderSuggestions(value);

	            _this2.inputFocused(shouldRender);
	            _onFocus && _onFocus(event);

	            if (shouldRender) {
	              onSuggestionsFetchRequested({ value: value });
	            }
	          }
	        },
	        onBlur: function onBlur(event) {
	          if (_this2.justClickedOnSuggestionsContainer) {
	            _this2.input.focus();
	            return;
	          }

	          _this2.blurEvent = event;

	          if (!_this2.justSelectedSuggestion) {
	            _this2.onBlur();
	            _this2.onSuggestionsClearRequested();
	          }
	        },
	        onChange: function onChange(event) {
	          var value = event.target.value;

	          var shouldRender = shouldRenderSuggestions(value);

	          _this2.maybeCallOnChange(event, value, 'type');
	          _this2.inputChanged(shouldRender);

	          if (shouldRender) {
	            onSuggestionsFetchRequested({ value: value });
	          } else {
	            _this2.onSuggestionsClearRequested();
	          }
	        },
	        onKeyDown: function onKeyDown(event, data) {
	          switch (event.key) {
	            case 'ArrowDown':
	            case 'ArrowUp':
	              if (isCollapsed) {
	                if (shouldRenderSuggestions(value)) {
	                  onSuggestionsFetchRequested({ value: value });
	                  _this2.revealSuggestions();
	                }
	              } else if (suggestions.length > 0) {
	                var newHighlightedSectionIndex = data.newHighlightedSectionIndex,
	                    newHighlightedItemIndex = data.newHighlightedItemIndex;


	                var newValue = void 0;

	                if (newHighlightedItemIndex === null) {
	                  // valueBeforeUpDown can be null if, for example, user
	                  // hovers on the first suggestion and then pressed Up.
	                  // If that happens, use the original input value.
	                  newValue = valueBeforeUpDown === null ? value : valueBeforeUpDown;
	                } else {
	                  newValue = _this2.getSuggestionValueByIndex(newHighlightedSectionIndex, newHighlightedItemIndex);
	                }

	                _this2.updateHighlightedSuggestion(newHighlightedSectionIndex, newHighlightedItemIndex, value);
	                _this2.maybeCallOnChange(event, newValue, event.key === 'ArrowDown' ? 'down' : 'up');
	              }

	              event.preventDefault(); // Prevents the cursor from moving

	              _this2.justPressedUpDown = true;

	              setTimeout(function () {
	                _this2.justPressedUpDown = false;
	              });

	              break;

	            case 'Enter':
	              {
	                var highlightedSuggestion = _this2.getHighlightedSuggestion();

	                if (isOpen && !alwaysRenderSuggestions) {
	                  _this2.closeSuggestions();
	                }

	                if (highlightedSuggestion !== null) {
	                  var _newValue = getSuggestionValue(highlightedSuggestion);

	                  _this2.maybeCallOnChange(event, _newValue, 'enter');

	                  _this2.onSuggestionSelected(event, {
	                    suggestion: highlightedSuggestion,
	                    suggestionValue: _newValue,
	                    suggestionIndex: highlightedSuggestionIndex,
	                    sectionIndex: highlightedSectionIndex,
	                    method: 'enter'
	                  });

	                  _this2.justSelectedSuggestion = true;

	                  setTimeout(function () {
	                    _this2.justSelectedSuggestion = false;
	                  });
	                }

	                break;
	              }

	            case 'Escape':
	              {
	                if (isOpen) {
	                  // If input.type === 'search', the browser clears the input
	                  // when Escape is pressed. We want to disable this default
	                  // behaviour so that, when suggestions are shown, we just hide
	                  // them, without clearing the input.
	                  event.preventDefault();
	                }

	                var willCloseSuggestions = isOpen && !alwaysRenderSuggestions;

	                if (valueBeforeUpDown === null) {
	                  // Didn't interact with Up/Down
	                  if (!willCloseSuggestions) {
	                    var _newValue2 = '';

	                    _this2.maybeCallOnChange(event, _newValue2, 'escape');

	                    if (shouldRenderSuggestions(_newValue2)) {
	                      onSuggestionsFetchRequested({ value: _newValue2 });
	                    } else {
	                      _this2.onSuggestionsClearRequested();
	                    }
	                  }
	                } else {
	                  // Interacted with Up/Down
	                  _this2.maybeCallOnChange(event, valueBeforeUpDown, 'escape');
	                }

	                if (willCloseSuggestions) {
	                  _this2.onSuggestionsClearRequested();
	                  _this2.closeSuggestions();
	                } else {
	                  _this2.resetHighlightedSuggestion();
	                }

	                break;
	              }
	          }

	          _onKeyDown && _onKeyDown(event);
	        }
	      });
	      var renderSuggestionData = {
	        query: this.getQuery()
	      };

	      return _react2.default.createElement(_reactAutowhatever2.default, {
	        multiSection: multiSection,
	        items: items,
	        renderInputComponent: renderInputComponent,
	        renderItemsContainer: this.renderSuggestionsContainer,
	        renderItem: renderSuggestion,
	        renderItemData: renderSuggestionData,
	        renderSectionTitle: renderSectionTitle,
	        getSectionItems: getSectionSuggestions,
	        highlightedSectionIndex: highlightedSectionIndex,
	        highlightedItemIndex: highlightedSuggestionIndex,
	        inputProps: autowhateverInputProps,
	        itemProps: this.itemProps,
	        theme: (0, _theme.mapToAutowhateverTheme)(theme),
	        id: id,
	        ref: this.storeReferences
	      });
	    }
	  }]);

	  return Autosuggest;
	}(_react.Component);

	Autosuggest.defaultProps = {
	  renderSuggestionsContainer: defaultRenderSuggestionsContainer,
	  shouldRenderSuggestions: defaultShouldRenderSuggestions,
	  alwaysRenderSuggestions: false,
	  multiSection: false,
	  focusInputOnSuggestionClick: true,
	  highlightFirstSuggestion: false,
	  theme: _theme.defaultTheme,
	  id: '1'
	};

	var _initialiseProps = function _initialiseProps() {
	  var _this3 = this;

	  this.onDocumentMouseDown = function (event) {
	    _this3.justClickedOnSuggestionsContainer = false;

	    var node = event.detail && event.detail.target || // This is for testing only. Please show me a better way to emulate this.
	    event.target;

	    while (node !== null && node !== document) {
	      if (node.getAttribute('data-suggestion-index') !== null) {
	        // Suggestion was clicked
	        return;
	      }

	      if (node === _this3.suggestionsContainer) {
	        // Something else inside suggestions container was clicked
	        _this3.justClickedOnSuggestionsContainer = true;
	        return;
	      }

	      node = node.parentNode;
	    }
	  };

	  this.storeReferences = function (autowhatever) {
	    if (autowhatever !== null) {
	      var input = autowhatever.input,
	          itemsContainer = autowhatever.itemsContainer;


	      _this3.input = input;
	      _this3.suggestionsContainer = itemsContainer;
	    }
	  };

	  this.onSuggestionMouseEnter = function (event, _ref3) {
	    var sectionIndex = _ref3.sectionIndex,
	        itemIndex = _ref3.itemIndex;

	    _this3.updateHighlightedSuggestion(sectionIndex, itemIndex);
	  };

	  this.highlightFirstSuggestion = function () {
	    _this3.updateHighlightedSuggestion(_this3.props.multiSection ? 0 : null, 0);
	  };

	  this.onSuggestionMouseDown = function () {
	    _this3.justSelectedSuggestion = true;
	  };

	  this.onSuggestionsClearRequested = function () {
	    var onSuggestionsClearRequested = _this3.props.onSuggestionsClearRequested;


	    onSuggestionsClearRequested && onSuggestionsClearRequested();
	  };

	  this.onSuggestionSelected = function (event, data) {
	    var _props3 = _this3.props,
	        alwaysRenderSuggestions = _props3.alwaysRenderSuggestions,
	        onSuggestionSelected = _props3.onSuggestionSelected,
	        onSuggestionsFetchRequested = _props3.onSuggestionsFetchRequested;


	    onSuggestionSelected && onSuggestionSelected(event, data);

	    if (alwaysRenderSuggestions) {
	      onSuggestionsFetchRequested({ value: data.suggestionValue });
	    } else {
	      _this3.onSuggestionsClearRequested();
	    }

	    _this3.resetHighlightedSuggestion();
	  };

	  this.onSuggestionClick = function (event) {
	    var _props4 = _this3.props,
	        alwaysRenderSuggestions = _props4.alwaysRenderSuggestions,
	        focusInputOnSuggestionClick = _props4.focusInputOnSuggestionClick;

	    var _getSuggestionIndices = _this3.getSuggestionIndices(_this3.findSuggestionElement(event.target)),
	        sectionIndex = _getSuggestionIndices.sectionIndex,
	        suggestionIndex = _getSuggestionIndices.suggestionIndex;

	    var clickedSuggestion = _this3.getSuggestion(sectionIndex, suggestionIndex);
	    var clickedSuggestionValue = _this3.props.getSuggestionValue(clickedSuggestion);

	    _this3.maybeCallOnChange(event, clickedSuggestionValue, 'click');
	    _this3.onSuggestionSelected(event, {
	      suggestion: clickedSuggestion,
	      suggestionValue: clickedSuggestionValue,
	      suggestionIndex: suggestionIndex,
	      sectionIndex: sectionIndex,
	      method: 'click'
	    });

	    if (!alwaysRenderSuggestions) {
	      _this3.closeSuggestions();
	    }

	    if (focusInputOnSuggestionClick === true) {
	      _this3.input.focus();
	    } else {
	      _this3.onBlur();
	    }

	    setTimeout(function () {
	      _this3.justSelectedSuggestion = false;
	    });
	  };

	  this.onBlur = function () {
	    var _props5 = _this3.props,
	        inputProps = _props5.inputProps,
	        shouldRenderSuggestions = _props5.shouldRenderSuggestions;
	    var value = inputProps.value,
	        onBlur = inputProps.onBlur;

	    var highlightedSuggestion = _this3.getHighlightedSuggestion();

	    _this3.inputBlurred(shouldRenderSuggestions(value));
	    onBlur && onBlur(_this3.blurEvent, { highlightedSuggestion: highlightedSuggestion });
	  };

	  this.resetHighlightedSuggestionOnMouseLeave = function () {
	    _this3.resetHighlightedSuggestion(false); // shouldResetValueBeforeUpDown
	  };

	  this.itemProps = function (_ref4) {
	    var sectionIndex = _ref4.sectionIndex,
	        itemIndex = _ref4.itemIndex;

	    return {
	      'data-section-index': sectionIndex,
	      'data-suggestion-index': itemIndex,
	      onMouseEnter: _this3.onSuggestionMouseEnter,
	      onMouseLeave: _this3.resetHighlightedSuggestionOnMouseLeave,
	      onMouseDown: _this3.onSuggestionMouseDown,
	      onTouchStart: _this3.onSuggestionMouseDown, // Because on iOS `onMouseDown` is not triggered
	      onClick: _this3.onSuggestionClick
	    };
	  };

	  this.renderSuggestionsContainer = function (_ref5) {
	    var containerProps = _ref5.containerProps,
	        children = _ref5.children;
	    var renderSuggestionsContainer = _this3.props.renderSuggestionsContainer;


	    return renderSuggestionsContainer({ containerProps: containerProps, children: children, query: _this3.getQuery() });
	  };
	};

	exports.default = Autosuggest;
	process.env.NODE_ENV !== "production" ? Autosuggest.propTypes = {
	  suggestions: _react.PropTypes.array.isRequired,
	  onSuggestionsFetchRequested: function onSuggestionsFetchRequested(props, propName) {
	    var onSuggestionsFetchRequested = props[propName];

	    if (typeof onSuggestionsFetchRequested !== 'function') {
	      throw new Error('\'onSuggestionsFetchRequested\' must be implemented. See: https://github.com/moroshko/react-autosuggest#onSuggestionsFetchRequestedProp');
	    }
	  },
	  onSuggestionsClearRequested: function onSuggestionsClearRequested(props, propName) {
	    var onSuggestionsClearRequested = props[propName];

	    if (props.alwaysRenderSuggestions === false && typeof onSuggestionsClearRequested !== 'function') {
	      throw new Error('\'onSuggestionsClearRequested\' must be implemented. See: https://github.com/moroshko/react-autosuggest#onSuggestionsClearRequestedProp');
	    }
	  },
	  onSuggestionSelected: _react.PropTypes.func,
	  renderInputComponent: _react.PropTypes.func,
	  renderSuggestionsContainer: _react.PropTypes.func,
	  getSuggestionValue: _react.PropTypes.func.isRequired,
	  renderSuggestion: _react.PropTypes.func.isRequired,
	  inputProps: function inputProps(props, propName) {
	    var inputProps = props[propName];

	    if (!inputProps.hasOwnProperty('value')) {
	      throw new Error('\'inputProps\' must have \'value\'.');
	    }

	    if (!inputProps.hasOwnProperty('onChange')) {
	      throw new Error('\'inputProps\' must have \'onChange\'.');
	    }
	  },
	  shouldRenderSuggestions: _react.PropTypes.func,
	  alwaysRenderSuggestions: _react.PropTypes.bool,
	  multiSection: _react.PropTypes.bool,
	  renderSectionTitle: function renderSectionTitle(props, propName) {
	    var renderSectionTitle = props[propName];

	    if (props.multiSection === true && typeof renderSectionTitle !== 'function') {
	      throw new Error('\'renderSectionTitle\' must be implemented. See: https://github.com/moroshko/react-autosuggest#renderSectionTitleProp');
	    }
	  },
	  getSectionSuggestions: function getSectionSuggestions(props, propName) {
	    var getSectionSuggestions = props[propName];

	    if (props.multiSection === true && typeof getSectionSuggestions !== 'function') {
	      throw new Error('\'getSectionSuggestions\' must be implemented. See: https://github.com/moroshko/react-autosuggest#getSectionSuggestionsProp');
	    }
	  },
	  focusInputOnSuggestionClick: _react.PropTypes.bool,
	  highlightFirstSuggestion: _react.PropTypes.bool,
	  theme: _react.PropTypes.object,
	  id: _react.PropTypes.string
	} : void 0;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = function shallowEqualArrays(arrA, arrB) {
	  if (arrA === arrB) {
	    return true;
	  }

	  var len = arrA.length;

	  if (arrB.length !== len) {
	    return false;
	  }

	  for (var i = 0; i < len; i++) {
	    if (arrA[i] !== arrB[i]) {
	      return false;
	    }
	  }

	  return true;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(6).default;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _sectionIterator = __webpack_require__(7);

	var _sectionIterator2 = _interopRequireDefault(_sectionIterator);

	var _reactThemeable = __webpack_require__(8);

	var _reactThemeable2 = _interopRequireDefault(_reactThemeable);

	var _SectionTitle = __webpack_require__(10);

	var _SectionTitle2 = _interopRequireDefault(_SectionTitle);

	var _ItemsList = __webpack_require__(12);

	var _ItemsList2 = _interopRequireDefault(_ItemsList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var alwaysTrue = function alwaysTrue() {
	  return true;
	};
	var emptyObject = {};
	var defaultRenderInputComponent = function defaultRenderInputComponent(props) {
	  return _react2.default.createElement('input', props);
	};
	var defaultRenderItemsContainer = function defaultRenderItemsContainer(_ref) {
	  var children = _ref.children,
	      containerProps = _ref.containerProps;
	  return _react2.default.createElement('div', _extends({ children: children }, containerProps));
	};
	var defaultTheme = {
	  container: 'react-autowhatever__container',
	  containerOpen: 'react-autowhatever__container--open',
	  input: 'react-autowhatever__input',
	  inputOpen: 'react-autowhatever__input--open',
	  inputFocused: 'react-autowhatever__input--focused',
	  itemsContainer: 'react-autowhatever__items-container',
	  itemsContainerOpen: 'react-autowhatever__items-container--open',
	  itemsList: 'react-autowhatever__items-list',
	  item: 'react-autowhatever__item',
	  itemFirst: 'react-autowhatever__item--first',
	  itemHighlighted: 'react-autowhatever__item--highlighted',
	  sectionContainer: 'react-autowhatever__section-container',
	  sectionContainerFirst: 'react-autowhatever__section-container--first',
	  sectionTitle: 'react-autowhatever__section-title'
	};

	var Autowhatever = function (_Component) {
	  _inherits(Autowhatever, _Component);

	  function Autowhatever(props) {
	    _classCallCheck(this, Autowhatever);

	    var _this = _possibleConstructorReturn(this, (Autowhatever.__proto__ || Object.getPrototypeOf(Autowhatever)).call(this, props));

	    _this.storeInputReference = function (input) {
	      if (input !== null) {
	        _this.input = input;
	      }
	    };

	    _this.storeItemsContainerReference = function (itemsContainer) {
	      if (itemsContainer !== null) {
	        _this.itemsContainer = itemsContainer;
	      }
	    };

	    _this.onHighlightedItemChange = function (highlightedItem) {
	      _this.highlightedItem = highlightedItem;
	    };

	    _this.getItemId = function (sectionIndex, itemIndex) {
	      if (itemIndex === null) {
	        return null;
	      }

	      var id = _this.props.id;

	      var section = sectionIndex === null ? '' : 'section-' + sectionIndex;

	      return 'react-autowhatever-' + id + '-' + section + '-item-' + itemIndex;
	    };

	    _this.onFocus = function (event) {
	      var inputProps = _this.props.inputProps;


	      _this.setState({
	        isInputFocused: true
	      });

	      inputProps.onFocus && inputProps.onFocus(event);
	    };

	    _this.onBlur = function (event) {
	      var inputProps = _this.props.inputProps;


	      _this.setState({
	        isInputFocused: false
	      });

	      inputProps.onBlur && inputProps.onBlur(event);
	    };

	    _this.onKeyDown = function (event) {
	      var _this$props = _this.props,
	          inputProps = _this$props.inputProps,
	          highlightedSectionIndex = _this$props.highlightedSectionIndex,
	          highlightedItemIndex = _this$props.highlightedItemIndex;


	      switch (event.key) {
	        case 'ArrowDown':
	        case 'ArrowUp':
	          {
	            var nextPrev = event.key === 'ArrowDown' ? 'next' : 'prev';

	            var _this$sectionIterator = _this.sectionIterator[nextPrev]([highlightedSectionIndex, highlightedItemIndex]),
	                _this$sectionIterator2 = _slicedToArray(_this$sectionIterator, 2),
	                newHighlightedSectionIndex = _this$sectionIterator2[0],
	                newHighlightedItemIndex = _this$sectionIterator2[1];

	            inputProps.onKeyDown(event, { newHighlightedSectionIndex: newHighlightedSectionIndex, newHighlightedItemIndex: newHighlightedItemIndex });
	            break;
	          }

	        default:
	          inputProps.onKeyDown(event, { highlightedSectionIndex: highlightedSectionIndex, highlightedItemIndex: highlightedItemIndex });
	      }
	    };

	    _this.highlightedItem = null;

	    _this.state = {
	      isInputFocused: false
	    };

	    _this.setSectionsItems(props);
	    _this.setSectionIterator(props);
	    _this.setTheme(props);
	    return _this;
	  }

	  _createClass(Autowhatever, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.ensureHighlightedItemIsVisible();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.items !== this.props.items) {
	        this.setSectionsItems(nextProps);
	      }

	      if (nextProps.items !== this.props.items || nextProps.multiSection !== this.props.multiSection) {
	        this.setSectionIterator(nextProps);
	      }

	      if (nextProps.theme !== this.props.theme) {
	        this.setTheme(nextProps);
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.ensureHighlightedItemIsVisible();
	    }
	  }, {
	    key: 'setSectionsItems',
	    value: function setSectionsItems(props) {
	      if (props.multiSection) {
	        this.sectionsItems = props.items.map(function (section) {
	          return props.getSectionItems(section);
	        });
	        this.sectionsLengths = this.sectionsItems.map(function (items) {
	          return items.length;
	        });
	        this.allSectionsAreEmpty = this.sectionsLengths.every(function (itemsCount) {
	          return itemsCount === 0;
	        });
	      }
	    }
	  }, {
	    key: 'setSectionIterator',
	    value: function setSectionIterator(props) {
	      this.sectionIterator = (0, _sectionIterator2.default)({
	        multiSection: props.multiSection,
	        data: props.multiSection ? this.sectionsLengths : props.items.length
	      });
	    }
	  }, {
	    key: 'setTheme',
	    value: function setTheme(props) {
	      this.theme = (0, _reactThemeable2.default)(props.theme);
	    }
	  }, {
	    key: 'renderSections',
	    value: function renderSections() {
	      var _this2 = this;

	      if (this.allSectionsAreEmpty) {
	        return null;
	      }

	      var theme = this.theme;
	      var _props = this.props,
	          id = _props.id,
	          items = _props.items,
	          renderItem = _props.renderItem,
	          renderItemData = _props.renderItemData,
	          shouldRenderSection = _props.shouldRenderSection,
	          renderSectionTitle = _props.renderSectionTitle,
	          highlightedSectionIndex = _props.highlightedSectionIndex,
	          highlightedItemIndex = _props.highlightedItemIndex,
	          itemProps = _props.itemProps;


	      return items.map(function (section, sectionIndex) {
	        if (!shouldRenderSection(section)) {
	          return null;
	        }

	        var keyPrefix = 'react-autowhatever-' + id + '-';
	        var sectionKeyPrefix = keyPrefix + 'section-' + sectionIndex + '-';
	        var isFirstSection = sectionIndex === 0;

	        // `key` is provided by theme()
	        /* eslint-disable react/jsx-key */
	        return _react2.default.createElement(
	          'div',
	          theme(sectionKeyPrefix + 'container', 'sectionContainer', isFirstSection && 'sectionContainerFirst'),
	          _react2.default.createElement(_SectionTitle2.default, {
	            section: section,
	            renderSectionTitle: renderSectionTitle,
	            theme: theme,
	            sectionKeyPrefix: sectionKeyPrefix
	          }),
	          _react2.default.createElement(_ItemsList2.default, {
	            items: _this2.sectionsItems[sectionIndex],
	            itemProps: itemProps,
	            renderItem: renderItem,
	            renderItemData: renderItemData,
	            sectionIndex: sectionIndex,
	            highlightedItemIndex: highlightedSectionIndex === sectionIndex ? highlightedItemIndex : null,
	            onHighlightedItemChange: _this2.onHighlightedItemChange,
	            getItemId: _this2.getItemId,
	            theme: theme,
	            keyPrefix: keyPrefix,
	            ref: _this2.storeItemsListReference
	          })
	        );
	        /* eslint-enable react/jsx-key */
	      });
	    }
	  }, {
	    key: 'renderItems',
	    value: function renderItems() {
	      var items = this.props.items;


	      if (items.length === 0) {
	        return null;
	      }

	      var theme = this.theme;
	      var _props2 = this.props,
	          id = _props2.id,
	          renderItem = _props2.renderItem,
	          renderItemData = _props2.renderItemData,
	          highlightedSectionIndex = _props2.highlightedSectionIndex,
	          highlightedItemIndex = _props2.highlightedItemIndex,
	          itemProps = _props2.itemProps;


	      return _react2.default.createElement(_ItemsList2.default, {
	        items: items,
	        itemProps: itemProps,
	        renderItem: renderItem,
	        renderItemData: renderItemData,
	        highlightedItemIndex: highlightedSectionIndex === null ? highlightedItemIndex : null,
	        onHighlightedItemChange: this.onHighlightedItemChange,
	        getItemId: this.getItemId,
	        theme: theme,
	        keyPrefix: 'react-autowhatever-' + id + '-'
	      });
	    }
	  }, {
	    key: 'ensureHighlightedItemIsVisible',
	    value: function ensureHighlightedItemIsVisible() {
	      var highlightedItem = this.highlightedItem;


	      if (!highlightedItem) {
	        return;
	      }

	      var itemsContainer = this.itemsContainer;

	      var itemOffsetRelativeToContainer = highlightedItem.offsetParent === itemsContainer ? highlightedItem.offsetTop : highlightedItem.offsetTop - itemsContainer.offsetTop;

	      var scrollTop = itemsContainer.scrollTop; // Top of the visible area

	      if (itemOffsetRelativeToContainer < scrollTop) {
	        // Item is off the top of the visible area
	        scrollTop = itemOffsetRelativeToContainer;
	      } else if (itemOffsetRelativeToContainer + highlightedItem.offsetHeight > scrollTop + itemsContainer.offsetHeight) {
	        // Item is off the bottom of the visible area
	        scrollTop = itemOffsetRelativeToContainer + highlightedItem.offsetHeight - itemsContainer.offsetHeight;
	      }

	      if (scrollTop !== itemsContainer.scrollTop) {
	        itemsContainer.scrollTop = scrollTop;
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var theme = this.theme;
	      var _props3 = this.props,
	          id = _props3.id,
	          multiSection = _props3.multiSection,
	          renderInputComponent = _props3.renderInputComponent,
	          renderItemsContainer = _props3.renderItemsContainer,
	          highlightedSectionIndex = _props3.highlightedSectionIndex,
	          highlightedItemIndex = _props3.highlightedItemIndex;
	      var isInputFocused = this.state.isInputFocused;

	      var renderedItems = multiSection ? this.renderSections() : this.renderItems();
	      var isOpen = renderedItems !== null;
	      var ariaActivedescendant = this.getItemId(highlightedSectionIndex, highlightedItemIndex);
	      var containerProps = theme('react-autowhatever-' + id + '-container', 'container', isOpen && 'containerOpen');
	      var itemsContainerId = 'react-autowhatever-' + id;
	      var inputComponent = renderInputComponent(_extends({
	        type: 'text',
	        value: '',
	        autoComplete: 'off',
	        role: 'combobox',
	        'aria-autocomplete': 'list',
	        'aria-owns': itemsContainerId,
	        'aria-expanded': isOpen,
	        'aria-haspopup': isOpen,
	        'aria-activedescendant': ariaActivedescendant
	      }, theme('react-autowhatever-' + id + '-input', 'input', isOpen && 'inputOpen', isInputFocused && 'inputFocused'), this.props.inputProps, {
	        onFocus: this.onFocus,
	        onBlur: this.onBlur,
	        onKeyDown: this.props.inputProps.onKeyDown && this.onKeyDown,
	        ref: this.storeInputReference
	      }));
	      var itemsContainer = renderItemsContainer({
	        children: renderedItems,
	        containerProps: _extends({
	          id: itemsContainerId
	        }, theme('react-autowhatever-' + id + '-items-container', 'itemsContainer', isOpen && 'itemsContainerOpen'), {
	          ref: this.storeItemsContainerReference
	        })
	      });

	      return _react2.default.createElement(
	        'div',
	        containerProps,
	        inputComponent,
	        itemsContainer
	      );
	    }
	  }]);

	  return Autowhatever;
	}(_react.Component);

	Autowhatever.propTypes = {
	  id: _react.PropTypes.string, // Used in aria-* attributes. If multiple Autowhatever's are rendered on a page, they must have unique ids.
	  multiSection: _react.PropTypes.bool, // Indicates whether a multi section layout should be rendered.
	  renderInputComponent: _react.PropTypes.func, // When specified, it is used to render the input element.
	  renderItemsContainer: _react.PropTypes.func, // Renders the items container.
	  items: _react.PropTypes.array.isRequired, // Array of items or sections to render.
	  renderItem: _react.PropTypes.func, // This function renders a single item.
	  renderItemData: _react.PropTypes.object, // Arbitrary data that will be passed to renderItem()
	  shouldRenderSection: _react.PropTypes.func, // This function gets a section and returns whether it should be rendered, or not.
	  renderSectionTitle: _react.PropTypes.func, // This function gets a section and renders its title.
	  getSectionItems: _react.PropTypes.func, // This function gets a section and returns its items, which will be passed into `renderItem` for rendering.
	  inputProps: _react.PropTypes.object, // Arbitrary input props
	  itemProps: _react.PropTypes.oneOfType([// Arbitrary item props
	  _react.PropTypes.object, _react.PropTypes.func]),
	  highlightedSectionIndex: _react.PropTypes.number, // Section index of the highlighted item
	  highlightedItemIndex: _react.PropTypes.number, // Highlighted item index (within a section)
	  theme: _react.PropTypes.oneOfType([// Styles. See: https://github.com/markdalgleish/react-themeable
	  _react.PropTypes.object, _react.PropTypes.array])
	};
	Autowhatever.defaultProps = {
	  id: '1',
	  multiSection: false,
	  renderInputComponent: defaultRenderInputComponent,
	  renderItemsContainer: defaultRenderItemsContainer,
	  shouldRenderSection: alwaysTrue,
	  renderItem: function renderItem() {
	    throw new Error('`renderItem` must be provided');
	  },
	  renderItemData: emptyObject,
	  renderSectionTitle: function renderSectionTitle() {
	    throw new Error('`renderSectionTitle` must be provided');
	  },
	  getSectionItems: function getSectionItems() {
	    throw new Error('`getSectionItems` must be provided');
	  },
	  inputProps: emptyObject,
	  itemProps: emptyObject,
	  highlightedSectionIndex: null,
	  highlightedItemIndex: null,
	  theme: defaultTheme
	};
	exports.default = Autowhatever;

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	module.exports = function (_ref) {
	  var data = _ref.data;
	  var multiSection = _ref.multiSection;

	  function nextNonEmptySectionIndex(sectionIndex) {
	    if (sectionIndex === null) {
	      sectionIndex = 0;
	    } else {
	      sectionIndex++;
	    }

	    while (sectionIndex < data.length && data[sectionIndex] === 0) {
	      sectionIndex++;
	    }

	    return sectionIndex === data.length ? null : sectionIndex;
	  }

	  function prevNonEmptySectionIndex(sectionIndex) {
	    if (sectionIndex === null) {
	      sectionIndex = data.length - 1;
	    } else {
	      sectionIndex--;
	    }

	    while (sectionIndex >= 0 && data[sectionIndex] === 0) {
	      sectionIndex--;
	    }

	    return sectionIndex === -1 ? null : sectionIndex;
	  }

	  function next(position) {
	    var _position = _slicedToArray(position, 2);

	    var sectionIndex = _position[0];
	    var itemIndex = _position[1];


	    if (multiSection) {
	      if (itemIndex === null || itemIndex === data[sectionIndex] - 1) {
	        sectionIndex = nextNonEmptySectionIndex(sectionIndex);

	        if (sectionIndex === null) {
	          return [null, null];
	        }

	        return [sectionIndex, 0];
	      }

	      return [sectionIndex, itemIndex + 1];
	    }

	    if (data === 0 || itemIndex === data - 1) {
	      return [null, null];
	    }

	    if (itemIndex === null) {
	      return [null, 0];
	    }

	    return [null, itemIndex + 1];
	  }

	  function prev(position) {
	    var _position2 = _slicedToArray(position, 2);

	    var sectionIndex = _position2[0];
	    var itemIndex = _position2[1];


	    if (multiSection) {
	      if (itemIndex === null || itemIndex === 0) {
	        sectionIndex = prevNonEmptySectionIndex(sectionIndex);

	        if (sectionIndex === null) {
	          return [null, null];
	        }

	        return [sectionIndex, data[sectionIndex] - 1];
	      }

	      return [sectionIndex, itemIndex - 1];
	    }

	    if (data === 0 || itemIndex === 0) {
	      return [null, null];
	    }

	    if (itemIndex === null) {
	      return [null, data - 1];
	    }

	    return [null, itemIndex - 1];
	  }

	  function isLast(position) {
	    return next(position)[1] === null;
	  }

	  return {
	    next: next,
	    prev: prev,
	    isLast: isLast
	  };
	};


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

	var _objectAssign = __webpack_require__(9);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var truthy = function truthy(x) {
	  return x;
	};

	exports['default'] = function (input) {
	  var _ref = Array.isArray(input) && input.length === 2 ? input : [input, null];

	  var _ref2 = _slicedToArray(_ref, 2);

	  var theme = _ref2[0];
	  var classNameDecorator = _ref2[1];

	  return function (key) {
	    for (var _len = arguments.length, names = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      names[_key - 1] = arguments[_key];
	    }

	    var styles = names.map(function (name) {
	      return theme[name];
	    }).filter(truthy);

	    return typeof styles[0] === 'string' || typeof classNameDecorator === 'function' ? { key: key, className: classNameDecorator ? classNameDecorator.apply(undefined, _toConsumableArray(styles)) : styles.join(' ') } : { key: key, style: _objectAssign2['default'].apply(undefined, [{}].concat(_toConsumableArray(styles))) };
	  };
	};

	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function ToObject(val) {
		if (val == null) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function ownEnumerableKeys(obj) {
		var keys = Object.getOwnPropertyNames(obj);

		if (Object.getOwnPropertySymbols) {
			keys = keys.concat(Object.getOwnPropertySymbols(obj));
		}

		return keys.filter(function (key) {
			return propIsEnumerable.call(obj, key);
		});
	}

	module.exports = Object.assign || function (target, source) {
		var from;
		var keys;
		var to = ToObject(target);

		for (var s = 1; s < arguments.length; s++) {
			from = arguments[s];
			keys = ownEnumerableKeys(Object(from));

			for (var i = 0; i < keys.length; i++) {
				to[keys[i]] = from[keys[i]];
			}
		}

		return to;
	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _compareObjects = __webpack_require__(11);

	var _compareObjects2 = _interopRequireDefault(_compareObjects);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SectionTitle = function (_Component) {
	  _inherits(SectionTitle, _Component);

	  function SectionTitle() {
	    _classCallCheck(this, SectionTitle);

	    return _possibleConstructorReturn(this, (SectionTitle.__proto__ || Object.getPrototypeOf(SectionTitle)).apply(this, arguments));
	  }

	  _createClass(SectionTitle, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return (0, _compareObjects2.default)(nextProps, this.props);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          section = _props.section,
	          renderSectionTitle = _props.renderSectionTitle,
	          theme = _props.theme,
	          sectionKeyPrefix = _props.sectionKeyPrefix;

	      var sectionTitle = renderSectionTitle(section);

	      if (!sectionTitle) {
	        return null;
	      }

	      return _react2.default.createElement(
	        'div',
	        theme(sectionKeyPrefix + 'title', 'sectionTitle'),
	        sectionTitle
	      );
	    }
	  }]);

	  return SectionTitle;
	}(_react.Component);

	SectionTitle.propTypes = {
	  section: _react.PropTypes.any.isRequired,
	  renderSectionTitle: _react.PropTypes.func.isRequired,
	  theme: _react.PropTypes.func.isRequired,
	  sectionKeyPrefix: _react.PropTypes.string.isRequired
	};
	exports.default = SectionTitle;

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = compareObjects;
	function compareObjects(objA, objB) {
	  var keys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

	  if (objA === objB) {
	    return false;
	  }

	  var aKeys = Object.keys(objA);
	  var bKeys = Object.keys(objB);

	  if (aKeys.length !== bKeys.length) {
	    return true;
	  }

	  var keysMap = {};
	  var i = void 0,
	      len = void 0;

	  for (i = 0, len = keys.length; i < len; i++) {
	    keysMap[keys[i]] = true;
	  }

	  for (i = 0, len = aKeys.length; i < len; i++) {
	    var key = aKeys[i];
	    var aValue = objA[key];
	    var bValue = objB[key];

	    if (aValue === bValue) {
	      continue;
	    }

	    if (!keysMap[key] || aValue === null || bValue === null || (typeof aValue === 'undefined' ? 'undefined' : _typeof(aValue)) !== 'object' || (typeof bValue === 'undefined' ? 'undefined' : _typeof(bValue)) !== 'object') {
	      return true;
	    }

	    var aValueKeys = Object.keys(aValue);
	    var bValueKeys = Object.keys(bValue);

	    if (aValueKeys.length !== bValueKeys.length) {
	      return true;
	    }

	    for (var n = 0, length = aValueKeys.length; n < length; n++) {
	      var aValueKey = aValueKeys[n];

	      if (aValue[aValueKey] !== bValue[aValueKey]) {
	        return true;
	      }
	    }
	  }

	  return false;
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _Item = __webpack_require__(13);

	var _Item2 = _interopRequireDefault(_Item);

	var _compareObjects = __webpack_require__(11);

	var _compareObjects2 = _interopRequireDefault(_compareObjects);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ItemsList = function (_Component) {
	  _inherits(ItemsList, _Component);

	  function ItemsList() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, ItemsList);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ItemsList.__proto__ || Object.getPrototypeOf(ItemsList)).call.apply(_ref, [this].concat(args))), _this), _this.storeHighlightedItemReference = function (highlightedItem) {
	      _this.props.onHighlightedItemChange(highlightedItem === null ? null : highlightedItem.item);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(ItemsList, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return (0, _compareObjects2.default)(nextProps, this.props, ['itemProps']);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props,
	          items = _props.items,
	          itemProps = _props.itemProps,
	          renderItem = _props.renderItem,
	          renderItemData = _props.renderItemData,
	          sectionIndex = _props.sectionIndex,
	          highlightedItemIndex = _props.highlightedItemIndex,
	          getItemId = _props.getItemId,
	          theme = _props.theme,
	          keyPrefix = _props.keyPrefix;

	      var sectionPrefix = sectionIndex === null ? keyPrefix : keyPrefix + 'section-' + sectionIndex + '-';
	      var isItemPropsFunction = typeof itemProps === 'function';

	      return _react2.default.createElement(
	        'ul',
	        _extends({ role: 'listbox' }, theme(sectionPrefix + 'items-list', 'itemsList')),
	        items.map(function (item, itemIndex) {
	          var isFirst = itemIndex === 0;
	          var isHighlighted = itemIndex === highlightedItemIndex;
	          var itemKey = sectionPrefix + 'item-' + itemIndex;
	          var itemPropsObj = isItemPropsFunction ? itemProps({ sectionIndex: sectionIndex, itemIndex: itemIndex }) : itemProps;
	          var allItemProps = _extends({
	            id: getItemId(sectionIndex, itemIndex)
	          }, theme(itemKey, 'item', isFirst && 'itemFirst', isHighlighted && 'itemHighlighted'), itemPropsObj);

	          if (isHighlighted) {
	            allItemProps.ref = _this2.storeHighlightedItemReference;
	          }

	          // `key` is provided by theme()
	          /* eslint-disable react/jsx-key */
	          return _react2.default.createElement(_Item2.default, _extends({}, allItemProps, {
	            sectionIndex: sectionIndex,
	            itemIndex: itemIndex,
	            item: item,
	            renderItem: renderItem,
	            renderItemData: renderItemData
	          }));
	          /* eslint-enable react/jsx-key */
	        })
	      );
	    }
	  }]);

	  return ItemsList;
	}(_react.Component);

	ItemsList.propTypes = {
	  items: _react.PropTypes.array.isRequired,
	  itemProps: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.func]),
	  renderItem: _react.PropTypes.func.isRequired,
	  renderItemData: _react.PropTypes.object.isRequired,
	  sectionIndex: _react.PropTypes.number,
	  highlightedItemIndex: _react.PropTypes.number,
	  onHighlightedItemChange: _react.PropTypes.func.isRequired,
	  getItemId: _react.PropTypes.func.isRequired,
	  theme: _react.PropTypes.func.isRequired,
	  keyPrefix: _react.PropTypes.string.isRequired
	};
	ItemsList.defaultProps = {
	  sectionIndex: null
	};
	exports.default = ItemsList;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _compareObjects = __webpack_require__(11);

	var _compareObjects2 = _interopRequireDefault(_compareObjects);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Item = function (_Component) {
	  _inherits(Item, _Component);

	  function Item() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Item);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Item.__proto__ || Object.getPrototypeOf(Item)).call.apply(_ref, [this].concat(args))), _this), _this.storeItemReference = function (item) {
	      if (item !== null) {
	        _this.item = item;
	      }
	    }, _this.onMouseEnter = function (event) {
	      var _this$props = _this.props,
	          sectionIndex = _this$props.sectionIndex,
	          itemIndex = _this$props.itemIndex;


	      _this.props.onMouseEnter(event, { sectionIndex: sectionIndex, itemIndex: itemIndex });
	    }, _this.onMouseLeave = function (event) {
	      var _this$props2 = _this.props,
	          sectionIndex = _this$props2.sectionIndex,
	          itemIndex = _this$props2.itemIndex;


	      _this.props.onMouseLeave(event, { sectionIndex: sectionIndex, itemIndex: itemIndex });
	    }, _this.onMouseDown = function (event) {
	      var _this$props3 = _this.props,
	          sectionIndex = _this$props3.sectionIndex,
	          itemIndex = _this$props3.itemIndex;


	      _this.props.onMouseDown(event, { sectionIndex: sectionIndex, itemIndex: itemIndex });
	    }, _this.onClick = function (event) {
	      var _this$props4 = _this.props,
	          sectionIndex = _this$props4.sectionIndex,
	          itemIndex = _this$props4.itemIndex;


	      _this.props.onClick(event, { sectionIndex: sectionIndex, itemIndex: itemIndex });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Item, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return (0, _compareObjects2.default)(nextProps, this.props, ['renderItemData']);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          item = _props.item,
	          renderItem = _props.renderItem,
	          renderItemData = _props.renderItemData,
	          restProps = _objectWithoutProperties(_props, ['item', 'renderItem', 'renderItemData']);

	      delete restProps.sectionIndex;
	      delete restProps.itemIndex;

	      if (typeof restProps.onMouseEnter === 'function') {
	        restProps.onMouseEnter = this.onMouseEnter;
	      }

	      if (typeof restProps.onMouseLeave === 'function') {
	        restProps.onMouseLeave = this.onMouseLeave;
	      }

	      if (typeof restProps.onMouseDown === 'function') {
	        restProps.onMouseDown = this.onMouseDown;
	      }

	      if (typeof restProps.onClick === 'function') {
	        restProps.onClick = this.onClick;
	      }

	      return _react2.default.createElement(
	        'li',
	        _extends({ role: 'option' }, restProps, { ref: this.storeItemReference }),
	        renderItem(item, renderItemData)
	      );
	    }
	  }]);

	  return Item;
	}(_react.Component);

	Item.propTypes = {
	  sectionIndex: _react.PropTypes.number,
	  itemIndex: _react.PropTypes.number.isRequired,
	  item: _react.PropTypes.any.isRequired,
	  renderItem: _react.PropTypes.func.isRequired,
	  renderItemData: _react.PropTypes.object.isRequired,
	  onMouseEnter: _react.PropTypes.func,
	  onMouseLeave: _react.PropTypes.func,
	  onMouseDown: _react.PropTypes.func,
	  onClick: _react.PropTypes.func
	};
	exports.default = Item;

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var defaultTheme = exports.defaultTheme = {
	  container: 'react-autosuggest__container',
	  containerOpen: 'react-autosuggest__container--open',
	  input: 'react-autosuggest__input',
	  inputOpen: 'react-autosuggest__input--open',
	  inputFocused: 'react-autosuggest__input--focused',
	  suggestionsContainer: 'react-autosuggest__suggestions-container',
	  suggestionsContainerOpen: 'react-autosuggest__suggestions-container--open',
	  suggestionsList: 'react-autosuggest__suggestions-list',
	  suggestion: 'react-autosuggest__suggestion',
	  suggestionFirst: 'react-autosuggest__suggestion--first',
	  suggestionHighlighted: 'react-autosuggest__suggestion--highlighted',
	  sectionContainer: 'react-autosuggest__section-container',
	  sectionContainerFirst: 'react-autosuggest__section-container--first',
	  sectionTitle: 'react-autosuggest__section-title'
	};

	var mapToAutowhateverTheme = exports.mapToAutowhateverTheme = function mapToAutowhateverTheme(theme) {
	  var result = {};

	  for (var key in theme) {
	    switch (key) {
	      case 'suggestionsContainer':
	        result['itemsContainer'] = theme[key];
	        break;

	      case 'suggestionsContainerOpen':
	        result['itemsContainerOpen'] = theme[key];
	        break;

	      case 'suggestion':
	        result['item'] = theme[key];
	        break;

	      case 'suggestionFirst':
	        result['itemFirst'] = theme[key];
	        break;

	      case 'suggestionHighlighted':
	        result['itemHighlighted'] = theme[key];
	        break;

	      case 'suggestionsList':
	        result['itemsList'] = theme[key];
	        break;

	      default:
	        result[key] = theme[key];
	    }
	  }

	  return result;
	};

/***/ }
/******/ ])
});
;