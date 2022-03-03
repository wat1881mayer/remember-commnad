"use strict";
(() => {
var exports = {};
exports.id = 809;
exports.ids = [809];
exports.modules = {

/***/ 7113:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_use_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6471);
/* harmony import */ var _context_snackbar_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4233);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5566);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_config_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2303);










const PasswordReset = ({ token , valid , errorCode  })=>{
    if (errorCode) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_error__WEBPACK_IMPORTED_MODULE_6___default()), {
            statusCode: 404
        }));
    }
    if (!valid) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_error__WEBPACK_IMPORTED_MODULE_6___default()), {
            statusCode: 404
        }));
    }
    const { toggleSnack  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_snackbar_context__WEBPACK_IMPORTED_MODULE_5__/* .SnackbarContext */ .S);
    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: passwordConfirm , 1: setPasswordConfirm  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { doRequest , errors  } = (0,_hooks_use_request__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
        url: `/api/users/reset/${token}`,
        method: 'post',
        body: {
            password
        },
        onSuccess: ()=>{
            toggleSnack(true, 'success', 'パスワードを再設定しました!!');
            next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/');
        }
    });
    const onSubmit = async (event)=>{
        event.preventDefault();
        if (password === passwordConfirm) {
            await doRequest();
        } else {
            toggleSnack(true, 'error', 'パスワードが確認用のものと一致しません。');
        }
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        className: "container mx-auto overflow-hidden max-w-5xl p-4 m-1 bg-white rounded-md shadow-md dark:bg-gray-800",
        onSubmit: onSubmit,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "text-lg font-semibold text-gray-700 capitalize dark:text-white",
                children: "パスワード再設定画面"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "text-gray-700 dark:text-white",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: "パスワード"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        value: password,
                        type: "password",
                        onChange: (e)=>setPassword(e.target.value)
                        ,
                        className: "block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-50 dark:text-black dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "text-gray-700 dark:text-white",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: "パスワード再確認"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        value: passwordConfirm,
                        type: "password",
                        onChange: (e)=>setPasswordConfirm(e.target.value)
                        ,
                        className: "block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-50 dark:text-black dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    })
                ]
            }),
            errors,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex justify-end mt-6",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "block px-5 py-2 mt-4 font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg lg:mt-0 hover:bg-blue-500 lg:w-autohover:bg-gray-600 focus:outline-none focus:bg-gray-600",
                    children: "パスワード再設定"
                })
            })
        ]
    }));
};
const getServerSideProps = async (ctx)=>{
    const resetpassword = ctx.query.resetpassword;
    const headers = ctx.req.headers;
    try {
        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${_src_config_keys__WEBPACK_IMPORTED_MODULE_7__/* .domain.kubernetes */ .n.kubernetes}/api/users/reset/${resetpassword}`, {
            headers: headers
        });
        console.log(data);
        return {
            props: {
                token: resetpassword,
                valid: data.valid,
                errorCode: null
            }
        };
    } catch (err) {
        const errorCode = 404;
        return {
            props: {
                token: resetpassword,
                valid: null,
                errorCode: errorCode
            }
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PasswordReset);


/***/ }),

/***/ 2303:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "n": () => (/* binding */ domain)
});

;// CONCATENATED MODULE: ./src/config/prod.ts
const prodDomain = {
    host: 'http://www.rememeber-cli.com',
    kubernetes: 'http://www.rememeber-cli.com'
};

;// CONCATENATED MODULE: ./src/config/dev.ts
const devDomain = {
    host: 'http://ticketing.dev',
    kubernetes: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local'
};

;// CONCATENATED MODULE: ./src/config/keys.ts


const domain =  true ? prodDomain : 0;


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 5566:
/***/ ((module) => {

module.exports = require("next/error");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [74], () => (__webpack_exec__(7113)));
module.exports = __webpack_exports__;

})();