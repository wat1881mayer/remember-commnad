import React, { useState, useCallback } from 'react';
import CheckBox from './CheckBox';

const CheckBoxGroup = ({
  options,
  selectedValues,
  onChange,
  checked,
  tests,
  viewList,
}) => {
  const handleOnchange = (val, checked) => {
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
  return (
    <div className="flex ">
      <div className="flex ">
        <label className="mr-4 uppercase tracking-wide text-gray-700 text-xs lg:text-lg font-semibold mb-2 uppercase dark:text-white">
          Test Catogory
        </label>
        {options.map((option, index) => {
          return (
            <div className="flex items-center justify-between mr-6" key={index}>
              <CheckBox
                id={option.label}
                labelText={option.value}
                value={option.value}
                name={option.value}
                onChange={(e) => {
                  handleOnchange(option.value, e.target.checked);
                }}
                checked={
                  checked ? checked : selectedValues.includes(option.value)
                }
                {...option}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CheckBoxGroup;
