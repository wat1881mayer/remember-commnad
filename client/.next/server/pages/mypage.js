"use strict";
(() => {
var exports = {};
exports.id = 587;
exports.ids = [587];
exports.modules = {

/***/ 4648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ mypage),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./components/progressBar.tsx

const ProgressBar = ({ bgcolor , completed  })=>{
    const containerStyles = {
        width: '100%',
        backgroundColor: '#e0e0de',
        borderRadius: 50
    };
    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit'
    };
    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "h-5 ",
        style: containerStyles,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            style: fillerStyles,
            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                style: labelStyles,
                children: `${completed}%`
            })
        })
    }));
};
/* harmony default export */ const progressBar = (ProgressBar);

;// CONCATENATED MODULE: ./src/func/testResultCalc.ts
const testResultCalc = (result)=>{
    let gitCompletedCount = 0;
    let dockerCompletedCount = 0;
    let kubectlCompletedCount = 0;
    let gitQuestions = 0;
    let dockerQuestions = 0;
    let kubectlQuestions = 0;
    if (result) {
        for (const question of result.questions){
            if (question.category === 'git') {
                gitQuestions++;
                if (question.answered) {
                    gitCompletedCount++;
                }
            } else if (question.category === 'docker') {
                dockerQuestions++;
                if (question.answered) {
                    dockerCompletedCount++;
                }
            } else if (question.category === 'kubectl') {
                kubectlQuestions++;
                if (question.answered) {
                    kubectlCompletedCount++;
                }
            }
        }
    }
    const gitCompletedRate = Math.trunc(gitCompletedCount / gitQuestions * 100);
    const dockerCompletedRate = Math.trunc(dockerCompletedCount / dockerQuestions * 100);
    const kubectlCompletedRate = Math.trunc(kubectlCompletedCount / kubectlQuestions * 100);
    return {
        gitCompletedRate,
        dockerCompletedRate,
        kubectlCompletedRate
    };
};

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/testResultRow.tsx



const TestResultRow = ({ id , test  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
        className: "border-b odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:border-gray-800 dark:bg-gray-700",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                className: "py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white",
                children: [
                    "Lesson:",
                    id + 1
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                className: "py-4 px-6 text-sm dark:text-white whitespace-nowrap ",
                children: test.category
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                className: "py-4 px-6 text-sm font-medium text-right whitespace-nowrap dark:text-white",
                children: test.answered ? '完了' : '未完了'
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                className: "py-4 px-6 text-sm font-medium text-right whitespace-nowrap",
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/tests/[testId]",
                    as: `/tests/${test.testId}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "text-blue-600 hover:text-blue-900 dark:text-blue-500 dark:hover:underline",
                        children: "挑戦"
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const testResultRow = (TestResultRow);

// EXTERNAL MODULE: external "next/error"
var error_ = __webpack_require__(5566);
var error_default = /*#__PURE__*/__webpack_require__.n(error_);
// EXTERNAL MODULE: ./src/config/keys.ts + 2 modules
var keys = __webpack_require__(2303);
;// CONCATENATED MODULE: ./pages/mypage.tsx








const Mypage = ({ result , errorCode  })=>{
    if (errorCode) {
        return(/*#__PURE__*/ jsx_runtime_.jsx((error_default()), {
            statusCode: 404
        }));
    }
    const rate = testResultCalc(result);
    const { 0: gitCompleted , 1: setGitCompleted  } = (0,external_react_.useState)(rate.gitCompletedRate);
    const { 0: dockerCompleted , 1: setDockerCompleted  } = (0,external_react_.useState)(rate.dockerCompletedRate);
    const { 0: kubectlCompleted , 1: setKubectlCompleted  } = (0,external_react_.useState)(rate.kubectlCompletedRate);
    (0,external_react_.useEffect)(()=>{
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container flex max-w-screent-2xl mx-auto",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "container lg:flex lg: flex-col lg:max-w-md mt-6 mx-2 shadow-md rounded-3xl overflow-hidden dark:bg-gray-700",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "font-normal pl-5 text-lg font-bold bg-gray-400 text-gray-700 dark:bg-gray-800 dark:text-white",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "git"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: " my-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex flex-col pl-4 pt-1",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "font-bold dark:text-white",
                                            children: "Progress"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex flex-col pl-4 pt-3 w-9/12 mx-auto",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(progressBar, {
                                            bgcolor: '#6a1b9a',
                                            completed: gitCompleted
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "container lg:flex lg:flex-col mx-auto lg:max-w-md mt-6 mr-2 shadow-md rounded-3xl overflow-hidden dark:bg-gray-700",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "font-normal pl-5 text-lg font-bold bg-gray-400 text-gray-700 dark:bg-gray-800 dark:text-white",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "docker"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "my-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex flex-col pl-4 pt-1",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "font-bold dark:text-white",
                                            children: "Progress"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex flex-col pl-4 pt-3 w-9/12 mx-auto",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(progressBar, {
                                            bgcolor: '#6a1b9a',
                                            completed: dockerCompleted
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "container lg:flex lg:flex-col mx-auto lg:max-w-md mt-6 mr-2 shadow-md rounded-3xl overflow-hidden dark:bg-gray-700",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "font-normal pl-5 text-lg font-bold bg-gray-400 text-gray-700 dark:bg-gray-800 dark:text-white",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "kubectl"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "my-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex flex-col pl-4 pt-1",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "font-bold dark:text-white",
                                            children: "Progress"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex flex-col pl-4 pt-3 w-9/12 mx-auto",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(progressBar, {
                                            bgcolor: '#6a1b9a',
                                            completed: kubectlCompleted
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container pl-4 pt-6 flex flex-col max-w-screen-2xl mx-auto sm:mr-2",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "overflow-x-auto sm:-mx-6 lg:-mx-8",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "inline-block py-2 min-w-full sm:px-6 lg:px-8",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "overflow-hidden shadow-md sm:rounded-lg",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 text-2xl bg-gray-400 font-bold uppercase dark:text-white dark:bg-gray-800 ",
                                    children: "Test Status Detail"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                                    className: "min-w-full",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                                            className: "bg-white dark:bg-blue-800",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                className: "bg-blue-200 dark:bg-blue-800",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                        scope: "col",
                                                        className: "py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase ",
                                                        children: "Lesson No"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                        scope: "col",
                                                        className: "py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase ",
                                                        children: "Category"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                        scope: "col",
                                                        className: "py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase",
                                                        children: "完了状況"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                        scope: "col",
                                                        className: "relative py-3 px-6",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "sr-only",
                                                            children: "Edit"
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                                            children: result.questions.map((test, index)=>{
                                                return(/*#__PURE__*/ jsx_runtime_.jsx(testResultRow, {
                                                    test: test,
                                                    id: index
                                                }, index));
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            })
        ]
    }));
};
const getServerSideProps = async (context)=>{
    const headers = context.req.headers;
    try {
        const { data  } = await external_axios_default().get(`${keys/* domain.kubernetes */.n.kubernetes}/api/users`, {
            headers: headers
        });
        return {
            props: {
                result: data,
                errorCode: null
            }
        };
    } catch (err) {
        const errorCode = 404;
        return {
            props: {
                result: null,
                errorCode: errorCode
            }
        };
    }
};
/* harmony default export */ const mypage = (Mypage);


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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [190,664], () => (__webpack_exec__(4648)));
module.exports = __webpack_exports__;

})();