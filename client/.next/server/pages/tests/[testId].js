"use strict";
(() => {
var exports = {};
exports.id = 618;
exports.ids = [618];
exports.modules = {

/***/ 4233:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SnackbarContext),
/* harmony export */   "i": () => (/* binding */ SnackbarContextProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const SnackbarContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const SnackbarContextProvider = (props)=>{
    const { 0: snackState , 1: setSnackState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        isOpen: false,
        type: '',
        message: ''
    });
    const toggleSnack = (isOpen, type, message)=>{
        setSnackState({
            isOpen: isOpen,
            type: type,
            message: message
        });
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SnackbarContext.Provider, {
        value: {
            snackState,
            toggleSnack
        },
        children: props.children
    }));
};


/***/ }),

/***/ 922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _testId_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./hooks/result-request.js




const ResultRequest = ({ url , method , body , onSuccess , currentUser  })=>{
    const { 0: errors , 1: setErrors  } = (0,external_react_.useState)(null);
    const { 0: resultForm , 1: setResultForm  } = (0,external_react_.useState)(null);
    const doRequest = async ()=>{
        try {
            setErrors(null);
            const response = await (external_axios_default())[method](url, body);
            if (onSuccess) {
                if (response.data.status === 'success') {
                    setResultForm(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex justify-end",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/testlist",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "justify-end px-5 py-2 mt-4 font-medium border-2 border-blue-600 leading-5 text-center capitalize bg-white text-blue-500 rounded-lg lg:mt-0 hover:bg-blue-500 hover:text-white lg:w-autohover:bg-blue-500 dark:bg-blue-600 dark:text-white",
                                    children: "テスト一覧へ"
                                })
                            }),
                            currentUser && /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/mypage",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "justify-end px-5 py-2 ml-2 mt-4 font-medium border-2 border-blue-600 leading-5 text-center capitalize bg-white text-blue-500 rounded-lg lg:mt-0 hover:bg-blue-500 hover:text-white lg:w-autohover:bg-blue-500 dark:bg-blue-600 dark:text-white",
                                    children: "成績を確認"
                                })
                            })
                        ]
                    }));
                }
                onSuccess(response.data);
            }
            return response.data;
        } catch (err1) {
            console.log(err1);
            setErrors(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex w-full max-w-3xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex items-center justify-center w-12 bg-red-500",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            className: "w-6 h-6 text-white fill-current",
                            viewBox: "0 0 40 40",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "px-4 py-2 -mx-3",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "mx-3",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "font-semibold text-red-500 dark:text-red-400",
                                    children: "Error"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    className: "text-sm text-gray-600 dark:text-gray-200",
                                    children: err1.response.data.errors.map((err)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: err.message
                                        }, err.message)
                                    )
                                })
                            ]
                        })
                    })
                ]
            }));
        }
    };
    return {
        doRequest,
        resultForm,
        errors
    };
};
/* harmony default export */ const result_request = (ResultRequest);

// EXTERNAL MODULE: external "next/error"
var error_ = __webpack_require__(5566);
var error_default = /*#__PURE__*/__webpack_require__.n(error_);
// EXTERNAL MODULE: ./src/config/keys.ts + 2 modules
var keys = __webpack_require__(2303);
// EXTERNAL MODULE: ./context/snackbar-context.js
var snackbar_context = __webpack_require__(4233);
;// CONCATENATED MODULE: ./pages/tests/[testId].tsx







const TestShow = ({ test , errorCode , currentUser  })=>{
    if (errorCode) {
        return(/*#__PURE__*/ jsx_runtime_.jsx((error_default()), {
            statusCode: 404
        }));
    }
    const { toggleSnack  } = (0,external_react_.useContext)(snackbar_context/* SnackbarContext */.S);
    const select1Input = /*#__PURE__*/ external_react_default().createRef();
    const select2Input = /*#__PURE__*/ external_react_default().createRef();
    const select3Input = /*#__PURE__*/ external_react_default().createRef();
    const select4Input = /*#__PURE__*/ external_react_default().createRef();
    const { 0: answeredList , 1: setAnsweredList  } = (0,external_react_.useState)([]);
    const { 0: selectedOption , 1: setSelectedOption  } = (0,external_react_.useState)('');
    const { 0: isCorrect , 1: setIsCorrect  } = (0,external_react_.useState)(false);
    const { doRequest , resultForm , errors  } = result_request({
        url: '/api/users/questions/result/',
        method: 'put',
        body: {
            testId: test.id,
            answered: Number(selectedOption)
        },
        onSuccess: (data)=>{
            toggleSnack(data.isOpen, data.status, data.message);
            if (data.status === 'success') {
                setIsCorrect(true);
            }
        },
        currentUser
    });
    (0,external_react_.useEffect)(()=>{
        disabledCheck(select1Input);
        disabledCheck(select2Input);
        disabledCheck(select3Input);
        disabledCheck(select4Input);
    });
    const onSubmit = async (event)=>{
        event.preventDefault();
        pushAnswere();
        await doRequest();
    };
    const onValueChange = (event)=>{
        setSelectedOption(event.target.value);
    };
    const pushAnswere = ()=>{
        const newAnsweredList = [
            ...answeredList,
            Number(selectedOption)
        ];
        setAnsweredList(newAnsweredList);
    };
    const disabledCheck = (ref)=>{
        if (!isCorrect) {
            var ref1;
            if (answeredList.includes(Number((ref1 = ref.current) === null || ref1 === void 0 ? void 0 : ref1.value))) {
                var ref2;
                if (Number((ref2 = ref.current) === null || ref2 === void 0 ? void 0 : ref2.value) === test.correct) {
                    ref.current.disabled = false;
                } else {
                    ref.current.disabled = true;
                }
            } else {
                ref.current.disabled = false;
            }
        } else {
            ref.current.disabled = true;
        }
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("form", {
        onSubmit: onSubmit,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "flex flex-col flex-grow box-border",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container shadow-md mx-auto overflow-y-auto p-4 m-2 dark:bg-gray-700",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("header", {
                        className: "border-b-2",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                            className: "font-bold lg:text-xl dark:text-white",
                            children: [
                                "Category: ",
                                test.category
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: "py-6 ",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    className: "dark:text-white",
                                    children: "【問題】"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "dark:text-white",
                                children: test.statement
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mt-6 border-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "m-4 dark:text-white",
                                        children: "【選択肢】"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "mx-6 my-4 border-2 ",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "border-b-2 ",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                    className: "inline-flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "radio",
                                                            ref: select1Input,
                                                            className: "form-radio h-6 w-6 mt-2 ml-2",
                                                            name: "radio",
                                                            value: "1",
                                                            onChange: onValueChange,
                                                            checked: selectedOption === '1'
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            className: "ml-2 mt-1 lg:text-lg dark:text-white",
                                                            children: [
                                                                "1. ",
                                                                test.selection[0]
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "border-b-2 ",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                    className: "inline-flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "radio",
                                                            ref: select2Input,
                                                            className: "form-radio h-6 w-6 mt-2 ml-2",
                                                            name: "radio",
                                                            onChange: onValueChange,
                                                            checked: selectedOption === '2',
                                                            value: "2"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            className: "ml-2 mt-1 lg:text-lg dark:text-white",
                                                            children: [
                                                                "2. ",
                                                                test.selection[1]
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "border-b-2 ",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                    className: "inline-flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "radio",
                                                            ref: select3Input,
                                                            className: "form-radio h-6 w-6 mt-2 ml-2",
                                                            name: "radio",
                                                            onChange: onValueChange,
                                                            checked: selectedOption === '3',
                                                            value: "3"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            className: "ml-2 mt-1 lg:text-lg dark:text-white",
                                                            children: [
                                                                "3. ",
                                                                test.selection[2]
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "border-b-2 ",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                    className: "inline-flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "radio",
                                                            ref: select4Input,
                                                            className: "form-radio h-6 w-6 mt-2 ml-2",
                                                            name: "radio",
                                                            onChange: onValueChange,
                                                            checked: selectedOption === '4',
                                                            value: "4"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            className: "ml-2 mt-1 lg:text-lg dark:text-white",
                                                            children: [
                                                                "4. ",
                                                                test.selection[3]
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex",
                        children: [
                            !isCorrect && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "justify-start block px-5 py-2 mt-4 font-medium border-2 border-blue-600 leading-5 text-center capitalize bg-white text-blue-500 rounded-lg lg:mt-0 hover:bg-blue-500 hover:text-white lg:w-autohover:bg-blue-500 dark:bg-blue-600 dark:text-white",
                                children: "結果を確認"
                            }),
                            resultForm
                        ]
                    })
                ]
            })
        })
    }));
};
const getServerSideProps = async (ctx)=>{
    const { testId  } = ctx.query;
    const headers = ctx.req.headers;
    try {
        const { data  } = await external_axios_default().get(`${keys/* domain.kubernetes */.n.kubernetes}/api/questions/${testId}`, {
            headers: headers
        });
        return {
            props: {
                test: data,
                errorCode: null
            }
        };
    } catch (err) {
        const errorCode = 404;
        return {
            props: {
                test: null,
                errorCode: errorCode
            }
        };
    }
};
/* harmony default export */ const _testId_ = (TestShow);


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

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 5566:
/***/ ((module) => {

module.exports = require("next/error");

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
var __webpack_exports__ = __webpack_require__.X(0, [190,664], () => (__webpack_exec__(922)));
module.exports = __webpack_exports__;

})();