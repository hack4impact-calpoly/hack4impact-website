webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./components/ProjectDetails.js":
/*!**************************************!*\
  !*** ./components/ProjectDetails.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _styles_projectDetails_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/projectDetails.module.css */ "./styles/projectDetails.module.css");
/* harmony import */ var _styles_projectDetails_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_projectDetails_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var fslightbox_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! fslightbox-react */ "./node_modules/fslightbox-react/index.js");
/* harmony import */ var fslightbox_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(fslightbox_react__WEBPACK_IMPORTED_MODULE_9__);





var _jsxFileName = "/Users/ElenaFowler 1/Documents/Hack4Impact/Hack4Impact-Website/h4i-website/components/ProjectDetails.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var ProjectDetails = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(ProjectDetails, _React$Component);

  var _super = _createSuper(ProjectDetails);

  function ProjectDetails(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProjectDetails);

    _this = _super.call(this, props);
    _this.state = {
      isVisible: false
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProjectDetails, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 9
        }
      }, __jsx(fslightbox_react__WEBPACK_IMPORTED_MODULE_9___default.a, {
        toggler: this.state.isVisible,
        sources: this.props.pictures,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 9
        }
      }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        style: {
          overflow: 'auto',
          marginBottom: '30px',
          width: '100%',
          height: '100%'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: _styles_projectDetails_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.container,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }
      }, __jsx("img", {
        style: {
          width: '100%',
          height: '7rem'
        },
        src: "./images/solid-card-image.png",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }
      }), __jsx("div", {
        className: _styles_projectDetails_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.centered,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }
      }, this.props.projectName)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Body, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Text, {
        style: {
          marginBottom: '.3rem'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }
      }, __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 19
        }
      }, "Product")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Text, {
        style: {
          marginBottom: '.3rem'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 15
        }
      }, this.props.productDescription), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Text, {
        style: {
          marginBottom: '.3rem'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 15
        }
      }, __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 19
        }
      }, "Tech Stack")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Text, {
        style: {
          marginBottom: '.3rem'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 15
        }
      }, this.props.techStackDescription), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Text, {
        style: {
          marginBottom: '.3rem'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 15
        }
      }, __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 19
        }
      }, "Team Members")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Text, {
        style: {
          marginBottom: '.3rem'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 15
        }
      }, this.props.teamMembersDescription), __jsx("div", {
        style: {
          margin: '10px'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 15
        }
      }), __jsx("div", {
        style: {
          alignContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 15
        }
      }, __jsx("a", {
        style: {
          marginRight: '5px'
        },
        href: this.props.githubURL,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 17
        }
      }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__["FaGithub"], {
        style: {
          width: '30px',
          height: '30px',
          color: 'black'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }
      })), __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__["FaImages"], {
        style: {
          width: '30px',
          height: '30px',
          marginLeft: '5px'
        },
        onClick: function onClick() {
          _this2.setState({
            isVisible: !_this2.state.isVisible
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 17
        }
      })))));
    }
  }]);

  return ProjectDetails;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ProjectDetails);

/***/ })

})
//# sourceMappingURL=projects.js.1a3a9da06ee9eabaf28d.hot-update.js.map