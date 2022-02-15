import React, { useContext } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import { SnackbarContext } from '../../context/snackbar-context';
import useRequest from '../../hooks/use-request';

const Signin = () => {
  const [email, setEmail] = useState('');
  const { toggleSnack } = useContext(SnackbarContext);
  const [password, setPassword] = useState('');
  const { doRequest, errors } = useRequest({
    url: '/api/users/signin',
    method: 'post',
    body: {
      email,
      password,
    },
    onSuccess: () => {
      toggleSnack(true, 'success', 'ログインしました!!');
      Router.push('/');
    },
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    await doRequest();
  };

  return (
    <form
      className="container mx-auto overflow-hidden  max-w-5xl p-4 m-1  bg-white rounded-md shadow-md ldark:bg-gray-800"
      onSubmit={onSubmit}
    >
      <h1 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
        Sign in
      </h1>
      <div className="text-gray-700 dark:text-gray-200">
        <label>Email Address</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-50 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
        />
      </div>
      <div className="text-gray-700 dark:text-white">
        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-50 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
        />
      </div>

      <div className="flex items-center justify-start py-4 text-center  dark:bg-gray-700">
        <span className="text-sm text-gray-600 dark:text-gray-200">
          アカウントを持っていない?{' '}
        </span>
        <Link href="/auth/signup">
          <a
            href="#"
            className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
          >
            新規登録へ
          </a>
        </Link>
      </div>

      <div className="flex items-center justify-start py-4 text-center  dark:bg-gray-700">
        <span className="text-sm text-gray-600 dark:text-gray-200">
          パスワードを忘れた方は{' '}
        </span>
        <Link href="/auth/signup">
          <a
            href="#"
            className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
          >
            こちら
          </a>
        </Link>
      </div>

      {errors}

      <div className="flex justify-end mt-6">
        <button className="block px-5 py-2 mt-4 font-medium leading-5 text-center text-white capitalize bg-gray-700 rounded-lg lg:mt-0 hover:bg-blue-500 lg:w-autohover:bg-gray-600 focus:outline-none focus:bg-gray-600">
          Sign in
        </button>
      </div>
    </form>
  );
};

export default Signin;
