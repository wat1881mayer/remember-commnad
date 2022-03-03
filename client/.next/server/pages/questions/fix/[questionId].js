"use strict";
(() => {
var exports = {};
exports.id = 297;
exports.ids = [297];
exports.modules = {

/***/ 2549:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _questionId_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./hooks/use-request.js
var use_request = __webpack_require__(6471);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: ./components/testSection.tsx
var testSection = __webpack_require__(1083);
;// CONCATENATED MODULE: ./hooks/modal-request.js



const ModalRequest = ({ url , method , body , onSuccess , onFailed  })=>{
    const { 0: errors , 1: setErrors  } = (0,external_react_.useState)(null);
    const doRequest = async ()=>{
        try {
            setErrors(null);
            const response = await (external_axios_default())[method](url, body);
            if (onSuccess) {
                onSuccess(response.data);
            }
            return response.data;
        } catch (err1) {
            const errorSection = /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
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
                                    children: err1.response.data.errors.map((err, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: err.message
                                        }, index)
                                    )
                                })
                            ]
                        })
                    })
                ]
            });
            setErrors(errorSection);
            if (onFailed) {
                onFailed(errorSection);
            }
        }
    };
    return {
        doRequest,
        errors
    };
};
/* harmony default export */ const modal_request = (ModalRequest);

// EXTERNAL MODULE: ./context/snackbar-context.js
var snackbar_context = __webpack_require__(4233);
;// CONCATENATED MODULE: ./components/modal.tsx






const Modal = ({ setter , setErrors  })=>{
    const current_path = (0,router_.useRouter)();
    const { toggleSnack  } = (0,external_react_.useContext)(snackbar_context/* SnackbarContext */.S);
    const { doRequest , errors  } = modal_request({
        url: `/api/questions/${current_path.query.questionId}`,
        method: 'delete',
        body: {
        },
        onSuccess: ()=>{
            toggleSnack(true, 'success', 'テストを削除しました。');
            router_default().push('/');
            setter(false);
        },
        onFailed: (error)=>{
            setErrors(error);
            setter(false);
        }
    });
    const onClick = async (event)=>{
        event.preventDefault();
        await doRequest();
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "relative w-auto my-6 mx-auto max-w-3xl",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "text-3xl font-semibold text-red-400",
                                        children: "注意"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",
                                        onClick: ()=>setter(false)
                                        ,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "relative p-6 flex-auto",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "my-4 text-blueGray-500 text-lg leading-relaxed",
                                    children: "テストを削除しますが、本当に宜しいでしょうか？"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
                                        type: "button",
                                        onClick: ()=>setter(false)
                                        ,
                                        children: "キャンセル"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
                                        type: "button",
                                        onClick: (e)=>onClick(e)
                                        ,
                                        children: "削除"
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "opacity-25 fixed inset-0 z-40 bg-black"
            })
        ]
    }));
};
/* harmony default export */ const modal = (Modal);

// EXTERNAL MODULE: external "next/error"
var error_ = __webpack_require__(5566);
var error_default = /*#__PURE__*/__webpack_require__.n(error_);
// EXTERNAL MODULE: ./src/config/keys.ts + 2 modules
var keys = __webpack_require__(2303);
;// CONCATENATED MODULE: ./pages/questions/fix/[questionId].tsx











const QuestionShow = ({ question , errorCode  })=>{
    if (errorCode) {
        return(/*#__PURE__*/ jsx_runtime_.jsx((error_default()), {
            statusCode: 404
        }));
    }
    const { toggleSnack  } = (0,external_react_.useContext)(snackbar_context/* SnackbarContext */.S);
    const current_path = (0,router_.useRouter)();
    const { 0: showModal , 1: setShowModal  } = (0,external_react_.useState)(false);
    const { 0: deleteErrors , 1: setDeleteErrors  } = (0,external_react_.useState)(null);
    const { 0: category , 1: setCategory  } = (0,external_react_.useState)(question.category);
    const { 0: statement , 1: setStatement  } = (0,external_react_.useState)(question.statement);
    const { 0: select1 , 1: setSelect1  } = (0,external_react_.useState)(question.selection[0]);
    const { 0: select2 , 1: setSelect2  } = (0,external_react_.useState)(question.selection[1]);
    const { 0: select3 , 1: setSelect3  } = (0,external_react_.useState)(question.selection[2]);
    const { 0: select4 , 1: setSelect4  } = (0,external_react_.useState)(question.selection[3]);
    const { 0: correct , 1: setCorrect  } = (0,external_react_.useState)(question.correct);
    console.log(deleteErrors);
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
    const { doRequest , errors  } = (0,use_request/* default */.Z)({
        url: `/api/questions/${current_path.query.questionId}`,
        method: 'put',
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
            toggleSnack(true, 'success', 'テスト修正完了しました。');
            router_default().push('/');
        }
    });
    const onSubmit = async (event)=>{
        event.preventDefault();
        await doRequest();
    };
    const test = {
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
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                className: "w-full max-w-7xl dark:bg-gray-700",
                onSubmit: onSubmit,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex flex-wrap mx-4 mb-20 mt-8",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "w-full md:w-1/4 px-3 mb-6 md:mb-0",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    className: "block uppercase tracking-wide text-gray-700 text-xs lg:text-lg font-bold mb-2 uppercase dark:text-white",
                                    children: "Catogory"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                            className: "block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
                                            value: category,
                                            onChange: (e)=>{
                                                setCategory(e.target.value);
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    children: "git"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    children: "docker"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    children: "kubernetes"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                className: "fill-current h-4 w-4",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 20 20",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(testSection/* default */.Z, {
                        test: test
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex justify-end mx-4 my-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "block px-5 py-2 mt-4 mb-2 font-medium leading-5 text-center capitalize bg-gray-500 text-white rounded-lg lg:mt-0 hover:bg-blue-500 hover:text-white lg:w-autohover:bg-blue-600 focus:outline-none focus:bg-blue-600 dark:bg-blue-600",
                            children: "修正完了"
                        })
                    })
                ]
            }),
            errors,
            deleteErrors,
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex justify-start mx-4 my-4",
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "block px-5 py-2 mt-4 font-medium leading-5 text-center capitalize bg-red-600 text-white rounded-lg lg:mt-0 hover:bg-red-500 hover:text-white lg:w-autohover:bg-red-500 focus:outline-none focus:bg-red-500",
                    onClick: ()=>setShowModal(true)
                    ,
                    children: "削除"
                })
            }),
            showModal ? /*#__PURE__*/ jsx_runtime_.jsx(modal, {
                setter: setShowModal,
                setErrors: setDeleteErrors
            }) : null
        ]
    }));
};
const getServerSideProps = async (ctx)=>{
    const { questionId  } = ctx.query;
    const headers = ctx.req.headers;
    try {
        const { data  } = await external_axios_default().get(`${keys/* domain.kubernetes */.n.kubernetes}/api/questions/${questionId}`, {
            headers: headers
        });
        return {
            props: {
                question: data,
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
/* harmony default export */ const _questionId_ = (QuestionShow);


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
var __webpack_exports__ = __webpack_require__.X(0, [74,83], () => (__webpack_exec__(2549)));
module.exports = __webpack_exports__;

})();