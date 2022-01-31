import React from 'react';

const cheatsheet = () => {
  return (
    <div className="min-w-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full  pb-2 px-4 pt-20 lg:pt-4 lg:pl-2">
      <section className="flex flex-col w-full px-0 md:px-2 space-y-6 dark:bg-gray-800">
        <div className="w-full dark:bg-gray-800">
          <div className="w-full h-full bg-white rounded p-4 pt-1 shadow-sm space-y-3">
            <header className="border-b border-gray-300 p-2">
              <h2 className="text-lg font-semibold text-gray-800">Git</h2>
            </header>
            <ul className="list-none p-0 divide-y divide-gray-300">
              <li className="text-sm font-semibold border border-gray-300">
                <div className="cursor-pointer w-full flex justify-between items-center py-1 px-2 bg-gray-200 hover:bg-gray-100">
                  <div className="space-x-1 py-1">
                    <span className="font-semibold text-xs pl-1 text-blue-700 font-mono">
                      add
                    </span>
                  </div>
                </div>
                <div className="bg-blue-50 p-3 space-y-3">
                  <div className="flex w-full justify-between items-end">
                    <p className="font-semibold text-base text-blue-gray-700">
                      引数に指定したファイルの変更をステージングする。
                    </p>
                  </div>
                  <div className="max-h-100 overflow-auto">
                    <table className="w-full bg-gray-200 border-collapse">
                      <thead>
                        <tr className="border-b bg-white border-gray-200">
                          <th className="py-2">
                            <div className="flex items-center px-2">
                              <span className="font-normal font-mono text-xs text-black-700 whitespace-pre cursor-copy">
                                option name
                              </span>
                            </div>
                          </th>
                          <th className="py-2">
                            <div className="flex items-center px-2">
                              <span className="font-normal font-mono text-xs text-black-700 whitespace-pre cursor-copy">
                                使用意図
                              </span>
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b bg-white border-gray-200">
                          <td className="py-2">
                            <div className="flex items-center px-2">
                              <span className="font-normal font-mono text-xs text-purple-700 whitespace-pre cursor-copy">
                                .
                              </span>
                            </div>
                          </td>
                          <td className="py-2">
                            <div className="flex items-center px-2">
                              <span className="font-normal font-mono text-xs text-purple-700 whitespace-pre cursor-copy">
                                変更された全てのファイルを指定する
                              </span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </li>
              <li className="text-sm font-semibold border border-gray-300 my-1">
                <div className="cursor-pointer w-full flex justify-between items-center py-1 px-2 bg-gray-200 hover:bg-gray-100">
                  <div className="space-x-1 py-1">
                    <span className="font-semibold text-xs pl-1 text-blue-700 font-mono">
                      commit
                    </span>
                  </div>
                </div>
                <div className="bg-blue-50 p-3 space-y-3">
                  <div className="flex justify-between items-end">
                    <p className="font-semibold text-base text-blue-gray-700">
                      addによってステージングされた変更内容を恒常的に記録します。
                    </p>
                  </div>
                  <div className="max-h-100 overflow-auto">
                    <table className="w-full bg-gray-200 border-collapse">
                      <thead>
                        <tr className="border-b bg-white border-gray-200">
                          <th className="py-2">
                            <div className="flex items-center px-2">
                              <span className="font-normal font-mono text-xs text-black-700 whitespace-pre cursor-copy">
                                option name
                              </span>
                            </div>
                          </th>
                          <th className="py-2">
                            <div className="flex items-center px-2">
                              <span className="font-normal font-mono text-xs text-black-700 whitespace-pre cursor-copy">
                                使用意図
                              </span>
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b bg-white border-gray-200">
                          <td className="py-2">
                            <div className="flex items-center px-2">
                              <span className="font-normal font-mono text-xs text-purple-700 whitespace-pre cursor-copy">
                                -m
                              </span>
                            </div>
                          </td>
                          <td className="py-2">
                            <div className="flex items-center px-2">
                              <span className="font-normal font-mono text-xs text-purple-700 whitespace-pre cursor-copy">
                                コミットコメントをその場に記載することができる。
                              </span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </li>
              <li className="text-sm font-semibold border border-gray-300">
                <div className="cursor-pointer w-full flex justify-between items-center py-1 px-2 bg-gray-200 hover:bg-gray-100">
                  <div className="space-x-1 py-1">
                    <span className="font-semibold text-xs pl-1 text-blue-700 font-mono">
                      status
                    </span>
                  </div>
                </div>
                <div className="bg-blue-50 p-3 space-y-3">
                  <div className="flex justify-between items-end">
                    <p className="font-semibold text-base text-blue-gray-700">
                      ファイルの変更状況、ステージングされたファイルの状況等を確認する。
                    </p>
                  </div>
                  <div className="max-h-100 overflow-auto">
                    <table className="w-full bg-gray-200 border-collapse">
                      <thead>
                        <tr className="border-b bg-white border-gray-200">
                          <th className="py-2">
                            <div className="flex items-center px-2">
                              <span className="font-normal font-mono text-xs text-black-700 whitespace-pre cursor-copy">
                                option name
                              </span>
                            </div>
                          </th>
                          <th className="py-2">
                            <div className="flex items-center px-2">
                              <span className="font-normal font-mono text-xs text-black-700 whitespace-pre cursor-copy">
                                使用意図
                              </span>
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b bg-white border-gray-200">
                          <td className="py-2">
                            <div className="flex items-center px-2">
                              <span className="font-normal font-mono text-xs text-purple-700 whitespace-pre cursor-copy">
                                .
                              </span>
                            </div>
                          </td>
                          <td className="py-2">
                            <div className="flex items-center px-2">
                              <span className="font-normal font-mono text-xs text-purple-700 whitespace-pre cursor-copy">
                                変更された全てのファイルを指定する
                              </span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="flex flex-col w-full   px-0 md:px-2 space-y-6">
        <div className="w-full dark:bg-gray-800">
          <div className="w-full h-full bg-white rounded p-4 pt-1 shadow-sm space-y-3">
            <header className="border-b border-gray-300 p-2">
              <h2 className="text-lg font-semibold text-gray-800">docker</h2>
            </header>
            <ul className="list-none p-0 divide-y divide-gray-300">
              <li className="text-sm font-semibold border border-gray-300">
                <div className="cursor-pointer w-full flex justify-between items-center py-1 px-2 bg-gray-200 hover:bg-gray-100">
                  <div className="space-x-1 py-1">
                    <span className="font-semibold text-xs pl-1 text-blue-700 font-mono">
                      build
                    </span>
                  </div>
                </div>
                <div className="bg-blue-50 p-3 space-y-3">
                  <div className="flex justify-between items-end">
                    <p className="font-semibold text-base text-blue-gray-700">
                      指定したDockerfileをビルドし、コンテナを作成する。
                    </p>
                  </div>
                  <div className="max-h-100 overflow-auto">
                    <table className="w-full bg-gray-200 border-collapse">
                      <thead>
                        <tr className="border-b bg-white border-gray-200">
                          <th className="py-2">
                            <div className="flex items-center px-2">
                              <span className="font-normal font-mono text-xs text-black-700 whitespace-pre cursor-copy">
                                option name
                              </span>
                            </div>
                          </th>
                          <th className="py-2">
                            <div className="flex items-center px-2">
                              <span className="font-normal font-mono text-xs text-black-700 whitespace-pre cursor-copy">
                                使用意図
                              </span>
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b bg-white border-gray-200">
                          <td className="py-2">
                            <div className="flex items-center px-2">
                              <span className="font-normal font-mono text-xs text-purple-700 whitespace-pre cursor-copy">
                                -t
                              </span>
                            </div>
                          </td>
                          <td className="py-2">
                            <div className="flex items-center px-2">
                              <span className="font-normal font-mono text-xs text-purple-700 whitespace-pre cursor-copy">
                                ビルドしたコンテナに名前をつける
                              </span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="flex flex-col w-full  px-0 md:px-2 space-y-6">
        <div className="w-full dark:bg-gray-800">
          <div className="w-full h-full bg-white rounded p-4 pt-1 shadow-sm space-y-3">
            <header className="border-b border-gray-300 p-2">
              <h2 className="text-lg font-semibold text-gray-800">kubectl</h2>
            </header>
            <ul className="list-none p-0 divide-y divide-gray-300">
              <li className="text-sm font-semibold border border-gray-300">
                <div className="cursor-pointer w-full flex justify-between items-center py-1 px-2 bg-gray-200 hover:bg-gray-100">
                  <div className="space-x-1 py-1">
                    <span className="font-semibold text-xs pl-1 text-blue-700 font-mono">
                      commit
                    </span>
                  </div>
                </div>
                <div className="bg-blue-50 p-3 space-y-3">
                  <div className="flex justify-between items-end">
                    <p className="font-semibold text-base text-blue-gray-700">
                      add fix file etc..
                    </p>
                  </div>
                  <div className="max-h-100 overflow-auto">
                    <table className="w-full bg-gray-200 border-collapse">
                      <thead>
                        <tr className="border-b bg-white border-gray-200">
                          <th className="py-2">
                            <div className="flex items-center px-2">
                              <span className="font-normal font-mono text-xs text-black-700 whitespace-pre cursor-copy">
                                option name
                              </span>
                            </div>
                          </th>
                          <th className="py-2">
                            <div className="flex items-center px-2">
                              <span className="font-normal font-mono text-xs text-black-700 whitespace-pre cursor-copy">
                                使用意図
                              </span>
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b bg-white border-gray-200">
                          <td className="py-2">
                            <div className="flex items-center px-2">
                              <span className="font-normal font-mono text-xs text-purple-700 whitespace-pre cursor-copy">
                                add
                              </span>
                            </div>
                          </td>
                          <td className="py-2">
                            <div className="flex items-center px-2">
                              <span className="font-normal font-mono text-xs text-purple-700 whitespace-pre cursor-copy">
                                commit
                              </span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default cheatsheet;
