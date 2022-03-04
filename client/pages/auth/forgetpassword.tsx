import Router from 'next/router';
import { NextPage } from 'next';
import React, { useContext, useState } from 'react';
import { SnackbarContext } from '../../context/snackbar-context';
import useRequest from '../../hooks/use-request';

const ForgetPassword: NextPage = () => {
  const { toggleSnack } = useContext(SnackbarContext);
  const [email, setEmail] = useState<string>('');
  const { doRequest, errors } = useRequest({
    url: '/api/users/password/',
    method: 'post',
    body: {
      email,
    },
    onSuccess: () => {
      toggleSnack(
        true,
        'success',
        'パスワード再設定用URL通知メールを送信しました!!'
      );
      Router.push('/auth/sentemail');
    },
  });

  const onSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    await doRequest();
  };
  return (
    <form
      onSubmit={onSubmit}
      className="container mx-auto overflow-hidden  max-w-5xl p-4 m-1  bg-white rounded-md shadow-md dark:bg-gray-800"
    >
      <h1 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
        パスワード再設定
      </h1>
      <div className="text-gray-700 dark:text-white">
        <label>ご登録しているメールアドレス</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-50 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
        />
      </div>
      <div className="flex justify-end mt-6">
        <button className="block px-5 py-2 mt-4 font-medium leading-5 text-center text-white capitalize bg-gray-700 rounded-lg lg:mt-0 hover:bg-blue-500 lg:w-autohover:bg-gray-600 focus:outline-none focus:bg-gray-600">
          送信
        </button>
      </div>
      {errors}
    </form>
  );
};

export default ForgetPassword;
