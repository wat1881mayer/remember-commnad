import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import Router from 'next/router';
import { useContext } from 'react';
import useRequest from '../../hooks/use-request';
import { SnackbarContext } from '../../context/snackbar-context';
import { NextPage } from 'next';

const Signup: NextPage = () => {
  const [email, setEmail] = useState<string>('');
  const { toggleSnack } = useContext(SnackbarContext);
  const [password, setPassword] = useState<string>('');
  const { doRequest, errors } = useRequest({
    url: '/api/users/signup',
    method: 'post',
    body: {
      email,
      password,
    },
    onSuccess: () => {
      toggleSnack(true, 'success', '新規登録しました!!');
      Router.push('/');
    },
  });

  const onSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    await doRequest();
  };

  return (
    <form
      className="container mx-auto overflow-hidden  max-w-5xl p-4 m-1  bg-white rounded-md shadow-md dark:bg-gray-800"
      onSubmit={onSubmit}
    >
      <h1 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
        Sign Up
      </h1>
      <div className="text-gray-700 dark:text-white">
        <label>Email Address</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-50 dark:text-black dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
        />
      </div>
      <div className="text-gray-700 dark:text-white">
        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-50 dark:text-black dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
        />
      </div>
      {errors}
      <div className="flex justify-end mt-6">
        <button className="block px-5 py-2 mt-4 font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg lg:mt-0 hover:bg-blue-500 lg:w-autohover:bg-gray-600 focus:outline-none focus:bg-gray-600">
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default Signup;
