"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
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

/***/ 4569:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./src/config/keys.ts + 2 modules
var keys = __webpack_require__(2303);
;// CONCATENATED MODULE: ./api/build-client.ts


const buildClient = ({ req  })=>{
    if (true) {
        return external_axios_default().create({
            baseURL: keys/* domain.kubernetes */.n.kubernetes,
            headers: req.headers
        });
    } else {}
};
/* harmony default export */ const build_client = (buildClient);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/header.tsx



const Header = ({ currentUser  })=>{
    const links = [
        currentUser && {
            label: 'Create Test',
            href: '/tests/createtest',
            style: 'mx-8 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500'
        },
        currentUser && {
            label: 'My Page',
            href: '/mypage',
            style: 'mx-8 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500'
        }, 
    ].filter((linkConfig)=>linkConfig
    ).map(({ label , href , style  }, id)=>{
        return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: href,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: style,
                    children: label
                })
            }, id)
        }, href));
    });
    const authLinks = [
        !currentUser && {
            label: 'Sign In',
            href: '/auth/signin',
            style: 'block px-5 py-2 mt-4 font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg lg:mt-0 hover:bg-blue-500 lg:w-auto'
        },
        currentUser && {
            label: 'Sign Out',
            href: '/auth/signout',
            style: 'block px-5 py-2 mt-4 font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg lg:mt-0 hover:bg-blue-500 lg:w-auto'
        }, 
    ].filter((linkConfig)=>linkConfig
    ).map(({ label , href , style  }, id)=>{
        return(/*#__PURE__*/ jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: href,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: style,
                    children: label
                })
            }, id)
        }, href));
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "bg-gray-100 dark:bg-gray-800 p-6 shadow lg:flex lg:w-full lg:justify-between lg:items-center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "text-lg font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300",
                                href: "",
                                children: "Remember Commnad"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex lg:hidden",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "button",
                            className: "text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600",
                            "aria-label": "toggle menu",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                viewBox: "0 0 24 24",
                                className: "w-6 h-6 fill-current",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    fillRule: "evenodd",
                                    d: "M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                })
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col mt-4 space-y-2 lg:mt-0 lg:flex-row lg:-px-8 lg:space-y-0",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/testlist",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "mx-8 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500",
                            children: "Tests"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/cheatsheet",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "mx-8 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500",
                            href: "#",
                            children: "Cheat Sheet"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/about",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "mx-8 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500",
                            href: "#",
                            children: "About"
                        })
                    }),
                    links
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                children: authLinks
            })
        ]
    }));
};
/* harmony default export */ const header = (Header);

;// CONCATENATED MODULE: ./components/footer.tsx


const Footer = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "lg:flex lg:w-full flex flex-col items-center justify-between px-6 py-4 bg-gray-100 dark:bg-gray-800 sm:flex-row",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "#",
                className: "text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300",
                children: "Remember Commnad"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "py-2 text-gray-800 dark:text-white sm:py-0",
                children: "@remember command All rights reserved"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex -mx-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://twitter.com/@LearnerWat",
                        className: "mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300",
                        "aria-label": "Twitter",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                            className: "w-5 h-5 fill-current",
                            fill: "#000000",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 50 50",
                            width: "50px",
                            height: "50px",
                            children: [
                                ' ',
                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M36.237,20.524 c0.01,0.236,0.016,0.476,0.016,0.717C36.253,28.559,30.68,37,20.491,37c-3.128,0-6.041-0.917-8.491-2.489 c0.433,0.052,0.872,0.077,1.321,0.077c2.596,0,4.985-0.884,6.879-2.37c-2.424-0.044-4.468-1.649-5.175-3.847 c0.339,0.065,0.686,0.1,1.044,0.1c0.505,0,0.995-0.067,1.458-0.195c-2.532-0.511-4.441-2.747-4.441-5.432c0-0.024,0-0.047,0-0.07 c0.747,0.415,1.6,0.665,2.509,0.694c-1.488-0.995-2.464-2.689-2.464-4.611c0-1.015,0.272-1.966,0.749-2.786 c2.733,3.351,6.815,5.556,11.418,5.788c-0.095-0.406-0.145-0.828-0.145-1.262c0-3.059,2.48-5.539,5.54-5.539 c1.593,0,3.032,0.672,4.042,1.749c1.261-0.248,2.448-0.709,3.518-1.343c-0.413,1.292-1.292,2.378-2.437,3.064 c1.122-0.136,2.188-0.432,3.183-0.873C38.257,18.766,37.318,19.743,36.237,20.524z"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://github.com/wat1881mayer",
                        className: "mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300",
                        "aria-label": "Github",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            className: "w-5 h-5 fill-current",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"
                            })
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const footer = (Footer);

// EXTERNAL MODULE: ./context/snackbar-context.js
var snackbar_context = __webpack_require__(4233);
;// CONCATENATED MODULE: external "@mui/material/Stack"
const Stack_namespaceObject = require("@mui/material/Stack");
var Stack_default = /*#__PURE__*/__webpack_require__.n(Stack_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Snackbar"
const Snackbar_namespaceObject = require("@mui/material/Snackbar");
var Snackbar_default = /*#__PURE__*/__webpack_require__.n(Snackbar_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Alert"
const Alert_namespaceObject = require("@mui/material/Alert");
var Alert_default = /*#__PURE__*/__webpack_require__.n(Alert_namespaceObject);
;// CONCATENATED MODULE: ./components/snakbar.js






const Alert = /*#__PURE__*/ external_react_default().forwardRef(function Alert(props, ref) {
    return(/*#__PURE__*/ jsx_runtime_.jsx((Alert_default()), {
        elevation: 6,
        ref: ref,
        variant: "filled",
        ...props
    }));
});
function CustomizedSnackbars() {
    const { snackState , toggleSnack  } = (0,external_react_.useContext)(snackbar_context/* SnackbarContext */.S);
    const handleClose = (event, reason)=>{
        if (reason === 'clickaway') {
            return;
        }
        toggleSnack(false, snackState.type, '');
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx((Stack_default()), {
        spacing: 2,
        sx: {
            width: '100%'
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx((Snackbar_default()), {
            anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'left'
            },
            open: snackState.isOpen,
            autoHideDuration: 4000,
            onClose: handleClose,
            children: /*#__PURE__*/ jsx_runtime_.jsx(Alert, {
                onClose: handleClose,
                severity: snackState.type,
                sx: {
                    width: '100%'
                },
                children: snackState.message
            })
        })
    }));
};

;// CONCATENATED MODULE: ./pages/_app.tsx







const AppComponent = ({ Component , pageProps , currentUser  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "flex flex-col min-h-screen",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(header, {
                currentUser: currentUser
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mb-auto",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(snackbar_context/* SnackbarContextProvider */.i, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            currentUser: currentUser,
                            ...pageProps
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(CustomizedSnackbars, {
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer, {
            })
        ]
    }));
};
AppComponent.getInitialProps = async (appContext)=>{
    const client = build_client(appContext.ctx);
    const { data  } = await client.get('/api/users/currentuser');
    let pageProps = {
    };
    if (appContext.Component.getInitialProps) {
        pageProps = await appContext.Component.getInitialProps(appContext.ctx, client, data.currentUser);
    }
    return {
        pageProps,
        ...data
    };
};
/* harmony default export */ const _app = (AppComponent);


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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [190,664], () => (__webpack_exec__(4569)));
module.exports = __webpack_exports__;

})();