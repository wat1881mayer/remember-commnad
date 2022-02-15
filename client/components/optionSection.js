import React from 'react';

const OptionSection = ({ optionList }) => {
  if (optionList.length !== 0) {
    return (
      <tbody>
        {optionList.map((option, index) => {
          return (
            <tr key={index} className="border-b bg-white border-gray-200">
              <td className="py-2">
                <div className="flex items-center px-2">
                  <span className="font-normal font-mono text-xs text-purple-700 whitespace-pre cursor-copy">
                    {option.optionName}
                  </span>
                </div>
              </td>
              <td className="py-2">
                <div className="flex items-center px-2">
                  <span className="font-normal font-mono text-xs text-purple-700 whitespace-pre cursor-copy">
                    {option.optionDescription}
                  </span>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    );
  }

  return (
    <tbody>
      <tr className="border-b bg-white border-gray-200">
        <td className="py-2">
          <div className="flex items-center px-2">
            <span className="font-normal font-mono text-xs text-purple-700 whitespace-pre cursor-copy"></span>
          </div>
        </td>
        <td className="py-2">
          <div className="flex items-center px-2">
            <span className="font-normal font-mono text-xs text-purple-700 whitespace-pre cursor-copy"></span>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default OptionSection;
