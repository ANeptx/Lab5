"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/todo",{

/***/ "./pages/todo.js":
/*!***********************!*\
  !*** ./pages/todo.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_ARMCTCHT_Documents_Client_Lab5_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_ARMCTCHT_Documents_Client_Lab5_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_ARMCTCHT_Documents_Client_Lab5_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Todo_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Todo.module.css */ \"./styles/Todo.module.css\");\n/* harmony import */ var _styles_Todo_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Todo_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Todo = function(param) {\n    var avatar_url = param.avatar_url, login = param.login;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), tasks = ref[0], setTasks = ref[1];\n    // { id: 1, name: 'Do homework' },\n    // { id: 2, name: 'Read book' }])\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), name1 = ref1[0], setName = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), weight = ref2[0], setWeight = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), idEdit = ref3[0], setIdEdit = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(_asyncToGenerator(C_Users_ARMCTCHT_Documents_Client_Lab5_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var ts;\n        return C_Users_ARMCTCHT_Documents_Client_Lab5_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return getBears();\n                case 2:\n                    ts = _ctx.sent;\n                    console.log(ts);\n                    setTasks(ts);\n                case 5:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    })), []);\n    var renderTasks = function() {\n        var _this2 = _this1;\n        if (tasks && tasks.length) return tasks.map(function(task, index) {\n            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                className: \"relative m-4 border-2 border-dashed p-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"absolute bottom-0 right-0 text-xl mr-2 text-indigo-200 drop-shadow-lg\",\n                        children: index + 1\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ARMCTCHT\\\\Documents\\\\Client\\\\Lab5\\\\frontend\\\\pages\\\\todo.js\",\n                        lineNumber: 28,\n                        columnNumber: 21\n                    }, _this2),\n                    idEdit !== task.index ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"text-3xl text-indigo-800 drop-shadow-lg drop-shadow-lg max-w-xs\",\n                        children: [\n                            task.name,\n                            \" \",\n                            task.weight\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ARMCTCHT\\\\Documents\\\\Client\\\\Lab5\\\\frontend\\\\pages\\\\todo.js\",\n                        lineNumber: 32,\n                        columnNumber: 25\n                    }, _this2) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        className: \"text-3xl text-indigo-800\",\n                        type: \"text\",\n                        name: \"name\",\n                        value: name1,\n                        onChange: function(e) {\n                            return setName(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ARMCTCHT\\\\Documents\\\\Client\\\\Lab5\\\\frontend\\\\pages\\\\todo.js\",\n                        lineNumber: 33,\n                        columnNumber: 26\n                    }, _this2),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                            className: \"rounded-full inline mr-4\",\n                            src: task.photo,\n                            width: \"160\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ARMCTCHT\\\\Documents\\\\Client\\\\Lab5\\\\frontend\\\\pages\\\\todo.js\",\n                            lineNumber: 41,\n                            columnNumber: 26\n                        }, _this2)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ARMCTCHT\\\\Documents\\\\Client\\\\Lab5\\\\frontend\\\\pages\\\\todo.js\",\n                        lineNumber: 41,\n                        columnNumber: 21\n                    }, _this2),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"mt-8 flex justify-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                className: \"mr-4 drop-shadow-lg bg-yellow-300 text-indigo-900 hover:bg-yellow-200 rounded-lg p-4\",\n                                onClick: function() {\n                                    return editTask(task.id);\n                                },\n                                children: \"Edit\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ARMCTCHT\\\\Documents\\\\Client\\\\Lab5\\\\frontend\\\\pages\\\\todo.js\",\n                                lineNumber: 43,\n                                columnNumber: 25\n                            }, _this2),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                className: \"mr-4 drop-shadow-lg bg-red-300 text-indigo-900 hover:bg-red-200 rounded-lg p-4\",\n                                onClick: function() {\n                                    return deleteTask(task.id);\n                                },\n                                children: \"Delete\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ARMCTCHT\\\\Documents\\\\Client\\\\Lab5\\\\frontend\\\\pages\\\\todo.js\",\n                                lineNumber: 48,\n                                columnNumber: 25\n                            }, _this2)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ARMCTCHT\\\\Documents\\\\Client\\\\Lab5\\\\frontend\\\\pages\\\\todo.js\",\n                        lineNumber: 42,\n                        columnNumber: 21\n                    }, _this2)\n                ]\n            }, index, true, {\n                fileName: \"C:\\\\Users\\\\ARMCTCHT\\\\Documents\\\\Client\\\\Lab5\\\\frontend\\\\pages\\\\todo.js\",\n                lineNumber: 27,\n                columnNumber: 17\n            }, _this2);\n        });\n    };\n    var editTask = function(id) {\n        setIdEdit(id);\n        var t = tasks.find(function(task) {\n            return +task.id === +id;\n        });\n        setName(t.name);\n        setWeight(t.weight);\n        if (+idEdit === +id) {\n            var newTasks = tasks.map(function(task, index) {\n                if (+task.id === +id) tasks[index].name = name1;\n                if (+task.id === +id) tasks[index].weight = weight;\n                return task;\n            });\n            setTasks(newTasks);\n            setIdEdit(0);\n        }\n    };\n    var deleteTask = function(id) {\n        console.log('delete id: ', id);\n        var newTasks = tasks.filter(function(task) {\n            return task.id !== +id;\n        });\n        setTasks(newTasks);\n    };\n    var addTask = function(name) {\n        setTasks(_toConsumableArray(tasks).concat([\n            {\n                id: tasks[tasks.length - 1].id + 1,\n                name: name\n            }\n        ]));\n        console.log(tasks);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"h-screen flex flex-col items-center p-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_Todo_module_css__WEBPACK_IMPORTED_MODULE_4___default().topRight),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ARMCTCHT\\\\Documents\\\\Client\\\\Lab5\\\\frontend\\\\pages\\\\todo.js\",\n                        lineNumber: 89,\n                        columnNumber: 32\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ARMCTCHT\\\\Documents\\\\Client\\\\Lab5\\\\frontend\\\\pages\\\\todo.js\",\n                    lineNumber: 89,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ARMCTCHT\\\\Documents\\\\Client\\\\Lab5\\\\frontend\\\\pages\\\\todo.js\",\n                lineNumber: 88,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                    className: \"m-4 text-indigo-800 text-4xl drop-shadow-lg\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                            className: \"rounded-full inline mr-4\",\n                            src: avatar_url,\n                            width: \"80\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ARMCTCHT\\\\Documents\\\\Client\\\\Lab5\\\\frontend\\\\pages\\\\todo.js\",\n                            lineNumber: 94,\n                            columnNumber: 21\n                        }, _this),\n                        \"Todo  for \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                            children: [\n                                login,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ARMCTCHT\\\\Documents\\\\Client\\\\Lab5\\\\frontend\\\\pages\\\\todo.js\",\n                            lineNumber: 95,\n                            columnNumber: 31\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ARMCTCHT\\\\Documents\\\\Client\\\\Lab5\\\\frontend\\\\pages\\\\todo.js\",\n                    lineNumber: 92,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ARMCTCHT\\\\Documents\\\\Client\\\\Lab5\\\\frontend\\\\pages\\\\todo.js\",\n                lineNumber: 91,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex items-center m-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        className: \"rounded-lg text-green-800 text-4xl drop-shadow-lg pl-2 ml-2 mr-4\",\n                        type: \"text\",\n                        name: \"addTask\",\n                        onChange: function(e) {\n                            return setName(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ARMCTCHT\\\\Documents\\\\Client\\\\Lab5\\\\frontend\\\\pages\\\\todo.js\",\n                        lineNumber: 100,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        className: \"bg-green-600 text-indigo-200 hover:bg-green-500 p-2 rounded-lg\",\n                        onClick: function() {\n                            return addTask(name1);\n                        },\n                        children: \"Add\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ARMCTCHT\\\\Documents\\\\Client\\\\Lab5\\\\frontend\\\\pages\\\\todo.js\",\n                        lineNumber: 106,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ARMCTCHT\\\\Documents\\\\Client\\\\Lab5\\\\frontend\\\\pages\\\\todo.js\",\n                lineNumber: 99,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                className: \"flex flex-wrap\",\n                children: renderTasks()\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ARMCTCHT\\\\Documents\\\\Client\\\\Lab5\\\\frontend\\\\pages\\\\todo.js\",\n                lineNumber: 110,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ARMCTCHT\\\\Documents\\\\Client\\\\Lab5\\\\frontend\\\\pages\\\\todo.js\",\n        lineNumber: 87,\n        columnNumber: 9\n    }, _this));\n};\n_s(Todo, \"PXZhUla6IbBZ1WaKrEz0I3Sjs10=\");\n_c = Todo;\nvar getBears = function() {\n    var _ref = _asyncToGenerator(C_Users_ARMCTCHT_Documents_Client_Lab5_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var res, json;\n        return C_Users_ARMCTCHT_Documents_Client_Lab5_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch('http://localhost:8000/');\n                case 2:\n                    res = _ctx.sent;\n                    _ctx.next = 5;\n                    return res.json();\n                case 5:\n                    json = _ctx.sent;\n                    console.log(json);\n                    return _ctx.abrupt(\"return\", json);\n                case 8:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function getBears() {\n        return _ref.apply(this, arguments);\n    };\n}();\nTodo.getInitialProps = (function() {\n    var _ref = _asyncToGenerator(C_Users_ARMCTCHT_Documents_Client_Lab5_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(ctx) {\n        var res, json;\n        return C_Users_ARMCTCHT_Documents_Client_Lab5_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch('https://api.github.com/users/Aneptx');\n                case 2:\n                    res = _ctx.sent;\n                    _ctx.next = 5;\n                    return res.json();\n                case 5:\n                    json = _ctx.sent;\n                    return _ctx.abrupt(\"return\", {\n                        login: json.login,\n                        avatar_url: json.avatar_url\n                    });\n                case 7:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function(ctx) {\n        return _ref.apply(this, arguments);\n    };\n})();\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todo);\nvar _c;\n$RefreshReg$(_c, \"Todo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0MsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7O2dHQUUzQ1EsQ0FBTTt3QkFDSFosU0FBUyxFQUFDLENBQWdFO3dCQUMxRWEsT0FBTyxFQUFFLFFBQVE7NEJBQUZRLE1BQU0sQ0FBTkEsT0FBTyxDQUFDckMsS0FBSTs7a0NBQUcsQ0FBRzs7Ozs7Ozs7Ozs7O3dGQUV4QzJDLENBQUU7Z0JBQUMzQixTQUFTLEVBQUMsQ0FBZ0I7MEJBQ3pCTixXQUFXOzs7Ozs7Ozs7Ozs7QUFJNUIsQ0FBQztHQTlHS2YsSUFBSTtLQUFKQSxJQUFJO0FBZ0hWLEdBQUssQ0FBQ1ksUUFBUTs0TEFBRyxRQUFRLFdBQUksQ0FBQztZQUNwQnFDLEdBQUcsRUFDSEMsSUFBSTs7Ozs7MkJBRFFDLEtBQUssQ0FBQyxDQUF3Qjs7b0JBQTFDRixHQUFHOzsyQkFDVUEsR0FBRyxDQUFDQyxJQUFJOztvQkFBckJBLElBQUk7b0JBQ1ZyQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ29DLElBQUk7aURBQ1RBLElBQUk7Ozs7OztJQUNmLENBQUM7b0JBTEt0QyxRQUFROzs7O0FBT2RaLElBQUksQ0FBQ29ELGVBQWU7NExBQUcsUUFBUSxTQUFEQyxHQUFHLEVBQUssQ0FBQztZQUM3QkosR0FBRyxFQUNIQyxJQUFJOzs7OzsyQkFEUUMsS0FBSyxDQUFDLENBQXFDOztvQkFBdkRGLEdBQUc7OzJCQUNVQSxHQUFHLENBQUNDLElBQUk7O29CQUFyQkEsSUFBSTtpREFDSCxDQUFDO3dCQUFDaEQsS0FBSyxFQUFFZ0QsSUFBSSxDQUFDaEQsS0FBSzt3QkFBRUQsVUFBVSxFQUFFaUQsSUFBSSxDQUFDakQsVUFBVTtvQkFBQyxDQUFDOzs7Ozs7SUFDN0QsQ0FBQztvQkFKNkJvRCxHQUFHOzs7O0FBTWpDLCtEQUFlckQsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90b2RvLmpzPzViMjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL1RvZG8ubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IFRvZG8gPSAoeyBhdmF0YXJfdXJsLCBsb2dpbiB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3Rhc2tzLCBzZXRUYXNrc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIC8vIHsgaWQ6IDEsIG5hbWU6ICdEbyBob21ld29yaycgfSxcclxuICAgIC8vIHsgaWQ6IDIsIG5hbWU6ICdSZWFkIGJvb2snIH1dKVxyXG5cclxuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICAgIGNvbnN0IFt3ZWlnaHQsIHNldFdlaWdodF0gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgICBjb25zdCBbaWRFZGl0LCBzZXRJZEVkaXRdID0gdXNlU3RhdGUoMClcclxuXHJcbiAgICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGxldCB0cyA9IGF3YWl0IGdldEJlYXJzKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codHMpXHJcbiAgICAgICAgc2V0VGFza3ModHMpXHJcbiAgICB9LCBbXSlcclxuXHJcblxyXG4gICAgY29uc3QgcmVuZGVyVGFza3MgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRhc2tzICYmIHRhc2tzLmxlbmd0aClcclxuICAgICAgICAgICAgcmV0dXJuIHRhc2tzLm1hcCgodGFzaywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtLTQgYm9yZGVyLTIgYm9yZGVyLWRhc2hlZCBwLThcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0wIHJpZ2h0LTAgdGV4dC14bCBtci0yIHRleHQtaW5kaWdvLTIwMCBkcm9wLXNoYWRvdy1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aW5kZXggKyAxfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsoaWRFZGl0ICE9PSB0YXNrLmluZGV4KSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0zeGwgdGV4dC1pbmRpZ28tODAwIGRyb3Atc2hhZG93LWxnIGRyb3Atc2hhZG93LWxnIG1heC13LXhzXCI+e3Rhc2submFtZX0ge3Rhc2sud2VpZ2h0fTwvZGl2PiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICg8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtM3hsIHRleHQtaW5kaWdvLTgwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbWcgY2xhc3NOYW1lPSBcInJvdW5kZWQtZnVsbCBpbmxpbmUgbXItNFwiIHNyYyA9IHt0YXNrLnBob3RvfSB3aWR0aD1cIjE2MFwiLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTggZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci00IGRyb3Atc2hhZG93LWxnIGJnLXllbGxvdy0zMDAgdGV4dC1pbmRpZ28tOTAwIGhvdmVyOmJnLXllbGxvdy0yMDAgcm91bmRlZC1sZyBwLTRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZWRpdFRhc2sodGFzay5pZCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItNCBkcm9wLXNoYWRvdy1sZyBiZy1yZWQtMzAwIHRleHQtaW5kaWdvLTkwMCBob3ZlcjpiZy1yZWQtMjAwIHJvdW5kZWQtbGcgcC00XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZVRhc2sodGFzay5pZCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9saT4pKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVkaXRUYXNrID0gKGlkKSA9PiB7XHJcbiAgICAgICAgc2V0SWRFZGl0KGlkKVxyXG4gICAgICAgIGxldCB0ID0gdGFza3MuZmluZCgodGFzaykgPT4gK3Rhc2suaWQgPT09ICtpZClcclxuICAgICAgICBzZXROYW1lKHQubmFtZSlcclxuICAgICAgICBzZXRXZWlnaHQodC53ZWlnaHQpXHJcbiAgICAgICAgaWYgKCtpZEVkaXQgPT09ICtpZCkgeyAvL1ByZXNzIEVkaXQgYWdhaW5cclxuICAgICAgICAgICAgbGV0IG5ld1Rhc2tzID0gdGFza3MubWFwKCh0YXNrLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCt0YXNrLmlkID09PSAraWQpXHJcbiAgICAgICAgICAgICAgICAgICAgdGFza3NbaW5kZXhdLm5hbWUgPSBuYW1lXHJcbiAgICAgICAgICAgICAgICBpZiAoK3Rhc2suaWQgPT09ICtpZClcclxuICAgICAgICAgICAgICAgICAgICB0YXNrc1tpbmRleF0ud2VpZ2h0ID0gd2VpZ2h0XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFza1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBzZXRUYXNrcyhuZXdUYXNrcylcclxuICAgICAgICAgICAgc2V0SWRFZGl0KDApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSAoaWQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZGVsZXRlIGlkOiAnLCBpZClcclxuICAgICAgICBsZXQgbmV3VGFza3MgPSB0YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suaWQgIT09ICtpZClcclxuICAgICAgICBzZXRUYXNrcyhuZXdUYXNrcylcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZGRUYXNrID0gKG5hbWUpID0+IHtcclxuICAgICAgICBzZXRUYXNrcyhbLi4udGFza3MsIHsgaWQ6IHRhc2tzW3Rhc2tzLmxlbmd0aCAtIDFdLmlkICsgMSwgbmFtZSB9XSlcclxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrcylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgcC04XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9wUmlnaHR9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48YT5Ib21lPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtLTQgdGV4dC1pbmRpZ28tODAwIHRleHQtNHhsIGRyb3Atc2hhZG93LWxnXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGlubGluZSBtci00XCIgc3JjPXthdmF0YXJfdXJsfSB3aWR0aD1cIjgwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICBUb2RvICBmb3IgPHNwYW4+e2xvZ2lufSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbS00XCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIHRleHQtZ3JlZW4tODAwIHRleHQtNHhsIGRyb3Atc2hhZG93LWxnIHBsLTIgbWwtMiBtci00XCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFkZFRhc2tcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gKHNldE5hbWUoZS50YXJnZXQudmFsdWUpKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JlZW4tNjAwIHRleHQtaW5kaWdvLTIwMCBob3ZlcjpiZy1ncmVlbi01MDAgcC0yIHJvdW5kZWQtbGdcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFkZFRhc2sobmFtZSl9PkFkZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICB7cmVuZGVyVGFza3MoKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgZ2V0QmVhcnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwLycpXHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgY29uc29sZS5sb2coanNvbilcclxuICAgIHJldHVybiBqc29uO1xyXG59XHJcblxyXG5Ub2RvLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL0FuZXB0eCcpXHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgcmV0dXJuIHsgbG9naW46IGpzb24ubG9naW4sIGF2YXRhcl91cmw6IGpzb24uYXZhdGFyX3VybCB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9cclxuXHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJzdHlsZXMiLCJUb2RvIiwiYXZhdGFyX3VybCIsImxvZ2luIiwidGFza3MiLCJzZXRUYXNrcyIsIm5hbWUiLCJzZXROYW1lIiwid2VpZ2h0Iiwic2V0V2VpZ2h0IiwiaWRFZGl0Iiwic2V0SWRFZGl0IiwidHMiLCJnZXRCZWFycyIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXJUYXNrcyIsImxlbmd0aCIsIm1hcCIsInRhc2siLCJpbmRleCIsImxpIiwiY2xhc3NOYW1lIiwiZGl2IiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJpbWciLCJzcmMiLCJwaG90byIsIndpZHRoIiwiYnV0dG9uIiwib25DbGljayIsImVkaXRUYXNrIiwiaWQiLCJkZWxldGVUYXNrIiwidCIsImZpbmQiLCJuZXdUYXNrcyIsImZpbHRlciIsImFkZFRhc2siLCJ0b3BSaWdodCIsImhyZWYiLCJhIiwiaDEiLCJzcGFuIiwidWwiLCJyZXMiLCJqc29uIiwiZmV0Y2giLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/todo.js\n");

/***/ })

});