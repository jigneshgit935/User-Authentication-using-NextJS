'use client';

import React, { useState } from 'react';
import Input from '../component/Input';
import Link from 'next/link';

const defaultData = { name: '', username: '', password: '' };

const Register = () => {
  const [data, setData] = useState(defaultData);

  const onValueChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onClickRegister = (e) => {
    e.preventDefault();

    if (!data.name || !data.username || data.password) {
      alert('Please fill all mandatory fields');
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="px-16 pt-8 pb-12 mb-4 bg-white ">
        <h1 className="text-3xl mb-4 text-center">Register</h1>
        <form>
          <Input
            label="Name"
            id="name"
            type="text"
            value={data.name}
            onChange={(e) => onValueChange(e)}
          />
          <Input
            label="Username"
            id="username"
            type="text"
            value={data.username}
            onChange={(e) => onValueChange(e)}
          />
          <Input
            label="Passsword"
            id="password"
            type="password"
            value={data.password}
            onChange={(e) => onValueChange(e)}
          />
          <button
            onClick={(e) => onClickRegister(e)}
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full w-full"
          >
            Submit
          </button>
          <p className="mt-4 text-center">
            Already have an account? {''}
            <Link href="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
