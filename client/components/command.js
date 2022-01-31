import React from 'react';

const Command = ({ commandList }) => {
  return (
    <ul className="list-none p-0 divide-y divide-gray-300">
      {commandList.map((list, index) => {
        return (
          <li
            key={index}
            className="text-sm font-semibold border border-gray-300"
          >
            <div className="cursor-pointer w-full flex justify-between items-center py-1 px-2 bg-gray-200 hover:bg-gray-100">
              <div className="space-x-1 py-1">
                <span className="font-semibold text-xs pl-1 text-blue-700 font-mono">
                  {list.command}
                </span>
              </div>
            </div>
            <div className="bg-blue-50 p-3 space-y-3">
              <div className="flex w-full justify-between items-end">
                <p className="font-semibold text-base text-blue-gray-700">
                  {list.description}
                </p>
              </div>
              <div className="max-h-100 overflow-auto">
                <table className="w-full bg-gray-200 border-collapse">
                  <thead>
                    <tr className="border-b bg-white border-gray-200">
                      <th className="py-2">
                        <div className="flex items-center px-2">
                          <span className="font-normal font-mono text-xs text-black-700 whitespace-pre cursor-copy">
                            option名
                          </span>
                        </div>
                      </th>
                      <th className="py-2">
                        <div className="flex items-center px-2">
                          <span className="font-normal font-mono text-xs text-black-700 whitespace-pre cursor-copy">
                            用途
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
                            {list.optionName}
                          </span>
                        </div>
                      </td>
                      <td className="py-2">
                        <div className="flex items-center px-2">
                          <span className="font-normal font-mono text-xs text-purple-700 whitespace-pre cursor-copy">
                            {list.optionDescription}
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Command;
