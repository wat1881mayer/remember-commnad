import React from 'react';

const CheckBox = ({ id, labelText, onChange, value, checked }) => {
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

  const label = labelText ? (
    <label htmlFor={id} className={labelClasses.join(' ')}>
      {labelText}
    </label>
  ) : null;

  const handleOnchange = (e) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="flex">
      <div className="flex items-center mt-2 ">
        <input
          type="checkbox"
          className={inputClasses.join(' ')}
          onChange={handleOnchange}
          value={value}
          checked={checked}
          id={id}
        />

        {label}
      </div>
    </div>
  );
};

export default CheckBox;
