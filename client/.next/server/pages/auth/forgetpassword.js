"use strict";
(() => {
var exports = {};
exports.id = 270;
exports.ids = [270];
exports.modules = {

/***/ 6256:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_snackbar_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4233);
/* harmony import */ var _hooks_use_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6471);





const ForgetPassword = ()=>{
    const { toggleSnack  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_snackbar_context__WEBPACK_IMPORTED_MODULE_3__/* .SnackbarContext */ .S);
    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
    const { doRequest , errors  } = (0,_hooks_use_request__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
        url: '/api/users/password/',
        method: 'post',
        body: {
            email
        },
        onSuccess: ()=>{
            toggleSnack(true, 'success', 'パスワード再設定用URL通知メールを送信しました!!');
            next_router__WEBPACK_IMPORTED_MODULE_1___default().push('/auth/sentemail');
        }
    });
    const onSubmit = async (event)=>{
        event.preventDefault();
        await doRequest();
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        onSubmit: onSubmit,
        className: "container mx-auto overflow-hidden max-w-5xl p-4 m-1 bg-white rounded-md shadow-md dark:bg-gray-800",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "text-lg font-semibold text-gray-700 capitalize dark:text-white",
                children: "パスワード再設定"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "text-gray-700 dark:text-white",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: "ご登録しているメールアドレス"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        value: email,
                        onChange: (e)=>setEmail(e.target.value)
                        ,
                        className: "block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-50 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex justify-end mt-6",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "block px-5 py-2 mt-4 font-medium leading-5 text-center text-white capitalize bg-gray-700 rounded-lg lg:mt-0 hover:bg-blue-500 lg:w-autohover:bg-gray-600 focus:outline-none focus:bg-gray-600",
                    children: "送信"
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForgetPassword);


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
var __webpack_exports__ = __webpack_require__.X(0, [74], () => (__webpack_exec__(6256)));
module.exports = __webpack_exports__;

})();