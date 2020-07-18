module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ProjectDetails.js":
/*!**************************************!*\
  !*** ./components/ProjectDetails.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_projectDetails_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/projectDetails.module.css */ "./styles/projectDetails.module.css");
/* harmony import */ var _styles_projectDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_projectDetails_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var fslightbox_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fslightbox-react */ "fslightbox-react");
/* harmony import */ var fslightbox_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fslightbox_react__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/ElenaFowler 1/Documents/Hack4Impact/Hack4Impact-Website/h4i-website/components/ProjectDetails.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class ProjectDetails extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }

  render() {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }
    }, __jsx(fslightbox_react__WEBPACK_IMPORTED_MODULE_4___default.a, {
      toggler: this.state.isVisible,
      sources: this.props.pictures,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
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
      className: _styles_projectDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
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
      className: _styles_projectDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.centered,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }
    }, this.props.projectName)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, {
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
    }, "Product")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, {
      style: {
        marginBottom: '.3rem'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 15
      }
    }, this.props.productDescription), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, {
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
    }, "Tech Stack")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, {
      style: {
        marginBottom: '.3rem'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 15
      }
    }, this.props.techStackDescription), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, {
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
    }, "Team Members")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, {
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
    }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaGithub"], {
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
    })), __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaImages"], {
      style: {
        width: '30px',
        height: '30px',
        marginLeft: '5px'
      },
      onClick: () => {
        this.setState({
          isVisible: !this.state.isVisible
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

}

/* harmony default export */ __webpack_exports__["default"] = (ProjectDetails);

/***/ }),

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ProjectDetails_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ProjectDetails.js */ "./components/ProjectDetails.js");
var _jsxFileName = "/Users/ElenaFowler 1/Documents/Hack4Impact/Hack4Impact-Website/h4i-website/pages/projects.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const projectCardData = [{
  projectName: 'Environmental Center of San Luis Obispo Beach Cleanup Database',
  productDescription: "We created an interface to a new SQL database storing beach cleanup data, which was previously stored in spreadsheets. Our product allows ECOSLO to fully manage and utilize years worth of data easily to spread public awareness and gain funding.",
  techStackDescription: "React.js, Node.js, Express, PostgreSQL, Heroku",
  teamMembersDescription: "Elena Fowler, Anna Reid, Ben Glossner, Ethan Abrams, Comal Virdi, Reilly Salkowski",
  githubURL: "https://github.com/hack4impact-calpoly/EcosloDataApp",
  pictures: ["./images/ecoslo-project/home.png", "./images/ecoslo-project/login.png", "./images/ecoslo-project/add.png", "./images/ecoslo-project/view.png", "./images/ecoslo-project/update.png", "./images/ecoslo-project/alter.png"]
}, {
  projectName: 'Cal Poly Cat Program Cat Profiles',
  productDescription: "We created an interface to a new SQL database storing beach cleanup data, which was previously stored in spreadsheets. Our product allows ECOSLO to fully manage and utilize years worth of data easily to spread public awareness and gain funding.",
  techStackDescription: "React.js Node.js Express PostgreSQL Heroku",
  teamMembersDescription: "Elena Fowler, Anna Reid, Ben Glossner, Ethan Abrams, Comal Virdi, Reilly Salkowski",
  githubURL: "https://github.com/hack4impact-calpoly/EcosloDataApp",
  pictures: ["./images/ecoslo-project/home.png", "./images/ecoslo-project/login.png"]
}, {
  projectName: 'SLO Botanical Gardens Volunteer Hour Tracker',
  productDescription: "We created a Volunteer Management System that allows volunteers to record their hours and view their volunteer history, and in addition, allows nonprofit supervisors to keep this information and export it when necessary.",
  techStackDescription: "Django, Python, JavaScript, HTML, CSS, PostgreSQL, Heroku",
  teamMembersDescription: "Eric Newcomer, Tim Kim, Cole Perry, Justin Poist, Jack Fales",
  githubURL: "https://github.com/hack4impact-calpoly/slobg-track",
  pictures: ["./images/slobg-project/home.png", "./images/slobg-project/table.png", "./images/slobg-project/login.png"]
}, {
  projectName: 'CASA Volunteer Form Tracker',
  productDescription: "We built an advocate form tracker for CASA (Court Appointed Special Advocates). The app tracks information about the advocate's interactions with foster kids, allowing CASA to receive government funding.",
  techStackDescription: "Django, Python, JavaScript, HTML, CSS, PostgreSQL, Heroku",
  teamMembersDescription: "Eric Newcomer, Ethan Zimbelman, Ben Glossner, Antonio Aguilar, Elena Fowler, Chloe Hebert",
  githubURL: "https://github.com/hack4impact-calpoly/CASA-Track",
  pictures: ["./images/casa-project/home.png", "./images/casa-project/esig.png"]
}];

class Projects extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  renderProjectDetailCards() {
    let projectCards = projectCardData.map(content => {
      return __jsx(_components_ProjectDetails_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
        projectName: content.projectName,
        productDescription: content.productDescription,
        techStackDescription: content.techStackDescription,
        teamMembersDescription: content.teamMembersDescription,
        githubURL: content.githubURL,
        pictures: content.pictures,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 20
        }
      });
    });
    let rowGroups = [];

    while (projectCards.length) {
      rowGroups.push(projectCards.splice(0, 2));
    }

    let rows = rowGroups.map((cardRowArray, index) => {
      return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: 11,
        md: 6,
        lg: 5,
        xl: 5,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 17
        }
      }, cardRowArray[0]), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: 11,
        md: 6,
        lg: 5,
        xl: 5,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 17
        }
      }, cardRowArray[1]));
    }); //   let projectCards = projectCardData.map((content) => {
    //     return <ProjectDetails projectName={content.projectName} productDescription={content.productDescription}
    //     techStackDescription={content.techStackDescription} teamMembersDescription={content.teamMembersDescription}
    //     githubURL={content.githubURL} pictures={content.pictures}/>
    // });
    // let rowGroups = [];
    // while(projectCardData.length){
    //   rowGroups.push(projectCardData.splice(0, 2));
    // }
    // let rows = rowGroups.map((cardRowArray, index) => {
    //   return(
    //     <Row style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
    //         <Col sm={11} md={6} lg={5} xl={5}>
    //         <ProjectDetails projectName={content.projectName} productDescription={content.productDescription}
    //     techStackDescription={content.techStackDescription} teamMembersDescription={content.teamMembersDescription}
    //     githubURL={content.githubURL} pictures={content.pictures}/>
    //         </Col>
    //         <Col sm={11} md={6} lg={5} xl={5}>
    //         <ProjectDetails projectName={content.projectName} productDescription={content.productDescription}
    //     techStackDescription={content.techStackDescription} teamMembersDescription={content.teamMembersDescription}
    //     githubURL={content.githubURL} pictures={content.pictures}/>
    //         </Col>
    //     </Row>
    //   );
    // })

    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 13
      }
    }, rows);
  }

  render() {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 7
      }
    }, __jsx("div", {
      style: {
        marginTop: '50px',
        alignContent: 'center',
        textAlign: 'center',
        color: 'white'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }
    }, __jsx("h1", {
      style: {
        color: 'white',
        alignSelf: 'center'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }
    }, "Our Work"), __jsx("div", {
      style: {
        margin: '20px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 13
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      sm: 12,
      md: 8,
      lg: 6,
      xl: 6,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 17
      }
    }, "Each school year we build a product for 3-5 nonprofits to help them better serve their communities. Here are a few projects that we have built over the years."))), __jsx("div", {
      style: {
        margin: '40px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }
    })), this.renderProjectDetailCards());
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ "./styles/projectDetails.module.css":
/*!******************************************!*\
  !*** ./styles/projectDetails.module.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "projectDetails_container__2rnYr",
	"centered": "projectDetails_centered__3JR25"
};

/***/ }),

/***/ 4:
/*!*********************************!*\
  !*** multi ./pages/projects.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ElenaFowler 1/Documents/Hack4Impact/Hack4Impact-Website/h4i-website/pages/projects.js */"./pages/projects.js");


/***/ }),

/***/ "fslightbox-react":
/*!***********************************!*\
  !*** external "fslightbox-react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fslightbox-react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ })

/******/ });
//# sourceMappingURL=projects.js.map