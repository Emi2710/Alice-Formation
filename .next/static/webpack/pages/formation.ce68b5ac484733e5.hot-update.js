"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/formation",{

/***/ "./pages/formation.js":
/*!****************************!*\
  !*** ./pages/formation.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/shared/lib/styled-jsx */ \"./node_modules/next/dist/shared/lib/styled-jsx.js\");\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Formation_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Formation.module.css */ \"./styles/Formation.module.css\");\n/* harmony import */ var _styles_Formation_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Formation_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_categories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/categories */ \"./components/categories.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components */ \"./components/index.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar Formation = function(param) {\n    var articles = param.articles, bannerData = param.bannerData;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), activeFilter = ref[0], setActiveFilter = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), filterItem = ref1[0], setFilterItem = ref1[1];\n    var handleFilter = function(item) {\n        setActiveFilter(item);\n        if (item === \"Tout\") {\n            setFilterItem(articles);\n        } else {\n            setFilterItem(articles.filter(function(article) {\n                return article.tags.includes(item);\n            }));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-4b6ffea83666db1b\",\n        children: [\n            bannerData === null || bannerData === void 0 ? void 0 : bannerData.map(function(formation) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                                className: \"jsx-4b6ffea83666db1b\",\n                                children: formation.metaTitle\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mtouk\\\\OneDrive\\\\Bureau\\\\Mes applications web\\\\ALICE-FORMATION\\\\Alice-Formation\\\\pages\\\\formation.js\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                name: \"description\",\n                                content: formation.description,\n                                className: \"jsx-4b6ffea83666db1b\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mtouk\\\\OneDrive\\\\Bureau\\\\Mes applications web\\\\ALICE-FORMATION\\\\Alice-Formation\\\\pages\\\\formation.js\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                name: \"keywords\",\n                                content: formation.tags,\n                                className: \"jsx-4b6ffea83666db1b\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mtouk\\\\OneDrive\\\\Bureau\\\\Mes applications web\\\\ALICE-FORMATION\\\\Alice-Formation\\\\pages\\\\formation.js\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\mtouk\\\\OneDrive\\\\Bureau\\\\Mes applications web\\\\ALICE-FORMATION\\\\Alice-Formation\\\\pages\\\\formation.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, _this)\n                }, void 0, false);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_5__.Navbar, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mtouk\\\\OneDrive\\\\Bureau\\\\Mes applications web\\\\ALICE-FORMATION\\\\Alice-Formation\\\\pages\\\\formation.js\",\n                lineNumber: 39,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_5__.HeroBanner, {\n                heroBanner: bannerData.length && bannerData[0]\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mtouk\\\\OneDrive\\\\Bureau\\\\Mes applications web\\\\ALICE-FORMATION\\\\Alice-Formation\\\\pages\\\\formation.js\",\n                lineNumber: 40,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-4b6ffea83666db1b\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-4b6ffea83666db1b\" + \" \" + \"display-flex\",\n                        children: _components_categories__WEBPACK_IMPORTED_MODULE_4__[\"default\"].map(function(item, index) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: function() {\n                                    return handleFilter(item);\n                                },\n                                className: \"jsx-4b6ffea83666db1b\" + \" \" + \"tag\",\n                                children: item\n                            }, index, false, {\n                                fileName: \"C:\\\\Users\\\\mtouk\\\\OneDrive\\\\Bureau\\\\Mes applications web\\\\ALICE-FORMATION\\\\Alice-Formation\\\\pages\\\\formation.js\",\n                                lineNumber: 45,\n                                columnNumber: 17\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mtouk\\\\OneDrive\\\\Bureau\\\\Mes applications web\\\\ALICE-FORMATION\\\\Alice-Formation\\\\pages\\\\formation.js\",\n                        lineNumber: 43,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-4b6ffea83666db1b\" + \" \" + ((_styles_Formation_module_css__WEBPACK_IMPORTED_MODULE_6___default().formation__wrapper) || \"\"),\n                        children: filterItem === null || filterItem === void 0 ? void 0 : filterItem.map(function(article) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_5__.Article, {\n                                article: article\n                            }, article.slug, false, {\n                                fileName: \"C:\\\\Users\\\\mtouk\\\\OneDrive\\\\Bureau\\\\Mes applications web\\\\ALICE-FORMATION\\\\Alice-Formation\\\\pages\\\\formation.js\",\n                                lineNumber: 56,\n                                columnNumber: 41\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mtouk\\\\OneDrive\\\\Bureau\\\\Mes applications web\\\\ALICE-FORMATION\\\\Alice-Formation\\\\pages\\\\formation.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mtouk\\\\OneDrive\\\\Bureau\\\\Mes applications web\\\\ALICE-FORMATION\\\\Alice-Formation\\\\pages\\\\formation.js\",\n                lineNumber: 42,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_5__.Footer, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mtouk\\\\OneDrive\\\\Bureau\\\\Mes applications web\\\\ALICE-FORMATION\\\\Alice-Formation\\\\pages\\\\formation.js\",\n                lineNumber: 60,\n                columnNumber: 5\n            }, _this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"4b6ffea83666db1b\",\n                children: \".display-flex.jsx-4b6ffea83666db1b{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:1.5rem 0 3.5rem 0;text-align:center}.tag.jsx-4b6ffea83666db1b{margin:.3rem .3rem;padding:.3rem .5rem;background:var(--tag-color);color:var(--white);font-size:14px;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;min-width:115px;cursor:pointer}.tag.jsx-4b6ffea83666db1b:hover{cursor:pointer}\"\n            }, void 0, false, void 0, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mtouk\\\\OneDrive\\\\Bureau\\\\Mes applications web\\\\ALICE-FORMATION\\\\Alice-Formation\\\\pages\\\\formation.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, _this);\n};\n_s(Formation, \"/CBmIaiZPH8FVbq8GBNpEEz7dh4=\");\n_c = Formation;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Formation);\nvar _c;\n$RefreshReg$(_c, \"Formation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0Zvcm1hdGlvbi5tb2R1bGUuY3NzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBjYXRlZ29yaWVzIGZyb20gJy4uL2NvbXBvbmVudHMvY2F0ZWdvcmllcyc7XG5cbmltcG9ydCB7IGNsaWVudCB9IGZyb20gJy4uL2xpYi9jbGllbnQnO1xuaW1wb3J0IHsgQXJ0aWNsZSwgRm9vdGVyLCBIZXJvQmFubmVyLCBOYXZiYXIgfSBmcm9tICcuLi9jb21wb25lbnRzJztcblxuY29uc3QgRm9ybWF0aW9uID0gKHsgYXJ0aWNsZXMsIGJhbm5lckRhdGEgfSkgPT4ge1xuXG4gIGNvbnN0IFthY3RpdmVGaWx0ZXIsIHNldEFjdGl2ZUZpbHRlcl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtmaWx0ZXJJdGVtLCBzZXRGaWx0ZXJJdGVtXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBoYW5kbGVGaWx0ZXIgPSAoaXRlbSkgPT4ge1xuICAgICAgc2V0QWN0aXZlRmlsdGVyKGl0ZW0pO1xuXG4gICAgICBpZihpdGVtID09PSdUb3V0Jykge1xuICAgICAgICBzZXRGaWx0ZXJJdGVtKGFydGljbGVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldEZpbHRlckl0ZW0oYXJ0aWNsZXMuZmlsdGVyKChhcnRpY2xlKSA9PmFydGljbGUudGFncy5pbmNsdWRlcyhpdGVtKSkpXG4gICAgICB9XG4gIH1cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtiYW5uZXJEYXRhPy5tYXAoKGZvcm1hdGlvbikgPT4gKFxuICAgICAgICA8PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+e2Zvcm1hdGlvbi5tZXRhVGl0bGV9PC90aXRsZT5cbiAgICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgIGNvbnRlbnQ9e2Zvcm1hdGlvbi5kZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9e2Zvcm1hdGlvbi50YWdzfSAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDwvPlxuICAgICAgKSl9XG4gICAgXG4gICAgPE5hdmJhciAvPlxuICAgIDxIZXJvQmFubmVyIGhlcm9CYW5uZXI9e2Jhbm5lckRhdGEubGVuZ3RoICYmIGJhbm5lckRhdGFbMF19IC8+XG5cbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Rpc3BsYXktZmxleCc+XG4gICAgICAge2NhdGVnb3JpZXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fSBcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhZ1wiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVGaWx0ZXIoaXRlbSl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2l0ZW19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfSBcbiAgICAgIDwvZGl2PlxuICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1hdGlvbl9fd3JhcHBlcn0+XG4gICAgICAgICAge2ZpbHRlckl0ZW0/Lm1hcCgoYXJ0aWNsZSkgPT4gPEFydGljbGUga2V5PXthcnRpY2xlLnNsdWd9IGFydGljbGU9e2FydGljbGV9IC8+KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICBcbiAgICA8L2Rpdj5cbiAgICA8Rm9vdGVyIC8+XG5cbiAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAuZGlzcGxheS1mbGV4IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgbWFyZ2luOiAxLjVyZW0gMCAzLjVyZW0gMDtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLnRhZyB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMC4zcmVtIDAuM3JlbTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMC4zcmVtIDAuNXJlbTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tdGFnLWNvbG9yKTtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDExNXB4O1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50YWc6aG92ZXIge1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBcblxuXG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHF1ZXJ5ID0gJypbX3R5cGUgPT0gXCJhcnRpY2xlXCJdJztcbiAgY29uc3QgYXJ0aWNsZXMgPSBhd2FpdCBjbGllbnQuZmV0Y2gocXVlcnkpO1xuXG4gIGNvbnN0IGJhbm5lclF1ZXJ5ID0gJypbX3R5cGUgPT0gXCJmb3JtYXRpb25cIl0nO1xuICBjb25zdCBiYW5uZXJEYXRhID0gYXdhaXQgY2xpZW50LmZldGNoKGJhbm5lclF1ZXJ5KTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGFydGljbGVzLCBiYW5uZXJEYXRhIH1cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1hdGlvbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiSGVhZCIsImNhdGVnb3JpZXMiLCJBcnRpY2xlIiwiRm9vdGVyIiwiSGVyb0Jhbm5lciIsIk5hdmJhciIsIkZvcm1hdGlvbiIsImFydGljbGVzIiwiYmFubmVyRGF0YSIsImFjdGl2ZUZpbHRlciIsInNldEFjdGl2ZUZpbHRlciIsImZpbHRlckl0ZW0iLCJzZXRGaWx0ZXJJdGVtIiwiaGFuZGxlRmlsdGVyIiwiaXRlbSIsImZpbHRlciIsImFydGljbGUiLCJ0YWdzIiwiaW5jbHVkZXMiLCJkaXYiLCJtYXAiLCJmb3JtYXRpb24iLCJ0aXRsZSIsIm1ldGFUaXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImRlc2NyaXB0aW9uIiwiaGVyb0Jhbm5lciIsImxlbmd0aCIsImluZGV4Iiwib25DbGljayIsImZvcm1hdGlvbl9fd3JhcHBlciIsInNsdWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/formation.js\n"));

/***/ })

});