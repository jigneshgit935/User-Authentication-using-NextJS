'use client';

import React, { useState } from 'react';
import Input from '../component/Input';
import Link from 'next/link';

const defaultData = { username: '', password: '' };

const Login = () => {
  const [data, setData] = useState(defaultData);

  const onValueChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onClickLogin = (e) => {
    e.preventDefault();

    if (!data.username || data.password) {
      alert('Please fill all mandatory fields');
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="px-16 pt-8 pb-12 mb-4 bg-white ">
        <h1 className="text-3xl mb-4 text-center">Login</h1>
        <form>
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
            onClick={(e) => onClickLogin(e)}
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full w-full"
          >
            Submit
          </button>
          <p className="mt-4 text-center">
            Don't have an account? {''}
            <Link href="/register" className="text-blue-500 hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
