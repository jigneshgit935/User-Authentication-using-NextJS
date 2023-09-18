import React from 'react';

const Input = ({ label, type, id, ...props }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-600 mb-2 font-semibold">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        autoComplete="off"
        className="w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500  p-2"
        {...props}
      />
    </div>
  );
};

export default Input;
