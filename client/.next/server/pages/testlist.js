"use strict";
(() => {
var exports = {};
exports.id = 927;
exports.ids = [927];
exports.modules = {

/***/ 6466:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ testlist),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/testRow.tsx



const TestRow = ({ id , test  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
        className: "border-b odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:border-gray-600",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                className: "py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white",
                children: [
                    "Lesson:",
                    id + 1
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                className: "py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400",
                children: test.category
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                className: "py-4 px-6 text-sm font-medium text-right whitespace-nowrap",
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/questions/fix/[questionId]",
                    as: `/questions/fix/${test.id}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "text-blue-600 hover:text-blue-900 dark:text-blue-500 dark:hover:underline",
                        children: "編集"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                className: "py-4 px-6 text-sm font-medium text-right whitespace-nowrap",
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/tests/[testId]",
                    as: `/tests/${test.id}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "text-blue-600 hover:text-blue-900 dark:text-blue-500 dark:hover:underline",
                        children: "挑戦"
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const testRow = (TestRow);

;// CONCATENATED MODULE: ./components/CheckBox.js


const CheckBox = ({ id , labelText , onChange , value , checked  })=>{
    const labelClasses = [
        'ml-3',
        'text-base',
        'text-black-7',
        'leading-6',
        'cursor-pointer',
        'dark:text-white', 
    ];
    const inputClasses = [
        'form-checkbox',
        'h-4',
        'w-4',
        'text-blue-5',
        'cursor-pointer',
        'dark:text-white', 
    ];
    const label = labelText ? /*#__PURE__*/ jsx_runtime_.jsx("label", {
        htmlFor: id,
        className: labelClasses.join(' '),
        children: labelText
    }) : null;
    const handleOnchange = (e)=>{
        if (onChange) {
            onChange(e);
        }
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex items-center mt-2 ",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    type: "checkbox",
                    className: inputClasses.join(' '),
                    onChange: handleOnchange,
                    value: value,
                    checked: checked,
                    id: id
                }),
                label
            ]
        })
    }));
};
/* harmony default export */ const components_CheckBox = (CheckBox);

;// CONCATENATED MODULE: ./components/CheckBoxGroup.js



const CheckBoxGroup = ({ options , selectedValues , onChange , checked: checked1 , tests , viewList ,  })=>{
    const handleOnchange = (val, checked)=>{
        if (onChange) {
            if (checked) {
                let index = selectedValues.indexOf(val);
                if (index === -1) {
                    selectedValues.push(val);
                }
            } else {
                let index = selectedValues.indexOf(val);
                if (index !== -1) {
                    selectedValues.splice(index, 1);
                }
            }
            onChange(selectedValues, tests, viewList);
        }
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex ",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex ",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                    className: "mr-4 uppercase tracking-wide text-gray-700 text-xs lg:text-lg font-semibold mb-2 uppercase dark:text-white",
                    children: "Test Catogory"
                }),
                options.map((option, index)=>{
                    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex items-center justify-between mr-6",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_CheckBox, {
                            id: option.label,
                            labelText: option.value,
                            value: option.value,
                            name: option.value,
                            onChange: (e)=>{
                                handleOnchange(option.value, e.target.checked);
                            },
                            checked: checked1 ? checked1 : selectedValues.includes(option.value),
                            ...option
                        })
                    }, index));
                })
            ]
        })
    }));
};
/* harmony default export */ const components_CheckBoxGroup = (CheckBoxGroup);

// EXTERNAL MODULE: ./src/config/keys.ts + 2 modules
var keys = __webpack_require__(2303);
;// CONCATENATED MODULE: ./pages/testlist.tsx






const Test = ({ tests: tests1  })=>{
    const { 0: modalIsOpen , 1: setIsOpen  } = (0,external_react_.useState)(false);
    const { 0: selectedValues , 1: setSelectedValues  } = (0,external_react_.useState)([]);
    const { 0: dockerCheck , 1: setDockerCheck  } = (0,external_react_.useState)(false);
    const { 0: gitCheck , 1: setGitCheckt  } = (0,external_react_.useState)(false);
    const { 0: kubectlCheck , 1: setKubectkCheck  } = (0,external_react_.useState)(false);
    const { 0: viewList , 1: setViewList  } = (0,external_react_.useState)(tests1);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    const changeSelectedValue = (changedValues, tests, viewList)=>{
        setSelectedValues([
            ...changedValues
        ]);
        let selectedCategory = [];
        if (changedValues.length !== 0) {
            for (let category of changedValues){
                for (let test of tests){
                    if (test.category === category) {
                        selectedCategory.push(test);
                    }
                }
            }
            setViewList([
                ...selectedCategory
            ]);
        } else {
            setViewList(tests);
        }
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container flex flex-col mx-auto",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "overflow-x-auto sm:-mx-6 lg:-mx-8",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "inline-block py-2 min-w-full sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(components_CheckBoxGroup, {
                            onChange: changeSelectedValue,
                            selectedValues: selectedValues,
                            tests: tests1,
                            viewList: viewList,
                            checked: false,
                            options: [
                                {
                                    value: 'git',
                                    label: 1
                                },
                                {
                                    value: 'docker',
                                    label: 2
                                },
                                {
                                    value: 'kubectl',
                                    label: 3
                                }, 
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "overflow-hidden shadow-md sm:rounded-lg",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                                className: "min-w-full",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                                        className: "bg-gray-200 dark:bg-gray700 dark:text-white",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                    scope: "col",
                                                    className: "py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400",
                                                    children: "Lesson"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                    scope: "col",
                                                    className: "py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400",
                                                    children: "Category"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                    scope: "col",
                                                    className: "relative py-3 px-6",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "sr-only",
                                                        children: "Edit"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                    scope: "col",
                                                    className: "relative py-3 px-6",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "sr-only",
                                                        children: "Test"
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                                        children: viewList.map((test, index)=>{
                                            return(/*#__PURE__*/ jsx_runtime_.jsx(testRow, {
                                                test: test,
                                                id: index
                                            }, index));
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    }));
};
const getServerSideProps = async (context)=>{
    const headers = context.req.headers;
    const { data  } = await external_axios_default().get(`${keys/* domain.kubernetes */.n.kubernetes}/api/questions`, {
        headers: headers
    });
    return {
        props: {
            tests: data
        }
    };
};
/* harmony default export */ const testlist = (Test);


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
var __webpack_exports__ = __webpack_require__.X(0, [190,664], () => (__webpack_exec__(6466)));
module.exports = __webpack_exports__;

})();