"use strict";
(() => {
var exports = {};
exports.id = 86;
exports.ids = [86];
exports.modules = {

/***/ 8763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_cheatsheet)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/data/gitCommandList.ts
const gitCommandList = [
    {
        command: 'add',
        description: '引数に指定したファイルの変更をステージングする',
        example: 'git add index.js',
        options: [
            {
                optionName: '.',
                optionDescription: '変更された全てのファイルを指定する。'
            }, 
        ]
    },
    {
        command: 'commit',
        description: 'ステージングされたファイル、フォルダの変更を記録する。',
        example: 'git commit ',
        options: [
            {
                optionName: '-m',
                optionDescription: 'git commitにコメントを1行で付与できる'
            }, 
        ]
    },
    {
        command: 'pull',
        description: 'リモートリポジトリから最新のソースコードを取得し、ローカルリポジトリに変更をマージする',
        example: 'git pull origin main',
        options: []
    },
    {
        command: 'push',
        description: 'ローカルブランチの全てのコミットをリモートリポジトリにプッシュする',
        example: 'git push origin main',
        options: [
            {
                optionName: '-u',
                optionDescription: '指定したブランチを上流ブランチとして設定する'
            },
            {
                optionName: '-d',
                optionDescription: '指定したブランチをリモートリポジトリから削除する。'
            }, 
        ]
    },
    {
        command: 'checkout',
        description: '指定したブランチにカレントブランチを切り替える',
        example: 'git checkout main',
        options: [
            {
                optionName: '-b',
                optionDescription: '新規ブランチを作成し、そのブランチにカレントブランチを切り替える'
            }, 
        ]
    },
    {
        command: 'branch',
        description: 'オプションなしの場合は、ブランチ一覧を表示する',
        example: 'git branch -r',
        options: [
            {
                optionName: '-r',
                optionDescription: 'リモートリポジトリのブランチを表示する'
            },
            {
                optionName: '-a',
                optionDescription: 'ローカル・リモートリポジトリの全てのブランチを表示する。'
            },
            {
                optionName: '-d',
                optionDescription: '指定したブランチを削除する'
            }, 
        ]
    },
    {
        command: 'status',
        description: 'コミット可能な全てのファイルの変更、ステージング状況を表示する',
        example: 'git status',
        options: []
    },
    {
        command: 'reset',
        description: '指定したコミット番号以降のコミットを全て取り消す。（ローカルでは変更内容自体は保持される)',
        example: 'git reset 5t54fdfdfdfdfe',
        options: [
            {
                optionName: '--hard',
                optionDescription: 'ローカルの変更内容も含め、指定したコミット以降の変更を破棄する'
            }, 
        ]
    }, 
];

;// CONCATENATED MODULE: ./src/data/dockerCommandList.ts
const dockerCommandList = [
    {
        command: 'build',
        description: '指定したDockerfileをビルドし、イメージを作成する',
        example: 'docker build -t myimage .',
        options: [
            {
                optionName: '-t',
                optionDescription: '作成したイメージに名前とタグをつける'
            }, 
        ]
    },
    {
        command: 'rmi',
        description: '指定した名前、IDのイメージを削除する',
        example: 'docker rmi myimage',
        options: [
            {
                optionName: '-f',
                optionDescription: 'イメージの強制削除'
            }, 
        ]
    },
    {
        command: 'create',
        description: '新しいコンテナの作成',
        example: 'docker build -it fedara bash',
        options: [
            {
                optionName: '-i',
                optionDescription: 'アタッチしなくてSTDINを開き続ける'
            },
            {
                optionName: '-t',
                optionDescription: '擬似ターミナルを割り当てる'
            },
            {
                optionName: '-e',
                optionDescription: '環境変数を設定する'
            }, 
        ]
    },
    {
        command: 'exec',
        description: '起動中のコンテナ内でコマンドを実行する',
        example: 'docker exec -it ubuntu_bash bash',
        options: [
            {
                optionName: '-d',
                optionDescription: 'デタッチモードで起動'
            },
            {
                optionName: '-i',
                optionDescription: 'アタッチしていなくても STDIN をオープンにし続ける'
            },
            {
                optionName: '-t',
                optionDescription: '擬似ターミナルを割り当てる'
            }, 
        ]
    },
    {
        command: 'run',
        description: 'コンテナをイメージから作成し、指定したコマンドを実行する',
        example: 'docker run -p 127.0.0.1:80:8080 ubuntu bash',
        options: [
            {
                optionName: '--name',
                optionDescription: '作成したコンテナに名前をつける'
            },
            {
                optionName: '-p',
                optionDescription: 'ホスト側とポートフォーワードする。'
            },
            {
                optionName: '-d',
                optionDescription: 'コンテナをバックグラウンドで起動する。'
            },
            {
                optionName: '-i',
                optionDescription: 'コンテナのSTDINにアタッチする'
            },
            {
                optionName: '--rm',
                optionDescription: 'コンテナ終了時、自動的にコンテナを削除'
            }, 
        ]
    },
    {
        command: 'stop',
        description: '指定したコンテナを停止する',
        example: 'docker stop mydockercontainer',
        options: [
            {
                optionName: '-t',
                optionDescription: 'kill で停止するまでに待機する秒数'
            }, 
        ]
    }, 
];

;// CONCATENATED MODULE: ./src/data/kubectlCommandList.ts
const kubectlCommandList = [
    {
        command: 'apply',
        description: '指定したファイルからクラスター内にリソースを作成、更新する',
        example: 'kubectl apply -f manifest.yaml ',
        options: [
            {
                optionName: '-f',
                optionDescription: 'マニフェストファイルを指定する際に必要'
            },
            {
                optionName: '-r',
                optionDescription: '指定したファイルまたは、フォルダの下位階層も読み込み対象とする'
            }, 
        ]
    },
    {
        command: 'get',
        description: '指定したタイプの稼働中のサービスやポッドの一覧を表示する',
        example: 'kubectl get pods',
        options: [
            {
                optionName: '--all-namespaces',
                optionDescription: '全ての名前空間を対象とする'
            },
            {
                optionName: '--selector',
                optionDescription: '名前を含む場合や、逆に含まないものを指定することができる'
            },
            {
                optionName: '--sort-by',
                optionDescription: '指定した条件でソートする'
            }, 
        ]
    },
    {
        command: 'scale',
        description: 'レプリカ数を変更する',
        example: 'kubectl scale --replicas=3 rs/foo',
        options: [
            {
                optionName: '--replicas',
                optionDescription: '増減するレプリカ数を指定する'
            }, 
        ]
    },
    {
        command: 'delete',
        description: 'podやservice等、指定したタイプのものを削除する',
        example: 'kubectl delete pod,service baz foo',
        options: [
            {
                optionName: '-f',
                optionDescription: '指定したファイルに記載されたpodやserviceを削除する'
            },
            {
                optionName: '-k',
                optionDescription: '指定したディレクトリにあるマニフェストファイルによって起動されたpodやserviceを削除する'
            }, 
        ]
    }, 
];

;// CONCATENATED MODULE: ./components/optionSection.tsx


const OptionSection = ({ optionList  })=>{
    if (optionList.length !== 0) {
        return(/*#__PURE__*/ jsx_runtime_.jsx("tbody", {
            children: optionList.map((option, index)=>{
                return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                    className: "border-b bg-white border-gray-200",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                            className: "py-2",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex items-center px-2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "font-normal font-mono text-xs text-purple-700 whitespace-pre cursor-copy",
                                    children: option.optionName
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                            className: "py-2",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex items-center px-2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "font-normal font-mono text-xs text-purple-700 whitespace-pre cursor-copy",
                                    children: option.optionDescription
                                })
                            })
                        })
                    ]
                }, index));
            })
        }));
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx("tbody", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
            className: "border-b bg-white border-gray-200",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                    className: "py-2",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex items-center px-2",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "font-normal font-mono text-xs text-purple-700 whitespace-pre cursor-copy"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                    className: "py-2",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex items-center px-2",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "font-normal font-mono text-xs text-purple-700 whitespace-pre cursor-copy"
                        })
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const optionSection = (OptionSection);

;// CONCATENATED MODULE: ./components/commandSection.tsx



const CommandSection = ({ commandList  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: "list-none p-0 divide-y divide-gray-300",
        children: commandList.map((list, index)=>{
            return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                className: "text-sm font-semibold border border-gray-300",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "cursor-pointer w-full flex justify-between items-center py-1 px-2 bg-gray-200 hover:bg-gray-100",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "space-x-1 py-1",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "font-semibold text-xs pl-1 text-blue-700 font-mono",
                                children: list.command
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "bg-blue-50 p-3 space-y-3",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex w-full justify-between items-end",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "font-semibold text-base text-blue-gray-700",
                                    children: list.description
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex w-full justify-between items-end",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: "text-base text-blue-gray-700",
                                    children: [
                                        "例).",
                                        list.example
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "max-h-100 overflow-auto",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                                    className: "w-full bg-gray-200 border-collapse",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                className: "border-b bg-white border-gray-200",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                        className: "py-2",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "flex items-center px-2",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "font-normal font-mono text-xs text-black-700 whitespace-pre cursor-copy",
                                                                children: "option名"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                        className: "py-2",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "flex items-center px-2",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "font-normal font-mono text-xs text-black-700 whitespace-pre cursor-copy",
                                                                children: "用途"
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(optionSection, {
                                            optionList: list.options
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }, index));
        })
    }));
};
/* harmony default export */ const commandSection = (CommandSection);

;// CONCATENATED MODULE: ./components/toolSection.tsx



const ToolSection = ({ tool , commandList  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "flex flex-col w-full px-0 py-1 md:px-2 space-y-6 dark:bg-gray-800",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "w-full dark:bg-gray-800",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-full h-full bg-white rounded p-4 pt-1 shadow-sm space-y-3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("header", {
                        className: "border-b border-gray-300 p-2",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "text-xl font-bold text-gray-800",
                            children: tool
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(commandSection, {
                        commandList: commandList
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const toolSection = (ToolSection);

;// CONCATENATED MODULE: ./pages/cheatsheet.tsx






const cheatsheet = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "min-w-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full pb-2 px-4 pt-20 lg:pt-4 lg:pl-2",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(toolSection, {
                tool: "Git",
                commandList: gitCommandList
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(toolSection, {
                tool: "Docker",
                commandList: dockerCommandList
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(toolSection, {
                tool: "Kubectl",
                commandList: kubectlCommandList
            })
        ]
    }));
};
/* harmony default export */ const pages_cheatsheet = (cheatsheet);


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
var __webpack_exports__ = (__webpack_exec__(8763));
module.exports = __webpack_exports__;

})();