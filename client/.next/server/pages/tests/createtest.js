"use strict";
(() => {
var exports = {};
exports.id = 142;
exports.ids = [142];
exports.modules = {

/***/ 8904:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_testSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1083);
/* harmony import */ var _hooks_use_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6471);
/* harmony import */ var _context_snackbar_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4233);






const CreateTest = ()=>{
    const { toggleSnack  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_snackbar_context__WEBPACK_IMPORTED_MODULE_5__/* .SnackbarContext */ .S);
    const { 0: category , 1: setCategory  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('git');
    const { 0: statement , 1: setStatement  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: select1 , 1: setSelect1  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: select2 , 1: setSelect2  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: select3 , 1: setSelect3  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: select4 , 1: setSelect4  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: correct , 1: setCorrect  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const handleonChangeEventofStatement = (value)=>setStatement(value)
    ;
    const handleonChangeEventofSelect1 = (value)=>setSelect1(value)
    ;
    const handleonChangeEventofSelect2 = (value)=>setSelect2(value)
    ;
    const handleonChangeEventofSelect3 = (value)=>setSelect3(value)
    ;
    const handleonChangeEventofSelect4 = (value)=>setSelect4(value)
    ;
    const handleonChangeEventofCorrect = (value)=>setCorrect(value)
    ;
    const { doRequest , errors  } = (0,_hooks_use_request__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
        url: '/api/questions',
        method: 'post',
        body: {
            category,
            statement,
            select1,
            select2,
            select3,
            select4,
            correct
        },
        onSuccess: ()=>{
            toggleSnack(true, 'success', 'テストを作成しました。');
            next_router__WEBPACK_IMPORTED_MODULE_2___default().push('/');
        }
    });
    const onSubmit = async (event)=>{
        event.preventDefault();
        await doRequest();
    };
    const question = {
        statement: statement,
        select1: select1,
        select2: select2,
        select3: select3,
        select4: select4,
        correct: correct,
        handleonChangeEventofStatement: handleonChangeEventofStatement,
        handleonChangeEventofSelect1: handleonChangeEventofSelect1,
        handleonChangeEventofSelect2: handleonChangeEventofSelect2,
        handleonChangeEventofSelect3: handleonChangeEventofSelect3,
        handleonChangeEventofSelect4: handleonChangeEventofSelect4,
        handleonChangeEventofCorrect: handleonChangeEventofCorrect
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            className: "w-full max-w-7xl shadow-md dark:bg-gray-700 ",
            onSubmit: onSubmit,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex flex-wrap mx-4 mb-20 mt-8",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full md:w-1/4 px-3 mt-2 mb-6 md:mb-0",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "block uppercase tracking-wide text-gray-700 text-xs lg:text-lg font-bold mb-2 uppercase dark:text-white",
                                children: "Catogory"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                        className: "block appearance-none shadow w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
                                        value: category,
                                        onChange: (e)=>{
                                            setCategory(e.target.value);
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                children: "git"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                children: "docker"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                children: "kubernetes"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            className: "fill-current h-4 w-4",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 20 20",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_testSection__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    test: question
                }),
                errors,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex justify-end mx-4 my-4 mb-2",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "block px-5 py-2 mt-4 mb-2 font-medium leading-5 text-center capitalize bg-blue-600 text-white rounded-lg lg:mt-0 hover:bg-blue-500 hover:text-white lg:w-autohover:bg-gray-600 focus:outline-none focus:bg-gray-600",
                        children: "テスト作成"
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateTest);


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [74,83], () => (__webpack_exec__(8904)));
module.exports = __webpack_exports__;

})();